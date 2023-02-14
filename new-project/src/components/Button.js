import React, {useState} from "react";


const ClickMeButton = () => {
    const startText = "Click Me!"
    const singleClick = "You clicked me!"
    const doubleClick = "Stop clicking me!"
    const [buttonText, setButtonText] = useState(startText);

    const onClick = () => {
        if (buttonText === startText) {
            setButtonText(singleClick)
        }
        if (buttonText === singleClick) {
            setButtonText(doubleClick)
            setTimeout(() => {
                setButtonText(startText);
            }, 3000);
        }
    }

    return (
        <div>
            <button
                className='btn'
                onClick={onClick}
            >
                {buttonText}
            </button>
        </div>
    )
}



export default ClickMeButton