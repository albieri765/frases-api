require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

const frases = [
  "Cree en ti mismo y todo será posible.",
  "Cada día es una nueva oportunidad.",
  "El esfuerzo de hoy será tu éxito mañana.",
  "No esperes el momento perfecto, haz que el momento sea perfecto.",
  "Sigue adelante, lo mejor está por venir."
]

// Servir archivos estáticos (opcional)
app.use(express.static('views'))

app.get('/', (req, res) => {
    const random = frases[Math.floor(Math.random() * frases.length)]
    res.send(`
        <html>
            <head>
                <title>Frases Motivadoras</title>
            </head>
            <body>
                <h1>🌟 Frase del Día 🌟</h1>
                <p>${random}</p>
            </body>
        </html>
    `)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
