class NavLink extends React.Component {
  constructor(props) {
    super(props);
  }

  obtenerPantalla(name) {
    switch (name) {
      case "Tablero":
        return row(
          [[widget("far fa-clock", "Hora", '<span id="reloj"></span>')]],
          "col-md-3 col-sm-6 col-12"
        );
        break;

      case "Proyectos":
        return row(
          [
            [
              card(
                "ControlesDTI",
                imagen(Assets + "img/Material.png", "", "auto"),
                "Sistema de Comunicación Hospital - Familiar Paciente"
              ),
              card(
                "U Da vinci",
                imagen(Assets + "img/Universidad Da Vinci.png", "", "auto"),
                "Es una universidad completamente en línea"
              ),
              card(
                "SWI",
                imagen(Assets + "img/swi.png", "", "auto"),
                "Es mucho más que un Sitio Web, es tu espacio privado en internet"
              ),
              card(
                "Proyecto SMS",
                imagen(Assets + "img/SMS.gif", "", "auto"),
                buttonlink(
                  "https://github.com/GitLuisG/Sistema_de_Mensajeria",
                  "Ir al repositorio"
                )
              ),
            ],
            [
              card(
                "Detectar rostros en un video",
                imagen(Assets + "img/img3.png", "", "auto"),
                buttonlink(
                  "https://github.com/GitLuisG/Graficacion_Avanzada_Manejo_de_imagenes_con_Processing",
                  "Ir al repositorio"
                )
              ),
              card(
                "Arcanoid",
                imagen(Assets + "img/Arcanoid.png", "", "auto"),
                buttonlink(
                  "https://github.com/GitLuisG/Graficacion_Avanzada_Manejo_de_imagenes_con_Processing",
                  "Ir al repositorio"
                )
              ),
              card(
                "Tetris",
                imagen(Assets + "img/img.gif", "", "auto"),
                buttonlink(
                  "https://github.com/GitLuisG/Practica_05_Tetris",
                  "Ir al repositorio"
                )
              ),
              card(
                "Banco de Sangre",
                imagen(Assets + "img/Sangre.png", "", "auto"),
                buttonlink(
                  "https://github.com/GitLuisG/BancodeSangre_RyM/blob/master/Sangre.PNG",
                  "Ir al repositorio"
                )
              ),
            ],
            [
              card(
                "Analisis covid 19",
                imagen(Assets + "img/analis.png", "", "auto"),
                buttonlink(
                  "https://datos.gob.mx/busca/dataset/informacion-referente-a-casos-covid-19-en-mexico/resource/345b0c09-a936-4c50-9e5c-0a43f2305595?inner_span=True",
                  "Ir al dataset"
                )
              ),
              card(
                "Logintud de sepalo - Flores Iris",
                imagen(Assets + "img/irissepalo.png", "", "auto"),
                buttonlink(
                  "https://www.kaggle.com/datasets/uciml/iris",
                  "Ir al dataset"
                )
              ),
              card(
                "Analisis covid 19",
                imagen(Assets + "img/Analisis.png", "", "auto"),
                buttonlink(
                  "https://datos.gob.mx/busca/dataset/informacion-referente-a-casos-covid-19-en-mexico/resource/345b0c09-a936-4c50-9e5c-0a43f2305595?inner_span=True",
                  "Ir al dataset"
                )
              ),
            ],
          ],
          "col-sm-3"
        );
        break;

      case "Zona de Juegos":
        return '<div class="swiper mySwiper"> <div class="swiper-wrapper"> <div class="swiper-slide" style="width: 172.66699999999997px;"> <div class="position-relative p-3 bg-gray"> <img src="https://swiperjs.com/images/n4w-logo.svg" alt="Photo 1" class="img-fluid"> <div class="ribbon-wrapper ribbon-xl"> <div class="ribbon bg-success text-lg"> Brawl Start </div> </div> </div> <div class="position-relative p-3 bg-gray"> <img src="https://swiperjs.com/images/n4w-logo.svg" alt="Photo 1" class="img-fluid"> <div class="ribbon-wrapper ribbon-xl"> <div class="ribbon bg-success text-lg"> Brawl Start </div> </div> </div> <div class="position-relative p-3 bg-gray"> <img src="https://swiperjs.com/images/n4w-logo.svg" alt="Photo 1" class="img-fluid"> <div class="ribbon-wrapper ribbon-xl"> <div class="ribbon bg-success text-lg"> Brawl Start </div> </div> </div> <div class="position-relative p-3 bg-gray"> <img src="https://swiperjs.com/images/n4w-logo.svg" alt="Photo 1" class="img-fluid"> <div class="ribbon-wrapper ribbon-xl"> <div class="ribbon bg-success text-lg"> Brawl Start </div> </div> </div> <div class="position-relative p-3 bg-gray"> <img src="https://swiperjs.com/images/n4w-logo.svg" alt="Photo 1" class="img-fluid"> <div class="ribbon-wrapper ribbon-xl"> <div class="ribbon bg-success text-lg"> Brawl Start </div> </div> </div> </div> </div> <div class="swiper-pagination"></div> </div>';
        break;

        case "Articulos":
          return "Hola";
          break;

      case "Presentacion":
        return (
          ' <div class="row"> <div class="col-md-3"> <div class="card card-primary card-outline"> <div class="card-body box-profile"> <div class="text-center"> <img class="profile-user-img img-fluid img-circle" src="' + Assets + '/img/unnamed.jpg" /> </div> <h3 class="profile-username text-center">' +
          Datos.name +
          '</h3> <p class="text-muted text-center">' +
          Datos.carrera +
          "</p> " +
          buttonlink("https://github.com/GitLuisG", "Ir a Github") +
          ' </div> </div> <div class="card card-primary"> <div class="card-header"> <h3 class="card-title">Mas Informacion</h3> </div> <div class="card-body"> <strong><i class="fas fa-book mr-1"></i>Formacion Académica</strong> <p class="text-muted"> 2017 – 2021<br /> Licenciatura en Ingeniería en Tecnologías de la información<br /> Universidad politécnica de victoria<br /> </p> <hr /> <strong ><i class="fas fa-map-marker-alt mr-1"></i> Contacto y Ubicacion </strong> <p class="text-muted">Mayapan 818, Victoria, Tamaulipas</p> <a href="https://wa.me/+528342685756" class="text-muted"><ion-icon name="logo-whatsapp"></ion-icon>+52 (834) 268 575 6</a><br><a href="https://wa.me/+522351250081" class="text-muted"><ion-icon name="logo-whatsapp"></ion-icon>+52 (235) 125 00 81</a> <p class="text-muted">correousertb@gmail.com</p> <hr /> <strong><i class="far fa-file-alt mr-1"></i> Resumen</strong> <p class="text-muted"> Tengo amplia experiencia en análisis y limpieza de datos, wireframing y mantenimiento de sistemas informáticos, con un amplio dominio de sistemas operativos Windows y Linux. </p> </div> </div> </div> <div class="col-md-9"> <div class="card"> <div class="card-header p-2"> <ul class="nav nav-pills"> <li class="nav-item"> <a class="nav-link active" href="#Blog" data-toggle="tab" >Blog</a > </li> </ul> </div> <div class="card-body"> <div class="tab-content"><div class="active tab-pane" id="activity">' +
          post([
            
            [
              "https://controlesdti.com/SCHFP/public/img/Logop_2.png",
              "ControleDti",
              "05:56 A.M.",
              "Este sitio web fue creado principalmente por mi en mi estadia en la universidad para realizar mi tesina, este sistema cuenta con diferentes modulos muy completos, para dar seguimiento a los pacientes, tener comunicacion con los doctores, notificar insidentes, etc." +
              postGaleria([
                Assets + "/img/1.png",
                Assets + "img/2.png",
                Assets + "img/3.png",
                Assets + "img/4.png",
                Assets + "img/5.png",
              ]),
            ],
          ]) +
          " </div></div> </div> </div> </div> </div> "
        );
        break;
case "Sobre Mi":
        return ' <div class="row"> <div class="col-md-3"> <div class="card card-primary card-outline"> <div class="card-body box-profile"> <div class="text-center"> <img class="profile-user-img img-fluid img-circle" src="' + Assets + '/img/unnamed.jpg" /> </div> <h3 class="profile-username text-center">' +
          Datos.name +
          '</h3> <p class="text-muted text-center">' +
          Datos.carrera +
          "</p> " +
          buttonlink("https://github.com/GitLuisG", "Ir a Github") +
          ' </div> </div> <div class="card card-primary"> <div class="card-header"> <h3 class="card-title">Mas Informacion</h3> </div> <div class="card-body"> <strong><i class="fas fa-book mr-1"></i>Formacion Académica</strong> <p class="text-muted"> 2017 – 2021<br /> Licenciatura en Ingeniería en Tecnologías de la información<br /> Universidad politécnica de victoria<br /> </p> <hr /> <strong ><i class="fas fa-map-marker-alt mr-1"></i> Contacto y Ubicacion </strong> <p class="text-muted">Mayapan 818, Victoria, Tamaulipas</p> <a href="https://wa.me/+528342685756" class="text-muted"><ion-icon name="logo-whatsapp"></ion-icon>+52 (834) 268 575 6</a><br><a href="https://wa.me/+522351250081" class="text-muted"><ion-icon name="logo-whatsapp"></ion-icon>+52 (235) 125 00 81</a> <p class="text-muted">correousertb@gmail.com</p> <hr /> <strong><i class="far fa-file-alt mr-1"></i> Resumen</strong> <p class="text-muted"> Tengo amplia experiencia en análisis y limpieza de datos, wireframing y mantenimiento de sistemas informáticos, con un amplio dominio de sistemas operativos Windows y Linux. </p> </div> </div> </div> <div class="col-md-9"> <div class="card"> <div class="card-header p-2"> <ul class="nav nav-pills"> <li class="nav-item"> <a class="nav-link active" href="#Blog" data-toggle="tab" >Blog</a > </li> </ul> </div> <div class="card-body"> <div class="tab-content"><div class="active tab-pane" id="activity">' +
          post([
            [
              "https://cmn-swi.s3.amazonaws.com/Consultora%20Mexicana/Consultora%20Mexicana/DVCUP2/Banco%20de%20Imagenes/dvipro1/logo-swi-menu-2-.png",
              "Tu Sitio Web Inteligente (Swi.mx)",
              "06:39 A.M.",
              "Un excelente lugar para empezar a trabajar te brindan las herramientas que necesitas el personal es muy amable, y se adapta a tu forma de trabajar.",
            ],
            [
              "https://udavinci.edu.mx/wp-content/uploads/2018/09/logo-udv-fondo-gris.png",
              "Universidad Da Vinci",
              "06:39 A.M.",
              "Este lugar para empezar a trabajar lo recomiendo sus campus virtuales estan creados con la plataforma de moddle, son muy atentos a lo que haces muy platicadores te presentan a toda la institucion pero eso si, si no encajas.",
            ],
            [
              "https://controlesdti.com/SCHFP/public/img/Logop_2.png",
              "ControleDti",
              "05:56 A.M.",
              "Este sitio web fue creado principalmente por mi en mi estadia en la universidad para realizar mi tesina, este sistema cuenta con diferentes modulos muy completos, para dar seguimiento a los pacientes, tener comunicacion con los doctores, notificar insidentes, etc." +
              postGaleria([
                Assets + "/img/1.png",
                Assets + "img/2.png",
                Assets + "img/3.png",
                Assets + "img/4.png",
                Assets + "img/5.png",
              ]),
            ],
          ]) +
          " </div></div> </div> </div> </div> </div> "
        );
        break;

      default:
        break;
    }
  }

  handleClick(i) {
    var navlink = document.getElementsByClassName("nav-link");
    for (let index = 0; index < navlink.length; index++) {
      if (navlink.item(index).classList == "nav-link active") {
        navlink.item(index).classList.remove("active");
      }
    }
    document.getElementById(this.props.id).classList.add("active");
    var element = document.getElementsByClassName("pnlRender");
    for (let index = 0; index < element.length; index++) {
      element.item(index).innerHTML = this.props.name;
    }
    var panel = document.getElementById("pnlContent");
    switch (this.props.name) {
      case "Tablero":
        panel.innerHTML = " ";
        panel.innerHTML = this.obtenerPantalla(this.props.name);
        break;

      case "Proyectos":
        panel.innerHTML = " ";
        panel.innerHTML = this.obtenerPantalla(this.props.name);
        break;

      case "Sobre Mi":
        panel.innerHTML = " ";
        panel.innerHTML +=
          blockquote("Curriculum") + this.obtenerPantalla(this.props.name);
        break;

      case "Articulos":
        panel.innerHTML = " ";
        getDatos().forEach(element => {
          panel.innerHTML += element["Nombre"]+element["Url"]+element["Description"]
        })
        //panel.innerHTML += this.obtenerPantalla(this.props.name);
        break;
      case "Zona de Juegos":
        panel.innerHTML = " ";
        panel.innerHTML += this.obtenerPantalla(this.props.name);
        break;
       case "Presentacion":
panel.innerHTML = " ";
        this.obtenerPantalla("Presentacion");
        break;
      default:
        panel.innerHTML = " ";
        break;
    }
  }

  icon() {
    switch (this.props.name) {
      case "Tablero":
        return <i className="nav-icon fas fa-tachometer-alt"></i>;
        break;

      case "Proyectos":
        return <i className="nav-icon far fa-plus-square"></i>;
        break;

      case "Sobre Mi":
        return <i className="nav-icon fas fa-book"></i>;
        break;
      case "Zona de Juegos":
        return <i className="fas fa-gamepad"></i>;
        break;
      case "Presentacion":
       return <i className="fas fa-folder"></i>;
       break;
      default:
        return "";
        break;
    }
    return;
  }

  render() {
    return (
      <li className="nav-item">
        <a
          href="#"
          className="nav-link "
          id={this.props.id}
          onClick={(i) => this.handleClick(i)}
        >
          {this.icon()}

          <p> {this.props.name}</p>
        </a>
      </li>
    );
  }
}
