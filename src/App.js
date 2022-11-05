import './App.css';
import NewItem from './NewGroceryItem/NewItem/NewItem'
import ItemsList from './ItemsList/ItemsList'
import React, {useState} from 'react';


const items = [
  { id: 'i1', name:'nkalsn' },
  { id: 'i2', name:'2lkj2' },
  { id: 'i3', name:'3nn3,' },
  { id: 'i4', name:'4mjkhjk4' },
  { id: 'i5', name:'mvls flmdsl;fm fslmf;sdf lm;dsmf' }
]

const iniItems = items.map(item => {
  return {key: item.id, ...item}
})




function App() {

    const [items ,setItems] = useState(iniItems)


    const NewItemPasssed = (newItem) => {
      setItems((prevItems)=>{
        return [newItem, ...prevItems]
      })

    }
    const ItemClickedHandler = (key) => {
      const idx = items.findIndex((item)=> item.key === key)
      setItems((prevItems)=> {
 
        const filteredItems =  prevItems.filter(item => item.key != key)
        return filteredItems
      } )

  }
  return (
    <div className="baseStyle">
      <NewItem onNewItemPassed={NewItemPasssed}/>
      <ItemsList items={items} OnGroceryListItemClicked={ItemClickedHandler}/>
    </div>
  );
}

export default App;
