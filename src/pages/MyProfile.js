/* eslint-disable max-len */

import { useSelector } from 'react-redux';

const MyProfile = () => {
  const allMissions = useSelector((state) => state.missions);
  const joinedMissions = allMissions.filter((mission) => mission.joined === true);
  let missions = [];
  if (joinedMissions !== null) {
    missions = joinedMissions;
  }

  return (
    <>
      <div className="profile">
        <div className="missionProfiles">
          <h1>My Missions</h1>
          {
            missions.map((mission) => <div key={mission.id}>{mission.name}</div>)
          }
        </div>
        <div className="rocketProfiles">
          <h1>My Rockets</h1>
          <div>Rocket 1</div>
          <div>Rocket 2</div>
          <div>Rocket 3</div>
          <div>Rocket 4</div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
