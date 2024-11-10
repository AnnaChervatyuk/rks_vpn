import xray from './../../../images/xray.png';
import './Description.scss';
import parse from 'html-react-parser';

const Description = ({ descriptionBlock }) => {
  return (
    <div className="description__wrapper">
      <div className="description__inner">
        <img src={xray} width="500" height="500" alt="" />
        <h2>{parse(descriptionBlock.header)}</h2>
        <div div className="description__inner-content">
          <p>{parse(descriptionBlock.text1)}</p>

          <p>{parse(descriptionBlock.text2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
