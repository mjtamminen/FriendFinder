const createEncounter = (user, friend) => {
  bodyEl.innerHTML = `
    <form id="encounter-form">
      <h2>What time would you like ${friend.name} to come over?</h2>
      <input id="time-input" type="time">
      <br>
      <select id="duration-input" name="duration">
        <option value="one-hour">One Hour</option>
        <option value="two-hours">Two Hours</option>
        <option value="five-hours">Five Hours</option>
      </select>
      <br>
      <p>Select your marital status:</p>
      <select id="marital-input" name="marital-status">
        <option value="married">Married</option>
        <option value="single">Single</option>
        <option value="in a relationship">In a relationship</option>
      </select>
      <br>
      <input type="submit" name="submit" value="Book Encounter <3" id="submit-encounter-btn">
    </form>
  `
  const encounterFormEl = document.querySelector("#encounter-form")
  encounterFormEl.addEventListener("submit", event => {
    event.preventDefault()
    
  })
}
