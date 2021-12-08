
function Name (props){
    return<li>
        {props.brand}
    </li>;
}
function brand(){
    const brandNames = [
        {id : 1, brand: "F16"},
        {id : 2, brand: "F32"},
        {id : 3, brand: "F22"},
    ];
    return(
        <>
        <ul>
            {brandNames.map((brandName) => (<Name data = {brandName.brand}/>))}
        </ul>
        </>
    );
}
export default brand;