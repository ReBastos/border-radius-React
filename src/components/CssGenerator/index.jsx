import generateBorderRadius from "../utils/generateBorderRadius"
import './style.css'

const CssGenerator = ({
    topLeft,
    topRight,
    bottomLeft,
    bottomRight

}) => {

    function copyCSS() {
        navigator.clipboard.writeText(`border-radius: ${generateBorderRadius(topLeft, topRight, bottomLeft, bottomRight)};`);
        alert('Copiado com Sucesso');
    
    }

    return(
        <div className="cssGenerator">
        <button id="copyCSS" onClick={copyCSS}>Copy</button>
        <p id="cssText"> border-radius: {generateBorderRadius(topLeft, topRight, bottomLeft, bottomRight)}</p>
        </div>
    )


} 

export default CssGenerator;