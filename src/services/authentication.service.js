import axios from 'axios'
// import { USER_API } from '../config/api'
export const authenticationservice = {
  login(data) {
    return axios.post(
      'https://course.spacedev.vn/authentication/v2/login',
      data,
    )
  },
}
