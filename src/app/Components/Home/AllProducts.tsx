import { Product } from '../../ContextAPI';
import SortedProducts from '../SortedProducts';

const AllProducts = async () => {
    const response = await fetch(
        'https://openapi.programming-hero.com/api/bazardor/products',
        {
            cache: 'force-cache',
        }
    );

    const data: Product[] = await response.json();

    return (
        <div id="সব-পণ্য" className="mt-6 sm:mt-8 lg:mt-10">

            {/* Heading */}
            <div>
                <h2 className="text-lg sm:text-xl font-semibold font-noto">
                    সব পণ্য
                </h2>
            </div>

            {/* Product List */}
            <SortedProducts products={data} />

        </div>
    );
};

export default AllProducts;