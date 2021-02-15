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
        name = name.toLowerCase();
        surname = surname.toLowerCase();

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

        var flag2 = false;
        var charName = name.split(""); //trasfomrmo le stringhe contenenti nome e cognome in un vettore di char
        var charSurname = surname.split("");

        for(var j = 0; j < charName.length; j++)
        {
            var tmp = charName[j].charCodeAt(); //e tramite l'utilizzo del codice ASCII controllo che ogni carattere sia compreso nell'alfabeto

            if(tmp < 97 || tmp > 122)
            {
                flag2 = true;
            }
        }

        for(var j = 0; j < charSurname.length; j++)
        {
            var tmp = charSurname[j].charCodeAt();

            if(tmp < 97 || tmp > 122)
            {
                flag2 = true;
            }
        }

        if(flag2)
        {
            jQuery("#Title").html("Attento!");
            jQuery("#paragraph").html("I caratteri di nome e cognome devono essere caratteri dell'alfabeto.");
            jQuery("#btnSecond").html("Ok");
            jQuery("#btnFirst").html("Ok");
            jQuery("#triggerModal").click();
        }


        if(!flag && !flag2) //in caso i dati vadano bene posso procedere con il resto delle operazioni
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

            i++;
        }
    });

    //funzione che mostra un modale con all'interno tutti i nominativi inseriti
    jQuery("#btnVisualizza").on("click", function() {
        for(var j = 0; j < i; j++)
        {
            var blocco = jQuery("<li>" + names[j].nome + " " + names[j].cognome + "</li>");
            blocco.addClass("list-group-item");
            jQuery("#listNames").append(blocco);
        }

        jQuery("#triggerList").click();
    });

    jQuery("#btnClose").on("click", function (){
            jQuery(".list-group-item").remove(); //una volta chiuso il modale rimuovi i componenti all'interno della lista
    });

});
        

