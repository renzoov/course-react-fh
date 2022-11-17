import PropTypes from "prop-types";


export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      {/* <h1>{getResult(1, 2)}</h1> */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: "Hola Mundo",
  subTitle: "Soy Renzo",
};
