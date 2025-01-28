"use client"
import ProgressBar from "../../_components/ProgressBar/page";

const ProgressPage = () => {
    return <>
        <main className="wrapper">
            <section className="wptb-contact-wrapper style2">
                <h2 style={{ margin: "2px 10px", color: "#0056b3" }} >Loan Application Status</h2>
                <div className="container" bis_skin_checked={1}>
                    <div className="row" bis_skin_checked={1}>
                        <ProgressBar />
                    </div>
                </div>
            </section>
        </main>
    </>
}

export default ProgressPage;