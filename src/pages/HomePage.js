import { useState, useEffect } from "react";
import ItemInfo from "../components/ItemInfo";
// import allItemsList from ''
import axios from "axios";

const Home = (props) => {
    const [allItems, setAllItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSearch, setFiltererdSearch] = useState([])

    const fetchAllItems = async () => {
        try {
            let response = await axios.get(`http://localhost3001/items`)
            //console.log(response)
            setAllItems(response.data.allItems)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAllItems()
    }, [])

    const filterFunction = () => {
        let filtered = allItems.filter((item) => {
            return item.name.includes(searchTerm)
        })
        setFiltererdSearch(filtered)
    }
    useEffect(() => {
        filterFunction(searchTerm)
    }, [searchTerm])


    const addToCart = (item) => {
        props.setUserCart([...props.userCart, item])
    }

    return (
        <div className="searchResults">
            <main> Shop for your Fav Electro Items!</main>
            <form>
                <input type="text" placeholder="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </form>
            <ItemInfo
                filteredSearch={filteredSearch}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                allItems={allItems}
                addToCart={addToCart}
            />
        </div>
    )
}

export default Home;
