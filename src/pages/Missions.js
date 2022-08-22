const missions = [{
  id: 1,
  mission: 'Thaicom',
  description: 'Description of Thaicom',
  status: false,
}, {
  id: 2,
  mission: 'Telstar',
  description: 'Description of Telstar',
  status: true,
}, {
  id: 3,
  mission: 'Iridium NEXT',
  description: 'Description of Iridium NEXT',
  status: false,
}];

const Missions = () => (
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
            <td>{mission.mission}</td>
            <td>{mission.description}</td>
            <td>{mission.status ? 'true' : 'false'}</td>
            <td>Join/Leave</td>
          </tr>
        ))
      }
    </table>
  </>
);

export default Missions;
