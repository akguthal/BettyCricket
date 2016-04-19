		 $(document).ready(function() {
			$('#fullpage').fullpage({
				loopTop: true,
				loopBottom: true,
                anchors: ['Home', '2ndPage', '3rdPage', '4thpage','5thpage'],
                navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['Home', 'About Us', 'Why Crickets?','Cricket Milkshakes','Our Partners'],
                afterLoad: function(anchorLink, index){
                    if (anchorLink== 'Home'){
                        $('#mainlogo').fadeIn(1800,function(){
                            $('#header').fadeIn(1200);
                            $('#SquishStigma').fadeTo(1200,1);
                            $('#fp-nav').fadeTo(1200,1);
                        });
                    }
					if(anchorLink == '2ndPage'){
						$('#section2').find('h1').eq(0).fadeTo(1200,1,function(){
                            $('#section2').find('p').eq(0).fadeTo(1200,1,function(){
                                $('#section2').find('img').eq(0).fadeTo(1200,1);
                                $('#section2').find('img').eq(1).fadeTo(1200,1);
                                $('#section2').find('img').eq(2).fadeTo(1200,1);
                            });
                        });
                    }
                    
					if(anchorLink == '3rdPage'){
						$('#section3').find('h1').eq(0).fadeTo(1200,1,function(){
                            $('#section3').find('p').eq(0).fadeIn(1200,function(){
                                $('#section3').find('p').eq(1).fadeIn(1200,function(){
                                    $('#section3').find('p').eq(2).fadeIn(1200);
                                });
                            });
                        });
                    }
                    if(anchorLink == '4thPage'){
						$('#header').fadeOut(90);
                        $('video').get(0).play();
                    }
                    else 
                    {
                        if (anchorLink != 'Home'){
                            $('#header').fadeIn(90);
                        }
                    }
				}
            });  
		});