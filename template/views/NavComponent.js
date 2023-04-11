class NavComponent extends React.Component {
    render() {
      return <nav>
         <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <Logo />
            <div class="sidebar">
              <nav class="mt-2">
                <ul
                  class="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                >
                  <NavLink name="Tablero" id="1" />
                  <NavLink name="Proyectos" id="3" />
                  <NavLink name="Sobre Mi" id="2" />
                </ul>
              </nav>
            </div>
          </aside>
      </nav>;
    }
  }