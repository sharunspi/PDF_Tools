const express = require('express')
const route = express.Router()
const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();
route.get('/all',(req,res)=>{
    res.send('res')
})

route.post('/combinePDF',(req,res)=>{
    res.send('res')
})
function mergeFiles(files){
    async () => {
        // merger.add('pdf1.pdf');  //merge all pages. parameter is the path to file and filename.
        // merger.add('pdf2.pdf', [2]); // merge only page 2
        // merger.add('pdf2.pdf', [1, 3]); // merge the pages 1 and 3
        // merger.add('pdf2.pdf', '4, 7, 8'); // merge the pages 4, 7 and 8
        // merger.add('pdf3.pdf', '1 to 2'); //merge pages 1 to 2
        // merger.add('pdf3.pdf', '3-4'); //merge pages 3 to 4
      
        await merger.save('merged.pdf'); //save under given name and reset the internal document
      }
}
module.exports = route