import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import logo from '../../assets/media/logo.svg'
import { MenuContext, MenuContextIF, SessionContext, SessionContextIF } from '../../Providers';

export default function Home(): JSX.Element {
    let navigate = useNavigate();

    let session: SessionContextIF = useContext(SessionContext);
    let menu: MenuContextIF = useContext(MenuContext);

    function onCreateQueue(): void {
        if (session.token && session.clientSession) {
            navigate('/create');
        } else {
            navigate('/login?redirect=create');
        }
    }

    useEffect(() => {
        menu.setMiddle(undefined);
    }, []);

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