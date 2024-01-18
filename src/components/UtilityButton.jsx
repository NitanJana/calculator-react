import PropTypes from 'prop-types';

const UtilityButton = ({ utility }) => {
  return (
    <button className="col-span-2 text-xl font-medium uppercase bg-teal-500 rounded-full font- text-cyan-100">{utility}</button>
  );
};

UtilityButton.propTypes = {
  utility: PropTypes.string.isRequired,
};

export default UtilityButton;
