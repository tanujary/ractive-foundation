RactiveF.templates['ux-accordion'] = {"v":3,"t":[{"t":7,"e":"ul","a":{"id":[{"t":2,"r":"guid"}],"class":"accordion","data-accordion":0},"f":[{"t":4,"f":[{"t":4,"f":[{"t":7,"e":"ux-accordionitem","a":{"datamodel":[{"t":2,"r":"."}]}}],"r":"items"}],"n":50,"r":"isDataModel"},{"t":4,"n":51,"f":[{"t":8,"r":"content"}],"r":"isDataModel"}]}]};
RactiveF.templates['ux-accordionitem'] = {"v":3,"t":[{"t":7,"e":"li","a":{"id":[{"t":2,"r":"guid"}],"class":"accordion-navigation"},"f":[{"t":4,"f":[{"t":7,"e":"ux-anchor","f":[{"t":2,"r":"title"}]}," ",{"t":7,"e":"ux-content","f":[{"t":3,"r":"content"}]}],"n":50,"r":"isDataModel"},{"t":4,"n":51,"f":[{"t":16}],"r":"isDataModel"}]}]};
RactiveF.templates['ux-anchor'] = {"v":3,"t":[{"t":7,"e":"a","a":{"id":[{"t":2,"r":"guid"}],"href":[{"t":2,"r":"href"}]},"m":[{"t":4,"f":["target=\"",{"t":2,"r":"target"},"\""],"n":50,"r":"target"}],"v":{"tap":"anchorClicked"},"f":[{"t":4,"f":[{"t":3,"r":"content"}],"n":50,"r":"isDataModel"},{"t":4,"n":51,"f":[{"t":16}],"r":"isDataModel"}]}]};
RactiveF.templates['ux-button'] = {"v":3,"t":[{"t":7,"e":"a","a":{"class":["button ",{"t":2,"r":"class"}]},"m":[{"t":4,"f":["href=\"",{"t":2,"r":"href"},"\""],"r":"href"},{"t":4,"f":[" role=\"",{"t":2,"r":"role"},"\""],"r":"role"},{"t":4,"f":[" aria-label=\"",{"t":2,"r":"ariaLabel"},"\""],"r":"ariaLabel"},{"t":4,"f":[" tabindex=\"",{"t":2,"r":"tabindex"},"\""],"r":"tabindex"}],"v":{"tap":{"m":"clickHandler","a":{"r":[],"s":"[]"}}},"f":[{"t":4,"f":[{"t":2,"r":"text"}],"n":50,"r":"text"},{"t":4,"n":51,"f":[{"t":8,"r":"content"}],"r":"text"}]}]};
RactiveF.templates['ux-col'] = {"v":3,"t":[{"t":7,"e":"div","a":{"class":[{"t":2,"r":"class"}," columns"]},"f":[{"t":16}]}]};
RactiveF.templates['ux-content'] = {"v":3,"t":[{"t":7,"e":"div","a":{"id":[{"t":2,"r":"guid"}],"class":["content ",{"t":4,"f":["active"],"n":50,"r":"active"}]},"f":[{"t":16}]}]};
RactiveF.templates['ux-header'] = {"v":3,"t":[{"t":4,"f":[{"t":7,"e":"h1","m":[{"t":4,"f":["id=\"",{"t":2,"r":"id"},"\""],"r":"id"},{"t":4,"f":["class=\"",{"t":2,"r":"class"},"\""],"r":"class"}],"f":[{"t":16}]}],"n":50,"x":{"r":["level"],"s":"_0==1"}}," ",{"t":4,"f":[{"t":7,"e":"h2","m":[{"t":4,"f":["id=\"",{"t":2,"r":"id"},"\""],"r":"id"},{"t":4,"f":["class=\"",{"t":2,"r":"class"},"\""],"r":"class"}],"f":[{"t":16}]}],"n":50,"x":{"r":["level"],"s":"_0==2"}}," ",{"t":4,"f":[{"t":7,"e":"h3","m":[{"t":4,"f":["id=\"",{"t":2,"r":"id"},"\""],"r":"id"},{"t":4,"f":["class=\"",{"t":2,"r":"class"},"\""],"r":"class"}],"f":[{"t":16}]}],"n":50,"x":{"r":["level"],"s":"_0==3"}}," ",{"t":4,"f":[{"t":7,"e":"h4","m":[{"t":4,"f":["id=\"",{"t":2,"r":"id"},"\""],"r":"id"},{"t":4,"f":["class=\"",{"t":2,"r":"class"},"\""],"r":"class"}],"f":[{"t":16}]}],"n":50,"x":{"r":["level"],"s":"_0==4"}}," ",{"t":4,"f":[{"t":7,"e":"h5","m":[{"t":4,"f":["id=\"",{"t":2,"r":"id"},"\""],"r":"id"},{"t":4,"f":["class=\"",{"t":2,"r":"class"},"\""],"r":"class"}],"f":[{"t":16}]}],"n":50,"x":{"r":["level"],"s":"_0==5"}}," ",{"t":4,"f":[{"t":7,"e":"h6","m":[{"t":4,"f":["id=\"",{"t":2,"r":"id"},"\""],"r":"id"},{"t":4,"f":["class=\"",{"t":2,"r":"class"},"\""],"r":"class"}],"f":[{"t":16}]}],"n":50,"x":{"r":["level"],"s":"_0==6"}}]};
RactiveF.templates['ux-iconbar'] = {"v":3,"t":[{"t":7,"e":"div","a":{"class":["icon-bar ",{"t":2,"r":"upNumClass"}," ",{"t":2,"r":"class"}],"role":"navigation"},"f":[{"t":4,"f":[{"t":4,"f":[{"t":7,"e":"ux-iconbaritem","a":{"datamodel":[{"t":2,"x":{"r":["getItemData","."],"s":"_0(_1)"}}]}}],"r":"items"}],"n":50,"r":"isDataModel"},{"t":4,"n":51,"f":[{"t":8,"r":"content"}],"r":"isDataModel"}]}]};
RactiveF.templates['ux-iconbaritem'] = {"v":3,"t":[{"t":7,"e":"a","a":{"href":[{"t":2,"r":"href"}],"class":["item ",{"t":2,"r":"class"}],"tabindex":"0","role":"button"},"m":[{"t":4,"f":["aria-labelledby=\"",{"t":2,"r":"guid"},"\""],"n":50,"x":{"r":["labels"],"s":"_0!==false"}},{"t":4,"f":["aria-label=",{"t":2,"r":"arialabel"}],"n":50,"r":"arialabel"}],"f":[{"t":7,"e":"img","a":{"src":[{"t":2,"r":"src"}]}}," ",{"t":4,"f":[{"t":7,"e":"label","a":{"id":[{"t":2,"r":"guid"}]},"f":[{"t":4,"f":[{"t":2,"r":"label"}],"n":50,"r":"isDataModel"},{"t":4,"n":51,"f":[{"t":16}],"r":"isDataModel"}]}],"n":50,"x":{"r":["labels"],"s":"_0!==false"}}]}]};
RactiveF.templates['ux-li'] = {"v":3,"t":[{"t":7,"e":"li","a":{"class":[{"t":2,"r":"class"}]},"m":[{"t":4,"f":["role=\"",{"t":2,"r":"role"},"\""],"r":"role"}],"f":[{"t":8,"r":"content"}]}]};
RactiveF.templates['ux-off-canvas'] = {"v":3,"t":[{"t":7,"e":"div","a":{"class":["off-canvas-wrap ",{"t":2,"r":"getExpandedClass"}],"data-offcanvas":0},"f":[{"t":7,"e":"div","a":{"class":"inner-wrap"},"f":[{"t":7,"e":"nav","a":{"class":"tab-bar"},"f":[{"t":4,"f":[{"t":7,"e":"section","a":{"class":"left-small"},"f":[{"t":7,"e":"a","a":{"class":"left-off-canvas-toggle menu-icon","aria-expanded":[{"t":2,"x":{"r":["expandedState"],"s":"_0==\"left\"?\"true\":\"false\""}}]},"v":{"tap":{"n":"updateMenu","a":"left"}},"f":[{"t":7,"e":"span"}]}]}],"n":50,"r":"leftItems"}," ",{"t":7,"e":"section","a":{"class":"middle tab-bar-section"},"f":[{"t":7,"e":"h1","a":{"class":"title"},"f":[{"t":2,"r":"title"}]}]}," ",{"t":4,"f":[{"t":7,"e":"section","a":{"class":"right-small"},"f":[{"t":7,"e":"a","a":{"class":"left-off-canvas-toggle menu-icon","aria-expanded":[{"t":2,"x":{"r":["expandedState"],"s":"_0==\"right\"?\"true\":\"false\""}}]},"v":{"tap":{"n":"updateMenu","a":"right"}},"f":[{"t":7,"e":"span"}]}]}],"n":50,"r":"rightItems"}]}," ",{"t":4,"f":[{"t":7,"e":"aside","a":{"class":"left-off-canvas-menu"},"f":[{"t":7,"e":"ul","a":{"class":"off-canvas-list"},"f":[{"t":4,"f":[{"t":7,"e":"li","f":[{"t":4,"f":[{"t":7,"e":"a","a":{"href":[{"t":2,"r":"href"}]},"m":[{"t":4,"f":["target=\"",{"t":2,"r":"target"},"\""],"r":"target"}],"f":[{"t":2,"r":"label"}]}],"n":50,"r":"href"},{"t":4,"n":51,"f":[{"t":7,"e":"label","f":[{"t":2,"r":"label"}]}],"r":"href"}]}],"r":"leftItems"}]}]}],"n":50,"r":"leftItems"}," ",{"t":4,"f":[{"t":7,"e":"aside","a":{"class":"right-off-canvas-menu"},"f":[{"t":7,"e":"ul","a":{"class":"off-canvas-list"},"f":[{"t":4,"f":[{"t":7,"e":"li","f":[{"t":4,"f":[{"t":7,"e":"a","a":{"href":[{"t":2,"r":"href"}]},"m":[{"t":4,"f":["target=\"",{"t":2,"r":"target"},"\""],"r":"target"}],"f":[{"t":2,"r":"label"}]}],"n":50,"r":"href"},{"t":4,"n":51,"f":[{"t":7,"e":"label","f":[{"t":2,"r":"label"}]}],"r":"href"}]}],"r":"rightItems"}]}]}],"n":50,"r":"rightItems"}," ",{"t":7,"e":"section","a":{"class":"main-section"},"f":[{"t":4,"f":[{"t":3,"r":"mainContent"}],"n":50,"r":"mainContent"},{"t":4,"n":51,"f":[{"t":16}],"r":"mainContent"}]}," ",{"t":7,"e":"a","a":{"class":"exit-off-canvas"},"v":{"tap":"updateMenu"}}]}]}]};
RactiveF.templates['ux-panel'] = {"v":3,"t":[{"t":7,"e":"div","a":{"class":["panel ",{"t":2,"r":"class"}]},"f":[{"t":4,"f":[{"t":2,"r":"text"}],"n":50,"r":"text"},{"t":4,"n":51,"f":[{"t":16}],"r":"text"}]}]};
RactiveF.templates['ux-pricingtable'] = {"v":3,"t":[{"t":7,"e":"ul","a":{"class":"pricing-table"},"f":[{"t":8,"r":"content"}," ",{"t":7,"e":"li","a":{"class":"cta-button"},"f":[{"t":4,"f":[{"t":7,"e":"a","a":{"class":"button disabled","href":"#"},"v":{"tap":"buyNow"},"f":["Coming Soon"]}],"n":50,"x":{"r":["status"],"s":"_0==\"comingsoon\""}}," ",{"t":4,"f":[{"t":7,"e":"a","a":{"class":"button","href":[{"t":2,"r":"href"}]},"v":{"tap":"buyNow"},"f":["Buy Now"]}],"n":50,"x":{"r":["status"],"s":"!_0"}}]}]}]};
RactiveF.templates['ux-row'] = {"v":3,"t":[{"t":7,"e":"div","a":{"class":["row ",{"t":2,"r":"class"}]},"f":[{"t":16}]}]};
RactiveF.templates['ux-sidenav'] = {"v":3,"t":[{"t":7,"e":"ul","a":{"class":"side-nav","role":"navigation"},"m":[{"t":4,"f":["title=\"",{"t":2,"r":"title"},"\""],"r":"title"}],"f":[{"t":4,"f":[{"t":4,"f":[{"t":4,"f":[{"t":7,"e":"ux-li","a":{"class":"heading"},"f":[{"t":2,"r":".label"}]}],"r":"isHeading"}," ",{"t":4,"f":[{"t":7,"e":"ux-li","a":{"class":"divider"}}],"r":"isDivider"}," ",{"t":4,"f":[{"t":7,"e":"ux-li","a":{"class":[{"t":4,"f":["active"],"r":"active"}],"role":"menuitem"},"f":[{"t":7,"e":"a","a":{"href":[{"t":2,"r":".href"}]},"f":[{"t":2,"r":".label"}]}]}],"r":"href"}],"n":52,"r":"items"}],"n":50,"r":"isDataModel"},{"t":4,"n":51,"f":[{"t":16}],"r":"isDataModel"}]}]};
RactiveF.templates['ux-tabarea'] = {"v":3,"t":[{"t":7,"e":"div","a":{"class":"tabs-area"},"f":[{"t":4,"f":[{"t":7,"e":"ux-tablinks","f":[{"t":4,"f":[{"t":7,"e":"ux-tablink","a":{"id":[{"t":2,"r":".id"}],"active":[{"t":2,"r":".active"}]},"f":[{"t":2,"r":".title"}]}],"r":"items"}]}," ",{"t":7,"e":"ux-tabpanes","f":[{"t":4,"f":[{"t":7,"e":"ux-tabpane","a":{"datamodel":[{"t":2,"x":{"r":["tabPaneDataModel","."],"s":"_0(_1)"}}]}}],"r":"items"}]}],"n":50,"r":"isDataModel"},{"t":4,"n":51,"f":[{"t":8,"r":"content"}],"r":"isDataModel"}]}]};
RactiveF.templates['ux-tablink'] = {"v":3,"t":[{"t":7,"e":"li","a":{"class":["tab-title ",{"t":2,"r":"class"}," ",{"t":4,"f":["active"],"n":50,"r":"active"}],"role":"presentational"},"f":[{"t":7,"e":"a","a":{"href":"#"},"v":{"tap":"changeTab"},"f":[{"t":16}]}]}]};
RactiveF.templates['ux-tablinks'] = {"v":3,"t":[{"t":7,"e":"ul","a":{"class":["tabs ",{"t":4,"f":["vertical"],"r":"vertical"}],"role":"tablist"},"f":[{"t":8,"r":"content"}]}]};
RactiveF.templates['ux-tabpane'] = {"v":3,"t":[{"t":7,"e":"section","a":{"class":["content ",{"t":2,"r":"class"}," ",{"t":4,"f":["hide"],"n":50,"x":{"r":["active"],"s":"!_0"}}],"role":"tabpanel","aria-hidden":[{"t":4,"f":["false"],"n":50,"r":"active"},{"t":4,"n":51,"f":["true"],"r":"active"}]},"f":[{"t":4,"f":[{"t":8,"r":"dynamicContent"}],"n":50,"r":"isDataModel"},{"t":4,"n":51,"f":[{"t":16}],"r":"isDataModel"}]}]};
RactiveF.templates['ux-tabpanes'] = {"v":3,"t":[{"t":7,"e":"div","a":{"class":"tabs-content"},"f":[{"t":8,"r":"content"}]}]};