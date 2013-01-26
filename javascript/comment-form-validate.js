/*--------------------------------------------------
		 CONTACT FORM CODE
---------------------------------------------------*/
jQuery(document).ready(function($){
	$('form#comment-form').submit(function() {
		$('form#comment-form .contact-error').remove();
		var hasError = false;
		$('form#comment-form .requiredField').each(function() {
			if(jQuery.trim($(this).val()) == '') {
            	var labelText = $(this).prev('label').text();
            	$(this).parent().append('<span class="contact-error">Requerido</span>');
            	$(this).addClass('inputError');
            	hasError = true;
            } else if($(this).hasClass('email')) {
            	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            	if(!emailReg.test(jQuery.trim($(this).val()))) {
            		var labelText = $(this).prev('label').text();
            		$(this).parent().append('<span class="contact-error">Inválido</span>');
            		$(this).addClass('inputError');
            		hasError = true;
            	}
            }
		});
		if(!hasError) {
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				$("form#comment-form").before('<div class="contact-success"><strong>¡MENSAJE ENVIADO!</strong><p>Su mensaje ha sido enviado correctamente. Nos pondremos en contacto con usted lo antes posible.</p></div>');
			});
		}


		return false;

	});
});
       