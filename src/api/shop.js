import axios from 'axios';

const URI = 'http://localhost:8080/applications'

const getApplications = () => {
  return axios.get(URI)
    .then((response) => {
      console.log(response);
      return response.data;
    })
  // .catch(function (error) {
  //   console.log(error);
  // });
};

const addApplications = (application) => {
  return axios.post(`${URI}`, {
    name: application.name
  })
    .then((response) => {
      console.log(response);
      return response.data;
    })
  // .catch(function (error) {
  //   console.log(error);   
  // });
};

const deleteApplications = (application) => {
  return axios.delete(`${URI}/${application.name}`)
    .then(() => {
    })
  // .catch(function (error) {
  //   console.log(error);   
  // });
};

export default {
  // getApplications: (cb, timeout) => setTimeout(() => cb(applications), timeout || TIMEOUT),
  getApplications,
  addApplications,
  deleteApplications,
}