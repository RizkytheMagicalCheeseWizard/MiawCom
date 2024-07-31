import Link from "next/link";
import Search from "./Search/search";
export default function NavBar(){
    return (
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
                    <Search/>
                    <button type="submit" className="text-white"><Link href={'Register'}>Sign Up</Link></button>
                    {/* <a href="" className="text-white hover:text-gray-400"><img src="icon-profile.svg" alt="" className="size-9"/></a> */}
                </div>
            </div>
        </nav>
    );
}