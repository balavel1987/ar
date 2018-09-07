var mainNavTabs = function(){
	$('.rtxt').off('click').on('click',rbuttoneve);
}
var explorTxt=false;
var exploatt=false;	 
var lastplayedAudio;	
var adobeReady = false;
function initialfun()
	{
		
		$('.workArea').hide();		
		mainNavTabs();
		$('.help1,.help2').off('click').on('click',toggleHcont).css('cursor','default');	
		$('.rtxt').attr('data-hover','none');
	    $(".button").off("click").on("click",buttonClick); 
		$(".moveNextFood").off("click").on("click",MoveToNextStep); 
		$('.screenIcon').off('click').on("click",captureScreen);	
		setBothLabelColor();
		$('.rtxt').hover(
		  function(event){
			var ctTarget = $(event.target);
			var actStatus = ctTarget.attr('data-hover');	
			if(actStatus != 'active')
				{				
					$(this).css({'color':templateHdr.textActive});					
				}
		  },
		  function(event){
			var ctTarget = $(event.target);
			var actStatus = ctTarget.attr('data-hover');	
			if(actStatus != 'active')
				{
					$(this).css({'color':templateHdr.textNormal,'box-shadow':'none','font-family':'Roboto-Bold'});
				}
		  }
		);
	//	$('.infoIcon').off('click').on("click",infoFun)
		$('.infoIcon').off('click').click(function(){
            globalAudioPause();
			//audioboolean=false;
			var audioplay=document.getElementById("audioAnim")
			audioplay.pause();
			$('.helpinner .shadowTop').hide();
			$('.helpinner .shadowBottom').css({bottom:'105px'});
			//$(".screenIcon").attr("src","assets/images/template/camera_icon_disabled.png").off("click");
			$('.helpwindow').fadeIn(300).css('display','flex');
            
			//$(this).css("cursor","default")
			//$(this).off("click")
			$('.helpBlock1').find('img').addClass('expAudio');
			$('.helpBlock2').find('.pdiv').each(function(){
				$(this).find('img:first').addClass('expAudio');
				$(this).find('img:first').attr('audio-state','pause');	
			})
			$('.expAudio').off('click').on('click', playGlobalAudio);
			$('.helpBlock1').find('.expAudio').attr('audio-state','pause');
			//alert("2")
             $('.help1').trigger('click');
			lastplayedAudio	= globalAudioName;			 
		});
		$(document).off('mousedown touchstart').on('mousedown touchstart',function(e){
			var targetClass = $(e.target).attr('class');
			if(targetClass == "helpwindow" ||targetClass == "closeIcon")
			{
				closeHelpWin()
				//$('.infoIcon').css("cursor","pointer")
				//$('.infoIcon').trigger("click")
				//alert("close")
			}
			//alert("open")
		});
		$('.chheader2').removeClass('chheader2').addClass('chheader2Act');		
		for(var i=0;i<noOfSteps;i++)
		{
			noStepArr[i]=0;
			totalStepArr[i]=0;
		}
		$('.'+Tabs[MainNavigations]).trigger('click').css('cursor','default');
		//$('.rtxt').off("click").css('cursor','default');
		$('#rtxt_1').trigger('click').css('cursor','default');
		$('.expDiv').draggable({
			start:function(){},
			containment:'.sliderContain',
			handle:'.headerDrag'
		});
	}

var closeHelpWin = function(e){
	$('.helpwindow').fadeOut(300);
	globalAudioName = lastplayedAudio;
	//audioboolean=true;
	globalAudioPause();
	if(audioboolean){
		var audioplay=document.getElementById("audioAnim")
	audioplay.play();
	}
	
}
function setBothLabelColor()
{
	$("#ch1").css({"background":labelSettings[getIdSplit]});
	$("#rightlabel_1").css({'cursor':"pointer","background":backgroundNcolor[getIdSplit][0],"color":backgroundNcolor[getIdSplit][1]});
	$.each( TopMenuText, function( index, value ) {
		
		$("#ch"+(index+1)).text(TopMenuText[index]);
	});
	$.each( rightMenuText, function( index, value ) {
		$("#rightlabel_"+(index+1)).text(rightMenuText[index]);
	});
}
function toggleHcont(e)
	{	
		selectedIndex = 0;
		defIndex = -1;
		var ctClass = Number($(e.target).attr('class').match(/\d/));
		var togNum = (ctClass == 1)?2:1;		
		if(ctClass == 2) $('.helpinner .shadowTop,.helpinner .shadowBottom').hide();
		else $('.helpinner .shadowBottom').show();
		$('.helpBlock1,.helpBlock2').css('display','none');	
		$('.help1').removeClass('lclass');
		$('.help2').removeClass('rclass');	
		$('.help1,.help2').css('background-color','rgba(0,0,0,0.7);').css('color','white').css({'cursor':'pointer'});
		$('.help'+togNum).addClass($('.help'+togNum).attr('data-class'));
		$('.helpBlock'+ctClass).css('display','block');
		$('.help'+ctClass).css('border','0px soild #000').css('color','#000').css('background-color','#fff').css({'cursor':'default'});
		globalAudioPause();	
	
	}	
	
function rbuttoneve(event)
	{	
		prevMove = -1;
		//ResetShell();
		$('.rightlabel2').css('animation','none');
		mainNavTabs();
		currentStep=0;
		$(this).off('click');
		var ctTarget = $(event.target);
		MainNavigations=$(this).attr("id").split("_")[1]-1;
		cpage = event.target.getAttribute("name");
		$('.rtxt').attr('data-hover','none').css({"cursor":"pointer"});
		$('.rtxt').css({'color':templateHdr.textNormal,'box-shadow':'none','font-family':'Roboto-Bold'})		
		ctTarget.attr('data-hover','active').css({"cursor":"default"});	
		ctTarget.css({'color':'#FFCC00','box-shadow':'0 -6px #FFCB05'/*,'font-family':'Roboto-Black'*/});
		$('.workArea').hide();
		$('#'+cpage).show();		
		$('[name = submitconfirmation]').removeClass('subbtnActive').addClass('subbtn');
		parentTab = $(this).html().toLowerCase(); 
		lightString = '';
		activeCount = 0;
		process=false;
		$(".trackshow").hide();
		$("#travel_act_1").off("click").css({"background":"#6d6e71","color":"#fff","cursor":"default"})
			$("#act_video,#video").css({"opacity":"0"}) 
			$(".expDiv").show()
			//alert($(this).html().toLowerCase())
		if($(this).html().toLowerCase() == 'explore')
			{
				activeIcon="explore";
				$("#rightlabel_1").trigger("click");
				$("#ch1").trigger("click");
				$(".actarr").hide()
				$(".option1,.option1text").html("Glacier")
		 $(".cheader2").attr("data-travel","Glacier")
		  $(".travel,.act_travel").css({"background":"rgb(109, 110, 113)","color":"#fff","opacity":"1"}).off("click")
		$(".expDiv").css("left","-280px");
			audioPlay();
		    hilightbOj();
			//activitySlideDiv()
			//$('.expChild').css('height',"387px");
//initFlag=false;
			//loadVar=false;
			//explorTxt=false;
			exploatt=true;
			
		  //AudioText=window["SlideContents_explore"][FindState[getIdSplit]][FindLevel[StateCheck]][0]["AudioText"][0][0];
		  $("#travel_1,#travel_2").css({"color":"#000"})
		  $(".screenIcon, .expDiv").css('display','block')
		  if(adobeReady) restartWelcome();
			$('.activeSlider').off('click').on('click',activitySlideDiv).css({"cursor":"pointer"});
			SliderOkClick("open")
			$(".travel").show();
				$('.screenIcon').off('click').on("click",captureScreen);
	$(".screenIcon").attr("src","assets/images/template/camera_icon.png").css({"cursor":"pointer"})
	     $(".actArrow3").removeClass("arrow3Act")
		  $(".actArrow9").removeClass("arrow4Act")
	$(".actArrow3").attr("src","assets/images/activity/activtArr_3.png")
	$(".actArrow9").attr("src","assets/images/activity/activtArr_9.png")
			}
		if($(this).html().toLowerCase() == 'activity')
			{
				//initExp()
				activeIcon="activity";
				$("#rightlabel_1").trigger("click");
				$("#ch1").trigger("click");
				$(".expDiv").css("left","-280px");
				//loadVar=true;
				//initFlag=true;
				//explorTxt=true;
			$(".option1,.option1text").html("Glacier")
		 $(".cheader2").attr("data-travel","Glacier")
		 exploatt=false;
		 $(".act_travel").show();
		 $(".screenIcon, .expDiv").css('display','block')
		 restartWelcome();
		 $('.activeSlider').off('click').on('click',activitySlideDiv);
		 activitySlideDiv()
		 
		 $(".act_travel").css({"background":"#6d6e71","color":"white"})
		 $("#travel_act_0").css({"background":"#323232"})
		 $(".act_close_anim").hide();
		 resetArray();
           $(".screenIcon").off("click").css("cursor","default")
		    $('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
			}
		//	SliderOkClick("open")
		if($(this).html().toLowerCase() == 'welcome')			
			{
				 exploatt=false;
				 $(".screenIcon, .expDiv").css('display','none');
				 $(".expDiv").hide()
			}
			$(".option2").html("Select a location on the map").css({"font-weight":"normal"})
			$("#act_opt2").css({"font-weight":"normal","font-family":"Roboto-Regular"})
			$(".option3,.process,.act_process").hide()
			$(".actarr").hide()
			
		//audioPlay()
			//sliderFunCalled = false;

	/* 		var slidetimeout=setTimeout(function(){
				SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
				clearTimeout(slidetimeout);
				//$(".expDiv").css("height","90px");
			},1); */
			//$(".expDiv").css("height","90px");
			//$(".activeSlider").css("transform","rotate(180deg)");
			
			TabsStateRightAndTop(topNSideMenu[MainNavigations][0],topNSideMenu[MainNavigations][1],topNSideMenu[MainNavigations][2]);
			//
			sliderNavigationFun();
			audioIndex=0;
		    stepIndex=0;
		    currentStep=0
			$(".act_tracktxt,.arrtxt,.tracktxt,.arr,.act_tracktxt,#act_track_2,#act_track_3,#act_track_1,.act_arrtxt,.act_arr ").hide()
			$("#track_0").css({"display":"block","background":"#323232"})
		 $(".option1,.option1text").html("Glacier")
		 $(".cheader2").attr("data-travel","Glacier")
		       audioIndex=0;
				stepIndex=0;
				currentStep=0;
				$(".highlight,.highlight1,.highligh2,.pop_hide,.close_anim").hide();
				audCount=0;
				trackArr=[]
					clearInterval(timer1)
						clearInterval(timer)
						$("#travel_0").css({"background":"rgb(50, 50, 50)"})
						corrArr.length=0;
						 $(".process").html("Select the appropriate process").css({"cursor":"pointer","font-weight":"normal","font-family":"Roboto-Regular"})
						 $(".option2").css({"cursor":"pointer","font-weight":"normal","font-family":"Roboto-Regular"})
						 globalAudioPause();
						 audioboolean=false;
						  actaudioboolean=false;
						 $(".popup,.popup_hide,.highlight2").hide();
						 $(".arr").removeClass("show")
						 $(".act_val,.val").removeClass("wrongIcon").css({"color":"#000"})
						 $(".process,.act_procss").text("Select the appropriate process")
						 $(".act_mySelect,.mySelect,.act_close_anim").hide();
						 $("#act_rightArrow2").css({"transform":"rotate(0deg)"})
						  var audioplayc=document.getElementById("audiocont")
				audioplayc.pause()
			$(".expDivIcon1").removeClass("play")
				audioplayc.currentTime=0;
				 var audioplay3=document.getElementById("actaudioAnim")
				audioplay3.pause()
				audioplay3.currentTime=0;
				 var audioplay4=document.getElementById("audioAnim")
				audioplay4.pause()
				audioplay4.currentTime=0;
				$(".track,.act_track").show()
				$(".act_track").off("click").css({"background":"rgb(109, 110, 113)","cursor":"default","color":"white"})
			okFunt=false;			
            viewFlag=false;	
			wrongFlg=false;
			$(".act_tracktxt").css({"color":"white"})
			$(".track,.act_track").text("View My Progress")	
           arrives=[] ;		
		   capture=false;
 //$(".actArrow3").removeClass("arrow3Act")
//$(".actArrow3").removeClass("arrow3Act")
//$(".actArrow9").removeClass("arrow4Act") 
wrongHil=false;
	}

function ResetShell()
	{
		currentStep='welcome';
		wrongResPos=0;
		LengthFind=0;
		audioIndex=0;
		stepIndex=0;
		getIdSplit=0;
		StateCheck=0;
		FeedBack="Step";
		headerlabel = 'monterey';
		exoploreCtBubble = 'anchovy0';
		imageName="monterey";
		for(var i=0;i<noOfSteps;i++)
		{
			noStepArr[i]=0;
			totalStepArr[i]=0;
		}
		
		//audioPlay();
/* 		var slidetimeout=setTimeout(function(){
				SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
				clearTimeout(slidetimeout);
			},100); */
			$(".activeSlider").css("transform","rotate(180deg)");
			$(".expDiv").css("left","-280px");
			TabsStateRightAndTop(topNSideMenu[MainNavigations][0],topNSideMenu[MainNavigations][1],topNSideMenu[MainNavigations][2]);
			//if(parseInt($('.expDiv').css("left")) < 0){	var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	},1000);}
	}
	
	
function extractBorder(element) 
	{
		// Extracts element border.
		var border = {
			rect: element.getBoundingClientRect(),
			width: parseFloat(element.style.borderWidth),
			style: element.style.borderStyle,
			color: element.style.borderColor,
			original: element.style.border,
			element: element
		};	
		// Clears original border.
		element.style.borderColor = "transparent";
		return border;
	}
  function extractBorders(element)
	{
		var borders = [];
		// Extracts the rect from the element itself.
		if (element.style.border) {
			borders.push(extractBorder(element));
		}
		// Extracts rect from children.
		
		$(element).find("*").each(function(index, child) {
			if (child.style.border) {
				borders.push(extractBorder(child));
			}
		});
		return borders;
	}
		
function drawBorder(canvas, border, parentRect)
	{
		// Retrieves context.
		var ctx = canvas.getContext("2d");
		// Checks border style.
		if (border.style === "dashed") {
			ctx.setLineDash([3]);
			console.log("Welcome")
		} else if (border.style === "dotted") {
			ctx.setLineDash([border.width]);
		}
		
		// Calculates border edges.
		var left = border.rect.left + 0.5 - parentRect.left;
		var right = border.rect.right - 0.5 - parentRect.left;
		var top = border.rect.top + 0.5 - parentRect.top;
		var bottom = border.rect.bottom - 0.5 - parentRect.top;
		
		// Draws border.
		ctx.beginPath();
		ctx.moveTo(left, top);
		ctx.lineTo(right, top);
		ctx.lineTo(right, bottom);
		ctx.lineTo(left, bottom);
		ctx.lineTo(left, top);
		ctx.strokeStyle = border.color;
		ctx.lineWidth = border.width;
		//ctx.stroke();
		
		// Restores element original border.
		border.element.style.border = border.original;
	}
	
function tocanvas(element, options) 
	{
		// Extracts parent relative position.
		var parentRect = element[0].getBoundingClientRect();

		// Extracts elements borders.
		var borders = extractBorders(element[0]);

		// Keeps original onrendered option.
		var onrendered = options.onrendered;

		// Intercepts onrendered callback.
		options.onrendered = function(canvas) {
		// Draws borders.
		for (var i = 0; i < borders.length; i++) drawBorder(canvas, borders[i], parentRect);

		// Calls original callback.
		if (onrendered) onrendered(canvas);
		}

		// Calls html2canvas.
		html2canvas($(".screenArea"), options);
	}
	var capture=false;
function captureScreen()
	{ 
		/* tocanvas($(".screenArea"), {
			onrendered: function (canvas) {
				saveAs(canvas.toDataURL(), 'canvas.png');
			}
		}); */
		
		if(currentStep=="Groundwatertrack"){
			
			currentStep="Snapshotclick";
		    rightAttemptFun();
			SliderOkClick("close");
				globalAudioPause();
			capture=true;	
		}
		if(capture){
			setTimeout(function(){
		html2canvas(document.querySelector(".screenArea")).then(canvas => {
	   saveAs(canvas.toDataURL(), 'Travel the Water Cycle.png');
});
			},1000);
			$(".screenIcon").off("click").css({"cursor":"default"});
			$(".option2").off("click").css({"cursor":"default"});
	}
	else{
		
		
		html2canvas(document.querySelector(".screenArea")).then(canvas => {
	   saveAs(canvas.toDataURL(), 'Travel the Water Cycle.png');
});
	}

	}
	
function saveAs(uri, filename)
	{
		var link = document.createElement('a');
		if (typeof link.download === 'string')
			{
			  link.href = uri;
			  link.download = filename;

			  //Firefox requires the link to be in the body
			  document.body.appendChild(link);

			  //simulate click
			  link.click();

			  //remove the link when done
			  document.body.removeChild(link);
			}
		else
			{
			  window.open(uri);
			}
	}

function callEndFun()
	{	

		globalAudioPause();	
			
	}
	
function restartWelcome()
    {
        document.getElementById("myFrame").contentWindow.welcomeMove = 0;	
        var childWindow = $('iframe').contents();
        childWindow.find('#Stage_welText').html(document.getElementById("myFrame").contentWindow.welcomeMode['step_0']['text']);	
        childWindow.find('#Stage_welcomeGroup').css('background','#fff').css('box-shadow','2px 2px 2px 0px rgba(0,0,0,0.25)');
        childWindow.find('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
        childWindow.find('#Stage_left_slider_act').attr('src','images/left_slider_deact.png');
        childWindow.find('#Stage_right_slider_act').attr('src','images/right_slider_act.png').css('cursor','pointer');
        var lpos = 274;	
        var tpos = 226;	
        childWindow.find('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',126);
        childWindow.find('#Stage_left_slider_act').css('cursor','default');
        childWindow.find('#Stage_audio_icon_normal').attr('audio-state','pause');
        childWindow.find('#Stage_audio_icon_normal').addClass('expAudio');				
        childWindow.find('#Stage_welcomeGroup').removeClass(document.getElementById("myFrame").contentWindow.speechBubblePos);
        document.getElementById("myFrame").contentWindow.AdobeEdge.getComposition("EDGE-1817669").getStage().play(0);
    }