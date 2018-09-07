
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){


Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym,e){
	parent.adobeReady = true;
	$('#Stage_welText').html(welcomeMode['step_0']['text']);
	$('#Stage_welcomeGroup').css('min-height','82px').css('background','#fff').css('box-shadow','1px 0px 2px 1px rgba(0,0,0,0.25)');
	$('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
	$('#Stage_dot_nav').css('top','auto').css('bottom','6px');
	$('#Stage_left_slider_act').attr('src','images/left_slider_deact.png');
	var lpos=welcomeMode['step_'+welcomeMove].position[0];
	var tpos=welcomeMode['step_'+welcomeMove].position[1];
	$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',126);
	$('#Stage_left_slider_act').css('cursor','default');
	$('#Stage_audio_icon_normal').attr('audio-state','pause');
	$('#Stage_audio_icon_normal').addClass('expAudio');
    $('#Stage_videoDiv').append('<video source src="../../assets/video/page-8.mp4" width="924px" height="554px" type="video/mp4"></video>');
    $('img').on('dragstart', function(event) { event.preventDefault(); });	
	$('.dot').off('click').on('click', function(){
	welcomeMove = Number($(this).index())-1;
	$('#Stage_right_slider_act').trigger('click');
	
}) 

});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym,e){this.stop();
});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19365, function(sym,e){this.stop()});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8115, function(sym,e){this.stop();
});
//Edge binding end




Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym,e){this.stop()});
//Edge binding end






      

      
Symbol.bindElementAction(compId, symbolName, "${_left_slider_act}", "click", function(sym,e){
	if(welcomeMove>0)
	{
		selectedIndex=0;
		welcomeMove--;
		$('#Stage_right_slider_act').attr('src','images/right_slider_act.png').css('cursor','pointer');
		if(welcomeMove==7)
			{
				$('#Stage_rabbit_update_1').css('background-image','url(images/rabbit_update_1.png)');
			}
		var actScr=welcomeMode['step_'+welcomeMove]['text'];
		var lpos=welcomeMode['step_'+welcomeMove].position[0];
		var tpos=welcomeMode['step_'+welcomeMove].position[1];
		var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
		$('#Stage_welText').html(actScr);
		$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
		$('#Stage_welcomeGroup').removeClass(speechBubblePos);
		$('#Stage_welcomeGroup').addClass(bubbleStyle);
		AdobeEdge.getComposition("EDGE-1817669").getStage().play(animPlayArrRev[welcomeMove]);
		speechBubblePos=bubbleStyle;
		parent.globalAudioPause();
	}
if(welcomeMove==0)
	{
		$('#Stage_left_slider_act').attr('src','images/left_slider_deact.png').css('cursor','default');
	}
		
});
      //Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_right_slider_act}", "click", function(sym,e){
	if(welcomeMove<(weltextlen-1))
	{
		selectedIndex=0;
		welcomeMove++;
		$('#Stage_left_slider_act').attr('src','images/left_slider_act.png').css('cursor','pointer');		
		var actScr=welcomeMode['step_'+welcomeMove]['text'];
		var lpos=welcomeMode['step_'+welcomeMove].position[0];
		var tpos=welcomeMode['step_'+welcomeMove].position[1];
		var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
		$('#Stage_welText').html(actScr);
		$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
		$('#Stage_welcomeGroup').removeClass(speechBubblePos);$('#Stage_welcomeGroup').addClass(bubbleStyle);
		AdobeEdge.getComposition("EDGE-1817669").getStage().play(animPlayArr[welcomeMove]);
		speechBubblePos=bubbleStyle;
		parent.globalAudioPause();
	}
	if(welcomeMove==(weltextlen-1))
	{
		$('#Stage_right_slider_act').attr('src','images/right_slider_deact.png').css('cursor','default');
	}
	});
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_audio_icon_normal}", "click", function(sym,e){
		  passText=$('#Stage_welText').text();
		  
		  parent.globalAudioName = welcomeMode['step_'+welcomeMove]['audio'].toString();	
		  parent.playGlobalAudio();
		  
		});
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         //console.log(this.getPosition());

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3652, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         $('.bubbleDivMulti::after').css('display','none');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49250, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59250, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69500, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 84500, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 86250, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         $("#Stage_travel3_txt").css({'font-weight':'normal','color':'rgba(255,255,255,1.00)'});
         $("#Stage_travel2_txt").css({'font-weight':'normal','color':'rgba(255,255,255,1.00)'});
		 $("#Stage_travel1_txt").css({'font-weight':'normal'});
		 $('#Stage_select_arrow').css('border-color','rgb(167, 169, 172) rgb(255, 203, 5) rgb(255, 203, 5)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20500, function(sym, e) {
         $("#Stage_travel3_txt").css({'font-weight':'normal','color':'rgba(0,0,0,1.00)'});
         $("#Stage_travel2_txt").css({'font-weight':'normal','color':'rgba(0,0,0,1.00)'});
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         $("#Stage_travel3_txt").css({'font-weight':'normal','color':'rgba(0,0,0,1.00)'});
         $("#Stage_travel2_txt").css({'font-weight':'normal','color':'rgba(0,0,0,1.00)'});
         $('#Stage_did_txt').html('Did you know that 68% of the fresh water on Earth is frozen? Vast ice sheets in Antarctica and Greenland hold most of the world&#x2019;s fresh water. Mountain glaciers contain much of the rest. However, with global temperatures rising, ice sheets and mountain glaciers are disappearing.');
         $('#Stage_did1_txt').css('display','block');
         $('#Stage_did2_txt').css('display','block');
         if(navigator.userAgent.indexOf('Safari') !=-1)
           {
                 $('#Stage_did2_txt').css('text-indent','139.5px');
           }
           if(navigator.userAgent.indexOf('Chrome') !=-1)
           {
                $('#Stage_did2_txt').css('text-indent','129.5px');
           }

      });
      //Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
          $("#Stage_travel9_txt").css({'font-weight':'normal','color':'rgba(255,255,255,1.00)'});
           $("#Stage_travel5_txt").css({'font-weight':'normal','color':'rgba(255,255,255,1.00)'});

      });
      //Edge binding end
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50500, function(sym, e) {
           $('video').trigger('play');
           $("#Stage_travel9_txt").css({'font-weight':'normal','color':'rgba(255,255,255,1.00)'});
           $("#Stage_travel5_txt").css({'font-weight':'normal','color':'rgba(255,255,255,1.00)'});
           if(navigator.userAgent.indexOf('Safari') !=-1)
           {
                 $("#Stage_travel9_txt").css({'left':'9px'});
                 $("#Stage_rect_9").css({'width':'111px'});
           }
           
           

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35500, function(sym, e) {
                  $('video').prop('currentTime',0);
                  $('#Stage_select_arrow').css('border-color','rgb(167, 169, 172) rgb(255, 203, 5) rgb(255, 203, 5)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         $("#Stage_travel9_txt").css({'font-weight':'normal','color':'rgba(0,0,0,1.00)'});
         $("#Stage_travel5_txt").css({'font-weight':'normal','color':'rgba(0,0,0,1.00)'});
         $("#Stage_travel1_txt").css({'font-weight':'normal','color':'rgba(255,255,255,1.00)'});
         if(navigator.userAgent.indexOf('Safari') !=-1)
           {
                 $("#Stage_travel9_txt").css({'left':'5px'});
                 $("#Stage_rect_9").css({'width':'113px'});
           }
           
           if(navigator.userAgent.indexOf('Chrome') !=-1)
           {
                 $("#Stage_travel9_txt").css('left','9px');
                 $("#Stage_rect_9").css({'width':'111px'});
           }
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 61000, function(sym, e) {
         $('#Stage_did_txt').html('Every spring, snow and ice that has accumulated during the winter starts to <b style="font-family:Roboto-Bold">melt</b>. In some regions, millions of people depend on the melting snow for drinking water and agriculture. Rising temperatures in recent years have caused less snow to accumulate from year to year, threatening the water supply of these communities.')
         $('#Stage_did2_txt').css('display','none');
         $('#Stage_did1_txt').css('display','none');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40500, function(sym, e) {
         $('#Stage_select_arrow').css('border-color','rgb(167, 169, 172) rgb(255, 255, 255) rgb(255, 255, 255)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         $('#Stage_select_arrow').css('border-color','rgb(167, 169, 172) rgb(255, 203, 5) rgb(255, 203, 5)');

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'highAnim'
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym,e){this.play(0)});
//Edge binding end
})("highAnim");
   //Edge symbol end:'highAnim'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-1817669");

$(document).ready(function(){	
	$(document).on('keyup', function(e){	
	if($('#Stage_welcomeGroup').css('opacity') == 1)		
	{
		//console.log(parent.parentTab,$('.helpwindow').css('display'))
		if(parent.parentTab == 'welcome' && parent.$('.helpwindow').css('display') == 'none')
			{			
				var ctKeyode = e.which || e.keyCode;			
				if(ctKeyode == 39)
					{
						$('#Stage_right_slider_act').trigger('click');
					}
				if(ctKeyode == 37)
					{
						$('#Stage_left_slider_act').trigger('click');
					}
			}
	}	
	})	
})