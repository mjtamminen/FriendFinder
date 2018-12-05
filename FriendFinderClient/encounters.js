const createEncounter = (friend) => {
  bodyEl.innerHTML = `
    <form id="encounter-form">
      <h2>What time would you like ${friend.name} to come over?</h2>
      <input id="time-input" type="time">
      <br>
      <p>How long would you like to hang out with ${friend.name}:</p>
      <select id="duration-input" name="duration">
        <option value="60">One Hour</option>
        <option value="120">Two Hours</option>
        <option value="180">Five Hours</option>
      </select>
      <br>
      <p>How would you like to pay for your encounter?</p>
      <select id="payment-typet" name="marital-status">
        <option value=""></option>
        <option value="cash">Cash (obviously)</option>
      </select>
      <br>
      <input type="submit" name="submit" value="Book Encounter <3" id="submit-encounter-btn">
    </form>
  `
  encounterFormEl = document.querySelector("#encounter-form")
  timeEl = document.querySelector("#time-input")
  durationEl = document.querySelector("#duration-input")
  encounterFormEl.addEventListener("submit", event => {
    event.preventDefault()
    const encounter = {
      user_id: userId,
      friend_id: friend.id,
      time: timeEl.value,
      duration: durationEl.value
    }
    postEncounterOntoServer(encounter)
    renderMyProfilePage()
  })
}

const postEncounterOntoServer = (encounter) => {
  fetch("http://localhost:3000/encounters", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(encounter)
  })
  .then(response => response.json())
  .catch(err => alert(err))
}
