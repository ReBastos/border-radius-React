import './style.css'
import generateBorderRadius from '../utils/generateBorderRadius';

const BoxRadius = ({topLeft, topRight, bottomLeft, bottomRight}) => {

    return(
        <>
        <div id="box"
        style={{borderRadius:  generateBorderRadius(topLeft, topRight, bottomLeft, bottomRight)}}
        ></div>
        </>
    )

}

export default BoxRadius;