import product1Image from '../../assets/product/sp1.webp';
import product2Image from '../../assets/product/sp2.webp';
import product3Image from '../../assets/product/sp3.webp';
import product4Image from '../../assets/product/sp4.webp';
import ProductCard from '../ProductCard/ProductCard';

const SpecialProduct = () => {
// Fake data for product cards
    const products = [
        {
            id: 1,
            name: 'Phone 1',
            image: product1Image,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            storageCapacity: '64GB',
            ram: '4GB',
            chipset: 'i3',
            price: 200,
            display: '7 inch',
            discountPrice: 150
        },
        {
            id: 2,
            name: 'Phone 2',
            image: product2Image,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            storageCapacity: '64GB',
            ram: '4GB',
            chipset: 'i3',
            display: '7 inch',
            price: 250,
            discountPrice: 200
        },
        {
            id: 3,
            name: 'Phone 3',
            image: product3Image,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            storageCapacity: '64GB',
            ram: '4GB',
            chipset: 'i3',
            display: '7 inch',
            price: 300,
            discountPrice: 250
        },
        {
            id: 4,
            name: 'Phone 4',
            image: product4Image,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            storageCapacity: '64GB',
            ram: '4GB',
            chipset: 'i3',
            display: '7 inch',
            price: 300,
            discountPrice: 250
        }
    ];
    return (
        <div className='row my-5'>
            <h3>Nổi bật</h3>
            {products.map(product => (
                <div key={product.id} className="col-md-3 mb-2">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
};

export default SpecialProduct;