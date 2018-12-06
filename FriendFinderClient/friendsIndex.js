let allFriends
// const brain =require('browser.js')

let newFriendSorted = []

function createFriendArray(friend){
  let newArray=[]
  for(characteristic in friend){
      newArray.push(friend[characteristic])
    }
    return newArray.slice(3,25)

  }
const appendAllFriendsOntoPage = (friends) => {
  bodyEl.innerHTML = `
    <div class="friend-div">
    <button id="my-profile-button">View my profile page</button>
    <h2>Our amazing algorithm thinks you should go on a date with the following users:</h2>
    </div>
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
  <img class="friends-thumbnail" src="${friend.image}">
  <button class="view-btn">View ${friend.name}'s profile</button>
  <br>
  `
  const divEl = bodyEl.querySelector(".friend-div")
  divEl.appendChild(newFriend)
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
        return b.index - a.index;
      })

      appendAllFriendsOntoPage(newFriendSorted)

    })
}
