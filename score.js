let score = 0;
let wicket = 0;
let ballWiseRes = [];
let hit = 0;
let inputRef = React.createRef();

function addScore(num){
    hit = num;
    rootElement.render(<App/>);
}

function addWicket(){
    hit = "W";
    rootElement.render(<App/>);
}

const Result = () => (
    <div>
        {ballWiseRes.map((res, index) => (
        <>
        {index%6 == 0 ? <br/> : null}
        <span key = {index}> {res == 0 ? <strong>.</strong> : res} </span>&nbsp;&nbsp;</>))}
    </div>
)

function handleSubmit(event){
   event.preventDefault(); 

   if(hit == "W"){
    wicket += 1;
   }
   else{
    score += hit;
   }

   ballWiseRes.unshift(
   //<span>{hit}{","}{inputRef.current.value}</span>
   <span className="comment">{`${hit},${inputRef.current.value}`}</span>
   );

// update the values after submit
   hit = 0;
   inputRef.current.value = "";

   rootElement.render(<App/>);
}

const Form = () =>(
    <form onSubmit = {handleSubmit} className="form">
        <input  value = {hit}/>
        <input ref = {inputRef} placeholder = "Example : What a six !" />
        <button>Submit</button>
    </form>
)

const ScoreButtons = () => (
    <div className="btn">
        <button onClick = {()=> addScore(0)}>0</button>
        <button onClick = {()=> addScore(1)}>1</button>
        <button onClick = {()=> addScore(2)}>2</button>
        <button onClick = {()=> addScore(3)}>3</button>
        <button onClick = {()=> addScore(4)}>4</button>
        <button onClick = {()=> addScore(5)}>5</button>
        <button onClick = {()=> addScore(6)}>6</button>
        <button onClick = {addWicket}>wicket</button>
    </div>
)


const App = () => (
    <>
    <h1> CRICKET SCORE KEEPER</h1>
    <h2>SCORE : {score}/{wicket}</h2>
    <ScoreButtons/>
    <br/>
    <Form/>
    
   
    <div>
    {ballWiseRes.map( (res, index) => (
        <p key = {index}>{res}</p>
    ))}
    </div>
    </>
)

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<><App/></>);