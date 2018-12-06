const renderMyProfilePage = async () => {
  fetchMyEncounters()
  const user = await getCurrentUserData(userId)
  bodyEl.innerHTML = `
    <h2>My Profile Page</h2>
    ${user.username}
    <h3>My suggested dates (not yet confirmed)</h3>
    <ul id="encounters-list"></ul>
    <hr>
    <h3>My confirmed dates</h3><br>
    <p>No dates yet confirmed :(</p>
    <hr>
    <button id="listings-btn">See my suggested matches</button>
  `
  encountersListEl = document.querySelector("#encounters-list")
  listingsButtonEl = document.querySelector("#listings-btn")
  listingsButtonEl.addEventListener("click", event => {
    appendAllFriendsOntoPage(newFriendSorted)
  })
}

const fetchMyEncounters = () =>
  fetch("http://localhost:3000/encounters")
  .then(response => response.json())
  .then(encounters => appendAllEncountersOntoPage(encounters))

const appendAllEncountersOntoPage = (encounters) => {
  encounters.forEach(encounter => {
    const newEncounter = document.createElement("li")
    newEncounter.className = "encounter-item"
    newEncounter.id = encounter.id
    newEncounter.innerHTML = `
      <p class="friend-item">Date suggested to ${encounter.friend_name}</p>
      <button class="cancel-encounter">Cancel date suggestion</button>
    `
    encountersListEl.appendChild(newEncounter)
    const cancelButtonEl = newEncounter.querySelector(".cancel-encounter")
    cancelButtonEl.addEventListener("click", event => {
      deleteEncounterFromServer(encounter.id)
      newEncounter.remove()
    })
    const friendEl = newEncounter.querySelector(".friend-item")
    friendEl.addEventListener("click", event => {
      viewFriend(encounter.friend)
    })
  })
}

const deleteEncounterFromServer = (id) =>
  fetch(`http://localhost:3000/encounters/${id}`, {
    method: "DELETE",
  })

const getCurrentUserData = (id) =>
  fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
