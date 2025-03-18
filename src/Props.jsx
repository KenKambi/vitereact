import PropTypes from 'prop-types'

const Props = (props) => {

    
    return ( <>
                <p>My name is {props.table.name}. I am {props.table.age} years old and come from {props.table.citizen}</p>

            </> );
}

//proptypes
Props.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}

//default props
Props.defaultProps = {
    name : "Guest",
    age : 0,
    citizen : "USA",
}
 
export default Props;