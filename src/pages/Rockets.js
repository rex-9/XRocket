import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from '../components/RocketCard';
import { fetchRockets } from '../redux/rocket';

function Rockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const rockets = useSelector((state) => state.rockets.rockets);
  console.log(rockets);

  return (
    <div>
      {rockets.map((r) => {
        return <RocketCard key={r.id} rocketData={r} />;
      })}
    </div>
  );
}

export default Rockets;
