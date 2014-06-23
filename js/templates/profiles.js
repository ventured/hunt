define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (profiles) {
buf.push("<nav class=\"navbar\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" class=\"navbar-toggle\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"/\" class=\"navbar-brand\"><img src=\"/images/whale.jpg\" width=\"40\" height=\"40\" class=\"img-circle\"/> Hunt</a></div><div id=\"navbar-collapse\" class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"/profiles\">Browse</a></li><li><form role=\"search\" style=\"padding-right: 0\" class=\"navbar-form\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Search\" class=\"form-control\"/></div></form></li></ul></div></div></nav><div class=\"container\"><div class=\"main-content\">");
if ( profiles)
{
buf.push("<ul class=\"media-list\">");
// iterate profiles
;(function(){
  var $$obj = profiles;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var profile = $$obj[$index];

buf.push("<li class=\"media\"><a" + (jade.attr("href", '/profiles/' + (profile.id) + '', true, false)) + " class=\"pull-left\"><img" + (jade.attr("src", profile.profileImageUrl, true, false)) + " width=\"40\" height=\"40\" class=\"img-circle\"/></a><a" + (jade.attr("href", '/profiles/' + (profile.id) + '', true, false)) + "><h4 style=\"display: inline-block\">" + (jade.escape((jade_interp = profile.name) == null ? '' : jade_interp)) + "<small> " + (jade.escape((jade_interp = profile.company) == null ? '' : jade_interp)) + "</small></h4></a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var profile = $$obj[$index];

buf.push("<li class=\"media\"><a" + (jade.attr("href", '/profiles/' + (profile.id) + '', true, false)) + " class=\"pull-left\"><img" + (jade.attr("src", profile.profileImageUrl, true, false)) + " width=\"40\" height=\"40\" class=\"img-circle\"/></a><a" + (jade.attr("href", '/profiles/' + (profile.id) + '', true, false)) + "><h4 style=\"display: inline-block\">" + (jade.escape((jade_interp = profile.name) == null ? '' : jade_interp)) + "<small> " + (jade.escape((jade_interp = profile.company) == null ? '' : jade_interp)) + "</small></h4></a></li>");
    }

  }
}).call(this);

buf.push("</ul>");
}
buf.push("</div></div>");}("profiles" in locals_for_with?locals_for_with.profiles:typeof profiles!=="undefined"?profiles:undefined));;return buf.join("");
}

});