export default function NavBar(){
    return (
        <main>
            <nav className="bg-gray-800 p-2">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <ul className="flex space-x-6">
                            <li><a href="#" className="text-white hover:text-gray-400">Main</a></li>
                            <li><a href="#" className="text-white hover:text-gray-400">Miaw</a></li>
                            <li><a href="#" className="text-white hover:text-gray-400">Source</a></li>
                        </ul>
                    </div>
                    <div className="flex space-x-2">
                        <a href="#"><img src="icon-cat.svg" alt="" /></a>
                        <a href="#" className="p-2 text-white">MiawCom</a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="flex">
                            <input type="search" name="search" id="search" placeholder="Search.." className="px-2 py-1 rounded-l bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600 flex-grow"/>
                            <button className="bg-gray-700 rounded-r py-1" type="submit" >
                                <img className="size-6" src="icon-search.svg" alt="" />
                            </button>
                        </div>
                        
                        <a href="" className="text-white hover:text-gray-400"><img src="icon-profile.svg" alt="" className="size-9"/></a>
                    </div>
                </div>
                
                
            </nav>
        </main>
    );
}