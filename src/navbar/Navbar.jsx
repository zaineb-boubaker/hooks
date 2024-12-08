import { useRef } from "react";
import "./style.css";
import ReactStars from "react-rating-stars-component";


function Navbar({ setSearch, setRate }) {
  const searchRef = useRef(null);
  const handleClick = () => {
    setSearch(searchRef.current.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  return (
    <div id="navbar">
      <div>
        <h1>NETFILM</h1>
      </div>
      <div id="search">
        <div id="search1">
          <input
            // onChange={(event) => {
            //   setSearch(event.target.value);
            // }}
            ref={searchRef}
            type="text"
            id="inputsearch"
            placeholder="Search Your Movie"
          />
          <img
            onClick={handleClick}
            src="./images/search1.png"
            id="icon"
            alt=""
          />
        </div>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={18}
          activeColor="#ffd700"
          color="white"
        />
      </div>
      <div id="login">
        <button className="butlog">Register</button>
        <button className="butlog">LogIn</button>
      </div>
    </div>
  );
}

export default Navbar;
