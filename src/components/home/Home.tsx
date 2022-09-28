import React from 'react';
import logo from '../../assets/media/logo.svg'

export default function Home() {
    return <>
        <div style={{height: '40vh', margin: 'auto'}}>
            <div style={{display: 'flex'}}>
                <img src={logo} alt="HipQueue" style={{height: '5vh', margin: 'auto'}} />
            </div>
            <div>
                <button style={{ display: 'block', marginTop: '60px', marginLeft: 'auto', marginRight: 'auto' }}>
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