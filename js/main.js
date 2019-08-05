//Making it pwa
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(function(){
    console.log('SW registered');
  });
}

var awesome_message = [
    {
        quote: "Pessoas não fracassam. Elas simplesmente desistem.",
        author: "Henry Ford"
    }, 
    {
        quote: "Tentar e falhar é, pelo menos, aprender. Não chegar a tentar é sofrer a inestimável perda do que poderia ter sido.",
        author: "Albino Teixeira"
    }, 
    {
        quote: "A tentação de desistir será um pouco maior antes de você estar prestes a conseguir.",
        author: "Provérbio Chinês"
    }, 
    {
        quote: "Se você pode sonhar, você pode realizar.",
        author: "Walt Disney"
    }, 
    {
        quote: "As pessoas dizem frequentemente que a motivação não dura. Bem, nem o banho e é por isso que ele é recomendado diariamente.",
        author: "Zig Ziglar"
    },
    {
        quote: "No que diz respeito ao empenho, ao compromisso, ao esforço, à dedicação, não existe meio termo. Ou você faz uma coisa bem feita ou não faz.",
        author: "Ayrton Senna"
    },
    {
        quote: "Se você pensa que consegue fazer algo ou pensa que não consegue fazer algo, você está certo.",
        author: "Henry Ford"
    },
    {
        quote: "Tente uma, duas, três vezes e se possível tente a quarta, a quinta e quantas vezes for necessário. Só não desista nas primeiras tentativas, a persistência é amiga da conquista. Se você quer chegar onde a maioria não chega, faça o que a maioria não faz.",
        author: "Bill Gates"
     },
     {
        quote: "Insanidade é continuar fazendo sempre a mesma coisa e esperar resultados diferentes.",
        author: "Albert Einstein"
     },
     {
        quote: "Podemos facilmente perdoar uma criança que tem medo do escuro; a real tragédia da vida é quando os homens têm medo da luz.",
        author: "Platão"
     }
    // {
    //     quote: "",
    //     author: ""
    // },
  ];

var awesome_message_text = document.getElementById('awesome_message_text');

function randAwesome() {
    var randIdx = Math.floor(Math.random() * awesome_message.length);
    var randAwesome = awesome_message[randIdx];
    awesome_message_text.innerHTML = "\"" + randAwesome.quote + "\" - " + randAwesome.author;
}

// var awesome_message_share = document.getElementById('awesome_message_share');

// awesome_message_share.addEventListener('click', event => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Be awesome messages!',
//         text: awesome_message_text
//       }).then(() => {
//         alert('Compartilhado com sucesso!');
//       })
//       .catch(console.error);
//     } else {
//       // fallback
//     }
//   });