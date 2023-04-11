const express = require('express')
const app = express();

require('dotenv').config()

const postsRouter = require('./routes/posts.router')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// file upload
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '.jpg')
    }
})
const upload = multer({ storage: storage }).single('avatar');

app.post('/upload', upload, (req, res) => {
    res.status(200).send("file uploaded successfully")
})

// Middleware authentication start**********
const auth = require('./middleware/posts.middleware')
app.get('/login', auth, (req, res) => {
    res.status(200).send("Welcome! you are logged in successfully")
})
// Middleware authentication end**********

app.use('/', postsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server running...")
})