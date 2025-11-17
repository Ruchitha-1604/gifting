"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Typography } from "../general";
import { Svg } from "../other";
import { Api } from "@/lib";

function PaymentSuccess() {
    const searchParams = useSearchParams();
    const session_id = searchParams.get("session_id");
    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

    useEffect(() => {
        const hasShownSuccess = typeof window !== "undefined"
            ? sessionStorage.getItem("hasShownPaymentSuccess")
            : null;

        if (session_id && !hasShownSuccess) {
            const fetchGiftOrder = async () => {
                try {
                    const data = await Api.User.getGiftOrderByPaymentId(session_id);
                    if (data && data.paymentStatus === "paid") {
                        setShowPaymentSuccess(true);
                        sessionStorage.setItem("hasShownPaymentSuccess", "true");
                    }
                } catch (error) {
                    console.error("Failed to fetch gift order:", error);
                }
            };
            fetchGiftOrder();
        }
    }, [session_id]);

    return (
        <Dialog
            open={showPaymentSuccess}
            onOpenChange={() => setShowPaymentSuccess(false)}
        >
            <DialogContent className="w-[90%] sm:max-w-[348px]">
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex-center gap-2">
                            <Svg.Arrow.RoundedCheck />
                            <Typography.Paragraph className="text-[#4179C2] font-bold tracking-wide">
                                Payment Successful
                            </Typography.Paragraph>
                        </div>
                    </DialogTitle>
                </DialogHeader>
                <div className="flex-center flex-col gap-2">
                    <Typography.SubParagraph className="text-center">
                        Your gift of the Values Identifier Assessment has been sent.
                    </Typography.SubParagraph>
                </div>
                <DialogFooter className="sm:justify-center">
                    <Button
                        type="button"
                        className="w-full"
                        onClick={() => setShowPaymentSuccess(false)}
                    >
                        Back
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default PaymentSuccess;

