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
        {" "}
        All rights reserved.{" "}
        <div className="float-right d-none d-sm-block">
          {" "}
          <b>Version</b> 3.2.0{" "}
        </div>{" "}
      </footer>
    );;
  }
}