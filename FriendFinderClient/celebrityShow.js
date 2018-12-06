let state = []

const selectCelebsYouLike = () => {
  fetch("http://localhost:3000/celebrities")
    .then(response => response.json())
    .then(celebrities => appendAllCelebritiesOntoPage(celebrities))
}

const appendAllCelebritiesOntoPage= (celebrities)=> {
bodyEl.innerHTML = `
  <h2>Pick your celebrity crushes below!</h2> <br>
  <form id='add-celebrity-form'>
  <input class='button' type='submit' name='submit' value='Submit your crushes (loading time up to 1 minute)' id='submit-celeb-btn'>
  </form>
  <br>
  `
  celebrities.forEach(celebrity => appendCelebrityOntoPage(celebrity))
  celebForm=document.querySelector("#add-celebrity-form")
  celebForm.addEventListener('submit', event=>{
    event.preventDefault()
    let training=[]
    let object
    const allCheckboxes=document.querySelectorAll(".celeb_checkbox")
    allCheckboxes.forEach(checkbox =>{
      if(checkbox.checked){
        object={input: create_Array(checkbox.celebrity), output: [1]}
        training.push(object)
      }
      else {
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
  return newArray.slice(3,25)
  }
}

const appendCelebrityOntoPage = (celebrity) => {
  const div=document.createElement('div')
  div.classList.add('card')
  div.innerHTML=`
  <h2>${celebrity.name}</h2>
  <div class="img_wrapper">
    <img class='friend-thumbnail' src='${celebrity.image}'>
  </div>
  `
  div.className="celebrity-card"
  const input = document.createElement('input')
  input.classList = 'celeb_checkbox'
  input.type = 'checkbox'
  input.name = celebrity.name
  input.id = celebrity.id
  input.celebrity = celebrity
  div.appendChild(input)

  celebForm=document.querySelector("#add-celebrity-form")
  celebForm.appendChild(div)
  const celebImgEl = div.querySelector('.friend-thumbnail')
  celebImgEl.addEventListener('click', event => {
    celebImgEl.style.borderStyle ='solid'
    celebImgEl.style.borderColor ='red'
    input.checked=!input.checked
  })
}
