var activity_travel = [{
        'Glacier': [
            ["Snowmelt"],
            ["Melting"],
            [1],
            [1],
			["page-8"]
        ]
    },
    {
        "Snowmelt": [
            ["Rivers"],
            ["Surface runoff"],
            [3],
            [2],
			["Page-21"]
        ]
    },
    
    {
        "Rivers": [
            ["Groundwater"],
            ["Infiltration"],
            [5],
            [3],
			["Page-16"]
        ]
		
		
    },
    {
        "Groundwater": [
            ["Rivers"],
            ["Seepage"],
            [3],
            [9],
			["Page-26"]
        ]
			
    }
	
	
	];
  var audioArrText=["Snowmelt","Rivers","Groundwater"];
  var audCount = 0;
	var activityFoodWeb=[
	["You are a particle of water. For thousands of years, this glacier has been your home. Sub-freezing temperatures have made it too cold for you to go anywhere. But now things are starting to warm up.<br/><br/> In this activity, you will leave your glacial home and travel the world by following the water cycle. <br/><br/>Before we start our journey, let’s learn more about glaciers. Click on the information icon next to glacier."],
	["Did you know that glaciers store 68% of the world’s freshwater? Many glaciers are found near the North and South Pole, but you can also find glaciers at lower latitudes in the mountains. However, with rising global temperatures, glaciers are starting to disappear. Glacier National Park, in Montana, had over a hundred glaciers in the early 1900s. It now has less than thirty left, and those have shrunk by more than half their size."],
	["Great job. Now select the process that can transport water particles from a glacier to snowmelt."],
	["Sorry, that is not the correct process. Try selecting a different process."],
	["Now click on the Information icon to learn more about snowmelt. "],
	["Every spring the snow and ice that accumulated during the winter starts to melt. There are cities that depend on this melting snow for their drinking water. With rising temperatures less snow is accumulating which means these cities are at risk of losing their water supply.","<br/><br/>Most of the ice on Earth can be found in giant glaciers on Antarctica and Greenland. If all of this ice were to melt the oceans would rise by more than 60 meters (200 feet). "],
	["Let’s take a look at our model so far. Click on the Track My Progress button."],
	["For our next stop, let’s visit the river. To go there, click on the river in the image on your screen."],
	["Now select the process that can transport water particles from snowmelt to a river."],
	["Sorry, that is not the correct process. Try selecting a different process."],
    ["Click on the information icon to learn more about Rivers."],
	["Due to gravity, much of the water on land runs downhill, accumulating in rivers and streams, which transport the water to lakes and oceans. The Missouri River is longest river in the United States. It is 3767 km (2,341 miles) long. The Missouri river flows into the Mississippi River, which is 3733 km (2,320 miles) long. All of this water eventually empties into the Gulf of Mexico.  This is a good example of how rivers and river systems can carry water thousands of miles."],
	["Let’s take a look at our model so far. Click on the Track My Progress button"],
	["For our next stop, let’s visit Groundwater. To go there, click on the groundwater in the image on your screen."],
	["Now select the process that can transport water particles from a river to   groundwater."],
	["Let’s take one last look a our model so far. Click on the Track My Progress button<br/><br/>Make sure to take a snapshot of your progress."],
	["Don’t leave yet! Take a snapshot of the progress you have made so far."],
	["<1>Wow! You made it all the way from a  glacier on the top of a mountain all the way to an underground aquifer! You’ve reached the end of this guided activity, but there are <2>lots more stops along the Water Cycle to explore. Now go to Explore mode and see if you can navigate to every stop on the water cycle. <3>You will start back at the glacier, but you <4>do not have to take the same path. Good luck, and remember to go with the flow! <5>"],
	
	]
var popup_Count=0;	
var locations = ["Glacier", "Snowmelt", "Atmosphere", "Rivers", "Animals", "Groundwater", "Plants", "Ocean", "Clouds"];
var act_locations = ["Glacier", "Snowmelt","Rivers", "Groundwater"];
var arrArrow=["arrow1","arrow4","arrow9"]
var arrText1=["Melting","Surface runoff","Infiltration"]
var repeatCnt1=0
var wrongHil=false;
var actvideoTxt=["page-8","Page-21","Page-16"]
$(function(){
	
	$.each(locations, function(ind, val) {
        $("#activity").append("<div class='act_travel' id=travel_act_" + ind + "><span>" + val + "</span></div>")
		
	})
	$.each(act_locations, function(ind, val) {
    //    $("#activity").append("<div class='travel' id=travel_act_" + ind + ">" + val + "</div>")
      
        $(".track_lable").append("<div class='act_tracktxt' id=act_track_" + ind + "><span>" + val + "</span></div>")
		if(ind>2)
			return
		$(".trackshow").append("<img class='act_arr act_arrow"+(ind+1)+"' draggable='false' src='assets/images/activity/"+arrArrow[ind]+".png'/><div class='act_arrTxt"+(ind+1)+" act_arrtxt'>"+arrText1[ind]+"</div>")
    })
	 for (i = 0; i < opations.length; i++) {
        $('.act_mySelect').append('<li class="act_val">' + opations[i] + '</li>')
    }
	$("#act_info").off("click").on("click", act_Fun)
	$(".act_procss,.highlight1,.arrclik").off("click").on("click", act_selectFun)
	$(".cheader2").attr("data-travel", "Glacier");
	$(".act_val").off("click").on("click", act_processFun)
	$(".act_track,.highlight2").off("click").on("click", act_trackLoc);
	$(".act_track").css({"cursor":"default"})
	$(".act_close_anim").show();
	$(".act_close_anim").off("click").on("click", actcloseAnim1);
	//act_higt_Obj()
	$(".act_track").off("click")
	$(".option2").text("Select a location on the map")
	$("#act_video").on("ended", function() {
        $(".actplay").text("play")
     var play1 = document.getElementById("act_video")
        $(".actplay").removeClass('active');
		/* $(".act_close_anim").show(); */
        time = play1.currentTime * repeatCnt1
	   duration=$(this).prop('duration')
	 
        if (videoCheck=="page-8") {
            $(".play").trigger("click")
            repeatCnt1++;
            console.log(time)
        } 
		
		else {
            infocount++;
			 var audioplay=document.getElementById("actaudioAnim")
		  audioplay.pause()
		  actaudioboolean=false
          
        }
		
		
	
    })
	
	/* $("#act_rightArrow2").click(function(e){
		e.stopImmediatePropagation();
		alert("2")
	//act_selectFun()	
	}) */
	
	$("#actaudioAnim").on("ended", function() {
var audioplay=document.getElementById("actaudioAnim")
if(videoCheck=="Page-13" || videoCheck=="Page-15" || videoCheck=="Page-29"  || videoCheck=="Page-30" || videoCheck=="Page-14"){
audioplay.pause()
}
else{
audioplay.play()
}


//console.log("call")
})
})

function AcitvityReset()
{
			if(currentStep=="Groundwatertrack"){
				
				wrongAttemptFun("stop");
				$(".trackshow,.pop_hide,.popupclose").show()
				$(".act_track").hide();
				//$(".popupclose").off("click").css("cursor","default")
				
			//wrongF
			}
			else{
				currentStep=nextlocation1+'reset';
		         rightAttemptFun();
			
			act_resetFun();
			
	$(".act_travel").css({"opacity":"1"});
	$(".act_travel").css({"background":"#6d6e71"})
        $("#travel_act_" + obj).css({
            "background": "#323232",
            "color": "#fff"
        })
		if(currentStep=="Groundwaterreset"){
			
		}
		else{
		act_hilght();
		}
	$(".act_close_anim").hide();
			}
			$(".highlight2").hide()
			if($(".expPara").text()=="Don’t leave yet! Take a snapshot of the progress you have made." || $(".expPara").text()=="Look how far you’ve come! Use the Snapshot tool to take a picture of your progress.")
			{
			  $('.screenIcon').off('click').on("click",captureScreen);
	          $(".screenIcon").attr("src","assets/images/template/camera_icon.png").css({"cursor":"pointer"})
			//console.log("3")
			}
			
		

			$(".act_track").off("click").css({"background":"rgb(109, 110, 113)","cursor":"default","color":"white"})
}

var actbgplay=function(){
	var audioplay=document.getElementById("actaudioAnim")
			if(actaudioboolean)
			{
				audioplay.play();
				
			}
			else{
				
				audioplay.pause();
			}
	
	
}

var actcloseAnim = function() {
	sliderFunCalled = false;
	//$(".act_track").show();
	 $(".act_track").hide()
		$("#act_rightArrow2").css({"transform":"rotate(0deg)"})
    $(".act_close_anim").hide();
	$(".highlight2").show()
	if(angleRot==180){
		SliderOkClick("open");
	}
	if(currentStep!="Groundwaterprocess")
	{
		currentStep=nextlocation1+'close';
		rightAttemptFun();
	$(".highlight2").css({"cursor":"pointer"})
	}	 
	 act_resetFun()
	if(currentStep=="Riversclose"){
		$(".act_travel").css({"opacity":"1"});
		$(".act_travel").css({"background":"#6d6e71"})
        $("#travel_act_" + obj).css({
            "background": "#323232",
            "color": "#fff"
        })
		act_hilght();
		$(".popupclose").show();
		$(".act_close_anim,.highlight2").hide();
		$(".act_track").off("click").css({"background":"rgb(109, 110, 113)","cursor":"default","color":"white"})
		
	}
	else{
		
		$(".act_track,.highlight2").off("click").on("click", act_trackLoc);
		
	}
    $(".option1").html(nexloc)
    $(".option2").css({"font-weight":"normal"})
    $(".act_travel").css({"opacity":"1"});
	audCount++;
	
    //$(".animate,#videocanvas").hide()
	

}
var act_trackLoc = function() {
           $(".tracktxt").css({"color":"#fff"})
			currentStep=nextlocation1+'track';
		    rightAttemptFun(); 
			$(".trackshow").toggle();
			$(this).hide();
	$(".act_tracktxt").css("opacity","1");
$(".act_track,.highlight2").off("click").css({"cursor":"default"})
  $(".act_track").hide();
   if($(".trackshow").css("display")=="none")
	{
	  $(".act_travel").css({"opacity":"1"});
	}
	else{$(".act_travel").css({"opacity":"0"});}
	
if(currentStep=="Snowmelttrack"){
	
	$(".act_track").off("click").css({"background":"rgb(109, 110, 113)","cursor":"default","color":"white","display":"none"})
}
 if($(".expPara").text()=="Don’t leave yet! Take a snapshot of the progress you have made." || $(".expPara").text()=="Look how far you’ve come! Use the Snapshot tool to take a picture of your progress.")
			{
			  $('.screenIcon').off('click').on("click",captureScreen);
	          $(".screenIcon").attr("src","assets/images/template/camera_icon.png").css({"cursor":"pointer"})
			console.log("3")
			}
	 
}
var count=0
var act_processFun = function(e) {
	e.stopImmediatePropagation();
	var index = $(this).index();
	$(".act_info").off("click")
	count++
	//$(".act_val").css("color", "#000").removeClass("wrongIcon");
	if(count<=1){popup_Count++;}
     var ansCheck=$(this).text()
	   if (ansCheck == ansVal) {
		$(".act_val").eq(index).css({"color": "#000"})
		$(".act_procss").html($(this).text()).css({"font-weight":"bold","color":"#000"})
		$(".drpdwntArrw").hide();
		$(".act_procss").off("click").css("cursor","default");
		
		
		$(".act_travel").css({"background":"#6d6e71"})
        $("#travel_act_" + obj).css({
            "background": "#323232",
            "color": "#fff"
        })
	$(".act_procss").css({"box-shadow":"none"}).removeClass("procsArrow")
       
	var nextloc = $("#travel_act_" + obj).text()
	
        $(".cheader2").attr("data-travel", nextloc);
	    $("#mySelect").hide();
        $(".animate").show();
        $(".act_procss").css({
            "background": "#fff",
			"color":"#000"
        })
		    $("#act_mySelect").hide();
		    currentStep=nextlocation1+'process';
		    rightAttemptFun();  
			$(".act_close_anim").show();
			$(".act_track,.highlight2").hide();
			$(".actplay").trigger("click")
			$(".act_travel").css({"opacity":"0"});
			var e = document.getElementById('act_video');
			e.pause();
			fade1(e);
	   $(".actarr").css({"opacity":"0"})
	   $(".act_val").css("color", "#000").removeClass("wrongIcon");
	   wrongHil=false;
	 //  $(".act_procss").css("background","white")
		
    } else {
		 
	 	wrongAttemptFun('stop');
      	//$(".act_val").css("color", "#000").removeClass("wrongIcon");
		$(".act_val").eq(index).css({"color":"#e1696e"}).addClass("wrongIcon");
		wrongHil=true
	
    }

}
var timer1,actaudioboolean=false;
function fade1(element) {
	$(".act_procss").css("background","white")
    var op = 0;
     timer1 = setInterval(function() {
        if (op >= 1){ clearInterval(timer);$("video").css({"opacity":"1"});  element.play();
		var audioplay=document.getElementById("audioAnim")
		 $(".actarr").css({"opacity":"1"})
		  if(actvideoTxt.indexOf(videoCheck)==-1 ){
			actaudioboolean=false;
			}
			else{
			var myAudio = document.getElementById('globalAudio');
				if(myAudio.paused)
					{
						actaudioboolean=true;
					}
				else
					{
						actaudioboolean=false;
					}				
				//actbgplay()
			}
		
//		console.log("122")
		}
		else{
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
		}
		//console.log(op)
    }, 40);
}

var act_selectFun = function(e) {
	e.stopImmediatePropagation();
    $("#act_mySelect").show()
	//$(".act_procss").css({"background":"#323232","box-shadow":"inset 0px -4px 0px 0px #ffcb05"});
	$(".highlight1").hide()
	//$(".act_procss").addClass("procsArrow")
	
	$(".act_procss").css("background","white")
	wrongHil=true
	$("#act_rightArrow2").animate({deg: deg1}, {
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
var act_Fun=function(){
	
	
	//$(".cheader2").attr("data-travel", "Glacier");
	$(this).off("click")
	trackArr=[0,0,0,0,0,0,0,0,0,0]
	$("#rightArrow1").show();
	$(".option2").show();
	 $('.option2').css({
        "color": "#000",
		"zIndex":"10000000",
	  })
	  $(".actpnxtxt").text("Select a location on map")
	  popup_Count++
	  $('.expPara').html(activityFoodWeb[popup_Count]);	
	infoText=true;
	$("#act_rightArrow1").show();
	if(popup_Count>4){$(".act_track").off("click").on("click", act_trackLoc);}
	$('.expPara').html(activityFoodWeb[popup_Count]);
	
	//  expSlideDiv()
	  //changeHeightExp()
	 // act_hilght()
}
var corrArr=[]

function act_resetFun() {
    resetCheck = true;
	
    $(".act_val").css({
        "color": "#000"
    }).removeClass("wrongIcon bgColor");
	$("#act_video").css({"opacity":"0"})
    $(".act_optiontext").html(nexloc)
    $(".act_option3,.act_procss,.option3").css({
        "background": "white",
        "display": "none",
        "color": "#000",
     
	  })

    //$(".actarr").hide();
	$(".option2").text("Select a location on the map")
    //$(".exp_info").off("click").on("click", infoFun)
    $(".act_option3").css({
        "background": "white",
        "display": "none",
        "font-family": "Roboto-Regular"
    })
    $(".act_process").html("Select the appropriate process").css({"cursor":"pointer"})
    $(".act_option4").css({
        "font-family": "Roboto-Regular"
    })
    $(".rightArr").hide();
    $(".act_track").css({
        "background": "rgb(255, 203, 5)",
        "color": "#000"
    })
    $("#act_rightArrow1,.act_option2").show()
   
	$(".actplay").removeClass('active');
	$(".act_track,.highlight2").show();
}

var act_loc, act_nexloc, act_indloc, act_indnexloc,act_travel1,actloc;
var act_hilght = function() {

    var act_currLocation = $(".cheader2").attr("data-travel");
	
    act_loc = act_currLocation;
    act_a = act_locations.indexOf(act_currLocation);
    act_indloc = act_a;
    for (var i = 0; i < activity_travel[act_a][act_currLocation][2].length; i++) {
        $("#travel_act_"+ activity_travel[act_a][act_currLocation][2][i]).css({
             "background": "#ffcc00",
            "border": "0px solid rgb(255, 203, 5)",
			"color":"#000",
			"text-shadow":"none",
			"cursor":"pointer"
			
        });
        $("#travel_act_"+ activity_travel[act_a][act_currLocation][2][i]).off("click").on("click", act_NexttravelFun)
        $("#travel_act_"+act_a).off("click");
		$("#acthighlight_"+activity_travel[act_a][act_currLocation][2][i]).show()
       // var ans = travel[act_a][currLocation][1][i]
		//console.log(activity_travel[act_a][act_currLocation][2][i])
		 corrArr.push(activity_travel[act_a][act_currLocation][2][i])
    }
         //actloc=
      
	for(var i=0;i<=9;i++){
		
		 if (corrArr.indexOf(i) === -1) {
	            //console.log(i)  
	  //$("#travel_act_"+i).off("click").on("click",ActwrongClick)
	  }
		
	}  
	//$('.option2').css({"color": "#000","zIndex":"10000000"})
 $(".actpnxtxt").text("Select a location on map")

}
var ActwrongClick=function(){
	wrongAttemptFun('stop');
}
var nextlocation1
var act_NexttravelFun=function(){
	
$(".act_procss").html("Select the appropriate process").css({"font-weight":"normal"})
	var nextlocation = $(this).text();
	nextlocation1=nextlocation
	  if(cpage == 'activity' && audioArrText[audCount] == nextlocation1)
		{
			currentStep=nextlocation1+'click';
			rightAttemptFun(); 
		}
		
   var ansInx = activity_travel[act_indloc][act_loc][0].indexOf(nextlocation);
    ansVal = activity_travel[act_indloc][act_loc][1][ansInx];
	videoCheck = activity_travel[act_indloc][act_loc][4][ansInx]
	
    if (typeof activity_travel[act_indloc][act_loc].checked != 'undefiend') {
        activity_travel[act_indloc][act_loc].checked = [];
    }
    //$(".expPara").html(exploreText[loc]['text'][ansInx])
	$("#act_video").attr("src", "assets/video/" + activity_travel[act_indloc][act_loc][4][ansInx] + ".mp4");
	//$(".actarr").hide();
	$(".act_track").off("click")

   $(".act_arrow" + activity_travel[act_indloc][act_loc][3][ansInx]).show()
		$(".act_arrTxt" + activity_travel[act_indloc][act_loc][3][ansInx]).show()
    nexloc = nextlocation;
    var a = act_locations.indexOf(nexloc);
	$(".highlight1").show();
   // activity_travel[indloc][act_loc].checked.push(a);
    console.log('selected  ' + a)
    var b = act_locations.indexOf(act_loc);
	trackArr.push(a)
	if(trackArr.length>=1)
		{
			$("#act_track_0").css({"background":"#6d6e71"})	
				
		}
		$(".act_tracktxt,.tracktxt").css({"background":"rgb(109, 110, 113)","color":"#000"}).show()
		$(".act_tracktxt").css({"color":"white"})
		var len=trackArr.length-1
		for(var i=0;i<trackArr.length;i++){
			
			console.log(trackArr.length-1)
			
			$("#act_track_" + trackArr[i]).css({"display":"block","background":"#6d6e71","color":"#fff"})
			$("#act_track_0").css({"display":"block","background":"#6d6e71","color":"#fff"})
				
			//console.log(trackArr[])
		}
		$("#act_track_" + (trackArr[len])).css({"display":"block","background":"#323232","color":"#fff"})
       
		
		if(currentStep=="Snowmeltclick")
		 {
			  $(".actArrow"+travel[act_indloc][act_loc][3][ansInx]).show()
		 }
		if(currentStep=="Riversclick")
		 {
			 $(".actArrow"+travel[act_indloc][act_loc][3][ansInx]).show().attr("src","assets/images/activity/activtArr_4.png")
			 $(".actArrow3").addClass("arrow3Act")
		 }	
		if(currentStep=="Groundwaterclick")
		 {
			//$(".actArrow"+travel[act_indloc][act_loc][3][ansInx]).show().attr("src","assets/images/activity/activtArr_9.png")
			  $(".actArrow9").show().addClass("arrow4Act")
		 }		 
  		
	//console.log(travel[act_indloc][act_loc][3][ansInx])
    passval = b;
    $(".option3").show();
    $('.option2').text(nextlocation).css({
        "background": "#fff",
        "color": "#000",
		"border":"none",
		"font-weight":"bold"
    })
    $(".act_travel").off("click").css({
        "background": "#6d6e71",
        "color": "white",
		"border":"none",
		"font-weight":"normal",
		"cursor":"default"
    });
	$(this).css("text-shadow","none")
    $("#travel_" + a).off("click").css({
        "background": "#6d6e71",
        "color": "white",
		"border":"none",
		
    });
	$("#act_rightArrow1").hide()
	$("#act_rightArrow2,.act_procss,.drpdwntArrw").show()
		
    $("#travel_act_" + b).css("background", "rgb(50, 50, 50)");
	//alert(b)
    obj = Number($(this).attr("id").split("travel_")[1]);
	if(cpage=="activity"){obj = Number($(this).attr("id").split("travel_act_")[1]);}
	else{   obj = Number($(this).attr("id").split("travel_")[1]);}
    locationArr[obj] = obj
    $(".process").show();
	$(".act_procss").show().css({"background":"rgb(255, 203, 5)"});
    $(".svgarrow").show();
	
	if(videoCheck=="page-8" || videoCheck=="Page-16"){
		
			$("#actaudioAnim").attr("src","assets/audio/Small_Water_Stream_Wave.mp3")
	}
	if(videoCheck=="Page-21"){
		
			$("#actaudioAnim").attr("src","assets/audio/WoodlandStream1.mp3")
	}
	

}

function audioAreafn()
{
	
	if(cpage == 'activity' && currentStep ==0 && getIdSplit == 0 && stepIndex == 2)
	{
		act_hilght();
		
//	alert(stepIndex)
	}
	else{
		$(".act_travel").off("click")
		$("#travel_act_1").off("click").css({"background":"rgb(109, 110, 113)","color":"white"})
		$(".highlight").hide()
		
	}
}
function actcloseAnim1()
{
var audioplay1=document.getElementById("actaudioAnim")
	audioplay1.pause();
	audioplay1.currentTime=0;
 actaudioboolean=false;	
	$(this).hide()
		currentStep=nextlocation1+'AnimEnd';
	$("video").css({"opacity":"0"})
		    rightAttemptFun(); 	
        act_resetFun();
	$(".act_travel").css({"opacity":"1"});
	$(".act_travel").css({"background":"#6d6e71"})
        $("#travel_act_" + obj).css({
            "background": "#323232",
            "color": "#fff"
        })
		$(".highlight2").hide()
		$(".option1").html(nexloc)
		 $(".act_track").off("click").css({"background":"rgb(109, 110, 113)","cursor":"default","color":"white"})
		if(currentStep=="GroundwaterAnimEnd"){
			$(".highlight2").show()
				$(".act_track,.highlight2").off("click").on("click", act_trackLoc);
				$(".act_track").css({"background":"rgb(255, 203, 5)",color:"#000"});
			} 
			clearInterval(timer1)
			$("#act_video").css({"opacity":"0"})
			 $(".actarr").css({"opacity":"1"})
			
}