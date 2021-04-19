// // console.log("js file is loaded")
// // fetch('http://localhost:3000/weather?address=delhi').then((response)=>
// // {
// //    response.json().then((data)=>
// //    {
// //      if(data.error)
// //      {console.log(data.error)}
// //      else{
// //          console.log(data)}
// //    })
// // })
// const weatherForm= document.querySelector('form')
// const search=document.querySelector('input')
// const messageone=document.querySelector('#meassage-1')
// const messagetwo=document.querySelector('#meassage-2')
// // const messageone=document.querySelector('#meassage-1')



// weatherForm.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   const location=search.value

//   // messageone.textContent ='Loading..'
//   // messagetwo.textContent=''
//   fetch('http://localhost:3000/weather?address='+location).then((response)=>
// {

//    response.json().then((data)=>
//    {
//      if(data.error)
//      {
//       messageone.textContent =data.error
//      }
//      else{
//       messageone.textContent =data.forecast
//       messagetwo.textContent=data.location
      
//     }
//    })
// })
// }
// )
console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThr = document.querySelector('#message-3')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                messageThr.textContent = data.other
            }
        })
    })
})