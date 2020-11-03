const express = require('express')
const app = express()
const hagridsHut = {
    id: '1',
    name: 'Hagrids Hut',
    messages: [
        {
            name: 'Hagrid',
            date: new Date(),
            messageText: 'Ah, go boil yer heads, both of yeh. Harry—yer a wizard.'
        }
    ]
}

const roomOfRequirements = {
    id: '2',
    name: 'Room of Requirement',
    messages: [
        {
            name: 'Harry Potter',
            date: new Date(),
            messageText: '"It is a room that a person can only enter when they have real need of it. Sometimes it is there, and sometimes it is not, but when it appears, it is always equipped for the seeker\'s needs"'
        }
    ]
}


const gryffindorHouse = {
    id: '3',
    name: 'Gryffindor House',
    messages: [
        {
            name: 'Godric Gryffindor',
            messageText: 'Where dwell the brave at heart, Their daring nerve, and chivalry'
        }
    ]
}
const hufflepuffHouse = {
    id: '4',
    name: 'Hufflepuff House',
    messages: [
        {
            name: ' Helga Hufflepuff',
            messageText: 'Where they are just and loyal, Those patient Hufflepuffs are true And unafraid of toil'
        }
    ]
}
const ravenclawHouse = {
    id: '5',
    name: 'Ravenclaw House',
    messages: [
        {
            name: 'Rowena Ravenclaw',
            messageText: 'If you\'ve a ready mind, Where those of wit and learning, Will always find their kind'
        }

    ]
}
const slytherinHouse = {
    id: '6',
    name: 'Slytherin House',
    messages: [
        {
            name: 'Salazar Slytherin',
            messageText: 'These cunning folks use any means, To achieve their ends.'
        }
    ]
}

const rooms = [
    hagridsHut,
    roomOfRequirements,
    gryffindorHouse,
    hufflepuffHouse,
    ravenclawHouse,
    slytherinHouse]

// JSON Parser
app.use(express.json())

// api
app.get('/api/rooms', function (req, res) {
    let toSimpleRoomDto = room => ({
        id: room.id,
        name: room.name
    });
    let body = rooms.map(toSimpleRoomDto);
    res.send(body);
});

app.get('/api/rooms/:roomName', function (req, res) {
    const room = rooms.find(room => room.id === req.params.roomName)
    res.send(room);
});


app.post('/api/rooms/:roomName', function (req, res) {
    const message = Message(req.body)
    const room = rooms.find(room => room.id === req.params.roomName)
    room.messages.push(message)
    res.send('saving a post');
});

app.use('/', express.static('public'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening at ${port}`))


function Message({name, messageText, date = new Date()}){
    return {name, messageText, date}
}
