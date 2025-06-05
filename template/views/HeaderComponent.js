class HeaderComponent extends React.Component {
  
  constructor(props) {
    super(props);
  }

  navlink(id, name) {
    return (
      <li className="nav-item d-none d-sm-inline-block">
        <a
          href="#"
          id={id}
          onClick={(i) => this.handleClick(i)}
          className="nav-link"
        >
          {name}
        </a>
      </li>
    );
  }

  handleClick(i) {
    alert(i);
    var navlink = document.getElementsByClassName("header");
    navlink.style.display = "none";
  }

  render(){
    return <header class="header">
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars"></i>
              </a>
            </li>
            {this.navlink("btnContact", "presentar")}
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="fullscreen"
                href="#"
                role="button"
              >
                <i className="fas fa-expand-arrows-alt"></i>
              </a>
            </li>
          </ul>
        </nav>
    </div>
  </header>
  }


}