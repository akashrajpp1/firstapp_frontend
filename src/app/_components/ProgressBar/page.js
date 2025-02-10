"use client";
import { useEffect, useRef, useState } from "react";
import "./progress.css";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

const ProgressBar = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [currentApplication, setCurrentApplication] = useState({});
    const messageDivRef = useRef(null);
    const { id } = useParams();



    let payProcessingContent = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #0056b3;">Important Update: Next Steps for Your Loan Disbursement</h2>
    
    <p>Dear <strong>${currentApplication.name}</strong>,</p>
    
    <p>Congratulations! We are pleased to inform you that your loan application has been reviewed by our team and is currently under process. To ensure the smooth disbursement of your loan, there are a few critical steps to complete.</p>
    
    <h3 style="color: #0056b3;">Mandatory Fees for Loan Disbursement</h3>
    <p>To proceed with the loan disbursement, it is essential to pay the following fees:</p>
    
    <ol>
        <li>
            <strong>Processing Fee</strong>: This fee covers the administrative costs associated with handling and processing your loan application.
            <ul>
                <li><strong>Amount:</strong> ${currentApplication.processingFee}</li>
                <li><strong>Purpose:</strong> Ensures that all necessary documentation, evaluation, and verification are conducted accurately and efficiently.</li>
            </ul>
        </li>
        <li>
            <strong>Insurance Fee</strong>: This fee provides coverage to secure your loan and mitigate risks.
            <ul>
                <li><strong>Amount:</strong> ${currentApplication.insuranceFee}</li>
                <li><strong>Purpose:</strong> Safeguards both you and the lender in case of unforeseen circumstances.</li>
            </ul>
        </li>
    </ol>
    
    <p><strong>Please note that the payment of these fees is mandatory and must be completed before your loan can be disbursed.</strong></p>
    
    <h3 style="color: #0056b3;">How to Make the Payments</h3>
    <ol>
        <li>
            <strong>Processing Fee Payment:</strong>
            <ul>
                <li>Transfer the fee amount to the following account:</li>
                <ul>
                    <li><strong>Account Name:</strong> ${currentApplication.name}</li>
                    <li><strong>Account Number:</strong> ${currentApplication.bankaccount}</li>
                    <li><strong>Bank Name:</strong> ${currentApplication.bankname}</li>
                    <li><strong>IFSC Code:</strong> ${currentApplication.bankifsc}</li>
                </ul>
                <li>Once the payment is made, kindly send a confirmation receipt to <a href="mailto:support@shaniloan.in">support@dhaniloan.in</a>.</li>
            </ul>
        </li>
        <li>
            <strong>Insurance Fee Payment:</strong>
            <ul>
                <li>The insurance fee can be paid using any of the following methods:</li>
                <ul>
                    <li>Our support team will contact you soon and guide you through the payment</li>
                </ul>
                <li>After the payment, please upload the proof of payment on your loan dashboard or email it to <a href="mailto:support@dhaniloan.in">support@dhaniloan.in</a>.</li>
            </ul>
        </li>
    </ol>
    
    <h3 style="color: #0056b3;">Next Steps After Payment</h3>
    <p>
        Once the fees are successfully received, our team will update your application status within <strong>24 hours</strong>.
        A representative from our support team will contact you to confirm the details and provide further instructions regarding the disbursement process.
    </p>
    
    <p>We emphasize the importance of completing these payments at the earliest to avoid delays in your loan disbursement. Should you have any questions or require assistance with the payment process, feel free to contact our customer support team at <a href="mailto:support@dhaniloan.in">support@dhaniloan.in</a>.</p>
    
    <p>Thank you for choosing <strong>Dhani Finance PVT LTD</strong> as your trusted financial partner. We look forward to serving you.</p>
</div>
`

    let applicationReviewedHtml = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #0056b3;">Loan Application Received</h2>

    <p>Dear <strong>${currentApplication.name}</strong>,</p>

    <p>Thank you for submitting your loan application. We are pleased to inform you that it has been <strong>successfully received</strong> and is currently under review by our loan department.</p>

    <h3 style="color: #0056b3;">What Happens Next?</h3>
    <p>Please allow some time for the necessary <strong>assessments</strong> and <strong>processing</strong> to be completed. Our team is thoroughly reviewing your application to ensure all required details and documentation meet the standards necessary for approval.</p>

    <p>Once the review process is completed and your loan status has been updated, a member of our team will promptly contact you. They will provide further information regarding your application and discuss the next steps, if necessary.</p>

    <h3 style="color: #0056b3;">We Appreciate Your Patience</h3>
    <p>We understand that this is an important process for you, and we are committed to handling your application with the utmost care and diligence. Your patience and understanding during this time are greatly appreciated.</p>

    <p>If you have any questions or need assistance while your application is under review, please do not hesitate to contact our support team at <a href="mailto:support@dhaniloan.in">support@dhaniloan.in</a>.</p>

    <p>Thank you for choosing <strong>Dhani Finance PVT LTD</strong> as your financial partner. We look forward to serving you.</p>
</div>
`

    let underProcessHtml = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #0056b3;">Loan Application Update</h2>

    <p>Dear <strong>${currentApplication.name}</strong>,</p>

    <p><strong>Congratulations!</strong> We are pleased to inform you that your loan application has been <strong>reviewed</strong> by our team and is now under process.</p>

    <h3 style="color: #0056b3;">What You Can Expect</h3>
    <p>Please allow some time while we update your application status. This process typically takes up to <strong>24 hours</strong>. After the update is completed, a member of our support team will contact you to provide further details or discuss the next steps in your loan journey.</p>

    <p>We are committed to ensuring a smooth and efficient process and appreciate your patience during this time.</p>

    <h3 style="color: #0056b3;">Need Assistance?</h3>
    <p>If you have any questions or need further assistance, please do not hesitate to reach out to our support team at <a href="mailto:support@dhaniloan.in">support@dhaniloan.in</a>.</p>

    <p>Thank you for choosing <strong>Dhani Finance PVT LTD</strong> as your trusted financial partner. We look forward to assisting you further.</p>
</div>
`

    let loanApprovedHtml = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #0056b3;">Loan Approval Notification</h2>

    <p>Dear <strong>${currentApplication.name}</strong>,</p>

    <p><strong>Congratulations!</strong> We are thrilled to inform you that your loan application has been <strong>approved</strong> by our team.</p>

    <h3 style="color: #0056b3;">What Happens Next?</h3>
    <p>Our team will now proceed with the final steps to disburse the approved loan amount to your designated bank account. You will receive an official notification once the disbursement process has been completed.</p>

    <h3 style="color: #0056b3;">Important Note</h3>
    <p>Please ensure that all required formalities, including submission of any remaining documents or payment of applicable processing fees, are completed at the earliest to avoid any delays.</p>

    <h3 style="color: #0056b3;">Need Assistance?</h3>
    <p>If you have any questions or need further assistance, please feel free to reach out to our support team at <a href="mailto:support@dhaniloan.in">support@dhaniloan.in</a> or call us at <strong>[Support Phone Number]</strong>.</p>

    <p>Thank you for choosing <strong>Dhani Finance PVT LTD</strong> as your trusted financial partner. We are committed to providing you with exceptional service and support throughout your loan journey.</p>
</div>
`;

    let loanDisbursedHtml = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #0056b3;">Loan Disbursement Notification</h2>

    <p>Dear <strong>${currentApplication.name}</strong>,</p>

    <p><strong>Congratulations!</strong> We are pleased to inform you that your loan has been successfully <strong>disbursed</strong> and the approved amount has been transferred to your designated bank account.</p>

    <h3 style="color: #0056b3;">What to Expect Next?</h3>
    <p>We recommend that you check your account for the transfer. If you do not see the funds in your account within the next 24-48 hours, please contact our support team for assistance.</p>

    <h3 style="color: #0056b3;">Important Reminder</h3>
    <p>We advise you to review the terms of the loan and ensure timely repayments. This will help you maintain a good credit score and avoid any penalties or fees. If you have any questions about repayment schedules, please reach out to us.</p>

    <h3 style="color: #0056b3;">Need Assistance?</h3>
    <p>If you have any questions or require further support, feel free to contact our support team at <a href="mailto:support@dhaniloan.in">support@dhaniloan.in</a> or call us at <strong>[Support Phone Number]</strong>.</p>

    <p>Thank you for choosing <strong>Dhani Finance PVT LTD</strong> as your trusted financial partner. We are excited to support you throughout your loan journey and ensure a seamless experience.</p>
</div>
`;

    const totalSteps = [
        { status: "application_received", text: "Application Received", id: 1, message: applicationReviewedHtml },
        { status: "under_process", text: "Under Process", id: 2, message: underProcessHtml },
        { status: "loan_approved", text: "Loan Approved", id: 3, message: loanApprovedHtml },
        { status: "pay_processing", text: "Pay Processing", id: 4, message: payProcessingContent },
        { status: "loan_disbursed", text: "Loan Disbursed", id: 5, message: loanDisbursedHtml },
    ];

    const updateSteps = (direction) => {
        if (direction === "next" && currentStep < totalSteps.length) {
            setCurrentStep((prevStep) => prevStep + 1);
        } else if (direction === "prev" && currentStep > 1) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
    };

    const fetchApplication = async () => {
        try {
            // Reference to the document in the "queries" collection
            let colRef = doc(db, "queries", id);

            // Fetch the document snapshot
            let dataSnapshot = await getDoc(colRef);

            if (dataSnapshot.exists()) {
                // Access the data of the document using .data()
                const data = dataSnapshot.data();
                console.log(data, "Data Current Application");

                // Update the state with the document data
                setCurrentApplication(data);

                // Find the current stage based on the application status
                let currentStage = totalSteps.find(a => a.text === data.status);

                // Update the current step state if the stage was found
                if (currentStage) {
                    setCurrentStep(currentStage.id);

                } else {
                    console.log("Current stage not found.");
                }
            } else {
                console.log("No such document!");
            }
        } catch (err) {
            console.log("Error fetching application:", err);
        }
    }


    useEffect(() => {
        fetchApplication();

    }, []);

    useEffect(() => {
        document.getElementById("message_content").innerHTML = totalSteps[currentStep + 1].message;
    }, [currentStep])


    // Only render content when `currentApplication` is available
    if (!currentApplication) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <main className="main-wrapper">
                <div className="steps-wrapper">
                    <div className="steps">
                        {totalSteps.map((step, index) => (
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "0.9rem", textAlign: "center", gap: 12 }} key={step.id} className="step-wrapper">
                                <span style={{ height: "4vh", width: "4vh", fontSize: "2vh" }}
                                    className={`step ${index < currentStep ? "active" : ""}`}
                                >
                                    {index + 1}
                                </span>
                                <p style={{ width: "100%", marginTop: 5, marginTop: 22, fontSize: "2vh", lineHeight: 1 }} className={`${index < currentStep ? "step-text" : ""}`} >{step.text}</p>
                            </div>
                        ))}
                        <div className="progress-bar">
                            <span
                                className="progress"
                                style={{
                                    width: `${((currentStep - 1) / (totalSteps.length - 1)) * 100}%`,
                                }}
                            ></span>
                        </div>
                    </div>
                    {/* <div className="buttons">
                        <button
                            className="btn btn-prev"
                            onClick={() => updateSteps("prev")}
                            disabled={currentStep === 1}
                        >
                            Previous
                        </button>
                        <button
                            className="btn btn-next"
                            onClick={() => updateSteps("next")}
                            disabled={currentStep === totalSteps.length}
                        >
                            Next
                        </button>
                    </div> */}

                </div>
            </main>
            <div id="message_content" className="message_content" ref={messageDivRef} >

            </div>
        </>
    );
};

export default ProgressBar;
