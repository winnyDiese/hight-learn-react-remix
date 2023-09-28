import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home({posts}) {
  // const [posts, setPosts] = useState([])

  // useEffect(()=>{
  //   const data = fetch(`http://jsonplaceholder.typicode.com/posts?_limit=4`)
  //     .then(r => r.json())
  //     .then(setPosts)
  // },[])


  return <>
    <h1>Articles</h1>
    <ul>

      {posts.map(post => <li key={post.id}>
          <Link href={`/blog/${post.id}`}> {post.id} - {post.title} </Link>
        </li>)}
    </ul>
  </>
   
}



export async function getStaticProps(){

  const posts = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=4`)
  .then(r => r.json())

  return {
    props : {
      posts
    }
  }
}

