"use client"

const Button = ({children,handler}:{children:any,handler: () => void }) => {
    
    
    return (
        <div>
            <button onClick={handler} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md">
                {children}
            </button>
        </div>
    )
}

export default Button
