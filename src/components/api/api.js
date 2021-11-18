const Api = {

  apiUrl: 'http://localhost:3002',

  fetchGetAll: () => fetch(`${Api.apiUrl}/tasks`),

  fetchGetById: (id) => fetch(`${Api.apiUrl}/task/${id}`),

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
  }
}

export default Api