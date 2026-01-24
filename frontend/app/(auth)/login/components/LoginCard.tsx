import LoginForm from "./LoginForm";

export default function LoginCard() {
    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16 w-full">
                <LoginForm/>
            </div>
        </>
    )
}