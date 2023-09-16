import React from "react";
import "/src/global.css";

const Cards = (props) => {
  return (
    <div>
      <div className="movie_cards">
        <div className="movie_poster">
          <img
            src="https://s3images.zee5.com/wp-content/uploads/2022/01/Screenshot_20220126-125425__012022012607245520220126074542.jpg"
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div className="movie_title">{props.title}</div>
        <div className="movie_year">2023</div>
      </div>
    </div>
  );
};

export default Cards;
