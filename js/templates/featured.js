define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (profiles) {
buf.push("<div class=\"featured\">");
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
buf.push("</div>");}("profiles" in locals_for_with?locals_for_with.profiles:typeof profiles!=="undefined"?profiles:undefined));;return buf.join("");
}

});