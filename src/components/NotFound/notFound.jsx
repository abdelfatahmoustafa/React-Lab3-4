const NotFound = () => {
  return (
    <div className="container text-center position-absolute top-50 start-50 translate-middle">
      <div className="error-404"></div>

      <h1>
        {" "}
        <img
          src="https://cdn.dribbble.com/users/116207/screenshots/3848914/media/0f1a2b8c3d5e6f7e8a9b0c1d2e3f4g5h.png"
          alt="404"
          className="img-fluid"
        />
      </h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>
        Return to the <a href="/">home page</a>.
      </p>
    </div>
  );
};

export default NotFound;
