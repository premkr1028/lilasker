import mongoose, {Schema} from "mongoose";

const clientDet = new mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    clientName: {
        type: String,
        require: true,
    },
    platform: { type: String },
    audience: { type: String, enum: ["Subscriber", "Follower"] },
    audienceCount: {
        type: Number,
    },
    avatar: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCo9sua3PNMXNAACe8MWOMbK93g-_GhThKA&usqp=CAU"
    },
    editedVideos: [{
        type: Schema.Types.ObjectId,
        ref: "videoDet"
    }] ,
    totalRs : {
        type:Number
    },
    remainingBalance:{
        type:Number
    }   ,
    paidBalance:{
        type:Number
    } ,
    monthlyBalance:{
        type:Number
    }

})   

let client_schema = mongoose.model("client", clientDet)
export default client_schema