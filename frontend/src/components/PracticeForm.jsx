import { useState } from "react"; 
import axios from "axios"; 
function PracticeForm() { 
const [title, setTitle] = useState(""); 
const [category, setCategory] = useState(""); 
const [ description, setDescription ] = useState(""); 
const submitHandler = async (e) => { 
e.preventDefault(); 
if ( !title || !category || !description ) { 
alert( "Fill all fields" ); 
return;
} 
await axios.post( "http://localhost:3100/api/simulations", { title, category, description } ); 
alert( "Simulation Added" ); 
setTitle(""); 
setCategory(""); 
setDescription(""); 
}; 
return ( 
<section className="practice-form" id="practice" > 
<h2> Create Simulation </h2> 
<form onSubmit={submitHandler} > 
<input type="text" placeholder="Simulation Title" value={title} onChange={(e)=> setTitle(e.target.value)} /> 
<input type="text" placeholder="Category" value={category} onChange={(e)=> setCategory(e.target.value)} /> 
<textarea placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)} /> 
<button type="submit"> Add Simulation </button> 
</form> 
</section> 
); 
} 
export default PracticeForm;