import './Button.scss';
import { Link } from 'react-router-dom';

const ButtonLink = (props) => {
  const { text, url, customClass, externalURL, color } = props;
  const align = props.align || '';
  return (
    <>
      {externalURL ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`button button_link ${align} ${color} ${customClass}`}
        >
          {text}
        </a>
      ) : (
        <Link to={url} className={`button button_link ${align} ${color} ${customClass}`}>
          {text}
        </Link>
      )}
    </>
  );
};

export default ButtonLink;
