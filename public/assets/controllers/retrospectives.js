jQuery(function(t){function a(a,e){t("#retrospectives-alert-error").find("h4").html(a),t("#retrospectives-alert-error").find("p").html(e),t("#retrospectives-alert-error").removeClass("hide")}var e="Erro ao Excluir!",i="Não foi possível excluir o Registro, atualize a página e tente novamente.";t(".btn-delete-good").click(function(){var o=t(this).parent().find("input[type=hidden]").val(),n="form[name=delete_good]";t(n).attr("action",t(n).attr("action")+"/"+o),t(n).on("ajax:success",function(a,e){t("#good-"+e.id).remove(),t(n).find("button[data-dismiss=modal]").click(),t(n).attr("action",t(n).attr("action").replace("/"+o,""))}),t(n).on("ajax:error",function(){t(n).find("button[data-dismiss=modal]").click(),a(e,i),t(n).attr("action",t(n).attr("action").replace("/"+o,""))})}),t(".btn-delete-bad").click(function(){var o=t(this).parent().find("input[type=hidden]").val(),n="form[name=delete_bad]";t(n).attr("action",t(n).attr("action")+"/"+o),t(n).on("ajax:success",function(a,e){t("#bad-"+e.id).remove(),t(n).find("button[data-dismiss=modal]").click(),t(n).attr("action",t(n).attr("action").replace("/"+o,""))}),t(n).on("ajax:error",function(){t(n).find("button[data-dismiss=modal]").click(),a(e,i),t(n).attr("action",t(n).attr("action").replace("/"+o,""))})})});