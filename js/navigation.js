function loadPage(rol,page) {
	jQuery('#container_content').load('views/' + rol+"/"+ page + '.html');
}

function hideSideMenu() {
	
	jQuery(".top_lateral_menu").removeClass("col-2");
	jQuery("#btn-hide").css("display","none");

	jQuery("#top_menu").removeClass("col-10");
	jQuery("#top_menu").addClass("col-12");

	jQuery(".lateral_menu").css("display","none");

	jQuery("#container_content").removeClass("col-md-10 col-lg-10");
	jQuery("#container_content").addClass("col-md-12 col-lg-12");

	jQuery(".footer").removeClass("col-10");
	jQuery(".footer").addClass("col-12");

	jQuery("#btn-show").css("display","block");
	//jQuery(".lateral_menu").animate({left: '-250px'});
}

function showSideMenu() {
	
	jQuery(".top_lateral_menu").addClass("col-2");
	jQuery("#btn-hide").css("display","block");

	jQuery("#top_menu").removeClass("col-12");
	jQuery("#top_menu").addClass("col-10");

	jQuery(".lateral_menu").css("display","block");

	jQuery("#container_content").removeClass("col-md-12 col-lg-12");
	jQuery("#container_content").addClass("col-md-10 col-lg-10");

	jQuery(".footer").removeClass("col-12");
	jQuery(".footer").addClass("col-10");

	jQuery("#btn-show").css("display","none");
	//jQuery(".lateral_menu").animate({left: '0px'});	
}


jQuery(".btn-close-session").click(function () {

	jQuery('#myModal').modal('show')
	jQuery(".modal-title").html('Cerrar sesión');
	jQuery(".modal-body").html('<p>¿Esta seguro de cerrar la sesión?</p>');

	jQuery(".modal-footer").html('<button type="button" class="btn btn-secondary" data-dismiss="modal">No</button><button type="button" class="btn btn-primary btn-accept">Sí, cerrar sesión</button>');

	jQuery(".btn-accept").click(function () {
		window.location.href = "login.html";
	})

})