const fs = require('fs');

fs.appendFile('abc.txt', 'Hey guys Welcome to our new youtube channel', (error)=>{
    if(error){
        console.log("error", error)
    }else{
        console.log("saved")
    }
});