let allFriends
const brain =require('browser.js')

function createFriendArray(friend){
  let newArray=[]
  for(characteristic in friend){
      newArray.push(friend[characteristic])
    }
    debugger
    return newArray.slice(3,22)

  }
const appendAllFriendsOntoPage = (friends) => {
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


const fetchFriendsFromServer = (training) => {
  fetch("http://localhost:3000/friends")
    .then(response => response.json())
    .then(friends =>{
      allFriends=friends
      for(singleFriend of allFriends){
        debugger

        const network = new brain.NeuralNetwork()
        network.train(training)

        output= network.run(createFriendArray(singleFriend))
        singleFriend.index=output

      }
      allFriends.sort(function(a, b) {
        return a.index - b.index;
      })

      appendAllFriendsOntoPage(allFriends)

    })
}
