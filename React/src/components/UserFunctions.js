import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      StaffFName: newUser.StaffFName,
      StaffLName: newUser.StaffLName,
      StaffEmail: newUser.StaffEmail,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      StaffEmail: user.StaffEmail,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
