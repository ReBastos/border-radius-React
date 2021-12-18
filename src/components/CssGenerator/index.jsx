import generateBorderRadius from "../utils/generateBorderRadius"

const CssGenerator = ({
    topLeft,
    topRight,
    bottomLeft,
    bottomRight

}) => {


    return(
        <div>
        <p> border-radius: {generateBorderRadius(topLeft, topRight, bottomLeft, bottomRight)}</p>
        </div>
    )


} 

export default CssGenerator;