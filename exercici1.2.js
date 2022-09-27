window.onload= function(){
    let respostesValides=["pedra","paper","tisores"];
    let start = document.getElementById('start');
    let oponent=respostesValides[Math.floor(Math.random() * 3)];
    document.getElementById('pedra').onclick = function(){
        console.log('boto');
        let resposta = "pedra";
        document.getElementById('ans').innerHTML=`Has seleccionat ${resposta}.<br>`;
        document.getElementById('ans').innerHTML+=`El teu oponent ha seleccionat ${oponent}.<br>`;
        if(oponent == 'pedra'){
            document.getElementById('ans').innerHTML+='Heu empatat!';
        }
        else if(oponent=='paper'){
            document.getElementById('ans').innerHTML+='Has perdut!';
        }
        else{
            document.getElementById('ans').innerHTML+='Has guanyat!';
        }
        start.style.display="none";
    }
    document.getElementById('paper').onclick = function(){
        console.log('boto');
        let resposta = "paper";
        document.getElementById('ans').innerHTML=`Has seleccionat ${resposta}.<br>`;
        document.getElementById('ans').innerHTML+=`El teu oponent ha seleccionat ${oponent}.<br>`;
        if(oponent == 'pedra'){
            document.getElementById('ans').innerHTML+='Has guanyat!';
        }
        else if(oponent=='paper'){
            document.getElementById('ans').innerHTML+='Heu empatat!';
        }
        else{
            document.getElementById('ans').innerHTML+='Has perdut!';
        }
        start.style.display="none";
    }
    document.getElementById('tisores').onclick = function(){
        console.log('boto');
        let resposta = "tisores";
        document.getElementById('ans').innerHTML=`Has seleccionat ${resposta}.<br>`;
        document.getElementById('ans').innerHTML+=`El teu oponent ha seleccionat ${oponent}.<br>`;
        if(oponent == 'pedra'){
            document.getElementById('ans').innerHTML+='Has perdut!';
        }
        else if(oponent=='paper'){
            document.getElementById('ans').innerHTML+='Has guanyat!';
        }
        else{
            document.getElementById('ans').innerHTML+='Heu empatat!';
        }
        start.style.display="none";
    }
}
