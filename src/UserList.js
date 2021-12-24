// import React,{useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'



// function UserList() {
//     const [users, setUsers] = useState([])
//     useEffect( async() => {
//      try {
//         var userData = await  fetch(`https://61937d32d3ae6d0017da85fd.mockapi.io/userlist`)
//         var userList = await userData.json()
//         setUsers(userList)
//      } catch (error) {
//          console.log(error)
//      }

//     }, [])

//     return (
//         <div>
//             <>
//                 <div class="d-sm-flex align-items-center justify-content-between mb-4">
//                     <h1 class="h3 mb-0 text-gray-800">User List</h1>
//                 </div>
//                 <div class="card shadow mb-4">
//                     <div class="card-header py-3">
//                     </div>
//                     <div class="card-body">
//                         <div class="table-responsive">
//                             <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
//                                 <thead>
//                                     <tr>
//                                         <th>ID</th>
//                                         <th>Name</th>
//                                         <th>Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         users.map((user) =>{
//                                             return  <tr>
//                                             <td>{user.id}</td>
//                                             <td>{user.name}</td>
//                                             <td><Link to='/'><button className='btn btn-primary'>View</button></Link></td>
//                                         </tr>
//                                         })
//                                     }

                                   

//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         </div>
//     )
// }

// export default UserList
