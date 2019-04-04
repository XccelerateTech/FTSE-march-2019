//require the promised fs made in a separate module as a well as the pathModule
const promisedFS = require('./promisedFs');



const pathModule = require('path');

//the function outPutFolderContent, takes the filePath and an input, then we call the promisedFS.stat with the filePath, then we use a conditional statement to check if the file is a directory or not, if it is a directory we output the result and call the previous function traverseFolders (so that we can find each file or directory inside the directory we have examined) -- this will in turn pass the information back to this function to see if each output of filePath is a directory or a file. 

//if the filePath is a file, we just output the console.log
//if there is an error we catch it and console.log the result.
function outPutFolderContent(filePath){
    promisedFS.stat(filePath).then((stats)=>{
        if(stats.isDirectory()){
            console.log(filePath + ' is a directory.')
            traverseFolders(filePath)
        } else {
            console.log(filePath + ' is a file.')
        }
    }).catch((error)=>{
        console.log(error)
    });
}


//the function traverseFolders takes the input of the path to the folder, we call the promisedFS.readdir function, which produces an array of files (stored in our directory) a for loop is used to iterate over each of the files, and then we call our other function with the exact path to each file.
function traverseFolders(path){
    promisedFS.readdir(path)
    .then((files)=>{
        console.log(files)
        for(let file of files){
            const filePath = pathModule.join(path, file);
            outPutFolderContent(filePath);
        }
    }).catch((error)=>{
        console.log(error);
    });
}



//call the function
// outPutFolderContent('./files')

promisedFS.readdir('./files').then((data)=>{
    console.log(data)
})

promisedFS.stat('./files').then((data)=>{
    console.log(data.isDirectory())
})

