import BlogListCard from "./BlogListCard";
import Avatar from "./Avatar";


const BlogList = (props) => {
    const { blogs } = props; //destructured props
    console.log("BlogList:")
    console.log(props)
    return (
        <div>
            {/* <div className="pic-list">
      {props.pics.map((pic, index)=>{
        return 
      })}

      </div> */}
            <div className="blog-list">
                {props.blogs.map((blog, index) => {
                    return (

                        <div>
                            <Avatar blog={blog} />
                            {/* <h3>{blog.author}</h3> */}
                            <BlogListCard key={index} blog={blog} />
                        </div>

                    )
                })}

            </div>
        </div>

    )
}

export default BlogList