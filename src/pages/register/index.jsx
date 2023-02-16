import { Link } from "react-router-dom"
import { InputField } from "../../components/InputField"
import { SubmitButton } from "../../components/SubmitButton"

export default function Register() {
    return (
        <main className="page-wrapper">
            <form action="" className="form">
                <h1 className="form__title">Signup</h1>
                <div className="form__row">
                    <InputField label="First name" name="firstName" type="text" />
                    <InputField label="Last name" name="lastName" type="text" />
                </div>
                <InputField label="Mail adress" name="mail" type="email" />
                <InputField label="Confirm mail adress" name="mailConfirm" type="email" />
                <InputField label="Password" name="password" type="password" />
                <InputField label="Confirm password" name="passwordConfirm" type="password" />
                <p className="form__conditions">By clicking “Create my account”, you agree to our <br/><Link className="form__link" to="/">Terms and Conditions</Link> and <Link className="form__link" to="/">Privacy Statement</Link></p>
                <SubmitButton color={"red"}>Create my account</SubmitButton>
            </form>
            <p className="text--secondary">Already have an account? <Link class="text--secondary__link" to="/login">Login</Link></p>
        </main>
    )
}