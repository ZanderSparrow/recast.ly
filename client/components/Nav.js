var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search searchFn={props.searchFn} />
    </div>
  </nav>
);

window.Nav = Nav;
