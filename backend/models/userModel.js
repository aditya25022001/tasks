import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    Bas:{
        type:Number,
        required:true,
        default:0
    },
    LTA:{
        type:Number,
        required:true,
        default:0
    },
    HRA:{
        type:Number,
        required:true,
        default:0
    },
    FA:{
        type:Number,
        required:true,
        default:0
    },
    Inv:{
        type:Number,
        required:true,
        default:0
    },
    Rent:{
        type:Number,
        required:true,
        default:0
    },
    CityType:{
        type:String,
        required:true,
        default:""
    },
    Med:{
        type:Number,
        required:true,
        default:0
    },
    AppHRA:{
        type:Number,
        required:true,
        default:0
    }
},{
    timestamps:true
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('jackfruitdb', userSchema)

export default User