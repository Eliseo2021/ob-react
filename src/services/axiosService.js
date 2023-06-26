import APIRequest, {chuckNorrisApi} from '../utils/config/axios.config';

export function getRandomUser() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
    }); // https://randomuser.me/api/ 
}

// https://api.chucknorris.io/
export function getRandomJoke() {
  return chuckNorrisApi.get('/jokes/random', {
      validateStatus: function (status) {
          return status < 500;
      }
  });
}
