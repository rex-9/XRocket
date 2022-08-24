import React from 'react';
import { useDispatch } from 'react-redux';
import './rocketCard-style.css';
import PropTypes from 'prop-types';
import { cancelReservation, reserveRocket } from '../redux/rocket';

const RocketCard = ({ rocketData }) => {
  const dispatch = useDispatch();
  const {
    id, description, name, reserved, image,
  } = rocketData;

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancelReserve = (id) => {
    dispatch(cancelReservation(id));
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
              type="button"
              className="btn btn--primary"
              onClick={() => handleReserve(id)}
            >
              Reserve Rocket
            </button>
          )}

          {reserved && (
            <button
              type="button"
              className="btn btn--secondary"
              onClick={() => handleCancelReserve(id)}
            >
              Cancel Reservation
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

RocketCard.protoTypes = {
  rocketData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    reserved: PropTypes.bool,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default RocketCard;
