import React,{useState} from 'react'
import Eye from "./Images/Eye.svg";
import Logo from "./Images/Logo.svg";
import "../fonts.css";
import styles from "./Header.module.css";

const headerLinks=["Sign In","Legal","Licenses","Security","Careers","Press","Support","Status","CodeBlog"];

function Header() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      }
      else {
          setColorchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className={colorChange ? `${styles.navbar_container} ${styles.colorChange}` : styles.navbar_container }>
      
    <div className={styles.logo_container}>
        <img alt="x" className={styles.logo_image} src={Logo} />
    </div>
    <div className={styles.link_container}>
      <header>
          <nav> 
            <ul>        
              {headerLinks.map((item)=> <li className={styles.list_item}>{item}</li>)}
            </ul>
          </nav>
      </header>
    </div>
    <div className={styles.eye_container}>
        <img alt="x" className={styles.eye_image} src={Eye} />
    </div>
    </div>
  )
}

export default Header