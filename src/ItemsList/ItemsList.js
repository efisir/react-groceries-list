import './ItemsList.css'
import GroceryItem from './GroceryItem';

const ItemsList = (props) => {

    const GroceryItemClickedHandler = (key) => {
        props.OnGroceryListItemClicked(key)
    }

    return (

        <div>
            
            <div className='shop-list'>
                <ul>
                    <li className='list-title'>My Grocery List:</li>
                    {props.items.length > 0 ? <li/> : <li className='list-error'>List Is Empty !!</li>}
                    {props.items.map((item) => (
                    <GroceryItem 
                    id = {item.id}
                    key={item.id}
                    Description={item.name}
                    OnGroceryItemClicked={GroceryItemClickedHandler}/> 
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default ItemsList;