import { useState, useEffect } from 'react'
// get bootstrap

export default function MainContainer() {

    // let name: string = 'Kalob'
    // let age: number = 27
    // let isLoggedIn: boolean = true;

    const imgSrc = 'https://preview.redd.it/msn-avatars-of-all-colors-v0-4k4l1oxd5uha1.png?width=640&crop=smart&auto=webp&s=270076f128206ac53c88df31540ea7976b9abdf2'
    
    return (
        <div className='main-container'>
            <div className='main-container-top'>

                <div className='top-left'>

                    <img 
                        className='placeholder-profile-pic'
                        alt='example-pic' 
                        src={imgSrc}
                    />

                </div>
                <div className='top-right'>

                    {/* take data from obj and map over to create text inputs */}

                </div>

            </div>
            <div className='main-container-bottom'>

                <h3>suggestions or concerns</h3>
                {/* text input form here */}

            </div>
        </div>
    )
}
