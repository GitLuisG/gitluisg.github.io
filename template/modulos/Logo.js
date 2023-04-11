class Logo extends React.Component {
    render() {
      return (
        <a href="/" className="brand-link">
          <span className="brand-image-xl logo-xs">LUIS</span>
          <span className="brand-text font-weight-light">{Datos.name}</span>
        </a>
      );
    }
  }