import BlogListCard from "./BlogListCard";
import Avatar from "./Avatar";


const BlogList = (props) => {
    const { blogs } = props; //destructured props
    console.log("BlogList:")
    console.log(props)
    return (
        
         
            <div className="blog-list">
                {props.blogs.map((blog, index) => {
                    return (

                        <div key={index}>
                            <Avatar  blog={blog} />
                            {/* <h3>{blog.author}</h3> */}
                            <BlogListCard blog={blog} />
                        </div>

                    )
                })}

            </div>
      

    )
}

export default BlogList