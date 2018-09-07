var MainNavigations=1;	
var baseConfig = {activityTitle:'Travel the Water Cycle'};
var Tabs=["welcome","explore","activity"];
var TopMenuText=["Dig site","Lab"];
var rightMenuText=["Food Web","Tropic Game"];
//label background on top
var labelSettings = {
						0:'#313131', //monteryBay background
						1:'#313131'    //Amazon background
					};

//label background on right
var backgroundNcolor=[
						["#150958","#FFCC00"], //monteryBay background
						['#124521','#FFCC00'], //Amazon background
						["#6d6e71","#fff"]     //default Grey background
					 ];
//array for slider okbtn and img show and hide
var SlideStatusArr=[
						["imghide","okhide","sliderhide"],	// welcome
						["imgshow","okhide","slidershow"],  //explore
						["imghide","okshow","slidershow"]   //activity
				   ]; 			
//imghide  imgshow
// okhide  okshow
// sliderhide slidershow

//array for topmenu rightmenu and base image show and hide
var topNSideMenu=[
					["topmenuhide","rightmenuhide","baseimghide"], //welcome
					["topmenuhide","rightmenuhide","baseimghide"], //explore
					["topmenuhide","rightmenuhide","baseimghide"]  //activity
				 ]; 
//topmenuhide  topmenushow
// rightmenuhide  rightmenushow
// baseimghide baseimgshow

var templateHdr = {textActive:'#FFF',textNormal:'#fff'};
var selectedIndex = 0;
var prevMove = 0;
var defIndex = -1;	
var activitytag = true;	
var currentactivity = 0;
var parentTab;
var imgBase = "assets/images/";
var imgBaseAct = "assets/images/activity/";
var helpimgPath = "assets/images/help/";
var imgBaseWelcome = "assets/images/welcomebg/";
var speechBubblePos = 'bubbleDivNone';
var selBubbleLen = 0;
var bubbleStart = 0;
var imgPng = '.png';
var imgJpg = '.jpg';
var ctAttrExp;
var headerlabel = 'monterey';
var exoploreCtBubble = 'anchovy0';

var templateStateImg = {
	audiopause:'assets/images/template/audio_icon_normal.png',
	audioplay:'assets/images/template/audio_icon_play.png',
	leftslideract:'assets/images/template/left_slider_act.png',
	leftsliderdeact:'assets/images/template/left_slider_deact.png',
	rightslideract:'assets/images/template/right_slider_act.png',
	rightsliderdeact:'assets/images/template/right_slider_deact.png',
};
var imageName="monterey";	
var noOfSteps=16;
var currentStep=0;
var wrongResPos=0;
var LengthFind=0;
var AudioText,audioIndex=0,stepIndex=0;
var getIdSplit=0;
var StateCheck=0;
var noStepArr=[];
var totalStepArr=[];
var FeedBack="Step";
var activeIcon="explore";
var slideImg="";
var rotateValue=-280;
var angleRot=180;

//incorrect Audio multiple
var incorrectText = [
					'Incorrect. Producers occupy this level. Producers are organisms that make their own food through photosynthesis. Try again.',
					'Incorrect. Primary consumers occupy this level. Primary consumers are organisms that feed only on producers. Try again.',
					'Incorrect. Secondary consumers occupy this level. Secondary consumers are organisms that feed on primary consumers. Try again.',
					'Incorrect. Tertiary consumers occupy this level. Tertiary consumers are organisms that feed on secondary and primary consumers. Try again.'
					];


//shell Audio
var FindState=["MonteryBay","AmazonRainForest"];
var FindLevel=["FoodWeb","TropicLevel"];


var exploreText = {
	
	'block0':{'img':'woff','text':["Sixty-eight percent of the fresh water on Earth is frozen. Vast ice sheets in Antarctica and Greenland hold most of the world’s fresh water. Mountain glaciers contain much of the rest. However, with global temperatures rising, ice sheets and mountain glaciers are disappearing.<br/><br/><span class='spanbold'>DID YOU KNOW?</span> Glacier National Park in Montana had over 100 different glaciers in the early 1900s. Today, it has fewer than 30, and those have shrunk by more than half their size."]},
	
	'Glacier':{'img':'woff','text':["Energy from the sun can cause ice or snow on the surface of a glacier to <span class='spanbold'>melt</span> into liquid water.","Energy from the sun can cause ice or snow on the surface of a glacier to <span class='spanbold'>sublimate,</span> changing it directly from a solid to a gas. This vaporized water then enters the atmosphere. "],
	
	'infoText':["Sixty-eight percent of the fresh water on Earth is frozen. Vast ice sheets in Antarctica and Greenland hold most of the world’s fresh water. Mountain glaciers contain much of the rest. However, with global temperatures rising, ice sheets and mountain glaciers are disappearing.<br/><br/><span class='spanbold'>DID YOU KNOW?</span> Glacier National Park in Montana had over 100 different glaciers in the early 1900s. Today, it has fewer than 30, and those have shrunk by more than half their size."]},
	
	 'Snowmelt':{'img':'woff','text':["When snow and ice melt, some of the water is absorbed by the ground and <span class='spanbold'>infiltrates</span> through layers of soil and rock.","The force of gravity causes liquid water to flow downhill. Water that flows over the surface of land is called <span class='spanbold'>surface runoff.</span> Many glaciers are on mountains, so melted snow and ice form streams running downhill. These small streams eventually join to form rivers."],
	 
	 'infoText':["Every spring, snow and ice that has accumulated during the winter starts to <span class='spanbold'>melt.</span> In some regions, millions of people depend on the melting snow for drinking water and agriculture. Rising temperatures in recent years have caused less snow to accumulate from year to year, threatening the water supply of these communities.<br/><br/><span class='spanbold'>DID YOU KNOW?</span> If all of the ice sheets on Greenland and Antarctica were to melt, the oceans would rise by more than 60 meters (200 feet). "]},

	 'Atmosphere':{'img':'woff','text':["As water vapor rises higher into the atmosphere, it becomes cooler. When this water vapor cools down enough, it <span class='spanbold'>condenses</span> back into liquid water. Tiny droplets of liquid water can remain suspended in the atmosphere, where they collect to form clouds."],
	 
	 'infoText':["The atmosphere consists of all the air between the Earth’s surface and outer space. It is made up mostly of nitrogen and oxygen gases. However, water vapor makes up a small percentage of the gases in the atmosphere, and that small percentage has a huge impact on Earth’s weather. The amount of water vapor in the air is called humidity. Humidity varies throughout the atmosphere and can change over time."]},
	 
    'Rivers':{'img':'woff','text':["Energy from the sun causes some of the water on the river’s surface to <span class='spanbold'>evaporate,</span> changing it into water vapor, a gas. Water vapor is less dense than the air around it, so it rises into the atmosphere.","Surface water that is flowing downhill, driven by gravity, is called <span class='spanbold'>surface runoff.</span> Rivers collect runoff, flowing downhill until they meet another body of water. For example, a river may merge with another river or flow into a lake or ocean.","Many animals need fresh water to survive. Water enters their bodies when they drink it from rivers, lakes, puddles, and anywhere else that fresh water accumulates. Animals also get water from the foods they eat. This is called <span class='spanbold'>uptake.</span>","Some of the water in the river soaks into the ground and <span class='spanbold'>infiltrates</span> down through the layers of soil and rock. This groundwater can become trapped in cracks and spaces within the rock layers. The spaces fill up with water, forming what is called an aquifer."],
	
	'infoText':["Gravity causes water to flow downward. Water that flows over the surface of land is called <span class='spanbold'>surface runoff.</span> Runoff collects in rivers and streams, which transport water to lakes and oceans.<br/><br/> <span class='spanbold'>DID YOU KNOW?</span> Rivers and river systems carry water over great distances. At 3,767 kilometers (2,341 miles) long, the Missouri River is the longest river in the United States. The Missouri flows into the Mississippi, which is the U.S. river with the greatest discharge. The Mississippi discharges about 16,792 cubic meters (about 593,000 cubic feet) of water per second into the Gulf of Mexico.  That’s about as much water per second as six-and-a-half Olympic-sized swimming pools."]},

	 
	'Animals':{'img':'woff','text':["Animals release water vapor into the air through <span class='spanbold'>respiration,</span> or breathing. When an animal exhales, water vapor is one of the gases released from the lungs. This water vapor then moves into the atmosphere. On a cold day, you can see your breath because the water vapor condenses in the cold air."],
	
	'infoText':["Animals, including humans, depend on water and the water cycle to survive. Some animals can only live in or near water. Others can live on land but need water for other reasons, such as hunting for food or laying their eggs. Many structures in the bodies of animals, such as cells, tissues, and organs, need water to function properly.<br/><br/><span class='spanbold'>DID YOU KNOW?</span> More than 50%  of the human body is made up of water. Humans and other animals must continually take in water to replace water lost through sweating, breathing, elimination of waste, and other processes. "]},
	
		
	'Groundwater':{'img':'woff','text':["Sometimes groundwater can <span class='spanbold'>seep</span> from the ground into bodies of water. This happens when water in the ground moves sideways and passes through the bottom of a river or lake.","The roots of plants take up groundwater from the soil. This is called <span class='spanbold'>uptake.</span> When it rains, the water that lands directly on the plant is not actually used by the plant. The water must first soak into the ground, and then the roots can take it up. ","Just like water in a river, water that is underground flows downhill because of the force of <span class='spanbold'>gravity.</span> Also like river water, flowing groundwater can eventually end up in the ocean."],
	
	'infoText':["An underground layer of rock that traps and holds water is called an aquifer. Aquifers, which often occur in layers of sandstone, can store huge amounts of water.<br/><br/><span class='spanbold'>DID YOU KNOW?</span> For thousands of years, humans have been digging wells to draw groundwater from aquifers. In fact, there’s a good chance that your drinking water comes from the ground. Currently, about 44% of the population of the United States depends on groundwater for drinking water."]},
	
	
	'Plants':{'img':'woff','text':["<span class='spanbold'>Transpiration</span> in plants is similar to sweating in humans. The moisture contained within the leaves is drawn out by the energy from the sun and turned into water vapor that escapes into the atmosphere."],
	
	'infoText':["A plant has several structures that allow it to take in all the water it needs. Roots take in water from the ground. Stems or trunks store water and help move it to the leaves. Stomata, pore-like structures found on the leaves, return excess water back into the atmosphere.<br/><br/><span class='spanbold'>DID YOU KNOW?</span> About 10% of the moisture found in Earth’s atmosphere is released by plants."]},
	
	'Ocean':{'img':'woff','text':["Energy from the sun causes some of the water on the ocean’s surface to <span class='spanbold'>evaporate.</span> Water vapor is less dense than the air around it, so it rises into the atmosphere."],
	'infoText':["<span class='spanbold'>DID YOU KNOW?</span> About 97% of all the water on Earth is found in oceans. Water in the ocean is salty and undrinkable. But when ocean water evaporates, it leaves the salt behind."]},
	
	'Clouds':{'img':'woff','text':["<span class='spanbold'>Precipitation</span> is any form of water, solid or liquid, that falls from a cloud. Forms of precipitation include rain, snow, sleet, and hail. Snow is the most common form of precipitation over glaciers. Over time, large amounts of snow can pile up and compact, forming new layers of ice on a glacier.","<span class='spanbold'>Precipitation</span> is any form of water, solid or liquid, that falls from a cloud. Forms of precipitation include rain, snow, sleet, and hail. Some precipitation falls on flat areas of land, where it may pool in surface puddles or be soaked up by the soil. Some of this water will infiltrate through layers of soil and rock and collect in underground spaces called aquifers.","<span class='spanbold'>Precipitation</span> is any form of water, solid or liquid, that falls from a cloud. Forms of precipitation include rain, snow, sleet, and hail. When precipitation falls in and around rivers, the water level rises. If enough precipitation falls, the river may rise enough to cause flooding in the immediate area as well as downstream.","<span class='spanbold'>Precipitation</span> is any form of water, solid or liquid, that falls from a cloud. Forms of precipitation include rain, snow, sleet, and hail. Precipitation can occur over the ocean just as it can over land.<br/><br/> Because the ocean is so big, precipitation does not have a large effect on sea levels."],
	
	'infoText':["Clouds are made up of millions upon millions of tiny water droplets. These droplets are so small that they float in the atmosphere, held up by rising air.<br/><br/><span class='spanbold'>DID YOU KNOW?</span> As the water droplets in clouds collect more water, they grow heavier and begin falling to the ground. Depending on the air temperature, this can result in rain, snow, sleet, or hail. "]},

}


var exploreAudio= {
	
	'block0':{'img':'woff','text':["vlwace_01"]},
	
	'Glacier':{'img':'woff','text':["vlwace_03","vlwace_02"],
	
	'infoText':["vlwace_01"]},
	
	 'Snowmelt':{'img':'woff','text':["vlwace_14","vlwace_15"],
	 
	 'infoText':["vlwace_13"]},

	 'Atmosphere':{'img':'woff','text':["vlwace_12"],
	 
	 'infoText':["vlwace_11"]},
	 
    'Rivers':{'img':'woff','text':["vlwace_06","vlwace_08","vlwace_05","vlwace_07"],
	
	'infoText':["vlwace_04"]},

	 
	'Animals':{'img':'woff','text':["vlwace_26"],
	
	'infoText':["vlwace_25"]},
	
		
	'Groundwater':{'img':'woff','text':["vlwace_22","vlwace_23","vlwace_24"],
	
	'infoText':["vlwace_21"]},
	
	
	'Plants':{'img':'woff','text':["vlwace_28"],
	
	'infoText':["vlwace_27"]},
	
	'Ocean':{'img':'woff','text':["vlwace_10"],
	'infoText':["vlwace_09"]},
	
	'Clouds':{'img':'woff','text':["vlwace_20","vlwace_19","vlwace_17","vlwace_18"],
	
	'infoText':["vlwace_16"]},

}

var SlideContents_explore = {
	"MonteryBay":
	{
		"FoodWeb":
		{
			0:{
				'Image':'',
				'AudioText':[["Sixty-eight percent of the fresh water on Earth is frozen. Vast ice sheets in Antarctica and Greenland hold most of the world’s fresh water. Mountain glaciers contain much of the rest. However, with global temperatures rising, ice sheets and mountain glaciers are disappearing.<br/><br/><span class='spanbold'>DID YOU KNOW?</span> Glacier National Park in Montana had over 100 different glaciers in the early 1900s. Today, it has fewer than 30, and those have shrunk by more than half their size."],[],['Drag the kelp to the correct trophic level in the pyramid. ']],
				'audio':[["vlmeba_01"],[],['vlmeba_02']]
			  },
			1:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			2:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  }
		},
		"TropicLevel":
		{
			0:{
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			1:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			2:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  }
		}
	},
	"AmazonRainForest":
	{
		"FoodWeb":
		{
			0:{
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			1:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			2:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  }
		},
		"TropicLevel":
		{
			0:{
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			1:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			2:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  }
		}
	}
};

var SlideContents_activity = {

	"MonteryBay":
	{
		"FoodWeb":
		{
			0:{
				'Image':'',
				'AudioText':[["You are a particle of water. For thousands of years, this glacier has been your home. Sub-freezing temperatures have made it too cold for you to go anywhere. But now, things are starting to warm up. <br/><br/>In this activity, you will leave your glacial home and travel the world by following the water cycle. <br/><br/>But before you start your journey, it’s time to learn something about your current location. Continue reading to find out more about glaciers.","Sixty-eight percent of the fresh water on Earth is frozen. Vast ice sheets in Antarctica and Greenland hold most of the world’s fresh water. Mountain glaciers contain much of the rest. However, with global temperatures rising, ice sheets and mountain glaciers are disappearing.<br/><br/><span class='spanbold'>DID YOU KNOW?</span> Glacier National Park in Montana had over 100 different glaciers in the early 1900s. Today it has fewer than 30, and those have shrunk by more than half their size. ","Now that you’ve learned about glaciers, it’s time to start your journey through the water cycle. Snowmelt will be your first stop. To go there, find the Snowmelt label on the landscape and select it as your Next Location."],[],['Now that you’ve learned about glaciers, let’s start our journey through the water cycle. For our first stop, let’s visit the snowmelt. To go there, find Snowmelt on the landscape and select it as your Next Location.']],
				
				'audio':[["vlwaca_01","vlwace_01","vlwaca_03"],[],['vlwaca_03']]//0
				
			  },
			"Snowmeltclick":{
				'Image':'',
				'AudioText':[[],['Now select the appropriate Process. Choose the process that is capable of transporting water particles from glacier ice to liquid snowmelt.'],['Sorry, that is not the correct process. Try selecting a different process.']],
				'audio':[[],['vlwaca_04'],['vlwaca_05']]//1
			  },
			  
			  "Snowmeltprocess":{
				'Image':'',
				'AudioText':[[],['Energy from the sun can cause ice or snow on the surface of a glacier to <span class="spanbold">melt</span> into liquid water.<br/><br/>Observe the snow melting. Then, select the Continue button to continue the activity.'],[""]],
				'audio':[[],['vlwace_031'],[""]],
				
			  },
			"SnowmeltAnimEnd":{
				'Image':'',
				'AudioText':[[],['Every spring, snow and ice that has accumulated during the winter starts to melt. In some regions, millions of people depend on the melting snow for drinking water and agriculture. Rising temperatures in recent years have caused less snow to accumulate from year to year, threatening the water supply of these communities.<br/><br/><span class="spanbold">DID YOU KNOW?</span> If all of the ice sheets on Greenland and Antarctica were to melt, the oceans would rise by more than 60 meters (200 feet).',''],['']],
				'audio':[[],['vlwaca_06'],['']]
				
			  },
			
			  "Snowmeltclose":{
				'Image':'',
				'AudioText':[[],['You have made two stops along the water cycle. Select View My Progress to see a map of your progress. '],[]],
				'audio':[[],['vlwaca_07'],[]],
			  },
			  "Snowmelttrack":{
				'Image':'',
				'AudioText':[[],['This diagram is a model of your progress through the water cycle. So far, water molecules have traveled from a Glacier to Snowmelt. To do this, they had to follow the correct process: <span class="spanbold">melting.</span><br/><br/>Take a few moments to study the diagram. When you are ready to continue, select the X in the top right corner to close the window.'],[]],
				'audio':[[],['vlwaca_08'],[]]//3
			  },
			   "Snowmeltreset":{
				'Image':'',
				'AudioText':[[],["Your next stop is Rivers. To go there, select Rivers as your Next Location."],[""]],
				'audio':[[],["vlwaca_09"],[]]//3
			  },
			  "Riversclick":{
				'Image':'',
				'AudioText':[[],['Great. Now think about how liquid water from melting snow could make its way into a river. Then select the correct Process from the list. '],["Sorry, that is not the correct process. Try selecting a different process. How would liquid water from melting snow end up in a river?"]],
				'audio':[[],['vlwaca_10'],["vlwaca_11"]]//3
			  },
			 
			  
			  "Riversprocess":{
				'Image':'',
				'AudioText':[[],['The force of gravity causes liquid water to flow downhill. Water that flows over the surface of land is called <span class="spanbold">surface runoff.</span> Many glaciers are on mountains, so melted snow and ice form streams running downhill. These small streams eventually join to form rivers.'],[""]],
				'audio':[[],['vlwace_15'],[""]],
				
			  },
			   "RiversAnimEnd":{
				'Image':'',
				'AudioText':[[],['Gravity causes water to flow downward. Snowmelt on the mountainside flows downhill, collecting in rivers and streams. Rivers and streams transport water to lakes and oceans.<br/><br/><span class="spanbold">DID YOU KNOW?</span> Rivers and river systems can carry water over great distances. At 3,767 kilometers (2,341 miles) long, the Missouri River is the longest river in the United States. The Missouri flows into the Mississippi, which is the U.S. river with the greatest discharge. The Mississippi discharges about 16,792 cubic meters (about 593,000 cubic feet) of water per second into the Gulf of Mexico. That’s about as much water per second as six-and-a-half Olympic-sized swimming pools.',""],[""]],
				'audio':[[],['vlwaca_12'],[""]],
				
			  },
			  "Riversclose":{
				'Image':'',
				'AudioText':[[],['Now that you’re in a river, you’re really going places. River water can travel a long way in a short time, but it can also end up in places you might not expect. Your next stop is Groundwater. Find Groundwater in the landscape and select it.'],[""]],
				'audio':[[],['vlwaca_13'],[""]]//3
			  },
			  "Groundwaterclick":{
				'Image':'',
				'AudioText':[[],['Excellent. Now think about how water in a river could end up in the ground. Then select the correct Process from the list. '],["Sorry, that is not the correct process. How can river water end up as groundwater? Try selecting a different process."]],
				'audio':[[],['vlwaca_14'],["vlwaca_15"]]//3
			  },
			   
			  "Groundwaterprocess":{
				'Image':'',
				'AudioText':[[],["Some of the water in the river soaks into the ground and <span class='spanbold'>infiltrates</span> down through the layers of soil and rock. This groundwater can become trapped in cracks and spaces within the rock layers. The spaces fill up with water, forming what is called an aquifer."],[]],
				'audio':[[],['vlwace_07'],[]]//3
			  },
			  "GroundwaterAnimEnd":{
				'Image':'',
				'AudioText':[[],['You have now visited four locations in the water cycle. Select View My Progress to see your journey so far.'],[]],
				'audio':[[],['vlwaca_16'],[]]//3
			  },
			  "Groundwatertrack":{
				'Image':'',
				'AudioText':[[],['Look how far you’ve come! Use the Snapshot tool to take a picture of your progress.'],["Don’t leave yet! Take a snapshot of the progress you have made."]],
				'audio':[[],['vlwaca_17'],["vlwaca_18"]]//3
			  },
			  
			"Snapshotclick":{
				'Image':'',
				'AudioText':[[],['Take a few moments to study the diagram. When you are ready to continue, select the X in the top right corner to close the window.'],['']],
				'audio':[[],['vlwaca_19'],['']]
			  },
			"Groundwaterreset":{
				'Image':'',
				'AudioText':[[],['You have reached the end of this guided activity. So far, you have managed to travel all the way from a mountain glacier into an underground aquifer. But there are many more stops on the water cycle that you have yet to visit.<br/><br/>Now go to Explore mode and challenge yourself to visit every stop on the water cycle. You will start back at the glacier, but you do not have to take the same path. Good luck, and remember to go with the flow! ']],
				'audio':[[],['vlwaca_20']]
			  },
			 6:{
				'Image':'',
				'AudioText':[[],['Excellent. Which pot do you think will grow the best lettuce? Write down your prediction. Then select Grow to compare how red and blue light affect lettuce growth.'],['Select Grow to start the growing period.']]
			  },
			7:{
				'Image':'',
				'AudioText':[[],['Just like the first trial, the lettuce grew to a medium height and fullness under the red lamp. How does this compare to the lettuce under the blue lamp? Which one do you think your customers will prefer? <br><br>Record your results. Then, click Reset to test other wavelengths of light.'],[]]
			  },
			8:{
				'Image':'',
				'AudioText':[[],['Let’s test how some other colors of light affect plant growth. We will use the same plant so we can compare our results to the first two trials. Select Lettuce once again.'],['Choose Lettuce to plant your seeds.']]
			  },
			  9:{
				'Image':'',
				'AudioText':[[],['This time, let’s compare lettuce growth under red light and orange light. Make your selections. '],['Try again.  Set the left lamp to red and the right lamp to orange.']]
			  },
			10:{
				'Image':'',
				'AudioText':[[],['Excellent. Now select Grow to compare how these wavelengths of light affect the growth of lettuce.'],['Select Grow.']]
			  },
			11:{
				'Image':'',
				'AudioText':[[],['It’s time to get your lettuce to market. Compare how the well your lettuce grew under red and orange light. Did one do better than the other?<br><br>Record your results and compare them to previous trials. Then, click Reset to test other wavelengths of light. '],[]]
			  },
			  12:{
				'Image':'',
				'AudioText':[[],['Lettuce is a delicious vegetable that takes about 50 days to grow. <br></br>Now let’s compare how lettuce grows under different types of light. Set the lamp on the left to red light. Set the lamp on the right to green light.'],['Choose Lettuce again.']]
			  },
			13:{
				'Image':'',
				'AudioText':[[],['Great. Now let’s test violet light and yellow light. How do you think they will affect lettuce growth? Write down your prediction; then select Grow. '],['Try again. Set the lamp on the left to violet. Set the lamp on the right to yellow. ']]
			  },
			14:{
				'Image':'',
				'AudioText':[[],['Excellent. Now let’s grow some lettuce!'],['Select Grow to begin the growing period. ']]
			  },
			  15:{
				'Image':'',
				'AudioText':[[],['It’s harvest time again. But only one of these plants looks like it’s ready for market! What does this tell you about how violet and yellow light affect plant growth?','Record your results and compare them to previous trials. Can you identify the best wavelengths for growing lettuce? What about the worst? Write down your conclusions.'],[]]
			  },
			16:{
				'Image':'',
				'AudioText':[[],['You have reached the end of the guided activity. However, there is lots more to learn in this virtual lab. Select Explore to continue experimenting with different wavelengths of light on your own. You can continue testing lettuce or try your hand at growing tomatoes or cucumbers.  Try to figure out whether tomatoes and cucumbers prefer the same wavelengths of light as lettuce. Good luck!'],[]]
			  }
		},
		"TropicLevel":
		{
			0:{
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			1:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			2:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  }
		}
	},
	"AmazonRainForest":
	{
		"FoodWeb":
		{
			0:{
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			1:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			2:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  }
		},
		"TropicLevel":
		{
			0:{
				'Image':'',
				'AudioText':[["explore 1  at you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			1:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  },
			2:{
				'Image':'',
				'AudioText':[["Now use what you know to complete the trophic levels in the Monterey Bay pyramid. For example, you learned that kelp is a producer that makes its own food from the sun's energy. Drag kelp to the correct trophic level in the pyramid. "],[],['Drag the kelp to the correct trophic level in the pyramid. ']]
			  }
		}
	}
};
//information icon background text
var info_background = {
	'block0':{
			'img':'audio_icon',
			'text':"Water continually cycles among Earth's oceans, atmosphere, and land. The movement of water through Earth’s systems is called the <span class='spanbold'>water cycle.</span> The water cycle is also known as the <span>hydrologic cycle</span>. ",
			'audio':'vlmacbi_01'
		},
		'block1':{
			'img':'audio_icon',
			'text':"The water cycle is driven by the force of <span class='spanbold'>gravity</span> and energy from the sun. This energy causes a number of processes. Some of these processes may also cause water to change state. Processes involved in the water cycle include:",
			'audio':'vlmacbi_02'
		},
	'block2':{
			'img':'audio_icon',
			'text':"<span class='spanbold'>condensation:</span> the process by which a gas changes into a liquid",
			'audio':'vlmacbi_03'
		},
	'block3':{
			'img':'audio_icon',
			'text':"<span class='spanbold'>evaporation:</span> the process by which a liquid changes into a gas",
			'audio':'vlmacbi_04'
		},
	'block4':{
			'img':'audio_icon',
			'text':"<span class='spanbold'>groundwater flow:</span> the downward or horizontal flow of water stored under Earth’s surface",
			'audio':'vlmacbi_05'
			},
	'block5':{
			'img':'audio_icon',
			'text':"<span class='spanbold'>infiltration:</span> the process by which precipitation or surface water soaks downward through soil and into spaces between rock layers",
			'audio':'vlmacbi_06'
			},
	'block6':{
			'img':'audio_icon',
			'text':"<span class='spanbold'>melting:</span> the process by which solid matter changes into a liquid",
			'audio':'vlmacbi_07'
			},
	'block7':{
			'img':'audio_icon',
			'text':"<span class='spanbold'>precipitation:</span> water in the atmosphere that falls to Earth as a liquid or a solid",
			'audio':'vlmacbi_08'
			},
	'block8':{
			'img':'audio_icon',
			'text':"<span class='spanbold'>respiration:</span> the process of breathing, or taking in oxygen and giving off carbon dioxide, water vapor, and other gases",
			'audio':'vlmacbi_09'
			},
	'block9':{
			'img':'audio_icon',
			'text':"<span class='spanbold'>seepage:</span> the exchange of water between the ground and a body of water",
			'audio':'vlmacbi_10'
			},
	'block10':{
			'img':'audio_icon',
			'text':"<span class='spanbold'>sublimation:</span> the process by which solid matter changes directly into a gas",
			'audio':'vlmacbi_11'
			},
	'block11':{
			'img':'audio_icon',
			'text':"<span class='spanbold'>surface runoff:</span> water that flows over the ground because of gravity",
			'audio':'vlmacbi_12'
			},
    'block12':{
			'img':'audio_icon',
			'text':"<span class='spanbold'>transpiration:</span> the process by which water within the leaves of a plant evaporates and enters the atmosphere ",
			'audio':'vlmacbi_13'
			},
     'block13':{
			'img':'audio_icon',
			'text':"<span class='spanbold'>uptake:</span> the action by which living organisms take up or absorb a substance from the environment ",
			'audio':'vlmacbi_14'
			
			} 			
	};
			
//information icon help text
var info_help = {
	'block0':{
			'img':'Info_icon',
			'imgText':'Welcome',
			'text':"This mode shows you how to use the lab.",
			'audio':'help_1'
			},	
	'block1':{
			'img':'Info_icon',
			'imgText':'Explore',
			'text':"This mode lets you explore the lab on your own.",
			'audio':'help_2'
			},	
	'block2':{
			'img':'Info_icon',
			'imgText':'Activity',
			'text':"This mode guides you through an activity with step-by-step instructions.",
			'audio':'help_3'
			},
	'block3':{
			'img':'Info_icon',
			'imgText':'info_icon.png',
			'text':"This button provides Background Information and Help.",
			'audio':'help_4'
			},
	'block4':{
			'img':'Info_icon',
			'imgText':'camera_icon.png',
			'text':"This button takes a picture of your screen and saves it on your device.",
			'audio':'help_5'
			
		}
	};
