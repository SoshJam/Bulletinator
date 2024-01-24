import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image
                    src="/logo.svg"
                    alt="bulletinator logo"
                    width={50}
                    height={50}
                />
                <h1>bulletinator</h1>
            </div>
            <div className={styles.links}>
                <Link href="/boards/test">
                    Boards
                </Link>
            </div>
        </nav>
    );
}