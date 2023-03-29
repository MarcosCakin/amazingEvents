fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(res => res.json())
  .then(data => {
    arrayPast = pastData(data.events, data.currentDate)
    arrayUpcoming= futureData(data.events, data.currentDate)
    console.log(arrayPast)
    printTable(results(assistance(arrayPast), assistance(arrayPast).reverse(), capacity(arrayPast)), "importantStats")
    printSecondTable(dataTable(arrayUpcoming), "upcomingStats")
    printSecondTable(dataTable(arrayPast), "pastStats")
  })


function futureData(data, currentDate) {
  return data.filter(evento => evento.date > currentDate)
}
function pastData(data, currentDate) {
  return data.filter(event => event.date < currentDate)
}

function assistance(pastArray) {
  const percentArray = pastArray.map(event => {
    return {
      attendance: (event.assistance / event.capacity) * 100,
      nameEvent: event.name
    }
  })
  percentArray.sort((a, b) => b.attendance - a.attendance)
  console.log(percentArray)
  return percentArray

}

function capacity(pastArray) {
  const capacityArray = pastArray.map(event => {
    return {
      capacity: event.capacity,
      nameEvent: event.name
    }
  })
  capacityArray.sort((a, b) => b.capacity - a.capacity)
  console.log(capacityArray)
  return capacityArray

}

function results(highestPercentage, lowestPercentage, largerCapacity) {
  let all = {
    highestPercentage: highestPercentage[0].nameEvent,
    lowestPercentage: lowestPercentage[0].nameEvent,
    largerCapacity: largerCapacity[0].nameEvent
  }
  return all
}

function printTable(results, container) {
  const table = document.getElementById(container)
  table.innerHTML = `
  <tr>
      <td>${results.highestPercentage}</td>
      <td>${results.lowestPercentage}</td>
      <td>${results.largerCapacity}</td>
  </tr>
  `
}

function dataTable(array) {
  let categories = Array.from(new Set(array.map(a => a.category)));
  let eventCategories = categories.map(cat => array.filter(event => event.category == cat))
  let result = eventCategories.map(eventCat => {
    let calculate = eventCat.reduce((acc, event) => {
      console.log(event)
      acc.category = event.category;
      acc.revenues += event.price * (event.assistance || event.estimate);
      acc.attendance += ((event.assistance || event.estimate) * 100) / event.capacity
      return acc
    }, {
      category: "",
      revenues: 0,
      attendance: 0
    })
    calculate.attendance = calculate.attendance / eventCat.length
    return calculate
  })
  return result;
}

function printSecondTable(array, idTag) {
  const upcomingTable = document.getElementById(idTag)
  let html = array.map(events => {
    return `
      <tr>
              <td>${events.category}</td>
              <td>$${events.revenues}</td>
              <td>${events.attendance.toFixed(2)}%</td>
          </tr>
      `
  })
  upcomingTable.innerHTML = html.join("")
}