const toggleReservation = (data, id, property = 'reserved') => {
  let newState = data.find((rocket) => rocket.id === id);

  newState = { ...newState, [property]: !newState[property] };

  const foundIndex = data.findIndex((r) => r.id === id);

  return [foundIndex, newState];
};

export default toggleReservation;
