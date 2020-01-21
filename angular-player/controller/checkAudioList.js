var fs = require('fs');

const AUDIOFOLDER = './public/assets/';

/****************************************
 *          AUDIO CHECN CONTROLLER
 * Lee el directorio public/assets y
 * comprueba los ficheros con extensión mp3
 * guarda la lista en un array en req.files
 * devuelve el array
 ****************************************/

const checkAudioList = (req, res, next) => {
    fs.readdir(AUDIOFOLDER, (err, files) => {
        if (err) throw err;
        files = files.filter(file => /\.mp3$/.test(file.toLocaleLowerCase()))
        req.files = files;
        res.send(files);
    });
}

module = module.exports = {
    checkAudioList
};