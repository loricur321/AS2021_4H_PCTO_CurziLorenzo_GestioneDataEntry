//dichiaro l'oggetto di persone
var names = new Object();
var i = 0;

jQuery(function() {
    jQuery("#btnInserisci").on("click", function(){
        //ricavo dalla form HTML i valori digitati dall'utente
        var name = document.getElementById("txtNome").value;
        var surname = document.getElementById("txtCognome").value;

        var flag = false;

        //converto tutti i caratteri in minuscolo
        name.toLowerCase();
        surname.toLowerCase();

        //calcolo la lunghezza della stringhe nome e cognome
        var lenghtName = name.length;
        var lenghtSurname = surname.length;

        if((lenghtName < 2) || (lenghtSurname < 2)) //in caso siano minori di 2 avverto l'utente
        {
            jQuery("#Title").html("Attento!");
            jQuery("#paragraph").html("I valori di nome e cognome devono essere di almeno due caratteri!");
            jQuery("#btnSecond").html("Ok");
            jQuery("#btnFirst").html("Ok");
            jQuery("#triggerModal").click();
            flag = true;
        }

        var codeName = name.charCodeAt(); //calcolo il codice ASCII del nome e del cognome
        var codeSurname  = surname.charCodeAt();

        if((codeName < 97 || codeName > 122) || (codeSurname < 97 || codeSurname > 122)) // e verifico che sia compreso tra i caratteri dell'alfabeto
        {
            jQuery("#Title").html("Attento!");
            jQuery("#paragraph").html("I caratteri di nome e cognome devono essere caratteri dell'alfabeto.");
            jQuery("#btnSecond").html("Ok");
            jQuery("#btnFirst").html("Ok");
            jQuery("#triggerModal").click();
            flag = true;
        }

        if(!flag) //in caso i dati vadano bene posso procedere con il resto delle operazioni
        {
            var firstLetter = name.charAt(0);
            var firstLetterCode = firstLetter.charCodeAt(); 

            if(firstLetterCode == 97 || firstLetterCode == 101 || firstLetterCode == 105 || firstLetterCode == 111 || firstLetterCode == 117) //controllo se il nome inizia con una vocale
            {
                var blocco = jQuery("<p>" + name + " " + surname + "</p>");
                blocco.addClass("nominativi");
                jQuery("#nominativi").append(blocco); //e in caso aggiungo il nominativo nella pagina HTML
            }

            //inserisco nell'array il nominativo inserito
            names[i] = {
                nome: name,
                cognome: surname
            } 

            alert(names[i]);

            i++;
        }

    });
});
        

