(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/add_to_cart.html",
    "<div class=\"btn btn-primary col-lg-4 col-md-4 col-xs-5 col-sm-3\" ng-click=\"addToCart(product);\" >\n" +
    "  <div ng-show=\"!success\">\n" +
    "    <i class=\"fa fa-cart-plus\"></i>\n" +
    "    Add\n" +
    "  </div>\n" +
    "  <div ng-show=\"success\">\n" +
    "    <i class=\"fa fa-check\"></i>\n" +
    "    Added\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/category_products.html",
    "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"margin-top:3%;\">\n" +
    "\n" +
    "<div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 padding_o\" style=\"margin-bottom:2%;\">\n" +
    "  <div class=\"btn btn-primary\" ng-click=\"handlePriceClick()\">\n" +
    "    Sort by Price\n" +
    "    <span ng-show=\"price === -1\">\n" +
    "      <i class=\"fa fa-arrow-up\"></i>\n" +
    "    </span>\n" +
    "    <span ng-show=\"price === 1 || price === undefined\">\n" +
    "      <i class=\"fa fa-arrow-down\"></i>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_o\">\n" +
    "\n" +
    "  <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 padding_o div-height flex-box-2\" ng-repeat=\"product in products\" style=\"margin-top:5px;\">\n" +
    "  \n" +
    "      <div style=\"margin:5px;\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 my-card flex-box\">\n" +
    "\n" +
    "           <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 padding_o\">\n" +
    "              <!-- <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"> -->\n" +
    "                <img ng-src=\"{{product.pictures[0]}}\" class=\"img-responsive\" />\n" +
    "              <!-- </div> -->\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "            <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n" +
    "                \n" +
    "                <div class=\"product-name\">\n" +
    "                  <a ng-href=\"#/product/{{product._id}}\">\n" +
    "                   \n" +
    "                    <label class=\"control-label cursor\"> {{product.name}}</label>\n" +
    "                  </a>\n" +
    "                </div>\n" +
    "              \n" +
    "                <div class=\"product-cost\">\n" +
    "                  \n" +
    "                  <label class=\"control-label\">{{product.displayPrice}}</label>\n" +
    "                </div>\n" +
    "\n" +
    "                <add-to-cart>\n" +
    "              \n" +
    "                </add-to-cart>\n" +
    "          \n" +
    "            </div>\n" +
    "\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/category_tree.html",
    "<div class=\"category-tree-wrapper\" ng-show=\"category\">\n" +
    "  <div class=\"crumbs\">\n" +
    "    <div class=\"crumb\" ng-repeat=\"ancestor in category.ancestors\">\n" +
    "      <a ng-href=\"#/category/{{ancestor}}\">\n" +
    "        {{ancestor}}\n" +
    "      </a>\n" +
    "      <div class=\"divider\" ng-hide=\"$last\">\n" +
    "        /\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"child-categories\" ng-show=\"children && children.length\">\n" +
    "      <div class=\"divider\">\n" +
    "        /\n" +
    "      </div>\n" +
    "      <div  class=\"child-arrow\"\n" +
    "            ng-init=\"display = false;\"\n" +
    "            ng-click=\"display = !display;\">\n" +
    "        <i class=\"fa fa-chevron-down\"></i>\n" +
    "      </div>\n" +
    "      <div class=\"child-select\" ng-show=\"display\" style=\"z-index:999;\">\n" +
    "        <div ng-repeat=\"child in children\">\n" +
    "          <a ng-href=\"#/category/{{child._id}}\">\n" +
    "            {{child._id}}\n" +
    "          </a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/category_view.html",
    "<category-tree></category-tree>\n" +
    "<category-products></category-products>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/checkout.html",
    "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "  \n" +
    "  <div  ng-repeat=\"item in user.user.data.cart\" class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 padding_o flex-box\" style=\"margin-top:5px;\" >\n" +
    "    \n" +
    "    <div style=\"margin:5px;padding:10px;\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 my-card flex-box\">\n" +
    "\n" +
    "        <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3 padding_o\">\n" +
    "          <img ng-src=\"{{item.product.pictures[0]}}\" class=\"img-responsive\" style=\"height:130px;width:110px;\">\n" +
    "        </div>\n" +
    "    \n" +
    "        <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n" +
    "          \n" +
    "          <div class=\"name\">\n" +
    "             <label class=\"control-label\">{{item.product.name}}</label>\n" +
    "          </div>\n" +
    "          \n" +
    "          <div class=\"price\">\n" +
    "            <label class=\"control-label\">{{item.product.displayPrice}}</label>\n" +
    "          </div>\n" +
    "          \n" +
    "          <div class=\"quantity\">\n" +
    "             <form class=\"form-inline\">\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label for=\"Quantity\">Quantity:</label>\n" +
    "                  <input type=\"number\" class=\"form-control\" ng-model=\"item.quantity\" />\n" +
    "                </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        \n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    \n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_o margin_bottom predefined-margin\">\n" +
    "  <div class=\"btn btn-primary col-lg-3 col-xs-4 col-sm-4 padding_o\" ng-click=\"updateCart()\" style=\"margin:5px;\">\n" +
    "    Update Cart\n" +
    "  </div>\n" +
    " </div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 padding_o margin_bottom\">\n" +
    "  <div style=\"margin:5px;\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 my-card\">\n" +
    "    <h3>\n" +
    "      <i class=\"fa fa-credit-card\"></i>\n" +
    "      Payment\n" +
    "    </h3>\n" +
    "\n" +
    "    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_o\">\n" +
    "        <form class=\"form-inline\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"Credit Card Number:\">Credit Card Number:</label>\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"stripeToken.number\" />\n" +
    "          </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "  <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 padding_o\">\n" +
    "    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_o\">\n" +
    "      <div class=\"btn btn-primary col-lg-4 predefined-margin margin_bottom\" ng-click=\"checkout()\" style=\"margin-bottom:5px;\">\n" +
    "        Check Out\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_o\">\n" +
    "      <div ng-show=\"error\" class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n" +
    "        {{error}}\n" +
    "      </div>\n" +
    "      \n" +
    "      <div ng-show=\"checkedOut\" style=\"margin-bottom:5px;\">\n" +
    "        <label for=\"Checkout\">Checked out successfully!</label>\n" +
    "      </div>\n" +
    "\n" +
    "       <div ng-show=\"checkedOut\" style=\"margin-bottom:5px;\">\n" +
    "        <label for=\"Checkout\">Your Transaction Id: {{id}}</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/nav_bar.html",
    "\n" +
    "\n" +
    "<!--       <div style=\"border:1px solid red;float:left;position:relative;\">\n" +
    "        <a href=\"#/category/Books\">Divyanshu</a>\n" +
    "      </div> -->\n" +
    "\n" +
    "<nav class=\"navbar navbar-inverse\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "          <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "              <span class=\"icon-bar\"></span>                        \n" +
    "            </button>\n" +
    "\n" +
    "              <a class=\"navbar-brand\" href=\"#\">\n" +
    "                 <i class=\"fa fa-apple\" style=\"color:#5bdb48\" aria-hidden=\"true\"></i>\n" +
    "              </a>\n" +
    "\n" +
    "          </div>\n" +
    "          <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n" +
    "            \n" +
    "            <ul class=\"nav navbar-nav\" style=\"margin-top:5px;\">\n" +
    "                  <li>\n" +
    "                       <a href=\"/#/\" class=\"white\">Cart</a>\n" +
    "                  </li>\n" +
    "\n" +
    "                  <li class=\"dropdown\">\n" +
    "                    <a class=\"dropdown-toggle white cursor\" data-toggle=\"dropdown\">Products\n" +
    "                    <span class=\"caret\"></span></a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                      <li><a href=\"#/category/Books\">Books</a></li>\n" +
    "                      <li><a href=\"#/category/Electronics\">Electronics</a></li>\n" +
    "                      <li><a href=\"#/category/Phones\">Phones</a></li>\n" +
    "                    </ul>\n" +
    "                  </li>\n" +
    "\n" +
    "                  <li ng-show=\"user.user\" >\n" +
    "                    <a  class=\"my-font white cursor\">\n" +
    "                     Welcome, {{user.user.profile.username}}\n" +
    "                    </a>\n" +
    "                  </li>\n" +
    "             </ul>\n" +
    "\n" +
    "            \n" +
    "\n" +
    "             <ul class=\"nav navbar-nav navbar-right\" style=\"display:inline-block;\">\n" +
    "                <li >\n" +
    "                  <a href=\"/auth/facebook?redirect=%2Fassessment%2F%23%2F\">\n" +
    "                    <i class=\"fa fa-facebook-square fa-2x white\" aria-hidden=\"true\"></i>\n" +
    "                  </a>\n" +
    "                </li>\n" +
    "\n" +
    "               <li ng-show=\"user.user\" >\n" +
    "                  <a ng-href=\"#/checkout\">\n" +
    "                    <i class=\"fa fa-shopping-cart fa-2x white\"></i>\n" +
    "                  </a>\n" +
    "               </li>\n" +
    "\n" +
    "               <li  ng-show=\"user.user\" >\n" +
    "                <a ng-href=\"#\" class=\"\">\n" +
    "                  <img  ng-src=\"{{user.user.profile.picture}}\" class=\"img-responsive\" width = \"30\"/>\n" +
    "                </a>\n" +
    "               </li>\n" +
    "            </ul>\n" +
    "\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "      </nav>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/product_details.html",
    "<div class=\"product-details\">\n" +
    "  <div class=\"crumbs\">\n" +
    "    <div class=\"crumb\" ng-repeat=\"ancestor in product.category.ancestors\">\n" +
    "      <a ng-href=\"#/category/{{ancestor}}\">\n" +
    "        {{ancestor}}\n" +
    "      </a>\n" +
    "      <div class=\"divider\" ng-hide=\"$last\">\n" +
    "        /\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12 predefined-margin\">\n" +
    "\n" +
    "    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 my-card flex-box\"  style=\"padding:15px;\" >\n" +
    "\n" +
    "    <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 padding_o\">\n" +
    "      <img ng-src=\"{{product.pictures[0]}}\" class=\"img-responsive\" />\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n" +
    "\n" +
    "      <div>\n" +
    "        <label for=\"product.name\">{{product.name}}</label>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <label for=\"product.displayPrice\">{{product.displayPrice}}</label>\n" +
    "      </div>\n" +
    "      <add-to-cart>\n" +
    "        \n" +
    "      </add-to-cart>\n" +
    "    \n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/search_bar.html",
    "<!--\n" +
    "TODO: this HTML should expose a search bar\n" +
    "!-->\n" +
    "\n" +
    "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "\n" +
    " 	<div class=\"form-group has-feedback\">\n" +
    "\n" +
    "      <label class=\"control-label\">Search Made Easy</label>\n" +
    "      <input type=\"text\" class=\"form-control search-bar-input\" ng-model = \"searchText\" placeholder=\"Search Item\" ng-change=\"update()\">\n" +
    "      		<i class=\"glyphicon glyphicon-search form-control-feedback\"></i>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_o\">\n" +
    "\n" +
    "	  <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 padding_o div-height flex-box-2 predefined-margin\" ng-repeat=\"product in results\">\n" +
    "\n" +
    "	  <div style=\"margin:5px;\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 my-card flex-box\">\n" +
    "		  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 padding_o\">\n" +
    "		      <img ng-src=\"{{product.pictures[0]}}\" class=\"img-responsive\" />\n" +
    "		  </div>\n" +
    "	    \n" +
    "		  <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\n" +
    "			    \n" +
    "			    <div class=\"product-name\">\n" +
    "			      <a ng-href=\"#/product/{{product._id}}\">\n" +
    "			       \n" +
    "			        <label class=\"control-label cursor\"> {{product.name}}</label>\n" +
    "			      </a>\n" +
    "			    </div>\n" +
    "		    \n" +
    "			    <div class=\"product-cost\">\n" +
    "			      \n" +
    "			      <label class=\"control-label\">{{product.displayPrice}}</label>\n" +
    "			    </div>\n" +
    "\n" +
    "			    <add-to-cart>\n" +
    "			  \n" +
    "			    </add-to-cart>\n" +
    "	  \n" +
    "	  	  </div>\n" +
    "\n" +
    "	  </div>\n" +
    "\n" +
    "	  </div>\n" +
    "	  </div>\n" +
    "    \n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();
