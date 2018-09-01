/*
FusionCharts.ready(function() { //Mobile
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
}) 

FusionCharts.ready(function() { //Week12
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week11
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week10
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week9
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week8
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week7
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week6
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})
		
FusionCharts.ready(function() { //Week5
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
		"type": "pie2d",
		"renderAt": "mobLosesWeek5",
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
		"type": "column2d",
		"renderAt": "mobPercentWeek5",
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week4
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week3
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week2
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})
*/
FusionCharts.ready(function() { //Week1
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
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
				"value": "52",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "42",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "41",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "64",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "40",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "42",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "48",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "35",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "53",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "41",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "30",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "34",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "32",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "25",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "16",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "12",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "14",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "13",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "23",
				"color": "#ffffff"
			}]
		}
	});
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"showLabels": "0"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "449",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "64",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "44",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "53",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "36",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "31",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "23",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "22",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "19",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "18",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "15",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "9",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "13",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "9",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "5",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "7",
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
				"value": "2",
				"color": "#ffffff"
			}]
		}
	});
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0.00",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "44.83",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "54.17",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "44.21",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "53.25",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "67.37",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "63.49",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "65.63",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "71.64",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "66.04",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "77.94",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "82.00",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "69.77",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "79.07",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "86.49",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "78.13",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "80.00",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "70.588",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "77.78",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "81.25",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "92.00",
				"color": "#ffffff"
			}]
		}
	});
	revenueChart.render();
})



/*
FusionCharts.ready(function() { //Desktop
	var revenueChart = new FusionCharts({
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
				"canvasBgColor": "#eeeeee"
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
	revenueChart.render();
}) 

FusionCharts.ready(function() { //Week12
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"plottooltext": "$value"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})
		
FusionCharts.ready(function() { //Week11
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"plottooltext": "$value"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week10
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"plottooltext": "$value"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week9
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"plottooltext": "$value"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week8
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"plottooltext": "$value"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week7
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"plottooltext": "$value"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week6
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"plottooltext": "$value"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week5
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"plottooltext": "$value"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week4
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"plottooltext": "$value"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week3
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"plottooltext": "$value"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() { //Week2
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"plottooltext": "$value"
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
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
	revenueChart.render();
})
*/
FusionCharts.ready(function() { //Week1
	var revenueChart = new FusionCharts({
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
				"value": "52",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "42",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "41",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "64",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "40",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "42",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "48",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "35",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "53",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "41",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "30",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "34",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "32",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "25",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "16",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "12",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "14",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "13",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "23",
				"color": "#ffffff"
			}]
		}
	});
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
				"plottooltext": "$value"
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "449",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "64",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "44",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "53",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "36",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "31",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "23",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "22",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "19",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "18",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "15",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "9",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "13",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "9",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "5",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "7",
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
				"value": "2",
				"color": "#ffffff"
			}]
		}
	});
	revenueChart.render();
})

FusionCharts.ready(function() {
	var revenueChart = new FusionCharts({
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
			},
			// Chart Data
			"data": [{
				"label": "0",
				"value": "0.00",
				"color": "#000000"
			}, {
				"label": "1",
				"value": "44.83",
				"color": "#003200"
			}, {
				"label": "2",
				"value": "54.17",
				"color": "#004600"
			}, {
				"label": "3",
				"value": "44.21",
				"color": "#005f00"
			}, {
				"label": "4",
				"value": "53.25",
				"color": "#007800"
			}, {
				"label": "5",
				"value": "67.37",
				"color": "#008c00"
			}, {
				"label": "6",
				"value": "63.49",
				"color": "#00a000"
			}, {
				"label": "7",
				"value": "65.63",
				"color": "#00b900"
			}, {
				"label": "8",
				"value": "71.64",
				"color": "#00c800"
			}, {
				"label": "9",
				"value": "66.04",
				"color": "#00dc00"
			}, {
				"label": "10",
				"value": "77.94",
				"color": "#00eb00"
			}, {
				"label": "11",
				"value": "82.00",
				"color": "#00ff00"
			}, {
				"label": "12",
				"value": "69.77",
				"color": "#25ff25"
			}, {
				"label": "13",
				"value": "79.07",
				"color": "#4bff4b"
			}, {
				"label": "14",
				"value": "86.49",
				"color": "#64ff64"
			}, {
				"label": "15",
				"value": "78.13",
				"color": "#7dff7d"
			}, {
				"label": "16",
				"value": "80.00",
				"color": "#96ff96"
			}, {
				"label": "17",
				"value": "70.588",
				"color": "#afffaf"
			}, {
				"label": "18",
				"value": "77.78",
				"color": "#c8ffc8"
			}, {
				"label": "19",
				"value": "81.25",
				"color": "#e1ffe1"
			}, {
				"label": "20",
				"value": "92.00",
				"color": "#ffffff"
			}]
		}
	});
	revenueChart.render();
})