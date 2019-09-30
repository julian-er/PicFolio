// Initialize app
var myApp = new Framework7();
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ],
    navbar: {
      hideOnPageScroll: false,
      scrollTopOnTitleClick: true,
    },
    dialog:{
      title:'PIC folio',
      buttonCancel:'Cancelar',
      // parametros globales de los dialogos //
    },
  });
var mainView = app.views.create('.view-main');

var mySwiper = new Swiper('.swiper-container', {
  spaceBetween: 10,
  speed:300,
  slidesPerView:'auto',
  centeredSlides: true,
  observer: true,
});

  //- Grillado de acciones
  var cr = app.actions.create({
    grid: true,
    buttons: [
      [
        {
          text: 'Nueva Categoría',
          icon: '<img src="img/_ionicons_svg_md-today.svg" width="48" alt="Nueva Categoría"/>',
          onClick: function () {

// aca creo las nuevas categorias
var idnuevo=Date.now()
dbuser.collection('categorias').doc(`${idnuevo}`).set({'titulo':''});

  $$(".swiper-wrapper.categorias").append(`
  <!-- tu append va de aca -->
  <div class="page-content swiper-slide display-flex justify-content-center align-content-center elevation-6 elevation-hover-24 elevation-pressed-12 elevation-transition nopading atributo" id="${idnuevo}">
      <div class="row"> 
                <div class="row col-100 h20">
                      <div class="col-100 h100 display-flex justify-content-center align-content-center">
                              <input type="text" placeholder="Categoría" id="t${idnuevo}" class="auto text-align-center col-100 h100 titlee required"></input>
                      </div>
                </div>
          <div class="row col-100 contents" >   
          <!-- LISTAS ACOMODABLES -->
                 
          <div class="list media-list sortable col-100">
          <li class="row">
                <span class="col-70 auto">Reordenar los portfolios</span>
                <label class="toggle toggle-init color-black  auto">
                  <input type="checkbox" class="sortable-toggle col-70">
                  <span class="toggle-icon"></span>
                </label>
          </li>  
                <ul id="b${idnuevo}">               
                </ul>
          </div>
          <!-- LISTAS ACOMODABLES -->
          </div>
  </div>  
<!-- hasta aca-->  
`);

// aca voy a agregar los datos en un variable // 

categ.push(idnuevo)

  
  }
        },

        {
          text: 'Nuevo Portfolio',
          icon: '<img src="img/_ionicons_svg_md-images.svg" width="48" alt="Nuevo Portfolio"/>',
          onClick: function () {
            ayuda (); 
            }          
        },
      ]
    ]
  });
//variables globales//  
var db = firebase.firestore(); // para cargar en BD
var port = []; // guardo los id de los portfolios
var categ = []; // la recorro con el click de popup 
var portfolio; // nno me acuerrdo que guardo
var fotospor=[]; // el array de url
var storage=window.localStorage; // para achicar ruta
var dbuser; // me meto en la ruta de la BD del usuario 
// funcion de ayuda para generar las paginas y abrir el popup
function ayuda () {
            // Abrime el dynamic popup
            dynamicPopup.open();
            // creame las categorias 
            selector(categ);          
};
function ayuda2(){
  creartar (); //creo la tarjeta 
  crearpor(); // creo el pop
};
function ayuda3(){
  mainView.router.back();
  dialogo();
};
// crear las tarjetas y portfolio //
function creartar (){
// var ubicacion = ($$('#desplegacat').val()).slice(2)
// dbuser.collection('categorias').doc(ubicacion).collection('portfolios').doc(portfolio).set({'titulo': 'hola'});

  $$(`${$$('#desplegacat').val()}`).append(`
  <li id="${portfolio}" >
       <div class="item-content" >
         <div class="item-media por${portfolio} portadatarjeta"></div>
         <div class="item-inner">
           <div class="item-title-row">
             <div class="item-title">${$$('#titupop').val()}</div>
             <div class="item-after button popup-open" data-popup="#p${portfolio}" >ver</div>
           </div>
           <div class="item-text">${$$('#descpop').val()}</div>
         </div>
       </div>
       <div class="sortable-handler"></div>
     </li>
  `)
  $$('body').append(`         <div class="popup por" id="p${portfolio}">
                                <div class=" row h96 nom page-content">
                                  <div class="row h30">
                                      <div class="col-100 h50 display-flex justify-content-center align-content-center block no-margin">
                                          <input type="text"  placeholder="TÍTULO" class="auto text-align-left col-100 h100 titlee required" maxlength="17" value="${$$('#titupop').val()}" ></input>
                                        </div>
                                        <div class="col-100 h30 block no-margin">
                                          <textarea class="col-100 h100 description" placeholder="Descripción" value="${$$('#descpop').text()}" ></textarea>
                                      </div>
                                   </div> <!-- cierro la altura 30 -->
                                   <div class="row h100 col-100 contents auto prepre${portfolio}">
                                   <!-- aca se van a agregar las fotos nuevas -->
                                   </div>

                                </div> <!--cierro page content-->  
                              </div>  `)
  };
function crearpor(){
  //esto va en la carpeta con el id de idnuevo
  //mando a guardar pportfolio como ID en portfolio
  //adentro de pportfolio guardo lo que sigue
  //mando a guardar titulo ${$$('#titupop').val()}
  //mando a guardar descripcion ${$$('#descpop').text()}
  //mando a guardar fotospor en url
    for (i=0 ; i<fotospor.length ; i++){
      $$(`.prepre${portfolio}`).append(`  
      <div class="col-50 auto"><img src="${fotospor[i]}" class="col-100"/></div>
      `)
    }
    $$(`.por${portfolio}.portadatarjeta`).append(`<img src="${fotospor[0]}" width="80"/>`)
fotospor=[] ;
  };
// Create dynamic Popup
var dynamicPopup = app.popup.create({
  content: '<div class="popup m5 crearmiporfolio" >'+
              '<div class=" row h96 nom page-content">'+
                '<div class="row h30">'+
                    '<div class="col-100 h50 display-flex justify-content-center align-content-center block no-margin">'+
                        '<input type="text" id="titupop" placeholder="TÍTULO" class="auto text-align-left col-100 h100 titlee required" maxlength="17" ></input><span class="input-clear-button"></span>'+
                      '</div>'+
                      '<div class="col-100 h30 block no-margin">'+
                        '<textarea class="col-100 h100 description" placeholder="Descripción" id="descpop" ></textarea>'+
                    '</div>'+
                          '<div class="col-100 h20 block no-margin row">'+
                                  '<p class="col-70 description">Selecciona una categoría  <span class="icon ion-md-arrow-forward"></span></p>'+
                                  '<select placeholder="Elige una categoría" class="col-30 description appendcateg" id="desplegacat">'+
                                  // aca caen las categorías // 
                                  '</select>'+
                              '</div>'+
                 '</div>'+ // cierro la altura 30
                 '<div class="row h100 col-100 contents auto prepre">'+
                // aca se van a agregar las fotos nuevas // 
                 '</div>'+
                // botón que agrega 
                 '<div class="col-50 auto"><img src="img/photo.svg" class="col-100" onclick="openFilePicker()"/></div>'+ 
              '</div>'+ //cierro page content
                              // toolbar //
                                '<div class="toolbar toolbar-bottom-md no-shadow color-black">'+
                                        '<div class="toolbar-inner justify-content-center align-content-center">'+
                                          '<a class="link autotb2 popup-close" onClick="ayuda2()">CREAR</a>'+
                                        '</div>'+
                                '</div>'+
                              // toolbar   
            '</div>',
// eventos   
            on: {
              open: function(popup){
                  //id para el portfolio
                  portfolio=Date.now()  
              },
              close: function (popup){
                    // nadad
               
              },
              closed: function (popup) {
                $$('#titupop').val(""),$$('.description').val(""), $$('.prepre').empty(),$$('#desplegacat').empty()
              },
            }
                      });
/*BOTON BACK ANDROID*/ /** ahora ademas maneja los paneles */
document.addEventListener("backbutton", onBackKeyDown, false); 
function onBackKeyDown() { 
                            if  ($$('.panel-right').hasClass('panel-active')||$$('.actions-backdrop').hasClass('backdrop-in')||$$('.popup.por').hasClass('modal-in')){ 
                                  app.panel.close(),
                                  app.actions.close(),
                                  app.popup.close() 
                                }
                            else if ($$('.popup.crearmiporfolio').hasClass('modal-in')) {
                              navigator.notification.confirm(
                                'Al volver hacia atrás estas cancelando la creación del portfolio. ¿Estas seguro que deseas continuar?',           
                                onConfirm,            
                                'Cancelando la operación', 
                                ['Si','No']     
                              );
                              function onConfirm(buttonIndex) {
                                  if (buttonIndex == 1) {
                                    app.popup.close()  
                                  }
                                }
                            }
                             else {  switch (app.views.main.router.url) {
                                                                          case ( "/about/" ) :
                                                                                
                                                                                  ayuda3();
                                                                          break;
                                                                          default :
                                                                            {
                                                                                navigator.app.exitApp();
                                                                            }
                                                                          break;   
                                                                      }
                                }
                        };
// funciones de la cámara //
function openFilePicker(selection) {
  var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
  var options = setOptions(srcType);
  var func = createNewFileEntry;
  navigator.camera.getPicture(function cameraSuccess(imgUri) {
      //alert(imgUri);
      $$('.prepre').prepend(`<div class="col-50 auto"><img src="${imgUri}" class="col-100"/></div>`);
      fotospor.push(`${imgUri}`);
  }, function cameraError(error) {
      console.debug("Unable to obtain picture: " + error, "app");

  }, options);
}
function setOptions(srcType) {
  var options = {
      // Some common settings are 20, 50, and 100
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType: srcType,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.ALLMEDIA,
      allowEdit: true,
      correctOrientation: true  //Corrects Android orientation quirks
       
  }
  return options;
}
function createNewFileEntry(imgUri) {
  window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, function success(dirEntry) {

      // JPEG file
      dirEntry.getFile("tempFile.jpeg", { create: true, exclusive: false }, function (fileEntry) {

          // Do something with it, like write to it, upload it, etc.
          // writeFile(fileEntry, imgUri);
          console.log("got file: " + fileEntry.fullPath);
          // displayFileData(fileEntry.fullPath, "File copied to");

      }, onErrorCreateFile);

  }, onErrorResolveUrl);
}
// funciones para recorrer cosas dentro de la app //
function  selector (x){
  for (var i=0; i<x.length; i++){
    var valor=$$(`#t${x[i]}`).val(); // esto me carga el titulo de la categoria //
    var cuerpo=`#b${x[i]}` // esto me carga el id de el cuerpo a usar en el valor del selector //
    $$("#desplegacat").append(`<option value="${cuerpo}">${valor}</option>`)
};}
// inicio de sesion
function iniciarsesion (username,password){
    app.dialog.close()
    //cargamos para que piense el 
      app.dialog.preloader('Verificando');
    // aca va iniciando
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then( function (){
      storage.setItem('email', username)
      storage.setItem('password', password)
      dbuser=db.collection("usuarios").doc(storage.getItem('email'))
      dbuser.get() 
      .then (function (doc){
        nombre=doc.data().nombre,
        apellido=doc.data().apellido}     
        )
      .then(()=>{
        app.dialog.close();
        app.dialog.alert('Bienvenido '+ nombre +' '+ apellido,'PIC folio'); // le decimos olis 
        $$('#usuarioiniciado').text(nombre+' '+apellido) ;
      })
      }
    )
    .catch(function(error) {
      var errorCode = error.code;
      app.dialog.close();
      switch (errorCode) {
                  case('auth/wrong-password'):
                  app.dialog.alert('La contraseña no coincide con el usuario ingresado, por favor verifique el dato ingresado','Contraseña incorrecta');
                    dialogo()
                  break;
                  case('auth/user-not-found'):
                  app.dialog.alert('Usuario no encontrado, por favor verifique el dato ingresado','Usuario no encontrado');
                    dialogo()
                  break;
                  case('auth/invalid-email'):
                  app.dialog.alert('Email Invalido, por favor verifique el dato ingresado','Email invalido');
                    dialogo()
                  break;
                  case('auth/user-not-foundThere'):
                  app.dialog.alert('Usuario no encontrado, por favor verifique los datos ingresados','Usuario no encontrado');
                    dialogo()
                  break;
                  default:
                    // noting
                  break;
                        }
    });
  };
// nuevo dialogo inicio de sesion //
function dialogo () {
  app.dialog.create({
    title: '¡Bienvenido a PIC folio!',
    text: 'Debes tener una cuenta para utilizar esta App, inicia sesión o regístrate. ¡Es gratis!',
    content:` <div class="list no-hairlines-md">
                  <ul>
                    <li class="item-content item-input">
                                            <div class="item-inner">
                                            <div class="item-title item-floating-label">E-mail</div>
                                            <div class="item-input-wrap">
                                                <input type="email" placeholder="picfolio@portfolios.com" id="username" required validate>
                                                <span class="input-clear-button"></span>
                                            </div>
                                            </div>
                                        </li>
                                <li class="item-content item-input">
                                    <div class="item-inner">
                                    <div class="item-title item-floating-label">Password</div>
                                    <div class="item-input-wrap">
                                        <input type="password" placeholder="Password" id="password" required validate>
                                        <span class="input-clear-button"></span>
                                    </div>
                                    </div>
                                </li>
                    </ul>
                    <div class="block">
                    <p class="row">
                      <button class="col button button-raised color-black" onClick="iniciarsesion($$('#username').val(),$$('#password').val())">Iniciar Sesión</button>
                    </p>
                    </div>
                    <p class="text-align-center">Si todavia no estas registrado, <a href="/about/" onClick="app.dialog.close()">registrate acá</a></p>
                </div>`,
    

  }).open();
};
// registro de mail y contraseña //
function registrame(){ 
  nuevoemail=$$('#nuevoemail').val()
  nuevopass=$$('#nuevopass').val()
  nombre=$$('#nombre').val()
  apellido=$$('#apellido').val()
  firebase.auth().createUserWithEmailAndPassword(nuevoemail, nuevopass)
  .then(function (){
    db.collection("usuarios").doc(`${nuevoemail}`).set({'nombre':nombre,'apellido': apellido});
    app.dialog.alert('Ya estas formando parte de la comunidad! <br> Gracias ' + nombre + ' ' + apellido + '<br> Inicia sesión para continuar.', 'Registro Exitoso', function(){ayuda3();});
  })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {

  alert('Clave muy débil.');

  } else {

  alert(errorMessage);

  }
  console.log(error);

  });
}
// logout //
 const logout = () =>{
  app.dialog.confirm('¿Estás seguro que quieres desloguearte?','Cerrar Sesión', function (){
    storage.clear();
    location.reload();
  });
 } 
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");  
    // estas logueado ?
    if (storage.getItem('email') && storage.getItem('password')){
      iniciarsesion(storage.getItem('email'), storage.getItem('password'))
    }
    else{
    // primero que nada inicia sesion
      dialogo();
    }
    // inicia la camara //
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
    console.log(navigator.camera);
}
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init','.page[data-name="index"]', function (e) {
    // abrime creacion de cosas
    $$('.creacion').on('click', function () {
      cr.open();
    // abrime popup
    $$('.col-50.h20.bi.mb').on('click', function(){
      dynamicPopup.open();
    });
  });
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
})



