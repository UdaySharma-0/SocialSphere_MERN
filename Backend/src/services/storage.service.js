const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({ privateKey: process.env.IMAGEKIT_PRIVATE_KEY });

async function uploadFile(buffer) {
  console.log(buffer);
  const result = await imagekit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });
  console.log(result);
  return result;
}

//Image Deleting Function

async function deleteFileByUrl(fileId) {
  return await imagekit.files.deleteFile(fileId , (err, res)=>{
    if(err){
      console.log("Error deleting", err);
    } else{
      console.log("File deleted Successfully", res);
    }
  });
}

module.exports = uploadFile, deleteFileByUrl;
