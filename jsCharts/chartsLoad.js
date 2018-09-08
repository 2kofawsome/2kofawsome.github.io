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

/*
FusionCharts.ready(function() { //Mobile
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
						},{
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
							"value": "12"
						},{
							"value": "14"
						},{
							"value": "12"
						},{
							"value": "14"
						},
					]
				},{
					"seriesname": "2",
					"color": "#003200",
					"data": [
						{
							"value": "15"
						},{
							"value": "16"
						},{
							"value": "13"
						},{
							"value": "17"
						},
					]
				},{
					"seriesname": "3",
					"color": "#005f00",
					"data": [
						{
							"value": "20"
						},{
							"value": "19"
						},{
							"value": "21"
						},{
							"value": "23"
						},
					]
				},{
					"seriesname": "4",
					"color": "#007800",
					"data": [
						{
							"value": "23"
						},{
							"value": "22"
						},{
							"value": "26"
						},{
							"value": "25"
						},
					]
				},{
					"seriesname": "5",
					"color": "#008c00",
					"data": [
						{
							"value": "27"
						},{
							"value": "30"
						},{
							"value": "29"
						},{
							"value": "28"
						},
					]
				},{
					"seriesname": "6",
					"color": "#00a000",
					"data": [
						{
							"value": "31"
						},{
							"value": "31"
						},{
							"value": "32"
						},{
							"value": "33"
						},
					]
				},{
					"seriesname": "7",
					"color": "#00b900",
					"data": [
						{
							"value": "34"
						},{
							"value": "33"
						},{
							"value": "35"
						},{
							"value": "34"
						},
					]
				},{
					"seriesname": "8",
					"color": "#00c800",
					"data": [
						{
							"value": "37"
						},{
							"value": "38"
						},{
							"value": "37"
						},{
							"value": "36"
						},
					]
				},{
					"seriesname": "9",
					"color": "#00dc00",
					"data": [
						{
							"value": "40"
						},{
							"value": "41"
						},{
							"value": "42"
						},{
							"value": "44"
						},
					]
				},{
					"seriesname": "10",
					"color": "#00eb00",
					"data": [
						{
							"value": "46"
						},{
							"value": "48"
						},{
							"value": "51"
						},{
							"value": "49"
						},
					]
				},{
					"seriesname": "11",
					"color": "#00ff00",
					"data": [
						{
							"value": "52"
						},{
							"value": "55"
						},{
							"value": "53"
						},{
							"value": "53"
						},
					]
				},{
					"seriesname": "12",
					"color": "#25ff25",
					"data": [
						{
							"value": "56"
						},{
							"value": "55"
						},{
							"value": "58"
						},{
							"value": "59"
						},
					]
				},{
					"seriesname": "13",
					"color": "#4bff4b",
					"data": [
						{
							"value": "60"
						},{
							"value": "61"
						},{
							"value": "59"
						},{
							"value": "62"
						},
					]
				},{
					"seriesname": "14",
					"color": "#64ff64",
					"data": [
						{
							"value": "65"
						},{
							"value": "65"
						},{
							"value": "64"
						},{
							"value": "65"
						},
					]
				},{
					"seriesname": "15",
					"color": "#7dff7d",
					"data": [
						{
							"value": "67"
						},{
							"value": "66"
						},{
							"value": "65"
						},{
							"value": "68"
						},
					]
				},{
					"seriesname": "16",
					"color": "#96ff96",
					"data": [
						{
							"value": "81"
						},{
							"value": "78"
						},{
							"value": "80"
						},{
							"value": "80"
						},
					]
				},{
					"seriesname": "17",
					"color": "#afffaf",
					"data": [
						{
							"value": "84"
						},{
							"value": "85"
						},{
							"value": "83"
						},{
							"value": "82"
						},
					]
				},{
					"seriesname": "18",
					"color": "#c8ffc8",
					"data": [
						{
							"value": "87"
						},{
							"value": "86"
						},{
							"value": "87"
						},{
							"value": "88"
						},
					]
				},{
					"seriesname": "19",
					"color": "#e1ffe1",
					"data": [
						{
							"value": "92"
						},{
							"value": "94"
						},{
							"value": "94"
						},{
							"value": "95"
						},
					]
				},{
					"seriesname": "20",
					"color": "#ffffff",
					"data": [
						{
							"value": "99"
						},{
							"value": "100"
						},{
							"value": "97"
						},{
							"value": "98"
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
}) 
*/

FusionCharts.ready(function() { 
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
		"dataSource": datasWin.week1
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
		"dataSource": datasLoss.week1
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
		"dataSource": datasPercent.week1
	});
	mobPercent.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
			mobWin.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
			mobPercent.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
			mobWin.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
			mobPercent.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
	
	function mobChange1() {
		mobLoss.setJSONData(datasLoss.week1);
		mobWin.setJSONData(datasWin.week1);
		mobPercent.setJSONData(datasPercent.week1);
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
    document.getElementById("mobChange1").addEventListener("click", mobChange1);
	function mobChange2() {
		mobLoss.setJSONData(datasLoss.week2);
		mobWin.setJSONData(datasWin.week2);
		mobPercent.setJSONData(datasPercent.week2);
		document.getElementById("mobTitle").innerHTML = "Week 2";
		document.getElementById("mobParagraph").innerHTML = "Assuming all 4 rounds of group stage will have the same score as this one (which they will not), Anyone who scores under _ will have no chance of moving on, and anyone who scores over _ will be guarenteed to move on. Numbers inbetween have varying chance (depending on % that won numbers)";
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
    document.getElementById("mobChange2").addEventListener("click", mobChange2);
	function mobChange3() {
		mobLoss.setJSONData(datasLoss.week3);
		mobWin.setJSONData(datasWin.week3);
		mobPercent.setJSONData(datasPercent.week3);
		document.getElementById("mobTitle").innerHTML = "Week 3";
		document.getElementById("mobParagraph").innerHTML = "Assuming all 4 rounds of group stage will have the same score as this one (which they will not), Anyone who scores under _ will have no chance of moving on, and anyone who scores over _ will be guarenteed to move on. Numbers inbetween have varying chance (depending on % that won numbers)";
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
    document.getElementById("mobChange3").addEventListener("click", mobChange3);
	function mobChange4() {
		mobLoss.setJSONData(datasLoss.week4);
		mobWin.setJSONData(datasWin.week4);
		mobPercent.setJSONData(datasPercent.week4);
		document.getElementById("mobTitle").innerHTML = "Week 4";
		document.getElementById("mobParagraph").innerHTML = "Assuming all 4 rounds of group stage will have the same score as this one (which they will not), Anyone who scores under _ will have no chance of moving on, and anyone who scores over _ will be guarenteed to move on. Numbers inbetween have varying chance (depending on % that won numbers)";
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
    document.getElementById("mobChange4").addEventListener("click", mobChange4);
	function mobChange5() {
		mobLoss.setJSONData(datasLoss.week5);
		mobWin.setJSONData(datasWin.week5);
		mobPercent.setJSONData(datasPercent.week5);
		document.getElementById("mobTitle").innerHTML = "Week 5";
		document.getElementById("mobParagraph").innerHTML = "Congratulations to the 256 who made it here, and the 128 moving on!";
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

/*
FusionCharts.ready(function() { //Desktop
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
						},{
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
							"value": "12"
						},{
							"value": "14"
						},{
							"value": "12"
						},{
							"value": "14"
						},
					]
				},{
					"seriesname": "2",
					"color": "#003200",
					"data": [
						{
							"value": "15"
						},{
							"value": "16"
						},{
							"value": "13"
						},{
							"value": "17"
						},
					]
				},{
					"seriesname": "3",
					"color": "#005f00",
					"data": [
						{
							"value": "20"
						},{
							"value": "19"
						},{
							"value": "21"
						},{
							"value": "23"
						},
					]
				},{
					"seriesname": "4",
					"color": "#007800",
					"data": [
						{
							"value": "23"
						},{
							"value": "22"
						},{
							"value": "26"
						},{
							"value": "25"
						},
					]
				},{
					"seriesname": "5",
					"color": "#008c00",
					"data": [
						{
							"value": "27"
						},{
							"value": "30"
						},{
							"value": "29"
						},{
							"value": "28"
						},
					]
				},{
					"seriesname": "6",
					"color": "#00a000",
					"data": [
						{
							"value": "31"
						},{
							"value": "31"
						},{
							"value": "32"
						},{
							"value": "33"
						},
					]
				},{
					"seriesname": "7",
					"color": "#00b900",
					"data": [
						{
							"value": "34"
						},{
							"value": "33"
						},{
							"value": "35"
						},{
							"value": "34"
						},
					]
				},{
					"seriesname": "8",
					"color": "#00c800",
					"data": [
						{
							"value": "37"
						},{
							"value": "38"
						},{
							"value": "37"
						},{
							"value": "36"
						},
					]
				},{
					"seriesname": "9",
					"color": "#00dc00",
					"data": [
						{
							"value": "40"
						},{
							"value": "41"
						},{
							"value": "42"
						},{
							"value": "44"
						},
					]
				},{
					"seriesname": "10",
					"color": "#00eb00",
					"data": [
						{
							"value": "46"
						},{
							"value": "48"
						},{
							"value": "51"
						},{
							"value": "49"
						},
					]
				},{
					"seriesname": "11",
					"color": "#00ff00",
					"data": [
						{
							"value": "52"
						},{
							"value": "55"
						},{
							"value": "53"
						},{
							"value": "53"
						},
					]
				},{
					"seriesname": "12",
					"color": "#25ff25",
					"data": [
						{
							"value": "56"
						},{
							"value": "55"
						},{
							"value": "58"
						},{
							"value": "59"
						},
					]
				},{
					"seriesname": "13",
					"color": "#4bff4b",
					"data": [
						{
							"value": "60"
						},{
							"value": "61"
						},{
							"value": "59"
						},{
							"value": "62"
						},
					]
				},{
					"seriesname": "14",
					"color": "#64ff64",
					"data": [
						{
							"value": "65"
						},{
							"value": "65"
						},{
							"value": "64"
						},{
							"value": "65"
						},
					]
				},{
					"seriesname": "15",
					"color": "#7dff7d",
					"data": [
						{
							"value": "67"
						},{
							"value": "66"
						},{
							"value": "65"
						},{
							"value": "68"
						},
					]
				},{
					"seriesname": "16",
					"color": "#96ff96",
					"data": [
						{
							"value": "81"
						},{
							"value": "78"
						},{
							"value": "80"
						},{
							"value": "80"
						},
					]
				},{
					"seriesname": "17",
					"color": "#afffaf",
					"data": [
						{
							"value": "84"
						},{
							"value": "85"
						},{
							"value": "83"
						},{
							"value": "82"
						},
					]
				},{
					"seriesname": "18",
					"color": "#c8ffc8",
					"data": [
						{
							"value": "87"
						},{
							"value": "86"
						},{
							"value": "87"
						},{
							"value": "88"
						},
					]
				},{
					"seriesname": "19",
					"color": "#e1ffe1",
					"data": [
						{
							"value": "92"
						},{
							"value": "94"
						},{
							"value": "94"
						},{
							"value": "95"
						},
					]
				},{
					"seriesname": "20",
					"color": "#ffffff",
					"data": [
						{
							"value": "99"
						},{
							"value": "100"
						},{
							"value": "97"
						},{
							"value": "98"
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
}) 
*/

FusionCharts.ready(function() { 
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
		"dataSource": datasWin.week1
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
		"dataSource": datasLoss.week1
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
		},
		"week2": {
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
		"dataSource": datasPercent.week1
	});
	deskPercent.render();
	
	function switchChart() {
		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
			deskWin.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
			deskPercent.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskLoss.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
			deskWin.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
			deskPercent.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
	
	function deskChange1() {
		deskLoss.setJSONData(datasLoss.week1);
		deskWin.setJSONData(datasWin.week1);
		deskPercent.setJSONData(datasPercent.week1);
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
    document.getElementById("deskChange1").addEventListener("click", deskChange1);
	function deskChange2() {
		deskLoss.setJSONData(datasLoss.week2);
		deskWin.setJSONData(datasWin.week2);
		deskPercent.setJSONData(datasPercent.week2);
		document.getElementById("deskTitle").innerHTML = "Week 2";
		document.getElementById("deskParagraph").innerHTML = "Assuming all 4 rounds of group stage will have the same score as this one (which they will not), Anyone who scores under _ will have no chance of moving on, and anyone who scores over _ will be guarenteed to move on. Numbers inbetween have varying chance (depending on % that won numbers)";
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
    document.getElementById("deskChange2").addEventListener("click", deskChange2);
	function deskChange3() {
		deskLoss.setJSONData(datasLoss.week3);
		deskWin.setJSONData(datasWin.week3);
		deskPercent.setJSONData(datasPercent.week3);
		document.getElementById("deskTitle").innerHTML = "Week 3";
		document.getElementById("deskParagraph").innerHTML = "Assuming all 4 rounds of group stage will have the same score as this one (which they will not), Anyone who scores under _ will have no chance of moving on, and anyone who scores over _ will be guarenteed to move on. Numbers inbetween have varying chance (depending on % that won numbers)";
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
    document.getElementById("deskChange3").addEventListener("click", deskChange3);
	function deskChange4() {
		deskLoss.setJSONData(datasLoss.week4);
		deskWin.setJSONData(datasWin.week4);
		deskPercent.setJSONData(datasPercent.week4);
		document.getElementById("deskTitle").innerHTML = "Week 4";
		document.getElementById("deskParagraph").innerHTML = "Assuming all 4 rounds of group stage will have the same score as this one (which they will not), Anyone who scores under _ will have no chance of moving on, and anyone who scores over _ will be guarenteed to move on. Numbers inbetween have varying chance (depending on % that won numbers) ";
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
    document.getElementById("deskChange4").addEventListener("click", deskChange4);
	function deskChange5() {
		deskLoss.setJSONData(datasLoss.week5);
		deskWin.setJSONData(datasWin.week5);
		deskPercent.setJSONData(datasPercent.week5);
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
