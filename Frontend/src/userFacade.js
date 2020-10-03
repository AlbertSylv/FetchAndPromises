
  const URL = "http://localhost:3333/api/users/"

  function addUser(user) {
    const options = makeOptions("POST", user)
    return fetch(URL, options)
    .then(handleHttpErrors)
  }
  
  function getUserById(id) {
    let getURL = URL + "/" + id
    return fetch(getURL)
    .then(res=>res.json())
  }
  
  function getUsers() {
    return fetch(URL)
    .then(res=>res.json())
  }

  function editUser(id, user) {
    const options = makeOptions("PUT", user)
    let putURL = URL + "/" + id
    return fetch(putURL, options)
    .then(handleHttpErrors)
    
  }

  function deleteUser(id) {
    const options = makeOptions("DELETE", "")
    let putURL = URL + "/" + id
    return fetch(putURL, options)
    .then(handleHttpErrors)
    
  }
  
  /* Make sure you understand what we create here, it involves VITAL JavaScript knowledge */
  const userFacade = {
    addUser,
    getUserById,
    getUsers,
    editUser,
    deleteUser
  }

  function makeOptions(method, body) {
    var opts =  {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    if(body){
      opts.body = JSON.stringify(body);
    }
    return opts;
   }
   

   function handleHttpErrors(res){
    if(!res.ok){
      return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
   }
   
  
  
  
  
  export default userFacade;