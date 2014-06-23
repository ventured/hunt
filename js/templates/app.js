define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<nav class=\"navbar\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" class=\"navbar-toggle\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"/\" class=\"navbar-brand\"><img src=\"/images/whale.jpg\" width=\"40\" height=\"40\" class=\"img-circle\"/> Hunt</a></div><div id=\"navbar-collapse\" class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"/profiles\">Browse</a></li><li><form role=\"search\" style=\"padding-right: 0\" class=\"navbar-form\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Search\" class=\"form-control\"/></div></form></li></ul></div></div></nav><div class=\"container\"><div class=\"main-content\"></div></div>");;return buf.join("");
}

});