import Head from 'next/head'
import Layout from '../../components/Layout'
import Link from 'next/link'
import styles from '../../components/styles/Profile.module.css'




export default function Profile() {
  return (
    <Layout>
      <Head>
        <title>TokyamaShouta|Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.myProfile}>profile</h1>

      <div className={styles.myProfileBox}>
        <img src="/img/prf.jpg" alt="プロフィール画像"/>
        <p>はじめまして。 徳山翔太（とくやましょうた）と申します。<br/>
            趣味はサッカー、カラオケ、ライブ＆フェス参戦、音楽観賞、<br/>
            古着屋さん巡り、カフェ巡り、ゲーム、アニメ観賞です。<br/>
            前職は大阪の企業にて６年ほど務めておりました。<br/>
            現在は独学でプログラミングを学習しています！<br/>
            プログラミングをはじめたのは、自分が携わったサービスで<br/>
            世の中の人々に貢献したいと思ったからです！<br/>
            その中でも、フロントエンドエンジニアを選択したのは、<br/>
            私の書いたコードが目に見えて動作した時に衝撃を受け、<br/>
            プログラミングが楽しくなり、仕事にしたいと思いました！<br/>
        </p>
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