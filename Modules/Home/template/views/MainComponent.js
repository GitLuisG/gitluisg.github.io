import ArticleComponent from './ArticleComponent';
class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <HeaderComponent />
            <div id="main">
                <ArticleComponent />{buttonlink(
                  "https://github.com/GitLuisG/Sistema_de_Mensajeria",
                  "Ir al repositorio"
                )}
                <NavComponent />
                <AsideComponent />
            </div>
            <FooterComponent />
        </div>)
    }
}