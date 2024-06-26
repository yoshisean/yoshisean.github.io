import React, {useState} from 'react';

function Footer({lightMode}) {
    let textcolor = lightMode? "black":"white"

    return (
        <footer style={{
            position: "sticky",
            top: "100%",
            paddingTop: "5px",
            color:textcolor,
            width:"100vw",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            verticalAlign: "middle",
            alignItems: "center"
        }}>
            <div style={{
                display: "flex",
                paddingLeft: "2%",
                maxWidth:"40vw",
                position:"relative",
            }}>
                <a href={"https://github.com/yoshisean"} target="_blank" rel="noopener noreferrer" className={"social"}>
                    <img src={lightMode ? "./socials/GitHub/github-mark.png" :
                        "./socials/GitHub/github-mark-white.png"} alt={"GH"} style={{
                        height: "auto", width: "50px", maxWidth:"100%", padding:"2px"
                    }}/>
                </a>
                <a href={"https://www.instagram.com/yoshi.sean/"} target="_blank" rel="noopener noreferrer" className={"social"}>
                    <img src={"./socials/Instagram/instagramLogo.png"} alt={"Insta"} style={{
                        height: "auto", width: "50px", maxWidth:"100%", padding:"2px"
                    }}/>
                </a>
                <a href={"https://www.linkedin.com/in/sean-yoshihara-45b937245/"} target="_blank" rel="noopener noreferrer" className={"social"}>
                    <img src={"./socials/LinkedIn/LI-In-Bug.png"} alt={"LI"} style={{
                        height: "auto", width: "60px", maxWidth:"100%", padding:"2px"
                    }}/>
                </a>
            </div>
            <div style={{
                paddingRight: "2%"
            }}>
                <h2 style={{lineHeight:"1.65"}}>&copy; Sean Yoshihara 2024<br/>Creative Developer</h2>
            </div>
        </footer>
    );
}

export default Footer;