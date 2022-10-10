import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({setScore}) => {
  return (
    <div className="header">
      <img
        src={"logo1111.png"}
        style={{
          width: "140px",
          position: "absolute",
          left: "50px",
          top: "25px",
        }}
      />
      <Link to="/" className="title" onClick={()=>{setScore(0)}}>
        Codes & Boards
      </Link>

      <hr className="divider" />
    </div>
  );
};

export default Header;
