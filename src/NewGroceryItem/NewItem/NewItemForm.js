import styles from './NewItemForm.module.css';
import React, {useState} from 'react';
import Button from '../../UI/Button';


const NewItemForm = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [InputIsValid, setInputIsValid] = useState(true)
    
    const nameChangedHandler = (event) => {
        const value = event.target.value
        if (value.trim().length > 0){
            setInputIsValid(true)
        }
        setEnteredName(value)
    }


    const submitHandler = (event) => {
    
        event.preventDefault()
        if (enteredName.trim() == ''){
            setInputIsValid(false)
            return
        }
        const newId  = Math.random()
        const item = {
            key: newId,
            id: newId,
            name: enteredName
        }
        setEnteredName(enteredName)


        props.onNewItemSubmited(item)
        setEnteredName('')



    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-item-box'>
                <div className={`${styles['new-item']}  ${!InputIsValid? styles.invalid : ''}`}>
                    <h2 className='lbl-new-item'>Insert New Item {!InputIsValid ? '!' : ''}</h2>
                    <input type='text' value={enteredName} onChange={nameChangedHandler}/>
                    <Button type='submit'>Add Item</Button>
                </div>
            </div>
        </form>);
};

export default NewItemForm;
