import Link from "next/link";
import styles from '@/app/styles/Login.module.css';
export default function Login(){
    return (
        <main>
            <div className={styles.auth_container}>
                <div className="login">
                    <div className="title">
                        <h2>L o g i n</h2>
                    </div>
                    <form action="">
                        <div className="login-card">
                            <div className="input-card">
                                <input type="text" placeholder="Username" />    
                            </div>    
                            <div >
                                <input type="password" placeholder="Password" />
                                
                            </div>
                            <div>
                                <label htmlFor=""><input type="checkbox" />Remember Me</label>
                            </div>
                            <div>
                                <label htmlFor="">Don't Have Account?<Link href={'Register'}>Register Here</Link></label>
                            </div>
                            <button type="submit">Log In!</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}