export default function Search(){
    return (
        <div className="flex">
            <input type="search" name="search" id="search" placeholder="Search.." className="px-2 py-1 rounded-l bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600 flex-grow"/>
            <button className="bg-gray-700 rounded-r py-1" type="submit" >
                <img className="size-6" src="icon-search.svg" alt="" />
            </button>
        </div>
    );
}
