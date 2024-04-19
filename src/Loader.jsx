import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <BallTriangle
        visible={true}
        height="480"
        width="480"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
