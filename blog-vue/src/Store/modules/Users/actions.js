import axios from "axios"
const BASE_URL = 'https://dfbf7113.ngrok.io'

export default {
  getAllUsers(context) {
    return new Promise((resolve, reject) => {
      axios({
        url: BASE_URL + '/listContacts',
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
        .then(response => {
          resolve(response.data)
        })
        .catch(err => reject(err))
      })
    })
  }
}
