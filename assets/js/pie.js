$(document).ready(function () {
      Parse.initialize("TrjA8LPCC4ONymlTyV86tdISYzlOelDVfvSBEPCv", "qWoj6q116WqoLDQuYb5kuCMuVIgw0M6AZCExscDJ");
      var vote = Parse.Object.extend("vote");
      var query = new Parse.Query(vote);
      query.descending("vote_num");

      query.find({
         success: function(results) {
            var object1={};
            var object2={};
            for (var i = 0; i < 4; i++) {
               var object = results[i];
               object1[i] = object.get('school_name');
               object2[i] = object.get('vote_num');
            }

            var dataSet = [
                
                { label: object1[0] , data: object2[0], color: "#FF0000" },
                { label: object1[1] , data: object2[1], color: "#BBFF00" },
                { label: object1[2] , data: object2[2], color: "#33CCFF" },
                { label: object1[3] , data: object2[3], color: "#D28EFF" },
            ];
            var options = {
                  series: {
                    pie: {
                        show: true,                
                        label: {
                            show:true,
                            radius: 0.8,
                            formatter: function (label, series) {                
                                return '<div style="border:1px solid grey;font-size:8pt;text-align:center;padding:5px;color:white;">' +
                                label + ' : ' +
                                Math.round(series.percent) +
                                '%</div>';
                            },
                            background: {
                                opacity: 0.8,
                                color: '#000'
                            }
                        }
                    }
                  }
                }
            $.plot($("#flot-placeholder"), dataSet, options);/*顯示圓餅圖*/
                  
         },
         error: function(error) {
            alert("Error: " + error.code + " " + error.message);
         }
      });
    $.fn.showMemo = function () {
        $(this).bind("plothover", function (event, pos, item) {
            if (!item) { return; }
     
            var html = [];
            var percent = parseFloat(item.series.percent).toFixed(2);        
     
            html.push("<div style='border:1px solid grey;background-color:",
                 item.series.color,
                 "'>",
                 "<span style='color:white'>",
                 item.series.label,
                 " : ",
                 $.formatNumber(item.series.data[0][1], { format: "#,###", locale: "us" }),
                 " (", percent, "%)",
                 "</span>", 
                 "</div>");
            $("#flot-memo").html(html.join(''));
        });
    }
});