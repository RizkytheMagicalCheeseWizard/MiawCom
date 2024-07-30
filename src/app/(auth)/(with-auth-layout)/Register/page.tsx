export default function Register(){
    return (
        <main>
            <div className="container mx-auto text-white">
                <div className="backdrop-blur-lg px-8 rounded-md">
                    <div className="text-center">
                        <div className="p-5 text-2xl">R e g i s t e r</div>
                    </div>
                    <form action="">
                        <div className="p-3 text-center">
                            <input type="text" placeholder="Username" className="p-2 rounded-md text-black"/>
                        </div>
                        <div className="p-3 text-center">
                            <input type="email" placeholder="Email" className="p-2 rounded-md text-black"/>
                        </div>
                        <div className="p-3 text-center">
                            <input type="password" placeholder="Password" className="p-2 rounded-md text-black"/>
                        </div>
                        <div className="p-3 text-center">
                            <input type="password" placeholder="Confirm Password" className="p-2 rounded-md text-black"/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="rounded-full bg-indigo-400 py-1 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-800 duration:300">Register</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </main>
    );
}