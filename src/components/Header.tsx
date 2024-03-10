import React from 'react';
import styles from '../styles/headerIndex.module.css'

const Header: React.FC = () => {
  return (
    <header >
      <nav className={styles.nav}>
        <div className={styles.left}>
          <p className={styles.ptitle}>Rustcut</p>
        </div>
        <div className={styles.right}>
          <a href="/my-urls" className={styles.link}>My URLs</a>
          <a href="/plans" className={styles.link}>Plans</a>
          <a href="/blog" className={styles.link}>Blog</a>
          <a href="/features" className={styles.link}>Features</a>
          <a href="/sign-up" className={styles.link}>Sign Up</a>
          <a href="/sign-in" className={styles.link}>Sign In</a>
        </div>
      </nav>
    </header>
  );
}


export default Header;