const wrapper = document.querySelectorAll('.progress__block');
const barCount = 50; // number of bars
const percentDemo = 50 * 90/100; // 90%
for (let index = 0; index < barCount; index++) {
  const className = index < percentDemo ? 'selected-demo' : '';
  wrapper[0].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}
wrapper[0].innerHTML += `<p class="selected percent-text text-demo">90%</p>`;

const chooseSelect = () => {
const element = document.querySelector('.choose');
const choices = new Choices(element);
};

chooseSelect();

//поправить названия для второгоselext
const choosesSelect = () => {
  const element = document.querySelector('.chooses');
  const choices = new Choices(element);
  };
  
  choosesSelect();

//own range slider
// var sliders = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = sliders.value;

// sliders.oninput = function() {
//   output.innerHTML = this.value;
// };

  //double  range-slider

  var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
  
});

//range-slider

var sliderRange = document.getElementById('slider-round');

noUiSlider.create(sliderRange, {
    start: [50],
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});


// range-slider with tooltip

var sliderTooltip = document.getElementById('tooltip');

noUiSlider.create(sliderTooltip, {
    start: [15],
    connect: 'lower',
    step: 1,
    tooltips: [true],
    decimals: 1,
    range: {
        'min': 0,
        'max': 30
    },
    format: {
      // 'to' the formatted value. Receives a number.
      to: function (value) {
          return value + ' ';
      },
      // 'from' the formatted value.
      // Receives a string, should return a number.
      from: function (value) {
          return Number(value.replace(' ', ''));
      }
  }
  
});

// range-slider with double tooltip

var doubleTooltip = document.getElementById('tooltip-double');

noUiSlider.create(doubleTooltip, {
    start: [15, 34],
    connect: true,
    step: 1,
    tooltips: [true, true],
    decimals: 1,
    range: {
        'min': 0,
        'max': 50
    },
    format: {
      // 'to' the formatted value. Receives a number.
      to: function (value) {
          return value + ' ';
      },
      // 'from' the formatted value.
      // Receives a string, should return a number.
      from: function (value) {
          return Number(value.replace(',-', ''));
      }
  }
  
});

// range-slider with double tooltip light range
var doubleTulLight = document.getElementById('tooltip-big');

noUiSlider.create(doubleTulLight, {
    start: [15, 34],
    connect: true,
    step: 1,
    tooltips: [true, true],
    decimals: 1,
    range: {
        'min': 0,
        'max': 50
    },
    format: {
      // 'to' the formatted value. Receives a number.
      to: function (value) {
          return value + ' ';
      },
      // 'from' the formatted value.
      // Receives a string, should return a number.
      from: function (value) {
          return Number(value.replace(',-', ''));
      }
  }
  
});

//calendar

// webix.Date.isHoliday = function(day){ 
//   day = day.getDay();
//   if (day === 0 || day==5 || day == 6) return "webix_cal_event"; 
// };

// webix.ui({
//   weekHeader:true,
//   date:new Date(2022,2,20),
//   view:"calendar",
//   events:webix.Date.isHoliday,
//   width:320,
//   height:250
// });


webix.i18n.setLocale("de-DE");

webix.ui({
  view:"calendar"
});


// webix.ready(function() {
//   if (!webix.env.touch && webix.env.scrollSize)
//     webix.CustomScroll.init();


//   var d_range1 = {
//     view:"daterange",
//     icons:true
//   };	

//   var d_range2 = {
//     view:"daterange",
//     icons:[
//       //custom icon
//       {
//         template:function(){
//           return "<span role='button' tabindex='0' class='webix_cal_icon_week webix_cal_icon'>Current week</span>"
//         },
//         on_click:{
//           "webix_cal_icon_week":function(){
//             this.setValue({
//               start:new Date(),
//               end:webix.Date.add(new Date(), 1, "week")
//             });
//           }
//         }
//       },
//       //default "today" icon
//       {
//         template:function(){
//           return "<span role='button' tabindex='0' class='webix_cal_icon_today webix_cal_icon'>"+webix.i18n.calendar.today+"</span>"
//         },
//         on_click:{
//           "webix_cal_icon_today":function(){
//             this.addToRange(new Date());
//             this.callEvent("onTodaySet",[this.getValue()]);
//           }
//         }
//       },
//       //default "clear" icon
//       {
//         template:function(){
//           return "<span role='button' tabindex='0' class='webix_cal_icon_clear webix_cal_icon'>"+webix.i18n.calendar.clear+"</span>"
//         },
//         on_click:{
//           "webix_cal_icon_clear":function(){
//             this.setValue("");
//             this.callEvent("onDateClear", []);
//           }
//         }
//       }
//     ],
//     timepicker:true,
//     value:{
//       start: new Date(), 
//       end: webix.Date.add(new Date(), 2, "month")
//     }
//   };

//   webix.ui({
//     view: "scrollview",
//     scroll: "y",
//     body: {
//       cols:[
//         {
//           rows:[
//             d_range1,
//             d_range2,
//           ]
//         }
//       ]
//     }
//   });
// });





// var time_data = [
//   { id:1, value:"Available", date:"2017-08-01"},
//   { id:2, value:"Taken", details:"by Malcolm Merlyn", date:"2017-09-10" },
//   { id:3, value:"Broken", date:"2017-12-11" },
//   { id:5, value:"Fixed", date:"2018-02-10" },
//   { id:6, value:"Available", date:"2018-03-15" },
  
// ];

// webix.ready(function(){
//   webix.ui({
//     view:"timeline", 
//     layout: "x",
//     data:time_data
//   });
// });