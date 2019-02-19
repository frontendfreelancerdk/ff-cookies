var glob = require('glob');
var fs = require('fs');
var path = require('path');

// destination.txt will be created or overwritten by default.
/*

glob('./projects/!**!/readme.md', {}, function (er, files) {
  console.log(files);
  const destination = './src/assets/',
    src = './projects/';
  for (let i = 0; i < files.length; i++) {

    let destinationFile = destination + files[i].replace(src, ''),
      fileDir = destinationFile.substring(0, destinationFile.lastIndexOf('/')),
      exists = fs.existsSync(fileDir);
    if (!exists) {
      fs.mkdirSync(fileDir);
    }
    console.log(exists, destinationFile, fileDir);
    fs.copyFile(files[i], destinationFile, (err) => {
      if (err) throw err;
      console.log(files[i] +" was copied to : ", destinationFile);
    });
  }

  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**!/!*.js"]
  // er is an error object or null.
});
*/

const doCopy = function (from, to) {
  glob(from +"/*.*", {}, function (er, files) {
    const destination = to;
    const    exists = fs.existsSync(to);
    if(!exists) {
      fs.mkdirSync(to);
    }
        for (let i = 0; i < files.length; i++) {

          let
            fileDir = files[i].substring(0, files[i].lastIndexOf('/')),
            file =  files[i].replace(fileDir,""),
            destinationFile = path.resolve( to+file) ;
console.log( files[i], fileDir, "----",file,destinationFile);
console.log("split");
          fs.copyFile(files[i], destinationFile, (err) => {
            if(err) throw err;
            console.log(files[i] + ' was copied to : ', destinationFile);
          });
        }

    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**!/!*.js"]
    // er is an error object or null.
  });

};
const copy = function (args) {
  const basePath = args[1];
  const from = args[2];
  const to = args[3];
  doCopy(path.resolve(__dirname + '/' + from), path.resolve(__dirname + '/' + to));
  console.log('stuff', basePath, from, to);

};
copy(process.argv);
//export default copy;


