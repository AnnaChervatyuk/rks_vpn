import './Advantages.scss';
import amnezia from './../../../images/amnezia.svg';
import limit from './../../../images/limit.svg';
import device from './../../../images/device.svg';
import server from './../../../images/server.svg';

const Advantages = () => {
  return (
    <div className="advantages__wrapper">
      <div className="advantages__inner">
        <h2>Преимущества RKS&nbsp;VPN</h2>
        <div className="advantages__content">
          <div className="advantages__content-item advantages__content-item-platforms">
            <img src={amnezia} width="253" height="241" alt="" />
            <h3>Работает на разных приложениях и&nbsp;платформах</h3>
            <p>
              Вы получаете код для подключения, который используется в VPN-приложениях, поддерживающих импорт настроек.
              Мы рекомендуем <a href="https://amnezia.org/ru">Amnezia VPN</a>
            </p>
          </div>
          <div className="advantages__content-item advantages__content-item-traffic">
            <img src={limit} width="221" height="148" alt="" />
            <h3>Безлимитный трафик</h3>
          </div>
          <div className="advantages__content-item advantages__content-item-device">
            <div>
              <h3>Возможность подключения до&nbsp;5&nbsp;устройств</h3>
              <p>Поделитесь VPN с&nbsp;друзьями или&nbsp;оставьте всё&nbsp;себе</p>
            </div>
            <img src={device} width="216" height="183" alt="" />
          </div>
          <div className="advantages__content-item advantages__content-item-server">
            <div>
              <h3>VPN-серверы в&nbsp;Европе</h3>
              <p>
                Такое расположение серверов позволит обходить цензуру с&nbsp;минимальной задержкой. Вы получите ключи
                с&nbsp;тремя локациями — Франция, Польша и&nbsp;Нидерланды
              </p>
            </div>
            <img src={server} width="320" height="299" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
