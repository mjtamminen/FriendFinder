let allFriends
// const brain =require('browser.js')

let newFriendSorted = []

function createFriendArray(friend){
  let newArray=[]
  for(characteristic in friend){
      newArray.push(friend[characteristic])
    }
    return newArray.slice(3,22)

  }
const appendAllFriendsOntoPage = (friends) => {
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
  <br>
  `
  bodyEl.appendChild(newFriend)
  viewBtnEl = newFriend.querySelector(".view-btn")
  viewBtnEl.addEventListener("click", event => {
    viewFriend(friend)
  })
}

const fetchFriendsFromServer = (training) => {

  fetch("http://localhost:3000/friends")
    .then(response => response.json())
    .then(friends => {
      allFriends=friends
      for(singleFriend of allFriends){

        const network = new brain.NeuralNetwork()
        network.train(training)
        output= network.run(createFriendArray(singleFriend))
        singleFriend.index=output

      }
      newFriendSorted= allFriends.sort(function(a, b) {
        return a.index - b.index;
      })

      appendAllFriendsOntoPage(newFriendSorted)

    })
}
