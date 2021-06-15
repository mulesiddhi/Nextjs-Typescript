import Header,{ AppHeaderProps } from '../components/Header'
import React,{FC, useEffect, useState} from 'react'

import Head from 'next/head'
import {IPost} from '../types/IPost';
import styles from '../styles/Home.module.css'

const  Home:FC=()=> {

  // const defaultPosts:IPost[] = [];
  const [posts, setPosts] = useState<IPost[]>([]);

  

  useEffect(() => {
    // get posts
    
    fetchPost();
  }, []);

  const fetchPost=async()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then((data:IPost[])=>setPosts(data));
    
  }
  const headerProps: AppHeaderProps = {
    title: " WorldInfo",
    
    
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Info</title>
        
      </Head>

      <main className={styles.main}>
        <Header
        title={headerProps.title}
        description={headerProps.description}
        />

        
        <ul className={styles.post}>
    {posts.map((post) => (
     <li key={post.numericCode}>
      <h3>COUNTRY: {post.name}</h3>
      <p>CAPITAL: {post.capital}</p>
      <p>POPULATION: {post.population}</p>
      <p>NATIVE NAME: {post.nativeName}</p>
      <img className={styles.img} src={post.flag} alt='flagimg'/>
     </li>
   ))}
  </ul>

        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
export default Home;