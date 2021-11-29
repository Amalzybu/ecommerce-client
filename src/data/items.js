

import axios from 'axios';

let res=axios.get('http://localhost:3000/api/public/products')
 .then(response => {
   // JSON responses are automatically parsed.
//    items = response.data.data
console.log("data "+JSON.stringify(response));
  
 })
 .catch(e => {
   this.errors.push(e)
 })

var items =res.data.data
// const items=[
//     {
//         id:1,
//         name:"chappael",
//         category:"footwear",
//         price:100,
//         description:"sssss",

        
//     },
//     {
//         id:2,
//         name:"sssss",
//         category:"footwear",
//         price:100,
//         description:"sssss",

        
//     },
//     {
//         id:3,
//         name:"ddddd",
//         category:"footwear",
//         price:100,
//         description:"sssss",

        
//     },
//     {
//         id:3,
//         name:"ggggg",
//         category:"footwear",
//         price:100,
//         description:"sssss",

        
//     }

// ]
export default items