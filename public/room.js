// functions to update the page from data

function setPageTitle(newTitle) {
    document.title = newTitle
}

function setRoomName(roomName) {
    let roomNameDiv = document.getElementById('roomName')
    roomNameDiv.textContent = roomName
}

function makeDivWithClassAndText(className, text) {
    let div = document.createElement('div')
    div.classList.add(className)
    div.textContent = text
    return div
} 

function makeMessageDiv(message) {
    console.log('rendering message')
    console.log(message)

    let messageDiv = document.createElement('div')
    messageDiv.classList.add('message-panel')

    let dateDiv = makeDivWithClassAndText('message-date', message.date)
    let textDiv = makeDivWithClassAndText('message-text', message.messageText)
    let fromDiv = makeDivWithClassAndText('message-from', message.name)

    messageDiv.appendChild(dateDiv)
    messageDiv.appendChild(textDiv)
    messageDiv.appendChild(fromDiv)

    return messageDiv
}

function populateMessageList(messageArray) {
    let messageListDiv = document.getElementById('messageList')
    messageArray.forEach((message) => {
        let messageDiv = makeMessageDiv(message)
        messageListDiv.appendChild(messageDiv)
    })    
}

function populateRoom(roomData) {
    setPageTitle(roomData.name + " - Message Board")
    setRoomName(roomData.name)
    populateMessageList(roomData.messages)
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
        console.log('I got the room!')
        console.log(roomData)
        populateRoom(roomData)
    })
