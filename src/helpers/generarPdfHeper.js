import { jsPDF } from 'jspdf'
import 'jspdf-autotable'

const generarPdfHelper = (datos) => {
  let y = 30
  const doc = new jsPDF('p', 'px')
  //let width = doc.internal.pageSize.getWidth();
  //let height = doc.internal.pageSize.getHeight();
  doc.setFontSize(18)
  doc.text('Logo', 30, y)
  //Etiquetas
  doc.setFont('Montserrat', 'bold') //Tipo de fuente
  doc.setFontSize(12)
  doc.text('Nombre cliente:', 250, y + 20)
  doc.text('Fecha:', 250, y)
  doc.text('Venta:', 30, y + 50)

  let currentDate = new Date()
  let day = currentDate.getDate()
  let month = currentDate.getMonth() + 1
  let year = currentDate.getFullYear()
  let formattedDate =
    day.toString().padStart(2, '0') +
    '/' +
    month.toString().padStart(2, '0') +
    '/' +
    year.toString()

  //Datos
  doc.setFont('Montserrat', 'normal')
  doc.text(formattedDate, 320, y)
  doc.text(datos.cliente, 320, y + 20)
  doc.text(datos.secuencia.toString(), 57, y + 50)
  var columns = ['Id', 'Producto', 'Cantidad', 'Precio unidad', 'Total']

  doc.autoTable(columns, datos.dataProductos, {
    startY: y + 80
  })

  let lineafinaltabla = doc.lastAutoTable.finalY
  doc.text('Total:', 340, lineafinaltabla + 20)
  doc.text('$ ' + datos.total.toString(), 370, lineafinaltabla + 20)

  let binary = doc.output()
  let objpdf = binary ? btoa(binary) : ''
  var visoremb = document.getElementById('embArchivo')
  visoremb.src = 'data:application/pdf;base64,' + objpdf
}

export default generarPdfHelper
