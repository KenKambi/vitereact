import PropTypes from 'prop-types'

const Props = (props) => {
    
    return ( <>
                <p>My name is {props.table.name}. I am {props.table.age} years old and my country is {props.table.citizen}</p>

            </> );
}

//proptypes
Props.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}

//default props as placeholders
Props.defaultProps = {
    name : "Guest",
    age : 0,
    citizen : "USA",
}
 
export default Props;