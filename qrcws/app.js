import { Qrwc } from '@q-sys/qrwc'

const socket = new WebSocket(`ws://${process.env.CORE_IP}/qrc-public-api/v0`)

const compys = {}

const qsys = await Qrwc.createQrwc({
  socket,
  pollingInterval: 350 // Optional: polling interval in milliseconds (default: 350)
})

const gain = qsys.components.Gain01.controls.gain
gain.on('update', (state) =>{
    //state event handler here
})


console.table(qsys.components)
console.log(typeof(qsys.components))
qsys.components.forEach(element => {
    console.log(element)
});