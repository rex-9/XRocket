import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rocket';

function Rockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const rockets = useSelector((state) => state.rockets.rockets);

  return <div>

    



  </div>;
}

export default Rockets;
