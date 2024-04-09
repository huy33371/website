import { useEffect, useState } from 'react';
import ProductCard from '../../component/ProductCard/ProductCard';
import './ResultSearchNormalPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { searchCategoriesNormalAction } from '../../redux/actions/SearchAction/searchAction';

const ResultSearchNormalPage = () => {
    const dispatch = useDispatch();

    const resultSearchNormal = useSelector(state => state.search.resultSearchNormal);
    const keywordSearchNormal = useSelector(state => state.search.keywordNormal);
    const totalPagesSearchNormal = useSelector(state => state.search.totalPagesSearchNormal);
    const totalResultSearchNormal = useSelector(state => state.search.totalResultSearchNormal);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(searchCategoriesNormalAction(keywordSearchNormal, currentPage));
    }, [dispatch, keywordSearchNormal, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='container result-search-normal'>
            <p>Tìm thấy <span className='infor-search'>{totalResultSearchNormal}</span> kết quả với từ khóa: <span className='infor-search'>{keywordSearchNormal}</span></p>
            <div className='result-search-container'>
                {resultSearchNormal && resultSearchNormal.map(product => (
                    <div key={product._id} className="col-md-3 mb-2">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <nav aria-label="Page navigation example" className='d-flex justify-content-center my-2'>
                <ul className="pagination">
                    {[...Array(totalPagesSearchNormal)].map((_, index) => (
                        <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default ResultSearchNormalPage;
