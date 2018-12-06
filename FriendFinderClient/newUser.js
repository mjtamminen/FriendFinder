const bodyEl = document.querySelector("#body")
let userId


//Create new user form on page
const showNewUserForm = () => {
bodyEl.innerHTML = `
  <form id="add-user-form">
    <h2>Create your profile!</h2>
    <input id="username-input" type="text" placeholder="Enter your username">
    <br>
    <input type="submit" name="submit" value="Create New User" id="submit-btn">
  </form>
      `
  formEl = document.querySelector("#add-user-form")
  usernameEl = document.querySelector("#username-input")
  incomeEl = document.querySelector("#income-input")
  statusEl = document.querySelector("#marital-input")
  formEl.addEventListener("submit", event => {
    event.preventDefault()
    const user = {
      username: usernameEl.value
    }
    postNewUserToServer(user)
    selectCelebsYouLike()
    // bodyEl.innerHTML =
      //Show grid here of celebrity photos (Dario)
      //Add event listeners on all the images of celebrities
      //Calculate parameters
      //Call functions on friendsIndex.js

  })
}

//Post new user to server
const postNewUserToServer = (user) => {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(json => {userId = json.id})
  .catch(err => alert(err))
}

showNewUserForm()
