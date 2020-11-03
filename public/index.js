
function makeRoomSummaryDiv(roomSummary) {
    console.log('making room summary')
    let roomDiv = document.createElement('div')
    
    let roomNameDiv = document.createElement('h3')
    roomNameDiv.textContent = roomSummary.name

    let roomAnchor = document.createElement('a')
    roomAnchor.setAttribute('href', '/room.html?roomId=' + roomSummary.id)
    roomAnchor.textContent = 'go to ' + roomSummary.name

    roomDiv.appendChild(roomNameDiv)
    roomDiv.appendChild(roomAnchor)
    return roomDiv
}

function populateRoomList(roomSummaryArray) {
    let roomListDiv = document.getElementById('roomList')
    roomSummaryArray.forEach((roomSummary) => {
        let roomDiv = makeRoomSummaryDiv(roomSummary)
        roomListDiv.appendChild(roomDiv)
    })    
}

fetch('/api/rooms')
    .then((response) => response.json())
    .then((roomSummaryData) => {
        populateRoomList(roomSummaryData)
    })
