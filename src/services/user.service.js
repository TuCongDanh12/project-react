import axios from 'axios'
// import { USER_API } from '../config/api'
// import ResetPassword from './../pages/ResetPassword/index'

export const userservice = {
  register(data) {
    // eslint-disable-next-line no-undef
    return axios.post('https://course.spacedev.vn/users/register', data)
  },
  resetpassword(data) {
    return axios.post('https://course.spacedev.vn/users/reset-password', data)
  },
  changepassword(data, token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    }
    return axios.post(
      'https://course.spacedev.vn/users/change-password',
      data,
      config,
    )
  },
  getinfo(token) {
    // Tạo một đối tượng cấu hình (config) cho yêu cầu GET
    const config = {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    }

    // Thực hiện yêu cầu GET với cấu hình đã tạo
    return axios.get('https://course.spacedev.vn/users', config)
  },
}
