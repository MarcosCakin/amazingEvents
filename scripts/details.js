

const locationSearch = location.search


const params = new URLSearchParams(locationSearch)


const id = params.get('id')


const detalles = data.find(evento => evento.id == id)




const detailContainer = document.getElementById('details')

detailContainer.innerHTML() =
`
<div class="d-flex justify-content-center" >
  <img src="${detalles.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${detalles.name}</h5>
    <p class="card-text">${detalles.description}</p>
    <a href="./index.html" class="btn btn-primary">volver</a>
  </div>
</div>
`



// detailContainer.innerHTML= `
//         <div>
//             <img src="${detalles.image}" class="card-img-top rounded-top-5 my-2" id="detail-img" alt="img of ${detalles.image}">
//         </div>
//         <div class="card-body rounded-5 my-2">
//           <h2 class="card-title">${detalles.name}</h2>
//           <h5>${detalles.date}, ${detalles.place}</h5>
//           <p>${detalles.category}</p>
//           <p class="card-text">${detalles.description}</p>
//           <a href="" class="btn btn-primary">${detalles.price}</a>
//         </div>
// `
