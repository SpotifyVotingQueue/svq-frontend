import React from 'react';

export default function Home() {
    return <>
        <div style={{height: '40vh', margin: 'auto'}}>
            <div style={{display: 'flex'}}>
                <h1 style={{color: 'black', margin: 'auto'}}>Spotify Queue</h1>
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