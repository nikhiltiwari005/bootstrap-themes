$(function () {
	// themes 
	var themes = {
		"default": "//stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
		"cerulean" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/cerulean/bootstrap.min.css",
		"cosmo" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/cosmo/bootstrap.min.css",
		"cyborg" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/cyborg/bootstrap.min.css",
		"darkly" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/darkly/bootstrap.min.css",
		"flatly" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/flatly/bootstrap.min.css",
		"journal" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/journal/bootstrap.min.css",
		"litera" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/litera/bootstrap.min.css",
		"lumen" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/lumen/bootstrap.min.css",
		"lux" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/lux/bootstrap.min.css",
		"materia" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/materia/bootstrap.min.css",
		"minty" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/minty/bootstrap.min.css",
		"pulse" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/minty/bootstrap.min.css",
		"sandstone" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/sandstone/bootstrap.min.css",
		"simplex" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/simplex/bootstrap.min.css",
		"sketchy" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/sketchy/bootstrap.min.css",
		"solor" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/solar/bootstrap.min.css",
		"slate" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/slate/bootstrap.min.css",
		"spacelab" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/spacelab/bootstrap.min.css",
		"superhero" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/superhero/bootstrap.min.css",
		"united" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/united/bootstrap.min.css",
		"yeti" : "//stackpath.bootstrapcdn.com/bootswatch/4.1.3/yeti/bootstrap.min.css",
	}

	// showing all themes inside .drop-down class  
	$.each(themes, function (index, element) {
		$('.dropdown-menu').append('<span class="dropdown-item" href="#" data-theme="'+ index +'">'+ index +'</span>');
	});

	// adding file in head
	var themesheet = $('<link href="'+themes['default']+'" rel="stylesheet" />');
	themesheet.appendTo('head');

	// changing themes
	$('.dropdown-item').click(function(){
		themesheet.attr('href', themes[$(this).attr('data-theme')]);
	});
});