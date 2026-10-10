export default function Loading() {
    return (
        <div className="w-10/12 mx-auto mt-6 mb-10 animate-pulse">

            {/* Breadcrumb Skeleton */}
            <div className="mb-6 flex items-center gap-3">
                <div className="h-4 w-10 bg-gray-200 rounded" />
                <div className="h-4 w-2 bg-gray-200 rounded" />
                <div className="h-4 w-16 bg-gray-200 rounded" />
                <div className="h-4 w-2 bg-gray-200 rounded" />
                <div className="h-4 w-28 bg-gray-200 rounded" />
            </div>

            {/* Product Details Banner */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col md:flex-row md:justify-between gap-5">

                {/* Product Name & Icon */}
                <div className="flex gap-4 items-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-2xl shrink-0" />

                    <div className="flex-1 space-y-3">
                        <div className="h-8 bg-gray-200 rounded-md w-48 max-w-full" />
                        <div className="h-4 bg-gray-200 rounded-md w-36" />

                        <div className="flex gap-2 items-center">
                            <div className="h-4 bg-gray-200 rounded w-40 max-w-full" />
                            <div className="h-4 bg-gray-200 rounded w-10" />
                        </div>
                    </div>
                </div>

                {/* Today's Price */}
                <div className="bg-[#f0f5f0] p-5 rounded-2xl flex justify-center md:min-w-40">
                    <div className="flex flex-col items-center gap-3 w-full">
                        <div className="h-4 bg-gray-200 rounded w-20" />
                        <div className="h-9 bg-gray-200 rounded-md w-24" />
                        <div className="h-4 bg-gray-200 rounded w-24" />
                        <div className="h-4 bg-gray-200 rounded w-12" />
                    </div>
                </div>
            </div>

            {/* Price Summary & Market Table */}
            <div className="bg-white border border-gray-200 p-6 rounded-3xl mt-7">

                {/* Section Heading */}
                <div className="h-6 bg-gray-200 rounded-md w-36 mt-1" />

                {/* Summary Cards */}
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 py-4 px-6 rounded-2xl space-y-3"
                        >
                            <div className="h-4 bg-gray-200 rounded w-24" />
                            <div className="h-8 bg-gray-200 rounded-md w-32 max-w-full" />
                            <div className="h-3 bg-gray-200 rounded w-36 max-w-full" />
                        </div>
                    ))}
                </div>

                {/* Market Table Heading */}
                <div className="h-6 bg-gray-200 rounded-md w-52 max-w-full mt-7" />

                {/* Market Table */}
                <div className="mt-4 border border-gray-200 rounded-2xl overflow-hidden">

                    {/* Table Header */}
                    <div className="grid grid-cols-5 gap-4 bg-gray-50 px-4 py-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className="h-4 bg-gray-200 rounded w-full"
                            />
                        ))}
                    </div>

                    {/* Table Rows */}
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-5 gap-4 px-4 py-5 border-t border-gray-100"
                        >
                            <div className="h-4 bg-gray-200 rounded w-full" />
                            <div className="h-4 bg-gray-200 rounded w-3/4" />
                            <div className="h-4 bg-gray-200 rounded w-3/4" />
                            <div className="h-4 bg-gray-200 rounded w-3/4" />
                            <div className="h-4 bg-gray-200 rounded w-3/4" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Back to Category Button */}
            <div className="mt-5 ml-3">
                <div className="h-10 bg-gray-200 rounded-lg w-32" />
            </div>

        </div>
    );
}