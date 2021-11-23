const Api = {

  apiUrl: 'https://backend-pleaseletsdoit.herokuapp.com',

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

  fetchPut: (task, id) => {
    return fetch(
      `${Api.apiUrl}/edit/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify(task),
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