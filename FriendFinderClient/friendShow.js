const viewFriend = (friend) => {
  bodyEl.innerHTML = `
  <button id="back-btn">Back to all friends page</button>
  <h2>${friend.name}</h2>
  <img class="friend-image" src="${friend.image}">
  <button id="create-encounter-btn">Book an encounter with ${friend.name} <3</button>
  `
  backBtnEl = document.querySelector("#back-btn")
  backBtnEl.addEventListener("click", event => {
    
    appendAllFriendsOntoPage(newFriendSorted)
  })
  createEncounterEl = document.querySelector("#create-encounter-btn")
  createEncounterEl.addEventListener("click", event => {
    createEncounter(friend)
  })
}
