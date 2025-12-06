import { ErrorBox } from "../styles/components/Error.styles";

const Error = ({ error, darkMode }) => {
  return (
    <>
      <ErrorBox $darkMode={darkMode}>{error}</ErrorBox>
    </>
  );
};

export default Error;
