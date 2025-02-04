import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
    {
        title: 'Driving financial inclusion',
        content: 'Tanova Financial Group aims to improve economic mobility in Southeast Asia and America for individuals through financial inclusion.',
        link: '/https://example.com/financial-inclusion',
        image: '/coleen-rivas-OZ2rS2zCjNo-unsplash.jpg'
    },
    {
        title: 'Empowering remote work',
        content: 'Discover how Tanova supports flexibility and productivity in a post-COVID world.',
        link: '/https://example.com/remote-work',
        image: '/peter-nguyen-CQhgno3yhv8-unsplash.jpg'
    },
    // Add more blog posts here
];

const Blog = () => {
    return (
        <div className="grid grid-cols-3 gap-4 h-[100%] py-20 w-[95%] mx-auto">
            {blogPosts.map((post, index) => (
                <div key={index} className="p-4 border-b gap-4 justify-center mx-auto w-[100%] h-[100%]">
                    <Link href={post.link} target="_blank" rel="noopener noreferrer">
                    <div className='justify-self-end rounded-2xl items-end align-middle w-[100%]'>
                            <Image src={post.image} alt={post.title} className="w-[100%] h-[15em] rounded-xl object-cover" height={100} width={100} sizes="(max-width: 768px) 100vw, 33vw" />
                        </div>
                        <div className='w-[100%] justify-self-start'>
                            <h3 className="font-semibold">
                                <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-3xl">
                                    {post.title}
                                </a>
                            </h3>
                          <div className='h-[5em]'>
                          <p className="text-md line-clamp-3 overflow-hidden text-ellipsis">
                                {post.content}
                            </p>
                          </div>
                        </div>
                        
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Blog;