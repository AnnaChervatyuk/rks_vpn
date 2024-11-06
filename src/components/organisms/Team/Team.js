import team from './../../../images/team.png';

import './Team.scss';

const Team = () => {
  return (
    <div className="team__wrapper">
      <div className="team__inner">
        <div className="team__content">
          <h2>Мы знаем как работает интернет-цензура изнутри, поэтому наши инструменты могут её обойти</h2>
          <p>
            RKS VPN разрабатывает команда экспертов в&nbsp;области свободы интернета: журналисты, юристы
            и&nbsp;технические специалисты.
          </p>
          <p>Мы 10+ лет изучаем интернет-цензуру, создаём инструменты для её обхода и&nbsp;защищаем свободу слова.</p>
        </div>
        <img src={team} width="500" height="500" alt="" />
      </div>
    </div>
  );
};

export default Team;
