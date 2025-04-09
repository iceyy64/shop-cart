
import styles from './About.module.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';


function About() {
  return (
    <div className={styles.mainCnt}>
      <div className={styles.aboutHeading}>
        <p>Timeless Elegance & Modern Style</p>
      </div>

      <div className={styles.cnt}>
        <div className={styles.miniCnt}>
          <p className={styles.header}>Our Journey</p>
          <p className={styles.txt}>Established with a dedication to elegance, we offer a curated selection of fashion and jewelry that combines classic sophistication with contemporary trends. Our goal is to provide you with enduring styles that remain relevant through the ages.</p>
        </div>
        <img src={img1} alt="Our Journey" className={styles.photo} />
      </div>

      <div className={styles.cnt}>
        <div className={styles.miniCnt}>
          <p className={styles.header}>Our Offerings</p>
          <p className={styles.txt}>From luxurious designer apparel to breathtaking jewelry, each piece is carefully chosen for its superior quality, artistry, and timeless charm. Whether you're looking for casual elegance or high-fashion glamour, our collection caters to all tastes.</p>
        </div>
        <img src={img2} alt="Our Offerings" className={styles.photo} />
      </div>

      <div className={styles.cnt}>
        <div className={styles.miniCnt}>
          <p className={styles.header}>Our Commitment</p>
          <p className={styles.txt}>We are dedicated to delivering genuine, high-end fashion paired with outstanding customer care. Your happiness is our focus, and we aim to make luxury attainable, seamless, and truly memorable.</p>
        </div>
        <img src={img3} alt="Our Commitment" className={styles.photo} />
      </div>
    </div>
  );
}


export default About;