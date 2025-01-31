"use client"

import { useRef } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";

const ContactPage = () => {

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
        <div className="container" bis_skin_checked={1}>
          <div className="row" bis_skin_checked={1}>
            <div className="col-12" bis_skin_checked={1}>
              <h1 className="wptb-page-title">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n                    .paikasoft_ul li{\n                       font-size: 20px;\n                        line-height: 45px;\n                        list-style: none;\n                    }\n                        \n                    "
        }}
      />
      <section className="wptb-contact-wrapper style2">
        <div className="container" bis_skin_checked={1}>
          <div className="text-center" bis_skin_checked={1}>
            <h1
              className="btn btn-success"
              style={{ fontSize: 26, padding: 15, width: "100%" }}
            >
              Contact Us
            </h1>
          </div>
          <div className="row" bis_skin_checked={1}>
            <div className="col-lg-12" bis_skin_checked={1}>
              <div className="footer-widget pt-5 text-center" bis_skin_checked={1}>
                <p>
                  {" "}
                  Please choose the most appropriate channel below for faster
                  response.
                </p>
                <p> We generally respond within 24-48 hours.</p>
                <br />
                <p>
                  {" "}
                  Note: We only have one Customer Care number. Please do not call
                  any other number claiming to be CredEZ Customer Care.
                </p>
                <h5>
                  <i className="bi bi-geo-alt-fill" />D 114, 1st Floor, Eastern
                  Business District, offLal Bahadur Shastri Marg, Ganesh Nagar,
                  Bhandup West, Mumbai, Maharashtra 400078
                  <br />
                  <br />
                  <i className="bi bi-telephone-fill" />
                  Whatsapp Support:- 91 8293636893
                </h5>
              </div>
            </div>
            <div className="row pt-5" bis_skin_checked={1}>
              <h3 className="text-center pb-2">Send Your Message</h3>
              <div className="bg-dark" bis_skin_checked={1}>
                <div className="tab pb-4 pt-4" bis_skin_checked={1}>
                  <div className="box box-primary" bis_skin_checked={1}>
                    <form id="contact-form" method="POST">
                      <div className="box-body" bis_skin_checked={1}>
                        <div className="row" bis_skin_checked={1}>
                          <div className="col-md-6" bis_skin_checked={1}>
                            <div className="form-group" bis_skin_checked={1}>
                              <label style={{ color: "white" }}>
                                Name:<span style={{ color: "white" }}>*</span>
                              </label>
                              <span id="name-info" className="info" />
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                                defaultValue=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6" bis_skin_checked={1}>
                            <div className="form-group" bis_skin_checked={1}>
                              <label style={{ color: "white" }}>
                                Mobile:<span style={{ color: "white" }}>*</span>
                              </label>
                              <span id="phone-info" className="info" />
                              <input
                                type="text"
                                minLength={10}
                                maxLength={10}
                                className="form-control"
                                name="phone"
                                id="phone"
                                defaultValue=""
                                placeholder="mobile no."
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row" bis_skin_checked={1}>
                          <div className="col-md-12" bis_skin_checked={1}>
                            <div className="form-group" bis_skin_checked={1}>
                              <label style={{ color: "white" }}>
                                Email:<span style={{ color: "white" }}>*</span>
                              </label>
                              <span id="email-info" className="info" />
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                                id="email"
                                defaultValue=""
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12" bis_skin_checked={1}>
                            <div className="form-group" bis_skin_checked={1}>
                              <label style={{ color: "white" }}>
                                Subject:<span style={{ color: "white" }}>*</span>
                              </label>
                              <span id="user_subject-info" className="info" />
                              <input
                                type="text"
                                className="form-control"
                                name="user_subject"
                                id="user_subject"
                                defaultValue=""
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group" bis_skin_checked={1}>
                          <label style={{ color: "white" }}>Message:</label>
                          <span id="message-info" className="info" />
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      {/* /.box-body */}
                      <div className="box-footer pt-2" bis_skin_checked={1}>
                        <button
                          type="submit"
                          name="submit"
                          id="butsav"
                          className="btn btn-primary"
                          style={{
                            backgroundColor: "#df102f",
                            borderColor: "#df102f"
                          }}
                        >
                          Send
                        </button>
                      </div>
                    </form>
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

export default ContactPage;