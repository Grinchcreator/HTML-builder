const fs = require('fs');
const path = require('path');
const files = path.join(__dirname, 'files');
const filesCopy = path.join(__dirname, 'files-copy');

fs.rm(filesCopy, {recursive: true}, () => {
    if (err) {
        throw err;
    }
});

fs.mkdir(filesCopy, {recursive: true}, err => {
    if (err) {
        throw err;
    }
});

fs.readdir(files, (err, files) => {
    if (err) {
        throw err;
    }

files.forEach((file) => {
    const filePath = path.join(__dirname, 'files', file.name);
    const copyFilePath = path.join (__dirname, 'files-copy', file.name);
    fs.copyFile (filePath, copyFilePath);
  });
});