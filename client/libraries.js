// THREEx WindowResize.
var THREEx=THREEx||{};THREEx.WindowResize=function(i,n,t){t=t||function(){return{width:window.innerWidth,height:window.innerHeight}};var e=function(){var e=t();i.setSize(e.width,e.height),n.aspect=e.width/e.height,n.updateProjectionMatrix()};return window.addEventListener("resize",e,!1),{trigger:function(){e()},destroy:function(){window.removeEventListener("resize",e)}}};
