const request=require('request')

const forecast=(x1,x2,callback)=>
{
  const urll ='http://api.weatherstack.com/current?access_key=60ceab3c0a3f0cee20d780c05f08f338&query='+x1 + ','+ x2 +'&units=f'
  const url='http://api.weatherstack.com/current?access_key=60ceab3c0a3f0cee20d780c05f08f338&query='+x1+','+x2 +'&units=m'
request({url ,json :true },(error,{body}) =>
{
  if(error)
  {
    callback("network is not available",undefined)
  }
  else if(body.error)
  {
    callback("enable to find location",undefined)
  }
  else{
    callback(undefined ,{a:"Actual temerature : "+ body.current.temperature + "^c , but feelslike "+body.current.feelslike+"^c , weather description = "+body.current.weather_descriptions[0]
                         ,b:"Humidity: "+body.current.humidity+" localtime: "+body.location.localtime}
  //  callback(undefined ,
  //   "Actual temerature is "+ body.current.temperature + "^c but feels like "+body.current.feelslike+"^c. weather description = "+body.current.weather_descriptions[0]
    // { real: body.current.temperature,
    //   feelslike: body.current.feelslike
    // }
   )}
})
}






module.exports =forecast