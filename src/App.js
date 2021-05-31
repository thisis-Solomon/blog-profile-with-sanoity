import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Post from "./components/Post";
import Projects from "./components/Projects";
import SinglePost from "./components/SinglePost";
const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/about' component={About} />
                <Route path='/post/:slug' component={SinglePost} />
                <Route path='/post' component={Post} />
                <Route path='/project' component={Projects} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
