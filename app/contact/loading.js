
export default function loading() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="card bg-base-300 rounded-box p-6 text-center animate-pulse">
                    <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-36 bg-gray-300 rounded mb-2"></div>
                </div>
            </div>

            <div className="divider md:divider-horizontal my-4 md:my-0">OR</div>
            <div className="w-full md:w-1/2">
                <div className="card rounded-box bg-base-300 flex-grow place-items-center p-4 animate-pulse">
                    <div className="h-6 w-32 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-64 bg-gray-300 rounded mb-4"></div>

                    <div className="w-full p-4 bg-white rounded-lg shadow-lg">
                        <div className="flex flex-col md:flex-row gap-2 mb-4">
                            <div className="w-full h-10 bg-gray-200 rounded mb-2"></div>
                            <div className="w-full h-10 bg-gray-200 rounded mb-2"></div>
                        </div>
                        <div className="mb-4">
                            <div className="w-full h-10 bg-gray-200 rounded"></div>
                        </div>
                        <div className="mb-4">
                            <div className="w-full h-20 bg-gray-200 rounded"></div>
                        </div>
                        <div className="w-full h-10 bg-blue-200 rounded"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
