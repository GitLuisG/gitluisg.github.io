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
                <div id="Conteiner">
                  <SectionComponent />
                </div>
                <AsideComponent />
            </div>
            <FooterComponent />
        </div>)
    }
}