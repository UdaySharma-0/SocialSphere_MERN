const express = require("express")
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const deleteFileByUrl = require("./services/storage.service")
const postModel = require("./models/post.model")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json());


const upload = multer({ storage: multer.memoryStorage() })


app.post("/create-post", upload.single("image"), async (req, res)=>{
    console.log(req.body);
    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        fileId: result.fileId,
        image: result.url,
        caption: req.body.caption,
    })

    return res.status(201).json({
        message: "Post created successfully",
        post
    })
})

app.get("/posts", async (req, res)=>{

    const post = await postModel.find();

    return res.status(200).json({
        message: "Post fetched successfully",
        post: post
    })
})

app.delete("/posts", async (req, res)=>{
    console.log(req.query.id);
    id = req.query.id;
    fileId = req.query.fileId;

    // const deleteResult = await postModel.findOne({
    //     _id: id,
    // })
    await deleteFileByUrl(fileId);

    await postModel.findOneAndDelete({
        _id: id,
    })

    res.status(200).json({
        message: "Image Deleted Successfully"
    })
})

module.exports = app