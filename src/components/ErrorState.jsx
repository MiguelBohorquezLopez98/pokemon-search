const ErrorState = ({ message }) => {
    return (
        <div className="border-2 border-dashed border-red-300 rounded-2xl bg-red-50 p-10 text-center">
            <h3 className="font-black text-red-600 text-xl uppercase tracking-widest mb-2">
                ¡No encontrado!
            </h3>
            <p className="text-sm text-red-400 font-medium">{message}</p>
        </div>
    )
}

export default ErrorState