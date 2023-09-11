import Head from "next/head";
import Image from "next/image";
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

function Avatar({size}){
    return (
        <Image
            priority
            src="/images/profile.png"
            className={utilStyles.borderCircle}
            height={size}
            width={size}
            alt="avatar"
        />
    )
}
export default function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="Learn how to build a personal website using Next.js"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                <>
                    <Avatar
                        size={144}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
                ) : (
                    <>
                        <Avatar
                            size={108}
                        />
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    )
}