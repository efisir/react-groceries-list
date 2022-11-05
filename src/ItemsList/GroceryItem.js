
import './GroceryItem.css'



const GroceryItem = (props) => {
    const itemClickedHandler = (event) => {
        props.OnGroceryItemClicked(props.id)

    }

    return (<li className='grocery-item'  onClick={itemClickedHandler}>{props.Description}</li>);
};


export default GroceryItem;