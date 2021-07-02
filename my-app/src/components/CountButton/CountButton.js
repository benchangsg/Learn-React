import React, {useEffect, useState} from 'react'
import './CountButton.css'

const CountButton = (props) => {
    //console.log(props)
    const [currentCount, setCurrentCount] = useState(0)

    let handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    useEffect(() => {
        
    }, [currentCount = 10])

    return (
    <div>
        <button onClick={handleClick}>+{props.incrementBy}</button>
        <div className={'count-display'}>{currentCount}</div>
    </div>
    )
}

export default CountButton