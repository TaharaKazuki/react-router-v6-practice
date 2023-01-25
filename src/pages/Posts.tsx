import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Posts = () => {
  const [posts, setPosts] = useState<Array<{ id: string; title: string }>>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <h2>Posts</h2>
      <Outlet />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.id}:{post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Posts
