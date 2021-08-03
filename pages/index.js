import Head from 'next/head'
import Nav from '../comps/Nav'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Employee List | Home</title>
        <meta name="keyword" content="employees" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>
        <p className={styles.text}>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>
        <Link href="/employees">
          <a className={styles.btn}>See Employee Listing</a>
        </Link>
      </div>
    </>
  )
}
