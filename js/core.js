jQuery(".btn-login").click(function () {

	var correo = jQuery("#correo");
	var clave = jQuery("#clave");

	if (correo.val() != "") {

		if (emailRegex.test(correo.val())) {

			if (clave.val() != "") {

				if (correo.val() == "admin@hotmail.com" &&
					clave.val() == "admin") {
					localStorage.setItem("perfil","admin");
				}

				if (correo.val() == "musician@hotmail.com" &&
					clave.val() == "musician") {
					localStorage.setItem("perfil","musician");
				}

				if (correo.val() == "auxiliary@hotmail.com" &&
					clave.val() == "auxiliary") {
					localStorage.setItem("perfil","auxiliary");
				}			

				window.location.href = "app.html";

			}else{
				jQuery('#myModal').modal('show')
				jQuery(".modal-title").html('Advertencia!');
				jQuery(".modal-body").html('<div class="alert alert-warning"><p>Ingrese la contraseña para iniciar sesión.</p></div>');
				jQuery(".modal-footer").html('<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button><button type="button" class="btn btn-primary">Registrarse</button>');
			}

		}else{
			
			jQuery('#myModal').modal({backdrop: 'static', keyboard: false})
			jQuery(".modal-title").html('Advertencia!');
			jQuery(".modal-body").html('<div class="alert alert-danger"><p>El <b>correo electrónico</b> ingresado no cuenta con una estructura válida, por favor verifique.</p></div>');
			jQuery(".modal-footer").html('<button type="button" class="btn btn-primary btn-accept" data-dismiss="modal">Aceptar</button>');

			jQuery('.btn-accept').click(function () {
				correo.focus();
			});
		}


	}else{
		jQuery('#myModal').modal('show')
		jQuery(".modal-title").html('Advertencia!');
		jQuery(".modal-body").html('<div class="alert alert-warning"><p>Ingrese el correo electrónico para iniciar sesión.</p></div>');
		jQuery(".modal-footer").html('<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button><button type="button" class="btn btn-primary">Registrarse</button>');
	}

})

function verFormularioRegistro() {
	jQuery('#myModal').modal('show')
	jQuery(".modal-title").html('Formulario de registro');
	jQuery(".modal-body").html('<form class="row">'+
			'<div class="col-12">'+
				'<p><b>Nombre</b></p>'+
				'<input class="form-control" type="text" name="nombre" id="nombre">'+
			'</div>'+
			'<div class="col-12">'+
				'<p><b>Apellido</b></p>'+
				'<input class="form-control" type="text" name="apellido" id="apellido">'+
			'</div>'+
			'<div class="col-12">'+
				'<p><b>Correo electrónico</b></p>'+
				'<input class="form-control" type="text" name="correo" id="correo">'+
			'</div>'+
		'</form>');

	jQuery(".modal-footer").html('<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button><button type="button" class="btn btn-primary">Registrarse</button>')
}

function verOlvideMiContrasenia() {
	jQuery('#myModal').modal('show')
	jQuery(".modal-title").html('Olvidó su contraseña?');
	jQuery(".modal-body").html('<p>Ingrese el correo electrónico de su cuenta para reestablecerla.</p>'+
		'<form class="row">'+
			'<div class="col-12">'+
				'<p><b>Correo electrónico</b></p>'+
				'<input class="form-control" type="text" name="correo" id="correo">'+
			'</div>'+
		'</form>');

	jQuery(".modal-footer").html('<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button><button type="button" class="btn btn-primary">Restablecer</button>')
}

function cerrarSesion () {

	jQuery('#myModal').modal('show')
	jQuery(".modal-title").html('Cerrar sesión');
	jQuery(".modal-body").html('<p>¿Esta seguro de cerrar la sesión?</p>');

	jQuery(".modal-footer").html('<button type="button" class="btn btn-secondary" data-dismiss="modal">No</button><button type="button" class="btn btn-primary btn-accept">Sí, cerrar sesión</button>');

	jQuery(".btn-accept").click(function () {
		window.location.href = "login.html";
	})

}

function cargarMenuNavegacion() {
	let perfil = localStorage.getItem("perfil");

	jQuery(".table_menu").html('');

	jQuery.ajax({
        dataType: 'json',
        url: jsonMenuURL,
        success: function(data) 
        {
        	

        	let folder = data[perfil].folder;
        	
        	jQuery.each(data[perfil].options,function (key,value) {
        		
        		let view = value.view;
        		let label = value.label;

        		console.log("Key("+key+") Value: "+view);
        		jQuery(".table_menu").append('<tr>'+
                    '<td>'+
                      '<button class="btn btn-secondary btn-block" onclick=loadPage("'+folder+'","'+view+'")><b>'+label+'</b></button>'+
                    '</td>'+
                  '</tr>')
        	});

        	jQuery(".table_menu").append('<tr>'+
            	'<td>'+
              		'<button class="btn btn-primary btn-block" onclick=cerrarSesion()><i class="fas fa-sign-out-alt"></i> <b>Salir</b></button>'+
            	'</td>'+
          	'</tr>')
        },
        error:function (error) {
        	console.log("Ha ocurrido un error al leer el archivo\n");
        	console.log(error);
        }
    });
}