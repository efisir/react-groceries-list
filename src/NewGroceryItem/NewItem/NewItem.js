import './NewItem.css'
import  NewItemForm from './NewItemForm'
import Card from '../../UI/Card'

const NewItem = (props)=>{

    const NewItemSubmited = (item) => {
        props.onNewItemPassed(item)

    }

    return (
        <Card className='new-item-input'>
            <NewItemForm onNewItemSubmited={NewItemSubmited}/>
        </Card>
    )
}


export default NewItem;