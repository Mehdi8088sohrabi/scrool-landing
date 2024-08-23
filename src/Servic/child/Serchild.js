import './Servic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase , faTasks ,faChartSimple , faEdit , faSun , faCalendar , } from '@fortawesome/free-solid-svg-icons';
function Serchild(props){
    let {icon , title} = props
    return(
        <>
        <div class="div6">
            <FontAwesomeIcon icon={icon} style={{color: "#000000", fontSize : '25px' , border: '10px solid rgb(1, 41, 100)',borderRadius: '50%',padding: '20px'}} className='fonta' />
            <h4>{title}</h4>
            <p className='pser'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
        </>
    )
}

export default Serchild