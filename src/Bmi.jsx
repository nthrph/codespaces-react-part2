import { useRef, useState } from "react"
const BmiText = ({ bmi })=> {
    if (bmi < 18.5)
        return (<h1>UnderWeight</h1>)
    if (bmi > 30)
        return (<h1>OverWeight</h1>)
    return (<h1>Normal</h1>)
}
export default function Bmi() {
    const w_input = useRef(null)
    const h_input = useRef(null)
    function handleClick() {
        alert("you type " + w_input.current.value + h_input.current.value);

    }
    const [bmi, setBmi] = useState(0.00);
    const calBmi = () => {
        let w = w_input.current.value;
        let h = h_input.current.value / 100;
        setBmi(w / Math.pow(h, 2));
    }

    return (<>
        Weight :
        <input ref={w_input} /> kg. <br />
        Height :
        <input ref={h_input} /> cm. <br />
        <button onClick={() => calBmi()}>calculate</button><br />
        Bmi value: {bmi.toFixed(2)}
        <BmiText bmi={bmi} />
    </>)
}