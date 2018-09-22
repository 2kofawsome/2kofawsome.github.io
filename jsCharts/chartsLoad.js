function switchThemes() {
	if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAwhite.css") {
		document.getElementById("pageStyle").setAttribute("href", "jsCharts/TAblack.css");	
	}
	else {
		document.getElementById("pageStyle").setAttribute("href", "jsCharts/TAwhite.css");
	}	
}
document.getElementById("themeType").addEventListener("click", switchThemes);


function mobSwitchThemes() {
	if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAwhite.css") {
		document.getElementById("pageStyle").setAttribute("href", "jsCharts/TAblack.css");	
	}
	else {
		document.getElementById("pageStyle").setAttribute("href", "jsCharts/TAwhite.css");
	}	
}
document.getElementById("mobThemeType").addEventListener("click", mobSwitchThemes);


/*FusionCharts.ready(function() { //Mobile
	var mobOverall = new FusionCharts({
		"type": "msline",
		"renderAt": "mobSummaryChart",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
			"chart": {
				"caption": "% that won at each achievement level",
				"subCaption": "Over course of competition",
				"yAxisName": "Win %",
				"xAxisName": "Week of contest",
				"yAxisMaxValue": "100",
				"yAxisNameFontSize": "12",
				"xAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$seriesname",
				"drawAnchors": "0",
				"showLegend": "0",
				"canvasBgColor": "#eeeeee"
			},
			"categories": [
				{
					"category": [
						{
							"label": "1st"
						},{
							"label": "2nd"
						},{
							"label": "3rd"
						},{
							"label": "4th"
						}/*,{
							"label": "5th"
						},{
							"label": "6th"
						},{
							"label": "7th"
						},{
							"label": "8th"
						},{
							"label": "9th"
						},{
							"label": "10th"
						},{
							"label": "11th"
						},{
							"label": "12th"
						}
					]
				}
			],
			"dataset": [ //0
				{
					"seriesname": "0",
					"color": "#000000",
					"data": [
						{
							"value": "0"
						},{
							"value": "0"
						},{
							"value": "0"
						},{
							"value": "0"
						},
					]
				},{
					"seriesname": "1",
					"color": "#000000",
					"data": [
						{
							"value": "45.22"
						},{
							"value": "54.33"
						},{
							"value": "62.25"
						},{
							"value": "65.38"
						},
					]
				},{
					"seriesname": "2",
					"color": "#003200",
					"data": [
						{
							"value": "50.55"
						},{
							"value": "56.67"
						},{
							"value": "67.95"
						},{
							"value": "75.28"
						},
					]
				},{
					"seriesname": "3",
					"color": "#005f00",
					"data": [
						{
							"value": "46.46"
						},{
							"value": "59.70"
						},{
							"value": "66.13"
						},{
							"value": "65.22"
						},
					]
				},{
					"seriesname": "4",
					"color": "#007800",
					"data": [
						{
							"value": "53.52"
						},{
							"value": "65.71"
						},{
							"value": "59.26"
						},{
							"value": "91.11"
						},
					]
				},{
					"seriesname": "5",
					"color": "#008c00",
					"data": [
						{
							"value": "61.54"
						},{
							"value": "69.81"
						},{
							"value": "77.59"
						},{
							"value": "85.71"
						},
					]
				},{
					"seriesname": "6",
					"color": "#00a000",
					"data": [
						{
							"value": "66.67"
						},{
							"value": "70.59"
						},{
							"value": "71.43"
						},{
							"value": "80.00"
						},
					]
				},{
					"seriesname": "7",
					"color": "#00b900",
					"data": [
						{
							"value": "65.00"
						},{
							"value": "73.33"
						},{
							"value": "68.89"
						},{
							"value": "71.79"
						},
					]
				},{
					"seriesname": "8",
					"color": "#00c800",
					"data": [
						{
							"value": "71.83"
						},{
							"value": "60.38"
						},{
							"value": "75.76"
						},{
							"value": "75.86"
						},
					]
				},{
					"seriesname": "9",
					"color": "#00dc00",
					"data": [
						{
							"value": "62.96"
						},{
							"value": "71.43"
						},{
							"value": "80.77"
						},{
							"value": "85.00"
						},
					]
				},{
					"seriesname": "10",
					"color": "#00eb00",
					"data": [
						{
							"value": "75.32"
						},{
							"value": "72.31"
						},{
							"value": "71.74"
						},{
							"value": "82.93"
						},
					]
				},{
					"seriesname": "11",
					"color": "#00ff00",
					"data": [
						{
							"value": "74.00"
						},{
							"value": "79.25"
						},{
							"value": "77.78"
						},{
							"value": "77.41"
						},
					]
				},{
					"seriesname": "12",
					"color": "#25ff25",
					"data": [
						{
							"value": "71.43"
						},{
							"value": "79.55"
						},{
							"value": "86.11"
						},{
							"value": "84.21"
						},
					]
				},{
					"seriesname": "13",
					"color": "#4bff4b",
					"data": [
						{
							"value": "74.47"
						},{
							"value": "76.67"
						},{
							"value": "83.87"
						},{
							"value": "77.27"
						},
					]
				},{
					"seriesname": "14",
					"color": "#64ff64",
					"data": [
						{
							"value": "82.93"
						},{
							"value": "73.68"
						},{
							"value": "83.33"
						},{
							"value": "85.00"
						},
					]
				},{
					"seriesname": "15",
					"color": "#7dff7d",
					"data": [
						{
							"value": "69.23"
						},{
							"value": "81.08"
						},{
							"value": "87.10"
						},{
							"value": "88.24"
						},
					]
				},{
					"seriesname": "16",
					"color": "#96ff96",
					"data": [
						{
							"value": "87.88"
						},{
							"value": "85.71"
						},{
							"value": "70.59"
						},{
							"value": "83.33"
						},
					]
				},{
					"seriesname": "17",
					"color": "#afffaf",
					"data": [
						{
							"value": "68.75"
						},{
							"value": "80.95"
						},{
							"value": "80.0"
						},{
							"value": "87.5"
						},
					]
				},{
					"seriesname": "18",
					"color": "#c8ffc8",
					"data": [
						{
							"value": "75.00"
						},{
							"value": "72.22"
						},{
							"value": "71.43"
						},{
							"value": "50.00"
						},
					]
				},{
					"seriesname": "19",
					"color": "#e1ffe1",
					"data": [
						{
							"value": "85.00"
						},{
							"value": "86.67"
						},{
							"value": "90.91"
						},{
							"value": "100.00"
						},
					]
				},{
					"seriesname": "20",
					"color": "#ffffff",
					"data": [
						{
							"value": "89.66"
						},{
							"value": "96.55"
						},{
							"value": "90.00"
						},{
							"value": "100.00"
						},
					]
				},
			],
		}
	});
	mobOverall.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobOverall.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobOverall.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
}) */


FusionCharts.ready(function() { 
	var datasPud = {"week1":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Dark: Puddings | Light: No Puddings",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"bubbleScale": ".6",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.29",
          "z": "314"
        },
        {
          "x": "32.50",
          "y": "5.82",
          "z": "356"
        },
        {
          "x": "37.50",
          "y": "5.73",
          "z": "338"
        },
        {
          "x": "42.50",
          "y": "5.96",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.12",
          "z": "142"
        },
        {
          "x": "52.50",
          "y": "3.73",
          "z": "64"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }, //djudnisnfuhbdhusfdnjcndijsnuhcndijncjdbsuhcbhu
        {
          "x": "22.50",
          "y": "9.90",
          "z": "29",
		  "color": "#53a0d8"
        },
        {
          "x": "27.50",
          "y": "8.78",
          "z": "225",
		  "color": "#53a0d8"
        },
        {
          "x": "32.50",
          "y": "7.93",
          "z": "261",
		  "color": "#53a0d8"
        },
        {
          "x": "37.50",
          "y": "8.00",
          "z": "242",
		  "color": "#53a0d8"
        },
        {
          "x": "42.50",
          "y": "7.74",
          "z": "157",
		  "color": "#53a0d8"
        },
        {
          "x": "47.50",
          "y": "6.92",
          "z": "105",
		  "color": "#53a0d8"
        },
        {
          "x": "52.50",
          "y": "6.13",
          "z": "39",
		  "color": "#53a0d8"
        },
        {
          "x": "57.50",
          "y": "7.26",
          "z": "31",
		  "color": "#53a0d8"
        },
        {
          "x": "62.50",
          "y": "6.67",
          "z": "9",
		  "color": "#53a0d8"
        },
        {
          "x": "67.50",
          "y": "5.37",
          "z": "27",
		  "color": "#53a0d8"
        }
      ]
    }]
  },
  "week2":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Dark: Puddings | Light: No Puddings",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"bubbleScale": ".6",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "5.66",
          "z": "44"
        },
        {
          "x": "27.50",
          "y": "6.02",
          "z": "278"
        },
        {
          "x": "32.50",
          "y": "5.69",
          "z": "338"
        },
        {
          "x": "37.50",
          "y": "4.39",
          "z": "318"
        },
        {
          "x": "42.50",
          "y": "4.46",
          "z": "248"
        },
        {
          "x": "47.50",
          "y": "4.16",
          "z": "130"
        },
        {
          "x": "52.50",
          "y": "4.07",
          "z": "94"
        },
        {
          "x": "57.50",
          "y": "4.65",
          "z": "34"
        },
        {
          "x": "62.50",
          "y": "2.75",
          "z": "16"
        },
        {
          "x": "67.50",
          "y": "3.89",
          "z": "38"
        }, //djudnisnfuhbdhusfdnjcndijsnuhcndijncjdbsuhcbhu
        {
          "x": "22.50",
          "y": "10.38",
          "z": "24",
		  "color": "#53a0d8"
        },
        {
          "x": "27.50",
          "y": "9.20",
          "z": "182",
		  "color": "#53a0d8"
        },
        {
          "x": "32.50",
          "y": "8.86",
          "z": "217",
		  "color": "#53a0d8"
        },
        {
          "x": "37.50",
          "y": "7.09",
          "z": "197",
		  "color": "#53a0d8"
        },
        {
          "x": "42.50",
          "y": "7.04",
          "z": "157",
		  "color": "#53a0d8"
        },
        {
          "x": "47.50",
          "y": "7.21",
          "z": "75",
		  "color": "#53a0d8"
        },
        {
          "x": "52.50",
          "y": "6.38",
          "z": "60",
		  "color": "#53a0d8"
        },
        {
          "x": "57.50",
          "y": "6.32",
          "z": "25",
		  "color": "#53a0d8"
        },
        {
          "x": "62.50",
          "y": "4.89",
          "z": "9",
		  "color": "#53a0d8"
        },
        {
          "x": "67.50",
          "y": "5.92",
          "z": "25",
		  "color": "#53a0d8"
        }
      ]
    }]
  },
  "week3":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Dark: Puddings | Light: No Puddings",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"bubbleScale": ".6",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "3.32",
          "z": "46"
        },
        {
          "x": "27.50",
          "y": "4.44",
          "z": "284"
        },
        {
          "x": "32.50",
          "y": "4.32",
          "z": "318"
        },
        {
          "x": "37.50",
          "y": "4.36",
          "z": "314"
        },
        {
          "x": "42.50",
          "y": "3.67",
          "z": "244"
        },
        {
          "x": "47.50",
          "y": "3.79",
          "z": "164"
        },
        {
          "x": "52.50",
          "y": "3.47",
          "z": "68"
        },
        {
          "x": "57.50",
          "y": "2.77",
          "z": "44"
        },
        {
          "x": "62.50",
          "y": "3.05",
          "z": "22"
        },
        {
          "x": "67.50",
          "y": "2.35",
          "z": "40"
        }, //djudnisnfuhbdhusfdnjcndijsnuhcndijncjdbsuhcbhu
        {
          "x": "22.50",
          "y": "7.29",
          "z": "21",
		  "color": "#53a0d8"
        },
        {
          "x": "27.50",
          "y": "8.35",
          "z": "151",
		  "color": "#53a0d8"
        },
        {
          "x": "32.50",
          "y": "7.68",
          "z": "179",
		  "color": "#53a0d8"
        },
        {
          "x": "37.50",
          "y": "7.20",
          "z": "190",
		  "color": "#53a0d8"
        },
        {
          "x": "42.50",
          "y": "6.49",
          "z": "138",
		  "color": "#53a0d8"
        },
        {
          "x": "47.50",
          "y": "7.39",
          "z": "84",
		  "color": "#53a0d8"
        },
        {
          "x": "52.50",
          "y": "5.76",
          "z": "41",
		  "color": "#53a0d8"
        },
        {
          "x": "57.50",
          "y": "4.52",
          "z": "27",
		  "color": "#53a0d8"
        },
        {
          "x": "62.50",
          "y": "4.19",
          "z": "16",
		  "color": "#53a0d8"
        },
        {
          "x": "67.50",
          "y": "5.22",
          "z": "18",
		  "color": "#53a0d8"
        }
      ]
    }]
  },
  "week4":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Dark: Puddings | Light: No Puddings",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"bubbleScale": ".6",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "2.33",
          "z": "42",
        },{
          "x": "27.50",
          "y": "3.03",
          "z": "296",
        },{
          "x": "32.50",
          "y": "3.47",
          "z": "304",
        },{
          "x": "37.50",
          "y": "2.87",
          "z": "348",
        },{
          "x": "42.50",
          "y": "3.02",
          "z": "224",
        },{
          "x": "47.50",
          "y": "2.73",
          "z": "126",
        },{
          "x": "52.50",
          "y": "3.16",
          "z": "82",
        },{
          "x": "57.50",
          "y": "3.91",
          "z": "56",
        },{
          "x": "62.50",
          "y": "2.92",
          "z": "24",
        },{
          "x": "67.50",
          "y": "2.24",
          "z": "42",
        },{ //demdijdnudsncudnucdc
          "x": "22.50",
          "y": "5.76",
          "z": "17",
		  "color": "#53a0d8"
        },{
          "x": "27.50",
          "y": "7.13",
          "z": "126",
		  "color": "#53a0d8"
        },{
          "x": "32.50",
          "y": "6.99",
          "z": "151",
		  "color": "#53a0d8"
        },{
          "x": "37.50",
          "y": "6.25",
          "z": "160",
		  "color": "#53a0d8"
        },{
          "x": "42.50",
          "y": "5.99",
          "z": "113",
		  "color": "#53a0d8"
        },{
          "x": "47.50",
          "y": "5.29",
          "z": "65",
		  "color": "#53a0d8"
        },{
          "x": "52.50",
          "y": "6.02",
          "z": "43",
		  "color": "#53a0d8"
        },{
          "x": "57.50",
          "y": "6.44",
          "z": "34",
		  "color": "#53a0d8"
        },{
          "x": "62.50",
          "y": "5.83",
          "z": "12",
		  "color": "#53a0d8"
        },{
          "x": "67.50",
          "y": "4.95",
          "z": "19",
		  "color": "#53a0d8"
        }
      ]
    }]
  },
  "week5":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Dark: Puddings | Light: No Puddings",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"bubbleScale": ".6",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }, //djudnisnfuhbdhusfdnjcndijsnuhcndijncjdbsuhcbhu
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36",
		  "color": "#53a0d8"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312",
		  "color": "#53a0d8"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352",
		  "color": "#53a0d8"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340",
		  "color": "#53a0d8"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204",
		  "color": "#53a0d8"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144",
		  "color": "#53a0d8"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62",
		  "color": "#53a0d8"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40",
		  "color": "#53a0d8"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12",
		  "color": "#53a0d8"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38",
		  "color": "#53a0d8"
        }
      ]
    }]
  },
  "week6":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Dark: Puddings | Light: No Puddings",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"bubbleScale": ".6",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }, //djudnisnfuhbdhusfdnjcndijsnuhcndijncjdbsuhcbhu
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36",
		  "color": "#53a0d8"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312",
		  "color": "#53a0d8"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352",
		  "color": "#53a0d8"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340",
		  "color": "#53a0d8"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204",
		  "color": "#53a0d8"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144",
		  "color": "#53a0d8"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62",
		  "color": "#53a0d8"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40",
		  "color": "#53a0d8"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12",
		  "color": "#53a0d8"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38",
		  "color": "#53a0d8"
        }
      ]
    }]
  },
  "week7":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Dark: Puddings | Light: No Puddings",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"bubbleScale": ".6",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }, //djudnisnfuhbdhusfdnjcndijsnuhcndijncjdbsuhcbhu
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36",
		  "color": "#53a0d8"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312",
		  "color": "#53a0d8"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352",
		  "color": "#53a0d8"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340",
		  "color": "#53a0d8"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204",
		  "color": "#53a0d8"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144",
		  "color": "#53a0d8"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62",
		  "color": "#53a0d8"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40",
		  "color": "#53a0d8"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12",
		  "color": "#53a0d8"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38",
		  "color": "#53a0d8"
        }
      ]
    }]
  },
  "week8":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Dark: Puddings | Light: No Puddings",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"bubbleScale": ".6",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }, //djudnisnfuhbdhusfdnjcndijsnuhcndijncjdbsuhcbhu
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36",
		  "color": "#53a0d8"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312",
		  "color": "#53a0d8"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352",
		  "color": "#53a0d8"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340",
		  "color": "#53a0d8"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204",
		  "color": "#53a0d8"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144",
		  "color": "#53a0d8"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62",
		  "color": "#53a0d8"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40",
		  "color": "#53a0d8"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12",
		  "color": "#53a0d8"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38",
		  "color": "#53a0d8"
        }
      ]
    }]
  },
  "week9":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Dark: Puddings | Light: No Puddings",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"bubbleScale": ".6",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }, //djudnisnfuhbdhusfdnjcndijsnuhcndijncjdbsuhcbhu
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36",
		  "color": "#53a0d8"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312",
		  "color": "#53a0d8"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352",
		  "color": "#53a0d8"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340",
		  "color": "#53a0d8"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204",
		  "color": "#53a0d8"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144",
		  "color": "#53a0d8"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62",
		  "color": "#53a0d8"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40",
		  "color": "#53a0d8"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12",
		  "color": "#53a0d8"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38",
		  "color": "#53a0d8"
        }
      ]
    }]
  },
  "week10":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Dark: Puddings | Light: No Puddings",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"bubbleScale": ".6",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }, //djudnisnfuhbdhusfdnjcndijsnuhcndijncjdbsuhcbhu
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36",
		  "color": "#53a0d8"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312",
		  "color": "#53a0d8"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352",
		  "color": "#53a0d8"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340",
		  "color": "#53a0d8"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204",
		  "color": "#53a0d8"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144",
		  "color": "#53a0d8"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62",
		  "color": "#53a0d8"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40",
		  "color": "#53a0d8"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12",
		  "color": "#53a0d8"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38",
		  "color": "#53a0d8"
        }
      ]
    }]
  },
  "week11":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Dark: Puddings | Light: No Puddings",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"bubbleScale": ".6",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }, //djudnisnfuhbdhusfdnjcndijsnuhcndijncjdbsuhcbhu
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36",
		  "color": "#53a0d8"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312",
		  "color": "#53a0d8"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352",
		  "color": "#53a0d8"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340",
		  "color": "#53a0d8"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204",
		  "color": "#53a0d8"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144",
		  "color": "#53a0d8"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62",
		  "color": "#53a0d8"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40",
		  "color": "#53a0d8"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12",
		  "color": "#53a0d8"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38",
		  "color": "#53a0d8"
        }
      ]
    }]
  },
  "week12":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Dark: Puddings | Light: No Puddings",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"bubbleScale": ".6",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }, //djudnisnfuhbdhusfdnjcndijsnuhcndijncjdbsuhcbhu
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36",
		  "color": "#53a0d8"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312",
		  "color": "#53a0d8"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352",
		  "color": "#53a0d8"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340",
		  "color": "#53a0d8"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204",
		  "color": "#53a0d8"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144",
		  "color": "#53a0d8"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62",
		  "color": "#53a0d8"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40",
		  "color": "#53a0d8"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12",
		  "color": "#53a0d8"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38",
		  "color": "#53a0d8"
        }
      ]
    }]
  }
}

	var mobPud = new FusionCharts({
		"type": "bubble",
		"renderAt": "mobPud",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": datasPud.week3
	});
	mobPud.render();
	
	var datasWin = {"week1":{
			// Chart Configuration
			"chart": {
				"caption": "Victors' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "52",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "46",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "46",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "38",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "48",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "46",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "39",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "51",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "34",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "58",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "37",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "35",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "35",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "34",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "27",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "29",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "11",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "12",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "17",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "26",
				"color": "#ffffff"
			}]
		},
		"week2":{
			// Chart Configuration
			"chart": {
				"caption": "Victors' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "69",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "51",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "40",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "46",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "38",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "36",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "33",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "32",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "30",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "47",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "42",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "35",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "25",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "29",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "30",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "18",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "17",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "13",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "13",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "28",
				"color": "#ffffff"
			}]
		},
		"week3":{
			// Chart Configuration
			"chart": {
				"caption": "Victors' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "94",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "53",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "41",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "32",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "45",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "35",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "31",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "25",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "42",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "33",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "35",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "31",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "26",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "20",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "27",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "12",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "12",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "5",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "10",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "18",
				"color": "#ffffff"
			}]
		},
		"week4":{
			// Chart Configuration
			"chart": {
				"caption": "Victors' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "102",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "67",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "30",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "41",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "36",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "36",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "28",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "22",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "34",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "34",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "24",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "32",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "17",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "17",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "15",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "15",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "7",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "3",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "3",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "5",
				"color": "#ffffff"
			}]
		},
		"week5":{
			// Chart Configuration
			"chart": {
				"caption": "Victors' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week6":{
			// Chart Configuration
			"chart": {
				"caption": "Victors' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week7":{
			// Chart Configuration
			"chart": {
				"caption": "Victors' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week8":{
			// Chart Configuration
			"chart": {
				"caption": "Victors' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week9":{
			// Chart Configuration
			"chart": {
				"caption": "Victors' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week10":{
			// Chart Configuration
			"chart": {
				"caption": "Victors' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week11":{
			// Chart Configuration
			"chart": {
				"caption": "Victors' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week12":{
			// Chart Configuration
			"chart": {
				"caption": "Victors' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		}
	}
	
	var mobWin = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWins",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": datasWin.week3
	});
	mobWin.render();
	
	var datasLoss = {"week1":{
			// Chart Configuration
			"chart": {
				"caption": "Losers' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "419",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "63",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "45",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "53",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "33",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "30",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "23",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "21",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "20",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "20",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "19",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "13",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "14",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "12",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "7",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "12",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "4",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "5",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "4",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "3",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "3",
				"color": "#ffffff"
			}]
		}, 
		"week2":{
			// Chart Configuration
			"chart": {
				"caption": "Losers' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "570",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "58",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "40",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "27",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "24",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "16",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "15",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "12",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "21",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "12",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "18",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "11",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "9",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "7",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "10",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "7",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "3",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "4",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "5",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "2",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week3":{
			// Chart Configuration
			"chart": {
				"caption": "Losers' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "679",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "57",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "25",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "21",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "22",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "13",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "14",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "14",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "8",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "10",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "13",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "10",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "5",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "5",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "4",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "4",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "5",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "3",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "2",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "2",
				"color": "#ffffff"
			}]
		},
		"week4":{
			// Chart Configuration
			"chart": {
				"caption": "Losers' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "804",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "54",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "22",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "16",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "4",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "6",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "9",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "11",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "7",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "6",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "7",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "7",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "6",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "5",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "3",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "2",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "3",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "3",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "0",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "0",
				"color": "#ffffff"
			}]
		},
		"week5":{
			// Chart Configuration
			"chart": {
				"caption": "Losers' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week6":{
			// Chart Configuration
			"chart": {
				"caption": "Losers' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week7":{
			// Chart Configuration
			"chart": {
				"caption": "Losers' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week8":{
			// Chart Configuration
			"chart": {
				"caption": "Losers' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week9":{
			// Chart Configuration
			"chart": {
				"caption": "Losers' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week10":{
			// Chart Configuration
			"chart": {
				"caption": "Losers' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week11":{
			// Chart Configuration
			"chart": {
				"caption": "Losers' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week12":{
			// Chart Configuration
			"chart": {
				"caption": "Losers' Achievement Distribution",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$value",
				"enableSmartLabels": "0",
				"labelDistance": "-25",
				"animation": "0",
				"showLabels": "0",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		}
	}
	
	var mobLoss = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLoses",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": datasLoss.week3
	});
	mobLoss.render();
	
	var datasPercent = {"week1":{
			// Chart Configuration
			"chart": {
				"caption": "% that Won at Diffferent Scores",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"xAxisNameFontSize": "12",
				"yAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0.00",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "45.22",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "50.55",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "46.46",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "53.52",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "61.54",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "66.67",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "65.00",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "71.83",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "62.96",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "75.32",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "74.00",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "71.43",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "74.47",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "82.93",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "69.23",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "87.88",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "68.75",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "75.00",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "85.00",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "89.66",
				"color": "#ffffff"
			}]
		},
		"week2":{
			// Chart Configuration
			"chart": {
				"caption": "% that Won at Diffferent Scores",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"xAxisNameFontSize": "12",
				"yAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0.00",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "54.33",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "56.67",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "59.70",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "65.71",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "69.81",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "70.59",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "73.33",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "60.38",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "71.43",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "72.31",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "79.25",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "79.55",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "76.67",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "73.68",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "81.08",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "85.71",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "80.952",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "72.22",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "86.67",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "96.55",
				"color": "#ffffff"
			}]
		},
		"week3":{
			// Chart Configuration
			"chart": {
				"caption": "% that Won at Diffferent Scores",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"xAxisNameFontSize": "12",
				"yAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0.00",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "62.25",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "67.95",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "66.13",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "59.26",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "77.59",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "71.43",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "68.89",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "75.76",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "80.77",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "71.74",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "77.78",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "86.11",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "83.87",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "83.33",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "87.10",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "70.59",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "80.00",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "71.43",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "90.91",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "90.00",
				"color": "#ffffff"
			}]
		},
		"week4":{
			// Chart Configuration
			"chart": {
				"caption": "% that Won at Diffferent Scores",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"xAxisNameFontSize": "12",
				"yAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0.0",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "65.38",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "75.28",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "65.22",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "91.11",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "85.71",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "80.0",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "71.79",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "75.86",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "85.0",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "82.93",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "77.42",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "84.21",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "77.27",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "85.0",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "88.24",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "83.33",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "87.5",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "50.0",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "100.0",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "100.0",
				"color": "#ffffff"
			}]
			
		},
		"week5":{
			// Chart Configuration
			"chart": {
				"caption": "% that Won at Diffferent Scores",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"xAxisNameFontSize": "12",
				"yAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week6":{
			// Chart Configuration
			"chart": {
				"caption": "% that Won at Diffferent Scores",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"xAxisNameFontSize": "12",
				"yAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week7":{
			// Chart Configuration
			"chart": {
				"caption": "% that Won at Diffferent Scores",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"xAxisNameFontSize": "12",
				"yAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week8":{
			// Chart Configuration
			"chart": {
				"caption": "% that Won at Diffferent Scores",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"xAxisNameFontSize": "12",
				"yAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week9":{
			// Chart Configuration
			"chart": {
				"caption": "% that Won at Diffferent Scores",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"xAxisNameFontSize": "12",
				"yAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week10":{
			// Chart Configuration
			"chart": {
				"caption": "% that Won at Diffferent Scores",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"xAxisNameFontSize": "12",
				"yAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week11":{
			// Chart Configuration
			"chart": {
				"caption": "% that Won at Diffferent Scores",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"xAxisNameFontSize": "12",
				"yAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week12":{
			// Chart Configuration
			"chart": {
				"caption": "% that Won at Diffferent Scores",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"xAxisNameFontSize": "12",
				"yAxisNameFontSize": "12",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		}
	}
	
	var mobPercent = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercent",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": datasPercent.week3
	});
	mobPercent.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
			mobWin.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
			mobPercent.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
			mobPud.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
			mobWin.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
			mobPercent.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
			mobPud.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
	
	mobChange4()
	
	function mobChange1() {
		mobLoss.setJSONData(datasLoss.week1);
		mobWin.setJSONData(datasWin.week1);
		mobPercent.setJSONData(datasPercent.week1);
		mobPud.setJSONData(datasPud.week1);
		document.getElementById("mobTitle").innerHTML = "Week 1";
		document.getElementById("mobParagraph").innerHTML = "Assuming all 4 rounds of group stage will have the same score as this one (which they will not) with a cutoff of 16. Anyone who scores under 11 will have no chance of moving on, and anyone who scores over 16 will be guarenteed to move on. Numbers inbetween have varying chance to move on (depending on % that won numbers), aka #s inbetween need to win the matches!";
		var table = document.getElementById('mobTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="419"
		table.rows[1].cells[3].innerHTML="0.00%"
		table.rows[2].cells[1].innerHTML="52"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45.2%"
		table.rows[3].cells[1].innerHTML="46"
		table.rows[3].cells[2].innerHTML="45"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[4].cells[1].innerHTML="46"
		table.rows[4].cells[2].innerHTML="53"
		table.rows[4].cells[3].innerHTML="46.5%"
		table.rows[5].cells[1].innerHTML="38"
		table.rows[5].cells[2].innerHTML="33"
		table.rows[5].cells[3].innerHTML="53.5%"
		table.rows[6].cells[1].innerHTML="48"
		table.rows[6].cells[2].innerHTML="30"
		table.rows[6].cells[3].innerHTML="61.5%"
		table.rows[7].cells[1].innerHTML="46"
		table.rows[7].cells[2].innerHTML="23"
		table.rows[7].cells[3].innerHTML="66.7%"
		table.rows[8].cells[1].innerHTML="39"
		table.rows[8].cells[2].innerHTML="21"
		table.rows[8].cells[3].innerHTML="65.0%"
		table.rows[9].cells[1].innerHTML="51"
		table.rows[9].cells[2].innerHTML="20"
		table.rows[9].cells[3].innerHTML="71.8%"
		table.rows[10].cells[1].innerHTML="34"
		table.rows[10].cells[2].innerHTML="20"
		table.rows[10].cells[3].innerHTML="63.0%"
		table.rows[11].cells[1].innerHTML="58"
		table.rows[11].cells[2].innerHTML="19"
		table.rows[11].cells[3].innerHTML="75.3%"
		table.rows[12].cells[1].innerHTML="37"
		table.rows[12].cells[2].innerHTML="12"
		table.rows[12].cells[3].innerHTML="74.0%"
		table.rows[13].cells[1].innerHTML="35"
		table.rows[13].cells[2].innerHTML="14"
		table.rows[13].cells[3].innerHTML="71.4%"
		table.rows[14].cells[1].innerHTML="35"
		table.rows[14].cells[2].innerHTML="12"
		table.rows[14].cells[3].innerHTML="74.5%"
		table.rows[15].cells[1].innerHTML="34"
		table.rows[15].cells[2].innerHTML="7"
		table.rows[15].cells[3].innerHTML="82.9%"
		table.rows[16].cells[1].innerHTML="27"
		table.rows[16].cells[2].innerHTML="12"
		table.rows[16].cells[3].innerHTML="69.2%"
		table.rows[17].cells[1].innerHTML="29"
		table.rows[17].cells[2].innerHTML="4"
		table.rows[17].cells[3].innerHTML="87.9%"
		table.rows[18].cells[1].innerHTML="11"
		table.rows[18].cells[2].innerHTML="5"
		table.rows[18].cells[3].innerHTML="68.8%"
		table.rows[19].cells[1].innerHTML="12"
		table.rows[19].cells[2].innerHTML="4"
		table.rows[19].cells[3].innerHTML="75.0%"
		table.rows[20].cells[1].innerHTML="17"
		table.rows[20].cells[2].innerHTML="3"
		table.rows[20].cells[3].innerHTML="85.0%"
		table.rows[21].cells[1].innerHTML="26"
		table.rows[21].cells[2].innerHTML="3"
		table.rows[21].cells[3].innerHTML="89.7%"
		
		var table = document.getElementById('mobRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="9.90"
		table.rows[2].cells[1].innerHTML="6.29"
		table.rows[2].cells[2].innerHTML="8.78"
		table.rows[3].cells[1].innerHTML="5.82"
		table.rows[3].cells[2].innerHTML="7.93"
		table.rows[4].cells[1].innerHTML="5.73"
		table.rows[4].cells[2].innerHTML="8.00"
		table.rows[5].cells[1].innerHTML="5.96"
		table.rows[5].cells[2].innerHTML="7.74"
		table.rows[6].cells[1].innerHTML="5.12"
		table.rows[6].cells[2].innerHTML="6.92"
		table.rows[7].cells[1].innerHTML="3.73"
		table.rows[7].cells[2].innerHTML="6.13"
		table.rows[8].cells[1].innerHTML="5.62"
		table.rows[8].cells[2].innerHTML="7.26"
		table.rows[9].cells[1].innerHTML="5.00"
		table.rows[9].cells[2].innerHTML="6.67"
		table.rows[10].cells[1].innerHTML="3.82"
		table.rows[10].cells[2].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("mobChange1").addEventListener("click", mobChange1);
	function mobChange2() {
		mobLoss.setJSONData(datasLoss.week2);
		mobWin.setJSONData(datasWin.week2);
		mobPercent.setJSONData(datasPercent.week2);
		mobPud.setJSONData(datasPud.week2);
		document.getElementById("mobTitle").innerHTML = "Week 2";
		document.getElementById("mobParagraph").innerHTML = "Last week the cutoff was at 16 points, after this week it has been increased to 31 points. Surprisingly the amount needed to move on is actually going down, could this be because many people got the required 10 points for the badge?";
		var table = document.getElementById('mobTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="570"
		table.rows[1].cells[3].innerHTML="0.00%"
		table.rows[2].cells[1].innerHTML="69"
		table.rows[2].cells[2].innerHTML="58"
		table.rows[2].cells[3].innerHTML="54.3%"
		table.rows[3].cells[1].innerHTML="51"
		table.rows[3].cells[2].innerHTML="40"
		table.rows[3].cells[3].innerHTML="56.7%"
		table.rows[4].cells[1].innerHTML="40"
		table.rows[4].cells[2].innerHTML="27"
		table.rows[4].cells[3].innerHTML="59.7%"
		table.rows[5].cells[1].innerHTML="46"
		table.rows[5].cells[2].innerHTML="24"
		table.rows[5].cells[3].innerHTML="65.7%"
		table.rows[6].cells[1].innerHTML="38"
		table.rows[6].cells[2].innerHTML="16"
		table.rows[6].cells[3].innerHTML="69.8%"
		table.rows[7].cells[1].innerHTML="36"
		table.rows[7].cells[2].innerHTML="15"
		table.rows[7].cells[3].innerHTML="70.6%"
		table.rows[8].cells[1].innerHTML="33"
		table.rows[8].cells[2].innerHTML="12"
		table.rows[8].cells[3].innerHTML="73.3%"
		table.rows[9].cells[1].innerHTML="32"
		table.rows[9].cells[2].innerHTML="21"
		table.rows[9].cells[3].innerHTML="60.4%"
		table.rows[10].cells[1].innerHTML="30"
		table.rows[10].cells[2].innerHTML="12"
		table.rows[10].cells[3].innerHTML="71.4%"
		table.rows[11].cells[1].innerHTML="47"
		table.rows[11].cells[2].innerHTML="18"
		table.rows[11].cells[3].innerHTML="72.3%"
		table.rows[12].cells[1].innerHTML="42"
		table.rows[12].cells[2].innerHTML="11"
		table.rows[12].cells[3].innerHTML="79.2%"
		table.rows[13].cells[1].innerHTML="35"
		table.rows[13].cells[2].innerHTML="9"
		table.rows[13].cells[3].innerHTML="79.5%"
		table.rows[14].cells[1].innerHTML="25"
		table.rows[14].cells[2].innerHTML="7"
		table.rows[14].cells[3].innerHTML="76.7%"
		table.rows[15].cells[1].innerHTML="29"
		table.rows[15].cells[2].innerHTML="10"
		table.rows[15].cells[3].innerHTML="73.7%"
		table.rows[16].cells[1].innerHTML="30"
		table.rows[16].cells[2].innerHTML="7"
		table.rows[16].cells[3].innerHTML="81.1%"
		table.rows[17].cells[1].innerHTML="18"
		table.rows[17].cells[2].innerHTML="3"
		table.rows[17].cells[3].innerHTML="85.7%"
		table.rows[18].cells[1].innerHTML="17"
		table.rows[18].cells[2].innerHTML="4"
		table.rows[18].cells[3].innerHTML="81.0%"
		table.rows[19].cells[1].innerHTML="13"
		table.rows[19].cells[2].innerHTML="5"
		table.rows[19].cells[3].innerHTML="72.2%"
		table.rows[20].cells[1].innerHTML="13"
		table.rows[20].cells[2].innerHTML="2"
		table.rows[20].cells[3].innerHTML="86.7%"
		table.rows[21].cells[1].innerHTML="28"
		table.rows[21].cells[2].innerHTML="1"
		table.rows[21].cells[3].innerHTML="96.6%"
		
		var table = document.getElementById('mobRatios')
		table.rows[1].cells[1].innerHTML="5.66"
		table.rows[1].cells[2].innerHTML="10.38"
		table.rows[2].cells[1].innerHTML="6.02"
		table.rows[2].cells[2].innerHTML="9.20"
		table.rows[3].cells[1].innerHTML="5.69"
		table.rows[3].cells[2].innerHTML="8.86"
		table.rows[4].cells[1].innerHTML="4.39"
		table.rows[4].cells[2].innerHTML="7.09"
		table.rows[5].cells[1].innerHTML="4.46"
		table.rows[5].cells[2].innerHTML="7.04"
		table.rows[6].cells[1].innerHTML="4.16"
		table.rows[6].cells[2].innerHTML="7.21"
		table.rows[7].cells[1].innerHTML="4.07"
		table.rows[7].cells[2].innerHTML="6.38"
		table.rows[8].cells[1].innerHTML="4.65"
		table.rows[8].cells[2].innerHTML="6.32"
		table.rows[9].cells[1].innerHTML="2.75"
		table.rows[9].cells[2].innerHTML="4.89"
		table.rows[10].cells[1].innerHTML="3.89"
		table.rows[10].cells[2].innerHTML="5.92"
		switchChart()
    }
    document.getElementById("mobChange2").addEventListener("click", mobChange2);
	function mobChange3() {
		mobLoss.setJSONData(datasLoss.week3);
		mobWin.setJSONData(datasWin.week3);
		mobPercent.setJSONData(datasPercent.week3);
		mobPud.setJSONData(datasPud.week3);
		document.getElementById("mobTitle").innerHTML = "Week 3";
		document.getElementById("mobParagraph").innerHTML = 'This week has had the most puddings yet, almost 75%. With it getting later in the competition it is no surprise people are quitting, but it is surprising how many are quitting. Click on week 1, week 2, then week 3 and watch the change in "# of Acheivements for losers" chart.';
		var table = document.getElementById('mobTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[2].cells[1].innerHTML="94"
		table.rows[3].cells[1].innerHTML="53"
		table.rows[4].cells[1].innerHTML="41"
		table.rows[5].cells[1].innerHTML="32"
		table.rows[6].cells[1].innerHTML="45"
		table.rows[7].cells[1].innerHTML="35"
		table.rows[8].cells[1].innerHTML="31"
		table.rows[9].cells[1].innerHTML="25"
		table.rows[10].cells[1].innerHTML="42"
		table.rows[11].cells[1].innerHTML="33"
		table.rows[12].cells[1].innerHTML="35"
		table.rows[13].cells[1].innerHTML="31"
		table.rows[14].cells[1].innerHTML="26"
		table.rows[15].cells[1].innerHTML="20"
		table.rows[16].cells[1].innerHTML="27"
		table.rows[17].cells[1].innerHTML="12"
		table.rows[18].cells[1].innerHTML="12"
		table.rows[19].cells[1].innerHTML="5"
		table.rows[20].cells[1].innerHTML="10"
		table.rows[21].cells[1].innerHTML="18"
		table.rows[1].cells[2].innerHTML="679"
		table.rows[2].cells[2].innerHTML="57"
		table.rows[3].cells[2].innerHTML="25"
		table.rows[4].cells[2].innerHTML="21"
		table.rows[5].cells[2].innerHTML="22"
		table.rows[6].cells[2].innerHTML="13"
		table.rows[7].cells[2].innerHTML="14"
		table.rows[8].cells[2].innerHTML="14"
		table.rows[9].cells[2].innerHTML="8"
		table.rows[10].cells[2].innerHTML="10"
		table.rows[11].cells[2].innerHTML="13"
		table.rows[12].cells[2].innerHTML="10"
		table.rows[13].cells[2].innerHTML="5"
		table.rows[14].cells[2].innerHTML="5"
		table.rows[15].cells[2].innerHTML="4"
		table.rows[16].cells[2].innerHTML="4"
		table.rows[17].cells[2].innerHTML="5"
		table.rows[18].cells[2].innerHTML="3"
		table.rows[19].cells[2].innerHTML="2"
		table.rows[20].cells[2].innerHTML="1"
		table.rows[21].cells[2].innerHTML="2"
		table.rows[1].cells[3].innerHTML="0.0%"
		table.rows[2].cells[3].innerHTML="62.2%"
		table.rows[3].cells[3].innerHTML="68.0%"
		table.rows[4].cells[3].innerHTML="66.1%"
		table.rows[5].cells[3].innerHTML="59.3%"
		table.rows[6].cells[3].innerHTML="77.6%"
		table.rows[7].cells[3].innerHTML="71.4%"
		table.rows[8].cells[3].innerHTML="68.9%"
		table.rows[9].cells[3].innerHTML="75.8%"
		table.rows[10].cells[3].innerHTML="80.8%"
		table.rows[11].cells[3].innerHTML="71.7%"
		table.rows[12].cells[3].innerHTML="77.8%"
		table.rows[13].cells[3].innerHTML="86.1%"
		table.rows[14].cells[3].innerHTML="83.9%"
		table.rows[15].cells[3].innerHTML="83.3%"
		table.rows[16].cells[3].innerHTML="87.1%"
		table.rows[17].cells[3].innerHTML="70.6%"
		table.rows[18].cells[3].innerHTML="80.0%"
		table.rows[19].cells[3].innerHTML="71.4%"
		table.rows[20].cells[3].innerHTML="90.9%"
		table.rows[21].cells[3].innerHTML="90.0%"
		
		var table = document.getElementById('mobRatios')
		table.rows[1].cells[1].innerHTML="3.33"
		table.rows[2].cells[1].innerHTML="4.44"
		table.rows[3].cells[1].innerHTML="4.32"
		table.rows[4].cells[1].innerHTML="4.36"
		table.rows[5].cells[1].innerHTML="3.67"
		table.rows[6].cells[1].innerHTML="3.79"
		table.rows[7].cells[1].innerHTML="3.47"
		table.rows[8].cells[1].innerHTML="2.77"
		table.rows[9].cells[1].innerHTML="3.05"
		table.rows[10].cells[1].innerHTML="2.35"
		table.rows[1].cells[2].innerHTML="7.29"
		table.rows[2].cells[2].innerHTML="8.35"
		table.rows[3].cells[2].innerHTML="7.68"
		table.rows[4].cells[2].innerHTML="7.2"
		table.rows[5].cells[2].innerHTML="6.49"
		table.rows[6].cells[2].innerHTML="7.39"
		table.rows[7].cells[2].innerHTML="5.76"
		table.rows[8].cells[2].innerHTML="4.52"
		table.rows[9].cells[2].innerHTML="4.19"
		table.rows[10].cells[2].innerHTML="5.22"
		switchChart()
    }
    document.getElementById("mobChange3").addEventListener("click", mobChange3);
	function mobChange4() {
		mobLoss.setJSONData(datasLoss.week4);
		mobWin.setJSONData(datasWin.week4);
		mobPercent.setJSONData(datasPercent.week4);
		mobPud.setJSONData(datasPud.week4);
		document.getElementById("mobTitle").innerHTML = "Week 4";
		document.getElementById("mobParagraph").innerHTML = "Funny that the first week that had an achievement with 100% winning (19 and 20), was the same week that only 50% who got 18 won. Congratulations to the 256 who are moving on to knockout!";
				var table = document.getElementById('mobTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[2].cells[1].innerHTML="102"
		table.rows[3].cells[1].innerHTML="67"
		table.rows[4].cells[1].innerHTML="30"
		table.rows[5].cells[1].innerHTML="41"
		table.rows[6].cells[1].innerHTML="36"
		table.rows[7].cells[1].innerHTML="36"
		table.rows[8].cells[1].innerHTML="28"
		table.rows[9].cells[1].innerHTML="22"
		table.rows[10].cells[1].innerHTML="34"
		table.rows[11].cells[1].innerHTML="34"
		table.rows[12].cells[1].innerHTML="24"
		table.rows[13].cells[1].innerHTML="32"
		table.rows[14].cells[1].innerHTML="17"
		table.rows[15].cells[1].innerHTML="17"
		table.rows[16].cells[1].innerHTML="15"
		table.rows[17].cells[1].innerHTML="15"
		table.rows[18].cells[1].innerHTML="7"
		table.rows[19].cells[1].innerHTML="3"
		table.rows[20].cells[1].innerHTML="3"
		table.rows[21].cells[1].innerHTML="5"
		table.rows[1].cells[2].innerHTML="804"
		table.rows[2].cells[2].innerHTML="54"
		table.rows[3].cells[2].innerHTML="22"
		table.rows[4].cells[2].innerHTML="16"
		table.rows[5].cells[2].innerHTML="4"
		table.rows[6].cells[2].innerHTML="6"
		table.rows[7].cells[2].innerHTML="9"
		table.rows[8].cells[2].innerHTML="11"
		table.rows[9].cells[2].innerHTML="7"
		table.rows[10].cells[2].innerHTML="6"
		table.rows[11].cells[2].innerHTML="7"
		table.rows[12].cells[2].innerHTML="7"
		table.rows[13].cells[2].innerHTML="6"
		table.rows[14].cells[2].innerHTML="5"
		table.rows[15].cells[2].innerHTML="3"
		table.rows[16].cells[2].innerHTML="2"
		table.rows[17].cells[2].innerHTML="3"
		table.rows[18].cells[2].innerHTML="1"
		table.rows[19].cells[2].innerHTML="3"
		table.rows[20].cells[2].innerHTML="0"
		table.rows[21].cells[2].innerHTML="0"
		table.rows[1].cells[3].innerHTML="0.0%"
		table.rows[2].cells[3].innerHTML="65.4%"
		table.rows[3].cells[3].innerHTML="75.3%"
		table.rows[4].cells[3].innerHTML="65.2%"
		table.rows[5].cells[3].innerHTML="91.1%"
		table.rows[6].cells[3].innerHTML="85.7%"
		table.rows[7].cells[3].innerHTML="80.0%"
		table.rows[8].cells[3].innerHTML="71.8%"
		table.rows[9].cells[3].innerHTML="75.9%"
		table.rows[10].cells[3].innerHTML="85.0%"
		table.rows[11].cells[3].innerHTML="82.9%"
		table.rows[12].cells[3].innerHTML="77.4%"
		table.rows[13].cells[3].innerHTML="84.2%"
		table.rows[14].cells[3].innerHTML="77.3%"
		table.rows[15].cells[3].innerHTML="85.0%"
		table.rows[16].cells[3].innerHTML="88.2%"
		table.rows[17].cells[3].innerHTML="83.3%"
		table.rows[18].cells[3].innerHTML="87.5%"
		table.rows[19].cells[3].innerHTML="50.0%"
		table.rows[20].cells[3].innerHTML="100.0%"
		table.rows[21].cells[3].innerHTML="100.0%"
		
		var table = document.getElementById('mobRatios')
		table.rows[1].cells[1].innerHTML="2.33"
		table.rows[2].cells[1].innerHTML="3.03"
		table.rows[3].cells[1].innerHTML="3.47"
		table.rows[4].cells[1].innerHTML="2.87"
		table.rows[5].cells[1].innerHTML="3.02"
		table.rows[6].cells[1].innerHTML="2.73"
		table.rows[7].cells[1].innerHTML="3.16"
		table.rows[8].cells[1].innerHTML="3.91"
		table.rows[9].cells[1].innerHTML="2.92"
		table.rows[10].cells[1].innerHTML="2.24"
		table.rows[1].cells[2].innerHTML="5.76"
		table.rows[2].cells[2].innerHTML="7.13"
		table.rows[3].cells[2].innerHTML="6.99"
		table.rows[4].cells[2].innerHTML="6.25"
		table.rows[5].cells[2].innerHTML="5.99"
		table.rows[6].cells[2].innerHTML="5.29"
		table.rows[7].cells[2].innerHTML="6.02"
		table.rows[8].cells[2].innerHTML="6.44"
		table.rows[9].cells[2].innerHTML="5.83"
		table.rows[10].cells[2].innerHTML="4.95"
		switchChart()
    }
    document.getElementById("mobChange4").addEventListener("click", mobChange4);
	function mobChange5() {
		mobLoss.setJSONData(datasLoss.week5);
		mobWin.setJSONData(datasWin.week5);
		mobPercent.setJSONData(datasPercent.week5);
		mobPud.setJSONData(datasPud.week5);
		document.getElementById("mobTitle").innerHTML = "Week 5";
		document.getElementById("mobParagraph").innerHTML = "Funny that the first week that had an achievement with 100% winning (19 and 20), was the same week that only 50% who got 18 won. Congratulations to the 256 who made it here, and the 128 moving on!";
		var table = document.getElementById('mobTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="419"
		table.rows[1].cells[3].innerHTML="0.00%"
		table.rows[2].cells[1].innerHTML="52"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45.2%"
		table.rows[3].cells[1].innerHTML="46"
		table.rows[3].cells[2].innerHTML="45"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[4].cells[1].innerHTML="46"
		table.rows[4].cells[2].innerHTML="53"
		table.rows[4].cells[3].innerHTML="46.5%"
		table.rows[5].cells[1].innerHTML="38"
		table.rows[5].cells[2].innerHTML="33"
		table.rows[5].cells[3].innerHTML="53.5%"
		table.rows[6].cells[1].innerHTML="48"
		table.rows[6].cells[2].innerHTML="30"
		table.rows[6].cells[3].innerHTML="61.5%"
		table.rows[7].cells[1].innerHTML="46"
		table.rows[7].cells[2].innerHTML="23"
		table.rows[7].cells[3].innerHTML="66.7%"
		table.rows[8].cells[1].innerHTML="39"
		table.rows[8].cells[2].innerHTML="21"
		table.rows[8].cells[3].innerHTML="65.0%"
		table.rows[9].cells[1].innerHTML="51"
		table.rows[9].cells[2].innerHTML="20"
		table.rows[9].cells[3].innerHTML="71.8%"
		table.rows[10].cells[1].innerHTML="34"
		table.rows[10].cells[2].innerHTML="20"
		table.rows[10].cells[3].innerHTML="63.0%"
		table.rows[11].cells[1].innerHTML="58"
		table.rows[11].cells[2].innerHTML="19"
		table.rows[11].cells[3].innerHTML="75.3%"
		table.rows[12].cells[1].innerHTML="37"
		table.rows[12].cells[2].innerHTML="12"
		table.rows[12].cells[3].innerHTML="74.0%"
		table.rows[13].cells[1].innerHTML="35"
		table.rows[13].cells[2].innerHTML="14"
		table.rows[13].cells[3].innerHTML="71.4%"
		table.rows[14].cells[1].innerHTML="35"
		table.rows[14].cells[2].innerHTML="12"
		table.rows[14].cells[3].innerHTML="74.5%"
		table.rows[15].cells[1].innerHTML="34"
		table.rows[15].cells[2].innerHTML="7"
		table.rows[15].cells[3].innerHTML="82.9%"
		table.rows[16].cells[1].innerHTML="27"
		table.rows[16].cells[2].innerHTML="12"
		table.rows[16].cells[3].innerHTML="69.2%"
		table.rows[17].cells[1].innerHTML="29"
		table.rows[17].cells[2].innerHTML="4"
		table.rows[17].cells[3].innerHTML="87.9%"
		table.rows[18].cells[1].innerHTML="11"
		table.rows[18].cells[2].innerHTML="5"
		table.rows[18].cells[3].innerHTML="68.8%"
		table.rows[19].cells[1].innerHTML="12"
		table.rows[19].cells[2].innerHTML="4"
		table.rows[19].cells[3].innerHTML="75.0%"
		table.rows[20].cells[1].innerHTML="17"
		table.rows[20].cells[2].innerHTML="3"
		table.rows[20].cells[3].innerHTML="85.0%"
		table.rows[21].cells[1].innerHTML="26"
		table.rows[21].cells[2].innerHTML="3"
		table.rows[21].cells[3].innerHTML="89.7%"
		
		var table = document.getElementById('mobRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="9.90"
		table.rows[2].cells[1].innerHTML="6.28"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[3].cells[1].innerHTML="5.80"
		table.rows[3].cells[2].innerHTML="7.91"
		table.rows[4].cells[1].innerHTML="5.79"
		table.rows[4].cells[2].innerHTML="8.06"
		table.rows[5].cells[1].innerHTML="6.00"
		table.rows[5].cells[2].innerHTML="7.74"
		table.rows[6].cells[1].innerHTML="5.05"
		table.rows[6].cells[2].innerHTML="6.92"
		table.rows[7].cells[1].innerHTML="3.85"
		table.rows[7].cells[2].innerHTML="6.13"
		table.rows[8].cells[1].innerHTML="5.62"
		table.rows[8].cells[2].innerHTML="7.26"
		table.rows[9].cells[1].innerHTML="5.00"
		table.rows[9].cells[2].innerHTML="6.67"
		table.rows[10].cells[1].innerHTML="3.82"
		table.rows[10].cells[2].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("mobChange5").addEventListener("click", mobChange5);
	function mobChange6() {
		mobLoss.setJSONData(datasLoss.week6);
		mobWin.setJSONData(datasWin.week6);
		mobPercent.setJSONData(datasPercent.week6);
		mobPud.setJSONData(datasPud.week6);
		document.getElementById("mobTitle").innerHTML = "Week 6";
		document.getElementById("mobParagraph").innerHTML = "Congratulations to the 128 who made it here, and the 64 moving on!";
		var table = document.getElementById('mobTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="419"
		table.rows[1].cells[3].innerHTML="0.00%"
		table.rows[2].cells[1].innerHTML="52"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45.2%"
		table.rows[3].cells[1].innerHTML="46"
		table.rows[3].cells[2].innerHTML="45"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[4].cells[1].innerHTML="46"
		table.rows[4].cells[2].innerHTML="53"
		table.rows[4].cells[3].innerHTML="46.5%"
		table.rows[5].cells[1].innerHTML="38"
		table.rows[5].cells[2].innerHTML="33"
		table.rows[5].cells[3].innerHTML="53.5%"
		table.rows[6].cells[1].innerHTML="48"
		table.rows[6].cells[2].innerHTML="30"
		table.rows[6].cells[3].innerHTML="61.5%"
		table.rows[7].cells[1].innerHTML="46"
		table.rows[7].cells[2].innerHTML="23"
		table.rows[7].cells[3].innerHTML="66.7%"
		table.rows[8].cells[1].innerHTML="39"
		table.rows[8].cells[2].innerHTML="21"
		table.rows[8].cells[3].innerHTML="65.0%"
		table.rows[9].cells[1].innerHTML="51"
		table.rows[9].cells[2].innerHTML="20"
		table.rows[9].cells[3].innerHTML="71.8%"
		table.rows[10].cells[1].innerHTML="34"
		table.rows[10].cells[2].innerHTML="20"
		table.rows[10].cells[3].innerHTML="63.0%"
		table.rows[11].cells[1].innerHTML="58"
		table.rows[11].cells[2].innerHTML="19"
		table.rows[11].cells[3].innerHTML="75.3%"
		table.rows[12].cells[1].innerHTML="37"
		table.rows[12].cells[2].innerHTML="12"
		table.rows[12].cells[3].innerHTML="74.0%"
		table.rows[13].cells[1].innerHTML="35"
		table.rows[13].cells[2].innerHTML="14"
		table.rows[13].cells[3].innerHTML="71.4%"
		table.rows[14].cells[1].innerHTML="35"
		table.rows[14].cells[2].innerHTML="12"
		table.rows[14].cells[3].innerHTML="74.5%"
		table.rows[15].cells[1].innerHTML="34"
		table.rows[15].cells[2].innerHTML="7"
		table.rows[15].cells[3].innerHTML="82.9%"
		table.rows[16].cells[1].innerHTML="27"
		table.rows[16].cells[2].innerHTML="12"
		table.rows[16].cells[3].innerHTML="69.2%"
		table.rows[17].cells[1].innerHTML="29"
		table.rows[17].cells[2].innerHTML="4"
		table.rows[17].cells[3].innerHTML="87.9%"
		table.rows[18].cells[1].innerHTML="11"
		table.rows[18].cells[2].innerHTML="5"
		table.rows[18].cells[3].innerHTML="68.8%"
		table.rows[19].cells[1].innerHTML="12"
		table.rows[19].cells[2].innerHTML="4"
		table.rows[19].cells[3].innerHTML="75.0%"
		table.rows[20].cells[1].innerHTML="17"
		table.rows[20].cells[2].innerHTML="3"
		table.rows[20].cells[3].innerHTML="85.0%"
		table.rows[21].cells[1].innerHTML="26"
		table.rows[21].cells[2].innerHTML="3"
		table.rows[21].cells[3].innerHTML="89.7%"
		
		var table = document.getElementById('mobRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="9.90"
		table.rows[2].cells[1].innerHTML="6.28"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[3].cells[1].innerHTML="5.80"
		table.rows[3].cells[2].innerHTML="7.91"
		table.rows[4].cells[1].innerHTML="5.79"
		table.rows[4].cells[2].innerHTML="8.06"
		table.rows[5].cells[1].innerHTML="6.00"
		table.rows[5].cells[2].innerHTML="7.74"
		table.rows[6].cells[1].innerHTML="5.05"
		table.rows[6].cells[2].innerHTML="6.92"
		table.rows[7].cells[1].innerHTML="3.85"
		table.rows[7].cells[2].innerHTML="6.13"
		table.rows[8].cells[1].innerHTML="5.62"
		table.rows[8].cells[2].innerHTML="7.26"
		table.rows[9].cells[1].innerHTML="5.00"
		table.rows[9].cells[2].innerHTML="6.67"
		table.rows[10].cells[1].innerHTML="3.82"
		table.rows[10].cells[2].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("mobChange6").addEventListener("click", mobChange6);
	function mobChange7() {
		mobLoss.setJSONData(datasLoss.week7);
		mobWin.setJSONData(datasWin.week7);
		mobPercent.setJSONData(datasPercent.week7);
		mobPud.setJSONData(datasPud.week7);
		document.getElementById("mobTitle").innerHTML = "Week 7";
		document.getElementById("mobParagraph").innerHTML = "Congratulations to the 64 who made it here, and the 32 moving on!";
		var table = document.getElementById('mobTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="419"
		table.rows[1].cells[3].innerHTML="0.00%"
		table.rows[2].cells[1].innerHTML="52"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45.2%"
		table.rows[3].cells[1].innerHTML="46"
		table.rows[3].cells[2].innerHTML="45"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[4].cells[1].innerHTML="46"
		table.rows[4].cells[2].innerHTML="53"
		table.rows[4].cells[3].innerHTML="46.5%"
		table.rows[5].cells[1].innerHTML="38"
		table.rows[5].cells[2].innerHTML="33"
		table.rows[5].cells[3].innerHTML="53.5%"
		table.rows[6].cells[1].innerHTML="48"
		table.rows[6].cells[2].innerHTML="30"
		table.rows[6].cells[3].innerHTML="61.5%"
		table.rows[7].cells[1].innerHTML="46"
		table.rows[7].cells[2].innerHTML="23"
		table.rows[7].cells[3].innerHTML="66.7%"
		table.rows[8].cells[1].innerHTML="39"
		table.rows[8].cells[2].innerHTML="21"
		table.rows[8].cells[3].innerHTML="65.0%"
		table.rows[9].cells[1].innerHTML="51"
		table.rows[9].cells[2].innerHTML="20"
		table.rows[9].cells[3].innerHTML="71.8%"
		table.rows[10].cells[1].innerHTML="34"
		table.rows[10].cells[2].innerHTML="20"
		table.rows[10].cells[3].innerHTML="63.0%"
		table.rows[11].cells[1].innerHTML="58"
		table.rows[11].cells[2].innerHTML="19"
		table.rows[11].cells[3].innerHTML="75.3%"
		table.rows[12].cells[1].innerHTML="37"
		table.rows[12].cells[2].innerHTML="12"
		table.rows[12].cells[3].innerHTML="74.0%"
		table.rows[13].cells[1].innerHTML="35"
		table.rows[13].cells[2].innerHTML="14"
		table.rows[13].cells[3].innerHTML="71.4%"
		table.rows[14].cells[1].innerHTML="35"
		table.rows[14].cells[2].innerHTML="12"
		table.rows[14].cells[3].innerHTML="74.5%"
		table.rows[15].cells[1].innerHTML="34"
		table.rows[15].cells[2].innerHTML="7"
		table.rows[15].cells[3].innerHTML="82.9%"
		table.rows[16].cells[1].innerHTML="27"
		table.rows[16].cells[2].innerHTML="12"
		table.rows[16].cells[3].innerHTML="69.2%"
		table.rows[17].cells[1].innerHTML="29"
		table.rows[17].cells[2].innerHTML="4"
		table.rows[17].cells[3].innerHTML="87.9%"
		table.rows[18].cells[1].innerHTML="11"
		table.rows[18].cells[2].innerHTML="5"
		table.rows[18].cells[3].innerHTML="68.8%"
		table.rows[19].cells[1].innerHTML="12"
		table.rows[19].cells[2].innerHTML="4"
		table.rows[19].cells[3].innerHTML="75.0%"
		table.rows[20].cells[1].innerHTML="17"
		table.rows[20].cells[2].innerHTML="3"
		table.rows[20].cells[3].innerHTML="85.0%"
		table.rows[21].cells[1].innerHTML="26"
		table.rows[21].cells[2].innerHTML="3"
		table.rows[21].cells[3].innerHTML="89.7%"
		
		var table = document.getElementById('mobRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="9.90"
		table.rows[2].cells[1].innerHTML="6.28"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[3].cells[1].innerHTML="5.80"
		table.rows[3].cells[2].innerHTML="7.91"
		table.rows[4].cells[1].innerHTML="5.79"
		table.rows[4].cells[2].innerHTML="8.06"
		table.rows[5].cells[1].innerHTML="6.00"
		table.rows[5].cells[2].innerHTML="7.74"
		table.rows[6].cells[1].innerHTML="5.05"
		table.rows[6].cells[2].innerHTML="6.92"
		table.rows[7].cells[1].innerHTML="3.85"
		table.rows[7].cells[2].innerHTML="6.13"
		table.rows[8].cells[1].innerHTML="5.62"
		table.rows[8].cells[2].innerHTML="7.26"
		table.rows[9].cells[1].innerHTML="5.00"
		table.rows[9].cells[2].innerHTML="6.67"
		table.rows[10].cells[1].innerHTML="3.82"
		table.rows[10].cells[2].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("mobChange7").addEventListener("click", mobChange7);
	function mobChange8() {
		mobLoss.setJSONData(datasLoss.week8);
		mobWin.setJSONData(datasWin.week8);
		mobPercent.setJSONData(datasPercent.week8);
		mobPud.setJSONData(datasPud.week8);
		document.getElementById("mobTitle").innerHTML = "Week 8";
		document.getElementById("mobParagraph").innerHTML = "Congratulations to the 32 who made it here, and the 16 moving on!";
		var table = document.getElementById('mobTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="419"
		table.rows[1].cells[3].innerHTML="0.00%"
		table.rows[2].cells[1].innerHTML="52"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45.2%"
		table.rows[3].cells[1].innerHTML="46"
		table.rows[3].cells[2].innerHTML="45"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[4].cells[1].innerHTML="46"
		table.rows[4].cells[2].innerHTML="53"
		table.rows[4].cells[3].innerHTML="46.5%"
		table.rows[5].cells[1].innerHTML="38"
		table.rows[5].cells[2].innerHTML="33"
		table.rows[5].cells[3].innerHTML="53.5%"
		table.rows[6].cells[1].innerHTML="48"
		table.rows[6].cells[2].innerHTML="30"
		table.rows[6].cells[3].innerHTML="61.5%"
		table.rows[7].cells[1].innerHTML="46"
		table.rows[7].cells[2].innerHTML="23"
		table.rows[7].cells[3].innerHTML="66.7%"
		table.rows[8].cells[1].innerHTML="39"
		table.rows[8].cells[2].innerHTML="21"
		table.rows[8].cells[3].innerHTML="65.0%"
		table.rows[9].cells[1].innerHTML="51"
		table.rows[9].cells[2].innerHTML="20"
		table.rows[9].cells[3].innerHTML="71.8%"
		table.rows[10].cells[1].innerHTML="34"
		table.rows[10].cells[2].innerHTML="20"
		table.rows[10].cells[3].innerHTML="63.0%"
		table.rows[11].cells[1].innerHTML="58"
		table.rows[11].cells[2].innerHTML="19"
		table.rows[11].cells[3].innerHTML="75.3%"
		table.rows[12].cells[1].innerHTML="37"
		table.rows[12].cells[2].innerHTML="12"
		table.rows[12].cells[3].innerHTML="74.0%"
		table.rows[13].cells[1].innerHTML="35"
		table.rows[13].cells[2].innerHTML="14"
		table.rows[13].cells[3].innerHTML="71.4%"
		table.rows[14].cells[1].innerHTML="35"
		table.rows[14].cells[2].innerHTML="12"
		table.rows[14].cells[3].innerHTML="74.5%"
		table.rows[15].cells[1].innerHTML="34"
		table.rows[15].cells[2].innerHTML="7"
		table.rows[15].cells[3].innerHTML="82.9%"
		table.rows[16].cells[1].innerHTML="27"
		table.rows[16].cells[2].innerHTML="12"
		table.rows[16].cells[3].innerHTML="69.2%"
		table.rows[17].cells[1].innerHTML="29"
		table.rows[17].cells[2].innerHTML="4"
		table.rows[17].cells[3].innerHTML="87.9%"
		table.rows[18].cells[1].innerHTML="11"
		table.rows[18].cells[2].innerHTML="5"
		table.rows[18].cells[3].innerHTML="68.8%"
		table.rows[19].cells[1].innerHTML="12"
		table.rows[19].cells[2].innerHTML="4"
		table.rows[19].cells[3].innerHTML="75.0%"
		table.rows[20].cells[1].innerHTML="17"
		table.rows[20].cells[2].innerHTML="3"
		table.rows[20].cells[3].innerHTML="85.0%"
		table.rows[21].cells[1].innerHTML="26"
		table.rows[21].cells[2].innerHTML="3"
		table.rows[21].cells[3].innerHTML="89.7%"
		
		var table = document.getElementById('mobRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="9.90"
		table.rows[2].cells[1].innerHTML="6.28"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[3].cells[1].innerHTML="5.80"
		table.rows[3].cells[2].innerHTML="7.91"
		table.rows[4].cells[1].innerHTML="5.79"
		table.rows[4].cells[2].innerHTML="8.06"
		table.rows[5].cells[1].innerHTML="6.00"
		table.rows[5].cells[2].innerHTML="7.74"
		table.rows[6].cells[1].innerHTML="5.05"
		table.rows[6].cells[2].innerHTML="6.92"
		table.rows[7].cells[1].innerHTML="3.85"
		table.rows[7].cells[2].innerHTML="6.13"
		table.rows[8].cells[1].innerHTML="5.62"
		table.rows[8].cells[2].innerHTML="7.26"
		table.rows[9].cells[1].innerHTML="5.00"
		table.rows[9].cells[2].innerHTML="6.67"
		table.rows[10].cells[1].innerHTML="3.82"
		table.rows[10].cells[2].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("mobChange8").addEventListener("click", mobChange8);
	function mobChange9() {
		mobLoss.setJSONData(datasLoss.week9);
		mobWin.setJSONData(datasWin.week9);
		mobPercent.setJSONData(datasPercent.week9);
		mobPud.setJSONData(datasPud.week9);
		document.getElementById("mobTitle").innerHTML = "Week 9";
		document.getElementById("mobParagraph").innerHTML = "Congratulations to the 16 who made it here, and the 8 moving on to quarter finals!";
		var table = document.getElementById('mobTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="419"
		table.rows[1].cells[3].innerHTML="0.00%"
		table.rows[2].cells[1].innerHTML="52"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45.2%"
		table.rows[3].cells[1].innerHTML="46"
		table.rows[3].cells[2].innerHTML="45"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[4].cells[1].innerHTML="46"
		table.rows[4].cells[2].innerHTML="53"
		table.rows[4].cells[3].innerHTML="46.5%"
		table.rows[5].cells[1].innerHTML="38"
		table.rows[5].cells[2].innerHTML="33"
		table.rows[5].cells[3].innerHTML="53.5%"
		table.rows[6].cells[1].innerHTML="48"
		table.rows[6].cells[2].innerHTML="30"
		table.rows[6].cells[3].innerHTML="61.5%"
		table.rows[7].cells[1].innerHTML="46"
		table.rows[7].cells[2].innerHTML="23"
		table.rows[7].cells[3].innerHTML="66.7%"
		table.rows[8].cells[1].innerHTML="39"
		table.rows[8].cells[2].innerHTML="21"
		table.rows[8].cells[3].innerHTML="65.0%"
		table.rows[9].cells[1].innerHTML="51"
		table.rows[9].cells[2].innerHTML="20"
		table.rows[9].cells[3].innerHTML="71.8%"
		table.rows[10].cells[1].innerHTML="34"
		table.rows[10].cells[2].innerHTML="20"
		table.rows[10].cells[3].innerHTML="63.0%"
		table.rows[11].cells[1].innerHTML="58"
		table.rows[11].cells[2].innerHTML="19"
		table.rows[11].cells[3].innerHTML="75.3%"
		table.rows[12].cells[1].innerHTML="37"
		table.rows[12].cells[2].innerHTML="12"
		table.rows[12].cells[3].innerHTML="74.0%"
		table.rows[13].cells[1].innerHTML="35"
		table.rows[13].cells[2].innerHTML="14"
		table.rows[13].cells[3].innerHTML="71.4%"
		table.rows[14].cells[1].innerHTML="35"
		table.rows[14].cells[2].innerHTML="12"
		table.rows[14].cells[3].innerHTML="74.5%"
		table.rows[15].cells[1].innerHTML="34"
		table.rows[15].cells[2].innerHTML="7"
		table.rows[15].cells[3].innerHTML="82.9%"
		table.rows[16].cells[1].innerHTML="27"
		table.rows[16].cells[2].innerHTML="12"
		table.rows[16].cells[3].innerHTML="69.2%"
		table.rows[17].cells[1].innerHTML="29"
		table.rows[17].cells[2].innerHTML="4"
		table.rows[17].cells[3].innerHTML="87.9%"
		table.rows[18].cells[1].innerHTML="11"
		table.rows[18].cells[2].innerHTML="5"
		table.rows[18].cells[3].innerHTML="68.8%"
		table.rows[19].cells[1].innerHTML="12"
		table.rows[19].cells[2].innerHTML="4"
		table.rows[19].cells[3].innerHTML="75.0%"
		table.rows[20].cells[1].innerHTML="17"
		table.rows[20].cells[2].innerHTML="3"
		table.rows[20].cells[3].innerHTML="85.0%"
		table.rows[21].cells[1].innerHTML="26"
		table.rows[21].cells[2].innerHTML="3"
		table.rows[21].cells[3].innerHTML="89.7%"
		
		var table = document.getElementById('mobRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="9.90"
		table.rows[2].cells[1].innerHTML="6.28"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[3].cells[1].innerHTML="5.80"
		table.rows[3].cells[2].innerHTML="7.91"
		table.rows[4].cells[1].innerHTML="5.79"
		table.rows[4].cells[2].innerHTML="8.06"
		table.rows[5].cells[1].innerHTML="6.00"
		table.rows[5].cells[2].innerHTML="7.74"
		table.rows[6].cells[1].innerHTML="5.05"
		table.rows[6].cells[2].innerHTML="6.92"
		table.rows[7].cells[1].innerHTML="3.85"
		table.rows[7].cells[2].innerHTML="6.13"
		table.rows[8].cells[1].innerHTML="5.62"
		table.rows[8].cells[2].innerHTML="7.26"
		table.rows[9].cells[1].innerHTML="5.00"
		table.rows[9].cells[2].innerHTML="6.67"
		table.rows[10].cells[1].innerHTML="3.82"
		table.rows[10].cells[2].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("mobChange9").addEventListener("click", mobChange9);
	function mobChange10() {
		mobLoss.setJSONData(datasLoss.week10);
		mobWin.setJSONData(datasWin.week10);
		mobPercent.setJSONData(datasPercent.week10);
		mobPud.setJSONData(datasPud.week10);
		document.getElementById("mobTitle").innerHTML = "Week 10";
		document.getElementById("mobParagraph").innerHTML = "Sadly _, _, _ and _ were eliminated, but the top 4 are going to semi finals!";
		var table = document.getElementById('mobTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="419"
		table.rows[1].cells[3].innerHTML="0.00%"
		table.rows[2].cells[1].innerHTML="52"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45.2%"
		table.rows[3].cells[1].innerHTML="46"
		table.rows[3].cells[2].innerHTML="45"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[4].cells[1].innerHTML="46"
		table.rows[4].cells[2].innerHTML="53"
		table.rows[4].cells[3].innerHTML="46.5%"
		table.rows[5].cells[1].innerHTML="38"
		table.rows[5].cells[2].innerHTML="33"
		table.rows[5].cells[3].innerHTML="53.5%"
		table.rows[6].cells[1].innerHTML="48"
		table.rows[6].cells[2].innerHTML="30"
		table.rows[6].cells[3].innerHTML="61.5%"
		table.rows[7].cells[1].innerHTML="46"
		table.rows[7].cells[2].innerHTML="23"
		table.rows[7].cells[3].innerHTML="66.7%"
		table.rows[8].cells[1].innerHTML="39"
		table.rows[8].cells[2].innerHTML="21"
		table.rows[8].cells[3].innerHTML="65.0%"
		table.rows[9].cells[1].innerHTML="51"
		table.rows[9].cells[2].innerHTML="20"
		table.rows[9].cells[3].innerHTML="71.8%"
		table.rows[10].cells[1].innerHTML="34"
		table.rows[10].cells[2].innerHTML="20"
		table.rows[10].cells[3].innerHTML="63.0%"
		table.rows[11].cells[1].innerHTML="58"
		table.rows[11].cells[2].innerHTML="19"
		table.rows[11].cells[3].innerHTML="75.3%"
		table.rows[12].cells[1].innerHTML="37"
		table.rows[12].cells[2].innerHTML="12"
		table.rows[12].cells[3].innerHTML="74.0%"
		table.rows[13].cells[1].innerHTML="35"
		table.rows[13].cells[2].innerHTML="14"
		table.rows[13].cells[3].innerHTML="71.4%"
		table.rows[14].cells[1].innerHTML="35"
		table.rows[14].cells[2].innerHTML="12"
		table.rows[14].cells[3].innerHTML="74.5%"
		table.rows[15].cells[1].innerHTML="34"
		table.rows[15].cells[2].innerHTML="7"
		table.rows[15].cells[3].innerHTML="82.9%"
		table.rows[16].cells[1].innerHTML="27"
		table.rows[16].cells[2].innerHTML="12"
		table.rows[16].cells[3].innerHTML="69.2%"
		table.rows[17].cells[1].innerHTML="29"
		table.rows[17].cells[2].innerHTML="4"
		table.rows[17].cells[3].innerHTML="87.9%"
		table.rows[18].cells[1].innerHTML="11"
		table.rows[18].cells[2].innerHTML="5"
		table.rows[18].cells[3].innerHTML="68.8%"
		table.rows[19].cells[1].innerHTML="12"
		table.rows[19].cells[2].innerHTML="4"
		table.rows[19].cells[3].innerHTML="75.0%"
		table.rows[20].cells[1].innerHTML="17"
		table.rows[20].cells[2].innerHTML="3"
		table.rows[20].cells[3].innerHTML="85.0%"
		table.rows[21].cells[1].innerHTML="26"
		table.rows[21].cells[2].innerHTML="3"
		table.rows[21].cells[3].innerHTML="89.7%"
		
		var table = document.getElementById('mobRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="9.90"
		table.rows[2].cells[1].innerHTML="6.28"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[3].cells[1].innerHTML="5.80"
		table.rows[3].cells[2].innerHTML="7.91"
		table.rows[4].cells[1].innerHTML="5.79"
		table.rows[4].cells[2].innerHTML="8.06"
		table.rows[5].cells[1].innerHTML="6.00"
		table.rows[5].cells[2].innerHTML="7.74"
		table.rows[6].cells[1].innerHTML="5.05"
		table.rows[6].cells[2].innerHTML="6.92"
		table.rows[7].cells[1].innerHTML="3.85"
		table.rows[7].cells[2].innerHTML="6.13"
		table.rows[8].cells[1].innerHTML="5.62"
		table.rows[8].cells[2].innerHTML="7.26"
		table.rows[9].cells[1].innerHTML="5.00"
		table.rows[9].cells[2].innerHTML="6.67"
		table.rows[10].cells[1].innerHTML="3.82"
		table.rows[10].cells[2].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("mobChange10").addEventListener("click", mobChange10);
	function mobChange11() {
		mobLoss.setJSONData(datasLoss.week11);
		mobWin.setJSONData(datasWin.week11);
		mobPercent.setJSONData(datasPercent.week11);
		mobPud.setJSONData(datasPud.week11);
		document.getElementById("mobTitle").innerHTML = "Week 11";
		document.getElementById("mobParagraph").innerHTML = "Sadly _ and _ were eliminated, but the top 2 are going to finals!";
		var table = document.getElementById('mobTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="419"
		table.rows[1].cells[3].innerHTML="0.00%"
		table.rows[2].cells[1].innerHTML="52"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45.2%"
		table.rows[3].cells[1].innerHTML="46"
		table.rows[3].cells[2].innerHTML="45"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[4].cells[1].innerHTML="46"
		table.rows[4].cells[2].innerHTML="53"
		table.rows[4].cells[3].innerHTML="46.5%"
		table.rows[5].cells[1].innerHTML="38"
		table.rows[5].cells[2].innerHTML="33"
		table.rows[5].cells[3].innerHTML="53.5%"
		table.rows[6].cells[1].innerHTML="48"
		table.rows[6].cells[2].innerHTML="30"
		table.rows[6].cells[3].innerHTML="61.5%"
		table.rows[7].cells[1].innerHTML="46"
		table.rows[7].cells[2].innerHTML="23"
		table.rows[7].cells[3].innerHTML="66.7%"
		table.rows[8].cells[1].innerHTML="39"
		table.rows[8].cells[2].innerHTML="21"
		table.rows[8].cells[3].innerHTML="65.0%"
		table.rows[9].cells[1].innerHTML="51"
		table.rows[9].cells[2].innerHTML="20"
		table.rows[9].cells[3].innerHTML="71.8%"
		table.rows[10].cells[1].innerHTML="34"
		table.rows[10].cells[2].innerHTML="20"
		table.rows[10].cells[3].innerHTML="63.0%"
		table.rows[11].cells[1].innerHTML="58"
		table.rows[11].cells[2].innerHTML="19"
		table.rows[11].cells[3].innerHTML="75.3%"
		table.rows[12].cells[1].innerHTML="37"
		table.rows[12].cells[2].innerHTML="12"
		table.rows[12].cells[3].innerHTML="74.0%"
		table.rows[13].cells[1].innerHTML="35"
		table.rows[13].cells[2].innerHTML="14"
		table.rows[13].cells[3].innerHTML="71.4%"
		table.rows[14].cells[1].innerHTML="35"
		table.rows[14].cells[2].innerHTML="12"
		table.rows[14].cells[3].innerHTML="74.5%"
		table.rows[15].cells[1].innerHTML="34"
		table.rows[15].cells[2].innerHTML="7"
		table.rows[15].cells[3].innerHTML="82.9%"
		table.rows[16].cells[1].innerHTML="27"
		table.rows[16].cells[2].innerHTML="12"
		table.rows[16].cells[3].innerHTML="69.2%"
		table.rows[17].cells[1].innerHTML="29"
		table.rows[17].cells[2].innerHTML="4"
		table.rows[17].cells[3].innerHTML="87.9%"
		table.rows[18].cells[1].innerHTML="11"
		table.rows[18].cells[2].innerHTML="5"
		table.rows[18].cells[3].innerHTML="68.8%"
		table.rows[19].cells[1].innerHTML="12"
		table.rows[19].cells[2].innerHTML="4"
		table.rows[19].cells[3].innerHTML="75.0%"
		table.rows[20].cells[1].innerHTML="17"
		table.rows[20].cells[2].innerHTML="3"
		table.rows[20].cells[3].innerHTML="85.0%"
		table.rows[21].cells[1].innerHTML="26"
		table.rows[21].cells[2].innerHTML="3"
		table.rows[21].cells[3].innerHTML="89.7%"
		
		var table = document.getElementById('mobRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="9.90"
		table.rows[2].cells[1].innerHTML="6.28"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[3].cells[1].innerHTML="5.80"
		table.rows[3].cells[2].innerHTML="7.91"
		table.rows[4].cells[1].innerHTML="5.79"
		table.rows[4].cells[2].innerHTML="8.06"
		table.rows[5].cells[1].innerHTML="6.00"
		table.rows[5].cells[2].innerHTML="7.74"
		table.rows[6].cells[1].innerHTML="5.05"
		table.rows[6].cells[2].innerHTML="6.92"
		table.rows[7].cells[1].innerHTML="3.85"
		table.rows[7].cells[2].innerHTML="6.13"
		table.rows[8].cells[1].innerHTML="5.62"
		table.rows[8].cells[2].innerHTML="7.26"
		table.rows[9].cells[1].innerHTML="5.00"
		table.rows[9].cells[2].innerHTML="6.67"
		table.rows[10].cells[1].innerHTML="3.82"
		table.rows[10].cells[2].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("mobChange11").addEventListener("click", mobChange11);
	function mobChange12() {
		mobLoss.setJSONData(datasLoss.week12);
		mobWin.setJSONData(datasWin.week12);
		mobPercent.setJSONData(datasPercent.week12);
		mobPud.setJSONData(datasPud.week12);
		document.getElementById("mobTitle").innerHTML = "Week 12";
		document.getElementById("mobParagraph").innerHTML = "Sadly _ was eliminated, but congratulations to the victor, _!";
		var table = document.getElementById('mobTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="419"
		table.rows[1].cells[3].innerHTML="0.00%"
		table.rows[2].cells[1].innerHTML="52"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45.2%"
		table.rows[3].cells[1].innerHTML="46"
		table.rows[3].cells[2].innerHTML="45"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[4].cells[1].innerHTML="46"
		table.rows[4].cells[2].innerHTML="53"
		table.rows[4].cells[3].innerHTML="46.5%"
		table.rows[5].cells[1].innerHTML="38"
		table.rows[5].cells[2].innerHTML="33"
		table.rows[5].cells[3].innerHTML="53.5%"
		table.rows[6].cells[1].innerHTML="48"
		table.rows[6].cells[2].innerHTML="30"
		table.rows[6].cells[3].innerHTML="61.5%"
		table.rows[7].cells[1].innerHTML="46"
		table.rows[7].cells[2].innerHTML="23"
		table.rows[7].cells[3].innerHTML="66.7%"
		table.rows[8].cells[1].innerHTML="39"
		table.rows[8].cells[2].innerHTML="21"
		table.rows[8].cells[3].innerHTML="65.0%"
		table.rows[9].cells[1].innerHTML="51"
		table.rows[9].cells[2].innerHTML="20"
		table.rows[9].cells[3].innerHTML="71.8%"
		table.rows[10].cells[1].innerHTML="34"
		table.rows[10].cells[2].innerHTML="20"
		table.rows[10].cells[3].innerHTML="63.0%"
		table.rows[11].cells[1].innerHTML="58"
		table.rows[11].cells[2].innerHTML="19"
		table.rows[11].cells[3].innerHTML="75.3%"
		table.rows[12].cells[1].innerHTML="37"
		table.rows[12].cells[2].innerHTML="12"
		table.rows[12].cells[3].innerHTML="74.0%"
		table.rows[13].cells[1].innerHTML="35"
		table.rows[13].cells[2].innerHTML="14"
		table.rows[13].cells[3].innerHTML="71.4%"
		table.rows[14].cells[1].innerHTML="35"
		table.rows[14].cells[2].innerHTML="12"
		table.rows[14].cells[3].innerHTML="74.5%"
		table.rows[15].cells[1].innerHTML="34"
		table.rows[15].cells[2].innerHTML="7"
		table.rows[15].cells[3].innerHTML="82.9%"
		table.rows[16].cells[1].innerHTML="27"
		table.rows[16].cells[2].innerHTML="12"
		table.rows[16].cells[3].innerHTML="69.2%"
		table.rows[17].cells[1].innerHTML="29"
		table.rows[17].cells[2].innerHTML="4"
		table.rows[17].cells[3].innerHTML="87.9%"
		table.rows[18].cells[1].innerHTML="11"
		table.rows[18].cells[2].innerHTML="5"
		table.rows[18].cells[3].innerHTML="68.8%"
		table.rows[19].cells[1].innerHTML="12"
		table.rows[19].cells[2].innerHTML="4"
		table.rows[19].cells[3].innerHTML="75.0%"
		table.rows[20].cells[1].innerHTML="17"
		table.rows[20].cells[2].innerHTML="3"
		table.rows[20].cells[3].innerHTML="85.0%"
		table.rows[21].cells[1].innerHTML="26"
		table.rows[21].cells[2].innerHTML="3"
		table.rows[21].cells[3].innerHTML="89.7%"
		
		var table = document.getElementById('mobRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="9.90"
		table.rows[2].cells[1].innerHTML="6.28"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[3].cells[1].innerHTML="5.80"
		table.rows[3].cells[2].innerHTML="7.91"
		table.rows[4].cells[1].innerHTML="5.79"
		table.rows[4].cells[2].innerHTML="8.06"
		table.rows[5].cells[1].innerHTML="6.00"
		table.rows[5].cells[2].innerHTML="7.74"
		table.rows[6].cells[1].innerHTML="5.05"
		table.rows[6].cells[2].innerHTML="6.92"
		table.rows[7].cells[1].innerHTML="3.85"
		table.rows[7].cells[2].innerHTML="6.13"
		table.rows[8].cells[1].innerHTML="5.62"
		table.rows[8].cells[2].innerHTML="7.26"
		table.rows[9].cells[1].innerHTML="5.00"
		table.rows[9].cells[2].innerHTML="6.67"
		table.rows[10].cells[1].innerHTML="3.82"
		table.rows[10].cells[2].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("mobChange12").addEventListener("click", mobChange12);
})


/*FusionCharts.ready(function() { //Desktop
	var deskOverall = new FusionCharts({
		"type": "msline",
		"renderAt": "deskSummaryChart",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
			"chart": {
				"caption": "% that won at each achievement level",
				"subCaption": "Over course of competition",
				"yAxisName": "Win %",
				"xAxisName": "Week of contest",
				"yAxisMaxValue": "100",
				"yAxisNameFontSize": "12",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"theme": "ocean",
				"showValues": "0",
				"plottooltext": "$seriesname",
				"drawAnchors": "0",
				"canvasBgColor": "#eeeeee",
				"bgColor": "#fcfcfc",
			},
			"categories": [
				{
					"category": [
						{
							"label": "Week 1"
						},{
							"label": "Week 2"
						},{
							"label": "Week 3"
						},{
							"label": "Week 4"
						}/*,{
							"label": "Week 5 (256)"
						},{
							"label": "Week 6 (128)"
						},{
							"label": "Week 7 (64)"
						},{
							"label": "Week 8 (32)"
						},{
							"label": "Week 9 (16)"
						},{
							"label": "Week 10 (8)"
						},{
							"label": "Week 11 (4)"
						},{
							"label": "Week 12 (2)"
						}
					]
				}
			],
			"dataset": [ //0
				{
					"seriesname": "0",
					"color": "#000000",
					"data": [
						{
							"value": "0"
						},{
							"value": "0"
						},{
							"value": "0"
						},{
							"value": "0"
						},
					]
				},{
					"seriesname": "1",
					"color": "#000000",
					"data": [
						{
							"value": "45.22"
						},{
							"value": "54.33"
						},{
							"value": "62.25"
						},{
							"value": "65.38"
						},
					]
				},{
					"seriesname": "2",
					"color": "#003200",
					"data": [
						{
							"value": "50.55"
						},{
							"value": "56.67"
						},{
							"value": "67.95"
						},{
							"value": "75.28"
						},
					]
				},{
					"seriesname": "3",
					"color": "#005f00",
					"data": [
						{
							"value": "46.46"
						},{
							"value": "59.70"
						},{
							"value": "66.13"
						},{
							"value": "65.22"
						},
					]
				},{
					"seriesname": "4",
					"color": "#007800",
					"data": [
						{
							"value": "53.52"
						},{
							"value": "65.71"
						},{
							"value": "59.26"
						},{
							"value": "91.11"
						},
					]
				},{
					"seriesname": "5",
					"color": "#008c00",
					"data": [
						{
							"value": "61.54"
						},{
							"value": "69.81"
						},{
							"value": "77.59"
						},{
							"value": "85.71"
						},
					]
				},{
					"seriesname": "6",
					"color": "#00a000",
					"data": [
						{
							"value": "66.67"
						},{
							"value": "70.59"
						},{
							"value": "71.43"
						},{
							"value": "80.00"
						},
					]
				},{
					"seriesname": "7",
					"color": "#00b900",
					"data": [
						{
							"value": "65.00"
						},{
							"value": "73.33"
						},{
							"value": "68.89"
						},{
							"value": "71.79"
						},
					]
				},{
					"seriesname": "8",
					"color": "#00c800",
					"data": [
						{
							"value": "71.83"
						},{
							"value": "60.38"
						},{
							"value": "75.76"
						},{
							"value": "75.86"
						},
					]
				},{
					"seriesname": "9",
					"color": "#00dc00",
					"data": [
						{
							"value": "62.96"
						},{
							"value": "71.43"
						},{
							"value": "80.77"
						},{
							"value": "85.00"
						},
					]
				},{
					"seriesname": "10",
					"color": "#00eb00",
					"data": [
						{
							"value": "75.32"
						},{
							"value": "72.31"
						},{
							"value": "71.74"
						},{
							"value": "82.93"
						},
					]
				},{
					"seriesname": "11",
					"color": "#00ff00",
					"data": [
						{
							"value": "74.00"
						},{
							"value": "79.25"
						},{
							"value": "77.78"
						},{
							"value": "77.41"
						},
					]
				},{
					"seriesname": "12",
					"color": "#25ff25",
					"data": [
						{
							"value": "71.43"
						},{
							"value": "79.55"
						},{
							"value": "86.11"
						},{
							"value": "84.21"
						},
					]
				},{
					"seriesname": "13",
					"color": "#4bff4b",
					"data": [
						{
							"value": "74.47"
						},{
							"value": "76.67"
						},{
							"value": "83.87"
						},{
							"value": "77.27"
						},
					]
				},{
					"seriesname": "14",
					"color": "#64ff64",
					"data": [
						{
							"value": "82.93"
						},{
							"value": "73.68"
						},{
							"value": "83.33"
						},{
							"value": "85.00"
						},
					]
				},{
					"seriesname": "15",
					"color": "#7dff7d",
					"data": [
						{
							"value": "69.23"
						},{
							"value": "81.08"
						},{
							"value": "87.10"
						},{
							"value": "88.24"
						},
					]
				},{
					"seriesname": "16",
					"color": "#96ff96",
					"data": [
						{
							"value": "87.88"
						},{
							"value": "85.71"
						},{
							"value": "70.59"
						},{
							"value": "83.33"
						},
					]
				},{
					"seriesname": "17",
					"color": "#afffaf",
					"data": [
						{
							"value": "68.75"
						},{
							"value": "80.95"
						},{
							"value": "80.0"
						},{
							"value": "87.5"
						},
					]
				},{
					"seriesname": "18",
					"color": "#c8ffc8",
					"data": [
						{
							"value": "75.00"
						},{
							"value": "72.22"
						},{
							"value": "71.43"
						},{
							"value": "50.00"
						},
					]
				},{
					"seriesname": "19",
					"color": "#e1ffe1",
					"data": [
						{
							"value": "85.00"
						},{
							"value": "86.67"
						},{
							"value": "90.91"
						},{
							"value": "100.00"
						},
					]
				},{
					"seriesname": "20",
					"color": "#ffffff",
					"data": [
						{
							"value": "89.66"
						},{
							"value": "96.55"
						},{
							"value": "90.00"
						},{
							"value": "100.00"
						},
					]
				},
			],
		}
	});
	deskOverall.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskOverall.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskOverall.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
}) */


FusionCharts.ready(function() { 
	var datasWithPud = {"week1":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "With Puddings Included",
				"theme": "ocean",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.29",
          "z": "314"
        },
        {
          "x": "32.50",
          "y": "5.82",
          "z": "356"
        },
        {
          "x": "37.50",
          "y": "5.73",
          "z": "338"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.12",
          "z": "142"
        },
        {
          "x": "52.50",
          "y": "3.73",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }]
  },
  "week2":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "With Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"animation": "0",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "5.66",
          "z": "44"
        },
        {
          "x": "27.50",
          "y": "6.02",
          "z": "278"
        },
        {
          "x": "32.50",
          "y": "5.69",
          "z": "338"
        },
        {
          "x": "37.50",
          "y": "4.39",
          "z": "318"
        },
        {
          "x": "42.50",
          "y": "4.46",
          "z": "248"
        },
        {
          "x": "47.50",
          "y": "4.16",
          "z": "130"
        },
        {
          "x": "52.50",
          "y": "4.07",
          "z": "94"
        },
        {
          "x": "57.50",
          "y": "4.65",
          "z": "34"
        },
        {
          "x": "62.50",
          "y": "2.75",
          "z": "16"
        },
        {
          "x": "67.50",
          "y": "3.89",
          "z": "38"
        }
      ]
    }
  ]},
  "week3":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "With Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"animation": "0",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "3.3260869565217392",
          "z": "46",
        },{
          "x": "27.50",
          "y": "4.440140845070423",
          "z": "284",
        },{
          "x": "32.50",
          "y": "4.323899371069182",
          "z": "318",
        },{
          "x": "37.50",
          "y": "4.356687898089172",
          "z": "314",
        },{
          "x": "42.50",
          "y": "3.6721311475409837",
          "z": "244",
        },{
          "x": "47.50",
          "y": "3.7865853658536586",
          "z": "164",
        },{
          "x": "52.50",
          "y": "3.4705882352941178",
          "z": "68",
        },{
          "x": "57.50",
          "y": "2.772727272727273",
          "z": "44",
        },{
          "x": "62.50",
          "y": "3.0454545454545454",
          "z": "22",
        },{
          "x": "67.50",
          "y": "2.35",
          "z": "40",
        }
      ]
    }
  ]},
  "week4":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "With Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMaxValue": "20",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "2.33",
          "z": "42",
        },{
          "x": "27.50",
          "y": "3.03",
          "z": "296",
        },{
          "x": "32.50",
          "y": "3.47",
          "z": "304",
        },{
          "x": "37.50",
          "y": "2.87",
          "z": "348",
        },{
          "x": "42.50",
          "y": "3.02",
          "z": "224",
        },{
          "x": "47.50",
          "y": "2.73",
          "z": "126",
        },{
          "x": "52.50",
          "y": "3.16",
          "z": "82",
        },{
          "x": "57.50",
          "y": "3.91",
          "z": "56",
        },{
          "x": "62.50",
          "y": "2.92",
          "z": "24",
        },{
          "x": "67.50",
          "y": "2.24",
          "z": "42",
        }
      ]
    }
  ]},
  "week5":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "With Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMaxValue": "20",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week6":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "With Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week7":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "With Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week8":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "With Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week9":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "With Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week10":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "With Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week11":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "With Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMaxValue": "20",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week12":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "With Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMaxValue": "20",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]}
}

	var deskWithPud = new FusionCharts({
		"type": "bubble",
		"renderAt": "deskWithPud",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": datasWithPud.week3
	});
	deskWithPud.render();
	
	var datasNoPud = {"week1":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Without Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "9.90",
          "z": "29",
        },
        {
          "x": "27.50",
          "y": "8.78",
          "z": "225"
        },
        {
          "x": "32.50",
          "y": "7.93",
          "z": "261"
        },
        {
          "x": "37.50",
          "y": "8.00",
          "z": "242"
        },
        {
          "x": "42.50",
          "y": "7.74",
          "z": "157"
        },
        {
          "x": "47.50",
          "y": "6.92",
          "z": "105"
        },
        {
          "x": "52.50",
          "y": "6.13",
          "z": "39"
        },
        {
          "x": "57.50",
          "y": "7.26",
          "z": "31"
        },
        {
          "x": "62.50",
          "y": "6.67",
          "z": "9"
        },
        {
          "x": "67.50",
          "y": "5.37",
          "z": "27"
        }
      ]
    }]
  },
  "week2":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Without Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "10.38",
          "z": "24"
        },
        {
          "x": "27.50",
          "y": "9.20",
          "z": "182"
        },
        {
          "x": "32.50",
          "y": "8.86",
          "z": "217"
        },
        {
          "x": "37.50",
          "y": "7.09",
          "z": "197"
        },
        {
          "x": "42.50",
          "y": "7.04",
          "z": "157"
        },
        {
          "x": "47.50",
          "y": "7.21",
          "z": "75"
        },
        {
          "x": "52.50",
          "y": "6.38",
          "z": "60"
        },
        {
          "x": "57.50",
          "y": "6.32",
          "z": "25"
        },
        {
          "x": "62.50",
          "y": "4.89",
          "z": "9"
        },
        {
          "x": "67.50",
          "y": "5.92",
          "z": "25"
        }
      ]
    }
  ]},
  "week3":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Without Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMaxValue": "20",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.285714285714286",
          "z": "21",
        },{
          "x": "27.50",
          "y": "8.350993377483444",
          "z": "151",
        },{
          "x": "32.50",
          "y": "7.681564245810056",
          "z": "179",
        },{
          "x": "37.50",
          "y": "7.2",
          "z": "190",
        },{
          "x": "42.50",
          "y": "6.492753623188406",
          "z": "138",
        },{
          "x": "47.50",
          "y": "7.392857142857143",
          "z": "84",
        },{
          "x": "52.50",
          "y": "5.7560975609756095",
          "z": "41",
        },{
          "x": "57.50",
          "y": "4.518518518518518",
          "z": "27",
        },{
          "x": "62.50",
          "y": "4.1875",
          "z": "16",
        },{
          "x": "67.50",
          "y": "5.222222222222222",
          "z": "18",
        }
      ]
    }
  ]},
  "week4":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Without Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"yAxisMaxValue": "20",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "5.76",
          "z": "17",
        },{
          "x": "27.50",
          "y": "7.13",
          "z": "126",
        },{
          "x": "32.50",
          "y": "6.99",
          "z": "151",
        },{
          "x": "37.50",
          "y": "6.25",
          "z": "160",
        },{
          "x": "42.50",
          "y": "5.99",
          "z": "113",
        },{
          "x": "47.50",
          "y": "5.29",
          "z": "65",
        },{
          "x": "52.50",
          "y": "6.02",
          "z": "43",
        },{
          "x": "57.50",
          "y": "6.44",
          "z": "34",
        },{
          "x": "62.50",
          "y": "5.83",
          "z": "12",
        },{
          "x": "67.50",
          "y": "4.95",
          "z": "19",
        }
      ]
    }
  ]},
  "week5":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Without Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week6":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Without Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week7":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Without Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week8":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Without Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week9":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Without Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week10":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Without Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week11":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Without Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]},
  "week12":{
			// Chart Configuration
			"chart": {
				"caption": "Average Achievements for List Difficulties",
				"subCaption": "Without Puddings Included",
				"theme": "ocean",
				"yAxisMinValue": "0",
				"yAxisMaxValue": "20",
				"xAxisName": "Sum of Ratios",
				"xAxisNameFontSize": "12",
				"animation": "0",
				"plotTooltext": "$zvalue people in this category, $yvalue achievement average",
				"bgColor":"#fcfcfc", 
			},
  "categories": [
    {
      "verticallinealpha": "20",
      "category": [
        {
          "label": "25.00",
          "x": "25.00"
        },
        {
          "label": "30.00",
          "x": "30.00",
          "showverticalline": "1"
        },
        {
          "label": "35.00",
          "x": "35.00",
          "showverticalline": "1"
        },
        {
          "label": "40.00",
          "x": "40.00",
          "showverticalline": "1"
        },
        {
          "label": "45.00",
          "x": "45.00",
          "showverticalline": "1"
        },
        {
          "label": "50.00",
          "x": "50.00",
          "showverticalline": "1"
        },
        {
          "label": "55.00",
          "x": "55.00",
          "showverticalline": "1"
        },
        {
          "label": "60.00",
          "x": "60.00",
          "showverticalline": "1"
        },
        {
          "label": "65.00",
          "x": "65.00",
          "showverticalline": "1"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "x": "22.50",
          "y": "7.97",
          "z": "36"
        },
        {
          "x": "27.50",
          "y": "6.28",
          "z": "312"
        },
        {
          "x": "32.50",
          "y": "5.80",
          "z": "352"
        },
        {
          "x": "37.50",
          "y": "5.79",
          "z": "340"
        },
        {
          "x": "42.50",
          "y": "6.00",
          "z": "204"
        },
        {
          "x": "47.50",
          "y": "5.05",
          "z": "144"
        },
        {
          "x": "52.50",
          "y": "3.85",
          "z": "62"
        },
        {
          "x": "57.50",
          "y": "5.62",
          "z": "40"
        },
        {
          "x": "62.50",
          "y": "5.00",
          "z": "12"
        },
        {
          "x": "67.50",
          "y": "3.82",
          "z": "38"
        }
      ]
    }
  ]}
}

	var deskNoPud = new FusionCharts({
		"type": "bubble",
		"renderAt": "deskNoPud",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": datasNoPud.week3
	});
	deskNoPud.render();

	var datasWin = {"week1":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for winners",
				"subCaption": "Distribution of victor's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "52",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "46",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "46",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "38",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "48",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "46",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "39",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "51",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "34",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "58",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "37",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "35",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "35",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "34",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "27",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "29",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "11",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "12",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "17",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "26",
				"color": "#ffffff"
			}]
		},
		"week2":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for winners",
				"subCaption": "Distribution of victor's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "69",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "51",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "40",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "46",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "38",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "36",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "33",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "32",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "30",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "47",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "42",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "35",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "25",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "29",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "30",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "18",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "17",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "13",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "13",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "28",
				"color": "#ffffff"
			}]
		},
		"week3":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for winners",
				"subCaption": "Distribution of victor's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "94",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "53",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "41",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "32",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "45",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "35",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "31",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "25",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "42",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "33",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "35",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "31",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "26",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "20",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "27",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "12",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "12",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "5",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "10",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "18",
				"color": "#ffffff"
			}]
		},
		"week4":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for winners",
				"subCaption": "Distribution of victor's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "102",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "67",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "30",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "41",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "36",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "36",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "28",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "22",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "34",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "34",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "24",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "32",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "17",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "17",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "15",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "15",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "7",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "3",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "3",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "5",
				"color": "#ffffff"
			}]
		},
		"week5":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for winners",
				"subCaption": "Distribution of victor's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week6":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for winners",
				"subCaption": "Distribution of victor's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week7":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for winners",
				"subCaption": "Distribution of victor's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week8":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for winners",
				"subCaption": "Distribution of victor's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week9":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for winners",
				"subCaption": "Distribution of victor's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week10":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for winners",
				"subCaption": "Distribution of victor's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week11":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for winners",
				"subCaption": "Distribution of victor's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week12":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for winners",
				"subCaption": "Distribution of victor's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		}
	}

	var deskWin = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWins",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": datasWin.week3
	});
	deskWin.render();
	
	var datasLoss = {"week1":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for losers",
				"subCaption": "Distribution of failure's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "419",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "63",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "45",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "53",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "33",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "30",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "23",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "21",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "20",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "20",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "19",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "13",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "14",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "12",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "7",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "12",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "4",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "5",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "4",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "3",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "3",
				"color": "#ffffff"
			}]
		},
		"week2":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for losers",
				"subCaption": "Distribution of failure's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "570",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "58",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "40",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "27",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "24",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "16",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "15",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "12",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "21",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "12",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "18",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "11",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "9",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "7",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "10",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "7",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "3",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "4",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "5",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "2",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week3":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for losers",
				"subCaption": "Distribution of failure's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "679",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "57",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "25",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "21",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "22",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "13",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "14",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "14",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "8",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "10",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "13",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "10",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "5",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "5",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "4",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "4",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "5",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "3",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "2",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "2",
				"color": "#ffffff"
			}]
		},
		"week4":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for losers",
				"subCaption": "Distribution of failure's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "804",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "54",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "22",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "16",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "4",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "6",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "9",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "11",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "7",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "6",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "7",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "7",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "6",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "5",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "3",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "2",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "3",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "3",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "0",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "0",
				"color": "#ffffff"
			}]
		},
		"week5":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for losers",
				"subCaption": "Distribution of failure's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week6":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for losers",
				"subCaption": "Distribution of failure's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week7":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for losers",
				"subCaption": "Distribution of failure's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week8":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for losers",
				"subCaption": "Distribution of failure's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week9":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for losers",
				"subCaption": "Distribution of failure's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week10":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for losers",
				"subCaption": "Distribution of failure's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week11":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for losers",
				"subCaption": "Distribution of failure's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},
		"week12":{
			// Chart Configuration
			"chart": {
				"caption": "# of Achievements for losers",
				"subCaption": "Distribution of failure's scores",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"plottooltext": "$value",
				"bgColor":"#fcfcfc", 
				"smartLineColor":"#000000"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		}
	}
	
	var deskLoss = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLoses",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": datasLoss.week3
	});
	deskLoss.render();
	
	var datasPercent = {"week1": {
			// Chart Configuration
			"chart": {
				"caption": "Win % at diffferent scores",
				"subCaption": "Probabilty of winning at achievement #s",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"theme": "ocean",
				"showValues": "0",
				"animation": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"yAxisNameFontSize": "13",
				"xAxisNameFontSize": "13",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0.00",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "45.22",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "50.55",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "46.46",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "53.52",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "61.54",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "66.67",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "65.00",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "71.83",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "62.96",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "75.32",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "74.00",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "71.43",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "74.47",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "82.93",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "69.23",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "87.88",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "68.75",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "75.00",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "85.00",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "89.66",
				"color": "#ffffff"
			}]
		}, "week2": {
			// Chart Configuration
			"chart": {
				"caption": "Win % at diffferent scores",
				"subCaption": "Probabilty of winning at achievement #s",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"yAxisNameFontSize": "13",
				"xAxisNameFontSize": "13",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0.00",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "54.33",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "56.67",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "59.70",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "65.71",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "69.81",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "70.59",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "73.33",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "60.38",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "71.43",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "72.31",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "79.25",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "79.55",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "76.67",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "73.68",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "81.08",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "85.71",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "80.95",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "72.22",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "86.67",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "96.55",
				"color": "#ffffff"
			}]
		},"week3": {
			// Chart Configuration
			"chart": {
				"caption": "Win % at diffferent scores",
				"subCaption": "Probabilty of winning at achievement #s",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"yAxisNameFontSize": "13",
				"xAxisNameFontSize": "13",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0.0",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "62.25",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "67.95",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "66.13",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "59.26",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "77.59",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "71.43",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "68.89",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "75.76",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "80.77",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "71.74",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "77.78",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "86.11",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "83.87",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "83.33",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "87.1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "70.59",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "80.0",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "71.43",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "90.91",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "90.0",
				"color": "#ffffff"
			}]
		},"week4": {
			// Chart Configuration
			"chart": {
				"caption": "Win % at diffferent scores",
				"subCaption": "Probabilty of winning at achievement #s",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"yAxisNameFontSize": "13",
				"xAxisNameFontSize": "13",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0.0",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "65.38",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "75.28",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "65.22",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "91.11",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "85.71",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "80.0",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "71.79",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "75.86",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "85.0",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "82.93",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "77.42",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "84.21",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "77.27",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "85.0",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "88.24",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "83.33",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "87.5",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "50.0",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "100.0",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "100.0",
				"color": "#ffffff"
			}]
			
		},"week5": {
			// Chart Configuration
			"chart": {
				"caption": "Win % at diffferent scores",
				"subCaption": "Probabilty of winning at achievement #s",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"yAxisNameFontSize": "13",
				"xAxisNameFontSize": "13",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},"week6": {
			// Chart Configuration
			"chart": {
				"caption": "Win % at diffferent scores",
				"subCaption": "Probabilty of winning at achievement #s",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"yAxisNameFontSize": "13",
				"xAxisNameFontSize": "13",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},"week7": {
			// Chart Configuration
			"chart": {
				"caption": "Win % at diffferent scores",
				"subCaption": "Probabilty of winning at achievement #s",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"yAxisNameFontSize": "13",
				"xAxisNameFontSize": "13",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},"week8": {
			// Chart Configuration
			"chart": {
				"caption": "Win % at diffferent scores",
				"subCaption": "Probabilty of winning at achievement #s",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"yAxisNameFontSize": "13",
				"xAxisNameFontSize": "13",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},"week9": {
			// Chart Configuration
			"chart": {
				"caption": "Win % at diffferent scores",
				"subCaption": "Probabilty of winning at achievement #s",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"yAxisNameFontSize": "13",
				"xAxisNameFontSize": "13",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},"week10": {
			// Chart Configuration
			"chart": {
				"caption": "Win % at diffferent scores",
				"subCaption": "Probabilty of winning at achievement #s",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"yAxisNameFontSize": "13",
				"xAxisNameFontSize": "13",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},"week11": {
			// Chart Configuration
			"chart": {
				"caption": "Win % at diffferent scores",
				"subCaption": "Probabilty of winning at achievement #s",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"yAxisNameFontSize": "13",
				"xAxisNameFontSize": "13",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		},"week12": {
			// Chart Configuration
			"chart": {
				"caption": "Win % at diffferent scores",
				"subCaption": "Probabilty of winning at achievement #s",
				"xAxisName": "Achievement number",
				"yAxisName": "Win %",
				"theme": "ocean",
				"showValues": "0",
				"yAxisMaxValue": "100",
				"plottooltext": "$value",
				"yAxisNameFontSize": "13",
				"xAxisNameFontSize": "13",
				"animation": "0",
				"showPlotBorder": "1",
				"bgColor":"#fcfcfc",
				"canvasBgColor":"#fcfcfc",
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "1",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "1",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "1",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "1",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "1",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "1",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "1",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "1",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "1",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "1",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "1",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "1",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "1",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "1",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "1",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "1",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "1",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "1",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "1",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "1",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "1",
				"color": "#ffffff"
			}]
		}
	}
	
	var deskPercent = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercent",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": datasPercent.week3
	});
	deskPercent.render();
	
	function switchChart() {
		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
			deskWin.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
			deskPercent.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
			deskWithPud.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
			deskNoPud.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskLoss.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
			deskWin.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
			deskPercent.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
			deskWithPud.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
			deskNoPud.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
	
	deskChange4()
	
	function deskChange1() {
		deskLoss.setJSONData(datasLoss.week1);
		deskWin.setJSONData(datasWin.week1);
		deskPercent.setJSONData(datasPercent.week1);
		deskWithPud.setJSONData(datasWithPud.week1);
		deskNoPud.setJSONData(datasNoPud.week1);
		document.getElementById("deskTitle").innerHTML = "Week 1";
		document.getElementById("deskParagraph").innerHTML = "Assuming all 4 rounds of group stage will have the same score as this one (which they will not) with a cutoff of 16. Anyone who scores under 11 will have no chance of moving on, and anyone who scores over 16 will be guarenteed to move on. Numbers inbetween have varying chance to move on (depending on % that won numbers), aka #s inbetween need to win the matches!";
		var table = document.getElementById('deskTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="52"
		table.rows[1].cells[3].innerHTML="46"
		table.rows[1].cells[4].innerHTML="46"
		table.rows[1].cells[5].innerHTML="38"
		table.rows[1].cells[6].innerHTML="48"
		table.rows[1].cells[7].innerHTML="46"
		table.rows[1].cells[8].innerHTML="39"
		table.rows[1].cells[9].innerHTML="51"
		table.rows[1].cells[10].innerHTML="34"
		table.rows[1].cells[11].innerHTML="58"
		table.rows[1].cells[12].innerHTML="37"
		table.rows[1].cells[13].innerHTML="35"
		table.rows[1].cells[14].innerHTML="35"
		table.rows[1].cells[15].innerHTML="34"
		table.rows[1].cells[16].innerHTML="27"
		table.rows[1].cells[17].innerHTML="29"
		table.rows[1].cells[18].innerHTML="11"
		table.rows[1].cells[19].innerHTML="12"
		table.rows[1].cells[20].innerHTML="17"
		table.rows[1].cells[21].innerHTML="26"
		table.rows[2].cells[1].innerHTML="419"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45"
		table.rows[2].cells[4].innerHTML="53"
		table.rows[2].cells[5].innerHTML="33"
		table.rows[2].cells[6].innerHTML="30"
		table.rows[2].cells[7].innerHTML="23"
		table.rows[2].cells[8].innerHTML="21"
		table.rows[2].cells[9].innerHTML="20"
		table.rows[2].cells[10].innerHTML="20"
		table.rows[2].cells[11].innerHTML="19"
		table.rows[2].cells[12].innerHTML="13"
		table.rows[2].cells[13].innerHTML="14"
		table.rows[2].cells[14].innerHTML="12"
		table.rows[2].cells[15].innerHTML="7"
		table.rows[2].cells[16].innerHTML="12"
		table.rows[2].cells[17].innerHTML="4"
		table.rows[2].cells[18].innerHTML="5"
		table.rows[2].cells[19].innerHTML="4"
		table.rows[2].cells[20].innerHTML="3"
		table.rows[2].cells[21].innerHTML="3"
		table.rows[3].cells[1].innerHTML="0.00%"
		table.rows[3].cells[2].innerHTML="45.2%"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[3].cells[4].innerHTML="46.5%"
		table.rows[3].cells[5].innerHTML="53.5%"
		table.rows[3].cells[6].innerHTML="61.5%"
		table.rows[3].cells[7].innerHTML="66.7%"
		table.rows[3].cells[8].innerHTML="65.0%"
		table.rows[3].cells[9].innerHTML="71.8%"
		table.rows[3].cells[10].innerHTML="63.0%"
		table.rows[3].cells[11].innerHTML="75.3%"
		table.rows[3].cells[12].innerHTML="74.0%"
		table.rows[3].cells[13].innerHTML="71.4%"
		table.rows[3].cells[14].innerHTML="74.5%"
		table.rows[3].cells[15].innerHTML="82.9%"
		table.rows[3].cells[16].innerHTML="69.2%"
		table.rows[3].cells[17].innerHTML="87.9%"
		table.rows[3].cells[18].innerHTML="68.8%"
		table.rows[3].cells[19].innerHTML="75.0%"
		table.rows[3].cells[20].innerHTML="85.0%"
		table.rows[3].cells[21].innerHTML="89.7%"
		
		var table = document.getElementById('deskRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="6.29"
		table.rows[1].cells[3].innerHTML="5.82"
		table.rows[1].cells[4].innerHTML="5.73"
		table.rows[1].cells[5].innerHTML="5.96"
		table.rows[1].cells[6].innerHTML="5.12"
		table.rows[1].cells[7].innerHTML="3.73"
		table.rows[1].cells[8].innerHTML="5.62"
		table.rows[1].cells[9].innerHTML="5.00"
		table.rows[1].cells[10].innerHTML="3.82"
		table.rows[2].cells[1].innerHTML="9.90"
		table.rows[2].cells[2].innerHTML="8.78"
		table.rows[2].cells[3].innerHTML="7.93"
		table.rows[2].cells[4].innerHTML="8.00"
		table.rows[2].cells[5].innerHTML="7.74"
		table.rows[2].cells[6].innerHTML="6.92"
		table.rows[2].cells[7].innerHTML="6.13"
		table.rows[2].cells[8].innerHTML="7.26"
		table.rows[2].cells[9].innerHTML="6.67"
		table.rows[2].cells[10].innerHTML="5.37"
		
		switchChart()
    }
    document.getElementById("deskChange1").addEventListener("click", deskChange1);
	function deskChange2() {
		deskLoss.setJSONData(datasLoss.week2);
		deskWin.setJSONData(datasWin.week2);
		deskPercent.setJSONData(datasPercent.week2);
		deskWithPud.setJSONData(datasWithPud.week2);
		deskNoPud.setJSONData(datasNoPud.week2);
		document.getElementById("deskTitle").innerHTML = "Week 2";
		document.getElementById("deskParagraph").innerHTML = "Last week the cutoff was at 16 points, after this week it has been increased to 31 points. Surprisingly the amount needed to move on is actually going down, could this be because many people got the required 10 points for the badge?";
		var table = document.getElementById('deskTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="69"
		table.rows[1].cells[3].innerHTML="51"
		table.rows[1].cells[4].innerHTML="40"
		table.rows[1].cells[5].innerHTML="46"
		table.rows[1].cells[6].innerHTML="38"
		table.rows[1].cells[7].innerHTML="36"
		table.rows[1].cells[8].innerHTML="33"
		table.rows[1].cells[9].innerHTML="32"
		table.rows[1].cells[10].innerHTML="30"
		table.rows[1].cells[11].innerHTML="47"
		table.rows[1].cells[12].innerHTML="42"
		table.rows[1].cells[13].innerHTML="35"
		table.rows[1].cells[14].innerHTML="26"
		table.rows[1].cells[15].innerHTML="28"
		table.rows[1].cells[16].innerHTML="30"
		table.rows[1].cells[17].innerHTML="18"
		table.rows[1].cells[18].innerHTML="17"
		table.rows[1].cells[19].innerHTML="13"
		table.rows[1].cells[20].innerHTML="13"
		table.rows[1].cells[21].innerHTML="28"
		table.rows[2].cells[1].innerHTML="570"
		table.rows[2].cells[2].innerHTML="58"
		table.rows[2].cells[3].innerHTML="40"
		table.rows[2].cells[4].innerHTML="27"
		table.rows[2].cells[5].innerHTML="24"
		table.rows[2].cells[6].innerHTML="16"
		table.rows[2].cells[7].innerHTML="15"
		table.rows[2].cells[8].innerHTML="12"
		table.rows[2].cells[9].innerHTML="21"
		table.rows[2].cells[10].innerHTML="12"
		table.rows[2].cells[11].innerHTML="18"
		table.rows[2].cells[12].innerHTML="11"
		table.rows[2].cells[13].innerHTML="9"
		table.rows[2].cells[14].innerHTML="7"
		table.rows[2].cells[15].innerHTML="10"
		table.rows[2].cells[16].innerHTML="7"
		table.rows[2].cells[17].innerHTML="3"
		table.rows[2].cells[18].innerHTML="4"
		table.rows[2].cells[19].innerHTML="5"
		table.rows[2].cells[20].innerHTML="2"
		table.rows[2].cells[21].innerHTML="1"
		table.rows[3].cells[1].innerHTML="0.00%"
		table.rows[3].cells[2].innerHTML="54.3%"
		table.rows[3].cells[3].innerHTML="56.7%"
		table.rows[3].cells[4].innerHTML="59.7%"
		table.rows[3].cells[5].innerHTML="65.7%"
		table.rows[3].cells[6].innerHTML="69.8%"
		table.rows[3].cells[7].innerHTML="70.6%"
		table.rows[3].cells[8].innerHTML="73.3%"
		table.rows[3].cells[9].innerHTML="60.4%"
		table.rows[3].cells[10].innerHTML="71.4%"
		table.rows[3].cells[11].innerHTML="72.3%"
		table.rows[3].cells[12].innerHTML="79.2%"
		table.rows[3].cells[13].innerHTML="79.5%"
		table.rows[3].cells[14].innerHTML="76.7%"
		table.rows[3].cells[15].innerHTML="73.7%"
		table.rows[3].cells[16].innerHTML="81.1%"
		table.rows[3].cells[17].innerHTML="85.7%"
		table.rows[3].cells[18].innerHTML="81.0%"
		table.rows[3].cells[19].innerHTML="72.2%"
		table.rows[3].cells[20].innerHTML="86.7%"
		table.rows[3].cells[21].innerHTML="96.6%"
		
		var table = document.getElementById('deskRatios')
		table.rows[1].cells[1].innerHTML="5.66"
		table.rows[1].cells[2].innerHTML="6.02"
		table.rows[1].cells[3].innerHTML="5.69"
		table.rows[1].cells[4].innerHTML="4.39"
		table.rows[1].cells[5].innerHTML="4.46"
		table.rows[1].cells[6].innerHTML="4.15"
		table.rows[1].cells[7].innerHTML="4.07"
		table.rows[1].cells[8].innerHTML="4.65"
		table.rows[1].cells[9].innerHTML="2.75"
		table.rows[1].cells[10].innerHTML="3.89"
		table.rows[2].cells[1].innerHTML="10.38"
		table.rows[2].cells[2].innerHTML="9.20"
		table.rows[2].cells[3].innerHTML="8.86"
		table.rows[2].cells[4].innerHTML="7.09"
		table.rows[2].cells[5].innerHTML="7.04"
		table.rows[2].cells[6].innerHTML="7.21"
		table.rows[2].cells[7].innerHTML="6.38"
		table.rows[2].cells[8].innerHTML="6.32"
		table.rows[2].cells[9].innerHTML="4.89"
		table.rows[2].cells[10].innerHTML="5.92"
		switchChart()
    }
    document.getElementById("deskChange2").addEventListener("click", deskChange2);
	function deskChange3() {
		deskLoss.setJSONData(datasLoss.week3);
		deskWin.setJSONData(datasWin.week3);
		deskPercent.setJSONData(datasPercent.week3);
		deskWithPud.setJSONData(datasWithPud.week3);
		deskNoPud.setJSONData(datasNoPud.week3);
		document.getElementById("deskTitle").innerHTML = "Week 3";
		document.getElementById("deskParagraph").innerHTML = 'This week has had the most puddings yet, almost 75%. With it getting later in the competition it is no surprise people are quitting, but it is surprising how many are quitting. Click on week 1, week 2, then week 3 and watch the change in "Losers Acheivement Distribution" chart.';
		var table = document.getElementById('deskTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="94"
		table.rows[1].cells[3].innerHTML="53"
		table.rows[1].cells[4].innerHTML="41"
		table.rows[1].cells[5].innerHTML="32"
		table.rows[1].cells[6].innerHTML="45"
		table.rows[1].cells[7].innerHTML="35"
		table.rows[1].cells[8].innerHTML="31"
		table.rows[1].cells[9].innerHTML="25"
		table.rows[1].cells[10].innerHTML="42"
		table.rows[1].cells[11].innerHTML="33"
		table.rows[1].cells[12].innerHTML="35"
		table.rows[1].cells[13].innerHTML="31"
		table.rows[1].cells[14].innerHTML="26"
		table.rows[1].cells[15].innerHTML="20"
		table.rows[1].cells[16].innerHTML="27"
		table.rows[1].cells[17].innerHTML="12"
		table.rows[1].cells[18].innerHTML="12"
		table.rows[1].cells[19].innerHTML="5"
		table.rows[1].cells[20].innerHTML="10"
		table.rows[1].cells[21].innerHTML="18"
		table.rows[2].cells[1].innerHTML="679"
		table.rows[2].cells[2].innerHTML="57"
		table.rows[2].cells[3].innerHTML="25"
		table.rows[2].cells[4].innerHTML="21"
		table.rows[2].cells[5].innerHTML="22"
		table.rows[2].cells[6].innerHTML="13"
		table.rows[2].cells[7].innerHTML="14"
		table.rows[2].cells[8].innerHTML="14"
		table.rows[2].cells[9].innerHTML="8"
		table.rows[2].cells[10].innerHTML="10"
		table.rows[2].cells[11].innerHTML="13"
		table.rows[2].cells[12].innerHTML="10"
		table.rows[2].cells[13].innerHTML="5"
		table.rows[2].cells[14].innerHTML="5"
		table.rows[2].cells[15].innerHTML="4"
		table.rows[2].cells[16].innerHTML="4"
		table.rows[2].cells[17].innerHTML="5"
		table.rows[2].cells[18].innerHTML="3"
		table.rows[2].cells[19].innerHTML="2"
		table.rows[2].cells[20].innerHTML="1"
		table.rows[2].cells[21].innerHTML="2"
		table.rows[3].cells[1].innerHTML="0.0%"
		table.rows[3].cells[2].innerHTML="62.2%"
		table.rows[3].cells[3].innerHTML="68.0%"
		table.rows[3].cells[4].innerHTML="66.1%"
		table.rows[3].cells[5].innerHTML="59.3%"
		table.rows[3].cells[6].innerHTML="77.6%"
		table.rows[3].cells[7].innerHTML="71.4%"
		table.rows[3].cells[8].innerHTML="68.9%"
		table.rows[3].cells[9].innerHTML="75.8%"
		table.rows[3].cells[10].innerHTML="80.8%"
		table.rows[3].cells[11].innerHTML="71.7%"
		table.rows[3].cells[12].innerHTML="77.8%"
		table.rows[3].cells[13].innerHTML="86.1%"
		table.rows[3].cells[14].innerHTML="83.9%"
		table.rows[3].cells[15].innerHTML="83.3%"
		table.rows[3].cells[16].innerHTML="87.1%"
		table.rows[3].cells[17].innerHTML="70.6%"
		table.rows[3].cells[18].innerHTML="80.0%"
		table.rows[3].cells[19].innerHTML="71.4%"
		table.rows[3].cells[20].innerHTML="90.9%"
		table.rows[3].cells[21].innerHTML="90.0%"
		
		var table = document.getElementById('deskRatios')
		table.rows[1].cells[1].innerHTML="3.33"
		table.rows[1].cells[2].innerHTML="4.44"
		table.rows[1].cells[3].innerHTML="4.32"
		table.rows[1].cells[4].innerHTML="4.36"
		table.rows[1].cells[5].innerHTML="3.67"
		table.rows[1].cells[6].innerHTML="3.79"
		table.rows[1].cells[7].innerHTML="3.47"
		table.rows[1].cells[8].innerHTML="2.77"
		table.rows[1].cells[9].innerHTML="3.05"
		table.rows[1].cells[10].innerHTML="2.35"
		table.rows[2].cells[1].innerHTML="7.29"
		table.rows[2].cells[2].innerHTML="8.35"
		table.rows[2].cells[3].innerHTML="7.68"
		table.rows[2].cells[4].innerHTML="7.2"
		table.rows[2].cells[5].innerHTML="6.49"
		table.rows[2].cells[6].innerHTML="7.39"
		table.rows[2].cells[7].innerHTML="5.76"
		table.rows[2].cells[8].innerHTML="4.52"
		table.rows[2].cells[9].innerHTML="4.19"
		table.rows[2].cells[10].innerHTML="5.22"
		switchChart()
    }
    document.getElementById("deskChange3").addEventListener("click", deskChange3);
	function deskChange4() {
		deskLoss.setJSONData(datasLoss.week4);
		deskWin.setJSONData(datasWin.week4);
		deskPercent.setJSONData(datasPercent.week4);
		deskWithPud.setJSONData(datasWithPud.week4);
		deskNoPud.setJSONData(datasNoPud.week4);
		document.getElementById("deskTitle").innerHTML = "Week 4";
		document.getElementById("deskParagraph").innerHTML = "Funny that the first week that had an achievement with 100% winning (19 and 20), was the same week that only 50% who got 18 won. Congratulations to the 256 who are moving on to knockout!";
		var table = document.getElementById('deskTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="102"
		table.rows[1].cells[3].innerHTML="67"
		table.rows[1].cells[4].innerHTML="30"
		table.rows[1].cells[5].innerHTML="41"
		table.rows[1].cells[6].innerHTML="36"
		table.rows[1].cells[7].innerHTML="36"
		table.rows[1].cells[8].innerHTML="28"
		table.rows[1].cells[9].innerHTML="22"
		table.rows[1].cells[10].innerHTML="34"
		table.rows[1].cells[11].innerHTML="34"
		table.rows[1].cells[12].innerHTML="24"
		table.rows[1].cells[13].innerHTML="32"
		table.rows[1].cells[14].innerHTML="17"
		table.rows[1].cells[15].innerHTML="17"
		table.rows[1].cells[16].innerHTML="15"
		table.rows[1].cells[17].innerHTML="15"
		table.rows[1].cells[18].innerHTML="7"
		table.rows[1].cells[19].innerHTML="3"
		table.rows[1].cells[20].innerHTML="3"
		table.rows[1].cells[21].innerHTML="5"
		table.rows[2].cells[1].innerHTML="804"
		table.rows[2].cells[2].innerHTML="54"
		table.rows[2].cells[3].innerHTML="22"
		table.rows[2].cells[4].innerHTML="16"
		table.rows[2].cells[5].innerHTML="4"
		table.rows[2].cells[6].innerHTML="6"
		table.rows[2].cells[7].innerHTML="9"
		table.rows[2].cells[8].innerHTML="11"
		table.rows[2].cells[9].innerHTML="7"
		table.rows[2].cells[10].innerHTML="6"
		table.rows[2].cells[11].innerHTML="7"
		table.rows[2].cells[12].innerHTML="7"
		table.rows[2].cells[13].innerHTML="6"
		table.rows[2].cells[14].innerHTML="5"
		table.rows[2].cells[15].innerHTML="3"
		table.rows[2].cells[16].innerHTML="2"
		table.rows[2].cells[17].innerHTML="3"
		table.rows[2].cells[18].innerHTML="1"
		table.rows[2].cells[19].innerHTML="3"
		table.rows[2].cells[20].innerHTML="0"
		table.rows[2].cells[21].innerHTML="0"
		table.rows[3].cells[1].innerHTML="0.0%"
		table.rows[3].cells[2].innerHTML="65.4%"
		table.rows[3].cells[3].innerHTML="75.3%"
		table.rows[3].cells[4].innerHTML="65.2%"
		table.rows[3].cells[5].innerHTML="91.1%"
		table.rows[3].cells[6].innerHTML="85.7%"
		table.rows[3].cells[7].innerHTML="80.0%"
		table.rows[3].cells[8].innerHTML="71.8%"
		table.rows[3].cells[9].innerHTML="75.9%"
		table.rows[3].cells[10].innerHTML="85.0%"
		table.rows[3].cells[11].innerHTML="82.9%"
		table.rows[3].cells[12].innerHTML="77.4%"
		table.rows[3].cells[13].innerHTML="84.2%"
		table.rows[3].cells[14].innerHTML="77.3%"
		table.rows[3].cells[15].innerHTML="85.0%"
		table.rows[3].cells[16].innerHTML="88.2%"
		table.rows[3].cells[17].innerHTML="83.3%"
		table.rows[3].cells[18].innerHTML="87.5%"
		table.rows[3].cells[19].innerHTML="50.0%"
		table.rows[3].cells[20].innerHTML="100.0%"
		table.rows[3].cells[21].innerHTML="100.0%"
		
		var table = document.getElementById('deskRatios')
		table.rows[1].cells[1].innerHTML="2.33"
		table.rows[1].cells[2].innerHTML="3.03"
		table.rows[1].cells[3].innerHTML="3.47"
		table.rows[1].cells[4].innerHTML="2.87"
		table.rows[1].cells[5].innerHTML="3.02"
		table.rows[1].cells[6].innerHTML="2.73"
		table.rows[1].cells[7].innerHTML="3.16"
		table.rows[1].cells[8].innerHTML="3.91"
		table.rows[1].cells[9].innerHTML="2.92"
		table.rows[1].cells[10].innerHTML="2.24"
		table.rows[2].cells[1].innerHTML="5.76"
		table.rows[2].cells[2].innerHTML="7.13"
		table.rows[2].cells[3].innerHTML="6.99"
		table.rows[2].cells[4].innerHTML="6.25"
		table.rows[2].cells[5].innerHTML="5.99"
		table.rows[2].cells[6].innerHTML="5.29"
		table.rows[2].cells[7].innerHTML="6.02"
		table.rows[2].cells[8].innerHTML="6.44"
		table.rows[2].cells[9].innerHTML="5.83"
		table.rows[2].cells[10].innerHTML="4.95"
		switchChart()
    }
    document.getElementById("deskChange4").addEventListener("click", deskChange4);
	function deskChange5() {
		deskLoss.setJSONData(datasLoss.week5);
		deskWin.setJSONData(datasWin.week5);
		deskPercent.setJSONData(datasPercent.week5);
		deskWithPud.setJSONData(datasWithPud.week5);
		deskNoPud.setJSONData(datasNoPud.week5);
		document.getElementById("deskTitle").innerHTML = "Week 5";
		document.getElementById("deskParagraph").innerHTML = "Congratulations to the 256 who made it here, and the 128 moving on!";
		var table = document.getElementById('deskTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="52"
		table.rows[1].cells[3].innerHTML="46"
		table.rows[1].cells[4].innerHTML="46"
		table.rows[1].cells[5].innerHTML="38"
		table.rows[1].cells[6].innerHTML="48"
		table.rows[1].cells[7].innerHTML="46"
		table.rows[1].cells[8].innerHTML="39"
		table.rows[1].cells[9].innerHTML="51"
		table.rows[1].cells[10].innerHTML="34"
		table.rows[1].cells[11].innerHTML="58"
		table.rows[1].cells[12].innerHTML="37"
		table.rows[1].cells[13].innerHTML="35"
		table.rows[1].cells[14].innerHTML="35"
		table.rows[1].cells[15].innerHTML="34"
		table.rows[1].cells[16].innerHTML="27"
		table.rows[1].cells[17].innerHTML="29"
		table.rows[1].cells[18].innerHTML="11"
		table.rows[1].cells[19].innerHTML="12"
		table.rows[1].cells[20].innerHTML="17"
		table.rows[1].cells[21].innerHTML="26"
		table.rows[2].cells[1].innerHTML="419"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45"
		table.rows[2].cells[4].innerHTML="53"
		table.rows[2].cells[5].innerHTML="33"
		table.rows[2].cells[6].innerHTML="30"
		table.rows[2].cells[7].innerHTML="23"
		table.rows[2].cells[8].innerHTML="21"
		table.rows[2].cells[9].innerHTML="20"
		table.rows[2].cells[10].innerHTML="20"
		table.rows[2].cells[11].innerHTML="19"
		table.rows[2].cells[12].innerHTML="13"
		table.rows[2].cells[13].innerHTML="14"
		table.rows[2].cells[14].innerHTML="12"
		table.rows[2].cells[15].innerHTML="7"
		table.rows[2].cells[16].innerHTML="12"
		table.rows[2].cells[17].innerHTML="4"
		table.rows[2].cells[18].innerHTML="5"
		table.rows[2].cells[19].innerHTML="4"
		table.rows[2].cells[20].innerHTML="3"
		table.rows[2].cells[21].innerHTML="3"
		table.rows[3].cells[1].innerHTML="0.00%"
		table.rows[3].cells[2].innerHTML="45.2%"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[3].cells[4].innerHTML="46.5%"
		table.rows[3].cells[5].innerHTML="53.5%"
		table.rows[3].cells[6].innerHTML="61.5%"
		table.rows[3].cells[7].innerHTML="66.7%"
		table.rows[3].cells[8].innerHTML="65.0%"
		table.rows[3].cells[9].innerHTML="71.8%"
		table.rows[3].cells[10].innerHTML="63.0%"
		table.rows[3].cells[11].innerHTML="75.3%"
		table.rows[3].cells[12].innerHTML="74.0%"
		table.rows[3].cells[13].innerHTML="71.4%"
		table.rows[3].cells[14].innerHTML="74.5%"
		table.rows[3].cells[15].innerHTML="82.9%"
		table.rows[3].cells[16].innerHTML="69.2%"
		table.rows[3].cells[17].innerHTML="87.9%"
		table.rows[3].cells[18].innerHTML="68.8%"
		table.rows[3].cells[19].innerHTML="75.0%"
		table.rows[3].cells[20].innerHTML="85.0%"
		table.rows[3].cells[21].innerHTML="89.7%"
		
		var table = document.getElementById('deskRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="6.28"
		table.rows[1].cells[3].innerHTML="5.80"
		table.rows[1].cells[4].innerHTML="5.79"
		table.rows[1].cells[5].innerHTML="6.00"
		table.rows[1].cells[6].innerHTML="5.05"
		table.rows[1].cells[7].innerHTML="3.85"
		table.rows[1].cells[8].innerHTML="5.62"
		table.rows[1].cells[9].innerHTML="5.00"
		table.rows[1].cells[10].innerHTML="3.82"
		table.rows[2].cells[1].innerHTML="9.90"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[2].cells[3].innerHTML="7.91"
		table.rows[2].cells[4].innerHTML="8.06"
		table.rows[2].cells[5].innerHTML="7.74"
		table.rows[2].cells[6].innerHTML="6.92"
		table.rows[2].cells[7].innerHTML="6.13"
		table.rows[2].cells[8].innerHTML="7.26"
		table.rows[2].cells[9].innerHTML="6.67"
		table.rows[2].cells[10].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("deskChange5").addEventListener("click", deskChange5);
	function deskChange6() {
		deskLoss.setJSONData(datasLoss.week6);
		deskWin.setJSONData(datasWin.week6);
		deskPercent.setJSONData(datasPercent.week6);
		deskWithPud.setJSONData(datasWithPud.week6);
		deskNoPud.setJSONData(datasNoPud.week6);
		document.getElementById("deskTitle").innerHTML = "Week 6";
		document.getElementById("deskParagraph").innerHTML = "Congratulations to the 128 who made it here, and the 64 moving on!";
		var table = document.getElementById('deskTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="52"
		table.rows[1].cells[3].innerHTML="46"
		table.rows[1].cells[4].innerHTML="46"
		table.rows[1].cells[5].innerHTML="38"
		table.rows[1].cells[6].innerHTML="48"
		table.rows[1].cells[7].innerHTML="46"
		table.rows[1].cells[8].innerHTML="39"
		table.rows[1].cells[9].innerHTML="51"
		table.rows[1].cells[10].innerHTML="34"
		table.rows[1].cells[11].innerHTML="58"
		table.rows[1].cells[12].innerHTML="37"
		table.rows[1].cells[13].innerHTML="35"
		table.rows[1].cells[14].innerHTML="35"
		table.rows[1].cells[15].innerHTML="34"
		table.rows[1].cells[16].innerHTML="27"
		table.rows[1].cells[17].innerHTML="29"
		table.rows[1].cells[18].innerHTML="11"
		table.rows[1].cells[19].innerHTML="12"
		table.rows[1].cells[20].innerHTML="17"
		table.rows[1].cells[21].innerHTML="26"
		table.rows[2].cells[1].innerHTML="419"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45"
		table.rows[2].cells[4].innerHTML="53"
		table.rows[2].cells[5].innerHTML="33"
		table.rows[2].cells[6].innerHTML="30"
		table.rows[2].cells[7].innerHTML="23"
		table.rows[2].cells[8].innerHTML="21"
		table.rows[2].cells[9].innerHTML="20"
		table.rows[2].cells[10].innerHTML="20"
		table.rows[2].cells[11].innerHTML="19"
		table.rows[2].cells[12].innerHTML="13"
		table.rows[2].cells[13].innerHTML="14"
		table.rows[2].cells[14].innerHTML="12"
		table.rows[2].cells[15].innerHTML="7"
		table.rows[2].cells[16].innerHTML="12"
		table.rows[2].cells[17].innerHTML="4"
		table.rows[2].cells[18].innerHTML="5"
		table.rows[2].cells[19].innerHTML="4"
		table.rows[2].cells[20].innerHTML="3"
		table.rows[2].cells[21].innerHTML="3"
		table.rows[3].cells[1].innerHTML="0.00%"
		table.rows[3].cells[2].innerHTML="45.2%"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[3].cells[4].innerHTML="46.5%"
		table.rows[3].cells[5].innerHTML="53.5%"
		table.rows[3].cells[6].innerHTML="61.5%"
		table.rows[3].cells[7].innerHTML="66.7%"
		table.rows[3].cells[8].innerHTML="65.0%"
		table.rows[3].cells[9].innerHTML="71.8%"
		table.rows[3].cells[10].innerHTML="63.0%"
		table.rows[3].cells[11].innerHTML="75.3%"
		table.rows[3].cells[12].innerHTML="74.0%"
		table.rows[3].cells[13].innerHTML="71.4%"
		table.rows[3].cells[14].innerHTML="74.5%"
		table.rows[3].cells[15].innerHTML="82.9%"
		table.rows[3].cells[16].innerHTML="69.2%"
		table.rows[3].cells[17].innerHTML="87.9%"
		table.rows[3].cells[18].innerHTML="68.8%"
		table.rows[3].cells[19].innerHTML="75.0%"
		table.rows[3].cells[20].innerHTML="85.0%"
		table.rows[3].cells[21].innerHTML="89.7%"
		
		var table = document.getElementById('deskRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="6.28"
		table.rows[1].cells[3].innerHTML="5.80"
		table.rows[1].cells[4].innerHTML="5.79"
		table.rows[1].cells[5].innerHTML="6.00"
		table.rows[1].cells[6].innerHTML="5.05"
		table.rows[1].cells[7].innerHTML="3.85"
		table.rows[1].cells[8].innerHTML="5.62"
		table.rows[1].cells[9].innerHTML="5.00"
		table.rows[1].cells[10].innerHTML="3.82"
		table.rows[2].cells[1].innerHTML="9.90"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[2].cells[3].innerHTML="7.91"
		table.rows[2].cells[4].innerHTML="8.06"
		table.rows[2].cells[5].innerHTML="7.74"
		table.rows[2].cells[6].innerHTML="6.92"
		table.rows[2].cells[7].innerHTML="6.13"
		table.rows[2].cells[8].innerHTML="7.26"
		table.rows[2].cells[9].innerHTML="6.67"
		table.rows[2].cells[10].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("deskChange6").addEventListener("click", deskChange6);
	function deskChange7() {
		deskLoss.setJSONData(datasLoss.week7);
		deskWin.setJSONData(datasWin.week7);
		deskPercent.setJSONData(datasPercent.week7);
		deskWithPud.setJSONData(datasWithPud.week7);
		deskNoPud.setJSONData(datasNoPud.week7);
		document.getElementById("deskTitle").innerHTML = "Week 7";
		document.getElementById("deskParagraph").innerHTML = "Congratulations to the 64 who made it here, and the 32 moving on!";
		var table = document.getElementById('deskTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="52"
		table.rows[1].cells[3].innerHTML="46"
		table.rows[1].cells[4].innerHTML="46"
		table.rows[1].cells[5].innerHTML="38"
		table.rows[1].cells[6].innerHTML="48"
		table.rows[1].cells[7].innerHTML="46"
		table.rows[1].cells[8].innerHTML="39"
		table.rows[1].cells[9].innerHTML="51"
		table.rows[1].cells[10].innerHTML="34"
		table.rows[1].cells[11].innerHTML="58"
		table.rows[1].cells[12].innerHTML="37"
		table.rows[1].cells[13].innerHTML="35"
		table.rows[1].cells[14].innerHTML="35"
		table.rows[1].cells[15].innerHTML="34"
		table.rows[1].cells[16].innerHTML="27"
		table.rows[1].cells[17].innerHTML="29"
		table.rows[1].cells[18].innerHTML="11"
		table.rows[1].cells[19].innerHTML="12"
		table.rows[1].cells[20].innerHTML="17"
		table.rows[1].cells[21].innerHTML="26"
		table.rows[2].cells[1].innerHTML="419"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45"
		table.rows[2].cells[4].innerHTML="53"
		table.rows[2].cells[5].innerHTML="33"
		table.rows[2].cells[6].innerHTML="30"
		table.rows[2].cells[7].innerHTML="23"
		table.rows[2].cells[8].innerHTML="21"
		table.rows[2].cells[9].innerHTML="20"
		table.rows[2].cells[10].innerHTML="20"
		table.rows[2].cells[11].innerHTML="19"
		table.rows[2].cells[12].innerHTML="13"
		table.rows[2].cells[13].innerHTML="14"
		table.rows[2].cells[14].innerHTML="12"
		table.rows[2].cells[15].innerHTML="7"
		table.rows[2].cells[16].innerHTML="12"
		table.rows[2].cells[17].innerHTML="4"
		table.rows[2].cells[18].innerHTML="5"
		table.rows[2].cells[19].innerHTML="4"
		table.rows[2].cells[20].innerHTML="3"
		table.rows[2].cells[21].innerHTML="3"
		table.rows[3].cells[1].innerHTML="0.00%"
		table.rows[3].cells[2].innerHTML="45.2%"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[3].cells[4].innerHTML="46.5%"
		table.rows[3].cells[5].innerHTML="53.5%"
		table.rows[3].cells[6].innerHTML="61.5%"
		table.rows[3].cells[7].innerHTML="66.7%"
		table.rows[3].cells[8].innerHTML="65.0%"
		table.rows[3].cells[9].innerHTML="71.8%"
		table.rows[3].cells[10].innerHTML="63.0%"
		table.rows[3].cells[11].innerHTML="75.3%"
		table.rows[3].cells[12].innerHTML="74.0%"
		table.rows[3].cells[13].innerHTML="71.4%"
		table.rows[3].cells[14].innerHTML="74.5%"
		table.rows[3].cells[15].innerHTML="82.9%"
		table.rows[3].cells[16].innerHTML="69.2%"
		table.rows[3].cells[17].innerHTML="87.9%"
		table.rows[3].cells[18].innerHTML="68.8%"
		table.rows[3].cells[19].innerHTML="75.0%"
		table.rows[3].cells[20].innerHTML="85.0%"
		table.rows[3].cells[21].innerHTML="89.7%"
		
		var table = document.getElementById('deskRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="6.28"
		table.rows[1].cells[3].innerHTML="5.80"
		table.rows[1].cells[4].innerHTML="5.79"
		table.rows[1].cells[5].innerHTML="6.00"
		table.rows[1].cells[6].innerHTML="5.05"
		table.rows[1].cells[7].innerHTML="3.85"
		table.rows[1].cells[8].innerHTML="5.62"
		table.rows[1].cells[9].innerHTML="5.00"
		table.rows[1].cells[10].innerHTML="3.82"
		table.rows[2].cells[1].innerHTML="9.90"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[2].cells[3].innerHTML="7.91"
		table.rows[2].cells[4].innerHTML="8.06"
		table.rows[2].cells[5].innerHTML="7.74"
		table.rows[2].cells[6].innerHTML="6.92"
		table.rows[2].cells[7].innerHTML="6.13"
		table.rows[2].cells[8].innerHTML="7.26"
		table.rows[2].cells[9].innerHTML="6.67"
		table.rows[2].cells[10].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("deskChange7").addEventListener("click", deskChange7);
	function deskChange8() {
		deskLoss.setJSONData(datasLoss.week8);
		deskWin.setJSONData(datasWin.week8);
		deskPercent.setJSONData(datasPercent.week8);
		deskWithPud.setJSONData(datasWithPud.week8);
		deskNoPud.setJSONData(datasNoPud.week8);
		document.getElementById("deskTitle").innerHTML = "Week 8";
		document.getElementById("deskParagraph").innerHTML = "Congratulations to the 32 who made it here, and the 16 moving on!";
		var table = document.getElementById('deskTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="52"
		table.rows[1].cells[3].innerHTML="46"
		table.rows[1].cells[4].innerHTML="46"
		table.rows[1].cells[5].innerHTML="38"
		table.rows[1].cells[6].innerHTML="48"
		table.rows[1].cells[7].innerHTML="46"
		table.rows[1].cells[8].innerHTML="39"
		table.rows[1].cells[9].innerHTML="51"
		table.rows[1].cells[10].innerHTML="34"
		table.rows[1].cells[11].innerHTML="58"
		table.rows[1].cells[12].innerHTML="37"
		table.rows[1].cells[13].innerHTML="35"
		table.rows[1].cells[14].innerHTML="35"
		table.rows[1].cells[15].innerHTML="34"
		table.rows[1].cells[16].innerHTML="27"
		table.rows[1].cells[17].innerHTML="29"
		table.rows[1].cells[18].innerHTML="11"
		table.rows[1].cells[19].innerHTML="12"
		table.rows[1].cells[20].innerHTML="17"
		table.rows[1].cells[21].innerHTML="26"
		table.rows[2].cells[1].innerHTML="419"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45"
		table.rows[2].cells[4].innerHTML="53"
		table.rows[2].cells[5].innerHTML="33"
		table.rows[2].cells[6].innerHTML="30"
		table.rows[2].cells[7].innerHTML="23"
		table.rows[2].cells[8].innerHTML="21"
		table.rows[2].cells[9].innerHTML="20"
		table.rows[2].cells[10].innerHTML="20"
		table.rows[2].cells[11].innerHTML="19"
		table.rows[2].cells[12].innerHTML="13"
		table.rows[2].cells[13].innerHTML="14"
		table.rows[2].cells[14].innerHTML="12"
		table.rows[2].cells[15].innerHTML="7"
		table.rows[2].cells[16].innerHTML="12"
		table.rows[2].cells[17].innerHTML="4"
		table.rows[2].cells[18].innerHTML="5"
		table.rows[2].cells[19].innerHTML="4"
		table.rows[2].cells[20].innerHTML="3"
		table.rows[2].cells[21].innerHTML="3"
		table.rows[3].cells[1].innerHTML="0.00%"
		table.rows[3].cells[2].innerHTML="45.2%"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[3].cells[4].innerHTML="46.5%"
		table.rows[3].cells[5].innerHTML="53.5%"
		table.rows[3].cells[6].innerHTML="61.5%"
		table.rows[3].cells[7].innerHTML="66.7%"
		table.rows[3].cells[8].innerHTML="65.0%"
		table.rows[3].cells[9].innerHTML="71.8%"
		table.rows[3].cells[10].innerHTML="63.0%"
		table.rows[3].cells[11].innerHTML="75.3%"
		table.rows[3].cells[12].innerHTML="74.0%"
		table.rows[3].cells[13].innerHTML="71.4%"
		table.rows[3].cells[14].innerHTML="74.5%"
		table.rows[3].cells[15].innerHTML="82.9%"
		table.rows[3].cells[16].innerHTML="69.2%"
		table.rows[3].cells[17].innerHTML="87.9%"
		table.rows[3].cells[18].innerHTML="68.8%"
		table.rows[3].cells[19].innerHTML="75.0%"
		table.rows[3].cells[20].innerHTML="85.0%"
		table.rows[3].cells[21].innerHTML="89.7%"
		
		var table = document.getElementById('deskRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="6.28"
		table.rows[1].cells[3].innerHTML="5.80"
		table.rows[1].cells[4].innerHTML="5.79"
		table.rows[1].cells[5].innerHTML="6.00"
		table.rows[1].cells[6].innerHTML="5.05"
		table.rows[1].cells[7].innerHTML="3.85"
		table.rows[1].cells[8].innerHTML="5.62"
		table.rows[1].cells[9].innerHTML="5.00"
		table.rows[1].cells[10].innerHTML="3.82"
		table.rows[2].cells[1].innerHTML="9.90"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[2].cells[3].innerHTML="7.91"
		table.rows[2].cells[4].innerHTML="8.06"
		table.rows[2].cells[5].innerHTML="7.74"
		table.rows[2].cells[6].innerHTML="6.92"
		table.rows[2].cells[7].innerHTML="6.13"
		table.rows[2].cells[8].innerHTML="7.26"
		table.rows[2].cells[9].innerHTML="6.67"
		table.rows[2].cells[10].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("deskChange8").addEventListener("click", deskChange8);
	function deskChange9() {
		deskLoss.setJSONData(datasLoss.week9);
		deskWin.setJSONData(datasWin.week9);
		deskPercent.setJSONData(datasPercent.week9);
		deskWithPud.setJSONData(datasWithPud.week9);
		deskNoPud.setJSONData(datasNoPud.week9);
		document.getElementById("deskTitle").innerHTML = "Week 9";
		document.getElementById("deskParagraph").innerHTML = "Congratulations to the 16 who made it here, and the 8 moving on to quarter finals!";
		var table = document.getElementById('deskTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="52"
		table.rows[1].cells[3].innerHTML="46"
		table.rows[1].cells[4].innerHTML="46"
		table.rows[1].cells[5].innerHTML="38"
		table.rows[1].cells[6].innerHTML="48"
		table.rows[1].cells[7].innerHTML="46"
		table.rows[1].cells[8].innerHTML="39"
		table.rows[1].cells[9].innerHTML="51"
		table.rows[1].cells[10].innerHTML="34"
		table.rows[1].cells[11].innerHTML="58"
		table.rows[1].cells[12].innerHTML="37"
		table.rows[1].cells[13].innerHTML="35"
		table.rows[1].cells[14].innerHTML="35"
		table.rows[1].cells[15].innerHTML="34"
		table.rows[1].cells[16].innerHTML="27"
		table.rows[1].cells[17].innerHTML="29"
		table.rows[1].cells[18].innerHTML="11"
		table.rows[1].cells[19].innerHTML="12"
		table.rows[1].cells[20].innerHTML="17"
		table.rows[1].cells[21].innerHTML="26"
		table.rows[2].cells[1].innerHTML="419"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45"
		table.rows[2].cells[4].innerHTML="53"
		table.rows[2].cells[5].innerHTML="33"
		table.rows[2].cells[6].innerHTML="30"
		table.rows[2].cells[7].innerHTML="23"
		table.rows[2].cells[8].innerHTML="21"
		table.rows[2].cells[9].innerHTML="20"
		table.rows[2].cells[10].innerHTML="20"
		table.rows[2].cells[11].innerHTML="19"
		table.rows[2].cells[12].innerHTML="13"
		table.rows[2].cells[13].innerHTML="14"
		table.rows[2].cells[14].innerHTML="12"
		table.rows[2].cells[15].innerHTML="7"
		table.rows[2].cells[16].innerHTML="12"
		table.rows[2].cells[17].innerHTML="4"
		table.rows[2].cells[18].innerHTML="5"
		table.rows[2].cells[19].innerHTML="4"
		table.rows[2].cells[20].innerHTML="3"
		table.rows[2].cells[21].innerHTML="3"
		table.rows[3].cells[1].innerHTML="0.00%"
		table.rows[3].cells[2].innerHTML="45.2%"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[3].cells[4].innerHTML="46.5%"
		table.rows[3].cells[5].innerHTML="53.5%"
		table.rows[3].cells[6].innerHTML="61.5%"
		table.rows[3].cells[7].innerHTML="66.7%"
		table.rows[3].cells[8].innerHTML="65.0%"
		table.rows[3].cells[9].innerHTML="71.8%"
		table.rows[3].cells[10].innerHTML="63.0%"
		table.rows[3].cells[11].innerHTML="75.3%"
		table.rows[3].cells[12].innerHTML="74.0%"
		table.rows[3].cells[13].innerHTML="71.4%"
		table.rows[3].cells[14].innerHTML="74.5%"
		table.rows[3].cells[15].innerHTML="82.9%"
		table.rows[3].cells[16].innerHTML="69.2%"
		table.rows[3].cells[17].innerHTML="87.9%"
		table.rows[3].cells[18].innerHTML="68.8%"
		table.rows[3].cells[19].innerHTML="75.0%"
		table.rows[3].cells[20].innerHTML="85.0%"
		table.rows[3].cells[21].innerHTML="89.7%"
		
		var table = document.getElementById('deskRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="6.28"
		table.rows[1].cells[3].innerHTML="5.80"
		table.rows[1].cells[4].innerHTML="5.79"
		table.rows[1].cells[5].innerHTML="6.00"
		table.rows[1].cells[6].innerHTML="5.05"
		table.rows[1].cells[7].innerHTML="3.85"
		table.rows[1].cells[8].innerHTML="5.62"
		table.rows[1].cells[9].innerHTML="5.00"
		table.rows[1].cells[10].innerHTML="3.82"
		table.rows[2].cells[1].innerHTML="9.90"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[2].cells[3].innerHTML="7.91"
		table.rows[2].cells[4].innerHTML="8.06"
		table.rows[2].cells[5].innerHTML="7.74"
		table.rows[2].cells[6].innerHTML="6.92"
		table.rows[2].cells[7].innerHTML="6.13"
		table.rows[2].cells[8].innerHTML="7.26"
		table.rows[2].cells[9].innerHTML="6.67"
		table.rows[2].cells[10].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("deskChange9").addEventListener("click", deskChange9);
	function deskChange10() {
		deskLoss.setJSONData(datasLoss.week10);
		deskWin.setJSONData(datasWin.week10);
		deskPercent.setJSONData(datasPercent.week10);
		deskWithPud.setJSONData(datasWithPud.week10);
		deskNoPud.setJSONData(datasNoPud.week10);
		document.getElementById("deskTitle").innerHTML = "Week 10";
		document.getElementById("deskParagraph").innerHTML = "Sadly _, _, _ and _ were eliminated, but the top 4 are going to semi finals!";
		var table = document.getElementById('deskTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="52"
		table.rows[1].cells[3].innerHTML="46"
		table.rows[1].cells[4].innerHTML="46"
		table.rows[1].cells[5].innerHTML="38"
		table.rows[1].cells[6].innerHTML="48"
		table.rows[1].cells[7].innerHTML="46"
		table.rows[1].cells[8].innerHTML="39"
		table.rows[1].cells[9].innerHTML="51"
		table.rows[1].cells[10].innerHTML="34"
		table.rows[1].cells[11].innerHTML="58"
		table.rows[1].cells[12].innerHTML="37"
		table.rows[1].cells[13].innerHTML="35"
		table.rows[1].cells[14].innerHTML="35"
		table.rows[1].cells[15].innerHTML="34"
		table.rows[1].cells[16].innerHTML="27"
		table.rows[1].cells[17].innerHTML="29"
		table.rows[1].cells[18].innerHTML="11"
		table.rows[1].cells[19].innerHTML="12"
		table.rows[1].cells[20].innerHTML="17"
		table.rows[1].cells[21].innerHTML="26"
		table.rows[2].cells[1].innerHTML="419"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45"
		table.rows[2].cells[4].innerHTML="53"
		table.rows[2].cells[5].innerHTML="33"
		table.rows[2].cells[6].innerHTML="30"
		table.rows[2].cells[7].innerHTML="23"
		table.rows[2].cells[8].innerHTML="21"
		table.rows[2].cells[9].innerHTML="20"
		table.rows[2].cells[10].innerHTML="20"
		table.rows[2].cells[11].innerHTML="19"
		table.rows[2].cells[12].innerHTML="13"
		table.rows[2].cells[13].innerHTML="14"
		table.rows[2].cells[14].innerHTML="12"
		table.rows[2].cells[15].innerHTML="7"
		table.rows[2].cells[16].innerHTML="12"
		table.rows[2].cells[17].innerHTML="4"
		table.rows[2].cells[18].innerHTML="5"
		table.rows[2].cells[19].innerHTML="4"
		table.rows[2].cells[20].innerHTML="3"
		table.rows[2].cells[21].innerHTML="3"
		table.rows[3].cells[1].innerHTML="0.00%"
		table.rows[3].cells[2].innerHTML="45.2%"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[3].cells[4].innerHTML="46.5%"
		table.rows[3].cells[5].innerHTML="53.5%"
		table.rows[3].cells[6].innerHTML="61.5%"
		table.rows[3].cells[7].innerHTML="66.7%"
		table.rows[3].cells[8].innerHTML="65.0%"
		table.rows[3].cells[9].innerHTML="71.8%"
		table.rows[3].cells[10].innerHTML="63.0%"
		table.rows[3].cells[11].innerHTML="75.3%"
		table.rows[3].cells[12].innerHTML="74.0%"
		table.rows[3].cells[13].innerHTML="71.4%"
		table.rows[3].cells[14].innerHTML="74.5%"
		table.rows[3].cells[15].innerHTML="82.9%"
		table.rows[3].cells[16].innerHTML="69.2%"
		table.rows[3].cells[17].innerHTML="87.9%"
		table.rows[3].cells[18].innerHTML="68.8%"
		table.rows[3].cells[19].innerHTML="75.0%"
		table.rows[3].cells[20].innerHTML="85.0%"
		table.rows[3].cells[21].innerHTML="89.7%"
		
		var table = document.getElementById('deskRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="6.28"
		table.rows[1].cells[3].innerHTML="5.80"
		table.rows[1].cells[4].innerHTML="5.79"
		table.rows[1].cells[5].innerHTML="6.00"
		table.rows[1].cells[6].innerHTML="5.05"
		table.rows[1].cells[7].innerHTML="3.85"
		table.rows[1].cells[8].innerHTML="5.62"
		table.rows[1].cells[9].innerHTML="5.00"
		table.rows[1].cells[10].innerHTML="3.82"
		table.rows[2].cells[1].innerHTML="9.90"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[2].cells[3].innerHTML="7.91"
		table.rows[2].cells[4].innerHTML="8.06"
		table.rows[2].cells[5].innerHTML="7.74"
		table.rows[2].cells[6].innerHTML="6.92"
		table.rows[2].cells[7].innerHTML="6.13"
		table.rows[2].cells[8].innerHTML="7.26"
		table.rows[2].cells[9].innerHTML="6.67"
		table.rows[2].cells[10].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("deskChange10").addEventListener("click", deskChange10);
	function deskChange11() {
		deskLoss.setJSONData(datasLoss.week11);
		deskWin.setJSONData(datasWin.week11);
		deskPercent.setJSONData(datasPercent.week11);
		deskWithPud.setJSONData(datasWithPud.week11);
		deskNoPud.setJSONData(datasNoPud.week11);
		document.getElementById("deskTitle").innerHTML = "Week 11";
		document.getElementById("deskParagraph").innerHTML = "Sadly _ and _ were eliminated, but the top 2 are going to finals!";
		var table = document.getElementById('deskTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="52"
		table.rows[1].cells[3].innerHTML="46"
		table.rows[1].cells[4].innerHTML="46"
		table.rows[1].cells[5].innerHTML="38"
		table.rows[1].cells[6].innerHTML="48"
		table.rows[1].cells[7].innerHTML="46"
		table.rows[1].cells[8].innerHTML="39"
		table.rows[1].cells[9].innerHTML="51"
		table.rows[1].cells[10].innerHTML="34"
		table.rows[1].cells[11].innerHTML="58"
		table.rows[1].cells[12].innerHTML="37"
		table.rows[1].cells[13].innerHTML="35"
		table.rows[1].cells[14].innerHTML="35"
		table.rows[1].cells[15].innerHTML="34"
		table.rows[1].cells[16].innerHTML="27"
		table.rows[1].cells[17].innerHTML="29"
		table.rows[1].cells[18].innerHTML="11"
		table.rows[1].cells[19].innerHTML="12"
		table.rows[1].cells[20].innerHTML="17"
		table.rows[1].cells[21].innerHTML="26"
		table.rows[2].cells[1].innerHTML="419"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45"
		table.rows[2].cells[4].innerHTML="53"
		table.rows[2].cells[5].innerHTML="33"
		table.rows[2].cells[6].innerHTML="30"
		table.rows[2].cells[7].innerHTML="23"
		table.rows[2].cells[8].innerHTML="21"
		table.rows[2].cells[9].innerHTML="20"
		table.rows[2].cells[10].innerHTML="20"
		table.rows[2].cells[11].innerHTML="19"
		table.rows[2].cells[12].innerHTML="13"
		table.rows[2].cells[13].innerHTML="14"
		table.rows[2].cells[14].innerHTML="12"
		table.rows[2].cells[15].innerHTML="7"
		table.rows[2].cells[16].innerHTML="12"
		table.rows[2].cells[17].innerHTML="4"
		table.rows[2].cells[18].innerHTML="5"
		table.rows[2].cells[19].innerHTML="4"
		table.rows[2].cells[20].innerHTML="3"
		table.rows[2].cells[21].innerHTML="3"
		table.rows[3].cells[1].innerHTML="0.00%"
		table.rows[3].cells[2].innerHTML="45.2%"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[3].cells[4].innerHTML="46.5%"
		table.rows[3].cells[5].innerHTML="53.5%"
		table.rows[3].cells[6].innerHTML="61.5%"
		table.rows[3].cells[7].innerHTML="66.7%"
		table.rows[3].cells[8].innerHTML="65.0%"
		table.rows[3].cells[9].innerHTML="71.8%"
		table.rows[3].cells[10].innerHTML="63.0%"
		table.rows[3].cells[11].innerHTML="75.3%"
		table.rows[3].cells[12].innerHTML="74.0%"
		table.rows[3].cells[13].innerHTML="71.4%"
		table.rows[3].cells[14].innerHTML="74.5%"
		table.rows[3].cells[15].innerHTML="82.9%"
		table.rows[3].cells[16].innerHTML="69.2%"
		table.rows[3].cells[17].innerHTML="87.9%"
		table.rows[3].cells[18].innerHTML="68.8%"
		table.rows[3].cells[19].innerHTML="75.0%"
		table.rows[3].cells[20].innerHTML="85.0%"
		table.rows[3].cells[21].innerHTML="89.7%"
		
		var table = document.getElementById('deskRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="6.28"
		table.rows[1].cells[3].innerHTML="5.80"
		table.rows[1].cells[4].innerHTML="5.79"
		table.rows[1].cells[5].innerHTML="6.00"
		table.rows[1].cells[6].innerHTML="5.05"
		table.rows[1].cells[7].innerHTML="3.85"
		table.rows[1].cells[8].innerHTML="5.62"
		table.rows[1].cells[9].innerHTML="5.00"
		table.rows[1].cells[10].innerHTML="3.82"
		table.rows[2].cells[1].innerHTML="9.90"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[2].cells[3].innerHTML="7.91"
		table.rows[2].cells[4].innerHTML="8.06"
		table.rows[2].cells[5].innerHTML="7.74"
		table.rows[2].cells[6].innerHTML="6.92"
		table.rows[2].cells[7].innerHTML="6.13"
		table.rows[2].cells[8].innerHTML="7.26"
		table.rows[2].cells[9].innerHTML="6.67"
		table.rows[2].cells[10].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("deskChange11").addEventListener("click", deskChange11);
	function deskChange12() {
		deskLoss.setJSONData(datasLoss.week12);
		deskWin.setJSONData(datasWin.week12);
		deskPercent.setJSONData(datasPercent.week12);
		deskWithPud.setJSONData(datasWithPud.week12);
		deskNoPud.setJSONData(datasNoPud.week12);
		document.getElementById("deskTitle").innerHTML = "Week 12";
		document.getElementById("deskParagraph").innerHTML = "Sadly _ was eliminated, but congratulations to the victor, _!";
		var table = document.getElementById('deskTable')
		table.rows[1].cells[1].innerHTML="0"
		table.rows[1].cells[2].innerHTML="52"
		table.rows[1].cells[3].innerHTML="46"
		table.rows[1].cells[4].innerHTML="46"
		table.rows[1].cells[5].innerHTML="38"
		table.rows[1].cells[6].innerHTML="48"
		table.rows[1].cells[7].innerHTML="46"
		table.rows[1].cells[8].innerHTML="39"
		table.rows[1].cells[9].innerHTML="51"
		table.rows[1].cells[10].innerHTML="34"
		table.rows[1].cells[11].innerHTML="58"
		table.rows[1].cells[12].innerHTML="37"
		table.rows[1].cells[13].innerHTML="35"
		table.rows[1].cells[14].innerHTML="35"
		table.rows[1].cells[15].innerHTML="34"
		table.rows[1].cells[16].innerHTML="27"
		table.rows[1].cells[17].innerHTML="29"
		table.rows[1].cells[18].innerHTML="11"
		table.rows[1].cells[19].innerHTML="12"
		table.rows[1].cells[20].innerHTML="17"
		table.rows[1].cells[21].innerHTML="26"
		table.rows[2].cells[1].innerHTML="419"
		table.rows[2].cells[2].innerHTML="63"
		table.rows[2].cells[3].innerHTML="45"
		table.rows[2].cells[4].innerHTML="53"
		table.rows[2].cells[5].innerHTML="33"
		table.rows[2].cells[6].innerHTML="30"
		table.rows[2].cells[7].innerHTML="23"
		table.rows[2].cells[8].innerHTML="21"
		table.rows[2].cells[9].innerHTML="20"
		table.rows[2].cells[10].innerHTML="20"
		table.rows[2].cells[11].innerHTML="19"
		table.rows[2].cells[12].innerHTML="13"
		table.rows[2].cells[13].innerHTML="14"
		table.rows[2].cells[14].innerHTML="12"
		table.rows[2].cells[15].innerHTML="7"
		table.rows[2].cells[16].innerHTML="12"
		table.rows[2].cells[17].innerHTML="4"
		table.rows[2].cells[18].innerHTML="5"
		table.rows[2].cells[19].innerHTML="4"
		table.rows[2].cells[20].innerHTML="3"
		table.rows[2].cells[21].innerHTML="3"
		table.rows[3].cells[1].innerHTML="0.00%"
		table.rows[3].cells[2].innerHTML="45.2%"
		table.rows[3].cells[3].innerHTML="50.6%"
		table.rows[3].cells[4].innerHTML="46.5%"
		table.rows[3].cells[5].innerHTML="53.5%"
		table.rows[3].cells[6].innerHTML="61.5%"
		table.rows[3].cells[7].innerHTML="66.7%"
		table.rows[3].cells[8].innerHTML="65.0%"
		table.rows[3].cells[9].innerHTML="71.8%"
		table.rows[3].cells[10].innerHTML="63.0%"
		table.rows[3].cells[11].innerHTML="75.3%"
		table.rows[3].cells[12].innerHTML="74.0%"
		table.rows[3].cells[13].innerHTML="71.4%"
		table.rows[3].cells[14].innerHTML="74.5%"
		table.rows[3].cells[15].innerHTML="82.9%"
		table.rows[3].cells[16].innerHTML="69.2%"
		table.rows[3].cells[17].innerHTML="87.9%"
		table.rows[3].cells[18].innerHTML="68.8%"
		table.rows[3].cells[19].innerHTML="75.0%"
		table.rows[3].cells[20].innerHTML="85.0%"
		table.rows[3].cells[21].innerHTML="89.7%"
		
		var table = document.getElementById('deskRatios')
		table.rows[1].cells[1].innerHTML="7.97"
		table.rows[1].cells[2].innerHTML="6.28"
		table.rows[1].cells[3].innerHTML="5.80"
		table.rows[1].cells[4].innerHTML="5.79"
		table.rows[1].cells[5].innerHTML="6.00"
		table.rows[1].cells[6].innerHTML="5.05"
		table.rows[1].cells[7].innerHTML="3.85"
		table.rows[1].cells[8].innerHTML="5.62"
		table.rows[1].cells[9].innerHTML="5.00"
		table.rows[1].cells[10].innerHTML="3.82"
		table.rows[2].cells[1].innerHTML="9.90"
		table.rows[2].cells[2].innerHTML="8.74"
		table.rows[2].cells[3].innerHTML="7.91"
		table.rows[2].cells[4].innerHTML="8.06"
		table.rows[2].cells[5].innerHTML="7.74"
		table.rows[2].cells[6].innerHTML="6.92"
		table.rows[2].cells[7].innerHTML="6.13"
		table.rows[2].cells[8].innerHTML="7.26"
		table.rows[2].cells[9].innerHTML="6.67"
		table.rows[2].cells[10].innerHTML="5.37"
		switchChart()
    }
    document.getElementById("deskChange12").addEventListener("click", deskChange12);
})
