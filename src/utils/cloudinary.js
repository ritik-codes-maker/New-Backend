import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// UPLOAD 

const uploadOnCloudinary = async (localFilePath)=> {
     try {
        if(!localFilePath) return null
        // upload on cloudinary
       const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type : "auto"
        })
     console.log("file is uploaded on cloudinary" , response.url);
     } catch (error) {
        fs.unlinkSync(localFilePath)  // remove the locally saved temporary file as the upload operation get failed 
        return null;
     }
}

export {uploadOnCloudinary}