import QRCode from 'qrcode'
export default class Qrcode extends Component {
generateQR() {
     let str = 'My first QR!'
     QRCode.toCanvas(document.getElementById('canvas'), str,                  
     function(error) {
          if (error) console.error(error)
          //console.log('success!')
     })
}
render() {
return (
<div align="center">
     <canvas id="canvas" />
     <button onClick={this.generateQr}>
          Generate QR!
     </button>
</div>
)}}