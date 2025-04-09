import styles from './Footer.module.css';
import Twitter from '../../assets/twitter.png';
import Github from '../../assets/github.png';
import Discord from '../../assets/discord.png';
import Linkedin from '../../assets/linkedin.png';

function Footer(){
    return (
        <div className={styles.mainCnt}>
            <div className={styles.cnt1}>
                <p className={styles.header}>Company</p>
                <p className={styles.subheading}>About Us</p>
                <p className={styles.subheading}>Our Services</p>
                <p className={styles.subheading}>Privacy Policy</p>
                <p className={styles.subheading}>Affiliate Program</p>
            </div>
            <div className={styles.cnt2}>
                <p className={styles.header}>Online Shop</p>
                <p className={styles.subheading}>Watch</p>
                <p className={styles.subheading}>Bag</p>
                <p className={styles.subheading}>Shoes</p>
                <p className={styles.subheading}>Dress</p>
            </div>
            <div className={styles.cnt3}>
                <p className={styles.header}>Get Help</p>
                <p className={styles.subheading}>FAQ</p>
                <p className={styles.subheading}>Order Status</p>
                <p className={styles.subheading}>Returns</p>
                <p className={styles.subheading}>Payment Options</p>
            </div>
            <div className={styles.cnt4}>
            <p className={styles.header}>Follow Us</p>
            <div className='logo'>
                <a href="https://www.linkedin.com/in/lakshay-riyar-50165a248/" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="LinkedIn" className={styles.smlogo} />
                </a>
                {/* <a href="https://xcm/?t=6KBvNdF6L0l0QtQBwhoQ&s=09" target="_blank" rel="noopener noreferrer">
                    <img src={Twitter} alt="Twitter" className={styles.smlogo} />
                </a> */}
                {/* <a href="https://discco90045915508" target="_blank" rel="noopener noreferrer">
                   <img src={Discord} alt="Discord" className={styles.smlogo} />
                </a> */}
                <a href="https://github.com/iceyy64" target="_blank" rel="noopener noreferrer">
                   <img src={Github} alt="GitHub" className={styles.smlogo} />
                </a>
                </div>
            </div>
        </div>
    )
}
export default Footer;