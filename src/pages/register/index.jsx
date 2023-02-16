import { Link } from "react-router-dom"

export default function Register() {
    return (
        <main className="page-wrapper">
            <form action="" className="form">
                <nav className="form__nav">
                    <Link to='/login' className="form__link">Login</Link>
                    <Link to='/register' className="form__link form__link--red">Create an account</Link>
                </nav>
                <div className="form__row">
                    <input type="text" className="form__input" placeholder="First name"/>
                    <input type="text" className="form__input" placeholder="Last name"/>
                </div>
                <input type="email" className="form__input" placeholder="Mail adress"/>
                <input type="email" className="form__input" placeholder="Confirm mail adress"/>
                <input type="password" className="form__input" placeholder="Password"/>
                <input type="password" className="form__input" placeholder="Confirm password"/>
                <button type="submit" className="form__button form__button--red">Create my account</button>
            </form>
        </main>
    )
}