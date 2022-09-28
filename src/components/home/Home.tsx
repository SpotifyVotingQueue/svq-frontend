import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assets/media/logo.svg'
import { UserContext, UserContextIF } from '../../Providers';

export default function Home(): JSX.Element {
    let navigate = useNavigate();

    let user: UserContextIF = useContext(UserContext);

    function onCreateQueue(): void {
        if (user.username && user.token) {
            navigate('/create');
        } else {
            navigate('/login/create');
        }
    }

    return <>
        <div style={{height: '40vh', margin: 'auto'}}>
            <div style={{display: 'flex'}}>
                <img src={logo} alt="HipQueue" style={{height: '5vh', margin: 'auto'}} />
            </div>
            <div>
                <button style={{ display: 'block', marginTop: '60px', marginLeft: 'auto', marginRight: 'auto' }} onClick={() => onCreateQueue()}>
                    Start
                </button>
                <br></br>
                <button style={{ display: 'block', marginTop: '30px', marginLeft: 'auto', marginRight: 'auto' }}>
                    Beitreten
                </button>
            </div>
        </div>
    </>;
}