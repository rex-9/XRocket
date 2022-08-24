import React from 'react';
import './rocketCard-style.css';

function RocketCard(props) {
  let { id, description, name, reserved, image } = props.rocketData;
  reserved = true;

  return (
    <section className="rocket-card-component">
      <div className="rocket">
        <div className="left">
          <div className="rocket__img">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="right">
          <h2>{name}</h2>
          <p>
            {reserved && <span className="reserved">Reserved</span>}
            {description}
          </p>
          <button>Reserve</button>
        </div>
      </div>
    </section>
  );
}

export default RocketCard;
