let queue = []

const initializeSocket = (io) => {
    io.on('connection', (socket) => {
        console.log(socket.id + " connected")
    
        socket.on("client-entered", (clientName) => {
            if (queue.includes(clientName)) {
                io.emit('client-entered', null)
            } else {
                console.log(`${clientName.split('').reverse().join('')} joined the queue.`);
                queue.push(clientName);
                io.emit('client-entered', queue);
            }
        })
    
        socket.on("client-left", (clientName) => {
            if (!queue.includes(clientName)) {
                io.emit('client-left', null)
            } else {
                console.log(`${clientName.split('').reverse().join('')} joined the queue.`);
                queue = queue.filter((item) => item !== clientName)
                io.emit('client-left', queue)
            }
        })
    })
}
const getQueue = async (req, res) => {
    res.send(queue);
}

module.exports = {initializeSocket, getQueue}