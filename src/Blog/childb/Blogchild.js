import './Blog.css'
function Blogchild(props){
    let{imge , titleblog} = props
    return(
        <>
            <div className='contentblo'>
                <div className='imgblo'>
                    <img src={imge} className='imgblo' />
                </div>
                <div className='titlrblo'>
                    <h1 style={{fontSize:'25px' , marginTop:'30px'}}>{titleblog}</h1>
                    <p style={{color : 'gray' , fontSize : '19px' , textAlign:'justify'}}>Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.
                    Praesent sapien massa, convallis a Praesent sapien massa, convallis a  </p>
                </div>
                <div className='timeblo'>
                    <p className='childtimrblo'>Mehdi Sohrabi</p>
                </div>
            </div>
        </>
    )
}

export default Blogchild