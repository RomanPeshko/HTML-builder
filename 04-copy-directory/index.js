const fs = require('fs');
const path = require('path');

const pathFiles = path.join(__dirname, 'files');
const pathCopyFiles = path.join(__dirname, 'files-copy');

fs.readdir(pathCopyFiles, (error, files) => {
    if (files) {
        files.forEach(data => {
            fs.unlink(path.join(pathCopyFiles, data), () => {
            });
        });
    }
});

fs.readdir(pathFiles, (error, files) => {
    files.forEach(val => {
        fs.readFile(path.join(pathFiles, val), (err, data) => {
            if (err) {
                throw err;
            }
            fs.mkdir(pathCopyFiles, { recursive: true }, () => {
                fs.writeFile(path.join(pathCopyFiles, val), data, (error) => {
                    if (error) {
                        throw error;
                    }
                });
            });
        });
    });
});