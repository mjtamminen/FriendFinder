const viewFriend = (friend) => {
  bodyEl.innerHTML = `
  <button id="back-btn">Back to all your matches</button>
  <h2>${friend.name}</h2>
  <img class="friend-image" src="${friend.image}">
  <button id="create-encounter-btn">Send ${friend.name} a date proposal</button>
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
