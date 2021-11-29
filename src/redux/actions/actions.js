export const ADD_EVENT = "ADD_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

export const addEVENT = ({ name, date, place, style, color, phoneNumber }) => ({
  type: ADD_EVENT,
  payload: {
    name: name,
    date: date,
    place: place,
    style: style,
    color: color,
    phoneNumber: phoneNumber,
  },
});

export const deleteEVENT = (name) => ({
  type: DELETE_EVENT,
  name: name,
});
