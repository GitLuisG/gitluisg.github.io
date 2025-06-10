function getModuleassets(name, folder, file){
  return Route + name + "/assets/" + folder + "/" + file;
}

function blockquote(text) {
    return (
        '<blockquote class="quote-info"> <h6>Info</h6> <p>' +
        text +
        "</p> </blockquote>"
    );
}

function imagen(ruta, ribbon, width) {
    var ribbonhtml =
        ribbon == ""
            ? ""
            : '<div class="ribbon-wrapper ribbon-lg"> <div class="ribbon bg-success text-lg">' +
            ribbon +
            "</div> </div>";
    return (
        '<div class="position-relative" > <img width="'+width+'" src="' +
        ruta +
        '" alt="Photo 1" class="img-fluid"> ' +
        ribbonhtml +
        " </div>"
    );
}

function card(titulo, content, footer) {
    return (
        '<div class="card" > <div class="card-header" style=" display: flex; flex-direction: row; "> <h3 style="word-wrap: initial; white-space:nowrap; width: -webkit-fill-available; overflow:hidden; text-overflow:ellipsis;" class="card-title"> ' + titulo + ' </h3> <div class="card-tools" > <button type="button" class="btn btn-tool" data-card-widget="maximize"> <i class="fas fa-expand"></i> </button> </div> </div> <div class="card-body"> ' + content + ' </div> <div class="card-footer" style="word-wrap: initial; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;"> ' + footer + ' </div> </div> '
    )
}

function col(content, type) {
    var c = "";
    for (let index = 0; index < content.length; index++) {
        c += '<div class="' + type + '">' + content[index] + "</div>";
    }
    return c;
}

function row(content, type) {
    var c = "";
    for (let index = 0; index < content.length; index++) {
        c += '<div class="row">' + col(content[index], type) + "</div>";
    }
    return c;
}

function buttonlink(enlace, name) {
    return (
        '<a  href="' +
        enlace +
        '">' +
        name +
        "</a>"
    );
}

function areachart(titulo, lbldata, lbldataset, id) {
    $(function () {
        var areaChartCanvas = $("#" + id)
            .get(0)
            .getContext("2d");

        var areaChartData = {};
        areaChartData = {
            labels: lbldata,
            datasets: lbldataset,
        };

        var areaChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            legend: { display: false },
            scales: {
                xAxes: [{ gridLines: { display: false } }],
                yAxes: [{ gridLines: { display: false } }],
            },
        };

        new Chart(areaChartCanvas, {
            type: "line",
            data: areaChartData,
            options: areaChartOptions,
        });
    });

    return (
        '<div class="card card-primary">  <div class="card-header">  <h3 class="card-title">' +
        titulo +
        '</h3>  <div class="card-tools">  <button type="button" class="btn btn-tool" data-card-widget="collapse" >  <i class="fas fa-minus"></i> </button> <button type="button" class="btn btn-tool" data-card-widget="remove" >  <i class="fas fa-times"></i> </button> </div> </div> <div class="card-body"> <div class="chart">  <canvas id=' +
        id +
        "></canvas> </div> </div> </div> "
    )
}

function postGaleria(img) {
    return (
        '<div class="row mb-3"> <div class="col-sm-6"> <img class="img-fluid" src="' +
        img[0] +
        '" alt="Photo"> </div> <div class="col-sm-6"> <div class="row"> <div class="col-sm-6"> <img class="img-fluid mb-3" src="' +
        img[1] +
        '" alt="Photo"> <img class="img-fluid" src="' +
        img[2] +
        '" alt="Photo"> </div> <div class="col-sm-6"> <img class="img-fluid mb-3" src="' +
        img[3] +
        '" alt="Photo"> <img class="img-fluid" src="' +
        img[4] +
        '" alt="Photo"> </div> </div> </div> </div>'
    )
}

function post(content) {
    var c = "";
    for (let index = 0; index < content.length; index++) {
        c +=
            ' <div class="post"> <div class="user-block"> <img class="img-circle img-bordered-sm" src="' +
            content[index][0] +
            '" alt="image" /> <span class="username"> <a href="#">' +
            content[index][1] +
            '</a> <a href="#" class="float-right btn-tool" ></a> </span> <span class="description">Compartido - ' +
            content[index][2] +
            "</span> </div> <p> " +
            content[index][3] +
            " </p> </div>";
    }
    return c;
}

function post2(content) {
    var c = "";
    for (let index = 0; index < content.length; index++) {
        c +=
            ' <div class="post"> <span class="description">' +
            content[index][0] +
            "</span> </div> <p> " +
            content[index][1] +
            " </p><p></p> </div>";
    }
    return c;
}

function widget(icon, title, content) {
    return [
        '<div class="info-box"> <span class="info-box-icon bg-info elevation-1"> <i class="' +
        icon +
        '""></i> </span> <div class="info-box-content"> <span class="info-box-text">' +
        title +
        '</span> <span class="info-box-number"> ' +
        content +
        " </span> </div> </div>",
    ];
}

function container(type, content) {
    return "<div class=container-" + type + ">" + content + "</div>";
}

var datos;

function setDatos(data) {
    datos = data
}

function getDatos() {
    return datos
}

function reloj() {
    document.getElementById("app").innerHTML += '<div id="reloj"> </div>'
}

function Qrcreator(){
  
}

function createFolder() { 
  window.createFolder("Hola");
} 

function update() {
    if (document.getElementById("reloj")) {
        const date = new Date();
        document.getElementById("reloj").innerHTML = date.toLocaleTimeString()+" "+date.getUTCFullYear()+"/"+date.getUTCMonth()+"/"+date.getUTCDay();
    }
}

setInterval(update, true);