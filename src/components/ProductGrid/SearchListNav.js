import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from "../component.module.css";

const SearchListNav = ({ searchlist, handleSearch, setItems, docs }) => {
    const displayName = [
        { "Name": "Name", "value": "name" },
        { "Name": "Price", "value": "price" },
    ]
    const { categoryType, itemType } = useParams();
    return (
        <>

            <nav className="navbar bg-warning">
                <div className="container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <span></span>
                        <div className="dropdown">
                            {/* <button className="btn btn-lg btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By
                            </button> */}
                            <ul className="dropdown-menu fs-5" aria-labelledby="dropdownMenuButton1">
                                {displayName.map((category) => {
                                    return (<li><a className="dropdown-item" onClick={() => { setItems(docs, category["value"]) }} >{category["Name"]}</a></li>)
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <span className="fs-5 fw-bold ">
                                Search For Your Product
                            </span>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleSearch}
                            />
                            <motion.ul
                                initial={{ x: 400 }}
                                animate={{ x: 0 }}
                                className={`list-group ${styles.overlay} `}
                            >
                                {searchlist &&
                                    searchlist.map((listItem) => {
                                        return (
                                            <motion.li
                                                initial={{ y: "100vw" }}
                                                animate={{ y: 0 }}
                                                transition={{}}
                                                whileHover={{ scale: 1.1 }}
                                                className={`list-group-item list-group-item-action bg-primary border border-2 border-dark`}
                                            >
                                                <Link className={`text-white fw-bold`} style={{ textDecoration: "none" }}
                                                    to={`/product/${categoryType}/${itemType}/${listItem["id"]}`}
                                                >
                                                    <div>
                                                        {listItem["file"]["prodName"]}

                                                    </div>
                                                </Link>
                                            </motion.li>
                                        );
                                    })}
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SearchListNav
