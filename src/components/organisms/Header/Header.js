import { ButtonLink } from '../../atoms';

import './Header.scss';

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__inner">
        <h1>Устойчивый к&nbsp;блокировкам VPN</h1>
        <div className="header__content">
          <div>
            VPN от технических специалистов <a href="https://rks.global/">RKS.Global</a>
          </div>
          <div className="header__content__buy">
            <ButtonLink url="https://vpnpay.io/ru/rks/" text={'Купить'} color={'white'} />
            <div className="header__content__buy-text">
              <div className="header__content__buy-text-price">от 250 ₽ в месяц</div>
              <div className="header__content__buy-text-descr">при оплате на год</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
