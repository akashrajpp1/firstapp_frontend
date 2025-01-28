"use client"
import { useState, useEffect, useRef } from "react";
import { query, getDocs, collection, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase/config";
const CheckStatusPage = () => {

  const emailRef = useRef();
  const router = useRouter();

  const findUser = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, "Email ID")
    try {
      let colRef = collection(db, "queries");
      let dataQuery = query(colRef, where("email", "==", emailRef.current.value));
      let data = await getDocs(dataQuery);
      console.log(data, "Data");
      router.push(`/status/${data.docs[0].id}`)
    } catch (err) {
      console.log("Error", err);
    }
  }

  return <>
    <main className="wrapper">
      <div
        id="wptb-page-title-default"
        style={{ padding: "20px 15px 44px" }}
        bis_skin_checked={1}
      >
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
              <h1 className="wptb-page-title" />
            </div>
          </div>
        </div>
      </div>
      <section className="wptb-contact-wrapper style2">
        <div className="container" bis_skin_checked={1}>
          <div className="row" bis_skin_checked={1}>
            <div className="col-lg-4 mt-5 mt-lg-0" bis_skin_checked={1}></div>
            <div
              className="col-lg-5 bg-light"
              style={{ border: "2px solid", borderRadius: "1%" }}
              bis_skin_checked={1}
            >
              <div
                className="wptb-contact-form-wrapper "
                style={{ padding: 10 }}
                bis_skin_checked={1}
              >
                <div className="wptb-heading" bis_skin_checked={1}>
                  <div
                    className="wptb-heading--inner text-center"
                    bis_skin_checked={1}
                  >
                    <h3 className="text-primary-">Check Your Application Status</h3>
                    <p>Enter your Email Id to check your application status.</p>
                  </div>
                </div>
                <hr />
                <form
                  className="contact-form"
                  onSubmit={findUser}
                >
                  <div className="row list-input" bis_skin_checked={1}>
                    <div className="col-md-12 mb-1" bis_skin_checked={1}>
                      <label>Email Id</label>
                      <input
                        className="form-control"
                        id="customer_email"
                        type="email"
                        name="email"
                        placeholder=""
                        ref={emailRef}
                      />
                    </div>
                    <div className="col-md-12 mt-2 mb-4" bis_skin_checked={1}>
                      <div className=" gap-1 " bis_skin_checked={1}>
                        <input
                          type="submit"
                          naame="apply"
                          style={{ width: "100%" }}
                          className="btn btn-warning pt-0 pb-2"
                          defaultValue="Submit"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
}

export default CheckStatusPage;