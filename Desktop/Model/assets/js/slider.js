var sliderFunCalled = false;
var loadVar=false;
var currentStep=0;
var globalAudioName ;
function audioPlay()
	{	

		if(SlideStatusArr[MainNavigations][2] == 'sliderhide') return;
		globalAudioPause();
	
   /*  if(!loadVar && activeIcon=="explore"){	
		AudioText=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][
	audioIndex][stepIndex];
	loadVar=true;
	}
	if(exploatt && activeIcon=="explore")
	{
		AudioText=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][
	audioIndex][stepIndex];
	exploatt=false;

	} */
	
	if(activeIcon=="activity"){
			AudioText=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex][stepIndex];
			//globalAudioName=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["audio"][audioIndex][stepIndex];
	}
		if(typeof AudioText == 'undefined'){
			if(parseInt($('.expDiv').css('left'))>= 0 ) SliderOkClick("close"); 
			$('.activeSlider').off('click').css('cursor','default');
		}
		else {
			$('.activeSlider').off('click').on("click",activitySlideDiv).css('cursor','pointer');
			if(parseInt($('.expDiv').css('left')) < 0 ) SliderOkClick("open"); 
		}
		 
		LengthFind=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex].length-1;
		currentIndex=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex].indexOf(AudioText);
		slideImg=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["Image"];
		if(currentStep =='digend' && FeedBack=='right'){AudioText=AudioText.replace('[X]',count);}
		$(".expDiv .expPara").html(AudioText);
		
	if(!exploatt && activeIcon=="explore" && !process)
		{
			
			$(".expDiv .expPara").html("Sixty-eight percent of the fresh water on Earth is frozen. Vast ice sheets in Antarctica and Greenland hold most of the world’s fresh water. Mountain glaciers contain much of the rest. However, with global temperatures rising, ice sheets and mountain glaciers are disappearing.<br/><br/><span class='spanbold'>DID YOU KNOW?</span> Glacier National Park in Montana had over 100 different glaciers in the early 1900s. Today, it has fewer than 30, and those have shrunk by more than half their size.");
			globalAudioName="vlwace_01"
			globalAudioNamepre="Sixty-eight percent of the fresh water on Earth is frozen. Vast ice sheets in Antarctica and Greenland hold most of the world’s fresh water. Mountain glaciers contain much of the rest. However, with global temperatures rising, ice sheets and mountain glaciers are disappearing.<br/><br/><span class='spanbold'>DID YOU KNOW?</span> Glacier National Park in Montana had over 100 different glaciers in the early 1900s. Today, it has fewer than 30, and those have shrunk by more than half their size."
			//exploatt=false
			AudioText="Sixty-eight percent of the fresh water on Earth is frozen. Vast ice sheets in Antarctica and Greenland hold most of the world’s fresh water. Mountain glaciers contain much of the rest. However, with global temperatures rising, ice sheets and mountain glaciers are disappearing.<br/><br/><span class='spanbold'>DID YOU KNOW?</span> Glacier National Park in Montana had over 100 different glaciers in the early 1900s. Today, it has fewer than 30, and those have shrunk by more than half their size."
		//	globalAudioName=globalAudioName2
			
		}
		if(activeIcon!="explore"){
		globalAudioName=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["audio"][audioIndex][stepIndex];
		
		}
		if(slideImg!="")$(".expimgcont img").attr("src",imgBaseAct+slideImg);
		if(!sliderFunCalled){
			//console.log($('.expChild').css('height'))			
				$('.expChild').css('height','auto');			
				SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);

		}
		
		sliderNavigationFun();
		
	}

function MoveToNextStep()
	{
		
		
		if(FeedBack=="wrong")
			{
				//SliderOkClick("close");
				return;
			}
		if(audioIndex==0 && stepIndex == LengthFind)
			{
				audioIndex=0;
				stepIndex=0;
				//SliderOkClick("close");
				return;
			}
		if(stepIndex!=LengthFind)
			{
				stepIndex++;			
				audioPlay();
				return;
			}
		if(audioIndex==1 && stepIndex==LengthFind)
			{	
				audioIndex=0;
				stepIndex=0;
				//SliderOkClick("close");
				return;
			}
			FeedBack="step";
			
	}

function rightAttemptFun()
	{  
		
		
		sliderFunCalled = false;
		//totalStepArr[currentStep]=1;
		FeedBack="right";
		if(cpage == 'activity')
		{
			$(".highlight").hide();
			$('.timebackhilight').show();
			dropedElem = false;
			if(parseInt($('.expDiv').css("left")) < 0){SliderOkClick("open");}
		}
			
		/* if(cpage == 'explore')  currentStep++; */
		audioIndex=1;			
		stepIndex=0;
		audioPlay();

		//setSliderTop()
		
	}
 
 function wrongAttemptFun(ElemLevel)
	{
		sliderFunCalled = false;
		$('.activeSlider').off('click').on('click',activitySlideDiv);
		noStepArr[currentStep]++;
		FeedBack="wrong";
		if(ElemLevel=="drop")
		{
			$('#expimgcont').hide();
			AudioText=incorrectText[wrongResPos]; 
			$(".expDiv .expPara").html(AudioText);
		
		}
		else if(ElemLevel=="stop")
		{
			audioIndex=2;
			stepIndex=0;
			audioPlay();
		}
		
		$('.navSliderBtn').hide();
		  if(cpage == 'activity' && getIdSplit == 1)
		{
			if(parseInt($(".expDiv").css("top")) < 255)
			$(".expDiv").css("top","255px")
		}  
		setSliderTop();
		if(parseInt($('.expDiv').css("left")) < 0){SliderOkClick("open");}
	}
	
function toggleExpTabs()
	{
		StateCheck=$(this).attr("id").split("_")[1]-1;
		$(".labelRight").removeClass('labelArrow').css({'cursor':"pointer","background":backgroundNcolor[2][0],"color":backgroundNcolor[2][1]});
		$(this).addClass("labelArrow").css({'cursor':"pointer","background":backgroundNcolor[getIdSplit][0],"color":backgroundNcolor[getIdSplit][1]});
		audioPlay();
		//activityFunction(cpage);
	}
	
	function setSliderTop()
	{
		if(parseInt($('.expDiv').height()+parseInt($('.expDiv').css('top'))) >= 530){
				$('.expDiv').css({top:parseInt(520-($('.expDiv').height())),position:'relative'});	
				if(cpage == 'activity') {				
					$('.expDiv').css({top:500-$('.expDiv').height()+'px'});
				}
			}
	}

function SliderFunc(ImgStatus,okStatus,sliderStatus)
{
	//sliderFunCalled = true;
	
	if(sliderStatus=="slidershow")
	{
		
		$(".expDiv").css("display","block");
		if((ImgStatus=="imgshow" && slideImg!="") || slideImg!=""){$(".expimgcont").css("display","block");$('.audioTextDiv').css('margin-top','-11px');}
		else if((ImgStatus=="imgshow" && slideImg!="")  || slideImg==""){$(".expimgcont").css("display","none");$('.audioTextDiv').css('margin-top','-12px');}
		if(FeedBack=='wrong'){$(".expimgcont").css("display","none");$('.audioTextDiv').css('margin-top','-12px');}
		if(okStatus=="okshow"){$(".moveNextFood").css("display","block");}
		else if(okStatus=="okhide"){$(".moveNextFood").css("display","none");}	
		scrollApplying();
		//console.log('::' +parseInt($('.expDiv').height()+parseInt($('.expDiv').css('top'))))
		//------------Slider Bottom set when text changes-------//
		if(parseInt($('.expDiv').height()+parseInt($('.expDiv').css('top'))) >= 530 && !loadVar){
			$('.expDiv').animate({top:parseInt(530-$('.expDiv').height())+'px'});
			//alert(parseInt(550-$('.expDiv').height()))
			
		}
		
	}
	else
	{
		//$('.expDiv').css({"top":"180px"})	
		 $(".expDiv,.EventNotAllowed").css("display","none");
	}
}
var initFlag = false;
var scrollApplying = function(){				
	$('.expDiv .shadowTop,.expDiv .shadowBottom').remove();
	$('.expChild').mCustomScrollbar('destroy');
	$(".expChild").css({'overflow-y':'hidden'});	
	if(!initFlag) {	$('.expChild').css('height',387); initFlag = true;}
	if($(".expDiv").height() > 355){
	
		$(".expDiv").css({    paddingTop: '0px'});
		$(".expDiv").css('height',350);
		$('.expChild').css('height',310);
		scrollApplyChoose('expDiv','expChild');
		sliderFunCalled = false;
		//alert("2")
		if(parseInt($('.expDiv').css("left")) < 0){		var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	},0);}
	}
	else
	{		
		$(".expDiv").css({    paddingTop: '12px'});
		$('.expChild').mCustomScrollbar('destroy');
		if(parseInt($('.expDiv').css("left")) < 0){		var OpenTime = setTimeout(function(){clearTimeout(OpenTime);SliderOkClick("open");	},0);}
	}
}

function scrollApplyChoose(parent,child)
{	
	$('.'+parent).append('<div class="shadowTop"></div><div class="shadowBottom"></div>');
	$('.shadowTop,.shadowBottom').css('display','none');
	$('.shadowBottom').css('display','block');	
/* 		if(activitytag)	{		
		$('.shadowBottom').css({bottom:'44px'});
	}
	else */{		
		if(parent == 'helpinner') $('.helpinner .shadowBottom').css({bottom:'105px'});
		else $('.shadowBottom').css({bottom:'0px'});
	}		
	
	$("."+child).css({'overflow-y':'auto'});
	$("."+child).mCustomScrollbar({theme:"3d-thick",scrollInertia: 800,
	live: true,
	callbacks:{
		onScrollStart:function(){
		  if(parent == 'helpinner') $('.helpinner .shadowTop,.helpinner .shadowBottom').css('display','block');
		  else $('.shadowTop,.shadowBottom').css('display','block');
		},
		onTotalScroll:function(){
			if(parent == 'helpinner') {
				$('.helpinner .shadowBottom').css('display','none'); 
				$('.helpinner .shadowTop').css('display','block');
				}
			else {
				$('.shadowBottom').css('display','none'); 
				$('.shadowTop').css('display','block');
			}
		},
		onScroll:function(){
		  if(this.mcs.top == 0)
			{
				if(parent == 'helpinner') {
					$('.helpinner .shadowBottom').css('display','block'); 
					$('.helpinner .shadowTop').css('display','none');
					}
				else {
					$('.shadowBottom').css('display','block'); 
					$('.shadowTop').css('display','none');
				}
				/* if(activitytag)	{		
					$('.shadowBottom').css({bottom:'44px'});
				}
				else */{
					if(parent == 'helpinner') $('.helpinner .shadowBottom').css({bottom:'105px'});
					else $('.shadowBottom').css({bottom:'0px'});					
				}
			}
		}
	}});
	$("."+child).mCustomScrollbar("scrollTo",[0,0]);
	
	scrollApply()
}
	
var scrollApply = function()
	{	
		$('.mCSB_draggerContainer').css({boxShadow:'none'}).css('background','#fff').css('border','1px solid #898a8c').css('border-radius','0px');
		$('.mCSB_dragger_bar').css('margin','0px').css('background','rgba(0, 0, 0, 0.5)').css({boxShadow:'none'}).css('border-radius','0px');		
		$('.mCSB_draggerContainer').css({border:'1px solid rgba(0,0,0,0.7)'});
		$('.mCSB_dragger_bar').css({'left':'0px',"width":"100%"});
		//$('.mCSB_container').css({height:'100%'});
		$('.mCSB_dragger').css({minHeight:'94px'});
		$('.mCSB_scrollTools').css('z-index',10);
		$('.expFoodBar').css('display','flex');
		/* if($('.PreBtnSlider').css('display') == 'none'){$('.expFoodBar').css('display','none')} */
	}	
	
var buttonClick = function(e)
{ 
	buttonId = $(this).attr('id');
	getIdSplit=buttonId.split("ch")[1]-1;
	activityFunction(cpage);
	headerTabs($(this));
	//audioPlay();
}

function SliderOkClick(OkClickState)
{
	//if(wrongFlg) return false;
	//
	if(OkClickState=="open")
	{
		//if(wrongFlg) return ;
		rotateValue=0;
		angleRot=0;
		if(MainNavigations==2){/* $(".EventNotAllowed").show(); */}
		else{$(".EventNotAllowed").hide();}
	}
	else if(OkClickState=="close")
	{
		rotateValue=-280;
		angleRot=180;
		$(".EventNotAllowed").hide();
		globalAudioPause();
	}
	slideAnimate();
	
}
	
function activitySlideDiv()
	{		
		bgplay()
		wrongFlg=false		
		if(parseInt($('.expDiv').css('left'))>=0) globalAudioPause();
		slideAnimate();
	}

function slideAnimate()
	{
		console.log("call")
		if(wrongFlg){
			$('.expDiv').css('left','-280px');
			angleRot = 180;
			$('.activeSlider').myMethod(angleRot);		
		
		}
		else{
		rotateValue = ($('.expDiv').position().left >= 0)?-280:0;				
		//angleRot = (rotateValue >= 0)?0:180;
		$('.expDiv').stop().animate({left:rotateValue},800,function(){
            angleRot = (rotateValue >= 0)?0:180;		
			$('.activeSlider').myMethod(angleRot);		
		});
		}
		
	}

$.fn.extend({
		myMethod: function(angle){$(this).css('transform','rotate('+(angle)+'deg)')}
	});	

function TabsStateRightAndTop(topMenu,rightMenu,baseImg)
{
	if(topMenu=="topmenushow"){
		$(".highlightTab").show();
		$(".workArea, .EventNotAllowed").css({"top":"34px","height":"554px"});
		$(".commonWorkArea").css({"height":"554px"});
	}
	else if(topMenu=="topmenuhide"){
		$(".highlightTab").hide();
		$(".workArea, .EventNotAllowed,.commonWorkArea").css({"top":"0px","height":"588px"});
		$(".commonWorkArea").css({"height":"588px"});
	}
	if(rightMenu=="rightmenushow"){$(".Modes").show();}
	else if(rightMenu=="rightmenuhide"){$(".Modes").hide();}
	if(baseImg=="baseimgshow"){$(".baseImg").show();}
	else if(baseImg=="baseimghide"){$(".baseImg").hide();}
}
var currentIndex=0;

function nxtNavigationFun()
{
	globalAudioPause();
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	if(LengthFind > currentIndex){stepIndex++; $('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);}
	else{ $('.nxtBtnSlider').off('click');}
	audioPlay();
	sliderNavigationFun();
	if(currentStep=="SnowmeltAnimEnd" || currentStep=="RiversAnimEnd")
	{
		
		actcloseAnim()
		if(currentStep=="RiversAnimEnd"){
		$(".act_track").off("click").css({"background":"rgb(109, 110, 113)","cursor":"default","color":"white"})
			}
	}
	if(currentStep=="Snapshotclick")
	{
	
		$(".trackshow").hide();
			act_resetFun();
				$(".act_travel").show();
	$(".act_travel").css({"background":"#6d6e71"})
        $("#travel_act_" + obj).css({
            "background": "#323232",
            "color": "#fff"
        })
			currentStep=nextlocation1+'reset';
		         rightAttemptFun();
				 $(".highlight2").hide();
				$(".act_travel").css({"opacity":"1"}) 
				$(".act_track").off("click").css({"background":"rgb(109, 110, 113)","cursor":"default","color":"white"})
				
		
	}
	
//	alert(currentStep+":::::"+stepIndex)
  /*   if(currentStep=="Groundwaterreset" && stepIndex==1){
		
			$("#rtxt_2").trigger("click")
		
	}   */	
}

function preNavigationFun()
{
	globalAudioPause();
	
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	if(stepIndex > 0){stepIndex--;$('.PreBtnSlider').off('click').on("click",preNavigationFun);}
	else {$('.PreBtnSlider').off('click');}
	audioPlay();
	sliderNavigationFun();
}

function sliderNavigationFun()
{
	 
	 audioAreafn();

	 
	if(LengthFind == 0 || LengthFind == -1)
	{
		$('.navSliderBtn,.expFoodBar').hide();
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default',pointerEvents:'none'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default',pointerEvents:'none'})
		
		//alert("2")
		return;
	}
	if(LengthFind == currentIndex)
	{
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer',pointerEvents:'auto'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default',pointerEvents:'none'})
		$('.navSliderBtn,.expFoodBar').show();
		return;
	}
	if(currentIndex == 0 && LengthFind !=0)
	{	
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default',pointerEvents:'none'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer',pointerEvents:'auto'})
		$('.navSliderBtn,.expFoodBar').show();
		return;
	}
	if( currentIndex > 0 && LengthFind !=0 )
	{
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer',pointerEvents:'auto'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer',pointerEvents:'auto'})
		$('.navSliderBtn,.expFoodBar').show();
		return;
	}
	

	
}