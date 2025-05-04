class LoaderComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    handleClick(i) {
        this.band = false
    }

    render() {
        return (<div className="preloader flex-column justify-content-center align-items-center"> <img className="animation__shake" src="https://adminlte.io/docs/3.1/assets/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" /> </div>)
    }
}