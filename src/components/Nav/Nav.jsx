import { NavLink } from "react-router-dom";
import styles from './Nav.module.css';
import CartLogo from '../../assets/cartLogo.png';
import homeLogo from '../../assets/homeLogo.png';
import shopLogo from '../../assets/shopLogo.png';
import aboutLogo from '../../assets/aboutLogo.png';

function Nav({ cart }){
    return (
        <div className={styles.navCnt}>
            <div className={styles.logo}>
                <p>Shop-Cart ⚈</p>
            </div>
            <div className={styles.pages}>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.nav}>
                    <img src={homeLogo} alt="home-logo" className={styles.sublogo} />
                    <p className={styles.navHead}>Home</p>
                </NavLink>

                <NavLink to="/shop" className={({ isActive }) => isActive ? styles.active : styles.nav}>
                    <img src={shopLogo} alt="shop-logo" className={styles.sublogo} />
                    <p className={styles.navHead}>Shop</p>
                </NavLink>

                <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : styles.nav}>
                    <img src={aboutLogo} alt="about-logo" className={styles.sublogo} />
                    <p className={styles.navHead}>About</p>
                </NavLink>
            </div>
            <div className={styles.cart}>
                <NavLink to="/cart" className={({ isActive }) => isActive ? styles.active : styles.nav}>
                    <img src={CartLogo} alt="cart-logo" className={styles.sublogo} />
                    {cart.length > 0 && <span className={styles.cartDot}></span>}
                </NavLink>
            </div>
        </div>
    )
};

export default Nav;