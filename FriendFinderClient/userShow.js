const renderMyProfilePage = async () => {
  const user = await getCurrentUserData(userId)
  bodyEl.innerHTML = `
    <h2>My Profile Page</h2>
    ${user.username}
    <h3>My planned encounters</h3>
    <ul id="encounters-list"></ul>
    <button id="listings-btn">See my suggested friends</button>
  `
  encountersListEl = document.querySelector("#encounters-list")
  fetchMyEncounters()
  listingsButtonEl = document.querySelector("#listings-btn")
  listingsButtonEl.addEventListener("click", event => {
    fetchFriendsFromServer()
  })
}

const fetchMyEncounters = () =>
  fetch("http://localhost:3000/encounters")
  .then(response => response.json())
  .then(encounters => appendAllEncountersOntoPage(encounters))

const appendAllEncountersOntoPage = (encounters) => {
  encounters.forEach(encounter => {
    console.log(encounter)
    const newEncounter = document.createElement("li")
    newEncounter.className = "encounter-item"
    newEncounter.id = encounter.id
    newEncounter.innerHTML = `
      <p class="friend-item">${encounter.friend_name} will be coming over for ${encounter.duration} minutes</p>
      <button class="cancel-encounter">Cancel encounter</button>
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
