require('dotenv').config()
const http = require('http')

const frases = [
  "Cree en ti mismo y todo será posible.",
  "Cada día es una nueva oportunidad.",
  "El esfuerzo de hoy será tu éxito mañana.",
  "No esperes el momento perfecto, haz que el momento sea perfecto.",
  "Sigue adelante, lo mejor está por venir."
]

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const random = frases[Math.floor(Math.random() * frases.length)]
  res.end(JSON.stringify({ mensaje: random }))
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
