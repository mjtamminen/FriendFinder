const allFriends = []

const fetchFriendsFromServer = () =>
  fetch(URL)
    .then(response => response.json())
    .then((friends) => {
      allFriends = friends
      appendAllFriendsOntoPage()
    })

//Sorting function of array based on api results

const appendAllFriendsOntoPage = () => {
  //Function to sort array into the correct order
  bodyEl.innerHTML = `
    <h2>Your friends ranked based on your image matching</h2>
  `
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
  const viewBtnEl = newFriend.querySelector(".view-btn")
  viewBtnEl.addEventListener("click", event => {
    viewFriend(friend)
  })
}
