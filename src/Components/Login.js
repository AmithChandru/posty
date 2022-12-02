import React, { Component, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const clientId = '648447908587-ed38k5hr2bcjftptsq3m64l30o9i1sil.apps.googleusercontent.com';
    const navigate = useNavigate();

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const handleSuccess = (response) => {
        props.fetchUserDetails(response);
        navigate('/');
    }

    const handleFailure = () => {}

    return (
        <div className='Login'>
            <span className='Title'>
                P O S T Y
            </span>
            <div className='LoginContent'>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                    cookiePolicy="single_host_origin"
                />
                <span style={{ fontStyle: 'italic', paddingTop: '12px' }}>
                    *Login to have access to all the features
                </span>
            </div>
        </div>
    )
}

export default Login;