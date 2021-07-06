const Button = (props) => {
    return  <button className='btn' style={{backgroundColor: props.color}}>{props.text}</button>
}

Button.defaultProps = {
    text: 'Hello'
}

export default Button
