import { useEffect, useState } from 'react'


    // inline example
// export default function Header({ header }: { header: string })

interface HeaderProps {
    landingHeader: String;
    thankYouHeader: String;
    formDone: Number;
}

export default function Header({ landingHeader, thankYouHeader, formDone }: HeaderProps) {

    return (
        <div className='header-container'>

            <h1>
                {
                    formDone === 0
                    ? landingHeader 
                    : thankYouHeader
                }
            </h1>

        </div>
    )

}