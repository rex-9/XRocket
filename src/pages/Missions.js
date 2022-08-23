import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <>
      <table style={{ width: '100%' }}>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Join/Leave</th>
        </tr>
        {
        missions.map((mission) => (
          <tr key={mission.id} style={mission.id % 2 === 0 ? { backgroundColor: 'white' } : { backgroundColor: '#F2F2F2' }}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td>{Number.isNaN(parseInt(mission.id, 10)) ? 'true' : 'false'}</td>
            <td>Join/Leave</td>
          </tr>
        ))
      }
      </table>
    </>
  );
};

export default Missions;
