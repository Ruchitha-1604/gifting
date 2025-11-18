import React, { useRef } from 'react'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Typography } from '@/components/general'

const formSchema = z.object({
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
})

function BuyerDetails({
    setBuyer,
    setStep,
    buyer
}: {
    setBuyer: React.Dispatch<React.SetStateAction<{
        firstName: string;
        lastName: string;
        email: string;
    } | null>>;
    buyer: {
        firstName: string;
        lastName: string;
        email: string;
    } | null,
    setStep: React.Dispatch<React.SetStateAction<number>>
}) {
    const formRef = useRef<HTMLFormElement | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: buyer?.firstName || "",
            lastName: buyer?.lastName || "",
            email: buyer?.email || ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setBuyer(values);
        setStep(2);
    }

    return (
        <>
            <section className="bg-[url('/images/squares.png')] relative after:absolute pt-8 lg:pt-14 after:inset-0   after:bg-gradient-to-b after:from-transparent after:to-white bg-cover w-full h-[368px] shrink-0">
                <div className='w-[88%] xl:w-2/3 mx-auto pb-[10.25rem] z-[1000] relative 
                flex flex-col gap-10 md:gap-16'>
                    <div className='flex flex-col gap-4'>
                        <Typography.Heading className='text-primary'>Gift a Report</Typography.Heading>
                        <Typography.Paragraph>Give someone, or yourself, the gift of insight with a Personalized Values Identifier report.</Typography.Paragraph>
                        <Typography.Paragraph>
                            Use the code <span className="font-bold text-[#4179C2]">GIFTVALUES</span> for $10 off each report (valid until 31 December).
                        </Typography.Paragraph>
                        <Typography.Paragraph>Simply enter your details, add the recipient&apos;s name and email, and choose whether you&apos;d like to send the gift anonymously.</Typography.Paragraph>
                        <Typography.Paragraph>Once completed, the recipient(s) will instantly receive an email with a unique link to take the assessment and access their report.</Typography.Paragraph>
                        <Typography.Paragraph>If you&apos;re purchasing it for yourself, you&apos;ll also receive the link right away.</Typography.Paragraph>
                    </div>
                    <div className="md:w-[31rem] flex flex-col gap-6">
                        <Typography.Paragraph className='text-primary font-bold'>Buyer Details</Typography.Paragraph>
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
                    </div>
                </div>
            </section>
            <div className='fixed left-0 right-0 bottom-0 border border-[#cfd7e0] bg-white py-8 z-[2000]'>
                <div className='w-11/12 xl:w-2/3 mx-auto flex justify-end'>
                    <Button onClick={() => formRef.current?.requestSubmit()} type="button">
                        Next
                    </Button>
                </div>
            </div>
        </>
    )
}

export default BuyerDetails