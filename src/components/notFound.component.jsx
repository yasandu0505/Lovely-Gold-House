import { Link } from 'react-router-dom';
import "./style.css";


const NotFound = () => {
  return (
    <div className="container">
      <div className="not-found-section ">
        <h1 className="not-found">
          Oops! Nothing here. Head back to our <Link to='/' className="link-to-home">homepage</Link> and explore the magic!
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
