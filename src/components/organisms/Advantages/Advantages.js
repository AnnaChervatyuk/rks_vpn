import './Advantages.scss';
import amnezia from './../../../images/amnezia.svg';
import limit from './../../../images/limit.svg';
import device from './../../../images/device.svg';
import server from './../../../images/server.svg';
import parse from 'html-react-parser';

const Advantages = ({ advantagesBlock }) => {
  return (
    <div className="advantages__wrapper">
      <div className="advantages__inner">
        <h2>{parse(advantagesBlock.header)}</h2>
        <div className="advantages__content">
          <div className="advantages__content-item advantages__content-item-platforms">
            <img src={amnezia} width="253" height="241" alt="" />
            <h3>{parse(advantagesBlock.platforms.header)}</h3>
            <p>{parse(advantagesBlock.platforms.text)}</p>
          </div>
          <div className="advantages__content-item advantages__content-item-traffic">
            <img src={limit} width="221" height="148" alt="" />
            <h3>{parse(advantagesBlock.traffic.header)}</h3>
          </div>
          <div className="advantages__content-item advantages__content-item-device">
            <div>
              <h3>{parse(advantagesBlock.device.header)}</h3>
              <p>{parse(advantagesBlock.device.text)}</p>
            </div>
            <img src={device} width="216" height="183" alt="" />
          </div>
          <div className="advantages__content-item advantages__content-item-server">
            <div>
              <h3>{parse(advantagesBlock.server.header)}</h3>
              <p>{parse(advantagesBlock.server.text)}</p>
            </div>
            <img src={server} width="320" height="299" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
