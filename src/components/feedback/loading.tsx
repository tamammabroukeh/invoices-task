import Loading from "@/assets/loading-spinner.svg";
const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
      }}
    >
      <img alt="Loading..." src={Loading} />
    </div>
  );
};
export default LoadingSpinner;
