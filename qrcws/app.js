import { Qrwc } from '@q-sys/qrwc'

const socket = new WebSocket(`ws://${process.env.CORE_IP}/qrc-public-api/v0`)



const components = await Qrwc.createQrwc({
  socket,
  pollingInterval: 350 // Optional: polling interval in milliseconds (default: 350)
})


const gain = components.components.Gain01.controls.gain
gain.on('update', (state) =>{
    console.log(state)
})

