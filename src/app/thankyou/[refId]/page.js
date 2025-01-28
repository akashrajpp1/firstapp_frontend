"use client"
import { useParams } from "next/navigation";
const Thankyou = () => {

    const { refId } = useParams();
    console.log(refId, "params")
    return <>
        <main className="wrapper">
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    #wptb-page-title-default {\n    padding: 1px 1px 1px;\n    text-align: center;\n    position: relative;\n    background: #000000de;\n}\n    "
                }}
            />
            <div id="wptb-page-title-default" bis_skin_checked={1}>
                <div
                    className="wptb-page-title-default-bg"
                    style={{
                        backgroundImage:
                            "url(/assets/img/background/bg-pagetitle.jpg)"
                    }}
                    bis_skin_checked={1}
                />

            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n                    .paikasoft_ul li{\n                       font-size: 20px;\n                        line-height: 45px;\n                        list-style: none;\n                    }\n                        \n                    "
                }}
            />
            <section className="wptb-contact-wrapper style2" style={{ height: "100vh", display: "flex", alignItems: "center" }} >
                <div className="container" bis_skin_checked={1}>

                    <div className="row" bis_skin_checked={1}>
                        <div className="col-lg-12" bis_skin_checked={1}>

                        </div>
                        <div className="row pt-5" bis_skin_checked={1}>
                            {/* <h3 className="text-center pb-2">Send Your Message</h3> */}
                            <div className="bg-dark" bis_skin_checked={1}>
                                <div className="tab pb-4 pt-4" bis_skin_checked={1}>
                                    <div className="box box-primary" bis_skin_checked={1}>
                                        <h1>Thank You! Your loan reference Id: {refId} has been approved sucessfuly!</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
}

export default Thankyou;