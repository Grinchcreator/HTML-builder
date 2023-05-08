const fs = require ("fs");
const path = require("path");
const secret_folder = path.join(__dirname, "secret-folder");
const objects = fs.readdir(secret_folder, (err, objects) => {
    objects.forEach((object) => {
        fs.stat(path.join(secret_folder, object), (err, stats) =>{
            if (stats.isFile()) {
                const objectName = (path.basename(object, path.extname(object)));
                const objectExtName = (path.extname(object).slice(1));
                const objectSize = Math.round((stats.size / 1024) * 1000) / 1000;
                console.log (`${objectName}` - `${objectExtName}` - `${objectSize}kb`);
            }
        });
    });
});