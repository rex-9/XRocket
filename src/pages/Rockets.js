import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from '../components/RocketCard';
import { fetchRockets } from '../redux/rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  return (
    <div style={{ padding: '0 80px' }}>
      {rockets.map((r) => <RocketCard key={r.id} rocketData={r} />)}
    </div>
  );
}

export default Rockets;
