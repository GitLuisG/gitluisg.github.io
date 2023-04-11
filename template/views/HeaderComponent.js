class HeaderComponent extends React.Component {
  
  constructor(props) {
    super(props);
  }

  navlink(id, name) {
    return (
      <li class="nav-item d-none d-sm-inline-block">
        <a
          href="#"
          id={id}
          onClick={(i) => this.handleClick(i)}
          class="nav-link"
        >
          {name}
        </a>
      </li>
    );
  }


  handleClick(i) {
    alert(i);
  }

  render() {
    return <header>
      <div class="wrapper">
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i class="fas fa-bars"></i>
              </a>
            </li>
            {this.navlink("btnContact", "Contacto")}
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                data-widget="fullscreen"
                href="#"
                role="button"
              >
                <i class="fas fa-expand-arrows-alt"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>;
  }


}