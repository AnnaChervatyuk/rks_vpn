import './Protocols.scss';
import icon_3 from './../../../images/icon_3.svg';
import parse from 'html-react-parser';

const Protocols = ({ protocolsBlock }) => {
  return (
    <div className="protocols__wrapper">
      <div className="protocols__inner">
        <div className="protocols__inner-header">
          <img src={icon_3} width="137" height="165" alt="" />
          <h2>{parse(protocolsBlock.header)}</h2>
        </div>
        <div className="protocols__content">
          {protocolsBlock.protocolsList.map((node, key) => {
            return (
              <div className="protocols__content-item" key={key}>
                <h3>{node.header}</h3>
                <p>{parse(node.text)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Protocols;
