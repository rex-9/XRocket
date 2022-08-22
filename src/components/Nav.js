import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const navLinkStyles = ({ isActive }) => ({
  fontSize: '18px',
  marginRight: '40px',
  color: '#3696FF',
  textDecoration: isActive ? 'underline' : 'none',
});
const Nav = () => (
  <>
    <div className="menu">
      <div className="leftNav">
        <img
          width="80px;"
          height="80px;"
          src={planet}
          alt=""
        />
        <header>Space Traveler&apos;s Hub</header>
      </div>
      <nav>
        <NavLink style={navLinkStyles} to="/">Rockets</NavLink>
        <NavLink style={navLinkStyles} to="/missions">Missions</NavLink>
        <NavLink style={navLinkStyles} to="/profile">My Profile</NavLink>
      </nav>
    </div>
  </>
);
export default Nav;
