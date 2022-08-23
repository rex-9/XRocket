/* eslint-disable max-len */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/mission';
import { ActiveStatus, InactiveStatus } from '../components/Status';
import { Join, Leave } from '../components/JoinLeave';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table style={{ width: '95%', border: '1px solid black' }}>
        <tr>
          <th style={{ width: '10%' }}>Mission</th>
          <th style={{ width: '50%' }}>Description</th>
          <th style={{ width: '9%' }}>Status</th>
          <th style={{ width: '8%' }}>Join/Leave</th>
        </tr>
        {
        missions.map((mission, index) => (
          <tr key={mission.id} style={index % 2 !== 0 ? { backgroundColor: 'white' } : { backgroundColor: '#F2F2F2' }}>
            <td style={{ fontWeight: 'bold', fontSize: '18px' }}>{mission.name}</td>
            <td>{mission.description}</td>
            <td>{mission.joined ? <ActiveStatus /> : <InactiveStatus />}</td>
            <td>{mission.joined ? <Leave id={mission.id} /> : <Join id={mission.id} />}</td>
          </tr>
        ))
      }
      </table>
    </div>
  );
};

export default Missions;
