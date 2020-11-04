import Head from 'next/head'
import Layout from '../../components/Layout'
import Link from 'next/link'
import styles from '../../components/styles/Skill.module.css'




export default function Skill() {
  return (
    <Layout>
      <Head>
        <title>TokyamaShouta|Skill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.myProfile}>Skill</h1>
      <div className={styles.skillBox}>
        <table className={styles.skillBox1}>
          <tbody>
            <tr className={styles.skillBox2}>
              <th>学習技術</th>
              <td>HTML5  CSS3  JavaScript  TypeScript</td>
            </tr>
            <tr>
              <th></th>
              <td>jQuery  React  Redux Next.js</td>
            </tr>
            <tr>
              <th>ツール</th>
              <td>Git  GitHub  Firebase  slack</td>
            </tr>
          </tbody>
        </table>
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