const express = require('express')
const dbConnect = require('./db/Connect')
const app = express()
const cors = require('cors')
app.use(cors())
const port = 8000
const newsRoute = require('./router/newsRoute')
const userRoute = require('./router/userRoute')
app.use(express.json())
app.use('/api/newsitems/', newsRoute)
app.use('/api/users/', userRoute)
app.get('/', (req, res) => res.send('hello Pratiksha'))
app.listen(port, () => console.log(`example app listening on port ${port}`))

