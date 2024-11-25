sap.ui.define([

  "sap/ui/model/json/JSONModel"

], function (JSONModel) {

  "use strict";

  return JSONModel.extend("buyershub.model.appmodel", {

    constructor: function () {

      // create data

      var oData = {
        "bVisHome" : false,
        "bVisSupp" : false,
        "bVisParts": false,
        "bVisApp"  : false,
        "bVisAna"  : false,
        "bVisNews" : false,
        "bVisHelp" : false,
        "bVisSet"  : false,

        "slideTileCollection1": [
          {
            "tileId": 1,
            "image": "/Images/bshnews1.jpg",
            "text": "BSH Growth and Value Creation Strategy 2030:Strategy News on We. Act. Smartly in Sustainability",
            "news": "B/S/H News",
            "url": "https://google.com"
          },
          {
            "tileId": 2,
            "image": "/Images/BSHnews3.png",
            "text": "BSH celebrates 100 years of IFA: Bosch highlights 2024",
            "news": "B/S/H News",
            "url": "http://www.sap.com"
          },
          {
            "tileId": 3,
            "image": "/Images/bshnews2.png",
            "text": "German Federal Chancellor Olaf Scholz visits the IFA booths of Bosch and Siemens",
            "news": "B/S/H News",
            "url": "https://www.help.sap.com"
          }
        ],

        "slideTileCollection2": [
          {
            "tileId": 1,
            "image": "/Images/PeopleAward1.png",
            "text": "BSH Growth and Value Creation Strategy 2030:Strategy News on We. Act. Smartly in Sustainability",
            "news": "B/S/H News",
            "url": "https://intranet.bsh-group.com/pages/viewpage.action?pageId=1396381368"
          },
          {
            "tileId": 2,
            "image": "/Images/BSH Award.png",
            "text": "it's under Construction",
            "news": "B/S/H News",
            "url": "https://intranet.bsh-group.com/pages/viewpage.action?pageId=1396381368"
          },
          {
            "tileId": 3,
            "image": "/Images/PeopleAward1.png",
            "text": "German Federal Chancellor Olaf Scholz visits the IFA booths of Bosch and Siemens",
            "news": "B/S/H News",
            "url": "https://intranet.bsh-group.com/pages/viewpage.action?pageId=1396381368"
          }
        ],
        "generalTopics": [
          {
            "tileId": 1,
            "image": "/Images/BSHIntranet.png",
            "text": "BSH Intranet",
            "url": "https://intranet.bsh-group.com/#all-updates"
          },
          {
            "tileId": 2,
            "image": "/Images/BSHPortal.png",
            "text": "BSH Portal",
            "url": "https://portal.bshg.com/irj/portal"
          },
          {
            "tileId": 3,
            "image": "/Images/GPUTeam.png",
            "text": "GPU TeamSpace",
            "url": "https://emea-teamspace.bshg.com/sites/00011094/SitePages/Home.aspx"
          },
          {
            "tileId": 4,
            "image": "/Images/ITPortal.png",
            "text": "IT Portal",
            "url": "http://servicedesk.bshg.com/"
          },
          {
            "tileId": 5,
            "image": "/Images/OrgDoku.png",
            "text": "OrgDoku Purchasing",
            "url": "https://orgdoku.bsh-group.com/document-list/MCW/regulation/"
          }
        ],
        "operationalTopics": [
          {
            "tileId": 1,
            "image": "/Images/BSHIntranet.png",
            "text": "BSH Purchasing Portal",
            "url": "https://intranet.bsh-group.com/#all-updates"
          },
          {
            "tileId": 2,
            "image": "/Images/BSHPortal.png",
            "text": "BSH Purchasing Directory",
            "url": "https://portal.bshg.com/irj/portal?NavigationTarget=navurl://5a8b4fe33685779b7adebaba1c2d70e9&ExecuteLocally=true&PrevNavTarget=navurl://067d09ff20f8c40bfe8135d80b8b372f&NavMode=10&CurrentWindowId=WID1574685092078"
          },
          {
            "tileId": 3,
            "image": "/Images/GPUTeam.png",
            "text": "ESN Catalog",
            "url": "https://portal.bshg.com/irj/portal?NavigationTarget=navurl://5a8b4fe33685779b7adebaba1c2d70e9&ExecuteLocally=true&PrevNavTarget=navurl://067d09ff20f8c40bfe8135d80b8b372f&NavMode=10&CurrentWindowId=WID1574685092078"
          },
          {
            "tileId": 4,
            "image": "/Images/ITPortal.png",
            "text": "Docu Sign",
            "url": "https://stfs.bshg.com/adfs/ls/idpinitiatedsignon.aspx?loginToRp=https://account.docusign.com/organizations/32bb9fa3-acc0-4d5e-bc99-fa75f8bc127b/saml2"
          },
          {
            "tileId": 5,
            "image": "/Images/OrgDoku.png",
            "text": "SPEM",
            "url": "https://portal.bshg.com/irj/portal?NavigationTarget=navurl%3A%2F%2F4ee906d5b7b968e36b435212ebccf93b&sapDocumentRenderingMode=Edge&NavigationContext=navurl%3A%2F%2F164e8c5aa28b19686110093319067fa2&PrevNavTarget=navurl%3A%2F%2F4ee906d5b7b968e36b435212ebccf93b&TarTitle=Home%20Evaluation%20Approver&NavMode=2&CurrentWindowId=WID1677763790952"
          },
          {
            "tileId": 6,
            "image": "/Images/OrgDoku.png",
            "text": "SURIM",
            "url": "https://portal.bshg.com/irj/portal?NavigationTarget=navurl%3A%2F%2F1d41ac43b693b7a90a743eb19705727d&sapDocumentRenderingMode=Edge&NavigationContext=navurl%3A%2F%2Fbf74938c67f8e3a847a88c28ddc9c846&PrevNavTarget=navurl%3A%2F%2F1d41ac43b693b7a90a743eb19705727d&TarTitle=Home%20Supplier%20Risk%20Mgmt&NavMode=2&CurrentWindowId=WID1677744303031"
          },
          {
            "tileId": 7,
            "image": "/Images/OrgDoku.png",
            "text": "Tool Database",
            "url": "https://portal.bshg.com/irj/portal?NavigationTarget=navurl%3A%2F%2Fcf0e89b245b1aa353a7514fece6b5269&sapDocumentRenderingMode=Edge&PrevNavTarget=navurl%3A%2F%2Fcf0e89b245b1aa353a7514fece6b5269&TarTitle=Tool%20database&NavMode=2&CurrentWindowId=WID1677763790952"
          },
          {
            "tileId": 8,
            "image": "/Images/OrgDoku.png",
            "text": "Audit Management",
            "url": "https://portal.bshg.com/irj/portal?NavigationTarget=navurl%3A%2F%2F279f74bc87e9937822ae8256eadb01b0&PrevNavTarget=navurl%3A%2F%2F279f74bc87e9937822ae8256eadb01b0&NavMode=10&CurrentWindowId=WIDx1677766007904"
          }
        ],
        "tools": [
          {
            "tileId": 1,
            "image": "/Images/Jaggaer.png",
            "text": "Jaggaer",
            "url": "https://app11.jaggaer.com/sso/bsh"
          },
          {
            "tileId": 2,
            "image": "/Images/Coupa.png",
            "text": "Coupa",
            "url": "https://bsh-test.coupahost.com/requisition_headers"
          }
        ]
        
      };

      // call super constructor

      JSONModel.call(this, oData);

    }

  });

});
