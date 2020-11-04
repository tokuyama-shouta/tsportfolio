import Head from 'next/head'
import styles from '../components/styles/Home.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'




export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TokyamaShouta|Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main>
        <div className={styles.mainBox}>
          <h1 className={styles.myName}>Tokuyama Shouta </h1>
          <h2 className={styles.myTitle}>Portfoli</h2>
          <div className={styles.btnBox}>
            <Link href="/posts/profile">
              <button className={styles.btnStyle}>Profile</button>
            </Link>
            <Link href="/posts/skill">
              <button className={styles.btnStyle}>Skill</button>
            </Link>
            <Link href="/posts/works">
              <button className={styles.btnStyle}>Works</button>
            </Link>
            <Link href="/posts/contact">
              <button className={styles.btnStyle}>Contact</button>
            </Link>
          </div>
        </div>
      </main>
      <div className={styles.soccerAnimation}>
        <img src="/img/soccer1.jpg"/>
      </div>

    </Layout>
  )
}
