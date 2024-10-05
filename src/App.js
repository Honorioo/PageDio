import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";

import { Home } from "./pages/Home/index"
import { Login } from "./pages/Login/index"
import { Feed } from "./pages/Feed/index"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
  );
}

export default App;
