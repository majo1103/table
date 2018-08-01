export const FETCH_DATA = "FETCH_DATA";
function fetchData() {
  return { type: FETCH_DATA };
}

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
function fetchDataSuccess(data) {
  return { type: FETCH_DATA_SUCCESS, data };
}

const fakeDatabase = {
  people: [
    { id: 1, name: "Tanner Linsley", age: 26 },
    { id: 2, name: "Magister", age: 28 }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const requestData = () =>
  delay(5000).then(() => {
    return fakeDatabase.people;
  });

export function loadData() {
  return function(dispatch) {
    dispatch(fetchData());
    requestData().then(data => {
      dispatch(fetchDataSuccess(data));
    });
  };
}
