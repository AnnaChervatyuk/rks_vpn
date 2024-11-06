import './Button.scss';

const Button = (props) => {
  const { text, color, customClass, handleClick } = props;
  const align = props.align || '';
  const arrow = props.arrowRight ? 'arrow_right' : '';
  return (
    <div className={`button ${align} ${arrow} ${color} ${customClass}`} onClick={handleClick}>
      {text}
    </div>
  );
};

export default Button;
