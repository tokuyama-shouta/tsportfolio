import Head from 'next/head'
import Layout from '../../components/Layout'
import Link from 'next/link'
import styles from '../../components/styles/Contact.module.css'






export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>TokyamaShouta|Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.myProfile}>Contact</h1>

      <h2 className={styles.myContact}>ご連絡はTwitterのDMでお願い致します。</h2>
      <div className={styles.myContact1}>
        <a href="#" target="_blank">
          <img src="/img/twiiter1.jpg" alt="Twitter"/>
        </a>
        <a href="https://github.com/tokuyama-shouta" target="_blank">
          <img src="/img/github.png" alt="GitHub"/>
        </a>
      </div>
      
     



      <div className={styles.soccerAnimation}>
        <img src="/img/soccer1.jpg" alt="サッカーボール"/>
      </div>
      <div className={styles.btnBox}>
        <Link href="/">
            <button className={styles.btnStyle}>Back to Home</button>
        </Link>
      </div>



    </Layout>
  )
}