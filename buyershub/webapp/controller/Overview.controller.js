sap.ui.define([
  "sap/ui/core/mvc/Controller", 'sap/m/MessageToast',
  "sap/ui/model/json/JSONModel"
],
function (Controller, MessageToast, JSONModel) {
  "use strict";
 
  var flag;
  var isFavoriteIconClicked = false;
  return Controller.extend("buyershub.controller.Overview", {
   
        
    onInit: function () {
      this.oModel = this.getView().getModel("appModel");
    },


    onAfterRendering: function(){
     // var oModel = this.getView().getModel("appModel");
    // this.getView().byId("hbox02").setModel(oModel, "appModel");

      this.getView().getModel("appModel").setProperty("/bVisHome", true);
    },
    

    onSlide1: function(oEvent){
      
      //var oList = oEvent.getSource();
      var aTile = this.getView().getModel("appModel").getProperty("/slideTileCollection1");
      var aRes = [];
      aRes = jQuery.grep(aTile, function (oObj) {
        return oObj.tileId == oEvent;
      });
      sap.m.URLHelper.redirect(aRes[0].url, true);
    },

    onSlide2: function(oEvent){
      var sPath = oEvent.getSource().getBindingContext("appModel").getPath();
      var aTile = this.getView().getModel("appModel").getProperty(sPath);
      sap.m.URLHelper.redirect(aTile.url, true);
    },
    pressSideHome: function(oEvent){

      // if ( oEvent.getParameter("item").getProperty("text") == "Home")
      // {
      //   this.getView().getModel("appModel").setProperty("/bVisHome", true);
      // } else{
      //   this.getView().getModel("appModel").setProperty("/bVisHome", false);
      // }
      
      var sSlideText = oEvent.getParameter("item").getProperty("text");
      this.resetSlide();

      switch (sSlideText) {
        case "Home":
          return this.getView().getModel("appModel").setProperty("/bVisHome", true);
        case "Suppliers":
          return this.getView().getModel("appModel").setProperty("/bVisSupp", true);
        case "Parts":
          return this.getView().getModel("appModel").setProperty("/bVisParts", true);
        case "App Launcher":
          return this.getView().getModel("appModel").setProperty("/bVisApp", true);
        case "Analytics":
          return this.getView().getModel("appModel").setProperty("/bVisAna", true);
        case "News":
          return this.getView().getModel("appModel").setProperty("/bVisNews", true);
        case "Help":
          return this.getView().getModel("appModel").setProperty("/bVisHelp", true);
        case "Settings":
          return this.getView().getModel("appModel").setProperty("/bVisSet", true);
      }
    },

    resetSlide: function(){
      this.getView().getModel("appModel").setProperty("/bVisHome", false);
      this.getView().getModel("appModel").setProperty("/bVisSupp", false);
      this.getView().getModel("appModel").setProperty("/bVisParts", false);
      this.getView().getModel("appModel").setProperty("/bVisApp", false);
      this.getView().getModel("appModel").setProperty("/bVisAna", false);
      this.getView().getModel("appModel").setProperty("/bVisNews", false);
      this.getView().getModel("appModel").setProperty("/bVisHelp", false);
      this.getView().getModel("appModel").setProperty("/bVisSet", false);
    },

    onGeneralTilePress: function(oEvent){
      var sPath = oEvent.getSource().getBindingContext("appModel").getPath();
      var aTile = this.getView().getModel("appModel").getProperty(sPath);
      sap.m.URLHelper.redirect(aTile.url, true);
    },

   
    

    onFavoritePress: function(oEvent) {
      // Set the flag to indicate the favorite icon was clicked
      isFavoriteIconClicked = true;
           // Get the ID of the pressed icon
      var sIconId = oEvent.getSource().getId();
  
     // Determine which property to toggle based on the icon ID
     var sTileKey;
     if (sIconId === this.createId("FavoriteBSHPurch")) {
         sTileKey = "isFavoriteBSHPurch";
     } else if (sIconId === this.createId("FavoritePurchDir")) {
         sTileKey = "isFavoritePurchDir";
     } else if (sIconId === this.createId("Orgdoku")) {
          sTileKey = "isFavoriteOrgdoku";             
     }
 
     // Toggle the visibility for the identified tile in the model
     if (sTileKey) {
         var oModel = this.getView().getModel();
         var bCurrentValue = oModel.getProperty("/" + sTileKey);
         oModel.setProperty("/" + sTileKey, !bCurrentValue); // Toggle visibility
        
     }
     //After toggling, reset the flag after a short delay
     setTimeout(() => {
       isFavoriteIconClicked = false;
       return;
   }, 100);
 
       },


      onSearch: function (event) {
          if (event.getParameter("searchButtonPressed")) {
          //  MessageToast.show("'search' event fired with 'searchButtonPressed' parameter");
            const val = event.getParameters().query;

            var length = this.getView().byId("Scrollcon01").mAggregations['content'].length;
            for (var i = 0; i < length; i++){
              const footer = this.getView().byId("Scrollcon01").mAggregations['content'].at(i).mAggregations['tileContent'].at(0).mProperties.footer;
              const log = footer.toLowerCase().includes(val.toLowerCase());
              if ( log == true )
              {
                this.getView().byId("Scrollcon01").mAggregations['content'].at(i).setVisible(true);
              }
              else
              {
                this.getView().byId("Scrollcon01").mAggregations['content'].at(i).setVisible(false);
              };
            }

            var length = this.getView().byId("Scrollcon02").mAggregations['content'].length;
            for (var j = 0; j < length; j++){
              const footer1 = this.getView().byId("Scrollcon02").mAggregations['content'].at(j).mAggregations['tileContent'].at(0).mProperties.footer;
              const log1 = footer1.toLowerCase().includes(val.toLowerCase());
              if ( log1 == true )
              {
                this.getView().byId("Scrollcon02").mAggregations['content'].at(j).setVisible(true);
              }
              else
              {
                this.getView().byId("Scrollcon02").mAggregations['content'].at(j).setVisible(false);
              };
            }
                       
            var length = this.getView().byId("Scrollcon03").mAggregations['content'].length;
            for (var k = 0; k < length; k++){
              const footer1 = this.getView().byId("Scrollcon03").mAggregations['content'].at(k).mAggregations['tileContent'].at(0).mProperties.footer;
              const log1 = footer1.toLowerCase().includes(val.toLowerCase());
              if ( log1 == true )
              {
                this.getView().byId("Scrollcon03").mAggregations['content'].at(k).setVisible(true);
              }
              else
              {
                this.getView().byId("Scrollcon03").mAggregations['content'].at(k).setVisible(false);
              };
            }  
          }
        }
  });

});
