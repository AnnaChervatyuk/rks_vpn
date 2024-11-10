import { useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import './FAQ.scss';

const FAQItem = (props) => {
  const { item } = props;
  const [isItemOpened, setItemOpened] = useState(false);
  return (
    <>
      <div className="faq__content-item-question" onClick={() => setItemOpened(!isItemOpened)}>
        {item.question}
      </div>
      <div className="faq__content-item-btn__wrapper" onClick={() => setItemOpened(!isItemOpened)}>
        <div className={`faq__content-item-btn ${isItemOpened ? 'btnOpen' : 'btnClose'}`}></div>
      </div>

      {isItemOpened && <div className="faq__content-item-answer">{item.answer}</div>}
    </>
  );
};
const FAQ = ({ FAQBlock }) => {
  return (
    <div className="faq__wrapper">
      <div className="faq__inner">
        <h2>{parse(FAQBlock.header)}</h2>
        <div className="faq__content">
          {FAQBlock.FAQList.map((node, key) => {
            return (
              <div key={key} className="faq__content-item">
                <FAQItem item={node} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
