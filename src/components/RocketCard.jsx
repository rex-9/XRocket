import React from 'react';
import { useDispatch } from 'react-redux';
import './rocketCard-style.css';
import { reserveRocket } from '../redux/rocket';

function RocketCard(props) {
  const dispatch = useDispatch();
  const { id, description, name, reserved, image } = props.rocketData;

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

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

          {!reserved && (
            <button
              className="btn btn--primary"
              onClick={() => handleReserve(id)}>
              Reserve Rocket
            </button>
          )}

          {reserved && (
            <button
              className="btn btn--secondary"
              onClick={() => handleReserve(id)}>
              Reserve Rocket
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default RocketCard;
