import User from './models/userModel.js'
import dotenv from 'dotenv'
import { jackfruitDB } from './data/jackfruitDB.js'
import { connectDB } from './config/db.js'

dotenv.config()

connectDB()

const importData = async() => {
    try {
        await User.deleteMany()
        await User.insertMany(jackfruitDB)
        console.log("Data added !")
        process.exit(0)
    } catch (error) {
        console.log(`Error - ${error.message}`)
        process.exit(1)
    }
}

const destroyData = async() => {
    try {
        await User.deleteMany()
        console.log("Data deleted !")
        process.exit(0)
    } catch (error) {
        console.log(`Error - ${error.message}`)
        process.exit(1)
    }
}

switch(process.argv[2]){
    case "-d":
        destroyData()
        break;
    default:
        importData()
        break;
}
