
(function() {


var jsonIssues = []; // new Array
jsonIssues.push( { ID:1, "Name":"whatever" } );



var jsonIssues = [
 {ID:'1',Name:'Some name',Notes:'NOTES'},
 {ID:'2',Name:'Some name 2',Notes:'NOTES 2'}
];



function addValueInObject(value, object, key) {

        var addMoreOptions = eval('{"'  + key + '":' +  value + '}');

        if(addMoreOptions != null) {
            var textObject = JSON.stringify(object);
            textObject = textObject.substring(1,textObject.length-1);
            var AddElement = JSON.stringify(addMoreOptions);
            object = eval('{' + textObject +','+  AddElement.substring(1,AddElement.length-1) + '}');
        }
        return object;
    }



var obj = {key1: 'value1', key2: 'value2'};
$('#ini').append(JSON.stringify(obj));


$.extend(obj,{key3: 'value3'});

$('#ext').append(JSON.stringify(obj));
$('#ini').append(JSON.stringify(obj));



})();



function showText(){



	var jsonIssues = []; 
	jsonIssues.push( { ID:1, "Name":"whatever" } );


	var jsonIssues = [
	 {ID:'1',Name:'Some name',Notes:'NOTES'},
	 {ID:'2',Name:'Some name 2',Notes:'NOTES 2'}
	];



	var tableData = jsonIssues

	var obj = {key1: 'value1', key2: 'value2'};

 	tableData.push({
                    "ID": '3',
                    "Name": 'Some name 3',
                    "Notes": 'NOTES 3'
                });
	$('#ini').append(JSON.stringify(tableData));


}


function getJsonData(){



	   var alias = 0,
            title = "",
            url = "",
            lat = 0,
            lon = 0;
	 	
  			masterList[0].list.words.push( {'wordName':'test12','wordExplain':'title2','example':'url222222'} );
       
            var feat = masterList[0].list,
                tableData = [];

          
            //3


            // Iterate over the JSON object  feat.words[0].wordName
            for (var i = 0, len = feat.words.length; i < len; i++) {
                mag = feat.words[i].wordName;
                title = feat.words[i].wordExplain;
                url = feat.words[i].example;


                tableData.push({
                    "wordName": mag,
                    "wordExplain": title,
                    "example": url

                });

            }
           // feat.sort();

			//dataSet.list.push(tableData);
			$('#ini').append(JSON.stringify(tableData));


}




function getJsonData2(){



	   var alias = 0,
            title = "",
            url = "",
            lat = 0,
            lon = 0;
	 	
  			masterList[0].list.words.push( {'wordName':'test12','wordExplain':'title2','example':'url222222'} );
       
            var feat = masterList[0].list,
                tableData = [];

          
            //3


            // Iterate over the JSON object  feat.words[0].wordName
            for (var i = 0, len = feat.words.length; i < len; i++) {
                mag = feat.words[i].wordName;
                title = feat.words[i].wordExplain;
                url = feat.words[i].example;


                tableData.push({
                    "wordName": mag,
                    "wordExplain": title,
                    "example": url

                });

            }
           // feat.sort();

			//dataSet.list.push(tableData);
			$('#ini').append(JSON.stringify(tableData));


      	  
        	
 			

}





function addJsonData(){
	$.getJSON("dataList.json", function(resp) {

            var feat = resp.list,
                tableData = [];



            // Iterate over the JSON object  feat.words[0].wordName
            for (var i = 0, len = feat.words.length; i < len; i++) {
                mag = feat.words[i].wordName;
                title = feat.words[i].wordExplain;
                url = feat.words[i].example;
                //lon = feat[i].geometry.coordinates[0];
                //lat = feat[i].geometry.coordinates[1];

                tableData.push({
                    "wordName": mag,
                    "wordExplain": title,
                    "example": url
                });

            }


			$('#ini').add(tableData);
          
        });


}



function postJsonData(){






	/*var arr =  {
            "wordName" : "User and Their Photos",
            "wordExplain" : "User and Their Photos",
            "example" : "User and Their Photos",
            "createDate" : [
              {
                "date" : "User and Their Photos",
                "time" : "inner"
              }
        ]


      };
	$.ajax({
	    url: 'dataListJs.js',
	    type: 'POST',
	    data: JSON.stringify(arr),
	    contentType: 'application/json; charset=utf-8',
	    dataType: 'json',
	    async: false,
	    success: function(msg) {
	        alert(msg);
	    }
	});*/

	/*$.postJsonData()
   $.post("page1.html",
    {
            "wordName" : "User and Their Photos",
            "wordExplain" : "User and Their Photos",
            "example" : "User and Their Photos",
            "createDate" : [
              {
                "date" : "User and Their Photos",
                "time" : "inner"
              }
        ]


      },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });*/


		/*var xhr = new XMLHttpRequest();
		var url = "dataList.json";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function () {
		    if (xhr.readyState === 4 && xhr.status === 200) {
		        var json = JSON.parse(xhr.responseText);
		        console.log(json.wordName + ", " + json.wordExplain);
		    }
		};
		var data = JSON.stringify( 
			{
            "wordName" : "User and Their Photos",
            "wordExplain" : "User and Their Photos",
            "example" : "User and Their Photos",
            "createDate" : [
				              {
				                "date" : "User and Their Photos",
				                "time" : "inner"
				              }
					        ]

	      	});
		xhr.send(data);
		console.log('123456');*/
/*var json = JSON.stringify( 
			{
            "wordName" : "User and Their Photos",
            "wordExplain" : "User and Their Photos",
            "example" : "User and Their Photos",
            "createDate" : [
				              {
				                "date" : "User and Their Photos",
				                "time" : "inner"
				              }
					        ]

	      	});
		$.ajax({
		    url: 'dataList.json',
		    type: 'POST',
		    dataType: 'json',
		    data: json,
		    contentType: 'application/json; charset=utf-8',
		    success: function (data) {
		    	console.log('y');
		    },
		    error: function (result) {
		    	console.log('n');
		    }
		});*/
/*
var xhr = new XMLHttpRequest();
		var url = "dataList.json";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function () {
		    if (xhr.readyState === 4 && xhr.status === 200) {
		        var json = JSON.parse(xhr.responseText);
		        console.log(json.wordName + ", " + json.wordExplain);
		    }
		};
		var data = JSON.stringify( 
			{
            "wordName" : "User and Their Photos",
            "wordExplain" : "User and Their Photos",
            "example" : "User and Their Photos",
            "createDate" : [
				              {
				                "date" : "User and Their Photos",
				                "time" : "inner"
				              }
					        ]

	      	});
		xhr.send(data);
*/

/*
		 var boundary = this.generateBoundary();
		    var xhr = new XMLHttpRequest;

		    xhr.open("POST", "dataList.json", true);
		    xhr.onreadystatechange = function() {
		        if (xhr.readyState === 4) {
		            alert(xhr.responseText);
		        }
		    };
		    var contentType = "multipart/form-data; boundary=" + boundary;
		    xhr.setRequestHeader("Content-Type", contentType);

		    for (var header in this.headers) {
		        xhr.setRequestHeader(header, headers[header]);
		    }

		    // here's our data variable that we talked about earlier
		  var data = JSON.stringify( 
			{
            "wordName" : "User and Their Photos",
            "wordExplain" : "User and Their Photos",
            "example" : "User and Their Photos",
            "createDate" : [
				              {
				                "date" : "User and Their Photos",
				                "time" : "inner"
				              }
					        ]

	      	});

		    // finally send the request as binary data
		    xhr.send(data);
*/
}



function saveData(){
		
		//如果 giftname 空白不能送出
		if ( $('#giftname').val() == '') {
			alert('Please Write A Gift');
		} else {
			
			//取得新願望 並塞到前台。
			var newWish = $('#giftname').val();
			//newWish = escapeHtml(newWish); 
		
			//把data 存回去
			$.ajax({  
				url: "addData2.php",  
				type: "POST",
				data: { wish : newWish },
				success: function(data){
					if ( data == '1'){
						alert('哎呀，好像有什麼東西出錯啦，請稍後再試。');
					} else {
						// do something if success 
					}
					$('#giftname').val(''); //清空input
				} 
			});  
		}
	};