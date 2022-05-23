const fs = require('fs');
const path = require('path');
const { stdin, stdout } = require('process');


const filePath = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(filePath);


stdout.write('Введите ваш текст:\n');
stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        stdout.write('Всего хорошего!');
        process.exit();
    } else {
        output.write(data.toString());
    }
});

process.on('SIGINT', () => {
    stdout.write('Всего хорошего!');
    process.exit();
});