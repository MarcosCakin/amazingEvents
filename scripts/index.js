fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((res)=>res.json())
.then((datos)=>{
    /*Functions print*/
  printCard(datos.events)
  crearCheckboxes(datos.events)
    /*Events*/
    function bothFilters() {
      let firstFilter = textFilter(datos.events, searchInput.value)
      let secondFilter = categoryFilter(firstFilter)
      printCard(secondFilter)
    }    
  searchInput.addEventListener('input', bothFilters)
  checkboxesContainer.addEventListener('change', bothFilters)
})

const cardsContainer = document.getElementById('articleJs')
const checkboxesContainer = document.getElementById('checkboxContainer')
const searchInput = document.querySelector('input')
  
  // FUNCTIONS
function printCard(array){
  if (array.length == 0) {
    cardsContainer.innerHTML = `<h1 class="display-1 fw-bolder fillearMain">NOT FOUND!</h1>`
    return
  }
  let cards = ''
  array.forEach(event => {
    cards += `<div class="card rounded-top-5">
    <img src="${event.image}" class="card-img-top p-2 rounded-top-5 border-bottom" alt="card picture">
    <div class="card-body">
      <h3 class="card-title">${event.name}</h3>
      <h6 class="card-text">${event.description}</h6>
      <a href="./details.html?id=${event._id}" class="btn btn-primary">Details</a>
    </div>
  </div>`
  })
  cardsContainer.innerHTML = cards
}
 
function crearCheckboxes(array) {
  let arrayCat = array.map(event => event.category)
  let setCat = new Set(arrayCat)
  let checkboxes = ''
  setCat.forEach(category => {
    checkboxes += `<div class="form-check form-check-inline">
                    <label class="form-check-label"><input class="form-check-input" type="checkbox" id="${category}" value="${category}">${category}</label>
                  </div>`
  })
  checkboxesContainer.innerHTML = checkboxes
}

function textFilter(array, texto) {
  let arrayFiltrado = array.filter(element => element.name.toLowerCase().includes(texto.toLowerCase()))
  return arrayFiltrado
}

function categoryFilter(array){
  let checkboxes = document.querySelectorAll('input[type="checkbox"]')
  let arrayChecks = Array.from(checkboxes)
  let arrayChecksChecked = arrayChecks.filter(check => check.checked)
  let arrayCheckCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
  let arrayFiltrado = array.filter(element => arrayCheckCheckedValues.includes(element.category))
  if (arrayChecksChecked.length > 0){
    return arrayFiltrado
  }
  return array
}