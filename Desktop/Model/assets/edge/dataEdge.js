
	var welcomeMode = {
		'step_0':{
				'bgimg':'step_0',
				'text':'Welcome to Travel the Water Cycle! &#x2003;&#x2003;&#x2003; In this activity, you will use the water cycle to travel the world.',
				'speechStyle':'bubbleDivNone',
				'position':[274,210],
				'anim':{},
				'audio':['vlwacw_01']
				},
		'step_1':{
				'bgimg':'step_1',
				'text':'Imagine you are a water particle. You are billions of years old. You’ve been everywhere from the bottom of the ocean to the highest clouds.',
				'speechStyle':'bubbleDivNone',
				'position':[274,210],
				'anim':{},
				'audio':['vlwacw_02']
				},
		'step_2':{
				'bgimg':'step_1',
				'text':'For the past 20,000 years, you have been frozen in a glacier high in a mountain range. But with global temperatures rising, the glacier has begun melting rapidly.',
				'speechStyle':'bubbleDivNone',
				'position':[274,210],
				'anim':{},
				'audio':['vlwacw_03']
				},
		'step_3':{
				'bgimg':'step_2',
				'text':'Today, the layer of ice above you melted. This is your moment! You are now free to start a new journey through the water cycle. There are so many places to visit! Where will you go first? How will you get there? What will you learn along the way?',
				'speechStyle':'bubbleDivNone',
				'position':[274,210],
				
				'anim':{},
				'audio':['vlwacw_04']
				},				
		'step_4':{
				'bgimg':'step_1',
				'text':'Your Current Location is always displayed here. At any time, you can select the arrow to learn about your current location.',
				'speechStyle':'bubbleDivMulti',
				'position':[310,105],
				'anim':{							
					'flow0':{'highlight':'yes','type':'cursor','from':[480,250],'to':[850,100],'toAnim':'animlabel1','bgChange':'step_4','defShow':'no'}
				},
				'audio':['vlwacw_05']
				},		
		/*'step_5':{
				'bgimg':'step_4',
				'text':'At any time, you can select the arrow to learn about your current location.',
				'speechStyle':'bubbleDivBottom',
				'position':[50,75],
				'anim':{
					'flow0':{'type':'cursor','from':[850,100],'to':[850,50],'toAnim':'animlabel1','bgChange':'step_1','highlight':'no','defShow':'yes'},
					'flow1':{'type':'fadeBubble'}
				},
				'audio':['vlwacw_06']
				},*/		
		'step_5':{
				'bgimg':'step_1',
				'text':'To travel to a new area, you must first select your Next Location from the landscape. Your options are limited because you must follow the water cycle.',
				'speechStyle':'bubbleDivBottom1',
				'position':[275,115],
				'anim':{
					'flow0':{'type':'cursor','from':[850,50],'to':[500,450],'toAnim':'animlabel1','bgChange':'step_3','highlight':'no','defShow':'yes'},
					'flow1':{'type':'fadeBubble','highlight':'no'}
				},
				'audio':['vlwacw_06']
				},	
		'step_6':{
				'bgimg':'step_1',
				'text':'Once you’ve decided where to go, select the Process that will get you there. Use your knowledge of the water cycle to pick the correct process.',
				'speechStyle':'bubbleDivMultidouble1',
				'position':[200,120],
				'anim':{},
				'audio':['vlwacw_07']
				},
		'step_7':{
				'bgimg':'step_4',
				'text':"If you choose correctly, you’ll see the process in action as you are transported to your chosen destination.",
				'speechStyle':'bubbleDivNone',
				'position':[274,210],
				'anim':{},
				'audio':['vlwacw_08']
				},			
		'step_8':{
				'bgimg':'step_5',
				'text':'Once you arrive, take some time to learn about your new location. Then, you can continue your journey by selecting a new Next Location.',
				'speechStyle':'bubbleDivMultidouble2',
				'position':[315,100],
				'anim':{
					'flow0':{'highlight':'yes','type':'kelp','from':[140,120],'to':[706,388],'toAnim':'','bgChange':'','defShow':'yes'}				
				},
				'audio':['vlwacw_09']
				},
		'step_9':{
				'bgimg':'step_6',
				'text':'At any point in your journey, select View My Progress to see all the places you’ve visited so far. Use the Snapshot tool to record your progress.',
				'speechStyle':'bubbleDivBottom2',
				'position':[425,365],
				'anim':{},
				'audio':['vlwacw_10']
				},			
		/*'step_10':{
				'bgimg':'step_7',
				'text':'',
				'speechStyle':'bubbleDivBottom3',
				'position':[524,410],
				'anim':{},
				'audio':['vlwacw_12']
				},*/
		'step_10':{
				'bgimg':'step_6',
				'text':'You can select Info at any time to learn more about the water cycle or get help with the lab. Good luck and safe travels as you explore the water cycle!',
				'speechStyle':'bubbleDivMulti2',
				'position':[535,30],
				'anim':{},
				'audio':['vlwacw_11']
				}
		/*'step_13':{
				'bgimg':'step_1',
				'text':'Select Explore to begin the lab, or select Activity to complete a guided exploration. At any time during the lab, you can select the Information icon to learn more about trophic levels. Good luck!',
				'speechStyle':'bubbleDivTopCustom',
				'position':[487,30],
				'anim':{}
				},*/		
		};
var weltextlen = Number(Object.keys(welcomeMode).length);
var animPlayArr = [0,2000,4000,7000,9000,20000,35000,50000,60000,70000,85000];
var animPlayArrRev = [0,2500,4500,7500,9500,20500,35500,50500,60500,70500,85000];

var welcomeMove = 0;
var speechBubblePos = 'bubbleDivNone';