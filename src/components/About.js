import React, { useState } from 'react' 

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

    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'rgb(65 66 68)':'white',
    }
    let myStyle1={
        backgroundColor:props.mode==='dark'?'rgb(88,88,88)':'white'
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
            <div className="accordion my-3"  id="accordionExample" >
                <div className="card" style={myStyle1}>
                    <div className="card-header" id="headingOne" >
                        <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                              Analyze your text 
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample"style={myStyle} >
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle1}>
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                Collapsible Group Item #2
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample" style={myStyle}>
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle1}>
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                Collapsible Group Item #3
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample" style={myStyle}>
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
