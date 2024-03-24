import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'test route' })
})

app.listen(port, () => {
  console.log(`Server listens on port ${port}...`)
})
