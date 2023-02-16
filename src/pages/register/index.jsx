import { Link } from "react-router-dom"

export default function Register() {
    return (
        <main className="form-wrapper">
            <form action="" className="form">
                <nav className="form-nav">
                    <Link to='/login' className="form-link">Login</Link>
                    <Link to='/register' className="form-link form-link--red">Create an account</Link>
                </nav>
                <div className="form-row">
                    <input type="text" className="form-input" placeholder="First name"/>
                    <input type="text" className="form-input" placeholder="Last name"/>
                </div>
                <input type="email" className="form-input" placeholder="Mail adress"/>
                <input type="email" className="form-input" placeholder="Confirm mail adress"/>
                <input type="password" className="form-input" placeholder="Password"/>
                <input type="password" className="form-input" placeholder="Confirm password"/>
                <button type="submit" className="form-button form-button--red">Create my account</button>
            </form>
        </main>
    )
}