define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (profiles) {
buf.push("<nav class=\"navbar\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" class=\"navbar-toggle\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"/\" class=\"navbar-brand\"><img src=\"/images/whale.jpg\" width=\"40\" height=\"40\" class=\"img-circle\"/> Hunt</a></div><div id=\"navbar-collapse\" class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"/profiles\">Browse</a></li><li><form role=\"search\" style=\"padding-right: 0\" class=\"navbar-form\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Search\" class=\"form-control\"/></div></form></li></ul></div></div></nav><div class=\"container\"><div class=\"main-content\"><div class=\"text-center\"><h1>Unpitch Like a Boss</h1><p>Don't look like an idiot. Collaborate with other attendees and read up beforehand.</p></div><br/><br/><div class=\"featured\">");
if ( profiles)
{
buf.push("<div class=\"row\">");
// iterate profiles
;(function(){
  var $$obj = profiles;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var profile = $$obj[$index];

buf.push("<div class=\"col-xs-6 col-sm-3\"><div class=\"text-center\"><div class=\"profile-card\"><a" + (jade.attr("href", '/profiles/' + (profile.id) + '', true, false)) + "><span class=\"img-thumbnail\"><div" + (jade.attr("style", 'background-image: url(' + (profile.profileImageUrl) + ')', true, false)) + " class=\"profile-img\"></div></span><h4>" + (null == (jade_interp = profile.name) ? "" : jade_interp) + "</h4></a><h6>" + (jade.escape((jade_interp = profile.company) == null ? '' : jade_interp)) + "");
if ( profile.title)
{
buf.push("<br/><small>" + (null == (jade_interp = profile.title) ? "" : jade_interp) + "</small>");
}
buf.push("</h6></div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var profile = $$obj[$index];

buf.push("<div class=\"col-xs-6 col-sm-3\"><div class=\"text-center\"><div class=\"profile-card\"><a" + (jade.attr("href", '/profiles/' + (profile.id) + '', true, false)) + "><span class=\"img-thumbnail\"><div" + (jade.attr("style", 'background-image: url(' + (profile.profileImageUrl) + ')', true, false)) + " class=\"profile-img\"></div></span><h4>" + (null == (jade_interp = profile.name) ? "" : jade_interp) + "</h4></a><h6>" + (jade.escape((jade_interp = profile.company) == null ? '' : jade_interp)) + "");
if ( profile.title)
{
buf.push("<br/><small>" + (null == (jade_interp = profile.title) ? "" : jade_interp) + "</small>");
}
buf.push("</h6></div></div></div>");
    }

  }
}).call(this);

buf.push("</div>");
}
buf.push("</div></div></div>");}("profiles" in locals_for_with?locals_for_with.profiles:typeof profiles!=="undefined"?profiles:undefined));;return buf.join("");
}

});