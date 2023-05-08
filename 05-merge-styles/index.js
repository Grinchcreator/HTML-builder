const fs = require ('fs');
const path = require ('path');
const styles = path.join(__dirname, 'styles');
const bundle = path.join(__dirname, 'project-dist', 'bundle.css');

fs.readdir(styles, (err, files) =>{
    if (err) {
      throw err;
    }
    
    const cssTxt = fs.readdirSync(styles).filter(file = path.extname(file) === '.css');

    let cssFile = '';

    cssTxt.forEach(file =>{
        const pathToFile = path.join(styles, file);
        const styleText = fs.readFileSync(pathToFile, 'utf-8');
        cssFile  += styleText + '\n';
    })
    
});

fs.write(bundle, cssTxt);