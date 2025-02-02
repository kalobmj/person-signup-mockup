import { useState, useEffect } from 'react'

interface MainContainerProps {
    formDone: Number;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    userData: {
        firstName: String;
        lastName: String;
        email: String;
        number: Number;
        wantsUpdates: boolean;
    };
}

// formDone keeps track of user input

export default function MainContainer({ formDone, handleChange, handleCheckboxChange, userData }: MainContainerProps) {

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

                        <input
                            type='checkbox'
                            id='flexcheckdefault'
                            className='form-check-input' 
                            checked={userData.wantsUpdates} 
                            onChange={handleCheckboxChange}
                        />
                        <label
                            htmlFor='checkbox'
                            className='checkbox-label'
                        >
                            Click to receive extra updates and info about special promotions
                        </label>

                    </div>

                </div>
                <div className='top-right'>

                    {/* take data from obj and map over to create text inputs */}
                    {/* might need to flesh out different forms */}

                    <form action="" className='input-form'>
                        <div className='input-group'>
                            <label
                                className='first-name-label'
                                htmlFor='first-name-input' 
                            >
                                first name:
                            </label>
                            <input
                                type='text'
                                id='first-name-input'
                                placeholder='John' 
                                
                            />
                        </div>
                        <div className='input-group'>
                            <label
                                className='last-name-label'
                                htmlFor='last-name-input'
                            >
                                last name:
                            </label>
                            <input
                                type='text'
                                id='last-name-input'
                                placeholder='Smith'
                            />
                        </div>
                        <div className='input-group'>
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
                        </div>
                        <div className='input-group'>
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
                        </div>
                    </form>

                </div>

            </div>
            <div className='main-container-bottom'>

                <label 
                    htmlFor='suggestions-input'
                >
                    suggestions or concerns:
                </label>
                {/* text input form here */}

                <textarea
                    id='suggestions-input'
                    className='form-control text-area'
                >
                </textarea>

            </div>
            <div className='btn-container'>
            <button 
                className='btn btn-primary'
            >
                submit info !
            </button>

            </div>

        </div>
    )
}
