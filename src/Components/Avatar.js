import BlogList from "./BlogList"

const Avatar = (props) => {


    return (
        <div className="avatar-div">
            <img className="circle-img" alt="avatar-img" src="https://a.espncdn.com/combiner/i?img=/i/columnists/full/wojnarowski_adrian.png&h=80&w=80&scale=crop" />
            <h3 className="">{props.blog.author}</h3>
        </div>

    )
}

export default Avatar