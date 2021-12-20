const ItemInfo = (props) => {
    return (
        <div>
            { props.searchTerm ? props.filteredSearch.map((item, i) => (
                <div key={i} className="singleItem">
                    <h2>{item.name}</h2>
                    <img alt="item" src={item.image}/>
                    <button className="addToCart" onClick={() => {props.addToCart(item)}}>Add to cart</button>
                </div>
            ))
            :           
            props.allItems.map((item, i) => (
                <div key={i} className="singleItem">
                    <h2>{item.name}</h2>
                    <img alt="item" src={item.image}/>
                    <button className="addToCart" onClick={() => {props.addToCart(item)}}>Add to cart</button>
                </div>
            ))
            }
        </div>
    )
}
export default ItemInfo;
