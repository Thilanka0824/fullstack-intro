
const BlogListCard = (props) => {
    const { blog } = props; //destructured props
    //console.log("BlogList:")
    //console.log(props)

    return (
        <div className="blog-list-card">
            <h2>{props.blog.title}</h2>
            {/* <p>{props.blog.author}</p> */}
            <p>{props.blog.text}</p>
        </div>
    )
};

const PicListCard = (props) => {
    return (
        <div className="pic-list-card">{props.pic}</div>
    )
}

export default BlogListCard