import React,{useState,useEffect} from 'react';

const SingleColor = ({rgb, weight, index, hexColor}) => {
    console.log(hexColor);
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    console.log(bcg);
    return (
        <article className={`color ${index >= 10 && 'light-color'}`} style={{backgroundColor:`rgb(${bcg})`}}>
            <p className="percent-value">{weight}%</p>
            <p className="hex-value">#{hexColor}</p>
        </article>
    )
}
export default SingleColor;