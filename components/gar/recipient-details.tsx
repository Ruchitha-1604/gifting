import React, { useRef, useState } from 'react'
import { Typography } from '../general'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '../ui/input';
import { Svg } from '../other';
import RecipientDetailsFooter from './recipient-details-footer';
import { Api, Toast } from '@/lib';
import { cn } from '@/lib/utils';
import { Checkbox } from '../ui/checkbox';
import { getRecipientByEmail, getUserByEmail } from '@/lib/api/user';
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const recipientSchema = z.object({
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    email: z.string().email('Invalid email'),
    isLocked: z.boolean(),
});

type Recipient = z.infer<typeof recipientSchema>;

function RecipientDetails({ setStep, buyer, recipients, setRecipients, isAnonymous, setIsAnonymous }: {
    setStep: React.Dispatch<React.SetStateAction<number>>,
    buyer: { firstName: string, lastName: string, email: string },
    recipients: Recipient[],
    setRecipients: React.Dispatch<React.SetStateAction<Recipient[]>>,
    setIsAnonymous: React.Dispatch<React.SetStateAction<boolean>>,
    isAnonymous: boolean
}) {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<Recipient>({
        resolver: zodResolver(recipientSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            isLocked: false
        },
    });

    const onSubmit = async (data: Recipient) => {
        console.log("activeIndex", activeIndex)
        const normalizedEmail = data.email.toLowerCase();

        const isDuplicate = recipients.some((recipient, index) =>
            recipient.email.toLowerCase() === normalizedEmail &&
            index !== activeIndex
        );

        if (isDuplicate) {
            form.setError("email", {
                type: "manual",
                message: "This email has already been used for a different recipient."
            });
            return;
        }
        const user = await getUserByEmail(data.email);
        console.log("userrr", user)
        const recipient = await getRecipientByEmail(data.email);
        console.log("recipienttttt", recipient)
        if ((user && user.isPaid) || recipient) {
            form.setError("email", {
                type: "manual",
                message: "This email has already received a gifted or purchased assessment.",
            });
            return;
        }
        if (activeIndex !== null) {
            const updatedRecipients = [...recipients];
            updatedRecipients[activeIndex] = { ...data, isLocked: true };
            setRecipients(updatedRecipients);
            setActiveIndex(null);
            form.reset({
                firstName: '',
                lastName: '',
                email: '',
                isLocked: false,
            });
        } else {
            setRecipients([...recipients, { ...data, isLocked: true }]);
            form.reset();
        }
    };

    const handleBack = () => {
        setStep(1);
    }

    const handleAddRecipient = () => {
        if (recipients.length >= 10 && activeIndex === null)
            return Toast.error('Oops! You can add a maximum of 10 recipients only.');
        formRef.current?.requestSubmit()
    }

    const capitalizeFirstLetter = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const formatNameFields = (person: { firstName: string; lastName: string; email: string }) => ({
        ...person,
        firstName: capitalizeFirstLetter(person.firstName),
        lastName: capitalizeFirstLetter(person.lastName),
    });

    const handleCheckout = async () => {
        if (recipients.length === 0) return Toast.error('Please add at least one recipient before proceeding.')
        try {
            setIsLoading(true);
            const stripe = await stripePromise;
            if (!stripe) return;

            const formattedBuyer = formatNameFields(buyer);
            const formattedRecipients = recipients.map(formatNameFields);

            const payload = {
                buyer: formattedBuyer,
                recipient_list: formattedRecipients,
                isAnonymous
            }

            const data = await Api.Gifting.checkout(payload);

            if (data.id) {
                const hasShownSuccess = sessionStorage.getItem("hasShownPaymentSuccess");
                if (hasShownSuccess) {
                    sessionStorage.removeItem("hasShownPaymentSuccess")
                }
                await stripe.redirectToCheckout({ sessionId: data.id });
            }
        } catch (err) {
            Toast.error('Something went wrong while preparing for stripe checkout.')
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    const handleRemove = (index: number) => {
        const updatedRecipients = [...recipients];
        updatedRecipients.splice(index, 1);
        setRecipients(updatedRecipients);
        if (activeIndex === index) setActiveIndex(null);
        form.reset({
            firstName: '',
            lastName: '',
            email: '',
            isLocked: false,
        })
    };

    const handleEdit = (index: number) => {
        const recipient = recipients[index];
        form.reset({ ...recipient, isLocked: false });
        setActiveIndex(index);
    };

    return (
        <>
            <section className="bg-[url('/images/squares.png')] relative after:absolute pt-8 lg:pt-14 after:inset-0   after:bg-gradient-to-b after:from-transparent after:to-white bg-cover w-full h-[368px] shrink-0">
                <div className='w-[88%] xl:w-2/3 mx-auto pb-[10.25rem] z-[1000] relative 
                flex flex-col gap-10 md:gap-16'>
                    <div className='flex flex-col gap-4'>
                        <Typography.Heading className='text-primary'>Gift a Report</Typography.Heading>
                        <Typography.Paragraph>Gift an ultra-personalized Values Identifier report. You can choose to include your name with the gift or opt to send it anonymously.</Typography.Paragraph>
                    </div>
                    <div className='grid grid-cols-1 xl:flex xl:flex-row xl:flex-wrap gap-10'>
                        {recipients.map((recipient, index) => {
                            return <>
                                {
                                    recipient.isLocked && activeIndex !== index ?
                                        <LockedRecipient index={index}
                                            fullName={recipient.firstName + ' ' + recipient.lastName}
                                            onEdit={handleEdit}
                                            onRemove={handleRemove}
                                            key={index}
                                        /> :
                                        <RecipientForm index={index}
                                            length={recipients.length}
                                            onSubmit={onSubmit}
                                            formRef={formRef}
                                            form={form}
                                            key={index}
                                            handleRemove={handleRemove}
                                        />
                                }
                                {index % 2 === 0 && index < recipients.length &&
                                    <div key={index} className='hidden xl:flex w-[2px] bg-[#CFD7E0] shrink-0 self-stretch'></div>}

                                {index <= 8 && index % 2 !== 0 && recipients.length > 0 &&
                                    <div key={index} className='w-full bg-[#CFD7E0] shrink-0 self-stretch h-[1px]'>
                                    </div>
                                }
                            </>
                        })}
                        {activeIndex === null && recipients.length < 10 &&
                            <RecipientForm index={null}
                                length={recipients.length}
                                onSubmit={onSubmit}
                                formRef={formRef}
                                form={form}
                                handleRemove={handleRemove}
                            />
                        }
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            checked={isAnonymous}
                            onCheckedChange={(checked) => {
                                if (typeof checked === "boolean") {
                                    setIsAnonymous(checked)
                                }
                            }}
                            className='border-[#BBBBBB] outline-none
                            data-[state=checked]:bg-[#4179C2] data-[state=checked]:text-primary-foreground'
                            id="anonymous"
                        />
                        <label
                            htmlFor="anonymous"
                            className={cn(
                                "text-sm",
                                isAnonymous ? "text-foreground" : "text-[#BBBBBB]",
                                "hover:text-foreground"
                            )}
                        >
                            I want to remain anonymous.
                        </label>
                    </div>
                </div>
            </section>
            <RecipientDetailsFooter handleBack={handleBack}
                handleCheckout={handleCheckout}
                isLoading={isLoading}
                handleAddRecipient={handleAddRecipient}
                total={(recipients.length * 59.99)}
            />
        </>
    )
}

export default RecipientDetails


const LockedRecipient = ({ fullName, index, onEdit, onRemove }: {
    fullName: string,
    index: number,
    onEdit: (index: number) => void,
    onRemove: (index: number) => void,
}) => {
    return <div className='xl:flex-1 border border-[#10356533] rounded-lg 
                                    p-4 xl:py-2 xl:px-3 bg-background flex xl:items-center flex-col xl:flex-row 
                                    xl:justify-between gap-2 xl:gap-4 h-fit'>
        <div className='flex justify-between items-center xl:flex-center gap-2'>
            <Typography.SubText className='text-primary font-bold'>
                {fullName}</Typography.SubText>
            <div className='bg-[#4179C21A] py-2 px-4 rounded-full '>
                <Typography.SubText className='font-bold text-[#4179C2]'>
                    $59.99
                </Typography.SubText>
            </div>
        </div>
        <div className='flex w-fit xl:flex-center gap-2'>
            <RecipientButton onClick={() => onEdit(index)}>
                <span>Edit</span><Svg.Arrow.Edit className='w-[14px] h-[14px] shrink-0' />
            </RecipientButton>
            <RecipientButton onClick={() => onRemove(index)}>
                <span>Remove</span><Svg.Arrow.Close className='w-[14px] h-[14px] shrink-0' />
            </RecipientButton>
        </div>
    </div>
}

const RecipientButton = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => {
    return <button
        onClick={onClick}
        className='py-2 px-4 border border-[#4179C2] bg-white  
                        text-[#4179C2] font-bold flex-center gap-1 text-sm font-helvetica rounded-3xl w-fit 
                        ml-auto tracking-wide'>
        {children}
    </button>
}

const RecipientForm = ({ index, length, onSubmit, formRef, form, handleRemove }: {
    index: number | null,
    length: number,
    onSubmit: (data: Recipient) => void,
    formRef: React.MutableRefObject<HTMLFormElement | null>,
    form: ReturnType<typeof useForm<Recipient>>,
    handleRemove: (index: number) => void;
}) => {

    return <div className='xl:w-[34rem] flex flex-col gap-8'>
        <div className="flex justify-between items-center">
            <div className="flex-center gap-4">
                <Typography.Paragraph className="text-primary font-bold">Recipient Details</Typography.Paragraph>
                <div className="py-2 px-4 bg-[#4179C21A] rounded-3xl">
                    <Typography.SubText className="text-[#4179C2] font-bold">$59.99</Typography.SubText>
                </div>
            </div>
            <Typography.SubText className="text-[#4179C2] font-bold">
                {String(index !== null ? index + 1 : length + 1).padStart(2, '0')}
            </Typography.SubText>
        </div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="gap-4 grid grid-cols-1 md:grid-cols-2"
                ref={formRef}>
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input placeholder="First Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Last Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className='md:col-span-2'>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
        {index !== null &&
            <RecipientButton onClick={() => { handleRemove(index) }}
            >
                <span>Remove</span><Svg.Arrow.Close className='w-[14px] h-[14px] shrink-0' />
            </RecipientButton>
        }
    </div>
};
