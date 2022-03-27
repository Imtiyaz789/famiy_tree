import React,{useEffect, useState} from 'react'
import AddMember from './AddMember'
import { db } from './firebase';
import { collection, getDocs} from 'firebase/firestore'
import List from './List'

const Main = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        const q = collection(db, "family-db");
        const getUsers = async()=>{
            const data = await getDocs(q);
            console.log(data);
            setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
        } 
        getUsers();
      }, [users]);
      
    // const handleEdit = async (name,age, title) => {
    //     await updateDoc(doc(db, "family-db"), {title : title});
    // }
     
    //   const data = users.map((data) => {return { data : data}});
  return (
    <div className='container'>
        <AddMember/>
        <div className='row'>
            <div>
                <h1>Family's Tree</h1>
            </div>
        </div>
        <div className='row border  border-light rounded p-3 mt-5 text-center'>
            <div className='col text-light'>
                <h3>Name</h3>
            </div>
            <div className='col text-light'>
                <h3>Gender</h3>
            </div>
            <div className='col text-light'>
                <h3>Age</h3>
            </div>
            <div className='col text-light'>
                <h3>Phone Number</h3>
            </div>
            <div className='col text-light'>
                <h3>Relationship</h3>
            </div>
            <div className='col text-light'>
                <h3>Action</h3>
            </div>
        </div>
        {users.map((user)=>{
            return (
                <List data={user} key={user.id} />
            )
        })}
        {/* <List 
        key={data.id}
        data={data}/>   */}
    </div>
  )
}

export default Main