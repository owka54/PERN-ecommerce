import { useState } from "react";
import Products from "./products";

export default function SearchBar() {

    const [search, setSearch] = useState('');

    return (
        <div id="searchbar">
            <input id="search" type={"input"} placeholder="Search for an item" value={search} onChange={e => setSearch(e.target.value)} />
            <Products search={search}/>
        </div>
    );
}