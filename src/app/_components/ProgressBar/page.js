"use client";
import { useEffect, useRef, useState } from "react";
import "./progress.css";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

const ProgressBar = ({ currentapplication, profile }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [currentApplication, setCurrentApplication] = useState({});
    const [currentStatus, setCurrentStatus] = useState({});
    const messageDivRef = useRef(null);
    const { id } = useParams();



    let payProcessingContent = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #0056b3;">Important Update: Next Steps for Your Loan Disbursement</h2>
    
    <p>Dear <strong>${currentapplication.name}</strong>,</p>
    
    <p>Thank you for successfully completing the payment of your <strong>processing fee</strong>. Your loan application is now in its final stage, and the next step for disbursement is the payment of the <strong>insurance fee</strong>.</p>

    <h3 style="color: #0056b3;">Why Is the Insurance Fee Important?</h3>
    <p>The insurance fee ensures that your loan remains secured and protects both you and the lender in case of any unforeseen circumstances. This coverage acts as financial security and helps in mitigating risks associated with repayment difficulties.</p>

    <h3 style="color: #0056b3;">Next Step: Pay the Insurance Fee</h3>
    <p>To proceed with your loan disbursement, please complete the payment of the <strong>insurance fee</strong> at the earliest. Our <strong>Customer Relationship Manager</strong> will reach out to you shortly with further details regarding the payment process.</p>

    <ul>
        <li><strong>Insurance Fee Amount:</strong> Rs ${currentapplication.insuranceFee}</li>
        <li><strong>Purpose:</strong> Provides financial protection and ensures a hassle-free loan experience.</li>
    </ul>

    <h3 style="color: #0056b3;">How to Pay the Insurance Fee?</h3>
    <ul>
        <li>Our support team will contact you soon with payment details.</li>
        <li>Once the payment is made, kindly upload the payment receipt on your loan dashboard or email it to <a href="mailto:${profile.email}">${profile.email}</a>.</li>
    </ul>

    <h3 style="color: #0056b3;">Final Loan Disbursement</h3>
    <p>Once the insurance fee is received and verified, the loan amount will be disbursed to your registered bank account within <strong>24 hours</strong>. Our team will provide confirmation upon successful disbursement.</p>

    <p>For any questions or assistance, feel free to contact our customer support team at <a href="mailto:${profile.email}">${profile.email}</a>.</p>

    <p>Thank you for choosing <strong>Dhani Finance PVT LTD</strong> as your trusted financial partner. We look forward to serving you.</p>
</div>`;


    let applicationReviewedHtml = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #0056b3;">Loan Application Received</h2>

    <p>Dear <strong>${currentapplication.name}</strong>,</p>

    <p>Thank you for submitting your loan application. We are pleased to inform you that it has been <strong>successfully received</strong> and is currently under review by our loan department.</p>

    <h3 style="color: #0056b3;">What Happens Next?</h3>
    <p>Please allow some time for the necessary <strong>assessments</strong> and <strong>processing</strong> to be completed. Our team is thoroughly reviewing your application to ensure all required details and documentation meet the standards necessary for approval.</p>

    <p>Once the review process is completed and your loan status has been updated, a member of our team will promptly contact you. They will provide further information regarding your application and discuss the next steps, if necessary.</p>

    <h3 style="color: #0056b3;">We Appreciate Your Patience</h3>
    <p>We understand that this is an important process for you, and we are committed to handling your application with the utmost care and diligence. Your patience and understanding during this time are greatly appreciated.</p>

    <p>If you have any questions or need assistance while your application is under review, please do not hesitate to contact our support team at <a href="mailto:${profile.email}">${profile.email}</a>.</p>

    <p>Thank you for choosing <strong>Dhani Finance PVT LTD</strong> as your financial partner. We look forward to serving you.</p>
</div>
`

    let underProcessHtml = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #0056b3;">Loan Application Update</h2>

    <p>Dear <strong>${currentapplication.name}</strong>,</p>

    <p><strong>Congratulations!</strong> We are pleased to inform you that your loan application has been <strong>reviewed</strong> by our team and is now under process.</p>

    <h3 style="color: #0056b3;">What You Can Expect</h3>
    <p>Please allow some time while we update your application status. This process typically takes up to <strong>24 hours</strong>. After the update is completed, a member of our support team will contact you to provide further details or discuss the next steps in your loan journey.</p>

    <p>We are committed to ensuring a smooth and efficient process and appreciate your patience during this time.</p>

    <h3 style="color: #0056b3;">Need Assistance?</h3>
    <p>If you have any questions or need further assistance, please do not hesitate to reach out to our support team at <a href="mailto:${profile.email}">${profile.email}</a>.</p>

    <p>Thank you for choosing <strong>Dhani Finance PVT LTD</strong> as your trusted financial partner. We look forward to assisting you further.</p>
</div>
`

    let loanApprovedHtml = ` <div style = "font-family: Arial, sans-serif; line-height: 1.6; color: #333;" >
    <h2 style="color: #0056b3;">Loan Approval Notification</h2>

    <p>Dear <strong>${currentapplication.name}</strong>,</p>

    <p><strong>Congratulations!</strong> We are thrilled to inform you that your loan application has been <strong>approved</strong> by our team.</p>

    <h3 style="color: #0056b3;">What Happens Next?</h3>
    <p>Our team will now proceed with the final steps to disburse the approved loan amount to your designated bank account. You will receive an official notification once the disbursement process has been completed.</p>

    <h3 style="color: #0056b3;">Processing Fee Payment</h3>
    <p>Before we can proceed with the loan disbursement, you are required to pay a <strong>processing fee</strong>. This is a mandatory step, and the disbursement will be initiated only after the fee has been received.</p>

    <p>Our <strong>Customer Relationship Manager</strong> will contact you soon with the necessary details for processing fee payment and guide you through the next steps.</p>

    <h3 style="color: #0056b3;">Important Note</h3>
    <p>Please ensure that all required formalities, including submission of any remaining documents and processing fee payment, are completed at the earliest to avoid any delays.</p>

    <h3 style="color: #0056b3;">Need Assistance?</h3>
    <p>If you have any questions or need further assistance, please feel free to reach out to our support team at <a href="mailto:${profile.email}">${profile.email}</a> or call us at <strong>+91-${profile.mobile}</strong>.</p>

    <p>Thank you for choosing <strong>Dhani Finance PVT LTD</strong> as your trusted financial partner. We are committed to providing you with exceptional service and support throughout your loan journey.</p>
</div > `;


    let loanDisbursedHtml = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #0056b3;">Loan Disbursement Notification</h2>

    <p>Dear <strong>${currentapplication.name}</strong>,</p>

    <p><strong>Congratulations!</strong> We are pleased to inform you that your loan has been successfully <strong>disbursed</strong> and the approved amount has been transferred to your designated bank account.</p>

    <h3 style="color: #0056b3;">What to Expect Next?</h3>
    <p>We recommend that you check your account for the transfer. If you do not see the funds in your account within the next 24-48 hours, please contact our support team for assistance.</p>

    <h3 style="color: #0056b3;">Important Reminder</h3>
    <p>We advise you to review the terms of the loan and ensure timely repayments. This will help you maintain a good credit score and avoid any penalties or fees. If you have any questions about repayment schedules, please reach out to us.</p>

    <h3 style="color: #0056b3;">Need Assistance?</h3>
    <p>If you have any questions or require further support, feel free to contact our support team at <a href="mailto:${profile.email}">${profile.email}</a> or call us at <strong>+91-${profile.mobile}</strong>.</p>

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
                console.log(currentStage, "Current Stage");

                // Update the current step state if the stage was found
                if (Object.values(currentStage).length) {
                    setCurrentStep(currentStage.id);
                    setCurrentStatus(currentStage);
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
        document.getElementById("message_content").innerHTML = currentStatus.message;
    }, [currentStatus])


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
