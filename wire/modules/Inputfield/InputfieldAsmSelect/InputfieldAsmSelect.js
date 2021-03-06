
function initInputfieldAsmSelect($select) {
	var id = $select.attr('id');
	if(typeof config === 'undefined' || typeof config[id] === "undefined") {
		var options = { sortable: true };
	} else {
		var options = config[id];
	}
	$select.asmSelect(options); 
}

$(document).ready(function() {
	$(".InputfieldAsmSelect select[multiple=multiple]").each(function() {
		initInputfieldAsmSelect($(this));
	}); 
	$(document).on('reloaded', '.InputfieldAsmSelect, .InputfieldPage', function() {
		var $t = $(this);
		if($t.hasClass('InputfieldPage')) $t = $t.find('.InputfieldAsmSelect');
		if(!$t.length) return;
		if($t.find('.asmList').length) return;
		$(this).find("select[multiple=multiple]").each(function() {
			initInputfieldAsmSelect($(this));
		});
	});
}); 
