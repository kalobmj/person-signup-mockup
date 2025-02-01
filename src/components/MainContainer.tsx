import { useState, useEffect } from 'react'
// get bootstrap

interface MainContainerProps {
    formDone: Number;
}

// formDone keeps track of user input

export default function MainContainer({ formDone }: MainContainerProps) {

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

                    <div className='checkbox-container'>

                        <label
                            htmlFor='checkbox'
                            className='checkbox-label'
                        >
                            Click to receive extra updates and info about special promotions
                        </label>
                        <input
                            type='checkbox'
                            id='checkbox'
                        />

                    </div>

                </div>
                <div className='top-right'>

                    {/* take data from obj and map over to create text inputs */}
                    {/* might need to flesh out different forms */}

                    <form action="">
                        <label
                            className='first-name-label'
                            htmlFor='first-name-input'
                        >
                            first name:
                        </label>
                        <input
                            type='text'
                            id='first-name-input' 
                            placeholder='First Name'
                        />
                        <label
                            className='last-name-label'
                            htmlFor='last-name-input'
                        >
                            last name:
                        </label>
                        <input
                            type='text'
                            id='last-name-input' 
                            placeholder='Last Name'
                        />
                        <label
                            className='email-label'
                            htmlFor='email-input'
                        >
                            email:
                        </label>
                        <input
                            type='email'
                            id='email-input' 
                            placeholder='example@place.com'
                        />
                        <label
                            className='phone-number-label'
                            htmlFor='phone-number-input'
                        >
                            phone:
                        </label>
                        <input
                            // possibly have a custom format (xxx) xxx xxxx
                            type='number'
                            id='phone-number-input' 
                            placeholder='(xxx) xxx xxxx' 
                        />
                    </form>

                </div>

            </div>
            <div className='main-container-bottom'>

                <h3>suggestions or concerns</h3>
                {/* text input form here */}

            </div>
        </div>
    )
}
