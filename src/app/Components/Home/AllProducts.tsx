import { toBanglaNumber } from '../../ContextAPI';
import ProductCard from '../ProductCard';
import { Product } from '../../ContextAPI';
import MyDropDown from './MyDropDown';
import ProductList from '../SortedProducts';

const AllProducts = async () => {
    const response = await fetch('https://api.api-store.workers.dev/api/bazardor/products',
        {
            cache: 'force-cache'
        }
    );
    const data: Product[] = await response.json();
    // console.log(data);

    return (
        <div id="সব-পণ্য" className="mt-10">
            <div>
                <h2 className="text-xl font-semibold">সব পণ্য</h2>
                <div className="flex items-center justify-between">

                </div>
            </div>

            <ProductList products={data}></ProductList>

        </div>
    );
};

export default AllProducts;