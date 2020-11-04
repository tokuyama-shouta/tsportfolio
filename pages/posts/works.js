import Head from 'next/head'
import Link from 'next/link'
import styles from '../../components/styles/Works.module.css'




export default function Works() {
  return (
    <div className={styles.worksContainer}>
      <Head>
        <title>TokyamaShouta|Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.myProfile}>Works</h1>

      <article className={styles.worksBox}>
          <div className={styles.worksBox1}>
            <a href="/">
              <img src="/img/port2.png" className={styles.worksImage} alt="ポートフォリオ" target="_blank"/>
            </a>
            <h3>my port folio </h3>
            <h4>使用技術</h4>
            <p>Next.js module.CSS </p>
            <a href="https://github.com/tokuyama-shouta/myportfolio.git" target="_blank" className={styles.worksBoxA}>GitHub</a>
          </div>
          <div className={styles.worksBox2}>
            <a href="https://gazou-57c46.web.app" target="_blank">
              <img src="/img/pixabay.png" className={styles.worksImage} alt="pixabay"/>
            </a>
            <h3>画像検索サイト</h3>
            <h4>使用技術</h4>
            <p>css semantic-ui JavaScript React</p>
            <p>WebApi pixabay Filebase Hosting</p>
            <a href="https://github.com/tokuyama-shouta/pixabaygazou.git" target="_blank" className={styles.worksBoxA}>GitHub</a>
          </div>
          <div className={styles.worksBox3}>
            <a href="https://tokuyama-shouta.github.io/myportfolio/" target="_blank">
              <img src="/img/port.png" className={styles.worksImage} alt="portfolio"/>
            </a>
            <h3>my port folio</h3>
            <h4>使用技術</h4>
            <p>HTML CSS </p>
            <p>JavaScript jQuery</p>
            <a href="https://github.com/tokuyama-shouta/myportfolio.git" target="_blank" className={styles.worksBoxA}>GitHub </a>
          </div>
        </article>

      <div className={styles.soccerAnimation}>
        <img src="/img/soccer1.jpg" alt="サッカーボール"/>
      </div>
      <div className={styles.btnBox}>
        <Link href="/">
            <button className={styles.btnStyle}>Back to Home</button>
        </Link>
      </div>



    </div>
  )
}