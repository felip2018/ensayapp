function validateContactForm() {
	
	var nombre 		= jQuery("#nombre");
	var apellido 	= jQuery("#apellido");
	var correo 		= jQuery("#correo");
	var asunto 		= jQuery("#asunto");
	var mensaje 	= jQuery("#mensaje");

	var campos = [nombre,apellido,correo,asunto,mensaje];
	var j = 5;

    var emailRegex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	for (var i = 0; i < campos.length; i++) {
		
		if (campos[i].val() == "") {

			jQuery('#myModal').modal({backdrop: 'static', keyboard: false})
			jQuery(".modal-title").html('Advertencia!');
			jQuery(".modal-body").html('<div class="alert alert-danger"><p>El campo <b>'+campos[i].attr("info")+'</b> no puede quedar vacío, por favor ingrese la información solicitada.</p></div>');
			jQuery(".modal-footer").html('<button type="button" class="btn btn-primary btn-accept" data-dismiss="modal">Aceptar</button>');

			jQuery('.btn-accept').click(function () {
				campos[i].focus();
			});

			break;
		}else{
			j--;
		}

	}

	if (j==0) {

		if (emailRegex.test(correo.val())) {
			alert("Se ha enviado el mensaje de contacto!");
		}else{
			
			jQuery('#myModal').modal({backdrop: 'static', keyboard: false})
			jQuery(".modal-title").html('Advertencia!');
			jQuery(".modal-body").html('<div class="alert alert-danger"><p>El <b>correo electrónico</b> ingresado no cuenta con una estructura válida, por favor verifique.</p></div>');
			jQuery(".modal-footer").html('<button type="button" class="btn btn-primary btn-accept" data-dismiss="modal">Aceptar</button>');

			jQuery('.btn-accept').click(function () {
				correo.focus();
			});

		}

	}

}