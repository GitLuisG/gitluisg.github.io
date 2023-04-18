class Navtreeview extends React.Component {
    constructor(props) {
      super(props);
    }

    handleClick(i) {}

    render(name) {
      return (
        <li className="nav-item menu-open">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt"></i>
            <p>
              {this.props.name}
              <i className="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul id={this.props.id} className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                <i className="far fa-circle nav-icon"></i>
                <p> {this.props.Menu[0]} </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active">
                <i className="far fa-circle nav-icon"></i>
                <p> {this.props.Menu[1]} </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active">
                <i className="far fa-circle nav-icon"></i>
                <p> {this.props.Menu[2]} </p>
              </a>
            </li>
          </ul>
        </li>
      );
    }
  }
