import { useEffect, useState } from "react";
import Logo from "./Logo";

const OptionBar = (props) => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState("");
    const [order, setOrder] = useState("");


    useEffect(() => {
        props.generateUrlParams(limit, page, sortBy, order);
    }, [limit, page, sortBy, order]);

    return (
        <div className="option-bar">
           
            <br />
            <label>Limit</label>
            <input
                type="number"
                value={limit}
                onChange={(e) => {
                    setLimit(e.target.value);
                }}
            />
            <br />
            <label>Page </label>
            <input
                type="number"
                value={page}
                onChange={(e) => {
                    setPage(e.target.value);
                }}
            />
            <br />
            <label>Sort By </label>
            <select
                value={sortBy}
                onChange={(e) => {
                    setSortBy(e.target.value);
                }}
            >
                <option></option>
                <option value="id">id</option>
                <option value="title">title</option>
                <option value="createdAt">createdAt</option>
            </select>
            <br />
            <label>Order </label>
            <select
                value={order}
                onChange={(e) => {
                    setOrder(e.target.value);
                    console.log("setOrder complete")
                }}
            >
                <option></option>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </select>
            <br />
        </div>
    );
};

export default OptionBar;
