var fs = require('fs');
const multer = require('multer');
const path = require('path');

function checkMP3magicNumbers(fileNumbers) {
    return  fileNumbers.toUpperCase().slice(0, 4) === 'FFFB' || 
            fileNumbers.slice(0, 6) === '494433';
}

const uploadController = (req, res) => {

    console.log('File uploading');

    var upload = multer({
        storage: multer.memoryStorage()
    }).single('uploadFile');

	upload(req, res, function(err) {
        if(err) throw err;
        var buffer = req.file.buffer;
        var magicNum = buffer.toString('hex', 0, 4);
        var filename = req.file.originalname;
        if(req.body.fileName != '') {
            filename = req.body.fileName + path.extname(req.file.originalname);
        } 
        console.log('Checking file format');
        if (checkMP3magicNumbers(magicNum)) {
            fs.writeFile(
                './public/assets/' + filename, buffer, 
                'binary', 
                function(err) {
                    if(err) throw err;

                    console.log('File is uploded');
                    console.log('File format checking correct!');
                    res.send('File is uploaded');
                });
        } else {
            console.log('File format checking failed. Only .mp3 files are allowed');
            res.send('File is not valid. Only .mp3 files are allowed');
        }
	})
}



module = module.exports = {uploadController};