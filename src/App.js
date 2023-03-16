import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [paras, setParas] = useState(4);
	const [format, setFormat] = useState("text");
	const [text, setText] = useState("");

	useEffect(() => {
		axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${format}`).then(response => {
			setText(response.data);
		});
	}, [paras, format]);

	return (
		<div className='App'>
			<h1 style={{textAlign: 'center'}}>React sample text generator app</h1>
      <hr/>

			<div style={{ margin: "50px 50px" }}>
				<input type={"number"} value={paras} onChange={e => setParas(e.target.value)} />

				<select style={{ marginLeft: "50px" }} value={format} onChange={e => setFormat(e.target.value)}>
					<option value={"html"}>HTML</option>
					<option value={"text"}>Text</option>
				</select>

				<div style={{ backgroundColor: "whitesmoke", padding: "30px 30px", margin: "10px 0", width: "70%" }}>{text}</div>
			</div>
		</div>
	);
}

export default App;
