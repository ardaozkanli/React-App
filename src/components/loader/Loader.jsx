import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div className="my-spinner">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
