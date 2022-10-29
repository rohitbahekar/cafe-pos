const path = require('path');
const fs = require('fs')

async function init(){
    const icons = await readIcons();
    console.log({icons});
    fs.writeFileSync(path.join(__dirname, 'icons.json'), JSON.stringify(icons));
}

const readIcons= async () => {

    const icons= {}
    const files = await fs.readdirSync(__dirname)
    for(let file of files){
        console.log(file);
        if(file.includes('.svg')){
            const newName = file.toLowerCase().replaceAll(' ', '').replace('.svg', '');
            // fs.rename(path.join(__dirname, file), path.join(__dirname, newName), (err) => {
            //     if (err) throw err;
            //     console.log('Rename complete! ', file);
            // });
            const data = await fs.readFileSync(path.join(__dirname, file), 'utf8')
            icons[newName] = data
            console.log({icons})
        }
    }
    return icons
}

init();