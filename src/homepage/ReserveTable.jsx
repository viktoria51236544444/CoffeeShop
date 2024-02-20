import React from "react";
import reserve from "./assets/Reserve Img.png";
import "./aidana.scss";
import beans from "./assets/reserve-img/form-beanRight.png";
import bg2 from "./assets/reserve-img/reserver-gradient2.png";
import bg from "./assets/reserve-img/reserve-gradient1.png";

const ReserveTable = () => {
  return (
    <form className="reserve">
      <div className="reserve_table">
        <div className="img_reserve">
          <img src={reserve} width={400} alt="" />
        </div>
        <div className="inputs_reserve">
          <input className="input_input" type="text" placeholder="Date" />
          <div>
            <input
              className="input_input_time"
              type="text"
              placeholder="Time"
            />
            <input type="text" placeholder="Guest" />
          </div>
          <input className="input_input" type="text" placeholder="Name" />
          <input
            className="input_input"
            type="text"
            placeholder="Phone number"
          />
          <div>
            <input
              className="input_input_email"
              type="email"
              placeholder="Your Email"
            />
            <button className="button_reserve">Reserve</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReserveTable;
