const toggleReservation = (data, id, property = 'reserved') => {
  let newState = data.find((rocket) => rocket.id === id);

  newState = { ...newState, [property]: !newState[property] };

  let foundIndex = data.findIndex((r) => r.id === id);

  return [foundIndex, newState];
};

export { toggleReservation };
