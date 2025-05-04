class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <HeaderComponent />
            <div id="main">
                <ArticleComponent />
                <NavComponent />
                <AsideComponent />
            </div>
            <FooterComponent />
        </div>)
    }
}