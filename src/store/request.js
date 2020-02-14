function request(url, headers = {
  method: 'GET'
}) {
  return new Promise((resolve, reject) => {
    fetch(url, headers)
      .then(response => {
        const json = response.json();
        return resolve(json);
      })
      .catch(err => {
        return reject(err);
      })
  });
};

export default request;