let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        messages.push({
            id: id,
            text: req.body.text,
            time: req.body.time
        })
        id++
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        let id = req.params.id
        let messageIndex = messages.findIndex(message => message.id == id)

        messages[messageIndex] = {
            id: messages[messageIndex].id,
            text: req.body.text,
            time: req.body.time
        }

        res.status(200).send(messages)
    },
    delete: (req, res) => {
        let id = req.params.id
        let messageID = messages.findIndex(message => message.id === id)
        messages.splice(messageID, 1)
        res.status(200).send(messages)
    }
}