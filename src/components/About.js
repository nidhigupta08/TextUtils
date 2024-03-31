import React from 'react'

export default function About(props) {

    // const[myStyle,setMyStyle]=useState(
    //     {
    //         color:'black',
    //         backgroundColor:'white'
    //    }
    // )
    // const[btntext,setBtnText]=useState(
    //     "Enable Dark mode"
    // )

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(65 66 68)' : 'white',
    }
    let myStyle1 = {
        backgroundColor: props.mode === 'dark' ? 'rgb(88,88,88)' : 'white'
    }
    //    const toggleStyle=()=>{
    //         if(myStyle.color==='black'){
    //             setMyStyle({
    //                 color:'white',
    //                 backgroundColor:'black',
    //                border:'2px solid #56Bfe4'
    //            })
    //         setBtnText( "Enable Light Mode")  
    //         }
    //         else{
    //             setMyStyle({
    //                 color:'black',
    //                 backgroundColor:'white'

    //            })
    //            setBtnText("Enable Dark Mode")

    //         }
    //     }
    return (

        <div className="container" style={myStyle}>
            <h1 >About Us</h1>


            <div className="accordion my-3" id="accordionExample" >
                <div className="card" style={myStyle1}>
                    <div className="card-header" id="headingOne" >
                        <h2 className="mb-0">
                            <button className="btn btn-link font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                About My TextUtils Project
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" style={myStyle} >
                        <div className="card-body">
                            <div className="welcome-text">
                                <h2>Welcome to TextUtils! 😊</h2>
                                <p>TextUtils is your go-to online utility for manipulating and analyzing text. Whether you need to convert case, remove whitespace, extract links, or perform various other text operations, TextUtils has got you covered. 🚀</p>

                                <p>My mission with TextUtils is to provide a versatile and easy-to-use platform that empowers users to efficiently manage and transform their text data. From students to professionals, writers to developers, TextUtils caters to everyone's text manipulation needs. 📚</p>

                                <p>With TextUtils, you can:</p>
                                <ul>
                                    <li>Analyze your text: Gain insights into your text content and understand its structure. 🔍</li>
                                    <li>Transform text: Convert case, remove extra spaces, reverse text, and much more. 🔄</li>
                                    <li>Enhance productivity: Save time and effort by automating repetitive text tasks. ⏱️</li>
                                    <li>Improve accuracy: Ensure consistency and correctness in your text data. ✅</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle1}>
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link font-weight-bold collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                Personal Introduction
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample" style={myStyle}>
                        <div className="card-body">
                            <div className="about-me">

                                <p>Hi there! I'm Nidhi Gupta, the creator of TextUtils. 👋</p>
                                <p>As a recent graduate with a BCA degree, I am actively seeking opportunities in the field of software development. With a strong passion for technology and I am eager to apply my skills and knowledge to real-world projects. My goal is to contribute positively to innovative teams and continue growing as a software developer.</p>
                                <p>I'm passionate about creating tools and utilities that make everyday tasks easier for people. Text manipulation and software development have always fascinated me, and I love exploring the ways in which technology can enhance productivity and creativity.</p>

                                <p>TextUtils is a project that I developed to provide a simple yet powerful solution for anyone working with text. Whether you're a student, writer, programmer, or professional, TextUtils is designed to streamline your workflow and help you achieve your goals more efficiently.</p>


                                <p>If you'd like to connect with me or learn more about my work, you can find me on:</p>
                                <ul>
                                    <li><a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                    <li><a href="https://github.com/nidhigupta08" target="_blank" rel="noopener noreferrer">GitHub</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle1}>
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-link font-weight-bold collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                TextUtils Functionality Overview
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample" style={myStyle}>
                        <div className="card-body">

                            <h6>In this section, I've outlined the diverse range of features I've incorporated into TextUtils for text manipulation. Each feature is designed to simplify and enhance your text editing experience, offering a variety of tools to suit your needs. Take a closer look to discover how TextUtils can streamline your text-related tasks and empower your creativity.</h6><br>
                            </br>
                            <ul>
                                <li><strong>Convert to Lowercase:</strong> Transform your text to all lowercase letters.</li>
                                <li><strong>Extract Links:</strong> Easily extract URLs from your text content.</li>
                                <li><strong>Remove Whitespace:</strong> Eliminate unnecessary spaces from your text.</li>
                                <li><strong>Reverse Text:</strong> Reverse the order of characters in your text.</li>
                                <li><strong>Convert to Uppercase:</strong> Change your text to all uppercase letters.</li>
                                <li><strong>Convert to Title Case:</strong> Capitalize the first letter of each word in your text.</li>
                                <li><strong>Convert to Sentence Case:</strong> Capitalize the first letter of each sentence in your text.</li>
                                <li><strong>Alternative Case Conversion:</strong> Alternate uppercase and lowercase letters in your text.</li>
                                <li><strong>Encrypt Text:</strong> Encrypt your text using a cryptographic algorithm.</li>
                                <li><strong>Decrypt Text:</strong> Decrypt encrypted text to its original form.</li>
                                <li><strong>Convert to Rs Text:</strong> Convert your text to Indian Rupees format.</li>
                                <li><strong>Remove Special Characters:</strong> Remove special characters from your text.</li>
                                <li><strong>Extract Numbers:</strong> Extract numeric values from your text.</li>
                                <li><strong>Extract All Text:</strong> Extract all text content from your input.</li>
                                <li><strong>Select All:</strong> Select all text in the input area.</li>
                                <li><strong>Clear All:</strong> Clear the input area and reset all transformations.</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="my-3">
            <button type="button" className='btn btn-primary' onClick={toggleStyle}>{btntext}</button>
            </div> */}
        </div>

    )
}
