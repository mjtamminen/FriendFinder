const bodyEl = document.querySelector("#body")
const url = `http://localhost:3000/users`

//Create new user form on page
const showNewUserForm = () => {
bodyEl.innerHTML = `
  <form id="add-user-form">
    <h2>Create your profile!</h2>
    <input id="username-input" type="text" placeholder="Enter your username">
    <br>
    <input id="income-input" type="text" placeholder="Enter your REAL income for 2018">
    <br>
    <p>Select your marital status:</p>
    <select id="marital-input" name="marital-status">
      <option value="married">Married</option>
      <option value="single">Single</option>
      <option value="in a relationship">In a relationship</option>
    </select>
    <br>
    <input type="submit" name="submit" value="Create New User" id="submit-btn">
  </form>
      `
      debugger
  const formEl = document.querySelector("#add-user-form")
  const usernameEl = document.querySelector("#username-input")
  const incomeEl = document.querySelector("#income-input")
  const statusEl = document.querySelector("#marital-input")
  formEl.addEventListener("submit", event => {
    event.preventDefault()
    const user = {
      username: usernameEl.value,
      income: incomeEl.value,
      marital_status: statusEl.value
    }
    postNewUserToServer(user)
    formEl.reset()
    // bodyEl.innerHTML =
      //Show grid here of celebrity photos (Dario)
      //Add event listeners on all the images of celebrities
      //Calculate parameters
      //Call functions on friendsIndex.js

  })
}

//Post new user to server
const postNewUserToServer = (user) => {
  fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .catch(err => alert(err))
}

showNewUserForm()
