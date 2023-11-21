import React, { useRef, useState } from 'react';

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const nameInputRef = useRef();

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();

        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        // nameInputRef.current.value = '';  // 권장되지 않음
        setEnteredName('');
    };

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='form-control'>
                <label htmlFor='name'>Your name</label>
                <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} />
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;