import { ButtonLink } from '../../atoms';
import mir from './../../../images/mir.svg';
import visa from './../../../images/visa.svg';
import mastercard from './../../../images/mastercard.svg';
import sbp from './../../../images/sbp.svg';
import bitcoin from './../../../images/bitcoin.svg';

import './Price.scss';

const Price = () => {
  return (
    <div className="price__wrapper" id="price">
      <div className="price__inner">
        <h2>Стоимость</h2>
        <div className="price__content">
          <div className="price__months">
            <div className="price__months-item">
              <h3>3 месяца</h3>
              <p>1000 ₽ или  333 ₽/мес </p>
            </div>
            <div className="price__months-item">
              <h3>6 месяцев</h3>
              <div className="price__months-item-discount">10% скидка</div>
              <p>
                <span>2000 ₽</span>
                <br />
                1800 ₽ или  300 ₽/мес 
              </p>
            </div>
            <div className="price__months-item">
              <h3>1 год</h3>
              <div className="price__months-item-discount">25% скидка</div>
              <p>
                <span>4000 ₽</span>
                <br />
                3000 ₽ или 250 ₽/мес 
              </p>
            </div>
          </div>
          <ButtonLink text={'Купить'} url="https://vpnpay.io/ru/rks/" color={'blue'} />
          <div className="price__content-button-descr">
            Вы будете перенаправлены на сайт VPNPAY для оплаты. К оплате принимаются карты российских и зарубежных
            банков, криптовалюта
          </div>
          <div className="price__content-systems">
            <img src={mir} width="36" height="24" alt="" />
            <img src={visa} width="36" height="24" alt="" />
            <img src={mastercard} width="36" height="24" alt="" />
            <img src={sbp} width="36" height="24" alt="" />
            <img src={bitcoin} width="36" height="24" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
