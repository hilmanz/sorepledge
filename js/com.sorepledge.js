//Inicializar
jQuery(

  function ($) {
	  
    $.Body = $('body');   
    $.Window = $(window); 
	$.Document = $(document);  
    $.Scroll = ($.browser.mozilla || $.browser.msie) ? $('html') : $.Body;
    $.Mobile = ($.Body.hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))),
    $.Unsupported = $.Body.hasClass('unsupported-browser');
	$('[data-controller]').Instantiate();
	
	//Firefox Fonts
	if($.browser.mozilla)
	{
		
	}
	
	$('.header2, .header4').bind('mouseenter', function()
	{
		$(this).stop().animate({'height': '165'}, 600, 'easeInOutQuart');
		//$(this).parent().children('.pestana').css('background-position','0 -10px').stop().animate({'top': '100'}, 600, 'easeInOutQuart');
	});
	
	$('.header3').bind('mouseenter', function()
	{
		$(this).stop().animate({'height': '135'}, 600, 'easeInOutQuart');
		//$(this).parent().children('.pestana').css('background-position','0 -10px').stop().animate({'top': '100'}, 600, 'easeInOutQuart');
	});
	
	$('.header2, .header3, .header4').bind('mouseleave', function()
	{
		$(this).stop().animate({'height': '30'}, 600, 'easeInOutQuart');
		$(this).parent().children('.pestana').stop().animate({'top': '30'}, 600, 'easeInOutQuart', function(){ $(this).parent().children('.pestana').css('background-position','0 0') });
	});
	
	$('img.lazy').lazyload({effect:'fadeIn',container:$('#logoCorona')});
	$('img.lazy').lazyload({effect:'fadeIn',container:$('#logoPaintings')});
	$('img.lazy').lazyload({effect:'fadeIn',container:$('#seccion1')});
	
	$('#menu').delay(500).animate({'left': '0'}, 1000, 'easeInOutQuart',function()
	{
		$('#containerSecciones').stop().animate({'width':$.Window.width() - 200}, 1000, 'easeInOutQuart');
		
		$('#seccion1, .header1').stop().animate({'left': '0'}, 1000, 'easeOutBack', function()
		{
			//$('img.lazy').lazyload({effect:'fadeIn',container:$('#seccion1')});
			$('img.lazy').lazyload({effect:'fadeIn',container:$('#seccion2')});
			$('img.lazy').lazyload({effect:'fadeIn',container:$('#seccion3')});
			$('img.lazy').lazyload({effect:'fadeIn',container:$('#seccion4')});
			$('img.lazy').lazyload({effect:'fadeIn',container:$('#seccion5')});
		});
		$('#seccion2, .header2').stop().animate({'left': '757'}, 1000, 'easeOutBack', function()
		{ 
			$('.pestana').css('display','block');
			$('.pestana').stop().animate({'top': '30'}, 400, 'easeInOutQuart');
			$('#socialLinks').stop().animate({'opacity': '1'}, 1000, 'easeInOutQuart');
		});
		$('#seccion3, .header3').stop().animate({'left': '1514'}, 1000, 'easeOutBack');
		$('#seccion4, .header4').stop().animate({'left': '2271'}, 1000, 'easeOutBack');
		$('#seccion5, .header5').stop().animate({'left': '3028'}, 1000, 'easeOutBack');
	});
	
	$('#menuSeccion1').delay(500).animate({'left': '14'}, 1000, 'easeInOutQuart');
	
	$('#lista1 a').bind('click',function(e)
	{
		//$('#menuSeccion1 li').removeClass('active');
		//$(this).parent().addClass('active');
		
		num = $(this).parent().attr('id-menu');
		val = 0;
		delay = 0;
		
		for( i = 1; i < num; i++ )
		{
			val += $('#'+'nosotros'+i).height(); 
		}
		
		if(num != 1) $('#seccion1').stop().animate({ scrollTop : (val + delay) }, 1000, 'easeInOutQuart');
		else $('#seccion1').stop().animate({ scrollTop : 0 }, 1000, 'easeInOutQuart');
		
		e.preventDefault();
	});
	
	$('#seccion1').bind('scroll',function(e)
	{
		//console.log( $('#seccion1').scrollTop() );
		//console.log( $('#nosotros2').offset().top );
		
		if( $('#nosotros2').offset().top < $.Window.height() / 2 && $('#nosotros3').offset().top > $.Window.height() / 2 )
		{
			//console.log( 'ya' );
			$('#menuSeccion1 li').removeClass('active');
			$('#dos').addClass('active');
		}
		// else if( $('#nosotros3').offset().top < $.Window.height() / 2 && $('#nosotros4').offset().top > $.Window.height() / 2 )
		// {
		// 	$('#menuSeccion1 li').removeClass('active');
		// 	$('#tres').addClass('active');
		// }
		// else if( $('#nosotros4').offset().top < $.Window.height() / 2 && $('#nosotros5').offset().top > $.Window.height() / 2 )
		// {
		// 	$('#menuSeccion1 li').removeClass('active');
		// 	$('#cuatro').addClass('active');
		// }
		// else if( $('#nosotros5').offset().top < $.Window.height() / 2 && $('#nosotros6').offset().top > $.Window.height() / 2 )
		// {
		// 	$('#menuSeccion1 li').removeClass('active');
		// 	$('#cinco').addClass('active');
		// }
		// else if( $('#nosotros6').offset().top < $.Window.height() / 2 && $('#nosotros7').offset().top > $.Window.height() / 2 )
		// {
		// 	$('#menuSeccion1 li').removeClass('active');
		// 	$('#seis').addClass('active');
		// }
		else if( $('#nosotros2').offset().top < $.Window.height() / 2 )
		{
			$('#menuSeccion1 li').removeClass('active');
			$('#siete').addClass('active');
		}
		else
		{
			$('#menuSeccion1 li').removeClass('active');
			$('#uno').addClass('active');
		}
		
	});
	
	$('#menuSeccion2 a').bind('click',function(e)
	{
		num = $(this).parent().attr('id-menu');
		val = 0;
		delay = 0;
		
		for( i = 1; i < num; i++ )
		{
			val += $('#'+'ilustracion'+i).height(); 
		}
		
		if(num != 1) $('#seccion2').stop().animate({ scrollTop : (val + delay) }, 1000, 'easeInOutQuart');
		else $('#seccion2').stop().animate({ scrollTop : 0 }, 1000, 'easeInOutQuart');
		
		e.preventDefault();
	});
	
	$('#seccion2').bind('scroll',function(e)
	{
		if( $('#ilustracion2').offset().top < $.Window.height() / 2 && $('#ilustracion3').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-dos').addClass('active');
			cambiar( $('#s2-dos') );
		}
		else if( $('#ilustracion3').offset().top < $.Window.height() / 2 && $('#ilustracion4').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-tres').addClass('active');
			cambiar( $('#s2-tres') );
		}
		else if( $('#ilustracion4').offset().top < $.Window.height() / 2 && $('#ilustracion5').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-cuatro').addClass('active');
			cambiar( $('#s2-cuatro') );
		}
		else if( $('#ilustracion5').offset().top < $.Window.height() / 2 && $('#ilustracion6').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-cinco').addClass('active');
			cambiar( $('#s2-cinco') );
		}
		else if( $('#ilustracion6').offset().top < $.Window.height() / 2 && $('#ilustracion7').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-seis').addClass('active');
			cambiar( $('#s2-seis') );
		}
		else if( $('#ilustracion7').offset().top < $.Window.height() / 2 && $('#ilustracion8').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-siete').addClass('active');
			cambiar( $('#s2-siete') );
		}
		else if( $('#ilustracion8').offset().top < $.Window.height() / 2 && $('#ilustracion9').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-ocho').addClass('active');
			cambiar( $('#s2-ocho') );
		}
		else if( $('#ilustracion9').offset().top < $.Window.height() / 2 && $('#ilustracion10').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-nueve').addClass('active');
			cambiar( $('#s2-nueve') );
		}
		else if( $('#ilustracion10').offset().top < $.Window.height() / 2 && $('#ilustracion11').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-diez').addClass('active');
			cambiar( $('#s2-diez') );
		}
		else if( $('#ilustracion11').offset().top < $.Window.height() / 2 && $('#ilustracion12').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-once').addClass('active');
			cambiar( $('#s2-once') );
		}
		else if( $('#ilustracion12').offset().top < $.Window.height() / 2 && $('#ilustracion13').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-doce').addClass('active');
			cambiar( $('#s2-doce') );
		}
		else if( $('#ilustracion13').offset().top < $.Window.height() / 2 )
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-devillady').addClass('active');
			cambiar( $('#s2-devillady') );
		}
		else
		{
			$('#menuSeccion2 li').removeClass('active');
			$('#s2-uno').addClass('active');
			cambiar( $('#s2-uno') );
		}
	});
	
	$('#menuSeccion3 a').bind('click',function(e)
	{
		num = $(this).parent().attr('id-menu');
		val = 0;
		delay = 0;
		
		for( i = 1; i < num; i++ )
		{
			val += $('#'+'dis'+i).height(); 
		}
		
		if(num != 1) $('#seccion3').stop().animate({ scrollTop : (val + delay) }, 1000, 'easeInOutQuart');
		else $('#seccion3').stop().animate({ scrollTop : 0 }, 1000, 'easeInOutQuart');
		
		e.preventDefault();
	});
	
	$('#seccion3').bind('scroll',function(e)
	{
		if( $('#dis2').offset().top < $.Window.height() / 2 && $('#dis3').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-dua').addClass('active');
			cambiar( $('#s3-dua') );
		}
		else if( $('#dis3').offset().top < $.Window.height() / 2 && $('#dis4').offset().top > $.Window.height() /2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-tiga').addClass('active');
			cambiar( $('#s3-tiga') );
		}
		else if( $('#dis4').offset().top < $.Window.height() / 2 && $('#dis5').offset().top > $.Window.height() /2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-empat').addClass('active');
			cambiar( $('#s3-empat') );
		}
		else if( $('#dis5').offset().top < $.Window.height() / 2 && $('#dis6').offset().top > $.Window.height() /2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-lima').addClass('active');
			cambiar( $('#s3-lima') );
		}
		else if( $('#dis6').offset().top < $.Window.height() / 2 && $('#dis7').offset().top > $.Window.height() /2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-enam').addClass('active');
			cambiar( $('#s3-enam') );
		}
		else if( $('#dis7').offset().top < $.Window.height() / 2 )/*&& $('#dis8').offset().top > $.Window.height() /2 )*/
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-tujuh').addClass('active');
			cambiar( $('#s3-tujuh') );
		}
		/*else if( $('#dis8').offset().top < $.Window.height() / 2 && $('#dis9').offset().top > $.Window.height() /2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-delapan').addClass('active');
			cambiar( $('#s3-delapan') );
		}
		else if( $('#dis9').offset().top < $.Window.height() / 2 && $('#dis10').offset().top > $.Window.height() /2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-sembilan').addClass('active');
			cambiar( $('#s3-sembilan') );
		}
		else if( $('#dis10').offset().top < $.Window.height() / 2 && $('#dis11').offset().top > $.Window.height() /2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-sepuluh').addClass('active');
			cambiar( $('#s3-sepuluh') );
		}
		else if( $('#dis11').offset().top < $.Window.height() / 2 && $('#dis12').offset().top > $.Window.height() /2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-sebelas').addClass('active');
			cambiar( $('#s3-sebelas') );
		}
		else if( $('#dis12').offset().top < $.Window.height() / 2 && $('#dis13').offset().top > $.Window.height() /2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-duabelas').addClass('active');
			cambiar( $('#s3-duabelas') );
		}
		else if( $('#dis13').offset().top < $.Window.height() / 2 && $('#dis14').offset().top > $.Window.height() /2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-tigabelas').addClass('active');
			cambiar( $('#s3-tigabelas') );
		}
		else if( $('#dis14').offset().top < $.Window.height() / 2 && $('#dis15').offset().top > $.Window.height() /2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-empatbelas').addClass('active');
			cambiar( $('#s3-empatbelas') );
		}
		else if( $('#dis15').offset().top < $.Window.height() / 2 )
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-limabelas').addClass('active');
			cambiar( $('#s3-limabelas') );
		}*/
		else
		{
			$('#menuSeccion3 li').removeClass('active');
			$('#s3-satu').addClass('active');
			cambiar( $('#s3-satu') );
		}
	});
	
	$('#menuSeccion4 a').bind('click',function(e)
	{
		num = $(this).parent().attr('id-menu');
		val = 0;
		delay = 0;
		
		for( i = 1; i < num; i++ )
		{
			val += $('#'+'inter'+i).height(); 
		}
		
		if(num != 1) $('#seccion4').stop().animate({ scrollTop : (val + delay) }, 1000, 'easeInOutQuart');
		else $('#seccion4').stop().animate({ scrollTop : 0 }, 1000, 'easeInOutQuart');
		
		e.preventDefault();
	});
	
	$('#seccion4').bind('scroll',function(e)
	{
		if( $('#inter2').offset().top < $.Window.height() / 2 && $('#inter3').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion4 li').removeClass('active');
			$('#s4-dos').addClass('active');
			cambiar( $('#s4-dos') );
		}
		else if( $('#inter3').offset().top < $.Window.height() / 2 && $('#inter4').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion4 li').removeClass('active');
			$('#s4-tres').addClass('active');
			cambiar( $('#s4-tres') );
		}
		else if( $('#inter4').offset().top < $.Window.height() / 2 && $('#inter5').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion4 li').removeClass('active');
			$('#s4-cuatro').addClass('active');
			cambiar( $('#s4-cuatro') );
		}
		else if( $('#inter5').offset().top < $.Window.height() / 2 && $('#inter6').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion4 li').removeClass('active');
			$('#s4-cinco').addClass('active');
			cambiar( $('#s4-cinco') );
		}
		else if( $('#inter6').offset().top < $.Window.height() / 2 && $('#inter7').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion4 li').removeClass('active');
			$('#s4-seis').addClass('active');
			cambiar( $('#s4-seis') );
		}
		else if( $('#inter7').offset().top < $.Window.height() / 2 && $('#inter8').offset().top > $.Window.height() / 2 )
		{
			$('#menuSeccion4 li').removeClass('active');
			$('#s4-siete').addClass('active');
			cambiar( $('#s4-siete') );
		}
		else if( $('#inter8').offset().top < $.Window.height() / 2 )
		{
			$('#menuSeccion4 li').removeClass('active');
			$('#s4-ocho').addClass('active');
			cambiar( $('#s4-ocho') );
		}
		else
		{
			$('#menuSeccion4 li').removeClass('active');
			$('#s4-uno').addClass('active');
			cambiar( $('#s4-uno') );
		}
	});
	
	$('#interactivo1').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#ff7e00', bgClass:'cs-active3' });
	$('#interactivo6').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#ff7e00', bgClass:'cs-active3' });
	$('#interactivo3').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#ff7e00', bgClass:'cs-active3' });
	$('#interactivo4, #interactivo2').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#ff7e00', bgClass:'cs-active3' });
	$('#interactivo5').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#ff7e00', bgClass:'cs-active3' });
	$('#interactivo7').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#ff7e00', bgClass:'cs-active3' });
	
	$('#diseno1').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno2').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno3').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno4').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno5').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno6').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno7').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno8').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno9').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno10').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno11').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno12').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno13').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno14').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno15').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });
	$('#diseno16').coinslider({width:757, height:500, links:false, navigation:true, spw: 1, sph: 1, effect:'straight', delay:3000, bgColor:'#00e4ff', bgClass:'cs-active4' });


	
	$('#seccion2, #seccion3, #seccion4, #seccion5').bind('click', function()
	{
		target = $(this).attr('menu-id');
		$('#'+target).trigger('click').trigger('mouseover');
	});
	
	/*$('#containerSeccion5 a').bind('mouseover',function()
	{
		if($pasoSeccion5 == $(this).attr('id-num')) return;
		
		$(this).children('img').css('top','-155px');	
	});
	
	$('#containerSeccion5 a').bind('mouseout',function()
	{
		if($pasoSeccion5 == $(this).attr('id-num')) return;
		
		$(this).children('img').css('top','0');
	});
	
	$('#containerSeccion5 a').bind('click',function(e)
	{
		if($(this).attr('id') == 'clientes')
		{
			$('#amigos-texto, #amigos-logos').stop().animate({ opacity:0 }, 600, 'easeInOutQuart', function(){ $('#amigos-texto, #amigos-logos').css('display','none'); });
			$('#clientes-texto, #clientes-logos').css('display','block');
			$('#clientes-texto, #clientes-logos').stop().animate({ opacity:1 }, 600, 'easeInOutQuart');
		}
		else
		{
			$('#amigos-texto, #amigos-logos').css('display','block');
			$('#amigos-texto, #amigos-logos').stop().animate({ opacity:1 }, 600, 'easeInOutQuart');
			$('#clientes-texto, #clientes-logos').stop().animate({ opacity:0 }, 600, 'easeInOutQuart', function(){ $('#clientes-texto, #clientes-logos').css('display','none'); });
		}
		
		$('#containerSeccion5 a img').css('top','0');
		$(this).children('img').css('top','-155px');
		$pasoSeccion5 = $(this).attr('id-num');
		
		e.preventDefault();
	});*/
	
	$('#clientes img').css('top','-155px');
	
	$('#socialLinks a').bind('mouseover', function()
	{
		$target = $(this);
		$target.children('img').css('margin-top', '-27px');
	});
	
	$('#socialLinks a').bind('mouseout', function()
	{
		$target = $(this);
		$target.children('img').css('margin-top', '0');
	});
	
	
	var g = setInterval(foot, 50);
	
  } 
  
);

var s = 0;

function foot()
{	
	$('#foot1, #foot2, #foot3, #foot4, #foot5').css('background-position', s + 'px 0');
	if(s >= 69)
	{
		s = 0;
	}
	else
	{
		s++;
	}
}

$pasoSeccion5 = 0;

function cambiar(target)
{
	if(target.parent().parent().attr('id') == 'menuSeccion2')
	{
		$('#name2').html( target.attr('nombre') );
		$('#date2').html( target.attr('fecha') );
		$('#client2').html( target.attr('cliente') );
		$('#credits2').html( target.attr('credito') );
		//$('#logoPaintings img.lazy').attr('src',target.attr('logo'));
	}
	else if(target.parent().parent().attr('id') == 'menuSeccion3')
	{
		$('#name3').html( target.attr('nombre') );
		$('#date3').html( target.attr('fecha') );
		$('#client3').html( target.attr('cliente') );
		$('#credits3').html( target.attr('credito') );
		$('#logoInteractive img.lazy').attr('src',target.attr('logo'));
	}
	else if(target.parent().parent().attr('id') == 'menuSeccion4')
	{
		$('#name4').html( target.attr('nombre') );
		$('#date4').html( target.attr('fecha') );
		$('#client4').html( target.attr('cliente') );
		$('#credits4').html( target.attr('credito') );
		$('#logoDiseno img.lazy').attr('src',target.attr('logo'));
	}
}

//Instanciacion
(function($) {
  
  $.fn.Instantiate = function(settings) {
    
    var config = {};
 
    if (settings) $.extend(config, settings);
  
      this.each(function(i) { 
		  
          var $self = $(this);
          var $controller = $self.attr('data-controller');
				  
          if ($self[$controller])
            $self[$controller]();
		
      });
      
  }
    
}) (jQuery);

//Resize
$(function()
{
	//if (!$.Mobile && !$.Unsupported)
	//{
	
		var win = $.Window;
		
		win.bind('resize',
			function()
			{
				$('#seccion1, #seccion2, #seccion3, #seccion4, #seccion5').removeOverscroll();
				$("#seccion1, #seccion2, #seccion3, #seccion4, #seccion5").css("height", win.height() - 30);
				$('#containerSecciones, #menu').css('height', win.height());
				
				if($paso1) $('#seccion1').css('left','0'); $paso1 = true;
				
				delay = win.width() - 200;
				ancho = (delay + (757 * $seccionActiva));
				$('#containerSecciones').css('width',ancho);
				
				Reset( positions() );
			}
		).trigger('resize');
		
	//}
	
});

function positions()
{
	var _arreglo = [ $('#seccion1').scrollTop(),
					 $('#seccion2').scrollTop(),
				     $('#seccion3').scrollTop(),
				     $('#seccion4').scrollTop(),
		             $('#seccion5').scrollTop() ];

	return _arreglo;	
}

$seccionActiva = 0;
$paso1 = false;
$paso2 = true;
$paso3 = true;
$paso4 = true;
$paso5 = true;

//Secciones
function Reset( _posiciones ) 
{
		
	/*var objs = [{obj:$("#seccion1"), color:'#ff0'},
				{obj:$("#seccion2"), color:'#ff0092'},
				{obj:$("#seccion3"), color:'#00e4ff'},
				{obj:$("#seccion4"), color:'#ff7e00'},
				{obj:$("#seccion5"), color:'#24ff00'}];	*/	
	
	/*for(i = 0; i < objs.length; i++)
	{
		_id = objs[i].obj;
		_color = objs[i].color;
		
		_id.overscroll({
			cancelOn: '.no-drag',
			direction: 'vertical',
			//hoverThumbs: true,
			persistThumbs: false,
			//showThumbs: false,
			thumbColor: _color,
			scrollLeft: 0,
			scrollTop: 0
		}).on('overscroll:dragstart overscroll:dragend overscroll:driftstart overscroll:driftend', function(event){
			console.log(event.type);
		});
	}*/
	
	$('#seccion1, #seccion2, #seccion3, #seccion4, #seccion5').removeClass($.browser.msie ? 'drag2' : 'drag1');
	
	if($seccionActiva != 0) $('#seccion1').css('left','0');
	
	if($seccionActiva == 0)
	{
		$('#seccion1').overscroll({
			cancelOn: '.no-drag',
			direction: 'vertical',
			//hoverThumbs: true,
			persistThumbs: false,
			//showThumbs: false,
			thumbColor: '#ff0',
			scrollLeft: 0,
			scrollTop: _posiciones[0]
		}).on('overscroll:dragstart overscroll:dragend overscroll:driftstart overscroll:driftend', function(event){
			//console.log(event.type);
		});
	}
	else if($seccionActiva == 1)
	{
		$('#seccion2').overscroll({
			cancelOn: '.no-drag',
			direction: 'vertical',
			//hoverThumbs: true,
			persistThumbs: false,
			//showThumbs: false,
			thumbColor: '#ff0092',
			scrollLeft: 0,
			scrollTop: _posiciones[1]
		}).on('overscroll:dragstart overscroll:dragend overscroll:driftstart overscroll:driftend', function(event){
			//console.log(event.type);
		});
	}
	else if($seccionActiva == 2)
	{
		$('#seccion3').overscroll({
			cancelOn: '.no-drag',
			direction: 'vertical',
			//hoverThumbs: true,
			persistThumbs: false,
			//showThumbs: false,
			thumbColor: '#ff7e00',
			scrollLeft: 0,
			scrollTop: _posiciones[2]
		}).on('overscroll:dragstart overscroll:dragend overscroll:driftstart overscroll:driftend', function(event){
			//console.log(event.type);
		});
	}
	else if($seccionActiva == 3)
	{
		$('#seccion4').overscroll({
			cancelOn: '.no-drag',
			direction: 'vertical',
			//hoverThumbs: true,
			persistThumbs: false,
			//showThumbs: false,
			thumbColor: '#00e4ff',
			scrollLeft: 0,
			scrollTop: _posiciones[3]
		}).on('overscroll:dragstart overscroll:dragend overscroll:driftstart overscroll:driftend', function(event){
			//console.log(event.type);
		});
	}
	else if($seccionActiva == 4)
	{
		$('#seccion5').overscroll({
			cancelOn: '.no-drag',
			direction: 'vertical',
			//hoverThumbs: true,
			persistThumbs: false,
			//showThumbs: false,
			thumbColor: '#24ff00',
			scrollLeft: 0,
			scrollTop: _posiciones[4]
		}).on('overscroll:dragstart overscroll:dragend overscroll:driftstart overscroll:driftend', function(event){
			//console.log(event.type);
		});
	}
	
}
		
/*$("#link").click(function(){
	   if(!seccion.data("dragging")) {
	       console.log("clicked!");
	   } else {
	       return false;
	   }
});*/

//Menu
(function($) {
	
	$.fn.Menu = function() {
		
		this.each(function(i) { 
	  
			var $self = $(this),
				$ul = $('<ul/>').appendTo($self),
				$sections = $('[data-nav]'),
				_sections = new Array(),
				$navs = new Array();
				//_active = 0;
			
			$sections.each(
          	function(i){
            	_sections.push($(this));
            	$('<li/>').appendTo($ul).DotNav({ id:$(this).attr('id'), name:$(this).attr('name'), menuId:$(this).attr('menu-id'), num:i });
          	})
			
			$('#menu1').trigger('mouseover');
				
    	});
     
    	return this;
	   
	}
	
	$.fn.DotNav = function(settings) {
     
		var config = {};
	 
		if (settings) $.extend(config, settings);
	   
		this.each(function(i) { 
		  	
			var $self = $(this),
				$a = $('<a/>'),
				$id = config.id,
				$num = config.num,
				$menuId = config.menuId;
				
				$a
              		.attr('href',"#/"+config.name.split(' ').join('_'))
					.css('background-position', $num*(-40) + 'px 0px')
              		.appendTo($self)
              		.bind('click',
                	function(e){
						$(this).unbind('mouseout');
						
						delay = $.Window.width() - 200;
						posX = (-757 * ($num)) + 200;
						ancho = (delay + (757 * $num));
						
						$('#containerSecciones').stop().animate({'left' : posX + '', 'width' : ancho + ''}, 1000, 'easeInOutQuart');
						
						if($menuId == 'menu1' && $seccionActiva != 0)
						{
							//$('img.lazy').lazyload({effect:'fadeIn',container: $('#seccion1')});
							$seccionActiva = 0;
							$('#menu2, #menu3, #menu4, #menu5').stop().animate({'top': '-30'}, 400, 'easeInOutQuart');
							$('#menu2, #menu3, #menu4, #menu5').bind('mouseout',function(e){ $(this).stop().animate({'top': '-30'}, 400, 'easeInQuart'); });
							$('#mascara1').stop().animate({'opacity': '0'}, 1000, 'easeOutQuart', function(){ $('#mascara1').css('display', 'none') });
							$('#mascara2, #mascara3, #mascara4, #mascara5').stop().css('display','block').animate({'opacity': '.95'}, 1000, 'easeOutQuart', function(){});
							$('#seccion2, #seccion3, #seccion4, #seccion5').stop().animate({scrollTop : 0}, 1200, 'easeOutQuint', function(){ $.Window.trigger('resize'); });
							
							//$('#menuSeccion2, #menuSeccion3, #menuSeccion4, #menuSeccion5').css('display','none');
							$('#menuSeccion2, #menuSeccion3, #menuSeccion4, #menuSeccion5').stop().animate({'left': '214px'}, 1000, 'easeInOutQuart', function(){ $('#menuSeccion2, #menuSeccion3, #menuSeccion4, #menuSeccion5').css('display', 'none'); });
							$('#menuSeccion1').css({display:'block', left:'-185px'});
							//$('#menuSeccion1').css({display:'block', left:'214px'});
							$('#menuSeccion1').stop().animate({'left': '14'}, 1000, 'easeInOutQuart');
						}
						else if($menuId == 'menu2' && $seccionActiva != 1)
						{
							if($seccionActiva == 0)
							{
								$posicion = -185;
								$('#menuSeccion2').css({display:'block', left:'214px'});
							}
							else
							{
								$posicion = 214;
								$('#menuSeccion2').css({display:'block', left:'-185px'});
							}
							
							//if($paso2) $('img.lazy').lazyload({effect:'fadeIn',container: $('#seccion2')}); $paso2 = false;
							$seccionActiva = 1;
							$('#menu1, #menu3, #menu4, #menu5').stop().animate({'top': '-30'}, 400, 'easeInOutQuart');
							$('#menu1, #menu3, #menu4, #menu5').bind('mouseout',function(e){ $(this).stop().animate({'top': '-30'}, 400, 'easeInQuart'); });
							$('#mascara2').stop().animate({'opacity': '0'}, 1000, 'easeOutQuart', function(){ $('#mascara2').css('display', 'none') });
							$('#mascara1, #mascara3, #mascara4, #mascara5').stop().css('display','block').animate({'opacity': '.95'}, 1000, 'easeOutQuart', function(){});
							$('#seccion1, #seccion3, #seccion4, #seccion5').stop().animate({scrollTop : 0}, 1200, 'easeOutQuint', function(){ $.Window.trigger('resize'); });
							
							//$('#menuSeccion1, #menuSeccion3, #menuSeccion4, #menuSeccion5').css('display','none');
							$('#menuSeccion1, #menuSeccion3, #menuSeccion4, #menuSeccion5').stop().animate({'left': $posicion + 'px'}, 1000, 'easeInOutQuart', function(){ $('#menuSeccion1, #menuSeccion3, #menuSeccion4, #menuSeccion5').css('display', 'none'); });
							$('#menuSeccion2').stop().animate({'left': '14'}, 1000, 'easeInOutQuart');
						}
						else if($menuId == 'menu3' && $seccionActiva != 2)
						{
							if($seccionActiva == 0 || $seccionActiva == 1)
							{
								$posicion = -185;
								$('#menuSeccion3').css({display:'block', left:'214px'});
							}
							else
							{
								$posicion = 214;
								$('#menuSeccion3').css({display:'block', left:'-185px'});
							}
							//if($paso3) $('img.lazy').lazyload({effect:'fadeIn',container: $('#seccion3')}); $paso3 = false;
							$seccionActiva = 2;
							$('#menu2, #menu1, #menu4, #menu5').stop().animate({'top': '-30'}, 400, 'easeInOutQuart');
							$('#menu2, #menu1, #menu4, #menu5').bind('mouseout',function(e){ $(this).stop().animate({'top': '-30'}, 400, 'easeInQuart'); });
							$('#mascara3').stop().animate({'opacity': '0'}, 1000, 'easeOutQuart', function(){ $('#mascara3').css('display', 'none') });
							$('#mascara2, #mascara1, #mascara4, #mascara5').stop().css('display','block').animate({'opacity': '.95'}, 1000, 'easeOutQuart', function(){});
							$('#seccion2, #seccion1, #seccion4, #seccion5').stop().animate({scrollTop : 0}, 1200, 'easeOutQuint', function(){ $.Window.trigger('resize'); });
							
							//$('#menuSeccion1, #menuSeccion2, #menuSeccion4, #menuSeccion5').css('display','none');
							$('#menuSeccion1, #menuSeccion2, #menuSeccion4, #menuSeccion5').stop().animate({'left': $posicion + 'px'}, 1000, 'easeInOutQuart', function(){ $('#menuSeccion1, #menuSeccion2, #menuSeccion4, #menuSeccion5').css('display', 'none'); });
							$('#menuSeccion3').stop().animate({'left': '14'}, 1000, 'easeInOutQuart');
						}
						else if($menuId == 'menu4' && $seccionActiva != 3)
						{
							if($seccionActiva == 0 || $seccionActiva == 1 || $seccionActiva == 2)
							{
								$posicion = -185;
								$('#menuSeccion4').css({display:'block', left:'214px'});
							}
							else
							{
								$posicion = 214;
								$('#menuSeccion4').css({display:'block', left:'-185px'});
							}
							//if($paso4) $('img.lazy').lazyload({effect:'fadeIn',container: $('#seccion4')}); $paso4 = false;
							$seccionActiva = 3;
							$('#menu2, #menu3, #menu1, #menu5').stop().animate({'top': '-30'}, 400, 'easeInOutQuart');
							$('#menu2, #menu3, #menu1, #menu5').bind('mouseout',function(e){ $(this).stop().animate({'top': '-30'}, 400, 'easeInQuart'); });
							$('#mascara4').stop().animate({'opacity': '0'}, 1000, 'easeOutQuart', function(){ $('#mascara4').css('display', 'none') });
							$('#mascara2, #mascara3, #mascara1, #mascara5').stop().css('display','block').animate({'opacity': '.95'}, 1000, 'easeOutQuart', function(){});
							$('#seccion2, #seccion3, #seccion1, #seccion5').stop().animate({scrollTop : 0}, 1200, 'easeOutQuint', function(){ $.Window.trigger('resize'); });
							
							//$('#menuSeccion1, #menuSeccion2, #menuSeccion3, #menuSeccion5').css('display','none');
							$('#menuSeccion1, #menuSeccion2, #menuSeccion3, #menuSeccion5').stop().animate({'left': $posicion + 'px'}, 1000, 'easeInOutQuart', function(){ $('#menuSeccion1, #menuSeccion2, #menuSeccion3, #menuSeccion5').css('display', 'none'); });
							$('#menuSeccion4').stop().animate({'left': '14'}, 1000, 'easeInOutQuart');
						}
						else if($menuId == 'menu5' && $seccionActiva != 4)
						{
							//if($paso5) $('img.lazy').lazyload({effect:'fadeIn',container: $('#seccion5')}); $paso5 = false;
							$seccionActiva = 4;
							$('#menu2, #menu3, #menu4, #menu1').stop().animate({'top': '-30'}, 400, 'easeInOutQuart');
							$('#menu2, #menu3, #menu4, #menu1').bind('mouseout',function(e){ $(this).stop().animate({'top': '-30'}, 400, 'easeInQuart'); });
							$('#mascara5').stop().animate({'opacity': '0'}, 1000, 'easeOutQuart', function(){ $('#mascara5').css('display', 'none') });
							$('#mascara2, #mascara3, #mascara4, #mascara1').stop().css('display','block').animate({'opacity': '.95'}, 1000, 'easeOutQuart', function(){});
							$('#seccion2, #seccion3, #seccion4, #seccion1').stop().animate({scrollTop : 0}, 1200, 'easeOutQuint', function(){ $.Window.trigger('resize'); });
							
							//$('#menuSeccion1, #menuSeccion2, #menuSeccion3, #menuSeccion4').css('display','none');
							$('#menuSeccion1, #menuSeccion2, #menuSeccion3, #menuSeccion4').stop().animate({'left': '-185px'}, 1000, 'easeInOutQuart', function(){ $('#menuSeccion1, #menuSeccion2, #menuSeccion3, #menuSeccion4').css('display', 'none'); });
							$('#menuSeccion5').css({display:'block', left:'214px'});
							$('#menuSeccion5').stop().animate({'left': '14'}, 1000, 'easeInOutQuart');
						}
						
						//$.Window.trigger('resize');
						
						e.preventDefault();
                	})
					
				$a
              		.attr('id',$menuId);
				
				$a
					.mouseover(function(e) {
						$(this).stop().animate({'top': '0'}, 400, 'easeOutQuart');
					})
					
					.mouseout(function(e) {
						$(this).stop().animate({'top': '-30'}, 400, 'easeInOutQuart');
					})
					
				if($id == 'seccion1')
				{
					$a.unbind('mouseout');
					//$('#menu1').css('background-position','0 0');
					$('#mascara1').css({opacity:0, display:'none'});
				}
           
		});
		 
		return this;
     
  	}
		
}) (jQuery, jQuery.browser);