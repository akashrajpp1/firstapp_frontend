"use client"

import { useRef, useState } from "react"
import { db } from "@/lib/firebase/config";
import { setDoc, doc, updateDoc, Timestamp, getDocs, collection, where, query } from "firebase/firestore";
import { useRouter, useParams } from "next/navigation";
import { toast } from "react-toastify";

const LoanForm = () => {
    const [currentFormStep, setCurrentFormStep] = useState(0);
    const [docId, setDocId] = useState(null);;
    const nameRef = useRef(null);
    const mobileRef = useRef(null);
    const whatsappRef = useRef(null);
    const emailRef = useRef(null);
    const adhaarRef = useRef(null);
    const panRef = useRef(null);
    const bankAccountRef = useRef(null);
    const bankNameRef = useRef(null);
    const bankIfscRef = useRef(null);
    const cityRef = useRef(null);
    const [selectedState, setSelectedState] = useState(null);
    const pincodeRef = useRef(null);
    const loanAmountRef = useRef(null);
    const [selectedLoanType, setSelectedLoanType] = useState(null);
    const [selectedTenure, setSelectedTenure] = useState(null);
    const processingFeeRef = useRef(null);
    const insuranceFeeRef = useRef(null);
    const nocFeeRef = useRef(null);
    const holdChargeFee = useRef(null);

    const router = useRouter();
    const params = useParams();

    console.log(params, "Params")

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        whatsapp: "",
        email: "",
        adhaar: "",
        PAN: "",
        bankaccount: "",
        bankname: "",
        bankifsc: "",
        city: "",
        state: "",
        pincode: "",
        loanamount: null,
        loantype: "",
        tenure: null,
        processingFee: 2450,
        insuranceFee: 6666,
        nocFee: 22555,
        holdChargeFee: 11999,
        status: "New Lead"
    });

    function generateUniqueId() {
        const prefix = "DFL-";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let uniqueId = "";

        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            uniqueId += characters[randomIndex];
        }

        return prefix + uniqueId;
    }

    function calculateEMI(loanAmount, annualInterestRate, tenureInYears) {
        // Convert annual interest rate to monthly interest rate
        const monthlyInterestRate = annualInterestRate / (12 * 100);

        // Convert tenure in years to number of months
        const tenureInMonths = tenureInYears * 12;

        // Calculate EMI using the formula
        const emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureInMonths) /
            (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);

        // Return the EMI rounded to 2 decimal places
        return emi.toFixed(2);
    }

    function calculateTotalLoanAmount(loanAmount, tenure, annualInterestRate) {
        // Convert annual interest rate to monthly interest rate (in decimal)
        const monthlyInterestRate = annualInterestRate / 100 / 12;

        // Calculate the total loan amount due using the formula for compound interest
        const totalAmountDue = loanAmount * Math.pow(1 + monthlyInterestRate, tenure);

        // Round the result to two decimal places for currency format
        return totalAmountDue.toFixed(2);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        if (currentFormStep === 0) {
            setFormData({ ...formData, name: nameRef.current.value, mobile: mobileRef.current.value });
            let colRef = collection(db, "queries");
            let documentQuery = query(colRef, where("mobile", "==", mobileRef.current.value));
            let data = await getDocs(documentQuery);
            console.log(colRef, "Checking colref by Mobile");
            data = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            console.log(data, "Checking data by Mobile");
            let dataObj = { fullname_lower: nameRef.current.value.toLowerCase(), mobile: mobileRef.current.value, createdAt: Timestamp.now() }
            console.log({ fullname: nameRef.current.value, mobile: mobileRef.current.value }, "Form Data");
            if (!data.length) {
                try {
                    let uniqueId = generateUniqueId();
                    console.log(uniqueId, "UniqueID");
                    let docRef = await setDoc(doc(db, "queries", uniqueId), { ...formData, ...dataObj });
                    console.log(docRef, "Response");
                    setDocId(uniqueId);
                    setCurrentFormStep(1);
                } catch (err) {
                    console.log(err);
                }
            } else {
                toast.error("Phone Number Already Exists!");
            }
        }
        if (currentFormStep === 1) {
            let dataObj = { whatsapp: whatsappRef.current.value, email: emailRef.current.value, adhaar: adhaarRef.current.value, PAN: panRef.current.value, createdAt: Timestamp.now() };
            console.log(dataObj, "Data Obj");

            let colRef = collection(db, "queries");
            let dataQuery = query(colRef, where("email", "==", emailRef.current.value));
            let data = await getDocs(dataQuery);
            data = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            if (!data.length) {
                try {
                    console.log(docId, "DocID")
                    let docRef = doc(db, "queries", docId);
                    let response = await updateDoc(docRef, { ...formData, ...dataObj });
                    setFormData({ ...formData, whatsapp: whatsappRef.current.value, email: emailRef.current.value, adhaar: adhaarRef.current.value, PAN: panRef.current.value })
                    console.log(response, "Form Data");
                    setCurrentFormStep(2);
                } catch (err) {
                    console.log(err);
                }
            } else {
                toast.error("Email already exists!")
            }

        }

        if (currentFormStep == 2) {
            let dataObj = { ...formData, bankaccount: bankAccountRef.current.value, bankname: bankNameRef.current.value, bankifsc: bankIfscRef.current.value, createdAt: Timestamp.now() };
            try {
                console.log(docId, "DocID")
                let docRef = doc(db, "queries", docId);
                let response = await updateDoc(docRef, { ...formData, ...dataObj });
                setFormData({ ...formData, bankaccount: bankAccountRef.current.value, bankname: bankNameRef.current.value, bankifsc: bankIfscRef.current.value })
                console.log(response, "Form Data");
                setCurrentFormStep(3);
            } catch (err) {
                console.log(err);
            }
        }

        if (currentFormStep == 3) {
            let dataObj = { ...formData, city: cityRef.current.value, state: selectedState, pincode: pincodeRef.current.value, loanamount: loanAmountRef.current.value, loantype: selectedLoanType, tenure: selectedTenure, createdAt: Timestamp.now() };
            try {
                console.log(docId, "DocID")
                let docRef = doc(db, "queries", docId);
                let response = await updateDoc(docRef, { ...formData, ...dataObj });
                setFormData({ ...formData, city: cityRef.current.value, state: selectedState, pincode: pincodeRef.current.value, loanamount: loanAmountRef.current.value, loantype: selectedLoanType, tenure: selectedTenure })
                console.log(response, "Form Data");
                setCurrentFormStep(3);
                document.getElementById("loader").style.display = "flex";
                await fetch("/api/send-email/loan-received", { method: "POST", body: JSON.stringify({ refId: docId, name: formData.name, to: formData.email, amount: loanAmountRef.current.value, tenure: selectedTenure }), headers: { 'Content-Type': "application/json" } });
                document.getElementById("loader").style.display = "none";
                setCurrentFormStep(4);
            } catch (err) {
                console.log(err);
            }
        }


    }

    return <>
        <form
            method="POST"
            className="hide-pa"
            style={{ padding: 5 }}
            onSubmit={submitForm}
        >
            <input
                type="hidden"
                name="_token"
                defaultValue="Z8pg9Bn2uwiaxJhjrNsnA7wsJIKCMaBTMfXQCbbv"
                autoComplete="off"
            />
            <h3 className="pb-3 text-warning text-center">
                Swift Loan Approval
            </h3>
            {/* Step 1: Personal Information */}
            {currentFormStep == 0 && <div className="" bis_skin_checked={1}>
                <div className="row list-input" bis_skin_checked={1}>
                    <input
                        className="form-control"
                        type="hidden"
                        name="processing_free"
                        defaultValue={2450}
                    />
                    <input
                        className="form-control"
                        type="hidden"
                        name="helth_insorence_free"
                        defaultValue={6666}
                    />
                    <input
                        className="form-control"
                        type="hidden"
                        name="noc_free"
                        defaultValue={22555}
                    />
                    <input
                        className="form-control"
                        type="hidden"
                        name="holdcharge"
                        defaultValue={11999}
                    />
                    <div className="col-md-12 mb-4" bis_skin_checked={1}>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            ref={nameRef}
                            defaultValue=""
                            required=""
                        />
                    </div>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <input
                            className="form-control"
                            type="number"
                            name="mobile"
                            maxLength={10}
                            placeholder="Mobile No"
                            ref={mobileRef}
                            defaultValue=""
                            required=""
                        />
                    </div>
                    <p className="text-center pt-3 text-white">
                        {" "}
                        By clicking "Apply Now" you agree to the{" "}
                        <a href="" className="text-warning">
                            Privacy Policy , Terms of Use &amp; Terms &amp;
                            Conditions
                        </a>{" "}
                        of India dhani service
                    </p>
                    <div className="col-md-12 mt-4 mb-4" bis_skin_checked={1}>
                        <div
                            className="d-grid gap-1  mx-auto"
                            bis_skin_checked={1}
                        >
                            <button
                                type="submit"
                                className="btn btn-warning btn-lg"
                                style={{ background: "#004795" }}
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
            {/* Step 2: Identification & Bank Details */}
            {currentFormStep == 1 && <div className="" bis_skin_checked={1}>
                <div className="row list-input" bis_skin_checked={1}>
                    <h4 className="pb-3">Identification Details</h4>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <input
                            className="form-control"
                            type="text"
                            name="whatsappnumber"
                            placeholder="WhatsApp No."
                            defaultValue=""
                            disabled=""
                            required=""
                            ref={whatsappRef}
                        />
                    </div>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Email"
                            defaultValue=""
                            disabled=""
                            required=""
                            ref={emailRef}
                        />
                    </div>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <input
                            className="form-control"
                            type="text"
                            name="aadharno"
                            maxLength={12}
                            minLength={12}
                            placeholder="Aadhar No."
                            defaultValue=""
                            disabled=""
                            required=""
                            ref={adhaarRef}
                        />
                    </div>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <input
                            className="form-control"
                            type="text"
                            name="pancard"
                            placeholder="Pan No."
                            defaultValue=""
                            disabled=""
                            required=""
                            pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                            ref={panRef}
                        // onKeyUp="this.value = this.value.toUpperCase();"
                        />
                    </div>
                    <div className="col-md-12 mt-4 mb-4" bis_skin_checked={1}>
                        <div
                            className="d-grid gap-1  mx-auto"
                            bis_skin_checked={1}
                        >
                            <button
                                type="submit"
                                className="btn btn-warning btn-lg"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
            {/* Step 3: Loan Details */}
            {currentFormStep == 2 && <div className="" bis_skin_checked={1}>
                <div className="row list-input" bis_skin_checked={1}>
                    <h4 className="pb-3">Bank Details</h4>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <input
                            className="form-control"
                            type="text"
                            name="bankaccountno"
                            placeholder="Bank Account Number"
                            defaultValue=""
                            disabled=""
                            required=""
                            ref={bankAccountRef}
                        />
                    </div>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <input
                            className="form-control"
                            type="text"
                            name="bankname"
                            placeholder="Bank Name"
                            defaultValue=""
                            disabled=""
                            required=""
                            ref={bankNameRef}
                        />
                    </div>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <input
                            className="form-control"
                            type="text"
                            name="bankifsccode"
                            placeholder="Bank IFSC"
                            defaultValue=""
                            disabled=""
                            required=""
                            ref={bankIfscRef}
                        />
                    </div>
                    <div className="col-md-12 mt-4 mb-4" bis_skin_checked={1}>
                        <div
                            className="d-grid gap-1  mx-auto"
                            bis_skin_checked={1}
                        >
                            <button
                                type="submit"
                                className="btn btn-warning btn-lg"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
            {/* Step 4: City and Loan Details */}
            {currentFormStep == 3 && <div className="" bis_skin_checked={1}>
                <div className="row list-input" bis_skin_checked={1}>
                    <h4 className="pb-3">Other Details</h4>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <input
                            className="form-control"
                            type="text"
                            name="city"
                            placeholder="City"
                            disabled=""
                            defaultValue=""
                            required=""
                            ref={cityRef}
                        />
                    </div>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <select
                            className="form-control"
                            name="state"
                            disabled=""
                            required=""
                            onChange={(e) => setSelectedState(e.target.value)}
                        >
                            <option
                                className="placeholder"
                                value=""
                                selected="selected"
                            >
                                Select State
                            </option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">
                                Arunachal Pradesh
                            </option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">
                                Himachal Pradesh
                            </option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="jammu & kashmir">
                                Jammu &amp; kashmir
                            </option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <input
                            className="form-control"
                            type="number"
                            name="pincode"
                            disabled=""
                            placeholder="Pin Code"
                            defaultValue=""
                            pattern="[0-9]{6}"
                            required=""
                            ref={pincodeRef}
                            data-gtm-form-interact-field-id={2}
                        />
                    </div>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <select
                            className="form-control"
                            name="loantype"
                            disabled=""
                            required=""
                            onChange={(e) => setSelectedLoanType(e.target.value)}
                        >
                            <option
                                className="placeholder"
                                value=""
                                selected="selected"
                            >
                                Select Loan Type
                            </option>
                            <option value="Personal Loan">Personal Loan</option>
                            <option value="Home Loan">Home Loan</option>
                            <option value="Business Loan">Business Loan</option>
                            <option value="Education Loan">Education Loan</option>
                            <option value="Property Loan">Property Loan</option>
                        </select>
                    </div>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <input
                            className="form-control"
                            type="number"
                            name="loanamoun"
                            placeholder="Loan Amount"
                            defaultValue=""
                            disabled=""
                            required=""
                            ref={loanAmountRef}
                        />
                    </div>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <select
                            className="form-control"
                            name="loantenure"
                            disabled=""
                            required=""
                            onChange={(e) => setSelectedTenure(e.target.value)}
                        >
                            <option selected="selected" value="">
                                Select Tenure
                            </option>
                            <option value={1}>1 Year</option>
                            <option value={2}>2 Year</option>
                            <option value={3}>3 Year</option>
                            <option value={4}>4 Year</option>
                            <option value={5}>5 Year</option>
                            <option value={6}>6 Year</option>
                            <option value={7}>7 Year</option>
                            <option value={8}>8 Year</option>
                            <option value={9}>9 Year</option>
                            <option value={10}>10 Year</option>
                            <option value={11}>11 Year</option>
                            <option value={12}>12 Year</option>
                            <option value={13}>13 Year</option>
                            <option value={14}>14 Year</option>
                            <option value={15}>15 Year</option>
                            <option value={16}>16 Year</option>
                            <option value={17}>17 Year</option>
                            <option value={18}>18 Year</option>
                            <option value={19}>19 Year</option>
                            <option value={20}>20 Year</option>
                        </select>
                        {loanAmountRef && selectedTenure && <p style={{ fontSize: 13, marginBottom: 0 }} >Monthly Emi {calculateEMI(loanAmountRef.current.value, 6.99, selectedTenure)} X  {selectedTenure * 12} Months = {calculateTotalLoanAmount(loanAmountRef.current.value, selectedTenure * 12, 6.99)} (Total Repayment Amount)</p>}
                    </div>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                        <select
                            className="form-control"
                            name="itr"
                            disabled=""
                            required=""
                        >
                            <option value="">Select ITR</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="col-md-12 mt-4 mb-4" bis_skin_checked={1}>
                        <div
                            className="d-grid gap-1  mx-auto"
                            bis_skin_checked={1}
                        >
                            <button
                                type="submit"
                                className="btn btn-warning btn-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>}

            {/* Form step 4 */}

            {currentFormStep == 4 && <div className="" bis_skin_checked={1}>
                <div className="row list-input" bis_skin_checked={1}>
                    <div className="col-lg-12 col-md-12" bis_skin_checked={1}>
                        <div
                            className="alert alert-default"
                            style={{ background: "#fff" }}
                            bis_skin_checked={1}
                        >
                            <div className="text-center" bis_skin_checked={1}>
                                <img src="https://www.indiadhaniservice.co.in/frantend/hide.png" />
                            </div>
                            <h4 className="pt-2 pb-2">Congratulations! {formData.name}</h4>
                            <h6>
                                Your Personal Loan application is submitted. You have successfully applied
                                for the loan of Rs. {formData.loanamount}. The Monthly Installment you will have to pay
                                EMI is Rs.{calculateEMI(formData.loanamount, 6.99, formData.tenure)}.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            }
        </form>
    </>
}

export default LoanForm;