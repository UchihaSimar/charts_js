dataSet = [
    {
       "Journey Name":"Your_Favorites_are_on_Sale_Journey",
       "Flag":"True",
       "Emails Used in Journey":"1",
       "Email Send Count":"90"
    },
    {
       "Journey Name":"Non-Promotional On-boarding Journey",
       "Flag":"True",
       "Emails Used in Journey":"6",
       "Email Send Count":"33823"
    },
    {
       "Journey Name":"Order_Delivered_Survey",
       "Flag":"True",
       "Emails Used in Journey":"1",
       "Email Send Count":"2800"
    },
    {
       "Journey Name":"Abandon Cart Flow",
       "Flag":"True",
       "Emails Used in Journey":"2",
       "Email Send Count":"0"
    },
    {
       "Journey Name":"CaseClosed Survey Journey",
       "Flag":"True",
       "Emails Used in Journey":"1",
       "Email Send Count":"612"
    },
    {
       "Journey Name":"Winback Regulars Journey",
       "Flag":"True",
       "Emails Used in Journey":"2",
       "Email Send Count":"73"
    },
    {
       "Journey Name":"FSA On-boarding",
       "Flag":"True",
       "Emails Used in Journey":"1",
       "Email Send Count":"3425"
    }
]


labelsArr = [];
dataArr = [];
backgroundColorArr = [];
for(i = 0;i <dataSet.length - 1;i++){
    labelsArr.push(dataSet[i]["Journey Name"]);
    dataArr.push(dataSet[i]["Email Send Count"]);
    backgroundColorArr.push(randDarkColor());
}
processedDataObj = {
    "labels" : labelsArr,
    "datasets" : [{
        "label" : "Journey Data",
        "data" : dataArr,
        "fill":true,
        "backgroundColor":backgroundColorArr,
        "borderColor":backgroundColorArr,
        "borderWidth":1
    }]
};
console.log(processedDataObj);

var ctx = document.getElementById('myChart').getContext('2d');
    var data = {};
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'horizontalBar',

        // The data for our dataset
        data: processedDataObj,

        //options
        options: {
            tooltips: {
              callbacks: {
                title: function(tooltipItem, data) {
                  return data['labels'][tooltipItem[0]['index']];
                },
                label: function(tooltipItem, data) {
                  return `"Emails Used in Journey" : ${dataSet[[tooltipItem['index']]]["Emails Used in Journey"]}`;
                },
                afterLabel: function(tooltipItem, data) {
                  return `"Email Send Count" : ${dataSet[[tooltipItem['index']]]["Email Send Count"]}`;
                }
              },
              displayColors : false
            }
        }
});

function randDarkColor() {
    var lum = -0.25;
    var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var rgb = "#",
        c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }
    return rgb;
}

