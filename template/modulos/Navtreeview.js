class Navtreeview extends React.Component {
    constructor(props) {
      super(props);
    }

    handleClick(i) {}

    render(name) {
      return (
        <li class="nav-item menu-open">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
              {this.props.name}
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul id={this.props.id} class="nav nav-treeview">
            <li class="nav-item">
              <a href="#" class="nav-link active">
                <i class="far fa-circle nav-icon"></i>
                <p> {this.props.Menu[0]} </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link active">
                <i class="far fa-circle nav-icon"></i>
                <p> {this.props.Menu[1]} </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link active">
                <i class="far fa-circle nav-icon"></i>
                <p> {this.props.Menu[2]} </p>
              </a>
            </li>
          </ul>
        </li>
      );
    }
  }
