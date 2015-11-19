var rParams = FAPI.Util.getRequestParameters();

function Init () {
	FAPI.init(rParams["api_server"], rParams["apiconnection"],
	function () {
		//initialization success
	},
	function (error){
		//initialization fail
	});
}

function BuyItem (item_name) {
	var orderInfo = {
		type: "item",
		item: item_name
	};
	//FAPI.UI.showPayment(name : String, description : String, code : String, price : int, options : null, attributes : String(JSON), currency : String(ok), callback : String(false/true), uiConf : String(JSON));
	FAPI.UI.showPayment("100 Золотых монет", "", 777, 1, null, null, "ok", "true");	//TODO
}

function TransferVotes (count) {
	var orderInfo = {
		type: "votes",
		votes: count
	};
	FAPI.UI.showPortalPayment("showOrderBox", orderInfo);	//TODO 
}

function API_callback (method, result, data) {
alert(result);
	switch(method) {
	case "showPayment":
		if(result == "ok") {
			//Success
			SendMessage ("JSConnector", "ShowPurchaseResult", "Success");
		} else {
			//Fail
			SendMessage ("JSConnector", "ShowPurchaseResult", "Fail");
		}
		break;
	default:
		break;
	}
}

alert("OK Script Version : v0.01");