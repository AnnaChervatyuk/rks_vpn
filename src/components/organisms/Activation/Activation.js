import amnezia_app from './../../../images/amnezia_app.png';
import { ButtonLink } from '../../atoms';
import parse from 'html-react-parser';

import './Activation.scss';

const Activation = ({ activationBlock }) => {
  return (
    <div className="activation__wrapper">
      <div className="activation__inner">
        <h2>{parse(activationBlock.header)}</h2>
        <p className="activation__descr">{parse(activationBlock.textHeader)}</p>
        <div className="activation__content">
          <div className="activation__content-inner">
            <h3>{parse(activationBlock.headerSecond)}</h3>
            <p>{parse(activationBlock.textSecond)}</p>
            <ButtonLink text={activationBlock.btnText} url={activationBlock.btnLink} color={'blue'} />
            <div className="activation__content-instr">{parse(activationBlock.textInstr)}</div>
          </div>
          <img src={amnezia_app} width="350" height="590" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Activation;
