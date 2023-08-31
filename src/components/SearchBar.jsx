export default function SearchBar({ data }) {
    console.log (data)

    return (
        <div>
            

            <input type="text" className="cityInput" placeholder="Search" />
                <div className="search-icon" onClick={search}>
                    <img src={search_icon} alt="" />
                </div>
            
        </div>

        
    );

    
}
