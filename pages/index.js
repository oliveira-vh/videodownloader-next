import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [form, setForm] = React.useState('');

  const handleChange = (event) => setForm(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    download();
  }

  const download = async () => {
    try{
      const response = await fetch('/api/video',{
        method: 'POST',
        body: form
      });
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>YT Downloader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Download your video below...
        </h1>

        <form className={styles.form}>
        <input type="text" className={styles.input}  value={form} onChange={handleChange} />
        <button className={styles.button} type="submit" onClick={handleSubmit}>Download</button>
        </form>

      </main>

      <footer className={styles.footer}>
        <p>
          Please, download only videos that you've uploaded!
        </p><br/>
        <p>Made with Next.JS</p>
      </footer>
    </div>
  )
}
