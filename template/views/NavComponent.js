class NavComponent extends React.Component {
    render() {
      return <nav>
         <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Logo />
            <div className="sidebar">
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                >
                  <NavLink name="Tablero" id="1" />
                  <NavLink name="Proyectos" id="3" />
                  <NavLink name="Zona de Juegos" id="4"/>
                  <NavLink name="Articulos" id="5"/>
                  <NavLink name="Sobre Mi" id="2" />
                </ul>
              </nav>
            </div>
          </aside>
      </nav>;
    }
  }