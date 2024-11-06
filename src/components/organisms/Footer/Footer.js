import rks_vpn_logo_2 from './../../../images/rks_vpn_logo_2.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__inner">
        <img src={rks_vpn_logo_2} alt="" width="269" height="28" />
        <div className="footer__contacts">
          <div>
            <a href="https://t.me/vpnpayio_bot">Телеграм-бот</a>
          </div>
          <div>
            <a href="mailto:help@vpnpay.io">help@vpnpay.io</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
