import React from 'react'
import db from './firebase';
import { doc, deleteDoc } from 'firebase/firestore';
const List = (user,id) => {

    const {name, gender, age, phone, relation} = user.data;
    // const handleEdit = async (todo, title) => {
    //     await updateDoc(doc(db, "todos", todo.id), {title : title});
    //   }
    const handleDelete = async () => {
        await deleteDoc(doc(db, "family-db", id));
    } 
    // console.log(name,user.data);
  return (
    <div>
         <div className='row border bg-info bg-gradient text-dark border-light rounded p-3 mt-5 text-center'>
            <div className='col text-light'>
                <h3>{name}</h3>
            </div>
            <div className='col text-light'>
                <h3>{gender}</h3>
            </div>
            <div className='col text-light'>
                <h3>{age}</h3>
            </div>
            <div className='col text-light'>
                <h3>{phone}</h3>
            </div>
            <div className='col text-light'>
                <h3>{relation}</h3>
            </div>
            <div className='col text-light '>
                <button className='btn btn-danger' onClick={handleDelete}>delete</button>
            </div>
        </div>
    </div>
  )
}

export default List