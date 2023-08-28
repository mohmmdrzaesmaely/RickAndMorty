import { RouterDOM } from "../commons";
import { Home } from "../components";
const router = RouterDOM.createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    }
]);

export { router };