import NavBar from "./components/NavBar";
import TextBox from "./components/TextBox";
function App() {
  return (
    <>
    <NavBar title="TextUtils"/>
    <div className="container my-3">
      <TextBox heading="Enter the Text to Auto Capitalize below"/>
    </div>
    </>
  );
}

export default App;