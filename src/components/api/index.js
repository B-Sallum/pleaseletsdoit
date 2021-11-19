const Api = {

  apiUrl: 'http://localhost:3002',

  fetchGetAll: () => fetch(`${Api.apiUrl}/tasks`),

  fetchGetById: (id) => fetch(`${Api.apiUrl}/task/${id}`),

  // fetchPost: (req, res) => {

  //     fetch(
  //       `${Api.apiUrl}/new`,
  //       {
  //         method: 'POST',
  //         body: JSON.stringify(req),
  //         headers: new Headers({
  //           "Content-Type": "application/json"
  //         })
  //       }
  //     )
  //     .then
  // },

  fetchPost: (data) => {

    return fetch(
      `${Api.apiUrl}/new`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    )
  },

  fetchDelete: (id) => fetch(
    `${Api.apiUrl}/delete/${id}`,
    {
      method: 'DELETE'
    }
  )
}

export default Api