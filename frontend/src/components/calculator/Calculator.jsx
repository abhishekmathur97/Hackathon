import React,{ useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate inputs
        if (!name || !age || !weight || !height) {
            alert('Please fill in all fields.');
            return;
        }
        // Optionally, you can reset the form fields here
        setName('');
        setAge('');
        setWeight('');
        setHeight('');
    };

    const onSubmit = () => {
        console.log(`${name} ${age} ${weight} ${height}`);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </label>
            <label>
                Age:
                <input 
                    type="number" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                />
            </label>
            <label>
                Weight (kg):
                <input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)} 
                />
            </label>
            <label>
                Height (cm):
                <input 
                    type="number" 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)} 
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}


export default Calculator;