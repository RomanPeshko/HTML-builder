const fs = require('fs');
const path = require('path');

const pathFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathFolder, { withFileTypes: true }, (error, files) => {
    if (error) {
        return console.error(error);
    }

    files.forEach((file) => {
        if (file.isFile()) {
            const pathElem = path.join(__dirname, 'secret-folder', file.name);

            fs.stat(pathElem, (error, stats) => {
                if (error) {
                    return console.error(error);
                }

                const nameElem = path.basename(pathElem, path.extname(pathElem));
                const extElem = path.extname(pathElem).slice(1);
                const sizeElem = (stats.size / 1024);

                console.log(`${nameElem} - ${extElem} - ${sizeElem}kb`);
            });
        }
    });
});