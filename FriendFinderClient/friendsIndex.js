const allFriends = []

const fetchFriendsFromServer = () => {
  fetch("http://localhost:3000/friends")
    .then(response => response.json())
    .then(friends => appendAllFriendsOntoPage(friends))
}

//Sorting function of array based on api results

const appendAllFriendsOntoPage = (friends) => {
  //Function to sort array into the correct order
  bodyEl.innerHTML = `
    <button id="my-profile-button">View my profile page</button>
    <h2>Your friends ranked based on your image matching</h2>
  `
  const myProfileButtonEl = document.querySelector("#my-profile-button")
  myProfileButtonEl.addEventListener("click", event => {
    renderMyProfilePage()
  })
  friends.forEach(friend => appendFriendOntoPage(friend))
}

const appendFriendOntoPage = (friend) => {
  const newFriend = document.createElement("div")
  newFriend.className = "friend-listing"
  newFriend.id = friend.id
  newFriend.innerHTML = `
  <h2>${friend.name}</h2>
  <img class="friend-thumbnail" src="${friend.image}">
  <button class="view-btn">View ${friend.name}'s profile</button>
  `
  bodyEl.appendChild(newFriend)
  viewBtnEl = newFriend.querySelector(".view-btn")
  viewBtnEl.addEventListener("click", event => {
    viewFriend(friend)
  })
}
