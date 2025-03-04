/* eslint-disable react/prop-types */
const ResetButton = ({ resetBoard }) => {
  return (
    <div className="reset-btn" onClick={resetBoard}>
      Reset
    </div>
  );
};

export default ResetButton;
