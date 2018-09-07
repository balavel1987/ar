var wcount = 0;
var spanLen = 0;
var audioElem = document.getElementById('myAudio');
var startCount = 0;
var ctIndexThis = 0;
var locations = ["Glacier", "Snowmelt", "Atmosphere", "Rivers", "Animals", "Groundwater", "Plants", "Ocean", "Clouds"];
var globalAudioNamepre
var globalAudioName2
var viewFlag=false;
var travel = [{
        'Glacier': [	
            ["Snowmelt", "Atmosphere"],
            ["Melting", "Sublimation"],
            [1, 2],
            [1, 2],
            ["page-8", "Page-14"],
			[0,0]

        ]
    },
    {
        "Snowmelt": [
            ["Groundwater", "Rivers"],
            ["Infiltration", "Surface runoff"],
            [5, 3],
            [3, 4],
            ["Page-20", "Page-21"],
			[0,0]

        ]
    },
    {
        "Atmosphere": [
            ["Clouds"],
            ["Condensation"],
            [8],
            [5],
            ["Page-19"],
			[0]
        ]
    },
    {
        "Rivers": [
            ["Atmosphere", "Ocean", "Animals", "Groundwater"],
            ["Evaporation", "Surface runoff", "Uptake", "Infiltration"],
            [2, 7, 4, 5],
            [6, 7, 8, 9],
            ["page-15", "Page-17", "Page-13", "Page-16"],
			[0,0,0,0]
        ]
    },
    {
        "Animals": [
            ["Atmosphere"],
            ["Respiration"],
            [2],
            [10],
            ["Page-29"],
			[0]
        ]
    },
    {
        "Groundwater": [
            ["Rivers", "Plants", "Ocean"],
            ["Seepage", "Uptake", "Groundwater flow"],
            [3, 6, 7],
            [11, 12, 13],
            ["Page-26", "Page-27", "Page-28"],
			[0,0,0]
        ]
    },
    {
        "Plants": [
            ["Atmosphere"],
            ["Transpiration"],
            [2],
            [14],
            ["Page-30"],
			[0]
        ]
    },
    {
        "Ocean": [
            ["Atmosphere"],
            ["Evaporation"],
            [2],
            [15],
            ["Page-18"],
			[0]
        ]
    },
    {
        "Clouds": [
            ["Glacier", "Groundwater", "Rivers", "Ocean"],
            ["Precipitation", "Precipitation", "Precipitation", "Precipitation"],
            [0, 5, 3, 7],
            [16, 17, 18, 19],
            ["Page-25", "Page-24", "Page-23", "Page-22"],
			[0,0,0,0]
        ]
    }
]



var resetArray = function(){
	for(var i=0;i<locations.length;i++)
		{
			var passStr = locations[i].toString();
			//console.log(locations[i]);
			travel[i][passStr][5][i] = 0;

		}		
}

resetArray();

var videoTxt=["Page-13","page-15","Page-29","Page-30","Page-22","Page-23","Page-24","Page-27","Page-14","Page-19","Page-18","page-8","Page-25","Page-20","Page-26","Page-16","Page-17","Page-21","Page-27","Page-28"]
//var audioArr=[8,6,10,14,17,18,19]
var trackTxt="This diagram shows your current progress through the water cycle. Continue your journey until you have reached every destination. At any time, you can use the Snapshot tool to take a picture of your progress to share with your teacher."
var arrText = []
var locationArr = [];
var infoText = false;
var resetCheck = false;
var infocount = 0;
var opations = ["Condensation", "Evaporation", "Groundwater flow", "Infiltration", "Melting", "Precipitation", "Respiration", "Seepage", "Sublimation", "Surface runoff", "Transpiration", "Uptake"]
var repeatCnt = 1;
var arrMerge = [];
var arrives=[];

$(document).ready(function() {
     $('.help2').addClass('rclass');
    $.each(travel, function(ind, val) {
        var ele = travel[ind];
        $.each(ele, function(ind, val) {
            arrMerge.push(ele[ind][1])

        })
		
		 })
			var time = 0;
		$(document).on("click", function(){
		  $("#mySelect,#act_mySelect").hide(); 
		  
		  $("#drpdwntArrw1,#act_rightArrow2").animate({deg: 0}, {
        duration: 300,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $(this).css({
                transform: 'rotate(' + now + 'deg)'
            });
        },
		complete:function(){
			//deg1 = (deg1 == 0)?180:0;
		}
    });
	
	if(wrongHil){
		
		$(".act_procss,.highlight1,.arrclik").off("click").on("click", act_selectFun).css("cursor","pointer")
		$(".act_procss,.process").css({"background":"rgb(255, 203, 5)"})
		
	}
	   })	
   $(".play").on("click", playFun)
   $(".actplay").on("click", actplayFun)
    //rotateValue = -280
    //angleRot = 180
    $.each(locations, function(ind, val) {
        $("#explore").append("<div class='travel' id=travel_" + ind + "><span>" + val + "</span></div>").append("<div class='highlight' id=highlight_" + ind + "></div>")
        $(".track_lable").append("<div class='tracktxt' id=track_" + ind + "><span>" + val + "</span></div>")
    })

    $.each([].concat.apply([], arrMerge), function(ind, val) {

        $(".trackshow").append("<img class='arr arrow" + (ind + 1) + "'  draggable='false' src='assets/images/activity/arrow" + (ind + 1) + ".png'/><div class='arrTxt" + (ind + 1) + " arrtxt'>" + val + "</div>")
        $(".screenArea").append("<img class='actarr actArrow" + (ind + 1) + "'  draggable='false' src='assets/images/activity/activtArr_" + (ind + 1) + ".png'/>")
    })
    $("#mySelect").hide();
    for (i = 0; i < opations.length; i++) {
        $('.mySelect').append('<li class="val">' + opations[i] + '</li>')
    }
    $(".process,.drpdwntArrw").off("click").on("click", selectFun)
	$(".screenArea").off("click").on("click",screenFun)
    $(".val").off("click").on("click", processFun)
    $("#exp_info").off("click").on("click", infoFun)
    $(".track").off("click").on("click", trackLoc);
	 $(".track").off("click").css({"cursor":"default"});
    $(".close_anim").off("click").on("click", closeAnim);
	/* $(".act_close_anim").off("click").on("click", actcloseAnim); */
	$(".popupclose").off("click").on("click", popcloseFun);
    $('.help2').addClass('rclass');
    infoFun()
    $(".animate").hide();
    $("#video").attr("src", "assets/video/page-8.mp4");
	$("#act_track_0,#act_track_1,#act_track_2,#act_track_3").hide();


		$("#video").on("ended", function() {
        $(".play").text("play");
		travel[indloc][loc][5][ansInx1]=1
     var play1 = document.getElementById("video")
        $(".play").removeClass('active');
        time = play1.currentTime * repeatCnt
	   duration=$(this).prop('duration')
	for(var i=0;i<locations.length;i++)
		{
			var passStr = locations[i].toString();
		var countravel=travel[i][passStr][5].length

		}
		//console.log(countravel)
        if (videoCheck=="Page-13" || videoCheck=="Page-17" || videoCheck=="Page-20" || videoCheck=="Page-21" || videoCheck=="Page-22" || videoCheck=="Page-24" || videoCheck=="Page-23" || videoCheck=="Page-25" || videoCheck=="Page-26"  || videoCheck=="Page-29" ||  videoCheck=="Page-27" ||   videoCheck=="Page-28" ||   videoCheck=="Page-16"||   videoCheck=="Page-18" ||  videoCheck=="page-8" || videoCheck=="Page-19" || videoCheck=="Page-30" || videoCheck=="Page-14" || videoCheck=="Page-18") {
            $(".play").trigger("click");			
            repeatCnt++;
            //console.log(time)
			if(videoCheck=="Page-19"){
				play1.currentTime=6
			}
			else{
				play1.currentTime=0;
			}
        } 
		
		else {
            infocount++
          var audioplay=document.getElementById("audioAnim")
		  audioplay.pause()
		  audioboolean=false
        }
           
    })
	
	$("#video").css({"opacity":"0"});
	$('#video').bind("contextmenu", function () {
                              return false;
            });
			//$(".tracktxt,.trackshow").show()
$(".okBtn").off("click").on("click",okFun)
//$(".audioAnim").

$("#audioAnim").on("ended", function() {

var audioplay=document.getElementById("audioAnim")
	
if(videoCheck=="Page-13" || videoCheck=="Page-15" || videoCheck=="Page-29"  ||  videoCheck=="Page-14"){
audioplay.pause()
}
else{
audioplay.currentTime=12;	
audioplay.play()
audioplay.currentTime=12;	
}


//console.log("call")
})

$("#audiocont").on("ended", function() {
	//alert("2")
 $(".expDivIcon1").attr("src","assets/images/template/audio_icon_normal.png")
  /*  var audioplayc=document.getElementById("audiocont")
				audiocont.pause() */
 $(".expDivIcon1").removeClass("play")
				//audiocont.currentTime=0;
				

})
$(".expDivIcon1").on("click",function(){


//globalAudioPause()
  // $(this).attr("src","assets/images/template/audio_icon_play.png")
   var audioplayc=document.getElementById("audiocont")
		//$(this).addClass("play")		
		if($(this).hasClass("play")){
			
				audiocont.pause()
			 $(this).attr("src","assets/images/template/audio_icon_normal.png")
			 $(this).removeClass("play")
		}
         else{
			$(this).addClass("play")		
		
		 $(this).attr("src","assets/images/template/audio_icon_play.png")
		audiocont.play()
		 }		
$('.expAudio').attr('audio-state','pause');
				$('.expAudio').attr('src',templateStateImg.audiopause);
				$('.screenArea').attr('audio-mode','off');	
				$("#globalAudio").trigger('pause');	
				$("#globalAudio").prop('currentTime','0');
})

});

var screenFun=function(event){
	//console.log($('.expDiv').position().left);	
		//event.stopImmediatePropagation();
if((event.target.id == 'videocanvas'|| event.target.id == 'act_video' || $(event.target).attr('class')=="pop_hide" ||$(event.target).attr('class')=="trackshow" ||  event.target.id =='exp_bg'  || event.target.id == 'video' || $(event.target).attr('class')== 'popup_hide' || event.target.id=='animarr'))
			{
				if($('.expDiv').position().left < 0) return;
				slideAnimate();
				//SliderOkClick("close");
				globalAudioPause();
				var audioplayc=document.getElementById("audiocont")
				audiocont.pause()
				$(".expDivIcon1").removeClass("play")
				audiocont.currentTime=0;
				$("#act_mySelect").hide();
				$(".expDivIcon1").attr("src","assets/images/template/audio_icon_normal.png")
			}	
	
	if($(".popup").css("display")==="block")
	{
		$(".highlight").hide();
	}
	
	if($(".process").css("display")==="block"  && $(".process").text()=="Select the appropriate process"){
	//
	$(".process").css({"background":"rgb(255, 203, 5)"})
	}
//$(".highlight1").hide();
	
	
	
}

var duration=0;
var duration1=0;

    function playFun() {
   
        $(this).toggleClass('active');
		
        if ($(this).hasClass("active")) {
            $("#video")[0].play();
            $(this).text("pause")
        } else {
            $("#video")[0].pause();
            $(this).text("play")
        }
    }
     function actplayFun() {
		 
		 $(this).toggleClass('active');
        if ($(this).hasClass("active")) {
            $("#act_video")[0].play();
            $(this).text("pause")
        } else {
            $("#act_video")[0].pause();
            $(this).text("play")
        }
		
	 }	

var timer,audioboolean=false;
function fade(element) {
    var op = 0;
	$(".process").css("background","white")
     timer = setInterval(function() {
	 
        if (op >= 1){ clearInterval(timer);$("#video").css({"opacity":"1"});  element.play();
		
		  if(videoTxt.indexOf(videoCheck)==-1 ){
			audioboolean=false;
			}
			else{
				
				
			audioboolean=true;
				
			}
		bgplay()
		
		travel[indloc][loc][5][ansInx1]=1
		}
		else{
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
		}
		//console.log(op)
    }, 40);
}
var popcloseFun=function(){
	
	$(".trackshow,.pop_hide").hide()
//	$(this).hide()
	//globalAudioNamepre=AudioText;
	viewFlag=true
	audioboolean=false;
	AudioText=globalAudioNamepre
	globalAudioName=globalAudioName2
	$(".expDiv .expPara").html(globalAudioNamepre)

	audioPlay()
	
	if(arrives.indexOf(globalAudioName)==-1)
			{
			//	SliderOkClick("open")
				wrongFlg=false;
			}
			else{
				wrongFlg=true;
				SliderOkClick("close")
			}
			
			arrives.push(globalAudioName)
	$(".process,.drpdwntArrw").off("click").on("click", selectFun).css("cursor","pointer")
	$(".travel,.track").css({"opacity":"1"})
	$(".track").show()
	$(".track").off("click").on("click", trackLoc).text("View My Progress").css({"cursor":"pointer"});
	if(cpage == 'activity') {
		
		AcitvityReset();
	}
	
}
var closeAnimc = 0;
var myVar;
var countC=0
var globalAudioName3
var closeAnim = function() {
	sliderFunCalled = false;
	//wrongFlg=false
	var audioplay1=document.getElementById("audioAnim")
	audioplay1.pause();
	audioplay1.currentTime=0;
	AudioText=exploreText[nexloc]['infoText'];
	globalAudioNamepre=AudioText
	globalAudioName=exploreAudio[nexloc]['infoText']
	globalAudioName2=globalAudioName
    audioPlay()
	 globalAudioName3=globalAudioName.toString()
		if(arrives.indexOf(globalAudioName)==-1)
			{
			//SliderOkClick("open")
				wrongFlg=false;
			}
			else{
				wrongFlg=true;
				SliderOkClick("close")
			}
			
			arrives.push(globalAudioName3)
	//countC=0;
	/* for(var i=0;i<locations.length;i++)
		{
			var passStr = locations[i].toString();
		   if(travel[i][passStr][5][i]==1)
		   {
			  
			   
		   }  

		} */
		//console.log(countC)
    $(".close_anim").hide();
	if($(".show").length==19 && !okFunt){
		$(".popup").show()
		SliderOkClick("close");
		wrongFlg=true;
	}
	resetFun()
    closeAnimc++
    if (closeAnimc > 2) {
        $("#act_track_0").css({
            "background": "rgb(109, 110, 113)",
            "color": "rgb(255, 255, 255)"
        })
    }
  
    $(".travel").css("opacity","1");
	$(".option1").html(nexloc)
    //$(".animate,#videocanvas").hide()
	
/* var audioplay=document.getElementById("audioAnim")
audioplay.pause(); */
audioboolean=false;
}


var infoFun = function() {
    $(this).off("click")
    trackArr = []
    $("#rightArrow1").show();
    $(".option2").show();
    $('.option2').css({
        "color": "#000",

    })
    $(".expnxtxt").text("Select the appropriate process.")
    $(".travel").css("background", "rgb(109, 110, 113)")
    if (infoText) {
        
    } else {
        $("#travel_0").css("background", "#323232");
        $(".cheader2").attr("data-travel", "Glacier");
    }
    infoText = true;
    hilightbOj()
			
}
var loc, nexloc, indloc, indnexloc, travel1;
var arrclick=[]
var hilightbOj = function() {
	repeatCnt = 1
	time = 0;
	//$(".expPara").html(AudioText)
	//alert(AudioText)
	$(".expDiv").css({"top":"180px !important"})
	var play1 = document.getElementById("video")
	play1.currentTime = 1;
	$("#video")[0].pause();
    var currLocation = $(".cheader2").attr("data-travel");
    loc = currLocation;
    a = locations.indexOf(currLocation);
    indloc = a;
	$(".travel").css({"color":"#fff"})
	var len = trackArr.length - 1	
    var travel1 = "#travel_"
    for(var i = 0; i < travel[a][currLocation][2].length; i++) {
        $(travel1 + travel[a][currLocation][2][i]).css({
            "background": "#ffcc00",
            "border": "0px solid rgb(255, 203, 5)",
            "color": "#000",
            "text-shadow": "none",
           

        });

	$(travel1 + travel[a][currLocation][2][i]).off("click").on("click", NexttravelFun).css({"cursor":"pointer"})
	  $(travel1 + a).off("click");
      var ans = travel[a][currLocation][1][i]
	  arrclick.push(travel[a][currLocation][2][i])
    }
	for (var i = 0; i <=9; i++) {
	
	  if (arrclick.indexOf(i) === -1) {
	  
	  $("#travel_"+i).off("click").on("click",wrongClick)
	  }
	  
 }
    $(".expnxtxt").text("Select a location on the map")
	 $(".tracktxt").css({"background":"#6d6e71"})
	 $("#track_" + passval).css({
       "background":"#323232",
         "color":"#fff"
    })
	$(".act_tracktxt,#act_track_0").css({"background":"#6d6e71","display":"none"})
   $("#travel_"+ passval).css({"color":"#fff"})
}

var wrongClick=function(){
for (var i = 0; i <=arrclick.length; i++) {
$("#highlight_"+arrclick[i]).show(); 
}

}
var passval=0;

var trackLoc = function() {
     $(".trackshow").toggle();
	
	 
	  AudioText=trackTxt;
	  globalAudioName="vlwace_29"
 	 audioPlay()
	 if(arrives.indexOf(globalAudioName)==-1)
			{
			//	SliderOkClick("open")
				wrongFlg=false;
			}
			else{
				wrongFlg=true;
				SliderOkClick("close")
			}
				arrives.push(globalAudioName)
	  
	 $(".tracktxt").show().css({"color":"white"})
	 $('.screenIcon').off('click').on("click",captureScreen).css({"cursor":"pointer"});	
	 $(".screenIcon").attr("src","assets/images/template/camera_icon.png").css({"cursor":"pointer"})
	 $(this).hide();
   /*  $(this).text(function(i, v) {
        return v === 'View My Progress' ? 'Close' : 'View My Progress'
    }) */
    if ($(".trackshow").css("display") == "none") {
        $(".travel").css("opacity","1")
		 $(".pop_hide").hide()
	    $(".process,.drpdwntArrw").off("click").on("click", selectFun).css("cursor","pointer")
    } else {
        $(".travel").css("opacity","0")
		$(".trackshow").show();
		$(".pop_hide").show()
		$(".process,.drpdwntArrw").off("click").css("cursor","default")
    } 
	  // $(".track")
	   $(".popupclose").show()
	 //  $(".popup").hide();
	 $(".act_tracktxt").css("opacity","0");
	  $("#track_" + obj).css({
                "background": "#323232",
                "color": "#fff"
            })
}
var trackArr=[]
var videoCheck;
var ansInx1;
var NexttravelFun = function(e) {
   arrclick=[]
   $(".track").off("click").on("click", trackLoc).css({"cursor":"pointer"});
   initFlag = true;
	$(".highlight").hide();
    $(".process,.drpdwntArrw").off("click").on("click", selectFun)
	$(".drpdwntArrw").show();
    $(".val").off("click").on("click", processFun)
    var nextlocation = $(this).text();
    var ansInx = travel[indloc][loc][0].indexOf(nextlocation);
    ansInx1 = travel[indloc][loc][0].indexOf(nextlocation);
    ansVal = travel[indloc][loc][1][ansInx1];
    if (typeof travel[indloc][loc].checked != 'undefiend') {
        travel[indloc][loc].checked = [];
    }
    $(".actarr,#rightArrow1").hide();
	$(".travel").css({"cursor":"default"})
    $(".arrow" + travel[indloc][loc][3][ansInx]).show().addClass("show")
    arrText.push(travel[indloc][loc][3][ansInx])
    videoCheck = travel[indloc][loc][4][ansInx]
    nexloc = nextlocation;
    var a = locations.indexOf(nexloc);
    travel[indloc][loc].checked.push(a);
    var b = locations.indexOf(loc);
    trackArr.push(a)
	
	$(".travel").off("click").css({
        "background": "#6d6e71",
        "color": "white",
        "border": "none",
        "font-weight": "normal"
    });
	$(".travel").css({"color":"#fff"})
	var len=trackArr.length-1;
    $(".actArrow" + travel[indloc][loc][3][ansInx]).show()
    if (videoCheck != "") {
        $("#video").attr("src", "assets/video/" + travel[indloc][loc][4][ansInx] + ".mp4");
    }
	if(videoCheck=="Page-13" || videoCheck=="Page-15" || videoCheck=="Page-29"  || videoCheck=="Page-30" || videoCheck=="Page-27" || videoCheck=="page-15")
	{
		$("#audioAnim").attr("src","assets/audio/sunny_day.mp3")
		var x = document.getElementById("audioAnim");
			    x.volume =1
	}
	if(videoCheck=="Page-22" || videoCheck=="Page-24" || videoCheck=="Page-23" )
	{
		$("#audioAnim").attr("src","assets/audio/rainy_day.mp3")
		var x = document.getElementById("audioAnim");
			    x.volume =1
	}
	if(videoCheck=="Page-14" || videoCheck=="Page-25")
	{
		 
		$("#audioAnim").attr("src","assets/audio/sound_effect_wind.mp3")
		var x = document.getElementById("audioAnim");
			    x.volume =1
	}
	if(videoCheck=="Page-18" || videoCheck=="Page-19"){
		
			$("#audioAnim").attr("src","assets/audio/waves_close_small_waves_rolling_slow.mp3");
			var x = document.getElementById("audioAnim");
			    x.volume =1
		
	}
	if(videoCheck=="page-8" || videoCheck=="Page-20" || videoCheck=="Page-16" || videoCheck=="Page-26"){
		
			$("#audioAnim").attr("src","assets/audio/Small_Water_Stream_Wave.mp3")
			var x = document.getElementById("audioAnim");
			    x.volume =1
	}
	if(videoCheck=="Page-17" || videoCheck=="Page-21" || videoCheck=="Page-28"){
		
			$("#audioAnim").attr("src","assets/audio/WoodlandStream1.mp3")
			var x = document.getElementById("audioAnim");
			    x.volume =0.3
	}
	
	
	
	
    passval = a;
    $(".option3").show();
	 $(".option2").html();
    $(".expnxtxt").text(nextlocation)
    	
    $(this).css("text-shadow", "none")
    $("#travel_" + a).off("click").css({
        "background": "#6d6e71",
        "color": "white",
        "border": "none",
       
    });
	
	for(var i = 0; i < trackArr.length; i++) {
        $("#track_" + trackArr[i]).css({
            "display": "block",
            "background": "#6d6e71",
            "color": "#fff"
        })
	  }
	 $("#track_"+ b).css({
         "display":"block",
		 "background": "#323232",
		 "color":"white"
    })
    $("#rightArrow2").show()
    $("#travel_" + b).css("background", "#323232");
	$("#travel_" + b).css("color","#fff")
    obj = Number($(this).attr("id").split("travel_")[1]);
    if (cpage == "activity") {
        obj = Number($(this).attr("id").split("travel_act_")[1]);
    } else {
        obj = Number($(this).attr("id").split("travel_")[1]);
    }
    locationArr[obj] = obj
    $(".process").show().css({"background":"rgb(255, 203, 5)"});
    $(".svgarrow").show();
    $(".option2").css({"font-family": "Roboto-bold"})
	$(".option2").html($(this).text())

}


var selectFun = function(e) {
	e.stopImmediatePropagation();
    $("#mySelect").show()
    $("#rightArrow2").hide()
    $(".process").css("background", "white")
	//$("#drpdwntArrw1").rotate({ endDeg:180, duration:0.3,persist:true });
	wrongHil=true
	
	$("#drpdwntArrw1").animate({deg: deg1}, {
        duration: 300,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $(this).css({
                transform: 'rotate(' + now + 'deg)'
            });
        },
		complete:function(){
			//deg1 = (deg1 == 0)?180:0;
		}
    });
	
}

var deg1 = 180;
var timevar1
var process=false;
var countc=0;
var wrongFlg=false;

var bgplay=function(){
	var audioplay=document.getElementById("audioAnim")
			if(audioboolean)
			{
				audioplay.play();
				
			}
			else{
				
				audioplay.pause();
			}
			//console.log(audioplay.currentTime)
	
	
}
var processFun = function(e) {
	e.stopImmediatePropagation();
    var index = $(this).index();
	//countc=0
	
    $(".exp_info").off("click")
    var ansCheck = $(this).text()
    if (ansCheck == ansVal) {
	   $(".expDiv").css("top","180px")
		$(".close_anim").show();
		$(".process,.drpdwntArrw").off("click")
        $(".val").eq(index).css({
            "color": "#000"
        })
        $(".process").html($(this).text()).css({
            "font-family": "Roboto-bold",
            "color": "#000",
			"cursor":"default"
        })
		wrongHil=false
       // SliderOkClick("open");
		$(".track").hide();
        $(".drpdwntArrw,.mySelect").hide();
       
            $(".travel").css({
                "background": "#6d6e71"
            })
            $("#travel_" + obj).css({
                "background": "#323232",
                "color": "#fff"
            })
            $(".process").css({
                "box-shadow": "none"
            }).removeClass("procsArrow")
            
                var nextloc = $("#travel_" + obj).text()
            
            $(".cheader2").attr("data-travel", nextloc);
            $("#mySelect").hide();
            $(".animate").show();
            $(".process").css({
                "background": "#fff",
                "color": "#000",
            })

        
        $(".val").css("color", "#000").removeClass("wrongIcon");
        $.each(arrText, function(ind, elem) {
            $(".arrTxt" + arrText[ind]).show()
        })
       
            //$("#video").show()
			$(".screenIcon").attr("src","assets/images/template/camera_icon_disabled.png").css({"cursor":"default"})
			$(".screenIcon").css({"cursor":"default"})
			$(".screenIcon").off("click")
            $(".travel,.actarr").hide();
			 $(".travel").css("opacity","0")
            $(".play").trigger("click")
			var e = document.getElementById('video');
			e.pause();
			fade(e);
			process=true;
			AudioText=exploreText[loc]['text'][ansInx1]
				globalAudioNamepre=AudioText
			globalAudioName=exploreAudio[loc]['text'][ansInx1]
			globalAudioName2=globalAudioName;
						audioPlay()
			//alert(AudioText)
			
			/* if(travel[indloc][loc][5][ansInx1]==1){
			wrongFlg=true;
			
			

					//$('.expDiv').stop()
					SliderOkClick("close")
			console.log(countc);
		//	return false;
			
		}
			else{
				SliderOkClick("open")
				countc++
				console.log(countc)
			} */
			wrongHil=false
			if(arrives.indexOf(globalAudioName)==-1)
			{
			//	SliderOkClick("open")
				wrongFlg=false;
			}
			else{
				wrongFlg=true;
				SliderOkClick("close")
				
			}
			
			arrives.push(globalAudioName)
				$("#drpdwntArrw1").css({"transform":"rotate(0deg)"})
    } else {
        //$(".val").css("color", "#000").removeClass("wrongIcon");
        $(".val").eq(index).css({
            "color": "#e1696e"
        }).addClass("wrongIcon");
		wrongHil=true
    }

}

function resetFun() {
	clearInterval(timer)
	clearInterval(myVar);
	var audioplay1=document.getElementById("audioAnim")
	audioplay1.pause();
	audioplay1.currentTime=0;
    resetCheck = true;
	$('.screenIcon').off('click').on("click",captureScreen);
	$(".screenIcon").attr("src","assets/images/template/camera_icon.png").css({"cursor":"pointer"})
    $(".val").css({
        "color": "#000"
    }).removeClass("wrongIcon bgColor");
	$("#video").css({"opacity":"0"})
    $(".optiontext").html(nexloc)
    $(".option2,.process").css({
        "background": "white",
        "display": "none",
        "color": "#000",
        "font-family": "Roboto-Regular",
	  })

    $(".actarr").hide();
    //$(".exp_info").off("click").on("click", infoFun)
    $(".option3").css({
        "background": "white",
        "display": "none",
        "font-family": "Roboto-Regular"
    })
    $(".process").html("Select the appropriate process").css({"cursor":"pointer"})
    $(".option4").css({
        "font-family": "Roboto-Regular"
    })
    $(".rightArr").hide();
    $(".track").css({
        "background": "rgb(255, 203, 5)",
        "color": "#000"
    })
    $("#rightArrow1,.option2").show()
    hilightbOj()
	$(".play").removeClass('active');
	$(".track").show();
	$(".option2").html("Select a location on the map")
}




/* function expSlideDiv() {
	//if(wrongFlg && angleRot==180) return ;
    rotateValue = ($('.expDiv').position().left >= 0)?-280:0;				
	angleRot = (rotateValue >= 0)?0:180;
    slideAnimate()
} */

/* function slideAnimate() {
if(wrongFlg) return;
    $('.expDiv').stop().animate({
        left: rotateValue
    }, 800, function() {
        $('.activeSlider').myMethod1(angleRot);	
    });
} */

$.fn.extend({
		myMethod1: function(angle){$(this).css('transform','rotate('+(angle)+'deg)')}
	});
	var okFunt=false;
var okFun=function(){
	//alert("2")
	//$(this).hide();
	//$("#rtxt_3").trigger("click")
	$(".popup_hide,.popup").hide();
	okFunt=true;
	 var audioplayc=document.getElementById("audiocont")
	audiocont.pause()
			$(".expDivIcon1").removeClass("play")
				audiocont.currentTime=0;
	$(".expDivIcon1").attr("src","assets/images/template/audio_icon_normal.png");
	//	SliderOkClick("open");
	
		  
}
