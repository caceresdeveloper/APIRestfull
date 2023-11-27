const express = require('express')

const app = express()

//setters
app.set('PORT',process.env.PORT || 3000)


//middlewares
//permite enviar objetos json
app.use(express.json())

app.use("/curso", require('./routes/curso'))
app.use("/universidad", require('./routes/universidad'))

app.listen(app.get('PORT'),()=>console.log(`server listen at port ${app.get('PORT')}`))

