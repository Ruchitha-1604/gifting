"use client";

import React, { useState } from "react";
import BuyerDetails from "@/components/gar/buyer-details";
import RecipientDetails from "@/components/gar/recipient-details";
import PaymentSuccess from "@/components/gar/payment-success";

type Buyer = { firstName: string; lastName: string; email: string } | null;

export default function GiftAReportPage() {
    const [buyer, setBuyer] = useState<Buyer>(null);
    const [recipients, setRecipients] = useState<
        { firstName: string; lastName: string; email: string; isLocked: boolean }[]
    >([]);
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [step, setStep] = useState(1);

    return (
        <>
            <PaymentSuccess />
            {step === 1 ? (
                <BuyerDetails setBuyer={setBuyer} buyer={buyer} setStep={setStep} />
            ) : (
                buyer &&
                step === 2 && (
                    <RecipientDetails
                        setStep={setStep}
                        buyer={buyer}
                        setRecipients={setRecipients}
                        recipients={recipients}
                        isAnonymous={isAnonymous}
                        setIsAnonymous={setIsAnonymous}
                    />
                )
            )}
        </>
    );
}

