import React from 'react';

function RocketCard(props) {
  const { id, description, rocket_name } = props.rocketData;
  const image = props.rocketData.flickr_images[0];

  console.log('waht:', rocket_name);

  return (
    <div>
      <p>{rocket_name}</p>
    </div>
  );
}

export default RocketCard;
