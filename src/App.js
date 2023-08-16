import logo from './logo.svg';
import './App.css';
import routeData from "./data/routeData.json"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import RoutePage from './components/RoutePage';

function App() {

  const router = createBrowserRouter(
    [...routeData.routes.map(route => {
      return {path:route.path,element:<RoutePage data={route}/>}
    }),{path:"/",element:<RoutePage/>}]
  );  

  return (
    <div className='main'>
      <div className="list">
        <ul>
        {routeData.routes.map(route => (
          <li><a href={route.path}>{route.title}</a></li>
        ))}
        </ul>
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
