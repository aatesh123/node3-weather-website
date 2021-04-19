//npm packages
const express=require('express')
const path=require('path')
const hbs=require('hbs')
const forecast=require('./utils/forecast.js')
const geocode=require('./utils/geocode')

//console.log(__dirname)  this is used to chack curent directory
// express app
const app=express()

const port =process.env.PORT || 3000
//define paths for express config
const publicdirpath=path.join(__dirname,'../public')
const viewspath =path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')

//setup static directory to serve
app.use(express.static(publicdirpath))
// setup handlebar engine and view location
app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialspath)
//render request used for dynamic pages
app.get('',(req,res)=>
{
  res.render('index',{
    name : "aatesh",
    title : "Weather"
  })
})
app.get('/help',(req,res)=>
{
  res.render('help',{
    helptext: "this is some useful text",
    title: 'Help',
    name: 'aatesh'
  })
})
app.get('/about',(req,res)=>
{
   res.render('about',{
     name: "aatesh"
   })
})
//fgmnfnhm
app.get('/weather',(req,res)=>
{
  if(!req.query.address){
    return res.send({
      error: "you must provide a search term"
    })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>
   {
  if(error)
  {
    return res.send({error})
  }
  forecast(latitude,longitude, (error, daata) => {
    if(error){
    return res.send({error})
     }
    res.send({
      other: daata.b,
      forecast: daata.a,
      location,
      address: req.query.address
    })
    
  })
  })
    
//  console.log(req.query.address)
  //  res.send({
  //    location: "sirsa" ,
  //    forecast: "its raining here",
  //    address: req.query.address})
     
   
})
app.get('/products',(req,res)=>
{
  
  if(!req.query.search){
     return res.send({
       error: "you must provide a search term"
     })
  }
  console.log(req.query.search)
   res.send({
     products: [] 
   })
})
app.get('*',(req,res) =>
{
  res.render('404',{
    msg: "page not found ",
    name : "aatesh"
  })
})

app.listen(port,()=>{
  console.log("server is running in port"+ port)
})