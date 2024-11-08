import xray from './../../../images/xray.png';
import './Description.scss';

const Description = () => {
  return (
    <div className="description__wrapper">
      <div className="description__inner">
        <img src={xray} width="500" height="500" alt="" />
        <h2>Создан на основе современного протокола Xray, который сложно заблокировать</h2>
        <div div className="description__inner-content">
          <p>
            Xray предоставляет большие возможности для обеспечения конфиденциальности, обхода интернет-цензуры и защиты
            ваших данных в интернете.
          </p>

          <p>
            Использует TLS (Transport Layer Security) и маскировку VPN-трафика под обычные HTTPS-соединения. Работает на
            всех платформах: Windows, macOS, Linux, Android и iOS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
