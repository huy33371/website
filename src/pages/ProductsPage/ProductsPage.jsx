import HomeSlider from '../HomePage/HomeSlider/HomeSlider';
import DisplayProduct from './DisplayProduct/DisplayProduct';
import ListManufacturer from './ListManufacturer/ListManufacturer';
import './ProductsPage.scss';

const ProductsPage = () => {

    return (
        <div className='container'>
            <HomeSlider />
            <div className='products-container'>
                <div className='products-filter'>
                    <div className='filter-manufacturer'>

                    </div>
                    <div className='filter-price'>

                    </div>
                </div>
                <div className='products-content'>
                    <ListManufacturer />
                    <DisplayProduct />
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;