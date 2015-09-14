<%-- Die folgenden vier Zeilen sind ASP.NET-Direktiven, die bei der Verwendung von SharePoint-Komponenten erforderlich sind. --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- Markup und Skript im folgenden Inhaltselement werden im <head> der Seite platziert. --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">

    <title>Phone Book</title>

    <link href="../Content/bootstrap.css" rel="stylesheet" />
    <link href="../Content/App.css" rel="stylesheet" />

    <script src="../Scripts/jquery-1.9.1.js"></script>
    <script src="../Scripts/bootstrap.js"></script>
    <script src="../Scripts/angular.js"></script>
    <script src="../Scripts/angular-route.js"></script>
    <script src="app.js"></script>
    <script src="controllers.js"></script>
    <script src="services.js"></script>

</asp:Content>



<%-- Markup und Skript im folgenden Inhaltselement werden im <body> der Seite platziert. --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <div ng-app="PhoneBookApp">
       <div class="row">
        <div class="col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
            <div class="panel panel-default">
                <div class="panel-heading c-list">
                    <span class="title"><a href="#/">Contacts </a></span>
                    <ul class="pull-right c-controls">
                        <li><a href="#/about"  title="Info"><i class="glyphicon glyphicon-info-sign"></i></a></li>
                        <li><a href="#/add"   title="Add Contact"><i class="glyphicon glyphicon-plus"></i></a></li>
                    </ul>
                </div>
     
                <div id="view" ng-view >
                </div>

            </div>
        </div>
    </div>

    </div>


</asp:Content>
