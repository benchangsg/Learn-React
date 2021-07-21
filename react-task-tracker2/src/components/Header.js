import Button from './Button.js'
import PropTypes from 'prop-types'

const Header = ({showAddTask, onAdd }) => {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button 
                color={showAddTask ? 'red' : 'green'} 
                text={showAddTask ? 'close' : 'add'} 
                onClick={onAdd}
                />
        </header>
    )
}

Header.defaultProps = {
    title: 'Bens',
}


export default Header
