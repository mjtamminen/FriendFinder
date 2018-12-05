let state = []

const selectCelebsYouLike = () => {
  fetch(“http://localhost:3000/celebrities“)
    .then(response => response.json())
    .then(celebrities => {
      state = celebrities
      appendAllCelebritiesOntoPage(celebrities)})
}

const appendAllCelebritiesOntoPage= (celebrities)=> {
bodyEl.innerHTML = `
  <h2>Select the celebrities you like:</h2> <br>
  <form id=“add-celebrity-form”>
  <input type=“submit” name=“submit” value=“Select the celebrities you like” id=“submit-celeb-btn”>
  </form>
  `
  celebrities.forEach(celebrity => appendCelebrityOntoPage(celebrity))
}

const appendCelebrityOntoPage = (celebrity) => {
const div=document.createElement(‘div’)
div.innerHTML=`
<h2>${celebrity.name}</h2>
<img class=“friend-thumbnail” src=“${celebrity.image}“>
<br>
`
const input = document.createElement(‘input’)
input.classList = “celeb_checkbox”
input.type = “checkbox”
input.name = celebrity.name
input.id = celebrity.id
input.celebrity = celebrity
div.appendChild(input)
celebForm=document.querySelector(“#add-celebrity-form”)
celebForm.appendChild(div)
celebForm.addEventListener(‘submit’, event=>{
event.preventDefault()
console.log(event)
let training=[]
let object
const allCheckboxes=document.querySelectorAll(“.celeb_checkbox”)
allCheckboxes.forEach(checkbox =>{
  if(checkbox.checked){
    object={input: create_Array(checkbox.celebrity), output: [1]}
    training.push(object)
  }
  else{
    object={input: create_Array(checkbox.celebrity), output: [0]}
    training.push(object)
  }
})
fetchFriendsFromServer(training)
})

function create_Array(celeb) {
let newArray=[]
for(characteristic in celeb) {
    newArray.push(celeb[characteristic])
  }
  return newArray.slice(3,22)
}
}
// const brain =require(‘brain.js’)
// const network = new brain.NeuralNetwork()
// network.train(training)
// output= network.run(“Value_of_girl”)
