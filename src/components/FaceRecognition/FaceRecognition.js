import React from 'react'

const FaceRecognition = ({imgUrl}) => {
    return(
        <div className='center'>
             <img src={imgUrl} alt=''></img>
        </div>
    )
}

export default FaceRecognition