import {Schema,model} from "mongoose"

const LinkSchema= new Schema({
    target:{
        type:String,
        required:true
    },

    slug:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
        required:true
    },

    views:{
        type:Number,
        default:0
    }

},
{
    timestamps:true,
});

const Link = model("Link",LinkSchema);
export default Link;