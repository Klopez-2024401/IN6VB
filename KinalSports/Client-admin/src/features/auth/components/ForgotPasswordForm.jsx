

export const ForgotPasswordForm = ({ onSwitch }) => {
    return (
        <form action="space-y-5">
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-800 mb-1.5"
                >
                    Email
                </label>

                <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-main-blue hover:opacity-90 text-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm disabled:opacity-50"
            >
                Enviar correo
            </button>

            <p className="text-center text-sm text-gray-600">
                ¿Recordaste tu contraseña?{" "}
                <button
                    type="button"
                    className="text-main-blue font-medium hover:opacity-90"
                    onClick={onSwitch}
                >
                    Iniciar sesión
                </button>
            </p>
        </form>
    )
}
