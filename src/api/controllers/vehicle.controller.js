const helper = require('../helpers/vehicle.helper');

exports.get = (req,res)=>{
    res.status(200).json({
        success : true,
        message : "assesment running successfully",
        data : "Welcome to the Assesment from Sarthak"
    })
}

exports.getallmakes =(req,res)=>{
    helper.getallmakesfromnhsta((err,data)=>{
        if(err){
            res.status(500).send({
                success : false,
                message : "Internal Server error has occurred while in retreving all the makes.",
                data : null
            })
        }else{
            res.status(200).send({
                success : true,
                message : "Successfully retrieved all the makes.",
                data : data
            })
        }
    })
}

exports.getMakesFromManufacturerAndYear=(req,res)=>{
    helper.getallmakesOnManAndYearFromNhsta(req.params.Manufacturer,req.params.Year,(err,data)=>{
        if(err){
            res.status(500).send({
                success : false,
                message : "Internal Server Error has occured while in retrieving the makes.",
                data : null
            })
        }else{
            res.status(200).send({
                success : true,
                message : "Successfully retrieved all the makes.",
                data : data
            })
        }
    })
}

exports.getDetailsFromVin=(req,res)=>{
    helper.getDetailsFromVin(req.params.Vin,(err,data)=>{
        if(err){
            res.status(500).send({
                success : false,
                message : "Internal Server Error has occured while getting details using makes.",
                data : null
            })
        }else{
            res.status(200).send({
                success : true,
                message : "Successfully retrieved all the makes.",
                data : data
            })
        }
    })
}