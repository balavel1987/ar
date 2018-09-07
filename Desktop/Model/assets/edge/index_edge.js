/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg_blur',
            type:'image',
            tag:'img',
            rect:['-113px','-144px','924px','587px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg_blur.png",'0px','0px']
         },
         {
            id:'bg_1',
            display:'none',
            type:'image',
            tag:'img',
            rect:['0','1px','924px','588px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg_1.png",'0px','0px']
         },
         {
            id:'track_rect',
            display:'none',
            type:'rect',
            rect:['660px','549px','160px','37px','auto','auto'],
            fill:["rgba(255,203,5,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'track_txt',
               type:'text',
               rect:['21px','7px','auto','auto','auto','auto'],
               text:"View My Progress",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'travel_rect',
            display:'none',
            type:'group',
            rect:['71px','93px','837','334','auto','auto'],
            c:[
            {
               id:'rect_1',
               type:'rect',
               rect:['65px','10px','110px','24px','auto','auto'],
               fill:["rgba(50,50,50,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'travel1_txt',
                  type:'text',
                  rect:['29px','0px','auto','auto','auto','auto'],
                  text:"Glacier",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1.00)","700","none","normal"]
               }]
            },
            {
               id:'rect_2',
               type:'rect',
               rect:['34px','63px','111px','24px','auto','auto'],
               fill:["rgba(255,204,0,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'travel2_txt',
                  type:'text',
                  rect:['18px','0px','auto','auto','auto','auto'],
                  text:"Snowmelt",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1.00)","700","none","normal"]
               }]
            },
            {
               id:'rect_3',
               type:'rect',
               rect:['726px','41px','110px','24px','auto','auto'],
               fill:["rgba(255,204,0,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'travel3_txt',
                  type:'text',
                  rect:['9px','0px','auto','auto','auto','auto'],
                  text:"Atmosphere",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","700","none","normal"]
               }]
            },
            {
               id:'rect_4',
               type:'rect',
               rect:['629px','-1px','111px','24px','auto','auto'],
               fill:["rgba(109,110,113,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'travel4_txt',
                  type:'text',
                  rect:['31px','0px','auto','auto','auto','auto'],
                  text:"Clouds",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1.00)","normal","none","normal"]
               }]
            },
            {
               id:'rect_5',
               type:'rect',
               rect:['542px','108px','110px','24px','auto','auto'],
               fill:["rgba(109,110,113,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'travel5_txt',
                  type:'text',
                  rect:['33px','0px','auto','auto','auto','auto'],
                  text:"Rivers",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1.00)","normal","none","normal"]
               }]
            },
            {
               id:'rect_6',
               type:'rect',
               rect:['345px','147px','110px','24px','auto','auto'],
               fill:["rgba(109,110,113,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'travel6_txt',
                  type:'text',
                  rect:['26px','2px','auto','auto','auto','auto'],
                  text:"Animals",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1.00)","normal","none","normal"]
               }]
            },
            {
               id:'rect_7',
               type:'rect',
               rect:['345px','310px','111px','24px','auto','auto'],
               fill:["rgba(109,110,113,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'travel7_txt',
                  type:'text',
                  rect:['35px','0px','auto','auto','auto','auto'],
                  text:"Ocean",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1.00)","normal","none","normal"]
               }]
            },
            {
               id:'rect_8',
               type:'rect',
               rect:['95px','177px','110px','24px','auto','auto'],
               fill:["rgba(109,110,113,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'travel8_txt',
                  type:'text',
                  rect:['30px','4px','auto','auto','auto','auto'],
                  text:"Plants",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1.00)","normal","none","normal"]
               }]
            },
            {
               id:'rect_9',
               type:'rect',
               rect:['1px','294px','111px','24px','auto','auto'],
               fill:["rgba(109,110,113,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'travel9_txt',
                  type:'text',
                  rect:['9px','0px','auto','auto','auto','auto'],
                  text:"Groundwater",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1.00)","normal","none","normal"]
               }]
            }]
         },
         {
            id:'activtArr_1',
            display:'none',
            type:'image',
            rect:['215px','111px','55px','64px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"activtarr1.png",'0px','0px']
         },
         {
            id:'videoDiv',
            display:'none',
            type:'rect',
            rect:['24px','85px','91px','37px','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'close_rect',
            display:'none',
            type:'rect',
            rect:['660px','549px','160px','37px','auto','auto'],
            fill:["rgba(255,203,5,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'close_txt',
               type:'text',
               rect:['47px','8px','auto','auto','auto','auto'],
               text:"Continue",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'top',
            display:'none',
            type:'group',
            rect:['0','1','927','71','auto','auto'],
            c:[
            {
               id:'curr_loc',
               type:'rect',
               rect:['0px','-1px','306px','37px','auto','auto'],
               fill:["rgba(167,169,172,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               c:[
               {
                  id:'current_txt',
                  type:'text',
                  rect:['89px','7px','auto','auto','auto','auto'],
                  text:"Current Location",
                  font:['Arial, Helvetica, sans-serif',17,"rgba(0,0,0,1)","normal","none",""]
               }]
            },
            {
               id:'next_loc',
               type:'rect',
               rect:['307px','-1px','307px','37px','auto','auto'],
               fill:["rgba(167,169,172,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               c:[
               {
                  id:'next_txt',
                  type:'text',
                  rect:['101px','7px','auto','auto','auto','auto'],
                  text:"Next Location",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',17,"rgba(0,0,0,1)","normal","none","normal"]
               }]
            },
            {
               id:'process_loc',
               type:'rect',
               rect:['615px','-1px','309px','37px','auto','auto'],
               fill:["rgba(167,169,172,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               c:[
               {
                  id:'process_txt',
                  type:'text',
                  rect:['124px','7px','auto','auto','auto','auto'],
                  text:"Process",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',17,"rgba(0,0,0,1)","normal","none","normal"]
               }]
            },
            {
               id:'loc_map',
               type:'rect',
               rect:['307px','36px','307px','34px','auto','auto'],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               c:[
               {
                  id:'map_txt',
                  type:'text',
                  rect:['51px','7px','auto','auto','auto','auto'],
                  text:"Select a location on the map",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',17,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'snow_txt',
                  display:'none',
                  type:'text',
                  rect:['108px','6px','auto','auto','auto','auto'],
                  text:"Snowmelt",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',17,"rgba(0,0,0,1)","normal","none","normal"]
               }]
            },
            {
               id:'glacier_rect',
               type:'rect',
               rect:['0px','36px','306px','34px','auto','auto'],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               c:[
               {
                  id:'glacier_txt',
                  type:'text',
                  rect:['114px','8px','auto','auto','auto','auto'],
                  text:"Glacier",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',17,"rgba(0,0,0,1)","normal","none","normal"]
               },
               {
                  id:'snow_txt1',
                  display:'none',
                  type:'text',
                  rect:['116px','5px','auto','auto','auto','auto'],
                  text:"Snowmelt",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',17,"rgba(0,0,0,1)","normal","none","normal"]
               }]
            }]
         },
         {
            id:'select_rect',
            display:'none',
            type:'rect',
            rect:['615px','37px','308px','34px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'process_menu_txt',
               type:'text',
               rect:['54px','7px','auto','auto','auto','auto'],
               text:"Select the appropriate process",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'select_arrow',
               type:'rect',
               rect:['271px','13px','0px','0px','auto','auto'],
               borderRadius:["0px 0px","0px 0px","0px","0px"],
               fill:["rgba(255,255,255,1)"],
               stroke:[10,"rgba(167,169,172,1.00)","solid"]
            }]
         },
         {
            id:'select_rect1',
            display:'none',
            type:'rect',
            rect:['615px','37px','308px','34px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'melt_menu_txt',
               type:'text',
               rect:['128px','6px','auto','auto','auto','auto'],
               text:"Melting",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'popup_container',
            display:'none',
            type:'group',
            rect:['-280px','159px','304','391','auto','auto'],
            c:[
            {
               id:'popup_box',
               type:'rect',
               rect:['0px','20px','279px','353px','auto','auto'],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'scroll_outline',
               type:'rect',
               rect:['266px','22px','12px','348px','auto','auto'],
               opacity:0.71223021582734,
               fill:["rgba(255,255,255,1)"],
               stroke:[1,"rgba(0,0,0,0.70)","solid"]
            },
            {
               id:'scroll_bar',
               type:'rect',
               rect:['267px','20px','13px','268px','auto','auto'],
               opacity:0.49640287769784,
               fill:["rgba(0,0,0,0.50)"],
               stroke:[1,"rgba(0, 0, 0, 0.699219)","none"]
            },
            {
               id:'lslider',
               type:'image',
               tag:'img',
               rect:['280px','22px','25px','58px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"lslider.png",'0px','0px'],
               transform:[[],['180']]
            },
            {
               id:'audio_icon_normal2',
               type:'image',
               rect:['13px','36px','30px','30px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"audio_icon_normal2.png",'0px','0px']
            },
            {
               id:'popup_top',
               type:'rect',
               rect:['0px','0px','281px','22px','auto','auto'],
               fill:["rgba(147,149,152,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'top_txt',
                  type:'text',
                  rect:['131px','-13px','20px','18px','auto','auto'],
                  text:"≡",
                  font:['Arial, Helvetica, sans-serif',32,"rgba(122,122,122,1.00)","700","none",""]
               }]
            },
            {
               id:'did_txt',
               type:'text',
               rect:['49px','38px','204px','auto','auto','auto'],
               text:"Did you know that 68% of the fresh water on Earth is frozen? Vast ice sheets in Antarctica and Greenland hold most of the world’s fresh water. Mountain glaciers contain much of the rest. However, with global temperatures rising, ice sheets and mountain glaciers are disappearing.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1.00)","400","none","normal"]
            },
            {
               id:'did1_txt',
               type:'text',
               rect:['49px','302px','190px','auto','auto','auto'],
               text:"DID YOU KNOW? ",
               align:"left",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","700","none","normal"]
            },
            {
               id:'did2_txt',
               type:'text',
               rect:['49px','302px','198px','auto','auto','auto'],
               text:"                               Glacier National Park in Montana had over 100 different",
               align:"left",
               font:['Roboto-Regular',16,"rgba(0,0,0,1)","400","none","normal"]
            },
            {
               id:'shadow_rect',
               type:'rect',
               rect:['6px','335px','255px','34px','auto','auto'],
               fill:["rgba(255,255,255,1.00)",[258,[['rgba(255,255,255,1.00)',0],['rgba(255,255,255,1.00)',39],['rgba(255,255,255,0.00)',100]],true]],
               stroke:[1,"rgba(0, 0, 0, 0.699219)","none"],
               transform:[[],['180']]
            }]
         },
         {
            id:'process_menu',
            display:'none',
            type:'rect',
            rect:['615px','71px','310px','405px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'pro_txt12',
               type:'text',
               rect:['135px','367px','auto','auto','auto','auto'],
               text:"Uptake",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'pro_txt11',
               type:'text',
               rect:['122px','335px','auto','auto','auto','auto'],
               text:"Transpiration",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'pro_txt10',
               type:'text',
               rect:['115px','302px','auto','auto','auto','auto'],
               text:"Surface runoff",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'pro_txt9',
               type:'text',
               rect:['125px','270px','auto','auto','auto','auto'],
               text:"Sublimation",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'pro_txt8',
               type:'text',
               rect:['135px','238px','auto','auto','auto','auto'],
               text:"Seepage",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'pro_txt7',
               type:'text',
               rect:['129px','206px','auto','auto','auto','auto'],
               text:"Respiration",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'pro_txt6',
               type:'text',
               rect:['124px','174px','auto','auto','auto','auto'],
               text:"Precipitation",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'pro_txt5',
               type:'text',
               rect:['134px','125px','auto','auto','auto','auto'],
               text:"Melting",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'pro_txt4',
               type:'text',
               rect:['123px','102px','auto','auto','auto','auto'],
               text:"Infiltration",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'pro_txt3',
               type:'text',
               rect:['110px','22px','auto','auto','auto','auto'],
               text:"Condensation",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'pro_txt2',
               type:'text',
               rect:['98px','78px','auto','auto','auto','auto'],
               text:"Groundwater flow",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'pro_txt1',
               type:'text',
               rect:['116px','52px','auto','auto','auto','auto'],
               text:"Evaporation",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            }]
         },
         {
            id:'highlight_box',
            display:'none',
            type:'rect',
            rect:['306px','0px','302px','32px','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[3,"rgba(252,252,5,1.00)","solid"]
         },
         {
            id:'progress_rect',
            display:'none',
            type:'rect',
            rect:['59px','82px','825px','446px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[1,"rgba(0,0,0,1)","solid"],
            c:[
            {
               id:'Text',
               type:'text',
               rect:['381px','11px','auto','auto','auto','auto'],
               text:"My Progress",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            },
            {
               id:'close',
               type:'image',
               rect:['774px','13px','28px','28px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"close.png",'0px','0px']
            },
            {
               id:'pro_2',
               type:'rect',
               rect:['49px','147px','111px','24px','auto','auto'],
               fill:["rgba(255,204,0,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'pro2_txt',
                  type:'text',
                  rect:['18px','0px','auto','auto','auto','auto'],
                  text:"Snowmelt",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1.00)","700","none","normal"]
               }]
            },
            {
               id:'pro_1',
               type:'rect',
               rect:['126px','32px','110px','24px','auto','auto'],
               fill:["rgba(50,50,50,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               c:[
               {
                  id:'pro1_txt',
                  type:'text',
                  rect:['29px','0px','auto','auto','auto','auto'],
                  text:"Glacier",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1.00)","700","none","normal"]
               }]
            },
            {
               id:'arrowarr2',
               type:'image',
               rect:['61px','42px','70px','109px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"arrowarr2.png",'0px','0px']
            },
            {
               id:'meltpro_txt',
               type:'text',
               rect:['27px','55px','auto','auto','auto','auto'],
               text:"Melting",
               align:"left",
               font:['Roboto-Regular',16,"rgba(0,0,0,1.00)","bold","none","normal"],
               transform:[[],['-58']]
            },
            {
               id:'track',
               type:'image',
               tag:'img',
               rect:['38px','30px','790px','429px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"track.png",'0px','0px']
            }]
         },
         {
            id:'camera_icon',
            display:'none',
            type:'image',
            tag:'img',
            rect:['876','543px','40px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"camera_icon.png",'0px','0px']
         },
         {
            id:'arrow_2',
            display:'none',
            type:'image',
            tag:'img',
            rect:['796px','0px','20px','31px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow_2.png",'0px','0px']
         },
         {
            id:'welcomeGroup',
            type:'group',
            rect:['291px','199px','380','132','auto','auto'],
            c:[
            {
               id:'audio_icon_normal',
               type:'image',
               tag:'img',
               rect:['9px','12px','28px','28px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"audio_icon_normal2.png",'0px','0px']
            },
            {
               id:'welText',
               type:'text',
               rect:['48px','12px','321px','auto','auto','auto'],
               text:"Test"
            },
            {
               id:'right_slider_act',
               type:'image',
               tag:'img',
               rect:['196px','98px','28px','28px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"right_slider_act2.png",'0px','0px']
            },
            {
               id:'left_slider_act',
               type:'image',
               tag:'img',
               rect:['156px','98px','28px','28px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"left_slider_act2.png",'0px','0px']
            }]
         },
         {
            id:'cursor',
            display:'none',
            type:'image',
            rect:['73px','333px','31px','31px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cursor.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_glacier_txt}": [
            ["style", "top", '6px'],
            ["style", "font-family", 'Roboto-Bold'],
            ["style", "left", '126px'],
            ["style", "display", 'block']
         ],
         "${_melt_menu_txt}": [
            ["style", "top", '7px'],
            ["style", "font-family", 'Roboto-Bold'],
            ["style", "left", '128px'],
            ["style", "font-size", '16px']
         ],
         "${_pro_txt1}": [
            ["style", "top", '46px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '117px'],
            ["style", "font-size", '16px']
         ],
         "${_rect_8}": [
            ["style", "top", '107px'],
            ["color", "background-color", 'rgba(109,110,113,1)'],
            ["style", "left", '728px'],
            ["style", "width", '111px']
         ],
         "${_activtArr_1}": [
            ["style", "top", '115px'],
            ["style", "height", '59px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '87px'],
            ["style", "width", '52px']
         ],
         "${_snow_txt}": [
            ["style", "top", '6px'],
            ["style", "font-family", 'Roboto-Bold'],
            ["style", "left", '115px'],
            ["style", "display", 'none']
         ],
         "${_travel1_txt}": [
            ["style", "top", '0px'],
            ["style", "font-weight", 'normal'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '30px'],
            ["style", "font-size", '16px']
         ],
         "${_audio_icon_normal2}": [
            ["style", "top", '36px'],
            ["style", "height", '30px'],
            ["style", "left", '13px'],
            ["style", "width", '30px']
         ],
         "${_welcomeGroup}": [
            ["style", "display", 'block'],
            ["color", "border-color", 'rgb(0, 0, 0)'],
            ["style", "height", '150px'],
            ["style", "opacity", '1']
         ],
         "${_popup_top}": [
            ["style", "top", '0px'],
            ["style", "height", '22px'],
            ["color", "background-color", 'rgba(147,149,152,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '281px']
         ],
         "${_pro_txt11}": [
            ["style", "top", '334px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '113px'],
            ["style", "font-size", '16px']
         ],
         "${_lslider}": [
            ["style", "top", '22px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '58px'],
            ["style", "left", '280px'],
            ["style", "width", '25px']
         ],
         "${_right_slider_act}": [
            ["style", "top", '98px'],
            ["style", "left", '196px'],
            ["style", "cursor", 'pointer']
         ],
         "${_map_txt}": [
            ["style", "top", '5px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '44px'],
            ["style", "display", 'block']
         ],
         "${_pro_txt12}": [
            ["style", "top", '366px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '135px'],
            ["style", "font-size", '16px']
         ],
         "${_welText}": [
            ["style", "line-height", '24px'],
            ["style", "font-size", '16px'],
            ["style", "top", '12px'],
            ["style", "left", '48px'],
            ["style", "width", '321px']
         ],
         "${_meltpro_txt}": [
            ["style", "top", '61px'],
            ["transform", "rotateZ", '-58deg'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '22px'],
            ["style", "font-weight", 'normal']
         ],
         "${_close}": [
            ["style", "left", '800px'],
            ["style", "top", '8px']
         ],
         "${_next_txt}": [
            ["style", "top", '7px'],
            ["style", "font-family", 'Roboto-Bold'],
            ["style", "left", '101px']
         ],
         "${_track}": [
            ["style", "height", '429px'],
            ["style", "top", '30px'],
            ["style", "left", '38px'],
            ["style", "width", '790px']
         ],
         "${_did_txt}": [
            ["style", "top", '38px'],
            ["style", "width", '204px'],
            ["style", "font-weight", '400'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '49px'],
            ["style", "font-size", '16px']
         ],
         "${_rect_7}": [
            ["style", "top", '313px'],
            ["color", "background-color", 'rgba(109,110,113,1)'],
            ["style", "left", '344px'],
            ["style", "width", '111px']
         ],
         "${_bg_blur}": [
            ["style", "top", '0px'],
            ["style", "height", '588px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '924px']
         ],
         "${_rect_2}": [
            ["color", "background-color", 'rgba(255,204,0,1.00)'],
            ["style", "top", '63px'],
            ["style", "left", '34px'],
            ["style", "width", '111px']
         ],
         "${_travel3_txt}": [
            ["style", "top", '0px'],
            ["style", "font-weight", 'normal'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '12px'],
            ["style", "font-size", '16px']
         ],
         "${_process_menu}": [
            ["style", "top", '71px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '405px'],
            ["style", "opacity", '1'],
            ["style", "left", '614px'],
            ["style", "width", '311px']
         ],
         "${_pro_1}": [
            ["color", "background-color", 'rgba(109,110,113,1)'],
            ["style", "top", '36px'],
            ["style", "opacity", '0'],
            ["style", "left", '108px'],
            ["style", "width", '110px']
         ],
         "${_Text}": [
            ["style", "top", '11px'],
            ["style", "font-family", 'Roboto-Bold'],
            ["style", "left", '373px'],
            ["style", "font-size", '16px']
         ],
         "${_scroll_outline}": [
            ["style", "top", '22px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["color", "border-color", 'rgba(0,0,0,0.70)'],
            ["style", "height", '348px'],
            ["style", "opacity", '0.71223021582734'],
            ["style", "left", '266px'],
            ["style", "width", '12px']
         ],
         "${_Stage}": [
            ["style", "height", '588px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '924px']
         ],
         "${_progress_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '47px'],
            ["style", "width", '837px'],
            ["style", "top", '81px'],
            ["style", "height", '460px'],
            ["color", "border-color", 'rgba(85,85,85,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "display", 'none']
         ],
         "${_top}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_highlight_box}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "box-shadow", '0px 0px 27px #FFEB3B'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '3px'],
            ["style", "width", '302px'],
            ["style", "opacity", '0'],
            ["style", "height", '32px'],
            ["color", "border-color", 'rgba(252,252,5,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '306px']
         ],
         "${_track_txt}": [
            ["style", "top", '8px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '14px'],
            ["style", "font-size", '16px']
         ],
         "${_rect_5}": [
            ["style", "top", '107px'],
            ["color", "background-color", 'rgba(109,110,113,1)'],
            ["style", "left", '542px'],
            ["style", "width", '111px']
         ],
         "${_top_txt}": [
            ["style", "top", '-13px'],
            ["style", "width", '20px'],
            ["style", "height", '18px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["color", "color", 'rgba(122,122,122,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '131px'],
            ["style", "font-size", '32px']
         ],
         "${_travel5_txt}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '33px'],
            ["style", "font-size", '16px']
         ],
         "${_travel2_txt}": [
            ["style", "top", '0px'],
            ["style", "font-weight", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '19px'],
            ["style", "font-size", '16px']
         ],
         "${_select_rect1}": [
            ["style", "top", '37px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '34px'],
            ["style", "opacity", '1'],
            ["style", "left", '615px'],
            ["style", "width", '309px']
         ],
         "${_scroll_bar}": [
            ["style", "top", '20px'],
            ["color", "background-color", 'rgba(0,0,0,0.50)'],
            ["style", "border-style", 'none'],
            ["style", "height", '268px'],
            ["style", "opacity", '0.49640287769784'],
            ["style", "left", '267px'],
            ["style", "width", '13px']
         ],
         "${_popup_box}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '353px'],
            ["style", "top", '20px'],
            ["style", "left", '0px'],
            ["style", "width", '279px']
         ],
         "${_camera_icon}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '878px'],
            ["style", "top", '541px']
         ],
         "${_next_loc}": [
            ["color", "background-color", 'rgba(167,169,172,1)'],
            ["style", "top", '-1px'],
            ["style", "height", '37px'],
            ["style", "border-right", '1px solid #e6e7e8'],
            ["style", "left", '307px'],
            ["style", "width", '307px']
         ],
         "${_pro_txt9}": [
            ["style", "top", '270px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '117px'],
            ["style", "font-size", '16px']
         ],
         "${_curr_loc}": [
            ["color", "background-color", 'rgba(167,169,172,1.00)'],
            ["style", "height", '37px'],
            ["style", "top", '-1px'],
            ["style", "border-right", '1px solid #e6e7e8'],
            ["style", "width", '306px']
         ],
         "${_travel4_txt}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '31px'],
            ["style", "font-size", '16px']
         ],
         "${_rect_9}": [
            ["style", "top", '337px'],
            ["color", "background-color", 'rgba(109,110,113,1)'],
            ["style", "left", '713px'],
            ["style", "width", '111px']
         ],
         "${_pro2_txt}": [
            ["style", "top", '0px'],
            ["style", "font-weight", 'normal'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '22px'],
            ["style", "font-size", '16px']
         ],
         "${_popup_container}": [
            ["motion", "location", '-128px 354.5px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${_bg_1}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "top", '31px'],
            ["style", "height", '557px']
         ],
         "${_pro_txt5}": [
            ["style", "top", '142px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '134px'],
            ["style", "font-size", '16px']
         ],
         "${_pro_txt8}": [
            ["style", "top", '238px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '129px'],
            ["style", "font-size", '16px']
         ],
         "${_videoDiv}": [
            ["style", "top", '34px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_left_slider_act}": [
            ["style", "top", '98px'],
            ["style", "left", '156px'],
            ["style", "cursor", 'pointer']
         ],
         "${_snow_txt1}": [
            ["style", "top", '6px'],
            ["style", "font-family", 'Roboto-Bold'],
            ["style", "left", '114px'],
            ["style", "display", 'none']
         ],
         "${_rect_1}": [
            ["style", "top", '10px'],
            ["color", "background-color", 'rgba(50,50,50,1.00)'],
            ["style", "left", '65px'],
            ["style", "width", '110px']
         ],
         "${_cursor}": [
            ["style", "height", '31px'],
            ["motion", "location", '88.5px 348.5px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '31px']
         ],
         "${_pro_txt4}": [
            ["style", "top", '110px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '123px'],
            ["style", "font-size", '16px']
         ],
         "${_did1_txt}": [
            ["style", "top", '302px'],
            ["style", "font-weight", '700'],
            ["style", "font-family", 'Roboto-Bold'],
            ["style", "left", '49px'],
            ["style", "width", '190px']
         ],
         "${_audio_icon_normal}": [
            ["style", "top", '12px'],
            ["style", "left", '9px'],
            ["style", "cursor", 'pointer']
         ],
         "${_close_rect}": [
            ["color", "background-color", 'rgba(255,203,5,1)'],
            ["style", "display", 'none'],
            ["style", "top", '546px'],
            ["style", "height", '38px'],
            ["style", "opacity", '1'],
            ["style", "left", '659px'],
            ["style", "width", '158px']
         ],
         "${_close_txt}": [
            ["style", "top", '8px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '47px'],
            ["style", "font-size", '16px']
         ],
         "${_select_rect}": [
            ["style", "top", '37px'],
            ["color", "background-color", 'rgba(255,203,5,1.00)'],
            ["style", "height", '34px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '615px'],
            ["style", "width", '309px']
         ],
         "${_pro_txt7}": [
            ["style", "top", '206px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '119px'],
            ["style", "font-size", '16px']
         ],
         "${_pro1_txt}": [
            ["style", "top", '0px'],
            ["style", "font-weight", 'normal'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '30px'],
            ["style", "font-size", '16px']
         ],
         "${_arrow_2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '826px'],
            ["style", "display", 'none']
         ],
         "${_pro_txt2}": [
            ["style", "top", '78px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '96px'],
            ["style", "font-size", '16px']
         ],
         "${_travel7_txt}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '33px'],
            ["style", "font-size", '16px']
         ],
         "${_travel8_txt}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '32px'],
            ["style", "font-size", '16px']
         ],
         "${_pro_txt10}": [
            ["style", "top", '302px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '106px'],
            ["style", "font-size", '16px']
         ],
         "${_process_txt}": [
            ["style", "top", '7px'],
            ["style", "font-family", 'Roboto-Bold'],
            ["style", "left", '124px']
         ],
         "${_current_txt}": [
            ["style", "top", '7px'],
            ["style", "font-family", 'Roboto-Bold'],
            ["style", "left", '89px'],
            ["style", "font-size", '17px']
         ],
         "${_travel9_txt}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '9px'],
            ["style", "font-size", '16px']
         ],
         "${_select_arrow}": [
            ["color", "background-color", 'rgba(255,203,5,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '0deg'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '10px'],
            ["style", "width", '0px'],
            ["style", "top", '12px'],
            ["style", "height", '0px'],
            ["color", "border-color", '#a7a9ac rgb(255, 203, 5) rgb(255, 203, 5) rgb(255, 203, 5)'],
            ["style", "left", '274px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_process_menu_txt}": [
            ["style", "top", '7px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '40px'],
            ["style", "font-size", '16px']
         ],
         "${_pro_txt6}": [
            ["style", "top", '174px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '114px'],
            ["style", "font-size", '16px']
         ],
         "${_process_loc}": [
            ["color", "background-color", 'rgba(167,169,172,1)'],
            ["style", "height", '37px'],
            ["style", "top", '-1px'],
            ["style", "left", '615px'],
            ["style", "width", '309px']
         ],
         "${_glacier_rect}": [
            ["style", "top", '36px'],
            ["style", "height", '34px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-right", '1px solid #e6e7e8'],
            ["style", "width", '306px']
         ],
         "${_pro_txt3}": [
            ["style", "top", '14px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '110px'],
            ["style", "font-size", '16px']
         ],
         "${_rect_6}": [
            ["color", "background-color", 'rgba(109,110,113,1)'],
            ["style", "top", '149px'],
            ["style", "left", '344px'],
            ["style", "width", '111px']
         ],
         "${_loc_map}": [
            ["style", "top", '36px'],
            ["style", "border-right", '1px solid #e6e7e8'],
            ["style", "height", '34px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '307px'],
            ["style", "width", '307px']
         ],
         "${_did2_txt}": [
            ["style", "top", '302px'],
            ["style", "text-indent", '127.5px'],
            ["style", "font-weight", '400'],
            ["style", "left", '49px'],
            ["style", "width", '198px']
         ],
         "${_rect_3}": [
            ["style", "top", '41px'],
            ["color", "background-color", 'rgba(255,204,0,1)'],
            ["style", "left", '725px'],
            ["style", "width", '111px']
         ],
         "${_travel_rect}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_shadow_rect}": [
            ["style", "top", '335px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '34px'],
            ["style", "background", 'linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 30%,rgba(255,255,255,0) 100%)'],
            ["style", "left", '6px'],
            ["transform", "", 'rotate(180deg)']
         ],
         "${_travel6_txt}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '26px'],
            ["style", "font-size", '16px']
         ],
         "${_etxt2Copy}": [
            ["style", "top", '497px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "display", 'none'],
            ["style", "left", '705px'],
            ["style", "font-size", '15px']
         ],
         "${_arrowarr2}": [
            ["style", "top", '47px'],
            ["style", "opacity", '0'],
            ["style", "left", '43px']
         ],
         "${_rect_4}": [
            ["color", "background-color", 'rgba(109,110,113,1.00)'],
            ["style", "top", '-1px'],
            ["style", "left", '629px'],
            ["style", "width", '111px']
         ],
         "${_pro_2}": [
            ["style", "top", '150px'],
            ["color", "background-color", 'rgba(50,50,50,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '39px'],
            ["style", "width", '116px']
         ],
         "${_track_rect}": [
            ["color", "background-color", 'rgba(255,203,5,1.00)'],
            ["style", "top", '546px'],
            ["style", "height", '38px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '659px'],
            ["style", "width", '158px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 86250,
         autoPlay: false,
         labels: {
            "Step_0": 1000,
            "Step 1": 2000,
            "Step_2": 4000,
            "Step_3": 7000,
            "Step_4": 9000,
            "Step_5": 20000,
            "Step_6": 35000,
            "Step_7": 50000,
            "Step_8": 60000,
            "Step_9": 70000,
            "Step_10": 85000
         },
         timeline: [
            { id: "eid182", tween: [ "style", "${_glacier_txt}", "display", 'none', { fromValue: 'block'}], position: 60000, duration: 0 },
            { id: "eid17", tween: [ "style", "${_top}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid220", tween: [ "style", "${_progress_rect}", "display", 'block', { fromValue: 'none'}], position: 75000, duration: 0 },
            { id: "eid242", tween: [ "style", "${_progress_rect}", "display", 'none', { fromValue: 'block'}], position: 82500, duration: 0 },
            { id: "eid167", tween: [ "style", "${_videoDiv}", "display", 'block', { fromValue: 'none'}], position: 50000, duration: 0 },
            { id: "eid176", tween: [ "style", "${_videoDiv}", "display", 'none', { fromValue: 'block'}], position: 60000, duration: 0 },
            { id: "eid120", tween: [ "color", "${_travel3_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 0 },
            { id: "eid121", tween: [ "color", "${_travel3_txt}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 28000, duration: 0 },
            { id: "eid39", tween: [ "style", "${_popup_container}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid25", tween: [ "style", "${_track_rect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid222", tween: [ "style", "${_track_rect}", "display", 'none', { fromValue: 'block'}], position: 75000, duration: 0 },
            { id: "eid244", tween: [ "style", "${_track_rect}", "display", 'block', { fromValue: 'none'}], position: 82500, duration: 0 },
            { id: "eid99", tween: [ "style", "${_snow_txt}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
            { id: "eid180", tween: [ "style", "${_snow_txt}", "display", 'none', { fromValue: 'block'}], position: 60000, duration: 0 },
            { id: "eid41", tween: [ "style", "${_popup_container}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid117", tween: [ "color", "${_rect_3}", "background-color", 'rgba(255,204,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,204,0,1)'}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "color", "${_rect_3}", "background-color", 'rgba(109,110,113,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,204,0,1)'}], position: 28000, duration: 0 },
            { id: "eid164", tween: [ "style", "${_select_rect1}", "display", 'block', { fromValue: 'none'}], position: 44500, duration: 0 },
            { id: "eid179", tween: [ "style", "${_select_rect1}", "display", 'none', { fromValue: 'block'}], position: 60000, duration: 0 },
            { id: "eid185", tween: [ "color", "${_rect_5}", "background-color", 'rgba(109,110,113,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,110,113,1)'}], position: 0, duration: 0 },
            { id: "eid187", tween: [ "color", "${_rect_5}", "background-color", 'rgba(255,204,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,110,113,1)'}], position: 60000, duration: 0 },
            { id: "eid42", tween: [ "style", "${_cursor}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
            { id: "eid166", tween: [ "style", "${_arrow_2}", "display", 'block', { fromValue: 'none'}], position: 85500, duration: 0 },
            { id: "eid94", tween: [ "style", "${_select_rect}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
            { id: "eid163", tween: [ "style", "${_select_rect}", "display", 'none', { fromValue: 'block'}], position: 44500, duration: 0 },
            { id: "eid300", tween: [ "color", "${_select_rect}", "background-color", 'rgba(255,203,5,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,203,5,1.00)'}], position: 28000, duration: 0 },
            { id: "eid302", tween: [ "color", "${_select_rect}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,203,5,1.00)'}], position: 40500, duration: 0 },
            { id: "eid159", tween: [ "style", "${_activtArr_1}", "opacity", '0', { fromValue: '1'}], position: 50000, duration: 500 },
            { id: "eid101", tween: [ "style", "${_welcomeGroup}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid102", tween: [ "style", "${_welcomeGroup}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid112", tween: [ "style", "${_activtArr_1}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0 },
            { id: "eid63", tween: [ "transform", "${_lslider}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "transform", "${_lslider}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 14000, duration: 0 },
            { id: "eid69", tween: [ "transform", "${_lslider}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 19000, duration: 0 },
            { id: "eid205", tween: [ "transform", "${_lslider}", "rotateZ", '0deg', { fromValue: '180deg'}], position: 64750, duration: 0 },
            { id: "eid210", tween: [ "transform", "${_lslider}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 69250, duration: 0 },
            { id: "eid96", tween: [ "style", "${_map_txt}", "display", 'none', { fromValue: 'block'}], position: 28000, duration: 0 },
            { id: "eid181", tween: [ "style", "${_map_txt}", "display", 'block', { fromValue: 'none'}], position: 60000, duration: 0 },
            { id: "eid24", tween: [ "style", "${_travel_rect}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid162", tween: [ "style", "${_travel_rect}", "opacity", '0', { fromValue: '1'}], position: 50000, duration: 500 },
            { id: "eid178", tween: [ "style", "${_travel_rect}", "opacity", '1', { fromValue: '0'}], position: 60000, duration: 0 },
            { id: "eid126", tween: [ "color", "${_travel2_txt}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid124", tween: [ "color", "${_travel2_txt}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 28000, duration: 0 },
            { id: "eid67", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 890 },
            { id: "eid150", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 290 },
            { id: "eid105", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 500 },
            { id: "eid62", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 3750, duration: 195 },
            { id: "eid55", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500 },
            { id: "eid106", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 6447, duration: 303 },
            { id: "eid107", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 500 },
            { id: "eid108", tween: [ "style", "${_welcomeGroup}", "opacity", '0.5', { fromValue: '1'}], position: 8219, duration: 281 },
            { id: "eid109", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '0.5'}], position: 8500, duration: 155 },
            { id: "eid110", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 9500, duration: 500 },
            { id: "eid111", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 19500, duration: 270 },
            { id: "eid58", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 20500, duration: 500 },
            { id: "eid44", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 33750, duration: 500 },
            { id: "eid46", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 35500, duration: 500 },
            { id: "eid47", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 49345, duration: 500 },
            { id: "eid48", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 50500, duration: 500 },
            { id: "eid97", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 59345, duration: 500 },
            { id: "eid98", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 60500, duration: 500 },
            { id: "eid115", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 69645, duration: 245 },
            { id: "eid116", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 70500, duration: 500 },
            { id: "eid127", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 84655, duration: 245 },
            { id: "eid135", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 85500, duration: 500 },
            { id: "eid35", tween: [ "style", "${_track_rect}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid45", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 10500, duration: 500 },
            { id: "eid54", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
            { id: "eid255", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 15250, duration: 500 },
            { id: "eid264", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 17750, duration: 500 },
            { id: "eid87", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 25000, duration: 500 },
            { id: "eid93", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 27500, duration: 500 },
            { id: "eid130", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 36500, duration: 500 },
            { id: "eid137", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 40000, duration: 500 },
            { id: "eid143", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 41500, duration: 500 },
            { id: "eid149", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 44000, duration: 500 },
            { id: "eid193", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 61500, duration: 250 },
            { id: "eid199", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 63500, duration: 250 },
            { id: "eid268", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 66750, duration: 250 },
            { id: "eid276", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 68250, duration: 250 },
            { id: "eid213", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 71500, duration: 500 },
            { id: "eid219", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 74500, duration: 500 },
            { id: "eid232", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 77000, duration: 500 },
            { id: "eid241", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 82000, duration: 500 },
            { id: "eid223", tween: [ "style", "${_camera_icon}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid221", tween: [ "color", "${_progress_rect}", "border-color", 'rgba(85,85,85,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(85,85,85,1.00)'}], position: 75000, duration: 0 },
            { id: "eid138", tween: [ "style", "${_process_menu}", "display", 'block', { fromValue: 'none'}], position: 40500, duration: 0 },
            { id: "eid165", tween: [ "style", "${_process_menu}", "display", 'none', { fromValue: 'block'}], position: 44500, duration: 0 },
            { id: "eid184", tween: [ "color", "${_rect_9}", "background-color", 'rgba(109,110,113,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,110,113,1)'}], position: 0, duration: 0 },
            { id: "eid186", tween: [ "color", "${_rect_9}", "background-color", 'rgba(255,204,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,110,113,1)'}], position: 60000, duration: 0 },
            { id: "eid59", tween: [ "motion", "${_popup_container}", [[-128,354.5,0,0],[152,354.5,0,0]]], position: 13000, duration: 1000 },
            { id: "eid68", tween: [ "motion", "${_popup_container}", [[152,354.5,0,0],[-128,354.5,0,0]]], position: 18250, duration: 750 },
            { id: "eid204", tween: [ "motion", "${_popup_container}", [[-128,354.5,0,0],[152,354.5,0,0]]], position: 63750, duration: 1000 },
            { id: "eid209", tween: [ "motion", "${_popup_container}", [[152,354.5,0,0],[-128,354.5,0,0]]], position: 68500, duration: 750 },
            { id: "eid27", tween: [ "style", "${_bg_1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid171", tween: [ "style", "${_arrow_2}", "opacity", '1', { fromValue: '0'}], position: 85500, duration: 500 },
            { id: "eid119", tween: [ "style", "${_bg_blur}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid226", tween: [ "style", "${_camera_icon}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid15", tween: [ "style", "${_top}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid30", tween: [ "style", "${_bg_1}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid153", tween: [ "style", "${_bg_1}", "opacity", '0', { fromValue: '1'}], position: 50000, duration: 500 },
            { id: "eid177", tween: [ "style", "${_bg_1}", "opacity", '1', { fromValue: '0'}], position: 60000, duration: 0 },
            { id: "eid18", tween: [ "style", "${_travel_rect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid229", tween: [ "style", "${_travel_rect}", "display", 'none', { fromValue: 'block'}], position: 75000, duration: 0 },
            { id: "eid243", tween: [ "style", "${_travel_rect}", "display", 'block', { fromValue: 'none'}], position: 82500, duration: 0 },
            { id: "eid189", tween: [ "color", "${_rect_1}", "background-color", 'rgba(50,50,50,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(50,50,50,1.00)'}], position: 0, duration: 0 },
            { id: "eid190", tween: [ "color", "${_rect_1}", "background-color", 'rgba(109,110,113,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(50,50,50,1.00)'}], position: 60000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_bg_blur}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid73", tween: [ "style", "${_bg_blur}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid250", tween: [ "style", "${_select_arrow}", "top", '2px', { fromValue: '12px'}], position: 40500, duration: 250 },
            { id: "eid71", tween: [ "style", "${_highlight_box}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0 },
            { id: "eid183", tween: [ "style", "${_snow_txt1}", "display", 'block', { fromValue: 'none'}], position: 60000, duration: 0 },
            { id: "eid174", tween: [ "style", "${_close_rect}", "display", 'block', { fromValue: 'none'}], position: 50000, duration: 0 },
            { id: "eid175", tween: [ "style", "${_close_rect}", "display", 'none', { fromValue: 'block'}], position: 60000, duration: 0 },
            { id: "eid247", tween: [ "transform", "${_select_arrow}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 40500, duration: 250 },
            { id: "eid76", tween: [ "style", "${_highlight_box}", "opacity", '1', { fromValue: '0'}], position: 21500, duration: 250 },
            { id: "eid79", tween: [ "style", "${_highlight_box}", "opacity", '0', { fromValue: '1'}], position: 22000, duration: 250 },
            { id: "eid81", tween: [ "style", "${_highlight_box}", "opacity", '1', { fromValue: '0'}], position: 22500, duration: 250 },
            { id: "eid82", tween: [ "style", "${_highlight_box}", "opacity", '0', { fromValue: '1'}], position: 23000, duration: 250 },
            { id: "eid83", tween: [ "style", "${_highlight_box}", "opacity", '1', { fromValue: '0'}], position: 23500, duration: 250 },
            { id: "eid84", tween: [ "style", "${_highlight_box}", "opacity", '0', { fromValue: '1'}], position: 24000, duration: 250 },
            { id: "eid51", tween: [ "motion", "${_cursor}", [[88.5,348.5,0,0],[17.5,228.5,0,0]]], position: 11500, duration: 750 },
            { id: "eid260", tween: [ "motion", "${_cursor}", [[17.5,228.5,0,0],[288.5,224.5,0,0]]], position: 16250, duration: 1000 },
            { id: "eid90", tween: [ "motion", "${_cursor}", [[288.5,224.5,0,0],[154.5,187.5,0,0]]], position: 26000, duration: 1000 },
            { id: "eid133", tween: [ "motion", "${_cursor}", [[154.5,187.5,0,0],[374.59,407.9,648.32,-106.61,425.22,-69.92],[902.5,64.5,0,0]]], position: 37500, duration: 2000 },
            { id: "eid146", tween: [ "motion", "${_cursor}", [[902.5,64.5,0,0],[841.72,196.1,-75.6,100.42,-113.13,150.26],[771.5,238.5,0,0]]], position: 42500, duration: 1000 },
            { id: "eid196", tween: [ "motion", "${_cursor}", [[771.5,238.5,0,0],[477.87,398.5,-625.97,0,-489.61,0],[16.5,238.5,0,0]]], position: 62000, duration: 1250 },
            { id: "eid272", tween: [ "motion", "${_cursor}", [[16.5,238.5,0,0],[290.5,223.5,0,0]]], position: 67250, duration: 750 },
            { id: "eid216", tween: [ "motion", "${_cursor}", [[290.5,223.5,0,0],[460.94,550.02,306.07,141.98,514.83,238.82],[736.5,572.5,0,0]]], position: 72500, duration: 1500 },
            { id: "eid235", tween: [ "motion", "${_cursor}", [[736.5,572.5,0,0],[896.5,572.5,0,0]]], position: 78000, duration: 1000 },
            { id: "eid238", tween: [ "motion", "${_cursor}", [[896.5,572.5,0,0],[860.5,119.5,0,0]]], position: 80000, duration: 1500 },
            { id: "eid125", tween: [ "color", "${_rect_2}", "background-color", 'rgba(255,204,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,204,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "color", "${_rect_2}", "background-color", 'rgba(109,110,113,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,204,0,1.00)'}], position: 28000, duration: 0 },
            { id: "eid188", tween: [ "color", "${_rect_2}", "background-color", 'rgba(50,50,50,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,110,113,1.00)'}], position: 60000, duration: 0 }         ]
      }
   }
},
"highAnim": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      s: [1,'rgb(0, 0, 0)','solid'],
      r: ['0px','0px','141px','32px','auto','auto'],
      id: 'highlightWel',
      t: 'rect',
      f: ['rgba(192,192,192,0.00)'],
      v: 'none'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlightWel}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["subproperty", "boxShadow.blur", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '144px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(255,204,0,1.00)'],
            ["style", "height", '33px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(255,204,0,1.00)'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["style", "border-width", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '32px'],
            ["style", "width", '141px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "dg136", tween: [ "style", "${_highlightWel}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg138", tween: [ "subproperty", "${_highlightWel}", "boxShadow.blur", '20px', { fromValue: '0px'}], position: 0, duration: 1000 },
            { id: "dg139", tween: [ "subproperty", "${_highlightWel}", "boxShadow.blur", '0px', { fromValue: '20px'}], position: 1000, duration: 1000 },
            { id: "dg140", tween: [ "style", "${_highlightWel}", "width", '144px', { fromValue: '144px'}], position: 0, duration: 0 },
            { id: "dg137", tween: [ "style", "${_highlightWel}", "height", '33px', { fromValue: '33px'}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1817669");
