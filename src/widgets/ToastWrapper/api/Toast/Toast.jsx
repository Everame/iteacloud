import React from 'react'

export default class Toast{

    setSuccess(text){ 
        return (
            <div className="successToast">
                <h4 className='text'>{text}</h4>
            </div>
        )
    }

    setFail(text){
        return (
            <div className="failToast">
                <h4 className='text'>{text}</h4>
            </div>
        )
    }
}