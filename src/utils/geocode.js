//for making asynchronous we use callback function

const request=require('request')
const geocode=(address,callback)=>
{
   const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYWF0ZXNoIiwiYSI6ImNrbmllcXhxZTBkcGcycHBjMDNoNGszbGsifQ.7rnZSodRKfA8b6nX-WaFsw&limit=1'
   request({url :url ,json :true},(error,{body}) =>
   {
     if(error)
     {
       callback("network issue",undefined)
     }
     else if(body.features.length===0)
     {
       callback("invalid location",undefined)
     }
     else{
     callback(undefined,{
         latitude : body.features[0].center[1],
         longitude : body.features[0].center[0],
         location: body.features[0].place_name
     })
    }
    
   })
}
module.exports =geocode