import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <h1>MY TODOS</h1>
      <Todo text="react1" />
      <Todo text="react2" />
      <Todo text=" react3" />
    </div>
  );
}

export default App;

{
  /* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>welcome to my website</p>
  <a
    className="insta-link"
    href="https://www.instagram.com/i_sunil_reddy/"
    target="_blank"
    rel="noopener noreferrer"
  >
    instagram
  </a>
  <a
    className="linkedin"
    href="https://www.linkedin.com/in/sunilreddy-chinthaparthi/"
    target="blank"
  >
    linkedin
  </a>
</header>
</div> */
}
