import React, { useState } from 'react';
import db from './firebase';
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Create = (props) => {
    const [textValue, setTextValue] = useState('');
    const navigate = useNavigate();

    const handlePost = () => {
        if (textValue) {
            addDoc(collection(db, 'posts'), {
                content: textValue
            });
            setTextValue('');
            navigate('/');
        } else {
            alert('Please enter text to post');
        }
    };

    const handleReset = () => {
        setTextValue('');
    }

    const handleCancel = () => {
        navigate('/');
    }

    const handleLoginClick = () => {
        navigate('/login');
    }

    const handleLogOut = () => {
        navigate('/login');
        props.signOutUser();
    }

    return (
        <div className='Create'>
            <button className='SignOut' onClick={handleLogOut}>
                Sign Out
            </button>
            {props.userDetails ?
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className='TitleName'>
                        Create Post
                    </span>
                    <textarea
                        id='post'
                        value={textValue}
                        placeholder="What's on your mind?"
                        className='TextArea'
                        onChange={(event) => {setTextValue(event.target.value)}}
                    />
                    <div className='ButtonGroup'>
                        <button className='Button' onClick={handlePost} style={{background: 'green', color: 'white'}}>
                            Post
                        </button>
                        <button className='Button' onClick={handleReset}>
                            Reset
                        </button>
                        <button className='Button' onClick={handleCancel} style={{background: 'red', color: 'white'}}>
                            Cancel
                        </button>
                    </div>
                </div>
            :
                <span className='Content' style={{textDecoration: 'underline', cursor: 'pointer', textAlign: 'center'}} onClick={handleLoginClick}>
                    Click here to login and create a post
                </span>
            }
        </div>
    )
}

export default Create;