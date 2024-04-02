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
                            <li><strong><i class="fas fa-random"></i> Generate Random Text:</strong> This button generates random text or Lorem Ipsum placeholder text, which is useful for testing or filling content placeholders.</li>
                                <li><strong><i class="fas fa-arrow-up"></i> Convert to Upper Case:</strong> Converts the input text to uppercase, making it easier to emphasize or highlight certain words or phrases.</li>
                                <li><strong><i class="fas fa-arrow-down"></i> Convert to Lower Case:</strong> Converts the input text to lowercase, useful for standardizing text or making it easier to read.</li>
                                <li><strong><i class="fas fa-heading"></i> Convert to Title Case:</strong> Capitalizes the first letter of each word in the text, commonly used for titles or headlines.</li>
                                <li><strong><i class="fas fa-quote-right"></i> Convert to Sentence Case:</strong> Capitalizes the first letter of each sentence in the text, improving readability and formatting.</li>
                                <li><strong><i class="fas fa-minus"></i> Remove Extra Spaces:</strong> Removes excess whitespace from the input text, ensuring clean and uniform formatting.</li>
                                <li><strong><i class="fas fa-lock"></i> Encrypt Text:</strong> Encrypts the input text using a cryptographic algorithm, enhancing security and privacy for sensitive information.</li>
                                <li><strong><i class="fas fa-unlock"></i> Decrypt Text:</strong> Decrypts encrypted text back to its original form, allowing access to protected content.</li>
                                <li><strong><i class="fas fa-exchange-alt"></i> Reverse Text:</strong> Reverses the order of characters in the input text, offering a fun and creative way to transform text.</li>
                                <li><strong><i class="fas fa-rupee-sign"></i> Convert to Rs Text:</strong> Converts numerical values in the text to Indian Rupees format, ideal for financial or currency-related content.</li>
                                <li><strong><i class="fas fa-times"></i> Remove Special Characters:</strong> Removes special characters from the input text, ensuring clean and sanitized content.</li>
                                <li><strong><i class="fas fa-file-alt"></i> Extract All Text:</strong> Extracts all text content from the input, excluding numbers and special characters, for further analysis or processing.</li>
                                <li><strong><i class="fas fa-font"></i> Convert to Alternative Case:</strong> Alternates uppercase and lowercase letters in the text, creating a visually distinct and playful appearance.</li>
                                <li><strong><i class="fas fa-file-word"></i> Count Words:</strong> Counts the total number of words in the input text, providing insights into its length and complexity.</li>
                                <li><strong><i class="fas fa-link"></i> Extract Links:</strong> Extracts URLs from the text content, facilitating quick access to embedded links or references.</li>
                                <li><strong><i class="fas fa-sort-numeric-up"></i> Extract Numbers:</strong> Extracts numeric values from the text, useful for data analysis or manipulation.</li>
                                <li><strong><i class="fas fa-check-square"></i> Select All:</strong> Selects all text in the input area, simplifying text manipulation tasks or copying content for further use.</li>
                                <li><strong><i class="fas fa-eraser"></i> Clear All:</strong> Clears the input area and resets all transformations, allowing for a fresh start or undoing previous changes.</li>
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
