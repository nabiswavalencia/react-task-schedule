
const Button = ({color , text}) => {
  return (
    <button style={{backgroundColor: color}}
    className="btn">
    ADD
    </button>
  );
}

Button.defaultProps = {
  color: "steelblue",
  text: "Hello"
}



export default Button;
