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

const Leave = () => (
  <div style={leaveStyle}>Leave Mission</div>
);

const Join = () => (
  <div style={joinStyle}>Join Mission</div>
);

export { Join, Leave };
