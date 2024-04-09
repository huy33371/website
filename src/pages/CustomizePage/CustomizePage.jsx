import { useEffect } from 'react';
import SearchCustomize from '../../component/SearchCustomize/SearchCustomize';
import SpecialProduct from '../../component/SpecialProduct/SpecialProduct';
import HomeSlider from '../HomePage/HomeSlider/HomeSlider';
import './CustomizePage.scss';
import { useSelector } from 'react-redux';
import ProductCard from '../../component/ProductCard/ProductCard';

const CustomizePage = () => {
    const resultSearch = useSelector(state => state.search.resultSearch);
    
    useEffect(() => {
        console.log("check result search: ", resultSearch);
    }, [resultSearch])

    return (
        <div className='container'>
            <HomeSlider />
            <SearchCustomize />
            {resultSearch && (
                <div className='row mt-4 result-search-customize'>
                    <h4>Sản phẩm phù hợp được tìm thấy:</h4>
                    {resultSearch.map(product => (
                        <div key={product._id} className="col-md-3 mb-2">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            )}
            <SpecialProduct />
        </div>
    );
};

export default CustomizePage;
