import axios from 'axios';
import { useEffect, useState } from 'react';
import { BlogCard } from '../components/BlogCard';

export const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3001/api/posts'
        
        axios.get(url)
        .then(response => {
            console.log(response.data.data);
            setPosts(response.data.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    
    return (
      <main className="container mx-auto px-2 w-full mt-5 mb-5"> 
        <div className="grid space-x-1 md:grid-cols-2">

            {posts.map( post => (
                <BlogCard 
                    key={post._id}
                    post={post}
                />
            ))}

        </div> 
      </main>
    );
};
