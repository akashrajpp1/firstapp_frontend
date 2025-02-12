"use client"
import { useRouter, useParams } from "next/navigation";
import ProgressBar from "../../_components/ProgressBar/page";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

const ProgressPage = () => {
    const { id } = useParams();
    const [currentApplication, setCurrentApplication] = useState(null);
    const [profile, setProfile] = useState(null);

    const fetchCurrentApplication = async () => {
        let colRef = doc(db, "queries", id);
        // Fetch the document snapshot
        let dataSnapshot = await getDoc(colRef);
        let data = dataSnapshot.data();

        let profileColRef = getDocs(collection(db, "profile"));
        let profileData = (await profileColRef).docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })
        console.log(profileData[0]);
        setProfile(profileData[0]);


        setCurrentApplication(data);
    };

    useEffect(() => {
        fetchCurrentApplication();
    }, []);


    return <>
        {currentApplication !== null & profile !== null && <main className="wrapper">
            <section className="wptb-contact-wrapper style2">
                <h2 style={{ margin: "2px 10px", color: "#0056b3" }} >Loan Application Status</h2>
                <div className="container" bis_skin_checked={1}>
                    <div className="row" bis_skin_checked={1}>
                        <ProgressBar currentapplication={currentApplication} profile={profile} />
                    </div>
                </div>
            </section>
        </main>}
    </>
}

export default ProgressPage;