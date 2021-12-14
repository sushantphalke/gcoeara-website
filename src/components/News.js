import React from 'react';

export default function News() {
    return (
        <div>
            <div class='card' style={{border:'1px solid white',backgroundImage: "linear-gradient(to bottom ,rgba(255, 228, 181, 0.742),rgba(255, 255, 255, 0.442))"}}>
                <div
                    class='card-header'
                    style={{ border: '1px solid white', borderRadius: '10px' }}
                >
                    <h1
                        style={{
                            color: 'maroon',
                            textAlign: 'left',
                            borderRadius: '10px',
                        }}
                    >
                        News & Events
                    </h1>
                </div>
                <div class='card-body' style={{ textAlign: 'left' ,borderRadius:'10px' }}>
                    <marquee  direction="up">
                    <ul class='list-group list-group-flush' style={{ textAlign: 'left' ,borderRadius:'10px' }}>
                        <li class='list-group-item'>news one news onenews onenews onenews one </li>
                        <li class='list-group-item'>A second item A second itemA second itemA second item</li>
                        <li class='list-group-item'>A third item A third item A third item A third item A third item </li>
                        <li class='list-group-item'>A fourth itemA fourth itemA fourth itemA fourth item</li>
                        <li class='list-group-item'>And a fifth one </li>
                    </ul></marquee>
                </div>
            </div>
        </div>
    );
}
