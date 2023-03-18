import Button from "./button";


const Header = ({title , color1, color2}) => {
  return (
    <header  className="header">
        <h1 > {title} </h1>
        <Button />
    </header>
  );
}

const styling = {
  
}


Header.defaultProps ={
  
  color1:"red", 
  color2: "black",

}
export default Header;

