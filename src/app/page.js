import Image from "next/image";
import styles from "./page.module.css";
import LoanForm from "./_components/LoanForm/page";

export default function Home() {
  return (
    <>
      <div id="loader" style={{ height: "100vh", width: "100vw", position: "fixed", justifyContent: "center", alignItems: "center", zIndex: 99999, backgroundColor: "rgba(0,0,0,0.9)", display: "none" }} >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
          <img src="/loading.gif" style={{ width: "100px", height: "100px" }} />
          <span style={{ color: "white" }} >Checking your profile, please wait!</span>
        </div>
      </div>
      <main className="wrapper">

        <section
          id="home"
          className="wptb-slider style-ai"
          style={{
            backgroundImage:
              'url("https://indiadhaniservice.co.in/upload/categorycontent/54jhdkjsah.webp")',
            paddingTop: 214
          }}
        >
          <div className="container" bis_skin_checked={1}>
            <div className="wptb-slider--wrapper" bis_skin_checked={1}>
              <div className="wptb-slider--item" bis_skin_checked={1}>
                <div className="row align-items-center" bis_skin_checked={1}>
                  <div className="col-lg-8 col-md-8" bis_skin_checked={1}>
                    <div className="pai-white" bis_skin_checked={1}>
                      {/*<h1 style="font-size: 31px;"></h1>
                              <p style="margin-top: 16px;"></p>*/}
                      <div
                        className=""
                        style={{ color: "white" }}
                        bis_skin_checked={1}
                      >
                        <h1>ACHIEVE</h1>
                        <h3 className="pb-2">
                          everything you aspire for a happy life with <br />
                          <u>India dhani service</u>
                        </h3>
                        <p>- Hassle free Financial Support upto ₹ 40.0 Lacs</p>
                        <p>- At @8.00% ROI with min@8% to max@11% APR</p>
                        <p>- Repayment period min 1 year to max 20 years</p>
                        <p>- Hassle free Application</p>
                        <p>- Low Processing fees (Depends On Pricing Slabs)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4" bis_skin_checked={1}>
                    <LoanForm />
                  </div>
                  <div className="col-sm-8 pai-white1" bis_skin_checked={1}>
                    <h3 className="text-white">YOU CAN APPLY : </h3>
                    <p>- If you are an Indian citizen above 18 years of age</p>
                    <p>- If you have a valid current address proof</p>
                    <p>- If you have a bank account with internet banking facility</p>
                    <p>
                      - Annual Percentage Rate offered to the customer during the
                      period of 02nd Oct 2022 To 31st Mar 2023
                    </p>
                    <p>
                      - Min APR - 8%. Max APR - 11%. Repayment schedule: Min - 12
                      months &amp; Max - 240 Months.^T&amp;C apply
                    </p>
                    <p>
                      - Example: On a personal loan of Rs. 1 lakh at rate of 8% per
                      annum, for a tenure of 24 months, the EMI amount will be
                      Rs.4,523
                    </p>
                    <p>- List of documents required for loan approval.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wptb-video-wrapper">
          <div className="container" bis_skin_checked={1}>
            <div
              style={{
                borderBottom: "4px solid #004795",
                paddingBottom: 10,
                width: "20%",
                margin: "0 auto",
                textAlign: "center"
              }}
              bis_skin_checked={1}
            >
              <h2>About Dhani</h2>
            </div>
            <div className="row align-items-center" bis_skin_checked={1}>
              <div className="col-md-4" bis_skin_checked={1}>
                <img
                  src="https://indiadhaniservice.co.in/upload/categorycontent/332024-09-03aboutinfo.webp"
                  alt="img"
                />
              </div>
              <div className="col-md-8" bis_skin_checked={1}>
                <div
                  className="wptb-video-content wptb-slider--content"
                  bis_skin_checked={1}
                >
                  <p>
                    Indiadhaniservice and its professional team has decades of
                    experience in providing suitable loans that fits your needs and
                    financial requirements. We understand your needs and our committed
                    team always try their level to provide with the best possible
                    solution for your query.
                  </p>
                  <p>
                    Getting Loan with Indiadhaniservice is very simple. Just fill the
                    form by selecting the loan you are looking for, fill in the
                    details and we will get back to you within 1 hour. Once approved,
                    the amount will be transferred to your account within a fortnight.
                    T&amp;C*
                  </p>
                  <p>
                    We provide all types of loan. From Home loans to Student loan,
                    providing the same to you is what we excel at. Get in touch with
                    Indi{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1>
            <br />
          </h1>
          <div className="container" bis_skin_checked={1}>
            <div
              style={{
                borderBottom: "4px solid #004795",
                paddingBottom: 10,
                width: "36%",
                margin: "0 auto",
                textAlign: "center"
              }}
              bis_skin_checked={1}
            >
              <h2>Trending Services</h2>
            </div>
            <div className="row pt-4" bis_skin_checked={1}>
              <div className="col-lg-3 col-md-4" bis_skin_checked={1}>
                <div
                  className="wptb-icon-box5 two text-center"
                  style={{
                    padding: "40px 22px 40px 22px",
                    border: "3px solid #004795",
                    borderRadius: 8,
                    background: "#fff"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item--inner" bis_skin_checked={1}>
                    <div className="wptb-item--icon-" bis_skin_checked={1}>
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/142024-09-18personal-loan.svg"
                        alt="img"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <div className="wptb-item--box" bis_skin_checked={1}>
                      <h2 className="wptb-item--title"> Personal Loan</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" bis_skin_checked={1}>
                <div
                  className="wptb-icon-box5 two text-center"
                  style={{
                    padding: "40px 22px 40px 22px",
                    border: "3px solid #004795",
                    borderRadius: 8,
                    background: "#fff"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item--inner" bis_skin_checked={1}>
                    <div className="wptb-item--icon-" bis_skin_checked={1}>
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/352024-09-18business-loan.svg"
                        alt="img"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <div className="wptb-item--box" bis_skin_checked={1}>
                      <h2 className="wptb-item--title"> Business Loan</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" bis_skin_checked={1}>
                <div
                  className="wptb-icon-box5 two text-center"
                  style={{
                    padding: "40px 22px 40px 22px",
                    border: "3px solid #004795",
                    borderRadius: 8,
                    background: "#fff"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item--inner" bis_skin_checked={1}>
                    <div className="wptb-item--icon-" bis_skin_checked={1}>
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/552024-09-18home-loan.svg"
                        alt="img"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <div className="wptb-item--box" bis_skin_checked={1}>
                      <h2 className="wptb-item--title"> Home Loan</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" bis_skin_checked={1}>
                <div
                  className="wptb-icon-box5 two text-center"
                  style={{
                    padding: "40px 22px 40px 22px",
                    border: "3px solid #004795",
                    borderRadius: 8,
                    background: "#fff"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item--inner" bis_skin_checked={1}>
                    <div className="wptb-item--icon-" bis_skin_checked={1}>
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/732024-09-18gold-loan.svg"
                        alt="img"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <div className="wptb-item--box" bis_skin_checked={1}>
                      <h2 className="wptb-item--title"> Gold Loan</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" bis_skin_checked={1}>
                <div
                  className="wptb-icon-box5 two text-center"
                  style={{
                    padding: "40px 22px 40px 22px",
                    border: "3px solid #004795",
                    borderRadius: 8,
                    background: "#fff"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item--inner" bis_skin_checked={1}>
                    <div className="wptb-item--icon-" bis_skin_checked={1}>
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/552024-09-18credit-card.svg"
                        alt="img"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <div className="wptb-item--box" bis_skin_checked={1}>
                      <h2 className="wptb-item--title"> Credit Cards</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" bis_skin_checked={1}>
                <div
                  className="wptb-icon-box5 two text-center"
                  style={{
                    padding: "40px 22px 40px 22px",
                    border: "3px solid #004795",
                    borderRadius: 8,
                    background: "#fff"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item--inner" bis_skin_checked={1}>
                    <div className="wptb-item--icon-" bis_skin_checked={1}>
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/392024-09-18hdfc-saving-ac-icon.png"
                        alt="img"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <div className="wptb-item--box" bis_skin_checked={1}>
                      <h2 className="wptb-item--title"> Saving Bank Account</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" bis_skin_checked={1}>
                <div
                  className="wptb-icon-box5 two text-center"
                  style={{
                    padding: "40px 22px 40px 22px",
                    border: "3px solid #004795",
                    borderRadius: 8,
                    background: "#fff"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item--inner" bis_skin_checked={1}>
                    <div className="wptb-item--icon-" bis_skin_checked={1}>
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/63track-application.svg"
                        alt="img"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <div className="wptb-item--box" bis_skin_checked={1}>
                      <h2 className="wptb-item--title"> Track Application</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" bis_skin_checked={1}>
                <div
                  className="wptb-icon-box5 two text-center"
                  style={{
                    padding: "40px 22px 40px 22px",
                    border: "3px solid #004795",
                    borderRadius: 8,
                    background: "#fff"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item--inner" bis_skin_checked={1}>
                    <div className="wptb-item--icon-" bis_skin_checked={1}>
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/47free-credit-score.svg"
                        alt="img"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <div className="wptb-item--box" bis_skin_checked={1}>
                      <h2 className="wptb-item--title"> Free Credit Score</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wptb-social-services ">
          <div className="container" bis_skin_checked={1}>
            <div
              style={{
                borderBottom: "4px solid #004795",
                paddingBottom: 10,
                width: "45%",
                margin: "0 auto",
                textAlign: "center"
              }}
              bis_skin_checked={1}
            >
              <h2>How to apply for Loan</h2>
            </div>
            <div className="row pt-5" bis_skin_checked={1}>
              <div className="col-lg-3 col-md-4" bis_skin_checked={1}>
                <div className="wptb-icon-box5 two text-center" bis_skin_checked={1}>
                  <div className="wptb-item--inner text-center" bis_skin_checked={1}>
                    <div className="wptb-item--icon-" bis_skin_checked={1}>
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/882024-09-18loan1.svg"
                        alt="img"
                      />
                    </div>
                    <div className="wptb-item--box pt-2" bis_skin_checked={1}>
                      <h5 className="text-warning ">Step : 0</h5>
                      <h2 className="wptb-item--title">
                        {" "}
                        Select Loan <br />
                        Type
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" bis_skin_checked={1}>
                <div className="wptb-icon-box5 two text-center" bis_skin_checked={1}>
                  <div className="wptb-item--inner text-center" bis_skin_checked={1}>
                    <div className="wptb-item--icon-" bis_skin_checked={1}>
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/172024-09-18loan2.svg"
                        alt="img"
                      />
                    </div>
                    <div className="wptb-item--box pt-2" bis_skin_checked={1}>
                      <h5 className="text-warning ">Step : 1</h5>
                      <h2 className="wptb-item--title">
                        {" "}
                        Fill Basic <br /> Details
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" bis_skin_checked={1}>
                <div className="wptb-icon-box5 two text-center" bis_skin_checked={1}>
                  <div className="wptb-item--inner text-center" bis_skin_checked={1}>
                    <div className="wptb-item--icon-" bis_skin_checked={1}>
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/982024-09-18loan3.svg"
                        alt="img"
                      />
                    </div>
                    <div className="wptb-item--box pt-2" bis_skin_checked={1}>
                      <h5 className="text-warning ">Step : 2</h5>
                      <h2 className="wptb-item--title">
                        {" "}
                        We'll get to you <br /> within 1 hour
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4" bis_skin_checked={1}>
                <div className="wptb-icon-box5 two text-center" bis_skin_checked={1}>
                  <div className="wptb-item--inner text-center" bis_skin_checked={1}>
                    <div className="wptb-item--icon-" bis_skin_checked={1}>
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/832024-09-18loan3.svg"
                        alt="img"
                      />
                    </div>
                    <div className="wptb-item--box pt-2" bis_skin_checked={1}>
                      <h5 className="text-warning ">Step : 3</h5>
                      <h2 className="wptb-item--title">
                        {" "}
                        Loan <br /> Approval
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wptb-video-wrapper">
          <div className="container" bis_skin_checked={1}>
            <div
              style={{
                borderBottom: "4px solid #004795",
                paddingBottom: 10,
                width: "45%",
                margin: "0 auto",
                textAlign: "center"
              }}
              bis_skin_checked={1}
            >
              <h2>Features of India dhani service</h2>
            </div>
            <div className="row pt-5" bis_skin_checked={1}>
              <div className="col-lg-3 col-md-3" bis_skin_checked={1}>
                <div
                  className="wptb-icon-box5 two"
                  style={{
                    padding: "40px 22px 40px 22px",
                    border: "3px solid #004795",
                    borderRadius: 8,
                    background: "#fff"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item--inner" bis_skin_checked={1}>
                    <div
                      className="wptb-item--icon- text-center"
                      bis_skin_checked={1}
                    >
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/722024-09-18features1.svg"
                        alt="img"
                        className="img-thumbnail-"
                      />
                    </div>
                    <div className="wptb-item--box text-center" bis_skin_checked={1}>
                      <h2 className="wptb-item--title">
                        {" "}
                        Minimum <br />
                        Documentation
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3" bis_skin_checked={1}>
                <div
                  className="wptb-icon-box5 two"
                  style={{
                    padding: "40px 22px 40px 22px",
                    border: "3px solid #004795",
                    borderRadius: 8,
                    background: "#fff"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item--inner" bis_skin_checked={1}>
                    <div
                      className="wptb-item--icon- text-center"
                      bis_skin_checked={1}
                    >
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/822024-09-18features2.svg"
                        alt="img"
                        className="img-thumbnail-"
                      />
                    </div>
                    <div className="wptb-item--box text-center" bis_skin_checked={1}>
                      <h2 className="wptb-item--title">
                        {" "}
                        Faster <br /> Approval
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3" bis_skin_checked={1}>
                <div
                  className="wptb-icon-box5 two"
                  style={{
                    padding: "40px 22px 40px 22px",
                    border: "3px solid #004795",
                    borderRadius: 8,
                    background: "#fff"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item--inner" bis_skin_checked={1}>
                    <div
                      className="wptb-item--icon- text-center"
                      bis_skin_checked={1}
                    >
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/902024-09-18features3.svg"
                        alt="img"
                        className="img-thumbnail-"
                      />
                    </div>
                    <div className="wptb-item--box text-center" bis_skin_checked={1}>
                      <h2 className="wptb-item--title">
                        {" "}
                        100% <br /> Online Process
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3" bis_skin_checked={1}>
                <div
                  className="wptb-icon-box5 two"
                  style={{
                    padding: "40px 22px 40px 22px",
                    border: "3px solid #004795",
                    borderRadius: 8,
                    background: "#fff"
                  }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item--inner" bis_skin_checked={1}>
                    <div
                      className="wptb-item--icon- text-center"
                      bis_skin_checked={1}
                    >
                      <img
                        src="https://indiadhaniservice.co.in/upload/categorycontent/732024-09-18features4.svg"
                        alt="img"
                        className="img-thumbnail-"
                      />
                    </div>
                    <div className="wptb-item--box text-center" bis_skin_checked={1}>
                      <h2 className="wptb-item--title">
                        {" "}
                        Loan <br /> up to Rs 40.0 Lacs
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="wptb-video-wrapper"
          style={{ background: "#39927e", padding: 50 }}
        >
          <div className="container" bis_skin_checked={1}>
            <div
              style={{
                borderBottom: "4px solid #004795",
                paddingBottom: 10,
                width: "45%",
                margin: "0 auto",
                textAlign: "center"
              }}
              bis_skin_checked={1}
            >
              <h2 className="text-white">What our Customers are saying</h2>
            </div>
            {/* swiper slides */}
            <div className="row pt-5" bis_skin_checked={1}>
              <div className="col-sm-6" bis_skin_checked={1}>
                <div
                  className="wptb-item--inner bg-white"
                  style={{ padding: 20 }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item-body" bis_skin_checked={1}>
                    <div
                      className="wptb-item--desc el-empty"
                      style={{ fontSize: 18 }}
                      bis_skin_checked={1}
                    >
                      India dhani service is best when it comes to comparing different
                      lenders for rates and offers. It helps you get the best deal
                      from all the available options. I got the required loan amount
                      within 24 hours. Thank you!!This application is so good for your
                      needs in difficult conditions. The support team was also good.
                    </div>
                  </div>
                  <div className="wptb-item-bottom" bis_skin_checked={1}>
                    <div className="wptb-item-meta" bis_skin_checked={1}>
                      <h4 className="wptb-item--title">Manish Jain</h4>
                      <div
                        className="wptb-item--position el-empty"
                        bis_skin_checked={1}
                      >
                        Noida
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6" bis_skin_checked={1}>
                <div
                  className="wptb-item--inner bg-white"
                  style={{ padding: 20 }}
                  bis_skin_checked={1}
                >
                  <div className="wptb-item-body" bis_skin_checked={1}>
                    <div
                      className="wptb-item--desc el-empty"
                      style={{ fontSize: 18 }}
                      bis_skin_checked={1}
                    >
                      India dhani service is best when it comes to comparing different
                      lenders for rates and offers. It helps you get the best deal
                      from all the available options. I got the required loan amount
                      within 24 hours. Thank you!!This application is so good for your
                      needs in difficult conditions. The support team was also good.
                    </div>
                  </div>
                  <div className="wptb-item-bottom" bis_skin_checked={1}>
                    <div className="wptb-item-meta" bis_skin_checked={1}>
                      <h4 className="wptb-item--title">Johannes Times</h4>
                      <div
                        className="wptb-item--position el-empty"
                        bis_skin_checked={1}
                      >
                        CEO of REx
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="wptb-counter style3" bis_skin_checked={1}>
            <div className="container" bis_skin_checked={1}>
              <div
                style={{
                  borderBottom: "4px solid #004795",
                  paddingBottom: 10,
                  width: "45%",
                  margin: "0 auto",
                  textAlign: "center"
                }}
                bis_skin_checked={1}
              >
                <h2>India dhani service in Statistics</h2>
              </div>
              {/* Counter Box */}
              <div className="wptb-counter--box" bis_skin_checked={1}>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-lg-4 col-sm-6" bis_skin_checked={1}>
                    <div
                      className="wptb-counter--item"
                      style={{
                        padding: "40px 22px 40px 22px",
                        border: "3px solid #004795",
                        borderRadius: 8,
                        background: "#fff"
                      }}
                      bis_skin_checked={1}
                    >
                      <div
                        className="wptb-item--icon- text-center"
                        bis_skin_checked={1}
                      >
                        <img
                          src="/assets/images/money1.svg"
                          alt="img"
                          className="img-thumbnail-"
                          style={{ width: "30%" }}
                        />
                      </div>
                      <div
                        className="wptb-counter--value text-dark"
                        bis_skin_checked={1}
                      >
                        ₹675507660+
                      </div>
                      <div className="wptb-counter--text" bis_skin_checked={1}>
                        Amount Disbursed
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" bis_skin_checked={1}>
                    <div
                      className="wptb-counter--item"
                      style={{
                        padding: "40px 22px 40px 22px",
                        border: "3px solid #004795",
                        borderRadius: 8,
                        background: "#fff"
                      }}
                      bis_skin_checked={1}
                    >
                      <div
                        className="wptb-item--icon- text-center"
                        bis_skin_checked={1}
                      >
                        <img
                          src="/assets/images/money2.svg"
                          alt="img"
                          className="img-thumbnail-"
                          style={{ width: "30%" }}
                        />
                      </div>
                      <div
                        className="wptb-counter--value text-dark"
                        bis_skin_checked={1}
                      >
                        7201+
                      </div>
                      <div className="wptb-counter--text" bis_skin_checked={1}>
                        Happy Customers
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6" bis_skin_checked={1}>
                    <div
                      className="wptb-counter--item"
                      style={{
                        padding: "40px 22px 40px 22px",
                        border: "3px solid #004795",
                        borderRadius: 8,
                        background: "#fff"
                      }}
                      bis_skin_checked={1}
                    >
                      <div
                        className="wptb-item--icon- text-center"
                        bis_skin_checked={1}
                      >
                        <img
                          src="/assets/images/money3.svg"
                          alt="img"
                          className="img-thumbnail-"
                          style={{ width: "30%" }}
                        />
                      </div>
                      <div
                        className="wptb-counter--value text-dark"
                        bis_skin_checked={1}
                      >
                        75+
                      </div>
                      <div className="wptb-counter--text" bis_skin_checked={1}>
                        Business Partners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="" style={{ background: "#39927e", padding: "1px 0px" }}>
          <div className="container" bis_skin_checked={1}>
            <div className="wptb-newsletter--inner" bis_skin_checked={1}>
              <div className="row align-items-center" bis_skin_checked={1}>
                <div className="col-lg-7" bis_skin_checked={1}>
                  <h4 className="widget-title wow text-warning">
                    You're just a click away from achieving your dreams!
                  </h4>
                  <br />
                  <a
                    href=""
                    className="btn btn-primary btn-lg"
                    style={{ background: "#004795" }}
                  >
                    Apply Now
                  </a>
                </div>
                <div className="col-lg-5" bis_skin_checked={1}>
                  {" "}
                  <img src="/assets/images/lnweb.webp" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
