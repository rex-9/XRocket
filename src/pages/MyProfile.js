/* eslint-disable max-len */

import { useSelector } from 'react-redux';

const MyProfile = () => {
  const allMissions = useSelector((state) => state.missions);
  const joinedMissions = allMissions.filter(
    (mission) => mission.joined === true
  );
  let missions = [];
  if (joinedMissions !== null) {
    missions = joinedMissions;
  }

  // rockets
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <>
      <div className="profile">
        <div className="missionProfiles">
          <h1>My Missions</h1>
          {missions.map((mission) => (
            <div key={mission.id}>{mission.name}</div>
          ))}
        </div>

        <div className="rocketProfiles">
          <h1>My Rockets</h1>
          {reservedRockets.map((r) => (
            <div key={r.id}>{r.name}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
