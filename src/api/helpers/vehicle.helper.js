const axios = require('axios');
require('dotenv').config();

exports.getallmakesfromnhsta =async (result)=>{
    
    await axios.get(process.env.EXTERNAL_API_URL+'getallmakes?format=json')
    .then((resp) => {
        console.log(resp)
        if(resp.status<199 && resp.status>299){
            result(true,{ 
                status: resp.status
            })
            return;
        }
        result(null,resp.data.Results)
    }).catch((err)=>{
        console.log(err)
        result(true,{ 
            status: err.status
        })
    })
}

exports.getallmakesOnManAndYearFromNhsta =async (Manufacturer,Year,result)=>{
    
    await axios.get(process.env.EXTERNAL_API_URL+'GetMakesForManufacturerAndYear/'+Manufacturer+'?year='+Year+'&format=json')
    .then((resp) => {
        if(resp.status<199 && resp.status>299){
            result(true,{ 
                status: resp.status
            })
            return;
        }
        result(null,resp.data.Results)
    }).catch((err)=>{
        console.log(err)
        result(true,{ 
            status: err.status
        })
    })
}

exports.getDetailsFromVin =async (Vin,result)=>{
    
    await axios.get(process.env.EXTERNAL_API_URL+'decodevinvaluesextended/'+Vin+'?format=json')
    .then((resp) => {
        if(resp.status<199 && resp.status>299){
            result(true,{ 
                status: resp.status
            })
            return;
        }
        result(null,{ 
            "Year" : resp.data.Results[0].ModelYear,
            "Make" : resp.data.Results[0].Make,
            "Model": resp.data.Results[0].Model
        })
    }).catch((err)=>{
        console.log(err)
        result(true,{ 
            status: err.status
        })
    })
}