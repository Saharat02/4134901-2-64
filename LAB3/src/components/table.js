import { render } from "react-dom";

function renderTable(){
    return brandNames.map((brandName)=>{
        const { id,brand } = brandName;
        return(
            <tr>
                <td>{id}</td>
                <td>{brand}</td>
                <td><button onClick={()=>onClick()}></button>OK</td>
            </tr>
        )
    })
}

function Datatable(){
    const brandNames = [
        {id : 1, brand: "F16"},
        {id : 2, brand: "F32"},
        {id : 3, brand: "F22"},
    ];
return 
<table>
    <tbody>{renderTable(brandNames)}</tbody>
</table>;
}
export default Datatable;