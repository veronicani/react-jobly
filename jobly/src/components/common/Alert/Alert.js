

/** Shows a message for the user on form submit success / failure. */
function Alert({ message }) {
  return (
    <div className="alert alert-danger p-2" role="alert">
      {message}
    </div>
  )
}

export default Alert;