$(document).ready(function(){

    var leenbedrag;
    var rente;
    var looptijd;
    var cumulatief;

    $("#button").click(function(){
        leenbedrag = $("#leenbedrag").val();
        rente = $("#rente").val()/100;
        looptijd = $("#looptijd").val();
        calc();
    })

    var calc = function(){
        cumulatief = 0;
        $("#cumulatief").empty();
        var rentevoet = (1 + rente) ** (1/12) - 1;
        var maandbedrag = (leenbedrag * rentevoet * (1 + rentevoet) ** looptijd / ((1 + rentevoet) ** looptijd - 1));

        for(var i = 0 ; i < looptijd ; i++){
            cumulatief+=maandbedrag;
            var termijn = $("<div class = 'termijn'></div>");
            var maand = $("<p class = 'mnd'>Maand "+(i+1)+"</p>");
            var bedrag = $("<p>AWG "+cumulatief.toFixed(2)+"</p>");
    
            termijn.append(maand);
            termijn.append(bedrag);
            $("#cumulatief").append(termijn);
        }

        var m = "<h3>Per maand moet <strong>AFL "+maandbedrag.toFixed(2)+"</strong> betaald worden.</h3>";
        var c = "<h3>Na "+looptijd+" maanden is <strong>AFL "+cumulatief.toFixed(2)+"</strong> betaald.</h3>";
        var r = "<h3>Waarvan <strong>AFL "+(cumulatief-leenbedrag).toFixed(2)+"</strong> rente!</h3>";

        $("#renteTotaal").html(m+c+r);
    }

});
