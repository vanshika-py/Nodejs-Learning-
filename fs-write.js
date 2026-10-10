const { error } = require('console');
const fs =  require('fs');

let Content = "This is my second content page for write File operation"
fs.writeFile("new_file.txt", Content , (err)=>{
if(err){
    console.log("error", error)
}else{
    console.log("saved")
}
})