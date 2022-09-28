let win = 0,lose=0,tie=0;
window.onload= function(){
    let respostesValides=["pedra","paper","tisores"];
    let start = document.getElementById('start');
    let cmpt = document.getElementById('cmpt');
    
    document.getElementById('pedra').onclick = function(){
        let oponent=respostesValides[Math.floor(Math.random() * 3)];
        let resposta = "pedra";
        document.getElementById('ans').innerHTML=`Has seleccionat ${resposta}.<br>`;
        document.getElementById('ans').innerHTML+=`El teu oponent ha seleccionat ${oponent}.<br>`;
        if(oponent == 'pedra'){
            document.getElementById('ans').innerHTML+='Heu empatat!';
            tie+=1;
        }
        else if(oponent=='paper'){
            document.getElementById('ans').innerHTML+='Has perdut!';
            lose+=1;
        }
        else{
            document.getElementById('ans').innerHTML+='Has guanyat!';
            win+=1;
        }
        cmpt.innerHTML=`<br><br>Partides guanyades: ${win}<br>Partides perdudes: ${lose}<br>Partides empatades: ${tie}`;
    }
    document.getElementById('paper').onclick = function(){
        let resposta = "paper";
        let oponent=respostesValides[Math.floor(Math.random() * 3)];
        document.getElementById('ans').innerHTML=`Has seleccionat ${resposta}.<br>`;
        document.getElementById('ans').innerHTML+=`El teu oponent ha seleccionat ${oponent}.<br>`;
        if(oponent == 'pedra'){
            document.getElementById('ans').innerHTML+='Has guanyat!';
            win++;
        }
        else if(oponent=='paper'){
            document.getElementById('ans').innerHTML+='Heu empatat!';
            tie++;
        }
        else{
            document.getElementById('ans').innerHTML+='Has perdut!';
            lose++;
        }
        cmpt.innerHTML=`<br><br>Partides guanyades: ${win}<br>Partides perdudes: ${lose}<br>Partides empatades: ${tie}`;
    }
    document.getElementById('tisores').onclick = function(){
        let oponent=respostesValides[Math.floor(Math.random() * 3)];
        let resposta = "tisores";
        document.getElementById('ans').innerHTML=`Has seleccionat ${resposta}.<br>`;
        document.getElementById('ans').innerHTML+=`El teu oponent ha seleccionat ${oponent}.<br>`;
        if(oponent == 'pedra'){
            document.getElementById('ans').innerHTML+='Has perdut!';
            lose++;
        }
        else if(oponent=='paper'){
            document.getElementById('ans').innerHTML+='Has guanyat!';
            win++;
        }
        else{
            document.getElementById('ans').innerHTML+='Heu empatat!';
            tie++;
        }
        cmpt.innerHTML=`<br><br>Partides guanyades: ${win}<br>Partides perdudes: ${lose}<br>Partides empatades: ${tie}`;
    }
}
