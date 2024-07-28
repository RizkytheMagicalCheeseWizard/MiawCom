export default function Register(){
    return (
        <main>
            <div className="auth-container">
                <div className="register">
                    <div className="title">
                        <h2>R e g i s t e r</h2>
                    </div>
                    <form action="">
                        <div>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div>
                            <input type="password" placeholder="Confirm Password"/>
                        </div>
                        <button type="submit">Regist</button>
                    </form>
                </div>
            </div>
        </main>
    );
}