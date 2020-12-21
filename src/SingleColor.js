import React,{useState,useEffect} from 'react';

const SingleColor = ({rgb, weight, index, hexColor}) => {
    
    const [alert, setAlert] = useState(false);
    const bcg       = rgb.join(',');
    const hexValue  = `#${hexColor}`;
    // useEffect to handle to alert text only single color clicked
    // clear the previous alert text after 3 sec
    useEffect(() =>{
        const timeOut = setTimeout(()=>{
            setAlert(false);
        },3000);
        return () => clearTimeout(timeOut);
    },[alert])

    return (
        <article 
            className={`color ${index >= 10 && 'light-color'}`} 
            style={{backgroundColor:`rgb(${bcg})`}}
            onClick={() =>{
                setAlert(true);
                // copy text to clipboard
                navigator.clipboard.writeText(hexValue)
            }}
            >
            <p className="percent-value">{weight}%</p>
            <p className="hex-value">{hexValue}</p>
            {/* show the alert when click the single color box */}
            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    )
}
export default SingleColor;