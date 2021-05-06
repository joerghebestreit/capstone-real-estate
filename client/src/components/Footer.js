import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://www.facebook.com/" class="external" target="_blank">
          <object src="./components/svg/facebookIcon.svg"></object>
        </a>
        <a target="_blank" href="https://www.instagram.com/">
          <object src="./svg/instaIcon.svg"></object>
        </a>
      </div>
      <a href="tel:+900300400" className="phoneIconNumberA">
        <div className="phoneIconNumber">
          <object src="./svg/phoneIcon.svg"></object>
          <p className="phoneNumberFooter">030 / 5 44 00 57</p>
        </div>
      </a>
    </div>
  );
}

export default Footer;
