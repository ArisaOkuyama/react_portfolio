import React from 'react';
import '../stylesheets/Landing.css';
import StateContext from '../store'

const Ball = (props) => {

    const style = {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        height: `${props.height ? props.height : 0.8}em`,
        width: `${props.width ? props.width : 0.8}em`,
        borderRadius: '50%',
        left: `${props.left}%`,
        bottom: `${props.bottom}%`,
        backgroundColor: `${props.color}`,
      };

    return (
        <>
            {/* {console.log(props)} */}
            <div style={style} className="ball"></div>
        </>

    )

}

export default Ball;