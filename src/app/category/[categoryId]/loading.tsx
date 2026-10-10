
export default function Loading() {
    return (
        <div className="w-10/12 mx-auto mt-5 mb-10 animate-pulse">

            {/* Category Header Skeleton */}
            <div className="bg-white p-5 rounded-3xl flex items-center gap-4 border border-gray-200">
                {/* Category Icon */}
                <div className="w-12 h-12 bg-gray-200 rounded-xl shrink-0" />

                {/* Category Name & Product Count */}
                <div className="flex-1 space-y-3">
                    <div className="h-7 bg-gray-200 rounded-md w-32" />
                    <div className="h-4 bg-gray-200 rounded-md w-56 max-w-full" />
                </div>
            </div>

            {/* Product Cards Skeleton */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 p-4 rounded-2xl"
                    >
                        {/* Image & Name */}
                        <div className="flex gap-3 items-center">
                            {/* Product Image */}
                            <div className="bg-gray-200 w-12 h-10 rounded-xl shrink-0" />

                            {/* Product Name & Unit */}
                            <div className="flex-1 space-y-2">
                                <div className="h-5 bg-gray-200 rounded-md w-3/4" />
                                <div className="h-3 bg-gray-200 rounded-md w-1/3" />
                            </div>
                        </div>

                        {/* Today's Price Label */}
                        <div className="mt-3 mb-2">
                            <div className="h-3 bg-gray-200 rounded-md w-20" />
                        </div>

                        {/* Price & Percentage */}
                        <div className="flex items-center justify-between gap-2">
                            {/* Price */}
                            <div className="h-6 bg-gray-200 rounded-md w-28" />

                            {/* Percentage Change */}
                            <div className="h-7 bg-gray-200 rounded-xl w-16" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}