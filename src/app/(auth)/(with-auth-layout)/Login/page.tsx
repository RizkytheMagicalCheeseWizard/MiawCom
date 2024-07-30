import Link from "next/link";
export default function Login(){
    return (
        <main>
            <div className="container mx-auto text-white">
                <div className="backdrop-blur-lg px-8 rounded-md">
                    <div className="text-center">
                        <div className=" p-5 text-2xl">L o g i n</div>
                    </div>
                    <form action="">
                        <div className="">
                            <div className="p-3 text-center">
                                <input type="text" placeholder="Username" className="p-2 rounded-md text-black"/>    
                            </div>    
                            <div className="pt-3 text-center">
                                <input type="password" placeholder="Password" className="p-2 rounded-md text-black"/>
                                
                            </div>
                            <div className="ml-6">
                                <label htmlFor=""><input type="checkbox" />Remember Me</label>
                            </div>
                            
                            <div className="my-2">
                                <label htmlFor="">Don't Have Account?<Link href={'Register'} className="text-blue-600 duration-300 hover:text-blue-400 active:text-blue-800">Register Here</Link></label>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="rounded-full bg-indigo-400 py-1 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-800 duration:300">Log In!</button>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}