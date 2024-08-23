import Blogchild from "./childb/Blogchild.js"
function Blog(){
    return(
        <>
        <h1 className='h1blo' id='scrlo3'>BLOG</h1>
        <p className='pblo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className='parent'>

            <Blogchild imge='/img/post-1.jpg' titleblog='post title 1' />
            <Blogchild imge='/img/post-2.jpg' titleblog='post title 2' />
            <Blogchild imge='/img/post-3.jpg' titleblog='post title 3' />
        </div>

        </>
    )
}

export default Blog