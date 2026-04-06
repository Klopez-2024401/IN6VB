

export const LoginForm = () => {
    return (
        <form action="" className="space-y-S">
            <div>
                <label 
                    htmlFor=""
                    className="block text-sm font-medium text-gray-800 mb-1.5"    
                >
                    Email o Usuario
                </label>

                <input 
                    id="emailOrUsername"
                    type="text" 
                    placeholder="correo@ejemplo.com o usuario"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg foc"
                />
            </div>
        </form>
    )
}
