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
            navigate('/login?redirect=create');
        }
    }

    return <div className='overflow-hidden flex m-auto h-full'>
        <div style={{ height: '91.1vh', margin: 'auto', display: 'flex'}}>
            <div className='h-screen-50 m-auto'>
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
        </div>
    </div>;
}