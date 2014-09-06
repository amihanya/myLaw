// JavaScript Document
this.js = this.js||{};

(function() {
	var Data = function() {

	}
	Data.returnData = function(str)
	{
		return Data[str];
	}
	
	Data.getXml = function(xmlLink,myVar)
	{
		
		var evtIn = document.createEvent("Event");
		
		$.get(xmlLink, {},
		  function(data) {
			
				//console.log("success",$($(data).find("movie")[1]).find("id").text());
				//evtIn.initEvent("Event", true, true, data);
				
				/*if(myVar == undefined  )
				{
					GAME_XML = (data);
					console.log("GAME_XML",GAME_XML);
                    Data.dispatchEvent("finish");
				}else{
					com.Data.myVar = (data);
					console.log("myVar");
				}*/
				//console.log(data);
                
                $.event.trigger({
                    type: "newXml",
                    xml: data,
                    time: new Date()
                });
		   		//document.dispatchEvent(evtIn);
			  	//com.Data.returnData("userid");
		   		
		  }).success(function(data) {   //console.log("second success");
		   })
			.error(function() {  //console.log("error");
				
				if(amiTest)
				{
					
					serverError('server error');//console.log(Data.userid,Data.userpic,Data.username,Data.clickNumber,Data.leaf,Data.leaves_id);
					//document.dispatchEvent(evtIn);
				}else{
					serverError('server error');
				}
			 })
			.complete(function() { // console.log("complete");
			 });
		
	}
	
	/*Data.updateDb = function(str,sendTo) {
		var targetUrl
	if(sendTo == 'game')
	{
		targetUrl = 'http://oran.mobi/control/client/game/ajaxUniqueStr.aspx';
	}
	if(sendTo == 'main')
	{
		targetUrl = 'http://oran.mobi/control/client/game/ajaxGeneralStr.aspx';
	}
	
    $.post(targetUrl,
        {
            str: str,
            campId: campId
        },
          function (data, status) {
              if (status == "success") {
                  if (data == "done") {
                      $("#saveBtn").css({ opacity: 1 });
					  $("#saveStatus").text("נשמר בהצלחה");
					  com.editMain.EditMain.changeSave(true);
                  }
                  else {
                      alert("server erorr try again");
                  }
              }
          });

    }*/
	
	
	
js.Data = Data;
}());
