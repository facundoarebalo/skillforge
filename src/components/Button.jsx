const Button = ({ children, variant, onClick }) => {
    const baseStyles =
        "border-2 border-zinc-600 px-4 py-2 rounded-lg hover:bg-zinc-700 transition-colors cursor-pointer";

    const variants = {
        primary: "bg-zinc-800",
        secondary: "",
    };

    return (

        <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </button>

    )
}

export default Button