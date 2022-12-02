import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { Component, useEffect, useState } from 'react';
import db from './firebase';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {

    const [loading, setLoading] = useState(true);
    const [displayText, setDisplayText] = useState(null);
    const [titleText, setTitleText] = useState(null);
    const [post, setPost] = useState(null);
    // const [signedIn, setSignedIn] = useState(true);
    var signedIn = false;
    var navigate = useNavigate();

    useEffect(() => {
        if (props.userDetails){
            signedIn = true;
        };
        signedIn ?
            setDisplayText('There are no posts. Create a post to display.')
        :
            setDisplayText('There are no posts. Login to create a post');
        signedIn ?
            setTitleText('Click here to create a post!')
        :
            setTitleText('Click here to login');
        getData();
    })

    const getData = () => {
        getDocs(collection(db, 'posts'))
            .then((querySnapshot) => {
                let temp = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id }));
                setPost(temp);
                setLoading(false);
            });
    }

    const handleDelete = (id) => {
        console.log('hi');
        deleteDoc(doc(db, 'posts', `/${id}`));
        setLoading(true);
    }

    const handleTitleClick = () => {
        signedIn ?
            navigate('/create')
        :
            navigate('/login');
    }

    const handleLogOut = () => {
        setLoading(true);
        navigate('/login');
        props.signOutUser();
    }

    return (
        <div className='Home'>
            <button className='SignOut' onClick={handleLogOut}>
                Sign Out
            </button>
            {loading ?
                <ReactLoading type='spin' />
            :
                post.length === 0 ?
                    <div>
                        <span className='TitleName'>
                            {displayText}
                        </span>
                    </div>
                :
                    <div>
                        <span className='Title'>
                            Posts
                        </span>
                        { post.map((element) => {
                            return (
                                <div className='Tile'>
                                    <div className='Container'>
                                        {element.content}
                                    </div>
                                    {props.userDetails && <span
                                        style={{ color: 'black', cursor: 'pointer', textDecoration: 'underline' }}
                                        onClick={() => handleDelete(element.id)}
                                    >
                                        Delete
                                    </span>}
                                </div>
                            )
                        })}
                    </div>
            }
            {!loading &&
            <span className='Content' onClick={handleTitleClick} style={{ textDecoration: 'underline', textAlign: 'center', marginTop: '12px', cursor: 'pointer' }}>
                {titleText}
            </span>
            }
        </div>
    );
}

export default Home;