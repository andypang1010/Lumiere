import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lumiere</title>
        <meta name="description" content="Created by Andy Pang & Porridge Zou" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lumiere
        </h1>

        <p className={styles.description}>
          Welcome, kingbob001
        </p>

        <div className={styles.grid}></div>
        <div className='row'>
          <div className='col-lg-6 gx-7'>
             <div className={styles.watchedCard}>
               <h2>La La Land &rarr;</h2>
             </div>
      
             <div className={styles.watchedCard}>
               <h2>Whiplash &rarr;</h2>
             </div>
          </div>

          <div className='col-lg-6 gx-7'>
             <div className={styles.card}>
               <h2>A Dog&#39;s Purpose</h2>
             </div>
             
          <div className={styles.card}>
            <h2>A Quiet Place</h2>
          </div>

          <div className={styles.card}>
            <h2>Baby Driver</h2>
          </div>

          <div className={styles.card}>
            <h2>Jurassic Park</h2>
          </div>
          </div></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/andypang1010/INFO_1998_Final_Project"
          target="_blank"
          rel="noreferrer"
        >
          Created by Andy Pang & Porridge Zou
        </a>
      </footer>
    </div>
  )
}

export default Home