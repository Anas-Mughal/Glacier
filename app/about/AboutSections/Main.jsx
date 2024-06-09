import PropTypes from "prop-types";
function Main(props) {
  return (
    <main className="relative z-40 flex items-center justify-center w-full">
      <main className="w-[75vw] flex flex-col justify-center  gap-[20vw] my-[12.5vw]">
        {props.children}
      </main>
    </main>
  );
}
Main.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Main;
