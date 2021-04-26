import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';

// error={
//     title:,
//     text:,
//     state:,
//     showError
// }

const Alert = ({error, setError}) => {

    return (
        <>
            {<SweetAlert 
            type={error["state"]}
            title={error["title"]}                        
            onConfirm={()=>{setError({...error,showError:false})}}
            timeout={3000}
            >
                {error["text"]}
        </SweetAlert>}
        </>
    )
}

export default Alert
