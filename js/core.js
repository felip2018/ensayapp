jQuery(".btn-login").click(function () {
	
	var correo = jQuery("#correo");
	var clave = jQuery("#clave");

	if (correo.val() != "") {

		if (clave.val() != "") {

			if (correo.val() == "admin@hotmail.com" &&
				clave.val() == "admin") {
				window.location.href = "admin_panel.html";
			}

			if (correo.val() == "musician@hotmail.com" &&
				clave.val() == "musician") {
				window.location.href = "musician_panel.html";
			}

			if (correo.val() == "auxiliary@hotmail.com" &&
				clave.val() == "auxiliary") {
				window.location.href = "auxiliary_panel.html";
			}			

		}else{
			jQuery('#myModal').modal('show')
			jQuery(".modal-title").html('Advertencia!');
			jQuery(".modal-body").html('<div class="alert alert-warning"><p>Ingrese la contraseña para iniciar sesión.</p></div>');
			jQuery(".modal-footer").html('<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button><button type="button" class="btn btn-primary">Registrarse</button>');
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


