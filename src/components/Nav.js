import { Link } from 'react-router-dom';
import { useState } from 'react';
import planet from '../assets/planet.png';

const style = {
  textDecoration: 'none', fontFamily: 'Montserrat', color: '#A7A7A7', letterSpacing: '1.9px',
};

const hoverStyle = {
  textDecoration: 'none', fontFamily: 'Montserrat', color: '#121212', letterSpacing: '1.9px',
};

const planetLogo = {
  backgroundColor: 'white', borderRadius: '50%', padding: '5px',
};

const Nav = () => {
  const [rocketsHover, setRocketsHover] = useState(false);
  const [missionsHover, setMissionsHover] = useState(false);
  const [myProfileHover, setMyProfileHover] = useState(false);

  const rocketsEnter = () => {
    setRocketsHover(true);
  };

  const rocketsLeave = () => {
    setRocketsHover(false);
  };

  const missionsEnter = () => {
    setMissionsHover(true);
  };

  const missionsLeave = () => {
    setMissionsHover(false);
  };

  const myProfileEnter = () => {
    setMyProfileHover(true);
  };

  const myProfileLeave = () => {
    setMyProfileHover(false);
  };

  return (
    <nav>
      <div id="menu">
        <header>Tesla</header>
        <ul>
          <li onMouseEnter={rocketsEnter} onMouseLeave={rocketsLeave}>
            <Link
              style={rocketsHover ? hoverStyle : style}
              to="/"
            >
              Rockets
            </Link>
          </li>
          <li onMouseEnter={missionsEnter} onMouseLeave={missionsLeave}>
            <Link
              style={missionsHover ? hoverStyle : style}
              to="/missions"
            >
              Missions
            </Link>
          </li>
          <li onMouseEnter={myProfileEnter} onMouseLeave={myProfileLeave}>
            <Link
              style={myProfileHover ? hoverStyle : style}
              to="/profile"
            >
              My Profile
            </Link>
          </li>
        </ul>
      </div>
      <img
        width="30px;"
        height="30px;"
        style={planetLogo}
        src={planet}
        alt=""
      />
    </nav>
  );
};
export default Nav;
