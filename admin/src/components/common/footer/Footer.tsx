import React from "react"

const Footer = () => {
    return (
        <>
            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="flex-row justify-center w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023 Dashboard™
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer