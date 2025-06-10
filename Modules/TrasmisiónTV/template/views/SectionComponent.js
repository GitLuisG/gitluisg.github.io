class SectionComponent extends React.Component {
  
    handleClick(i, canal = "") {
        var panel = document.getElementById("mainSectionTV");
        panel.innerHTML = '<Logo/><video controls autoplay class="img-fluid" src="'+canal+'"></video>'
    }
    
    render() {
      return <div id="mainSection" class="Reproductor">
          <button onClick={(i) => this.handleClick(i)} > {"<"} </button>
              <section id="mainSectionTV">
                
              </section>
            <button onClick={(i) => this.handleClick(i)} > {">"} </button>
            <div class="PlayList">
              <ol>
                <li onClick={(i) => this.handleClick(i, "https://cdn.pixabay.com/video/2019/05/06/23355-334950213_large.mp4")} class="item">Canal 1</li>
                <li onClick={(i) => this.handleClick(i, "https://cdn.pixabay.com/video/2020/04/18/36503-427607440_large.mp4")} class="item">Canal 2</li>
                <li onClick={(i) => this.handleClick(i, "https://cdn.pixabay.com/video/2024/02/09/199876-911694738_large.mp4")} class="item">Canal 3</li>
                <li onClick={(i) => this.handleClick(i, "https://cdn.pixabay.com/video/2024/03/12/203986-923133871_large.mp4")} class="item">Canal 4</li>
                <li onClick={(i) => this.handleClick(i, "https://cdn.pixabay.com/video/2021/09/11/88226-606079087_large.mp4")} class="item">Canal 5</li>
              </ol>
            </div>
      </div>
    }
  }