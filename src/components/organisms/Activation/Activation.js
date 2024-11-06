import amnezia_app from './../../../images/amnezia_app.png';
import { ButtonLink } from '../../atoms';

import './Activation.scss';

const Activation = () => {
  return (
    <div className="activation__wrapper">
      <div className="activation__inner">
        <h2>Как активировать</h2>
        <p className="activation__descr">
          Вы можете использовать любые приложения, поддерживающих импорт настроек: <a href="">VPN 1</a>{' '}
          <a href="">VPN 2</a> <a href="">VPN 3</a>
        </p>
        <div className="activation__content">
          <div className="activation__content-inner">
            <h3>Самый простой способ активировать VPN — использовать приложение Amnezia VPN</h3>
            <p>
              Доступно для macOS, Linux, Windows, Android. Установить VPN на TV тоже возможно. Для этого вам понадобится
              приложение <a href="https://docs.amnezia.org/ru/documentation/amnezia-wg/">AmneziaWG</a>.
            </p>
            <ButtonLink text={'Скачать'} url="https://amnezia.org/ru/downloads" color={'blue'} />
            <div className="activation__content-instr">
              Amnezia VPN отсутствует в Apple App Store. Посмотрите видео, о том{' '}
              <a href="https://www.youtube.com/watch?v=RCkC_L2OQfs" target="_blank">
                как устанавливать приложения без App Store
              </a>
            </div>
          </div>
          <img src={amnezia_app} width="350" height="590" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Activation;
