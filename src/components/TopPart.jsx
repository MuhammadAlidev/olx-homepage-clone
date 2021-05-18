import React from 'react'
import '../App.css'

const TopPart = () => {
    return (
        <div className="belowNavbar">
            <ul>
                <li className="mainLi">ALL CATEGORIES</li>
                <li><a href="./" className="anchorTag">Mobile Phones</a></li>
                <li><a href="./" className="anchorTag">Cars</a></li>
                <li><a href="./" className="anchorTag">Motorcycles</a></li>
                <li><a href="./" className="anchorTag">Houses</a></li>
                <li><a href="./" className="anchorTag">TV-Audio-Video</a></li>
                <li><a href="./" className="anchorTag">Tables</a></li>
                <li><a href="./" className="anchorTag">Lands & Plots</a></li>
            </ul>
        </div>
    )
}

export default TopPart
