import React,{useState} from 'react'
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
// import { collection, addDoc } from 'firebase/firestore';
const AddMember = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [relation, setRelation] = useState('');

    const handleSubmit = async () => {
        // e.preventDefault();
        
            await addDoc(collection(db, "family-db"),{
                name:name,
                gender:gender,
                age:age,
                phone:phone,
                relation:relation
            });
            // console.log(age)
    };    
  return (
    <div className='container mt-5 m'>
        
            <div className='m-3' >
                <input 
                    type='text' placeholder='Enter Name' value={name} onChange={(e) => {setName(e.target.value);}}
                />
                <input 
                    type='text' placeholder='Enter Gender' value={gender} onChange={(e) => {setGender(e.target.value)}}
                />
                <input 
                    type='number' placeholder='Enter Age' value={age} onChange={(e) => {setAge(e.target.value)}}
                />
                <input 
                    type='number' placeholder='Enter Phone' value={phone} onChange={(e) => {setPhone(e.target.value)}}
                />
                <input 
                    type='text' placeholder='Enter Relation' value={relation} onChange={(e) => {setRelation(e.target.value)}}
                />
            </div>
            <div className='btn_container'>
                <button onClick={handleSubmit}>Add</button>
            </div>
            <hr/>
        
    </div>
  )
}

export default AddMember