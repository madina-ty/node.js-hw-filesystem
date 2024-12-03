const fs = require('fs');

const data = JSON.parse(fs.readFileSync('counter.json', 'utf8'));

console.log('Текущее значение:', data.count);

data.count += 1;

fs.writeFileSync('counter.json', JSON.stringify(data, null, 2));

console.log('Новое значение:', data.count);
