import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.left}>
                <span className={styles.title}>CNAT</span>
                <span className={styles.subtitle}>payment system</span>
            </div>

            <button className={styles.enterButton}>
                Enter
            </button>
        </header>
    );
};

export default Header;
