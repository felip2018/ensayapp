function loadPage(rol,page) {
	jQuery('#container_content').load('views/' + rol+"/"+ page + '.html');
}