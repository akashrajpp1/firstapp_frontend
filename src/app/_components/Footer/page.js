"use client"

import { db } from "@/lib/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const Footer = () => {
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    const profileRef = await getDocs(collection(db, "profile"));
    const profileData = profileRef.docs.map(doc => {
      return { id: doc.id, ...doc.data() }
    });
    setProfile(profileData[0]);
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return <>
    <footer className="footer inner-page">
      <div className="footer-top" bis_skin_checked={1}>
        <div className="container" bis_skin_checked={1}>
          <div className="row" bis_skin_checked={1}>
            <div className="col-lg-3 col-md-6" bis_skin_checked={1}>
              <div className="footer-widget" bis_skin_checked={1}>
                <h4 className="widget-title">Menu</h4>
                <div className="footer-nav" bis_skin_checked={1}>
                  <ul className="footer_menu">
                    <li className="menu-item active-">
                      <a href="/" id="">
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="menu-item ">
                      <a href="javascript:;">Loan Emi Calculator</a>
                    </li>
                    <li className="menu-item ">
                      <a href="/"> How to Apply</a>
                    </li>
                    <li className="menu-item">
                      <a href="https://indiadhaniservice.co.in/page/Why-Indiadhaniservice">
                        Why Indiadhaniservice
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="https://indiadhaniservice.co.in/page/Fees-And-Charges">
                        Fees And Charges
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="https://indiadhaniservice.co.in/page/Documents-Required">
                        Documents Required
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="https://indiadhaniservice.co.in/page/FAQs">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" bis_skin_checked={1}>
              <div className="footer-widget" bis_skin_checked={1}>
                <h4 className="widget-title">Important Links</h4>
                <div className="footer-nav" bis_skin_checked={1}>
                  <ul className="footer_menu">
                    <li className="menu-item">
                      <a href="https://indiadhaniservice.co.in/contact-us" id="">
                        <span>Contact Us</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="https://indiadhaniservice.co.in/page/Security">
                        Security
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="https://indiadhaniservice.co.in/page/Careers">
                        Careers
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="https://indiadhaniservice.co.in/page/Terms-and-Conditions">
                        Terms and Conditions
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="https://indiadhaniservice.co.in/page/Privacy-Policy">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="https://indiadhaniservice.co.in/page/Grievance-Redressal">
                        Grievance Redressal
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="https://indiadhaniservice.co.in/page/Corporate-Social-Responsibility-Policy">
                        Corporate Social Responsibility Policy
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="https://indiadhaniservice.co.in/page/Security-Centre">
                        Security Centre
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" bis_skin_checked={1}>
              <div className="footer-widget" bis_skin_checked={1}>
                <h4 className="widget-title">Contact Us</h4>
                <div className="inner" bis_skin_checked={1}>
                  <div className="widget-information" bis_skin_checked={1}>
                    <ul className="information-list">
                      {profile !== null && <li>
                        <span style={{ color: "#F9A825" }}>Branch Address - :</span>
                        {profile.address}
                      </li>}
                      {/* <li><span>Mobile No:</span> <a href="tel:+91">+91 8293636893</a></li>*/}
                      <li>
                        <span>Mail:</span>
                        {profile !== null && <a
                          href={"mailto:" + profile.email}
                          target="_blank"
                        >
                          {profile.email}
                        </a>}
                      </li>
                    </ul>
                    {/* <img src="/assets/images/bbb.png" /> */}
                  </div>
                  <ul className="social-share icon-transparent">
                    <li>
                      <a href="" className="color-fb">
                        <i className="icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="" className="color-ig">
                        <i className="icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="" className="color-yt">
                        <i className="icon-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom" bis_skin_checked={1}>
        <div className="container" bis_skin_checked={1}>
          <div className="footer-bottom-inner" bis_skin_checked={1}>
            <div className="copyright text-center" bis_skin_checked={1}>
              <b className="text-center">
                {" "}
                Copyright © 2024 India Dhani Service. All rights reserved.
              </b>
            </div>
          </div>




        </div>
      </div>
    </footer>

  </>
}


export default Footer;