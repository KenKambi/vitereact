import table from "./data";
import Props from "./Props";


const Array = (props) => {

    return ( <>
                <p> Hello {props.tables.name}</p>
                <p> I come from {props.tables.citizen}</p>
            </> );
}
 
export default Array;