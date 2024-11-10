import team from './../../../images/team.png';
import './Team.scss';
import parse from 'html-react-parser';

const Team = ({ teamBlock }) => {
  return (
    <div className="team__wrapper">
      <div className="team__inner">
        <div className="team__content">
          <h2>{parse(teamBlock.header)}</h2>
          {parse(teamBlock.text)}
        </div>
        <img src={team} width="500" height="500" alt="" />
      </div>
    </div>
  );
};

export default Team;
