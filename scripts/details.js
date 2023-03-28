

const locationSearch = location.search


const params = new URLSearchParams(locationSearch)


const id = params.get('id')


const detalles = amazingEventsData.events.find(element => element.id == id)



const detailContainer = document.getElementById('divDetails')

detailContainer.innerHTML =
`
<div class="detailCard">
    <div class="divImg"> 
      <img src="${detalles.image}" class="detailImg" alt="event image">
    </div>
    <div class="textDetail">
        <h1>${detalles.name}</h1>
        <h6>${detalles.description}</h6>
        <p>Date: ${detalles.date}</p>
        <p>Category: ${detalles.category}</p>
        <p>Place: ${detalles.place}</p>
        <h3 class="btn btn-success">U$${detalles.price}</h3>
        <a href="./index.html" class="btn btn-secondary">Volver</a>
    </div>
</div>
`