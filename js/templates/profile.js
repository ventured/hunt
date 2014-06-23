define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (profile) {
buf.push("<nav class=\"navbar\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" class=\"navbar-toggle\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"/\" class=\"navbar-brand\"><img src=\"/images/whale.jpg\" width=\"40\" height=\"40\" class=\"img-circle\"/> Hunt</a></div><div id=\"navbar-collapse\" class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"/profiles\">Browse</a></li><li><form role=\"search\" style=\"padding-right: 0\" class=\"navbar-form\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Search\" class=\"form-control\"/></div></form></li></ul></div></div></nav><div class=\"container\"><div class=\"main-content\"><div class=\"row\"><div class=\"col-sm-3 sidebar\"><img" + (jade.attr("src", profile.profileImageUrl, true, false)) + " width=\"100%\" class=\"img-thumbnail\"/></div><div class=\"col-sm-9\"><h2>" + (jade.escape((jade_interp = profile.name) == null ? '' : jade_interp)) + "</h2><h4>" + (jade.escape((jade_interp = profile.company) == null ? '' : jade_interp)) + "</h4><section class=\"profile-section\"><textarea name=\"notes\" placeholder=\"Add your notes.\" rows=\"10\" class=\"form-control editable\">" + (null == (jade_interp = profile.notes) ? "" : jade_interp) + "</textarea></section></div></div><div class=\"matches\"></div></div></div>");}("profile" in locals_for_with?locals_for_with.profile:typeof profile!=="undefined"?profile:undefined));;return buf.join("");
}

});