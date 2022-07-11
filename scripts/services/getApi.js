// eslint-disable-next-line no-unused-vars
const getData = async () => {
  return fetch('../../data/photographers.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      return console.log(err)
    })
}
