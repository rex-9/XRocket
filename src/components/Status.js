const activeStyle = {
  borderRadius: '5px',
  color: 'white',
  padding: '3px 10px',
  textAlign: 'center',
  backgroundColor: '#1BA3B8',
};

const inactiveStyle = {
  borderRadius: '5px',
  color: 'white',
  padding: '3px 10px',
  textTransform: 'uppercase',
  textAlign: 'center',
  backgroundColor: '#6D757D',
};

const ActiveStatus = () => (
  <div style={activeStyle}>
    Active Member
  </div>
);

const InactiveStatus = () => (
  <div style={inactiveStyle}>
    Not a member
  </div>
);

export { ActiveStatus, InactiveStatus };
