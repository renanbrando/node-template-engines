const fs = require('fs');
// npm package https://www.npmjs.com/package/html-pdf
const pdf = require('html-pdf');
const path = require('path');
const options = { 
  format: 'A4',
  type: 'pdf'
};
 

const generatePdf = (html, fileName = 'file') => {
  return new Promise((resolve, reject) => {
    pdf.create(html, options).toFile(`tmp/${fileName}.pdf`, (err, res) => {
      if (err) return reject(err);
      return resolve(res)
    });
  })
}

module.exports = {
  generatePdf
}
