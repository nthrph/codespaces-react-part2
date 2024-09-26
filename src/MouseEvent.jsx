export default function MouseEvent(){
    return (<h1 
        // onClick={(e=>alert("onclick"))}
        // onMouseEnter={(e=>alert("onMouseEnter"))}
        // onMouseOver={(e=>alert("onMouseOver"))}
        // onMouseDown={(e=>alert("onMouseDown"))}
        // onMouseUp={(e=>alert("onMouseUp"))}
        // onMouseLeave={(e=>alert("onMouseLeave"))}
        onClick={(e=>console.log("onclick"))}
        onMouseEnter={(e=>console.log("onMouseEnter"))}
        onMouseOver={(e=>console.log("onMouseOver"))}
        onMouseDown={(e=>console.log("onMouseDown"))}
        onMouseUp={(e=>console.log("onMouseUp"))}
        onMouseLeave={(e=>console.log("onMouseLeave"))}
        > Click Me </h1>);
}