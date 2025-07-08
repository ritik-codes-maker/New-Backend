import mongoose ,{Schema} from " mongoose"
import mongooseAggrigatePaginate from 
"mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile : {
        type : String , // cloudinary url
        required : true 
    },
    thumbNail : {
        type : String , // cloudinary url
        required : true 
    },
    title : {
        type : String , 
        required : true 
    },
    description : {
        type : String , 
        required : true 
    },
    duration : {
        type : Number , // cloudinary url
        required : true 
    },
    views : {
        type : Number ,
        default : 0
    },
    isPublished :{
        type : Boolean , 
        default  : true
    },
   owner : {
    type : Schema.Types.ObjectId,
    ref : "User"
   }
},{timestamps})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = new mongoose.model("Video", videoSchema )