const MobileNav = ()=>{
    return <><div className="mr-menu" bis_skin_checked={1}>
    <div className="mr-menu_overlay" bis_skin_checked={1} />
    <button type="button" className="mr-menu_close">
      <i className="bi bi-x-lg" />
    </button>
    <div className="logo" bis_skin_checked={1}>
      <a href="/" className="logo-default">
        <img
          style={{ width: "50%" }}
          className="text-center img-fluid"
          src="https://indiadhaniservice.co.in/upload/admin_images/2024-11-20loo.png"
        />{" "}
        {/*<img src="https://indiadhaniservice.co.in/backend/images/logo.png" alt="logo">*/}
      </a>
    </div>
    {/* Keep this div empty. Logo will come here by JavaScript */}
    <div className="mr_navmenu" bis_skin_checked={1}>
      <ul className="main-menu">
        <li className="menu-item active-">
          <a href="/" id="">
            <span>Home</span>
          </a>
        </li>
        <li className="menu-item ">
          <a href="https://indiadhaniservice.co.in/check-status" id="">
            <span>Check Status</span>
          </a>
        </li>
        <li className="menu-item ">
          <a href="https://indiadhaniservice.co.in/about" id="">
            <span>About Us</span>
          </a>
        </li>
        {/*<li class="menu-item menu-item-has-children"><a href="#"><span>Services</span></a>
                        <ul class="sub-menu" style="background: #ffff;">
                                      <li><a href="https://indiadhaniservice.co.in/service/Personal-Loan">Personal Loan</a></li>
          <li><a href="https://indiadhaniservice.co.in/service/Business-Loan">Business Loan</a></li>
          <li><a href="https://indiadhaniservice.co.in/service/Home-Loan">Home Loan</a></li>
          <li><a href="https://indiadhaniservice.co.in/service/Gold-Loan">Gold Loan</a></li>
          <li><a href="https://indiadhaniservice.co.in/service/Credit-Cards">Credit Cards</a></li>
          <li><a href="https://indiadhaniservice.co.in/service/Saving-Bank-Account">Saving Bank Account</a></li>
          <li><a href="https://indiadhaniservice.co.in/service/Track-Application">Track Application</a></li>
          <li><a href="https://indiadhaniservice.co.in/service/Free-Credit-Score">Free Credit Score</a></li>
                               
                        </ul>
                    </li>*/}
        <li className="menu-item">
          <a href="https://indiadhaniservice.co.in/contact-us" id="">
            <span>Contact Us</span>
          </a>
        </li>
        <li className="menu-item ">
          <a href="https://indiadhaniservice.co.in/check-status" id="">
            <span>My Account</span>
          </a>
        </li>
        <li className="menu-item ">
          <a href="https://indiadhaniservice.co.in/check-status" id="">
            <span>DSA Login</span>
          </a>
        </li>
      </ul>
    </div>
    {/* Keep this div empty. Menu will come here by JavaScript */}
  </div>
  </>
}

export default MobileNav;