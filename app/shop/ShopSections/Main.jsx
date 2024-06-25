import PropTypes from "prop-types";
function Main(props) {
  return (
    <main className="relative z-40 flex items-center justify-center w-full">
      <main className="w-[75vw] max-[950px]:w-[90vw] flex flex-col gap-[5vw] min-h-dvh my-[10vw] max-[950px]:my-[20vw]">{props.children}</main>
    </main>
  );
}
Main.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Main;
