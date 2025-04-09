import { useNavigate} from "react-router-dom";
import HomeImg from '../../assets/HomeImage.jpg'
import styles from './Home.module.css';
function Home(){
    const navigate = useNavigate();

    function handleClick(event){
        event.preventDefault();
        navigate("/shop");
    }

    return(
        <div className={styles.mainCnt}>
            <div className={styles.cnt1}>
                <p>Discover the perfect blend of elegance, comfort, and trend with our exclusive fashion collections.</p>
                <button onClick={(event) => handleClick(event)}>Shop Now</button>
            </div>
            <div className={styles.cnt2}>
                <img src={HomeImg} alt="homepage-mainImage" className={styles.homeImg}/>
            </div>
        </div>
    )
}
export default Home;