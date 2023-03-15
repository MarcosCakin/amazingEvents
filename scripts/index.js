function printCard(array){
  let cards = ''
  for (let event of amazingEventsData.events) {
    cards += `
    <div class="card rounded-top-5">
      <img src="${event.image}" class="card-img-top p-2 rounded-top-5 border-bottom" alt="card picture">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <a href="./details.html" class="btn btn-primary">Details</a>
      </div>
    </div>
      `
    }
    cardsContainer.innerHTML = cards;
}

const cardsContainer = document.getElementById('articleJs')
printCard(amazingEventsData)