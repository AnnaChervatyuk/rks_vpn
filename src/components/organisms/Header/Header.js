import { ButtonLink } from '../../atoms';
import './Header.scss';
import parse from 'html-react-parser';

const Header = ({ header, btnBuyBlock }) => {
  return (
    <div className="header__wrapper">
      <div className="header__inner">
        <h1>{parse(header.header)}</h1>
        <div className="header__content">
          <div>{parse(header.text)}</div>
          <div className="header__content__buy">
            <ButtonLink url={btnBuyBlock.btnBuy.link} text={btnBuyBlock.btnBuy.text} color={'white'} />
            <div className="header__content__buy-text">
              <div className="header__content__buy-text-price">{parse(btnBuyBlock.textPeriod)}</div>
              <div className="header__content__buy-text-descr">{parse(btnBuyBlock.textDescr)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
