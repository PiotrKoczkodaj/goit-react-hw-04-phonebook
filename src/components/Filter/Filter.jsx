import PropTypes from 'prop-types';

export const Filter = ({ filterUsers }) => {
  return (
    <form>
      <label>Find contact</label>
      <input onChange={filterUsers}></input>
    </form>
  );
};
Filter.propTypes = {
  filterUsers: PropTypes.func.isRequired,
};
