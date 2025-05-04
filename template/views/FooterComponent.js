class FooterComponent extends React.Component {

  constructor(props) {
    super(props)
    $(function (params) {
      var panel = document.getElementById("pnlContent");
      var element = document.getElementsByClassName("pnlRender");

      for (let index = 0; index < element.length; index++) {
        element.item(index).innerHTML = "Tablero";
      }
      panel.innerHTML = new NavLink().obtenerPantalla("Tablero");
    });
  }

  render() {
    return (
      <footer className="main-footer ">
        {" "}
        <strong>
          {" "}
          Copyright &copy; 2017-2025{" "}
          <a href="https://0.0.0.0:8080">Portafolio</a>.{" "}
        </strong>{" "}
        All rights reserved.{" "}
        <div className="float-right d-none d-sm-block">
          {" "}
        </div>{" "}
      </footer>
    );;
  }
}