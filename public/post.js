// functions to update the page from data

function setPageTitle(newTitle) {
    document.title = newTitle
}

function setRoomName(roomName) {
    let roomNameDiv = document.getElementById('roomName')
    roomNameDiv.textContent = roomName
}

function extractMessageFromInputFields() {
    let nameInput = document.getElementById('nameInput')
    let messageTextInput = document.getElementById('messageTextInput')
    let message = {
        name: nameInput.value,
        messageText: messageTextInput.value
    }
    return message
}

function postMessage() {
    let message = extractMessageFromInputFields()    

    let postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)        
    }

    fetch('api/rooms/'+roomId, postOptions)
        .then((response) => { console.log(response)})
        .then(() => document.location = '/room.html?roomId=' + roomId)
}

// Utility method to support reading a "parameter" from the anchor tag that brought us here
// https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
function getParametersFromUrl() {
    let queryDict = {}
    location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})
    return queryDict
}

let roomId = getParametersFromUrl().roomId

// make your fetch call and update the page accordingly
fetch('/api/rooms/' + roomId)
    .then((response) => response.json())
    .then((roomData) => {
        setRoomName(roomData.name)
    })
