import express from 'express'
import router from './routes/router'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(router)

const PORT = process.env.PORT || 3500
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
