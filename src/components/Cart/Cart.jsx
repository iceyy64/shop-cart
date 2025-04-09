import { useNavigate, useOutletContext, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from './Cart.module.css';
import card from '../../assets/cards.png';

function Cart(){
    const navigate = useNavigate();
    const { cart, setCart } = useOutletContext();

    const [isCheckout, setIsCheckout] = useState(false);

    function updateQuantity(productId, amount) {
        const updatedCart = cart.map(item =>
            item.id === productId
                ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                : item
        );
        setCart(updatedCart);
    }

    function removeItem(productId) {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    }

    function handleCheckout() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        setIsCheckout(true);
        setTimeout(() => {
            setIsCheckout(false);
            setCart([]);
        }, 2300);
    }


    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 0.99;
    const platformFee = 2.99;
    const discount = 0;
    const total = subtotal + shipping + platformFee - discount;

    if (isCheckout) {
        return (
            <div className={styles.checkoutScreen}>
                <h1>Thanks for shopping with us!</h1>
            </div>
        );
    }

    return(
        <div className={styles.mainCnt}>

            <div className={styles.productCnt}>
                <p className={styles.header}>Cart</p>
                {cart.length === 0 ? (
                    <p className={styles.emptyCart}>
                        Your cart is empty, <NavLink to="/shop" className={styles.shopNow}>Shop Now!</NavLink>
                        </p>
                ) : (
                    cart.map((item) => (
                        <div className={styles.cartItem} key={item.id}>
                            <div className={styles.miniImg}>
                                <img src={item.image} alt={item.title} className={styles.cartImage} />
                            </div>
                            
                            <div className={styles.cartDetails}>
                                <p className={styles.title}>{item.title}</p>
                                <p>$ {item.price}</p>
                                <div className={styles.quantityControl}>
                                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                </div>
                                <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className={styles.billCnt}>
                <p className={styles.header}>Bill</p>
                <div className={styles.billInfo}>
                    <p className={styles.txt}>Subtotal</p>
                    <p className={styles.txt}>$ {subtotal.toFixed(2)}</p>
                </div>
                <div className={styles.billInfo}>
                    <p className={styles.txt}>Shipping</p>
                    <p className={styles.txt}>$ {shipping}</p>
                </div>
                <div className={styles.billInfo}>
                    <p className={styles.txt}>Platform fee</p>
                    <p className={styles.txt}>$ {platformFee}</p>
                </div>
                <div className={styles.billInfo}>
                    <p className={styles.txt}>Discount</p>
                    <p className={styles.txt}>{discount}%</p>
                </div>
                <div className={styles.billInfo}>
                    <p className={styles.miniHeader}>Total</p>
                    <p className={styles.miniHeader}>$ {total.toFixed(2)}</p>
                </div>
                <div className={styles.discount}>
                    <p className={styles.txt}>Discount Coupon</p>
                    <div className={styles.coupon}>
                        <input type="text" placeholder='Enter coupon code' name='coupon' />
                        <button type='button' className={styles.miniHeader}>Apply</button>
                    </div>
                </div>
                <div className={styles.payment}>
                    <p className={styles.txt}>Payment methods</p>
                    <div className={styles.pay}>
                        <img src={card} alt="card-image" />
                        <p className={styles.txt}>All major credit cards accepted</p>
                    </div>
                </div>
                <button className={styles.miniHeader} onClick={handleCheckout}>Checkout </button>
            </div>

        </div>
    )
}
export default Cart;