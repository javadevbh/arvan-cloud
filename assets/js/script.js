function hideAndShow(e,n){$(e).hide(),$(n).on("click",function(){$(e).slideToggle(),$(n).hasClass("active")?$(n).removeClass("active"):$(n).addClass("active")})}function showAndHideTab(n){$(`.${n}-tab`).click(function(){var e="#"+this.id.replace("tab","content");$(`.${n}-content`).removeClass("active"),$(e).addClass("active"),$(`.${n}-tab`).removeClass("active"),$(this).addClass("active")})}$(document).ready(function(){function e(e){$(".active-lang-"+e).on("click",function(){$(".other").toggleClass("show")})}matchMedia("(min-width: 10001px)").matches&&(document.onreadystatechange=function(){"complete"==document.readyState&&($("body").addClass("loaded"),$("body").css({"overflow-y":"visible"}))},swal({title:"یک لحضه وایسا ...",text:"اینجا صرفا یک صفحه غیر رسمی از وب سایت آروان کلود هست!",icon:"warning",button:"بزن بریم!"})),showAndHideTab("product"),showAndHideTab("solution"),$(window).scroll(function(){let e=$(".main-menu"),n=$(window).scrollTop(),a=(200<=n?e.addClass("main-menu-fixed"):e.removeClass("main-menu-fixed"),$(".sub-menu")),t=$(window).scrollTop();200<=t?a.addClass("sub-menu-fixed"):a.removeClass("sub-menu-fixed")}),e("header"),e("footer"),$(".main-menu-content").hide(),$(".main-menu-tab").on("click",function(){let n=$(this).attr("id");var e=n.replace("-tab","");if($("#"+n).hasClass("active"))return $("#"+n).removeClass("active"),$("#"+e).slideUp("slow"),0;$(".main-menu-tab").each(function(e){$(this).attr("id")==n?($(".main-menu-tab,.main-menu-content").eq(e).addClass("active"),$(".main-menu-content").eq(e).slideDown()):($(".main-menu-tab,.main-menu-content").eq(e).removeClass("active"),$(".main-menu-content").eq(e).hide())})}),hideAndShow(".m-change-lang-sub",".m-change-lang"),hideAndShow(".mobile-header .m-show-menu",".mobile-menu-button input");for(let e=1;e<=4;e++)hideAndShow(".m-sub-menu-"+e,".m-item-"+e)});