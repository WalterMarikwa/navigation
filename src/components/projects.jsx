import React from "react";
import Data from "../components/data/lists.json";
import { useState } from "react";
import "./styles/projectStyles.css";

// const myComponentStyle = {
//     color: 'white',
//     background: '#9933ff'
//  }

function Cards() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <div className="contact-me">
                <p>A List Of My Projects.</p>
                <form>
                    <input
                        type="text"
                        placeholder="Search.."
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                    {/* <input type="submit" name="submit" defaultValue="Lets Start" /> */}
                </form>
            </div>
            <div className="prodContainer">
                <main className="prodGrid">
                    {Data.filter((postData) => {
                        if (searchTerm === "") {
                            return postData;
                        } else if (
                            postData.name
                                .toLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())
                        ) {
                            return postData;
                        }
                    }).map((postData, index) => {
                        return (
                            <article>
                                <img src={postData.img} alt="project thumbnail" />
                                <div classname="prodText" key={index}>
                                    <div className="proHeader">
                                        <h2>{postData.name}</h2>
                                        <p className="proMsg">{postData.skill}</p>
                                    </div>
                                    <a
                                        href={postData.btn}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="ProdBtn">View</button>
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </main>
            </div>
            {/* Back button */}
            <div className="backBtn"> 
                <a href="/">
                    <button className="ProdBtn" id="fixedbutton">
                        Back
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Cards;
