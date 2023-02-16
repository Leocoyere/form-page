export function SubmitButton({children, color}) {
    return (
        <button type="submit" className={`submit-button submit-button--${color}`}>{children}</button>
    )
}
