import "./Button.scss";

/** Button. 
 * 
 * Props:
 * - classes: additional classes outside of Bootstrap.
 * - label: text to display on the button.
 * - handleClick: parent function to call when button is clicked.
 * 
 * State:
 * none.
 * 
 * { SearchBar } -> Button
*/
function Button({ classes, label, handleClick }) {
  return (
    <button 
      className={`${classes} btn btn-secondary`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default Button;