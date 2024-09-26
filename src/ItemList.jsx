// function Item({ name, isPacked = false }) {
//     // if (isPacked) return (<li>{name} ✓ </li>);
//     // return (<li>{name}</li>);
//     // return (
//     //     <li>
//     //         {isPacked ? name + ' ✓' : name}
//     //     </li>
//     // )
//     return (
//         <li>
//             {name} {isPacked && ' ✓'}
//         </li>
//     );
// }
// export default function ItemList() {

//     // const items=["Sunglass","Sunblock","Swimming suit","Tower","Powerbank"];
//     const items = [{ name: "Sunglass", isPacked: false },
//     { name: "Sunblock", isPacked: true },
//     { name: "Swimming suit", isPacked: true },
//     { name: "Towel", isPacked: true },
//     { name: "PowerBank", isPacked: false }
//     ];

//     // const filterList = items.filter(i => i.name.includes('S')) // filter รับฟังก์ชันที่กรองข้อมูล กรองตัวอักษร S
//     // const itemslist = filterList.map(i => <Item key={i.name} name={i.name} isPacked={i.isPacked} />);
//     // const itemslist = items.map(i => <Item key={i.name} name={i.name} isPacked={i.isPacked} />);

//     // const itemslist = filterList.map(i => <Item key={i.name} name={i.name} isPacked={i.isPacked} />);
//     const onTextChange=(event)=>{
//         setSearch(event.target.value);
//     }
//     return (<>
//         <ui>
//             {filterList}
//         </ui>
//     </>)


//     // return (<ui>
//     //     <Item name="Sunglass" isPacked={true} />
//     //     <Item name="Sunblock" isPacked={false} />
//     //     <Item name="Swimming suit" isPacked={true} />
//     //     <Item name="Towel" isPacked={false} />

//     //     {/* <li>Sunglass</li>
//     //     <li>Sunblock</li>
//     //     <li>Swimming</li>
//     //     <li>Towel</li> */}
//     // </ui>)
// }

import { useEffect } from "react";
import { useState } from "react";
function Item({ name, isPacked = false }) {

    return (
        <li>
            {name} {isPacked && ' ✓'}
        </li>
    );
}
export default function ItemList() {
    const [keyword, setKeyword] = useState("");

    //การใช้ usestate 
    useEffect(()=>{
        console.log("this component is loaded!!");

        return ()=>{
            alert("component unloaded");
        }
    },[])

    const items = [{ name: "Sunglass", isPacked: false },
    { name: "Sunblock", isPacked: true },
    { name: "Swimming suit", isPacked: true },
    { name: "Towel", isPacked: true },
    { name: "PowerBank", isPacked: false }
    ];

    // const filterList = items.filter(items => items.name.includes(keyword))
    const filterList = items.filter(i => i.name.toLowerCase().includes(keyword.toLowerCase()))
    const itemslist = filterList.map(i => <Item key={i.name} name={i.name} isPacked={i.isPacked} />);
    return (<>
        <input
            type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
        <ui>
            {itemslist}
        </ui>
    </>)
}