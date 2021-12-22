
const RangeInput = ({value, setValue}) => {

    const handleOnChange = (evt) => {
        setValue(evt.target.value);

    }

    return (
        <input type='range' value={value} onChange={handleOnChange}></input>
    )

}

export default RangeInput;