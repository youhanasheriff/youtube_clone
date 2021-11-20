import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Body from "./components/Body";

function App() {
	return (
		<>
			<Header />
			<div style={{ display: "flex" }}>
				<SideBar />
				<Body />
			</div>
		</>
	);
}

export default App;
