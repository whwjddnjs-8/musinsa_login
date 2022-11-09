$(function () {
	$('.tab_area span').click(function () {
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
		var idx = $(this).index()
		if (idx == 0) {
			$('form.login_area').show()
			$('form.not_member_show').hide()
		} else if(idx == 1) {
			$('form.login_area').hide()
			$('form.not_member_show').show()
		}
	})

	$('.password span').click(function () {
		$(this).toggleClass('active')
		if ($(this).attr('class') == 'active') {
			$('.pwd_input').prop("type","text")
		} else {
			$('.pwd_input').prop("type","password")
		}	
	})

	$('.pwd_input').focus(function () {
		$('.password').css('border', '1px solid #999999')
	}).focusout(function () {
		$('.password').css('border', '1px solid #e5e5e5')
	})

/* 	$('.toggleMsg').hide();
	$('#chkId+label').click(function () {
		if (!$('#chkId').is(':checked')) {
			
			
		} else {
			$('.toggleMsg').hide()
		}
	}) */
	
})