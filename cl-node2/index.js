const fs = require('fs');

const data = 'Madina Turarova 21.08.01';

fs.writeFile('myData.txt', data, (err) => {
    if (err) throw err;
    console.log('The data has been successfully written to the file!');
});

