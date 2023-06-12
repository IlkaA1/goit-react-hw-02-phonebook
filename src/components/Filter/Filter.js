import css from './filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={css.input}
        ></input>
      </label>
    </>
  );
};
export default Filter;
