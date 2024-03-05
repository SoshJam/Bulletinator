import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <div className={styles.logo}>
                    <Image
                        src="/logo.svg"
                        alt="Bulletinator logo"
                        width={50}
                        height={50}
                    />
                    <h1>Bulletinator</h1>
                </div>
            </Link>
            <div className={styles.links}>
                <Link href="/boards/">
                    Boards
                </Link>
            </div>
        </nav>
    );
}