import React from 'react';

function RocketCard(props) {
  const { id, description, rocket_name } = props.rocketData;
  const image = props.rocketData.flickr_images[0];

  return (
    <section className="rocket-card-component">
      <div className="rocket">
        <div className="left">
          <div className="rocket__img">
            <img src={image} alt="" />
          </div>
        </div>

        <div className='right'>
          <h2>{rocket_name}</h2>
          <p>{description}</p>
          <button>Reserve</button>
        </div>
      </div>
    </section>
  );
}

export default RocketCard;
