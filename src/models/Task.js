import {Schema,model} from 'mongoose';

const taskSchema = new Schema({
    title :{
        type :String,
        required:true,
        unique:true,
        trim:true
    },
    descripcion: {
        type:String,
        required:true
    },
    done: {
        type:Boolean,
        default:false
    },
},{
    timestamps:true,
    versionKey:false    
}
);


export default model('Task',taskSchema)