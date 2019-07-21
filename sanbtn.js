var sanbtn = sanbtn || {};

//var htmlCode = '<div style="cursor: pointer;position: fixed; bottom: 50px; left: 50px; width: 500px;"><img src="/partner/img/partner.png"><div style="border-top: 3px solid #2865d0; padding: 5px;border-right: 3px solid #2865d0; padding: 5px;border-bottom: 3px solid #2865d0; padding: 6px 12px 6px 36px; max-height: 54px; position: absolute; left: 30px; top: 0; border-radius:0 12px 12px 0; background-color: #fff; z-index: -1">	<p style="color: #386ecd; font-weight: bold; margin: 0;">Получи предложения по продвижению сайта!</p><p style="color: #386ecd; font-weight: normal; margin: 0;">Сравни условия и стоимость в один клик</p></div></div>';

sanbtn.btn = {

	options : {
		positionType : 'fixed',
		position : 'left',
		posTop : '-1',
		posLeft : 50,
		posRight : '-1',
		posBottom : 50,
		btnWidth : 500,
		btnZindex : 1,
		img : '',
		alink : '',
		textBtnTitle : '',
		textBtnDescription : '',
		textBtnColorTitle : '',
		textBtnColorDescription : '',
		colorBorder : '',
		heightBorder : 3,
		styleBorder : 'solid'
	},
	
	init: function(options){
    
		alert(this.options.posTop);
	
	}

	

}


sanbtn.btn.init();