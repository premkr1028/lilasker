import mongoose from "mongoose";

const videosSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    isComplete: { type: Boolean, enum: [true, false] },
    addTime : {
        type:Date,
        require:true
    },
    doneTime : {
        type:Date,
        require:true
    },
    rs:{
        type:Number
    }
})

let videos_schema = mongoose.model("videos", videosSchema)
export default videos_schema