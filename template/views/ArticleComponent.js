class ArticleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.id = "pnlRender";
  }

  render() {
    return (
      <article><div className="content-wrapper px-4 py-5">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className={this.id + " m-0"}></h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className={this.id + " breadcrumb-item active"}></li>
                </ol>
              </div>
            </div>

            <div
              id="pnlContent"
              name="pnlContent"
              className="content-header"
            ></div>
          </div>
        </div>
      </div>
      </article>
    );
  }
}