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

FusionCharts.ready(function() { //Week12
	var mobWin12 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWinsWeek12",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobWin12.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobWin12.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobWin12.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobLoss12 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLosesWeek12",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobLoss12.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss12.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss12.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobPercent12 = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek12",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobPercent12.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobPercent12.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobPercent12.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week11
	var mobWin11 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWinsWeek11",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobWin11.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobWin11.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobWin11.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobLoss11 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLosesWeek11",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobLoss11.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss11.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss11.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobPercent11 = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek11",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
				"showPlotBorder": "1",
				"animation": "0",
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
	});
	mobPercent11.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobPercent11.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobPercent11.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week10
	var mobWin10 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWinsWeek10",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobWin10.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobWin10.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobWin10.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobLoss10 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLosesWeek10",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobLoss10.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss10.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss10.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobPercent10 = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek10",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
				"showPlotBorder": "1",
				"animation": "0",
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
	});
	mobPercent10.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobPercent10.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobPercent10.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week9
	var mobWin9 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWinsWeek9",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobWin9.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobWin9.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobWin9.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobLoss9 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLosesWeek9",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobLoss9.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss9.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss9.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobPercent9 = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek9",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobPercent9.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobPercent9.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobPercent9.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week8
	var mobWin8 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWinsWeek8",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobWin8.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobWin8.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobWin8.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobLoss8 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLosesWeek8",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobLoss8.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss8.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss8.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobPercent8 = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek8",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobPercent8.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobPercent8.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobPercent8.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week7
	var mobWin7 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWinsWeek7",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobWin7.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobWin7.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobWin7.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobLoss7 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLosesWeek7",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobLoss7.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss7.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss7.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobPercent7 = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek7",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobPercent7.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobPercent7.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobPercent7.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week6
	var mobWin6 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWinsWeek6",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobWin6.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobWin6.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobWin6.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobLoss6 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLosesWeek6",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobLoss6.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss6.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss6.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobPercent6 = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek6",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobPercent6.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobPercent6.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobPercent6.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week5
	var mobWin5 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWinsWeek5",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobWin5.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobWin5.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobWin5.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobPercent6 = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek6",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobPercent6.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobPercent6.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobPercent6.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week4
	var mobWin4 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWinsWeek4",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobWin4.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobWin4.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobWin4.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobLoss4 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLosesWeek4",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobLoss4.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss4.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss4.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobPercent4 = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek4",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobPercent4.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobPercent4.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobPercent4.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week3
	var mobWin3 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWinsWeek3",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobWin3.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobWin3.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobWin3.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobLoss3 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLosesWeek3",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobLoss3.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss3.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss3.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobPercent3 = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek3",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobPercent3.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobPercent3.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobPercent3.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week2
	var mobWin2 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWinsWeek2",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobWin2.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobWin2.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobWin2.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobLoss2 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLosesWeek2",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobLoss2.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss2.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss2.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobPercent2 = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek2",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	mobPercent2.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobPercent2.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobPercent2.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})
*/
FusionCharts.ready(function() { //Week1
	var mobWin1 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobWinsWeek1",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
		}
	});
	mobWin1.render();
	
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobWin1.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobWin1.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobLoss1 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLosesWeek1",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
		}
	});
	mobLoss1.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobLoss1.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobLoss1.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var mobPercent1 = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek1",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
		}
	});
	mobPercent1.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			mobPercent1.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			mobPercent1.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("mobThemeType").addEventListener("click", switchChart);
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

FusionCharts.ready(function() { //Week12
	var deskWin12 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWinsWeek12",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskWin12.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskWin12.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskWin12.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskLoss12 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLosesWeek12",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskLoss12.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss12.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskLoss12.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskPercent12 = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercentWeek12",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskPercent12.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskPercent12.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskPercent12.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})
		
FusionCharts.ready(function() { //Week11
	var deskWin11 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWinsWeek11",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskWin11.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskWin11.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskWin11.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskLoss11 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLosesWeek11",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskLoss11.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss11.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskLoss11.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskPercent11 = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercentWeek11",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskPercent11.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskPercent11.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskPercent11.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week10
	var deskWin10 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWinsWeek10",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskWin10.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskWin10.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskWin10.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskLoss10 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLosesWeek10",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskLoss10.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss10.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskLoss10.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskPercent10 = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercentWeek10",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskPercent10.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskPercent10.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskPercent10.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week9
	var deskWin9 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWinsWeek9",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskWin9.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskWin9.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskWin9.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskLoss9 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLosesWeek9",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskLoss9.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss9.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskLoss9.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskPercent9 = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercentWeek9",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskPercent9.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskPercent9.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskPercent9.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week8
	var deskWin8 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWinsWeek8",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskWin8.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskWin8.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskWin8.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskLoss8 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLosesWeek8",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskLoss8.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss8.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskLoss8.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskPercent8 = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercentWeek8",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskPercent8.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskPercent8.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskPercent8.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week7
	var deskWin7 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWinsWeek7",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskWin7.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskWin7.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskWin7.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskLoss7 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLosesWeek7",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskLoss7.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss7.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskLoss7.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskPercent7 = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercentWeek7",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskPercent7.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskPercent7.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskPercent7.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week6
	var deskWin6 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWinsWeek6",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskWin6.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskWin6.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskWin6.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskLoss6 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLosesWeek6",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskLoss6.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss6.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskLoss6.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskPercent6 = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercentWeek6",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskPercent6.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskPercent6.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskPercent6.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week5
	var deskWin5 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWinsWeek5",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskWin5.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskWin5.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskWin5.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskLoss5 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLosesWeek5",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskLoss5.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss5.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskLoss5.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskPercent5 = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercentWeek5",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskPercent5.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskPercent5.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskPercent5.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week4
	var deskWin4 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWinsWeek4",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskWin4.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskWin4.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskWin4.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskLoss4 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLosesWeek4",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskLoss4.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss4.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskLoss4.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskPercent4 = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercentWeek4",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskPercent4.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskPercent4.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskPercent4.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week3
	var deskWin3 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWinsWeek3",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskWin3.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskWin3.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskWin3.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskLoss3 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLosesWeek3",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskLoss2.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss3.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskLoss3.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskPercent3 = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercentWeek3",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskPecent3.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskPercent3.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskPercent3.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() { //Week2
	var deskWin2 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWinsWeek2",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskWin2.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskWin2.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskWin2.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskLoss2 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLosesWeek2",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskLoss2.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss2.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskLoss2.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskPercent2 = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercentWeek2",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
	});
	deskPercent2.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskPercent2.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskPercent2.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})
*/
FusionCharts.ready(function() { //Week1
	var deskWin1 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskWinsWeek1",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
		}
	});
	deskWin1.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskWin1.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskWin1.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskLoss1 = new FusionCharts({
		"type": "pie2d",
		"renderAt": "deskLosesWeek1",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
		}
	});
	deskLoss1.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskLoss1.setChartAttribute({"bgColor":"#080808", "bgAlpha":"100", "smartLineColor":"#ffffff", "baseFontColor":"#ffffff", "labelFontColor":"#ffffff"});
		}
		else {
			deskLoss1.setChartAttribute({"bgColor":"#fcfcfc", "bgAlpha":"100", "smartLineColor":"#000000", "baseFontColor":"#000000", "labelFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})

FusionCharts.ready(function() {
	var deskPercent1 = new FusionCharts({
		"type": "column2d",
		"renderAt": "deskPercentWeek1",
		"height": "100%",
		"width": "100%",
		"dataFormat": "json",
		"dataSource": {
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
		}
	});
	deskPercent1.render();
	
	function switchChart() {

		if (document.getElementById("pageStyle").getAttribute("href") == "jsCharts/TAblack.css") {
			deskPercent1.setChartAttribute({"bgColor":"#080808", "canvasBgColor":"#080808", "bgAlpha":"100", "baseFontColor":"#ffffff"});
		}
		else {
			deskPercent1.setChartAttribute({"bgColor":"#fcfcfc", "canvasBgColor":"#fcfcfc", "bgAlpha":"100", "baseFontColor":"#000000"});
		}	
    }
	
    document.getElementById("themeType").addEventListener("click", switchChart);
})