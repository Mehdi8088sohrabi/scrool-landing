import Serchild from './child/Serchild.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase , faTasks ,faChartSimple , faEdit , faSun , faCalendar  } from '@fortawesome/free-solid-svg-icons';
function Servic(){
    return(
        <>
        <div className='servicontent'>
            <h1 className='h1servic' id='scrlo2'>Services</h1>
            <h4 style={{color: 'gray' , margin: '30px 0px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <div className='servicskil'>
                <Serchild icon={faBriefcase} title='WEB DESIGN'/>
                <Serchild icon={faTasks} title='WEB DEVELOPMENT'/>
                <Serchild icon={faChartSimple} title='PHOTOGRAPHY'/>
                <Serchild icon={faEdit} title='RESPONSIVE DESIGN'/>
                <Serchild icon={faSun} title='GRAPHIC DESIGN'/>
                <Serchild icon={faCalendar} title='MARKETING SERVICES'/>
            </div>
        </div>
        </>
    )
}

export default Servic