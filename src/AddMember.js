import React,{useState} from 'react'
import db from './firebase';
import { collection, addDoc } from 'firebase/firestore';
// import { collection, addDoc } from 'firebase/firestore';
const AddMember = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [relation, setRelation] = useState('');

    const handleSubmit = async () => {
        await addDoc(collection(db, "family-db"),{
            name:name,
            gender:gender,
            age:age,
            phone:phone,
            relation:relation
        })  
    };    
  return (
    <div className='container mt-5 m'>
        
            <div className='m-3' >
                <input 
                    type='text' className='d-inline m-3 p2' placeholder='Enter Name' required onChange={(e) => {setName(e.target.value);}}
                />
                <input 
                    type='text' className='d-inline m-3 p2' placeholder='Enter Gender' required onChange={(e) => {setGender(e.target.value)}}
                />
                <input 
                    type='number' className='d-inline m-3 p2' placeholder='Enter Age' max='3' required onChange={(e) => {setAge(e.target.value)}}
                />
                <input 
                    type='number' className='d-inline m-3 p2' placeholder='Enter Phone' maxLength='10' required onChange={(e) => {setPhone(e.target.value)}}
                />
                <input 
                    type='text' className='d-inline m-3 p2 ' placeholder='Enter Relation' required  onChange={(e) => {setRelation(e.target.value)}}
                />
            </div>
            <div className='btn_container'>
                <button className='btn btn-outline-success' onClick={()=> handleSubmit()}>Add</button>
            </div>
            <hr/>
        
    </div>
  )
}

export default AddMember