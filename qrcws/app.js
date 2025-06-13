import { Qrwc } from '@q-sys/qrwc'
import express from 'express'

const app = express()


app.get('/',(req,res) =>{
  res.send('Hello World')
})

const socket = new WebSocket(`ws://${process.env.CORE_IP}/qrc-public-api/v0`)



const qsys = await Qrwc.createQrwc({
  socket,
  pollingInterval: 350 // Optional: polling interval in milliseconds (default: 350)
})


app.listen(process.env.PORT,()=>{
  console.log(`Server listenting on port:${process.env.PORT}`)
})