const AlertDanger = () => {
  return (
    <div className="alert alert-danger alert-dismissible text-white" role="alert">
      <span className="text-sm">
        A simple danger alert with{" "}
        <a href="javascript:;" className="alert-link text-white">
          an example link
        </a>
        . Give it a click if you like.
      </span>
      <button
        type="button"
        className="btn-close text-lg py-3 opacity-10"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
export default AlertDanger;
