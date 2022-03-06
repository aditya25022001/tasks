import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler'

export const updateCredAndReturnTaxIncome = asyncHandler(async (req,res) => {
    let { Bas, LTA, HRA, FA, Inv, Rent, CityType, Med  } = req.body
    Bas*=12
    LTA*=12
    HRA*=12
    FA*=12
    Rent*=12
    const user = await User.findById({ _id:req.user._id })
    if(user){
        let AppHRA = 0
        if(CityType==="metro"){
            AppHRA = Math.min(HRA, Rent-(Bas/10), Bas/2)
        }
        else{
            AppHRA = Math.min(HRA, Rent-(Bas/10), (2*Bas/5))
        }
        await User.findOneAndUpdate({ _id:req.user._id },{ Bas, LTA, HRA, Inv, FA, Rent, CityType, Med, AppHRA })
        res.status(200).send({
            message:"Taxable income calculated successfully",
            TaxInc:(Bas+LTA+HRA+FA)-AppHRA-Inv-Med,
            Bas, LTA, HRA, FA, Inv, Rent, CityType, Med, AppHRA
        })
    }
    else{
        res.status(404).json({
            message:"User not found"
        })
    }
})