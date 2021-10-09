import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const delName = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then()
    .catch((error) => {
      console.log("failed");
    });
};

const createName = (nameObject) => {
  const request = axios.post(baseUrl, nameObject);
  return request.then((response) => response.data);
};

export default { getAll, delName, createName };
