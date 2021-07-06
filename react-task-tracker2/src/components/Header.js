import Button from './Button.js'

const Header = (props) => {
    return (
        <header className='header'>
            <h1 >{props.title} Task Tracker</h1>
            <Button color='green'/>
            <Button color='crimson' text='Hello1'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Bens',
}


export default Header
