import { ButtonLink } from '../../atoms';
import mir from './../../../images/mir.svg';
import visa from './../../../images/visa.svg';
import mastercard from './../../../images/mastercard.svg';
import sbp from './../../../images/sbp.svg';
import bitcoin from './../../../images/bitcoin.svg';
import parse from 'html-react-parser';

import './Price.scss';

const Price = ({ btnBuyBlock, priceBlock }) => {
  return (
    <div className="price__wrapper" id="price">
      <div className="price__inner">
        <h2>{priceBlock.header}</h2>
        <div className="price__content">
          <div className="price__months">
            {priceBlock.priceList.map((node, key) => {
              return (
                <div className="price__months-item" key={key}>
                  <h3>{parse(node.period)}</h3>
                  {node.discount && <div className="price__months-item-discount">{parse(node.discount)}</div>}
                  <p>
                    {node.fullPrice && (
                      <>
                        <span>{node.fullPrice}</span>
                        <br />
                      </>
                    )}

                    {parse(node.price)}
                  </p>
                </div>
              );
            })}
          </div>
          <ButtonLink text={btnBuyBlock.btnBuy.text} url={btnBuyBlock.btnBuy.link} color={'blue'} />
          <div className="price__content-button-descr">{parse(priceBlock.descr)}</div>
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
