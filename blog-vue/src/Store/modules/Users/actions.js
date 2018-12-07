import axios from "axios"

export default {
  getUsers(context) {
    return new Promise((resolve, reject) => {
      axios.get('https://dfbf7113.ngrok.io/listContacts')
        .then(response => {
          resolve(response.data)
        })
        .catch(err =>reject(err))
    })
  }
}
