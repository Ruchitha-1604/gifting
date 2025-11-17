import { Svg } from "../other"
import { Button } from "../ui/button"

const RecipientDetailsFooter = ({ handleBack, handleCheckout, handleAddRecipient, total, isLoading }: {
    handleBack: () => void,
    handleCheckout: () => void,
    handleAddRecipient: () => void,
    total: number;
    isLoading: boolean
}) => {
    return <div className='fixed left-0 right-0 bottom-0 border border-[#cfd7e0] bg-white py-4 md:py-8 z-[2000]'>
        <div className='w-11/12 xl:w-2/3 mx-auto flex-col gap-5 md:gap-0 md:flex-row flex md:justify-between md:items-center'>
            <p className='hidden md:flex text-[1.625rem] leading-[2.45rem] font-helvetica 
                    text-popover-text font-bold'>
                ${total}</p>
            <div className='flex justify-between items-center flex-wrap md:flex-center gap-5'>
                <Button onClick={handleBack}
                    className='bg-transparent text-primary border border-primary'>
                    Back
                </Button>
                <Button
                    type="button"
                    onClick={handleAddRecipient}
                    className='bg-transparent text-primary border border-primary flex 
                            justify-between items-center px-4 py-2 gap-4'>
                    <span className='flex-center gap-2'>
                        Add Recipient
                        <Svg.Arrow.RoundedPlus />
                    </span>
                    <span className='bg-[#1035650F] rounded-full py-1 px-2'>$59.99</span>
                </Button>
                <Button
                    disabled={isLoading}
                    className='hidden md:flex' onClick={handleCheckout}>
                    Checkout
                </Button>
            </div>
            <div className='flex md:hidden justify-between items-center flex-wrap gap-5'>
                <p className='text-[1.625rem] leading-[2.45rem] font-helvetica 
                    text-popover-text font-bold'>
                    ${total}</p>
                <Button
                    disabled={isLoading}
                    onClick={handleCheckout}>
                    Checkout
                </Button>
            </div>
        </div>
    </div>
}

export default RecipientDetailsFooter;