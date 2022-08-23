import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../redux/mission';

const leaveStyle = {
  border: '1px solid #E87F88',
  borderRadius: '5px',
  padding: '3px 5px',
  textAlign: 'center',
  cursor: 'pointer',
  color: '#E87F88',
};

const joinStyle = {
  border: '1px solid #63686C',
  borderRadius: '5px',
  padding: '3px 5px',
  textAlign: 'center',
  cursor: 'pointer',
  color: '#63686C',
};

const Leave = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const leave = (e) => {
    e.preventDefault();
    dispatch(leaveMission(id));
  };
  return (
    <button type="button" style={leaveStyle} onClick={leave} onKeyDown={leave}>Leave Mission</button>
  );
};

const Join = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const join = (e) => {
    e.preventDefault();
    dispatch(joinMission(id));
  };
  return (
    <button type="button" style={joinStyle} onClick={join} onKeyDown={join}>Join Mission</button>
  );
};

Leave.propTypes = {
  id: PropTypes.string.isRequired,
};

Join.propTypes = {
  id: PropTypes.string.isRequired,
};

export { Join, Leave };
