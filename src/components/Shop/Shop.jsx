import { useState, useEffect, useRef } from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from './Shop.module.css';
import Spinner from '../Spinner/Spinner.jsx';

function Shop(){
    const [dataArr, setDataArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { cart, setCart } = useOutletContext();
    const inputRefs = useRef([]);


    async function fetchData(){
        try {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const fashionAndJewelryProducts = data
                .filter(el => 
                    el.category === "men's clothing" || 
                    el.category === "women's clothing" || 
                    el.category === "jewelery"
                )
                .slice(0, 20)
                .map(el => ({
                    id : el.id,
                    image: el.image,
                    title: el.title,
                    rating: el.rating.rate,
                    price: el.price,
                    category: el.category
                }));
            setDataArr(fashionAndJewelryProducts);
            console.log(fashionAndJewelryProducts);
        } catch (error) {
            console.error('Error fetching data:', error);
        }finally {
            setLoading(false); 
        }
    }        

    useEffect(() => {
        fetchData()
    }, []);

    function handleClick(event, product, index){
        event.preventDefault();

        const quantity = parseInt(inputRefs.current[index]?.value) || 1;
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            navigate("/cart");
        } else {
            setCart([...cart, { ...product, quantity}]); 
            event.target.textContent = "Go to Cart";
        }
    }

    return (
        <div className={styles.mainCnt}>
            <div className={styles.header}>
                <p>Timeless Elegance: Fashion & Jewelry</p>
            </div>
            {loading ? (
                <div className={styles.loading}>
                <Spinner />
                <div className={styles.loader}>Loading...</div> 
                </div>
            ) : (
            dataArr.map((el, index) => {
                return (
                <div className={styles.cnt} key={el.id}>

                    <div className={styles.productImg}>
                    <img src={el.image} alt="product-image" />
                    </div>

                    <div className={styles.title}>
                        <p>{el.title}</p>
                    </div>

                    <div className={styles.miniCnt}>
                        <p>⭐ {el.rating}</p>
                        <p>$ {el.price}</p>
                    </div>

                    <div className={styles.miniCnt}>
                        <div className={styles.quantity}>
                            <input ref={(input) => {
                            if (input) inputRefs.current[index] = input;
                        }}  type="number" step="1" min="1" name="quantity" defaultValue="1" />
                        </div>
                        <div className={styles.btn}>
                            <button onClick={(event) => handleClick(event, el, index)}>
                                {cart.find(item => item.id === el.id) ? "Go to Cart" : "Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
                );
            }))}

        </div>
    )
}
export default Shop;