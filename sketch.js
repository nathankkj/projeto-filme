let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("red");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(0, 0, 0));
  textAlign(CENTER, CENTER);
  textSize(60);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 20) {
      return "a filha do rei";
    } else {
      if (idade >= 30) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Ladrões de bicicleta";
        }
      } else {
        if (gostaDeFantasia) {
          return "a filha do rei";
        } else {
          return "a grande muralha";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "a filha do rei";
    } else {
      return "a mascara de ferro";
    }
  }
}
