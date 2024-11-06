import './Protocols.scss';
import icon_3 from './../../../images/icon_3.svg';

const Protocols = () => {
  return (
    <div className="protocols__wrapper">
      <div className="protocols__inner">
        <div className="protocols__inner-header">
          <img src={icon_3} width="137" height="165" alt="" />
          <h2>протокола на основе Xray в одном VPN</h2>
        </div>
        <div className="protocols__content">
          <div className="protocols__content-item">
            <h3>VMess</h3>
            <p>
              Имеет встроенное шифрование и поддержку различных типов транспортов, изначально был разработан для обхода
              интернет‑цензуры и защищенной и анонимной передачи данных
            </p>
          </div>
          <div className="protocols__content-item">
            <h3>VLESS</h3>
            <p>
              Облегченная и более новая версия VMess без встроенного шифрования, где главным достоинством является
              производительность и минимизация задержек
            </p>
          </div>
          <div className="protocols__content-item">
            <h3>Shadowsocks</h3>
            <p>
              Протокол для обхода интернет-цензуры, разработанных для стран с жёсткими ограничениями, например, Китай,
              Россия, Иран
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protocols;
