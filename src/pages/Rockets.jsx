import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rocket/rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  console.log('rockets', rockets);
  return (
    <div>
      {rockets.map((r, i) => {
        return <div key={i}>{r.company}</div>;
      })}
    </div>
  );
}

export default Rockets;
