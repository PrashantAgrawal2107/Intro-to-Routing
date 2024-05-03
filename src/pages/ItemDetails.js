import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function ItemDetails(){

    const {id} = useParams();
    
    const item = ITEMS.find((i)=>i.id==id);

        return (
            <>
            <main>
                <h1>ItemDetails</h1>
            </main>
            
            <h2>{`Title : ${item.title}`}</h2>
            <h3>{`Description : ${item.description}`}</h3>
            </>
        )
}

export default ItemDetails;