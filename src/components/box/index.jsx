import './style.css'

const BoxRadius = ({topLeft, topRight, bottomLeft, bottomRight}) => {

    let valorBorderRadius = ` ${topLeft}% ${topRight}% ${bottomLeft}% ${bottomRight}%`;

    return(
        <>
        <div id="box"
        style={{borderRadius:  valorBorderRadius}}
        ></div>
        </>
    )

}

export default BoxRadius;