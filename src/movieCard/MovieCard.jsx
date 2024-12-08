import React from "react";
import "./style.css";


function MovieCard(props) {
  return (
    <div id="card">
      <img id="imgcard" src={props.posterURL} alt="" />
      <div id="card2">
        <h2 id="title">{props.title}</h2>
        <p id="description">{props.description}</p>
        <div>
          <p id="star">{"⭐".repeat(props.rating)}</p>
        </div>
      </div>
    </div>
  );
}



// MovieCard.propTypes = {
//   title: PropTypes.string, 
//   description: PropTypes.string, 
//   posterURL: PropTypes.string, 
//   rating: PropTypes.number, 
// };

MovieCard.defaultProps = {
  title: "Unknown Title",
  description: "No description available.",
  posterURL: "./images/default.jpg", 
  rating: 0, 
};





export default MovieCard;
  {/* <img src="./images/star (1).png" id="rate" alt="" /> */}