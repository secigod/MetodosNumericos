//al iniciar selecciona inicio
init("INCIO");
let answersFinal = [];
let countMenu = 0;
let queastionSeriesSelected;
let isSuccesssfully = false;
let modal = document.getElementById("myModal");
let question = document.getElementById("question");
let sendButton = document.getElementById("sendButton");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let correctAnswer;

//metodo de punto fijo
let dataTable = [];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  question.innerHTML = '';
  sendButton.style.display = 'block';
  modal.style.display = "none";
  answersFinal = [];
  isSuccesssfully = false;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    question.innerHTML = '';
    sendButton.style.display = 'block';
    modal.style.display = "none";
    answersFinal = [];
    isSuccesssfully = false;
  }
}

function openModal(event) {
  queastionSeriesSelected = event.target.id;
  let shuffleList;
  switch (queastionSeriesSelected) {
    case 'AproxNum':
      bundleQuestions = [
        { label: '1-	¿Qué es un método numérico?', id: 1, answers: ['proceso matemático iterativo cuyo objetivo es encontrar la aproximación a una solución', 'proceso logico no iterativo cuyo objetivo es encontrar la aproximación a una solución', 'proceso raciaonal sin comprobación fiable con respuesta aproximada'] },
        { label: '2-	 ¿Qué es un análisis numérico?', id: 2, answers: ['rama de las matemáticas que, mediante el uso de algoritmos iterativos, obtiene soluciones numéricas a problemas', 'Rama exacta y analitica de las amtematicas para llegar a un reusltado', 'metodo poco eficiente para la resolución de problemas'] },
        { label: '3-	¿Qué es una aproximación numérica?', id: 3, answers: ['valor cercano a uno considerado como real o verdadero', 'valor cercano al error', 'valor alejado del valor real'] }];
      break;

    case 'PuntoFijo':
      bundleQuestions = [
        { label: '1-	¿Cuál es la idea principal del método de punto fijo??', id: 1, answers: ['encontrar las raíces de una ecuación al proponerlas como puntos fijos de una formulación alternativa', 'proceso logico no iterativo cuyo objetivo es encontrar la aproximación a una solución', 'proceso raciaonal sin comprobación fiable con respuesta aproximada'] },
        { label: '2-	¿Un punto x se llama punto fijo, sí satisface la ecuación?', id: 2, answers: ['g(x) = x', 'g(f(x))=x', 'g(x)*false(x)=x'] },
        { label: '3-	¿Existen puntos fijos estables e inestables?', id: 3, answers: ['Si', 'No'] }];
      break;

    case 'polinomios':
      bundleQuestions = [
        { label: '1-	¿Cuál es la definición de polinomio de Tylor?', id: 1, answers: ['aproximación polinómica de una función n veces derivable en un punto exacto.', 'aproximación polinómica de una función n veces integrable en un punto exacto.', 'aproximación polinómica de una función n veces derivable sin un punto exacto.'] },
        { label: '2-	¿Por qué se utiliza el Polinomio de Taylor?', id: 2, answers: ['porque es mucho más sencillo trabajar con un polinomio de Taylor que con la propia función porque es mucho más fácil y rápido operar', 'Pórque da la socución mas exacta', 'por el reto de la complejidad'] },
        { label: '3-	Selecciona una aplicación de Tylor', id: 3, answers: ['Resolución de algunas indeterminaciones en el cálculo de límites', 'Aproximación al error absoluto de una función indetemrinada', 'Obtener la recta tangente a una función en determinado punto'] }
      ];
      break;

    case 'descompocición':
      bundleQuestions = [
        { label: '1-	¿Qué dice el teorema de descomposición LU?', id: 1, answers: ['los menores principales de una matriz A de dimensión n son no nulos entonces A admite una descomposición LU', 'los menores principales de una matriz A de dimensión n son nulos entonces A admite una descomposición LU'] },
        { label: '2-	¿Como se obtiene el cálculo efectivo?', id: 2, answers: ['el cálculo efectivo de la factorización LU de una matriz dada, en la práctica se obtienen los elementos de L y de U por identificación de forma recursiva', 'el cálculo efectivo de la factorización LU de una matriz dada, en la práctica se obtienen los elementos de L y de U por identificación de forma estrcuturada', 'el cálculo efectivo de la factorización LU de una matriz dada, en la práctica se obtienen los elementos de L y de U por identificación de forma lineal'] },
      ];
      break;

    case 'bisección':
      bundleQuestions = [
        { label: '1-	¿qué es el método de bisección?', id: 1, answers: ['algoritmo de búsqueda de raíces que trabaja dividiendo el intervalo a la mitad y seleccionando el subintervalo que tiene la raíz', 'algoritmo de búsqueda de exponenciales que trabaja dividiendo el intervalo a la mitad'] },
        { label: '2-	¿En qué se diferencia el método de newton?', id: 2, answers: ['es menos eficiente que el método de Newton, pero es mucho más seguro para garantizar la convergencia', 'es mas eficiente que el método de Newton, pero es mucho menos seguro para garantizar la convergencia.', 'es menos eficiente que el método de Newton y mucho menos seguro para garantizar la convergencia, pero sirve en ocaciones'] },
        { label: '3-	¿a qué tipo de funciones se aplica el método de bisección?', id: 3, answers: ['algebraicas o trascendentes', 'integrales', 'diferenciales'] }
      ];
      break;

    case 'newtonraphson':
      bundleQuestions = [
        { label: '1-	¿que es el método de Newton Raphson?', id: 1, answers: ['procedimiento algorítmico que permite hallar raíces de funciones, conocido un valor numérico cercano a la raíz', 'procedimiento algorítmico que permite hallar puntos no continuos de funciones', 'procedimiento geometrico para hayar raices mediante calculo de matrices'] },
        { label: '2-	¿como puede perder su convergencia cuadratica?', id: 2, answers: ['si la raíz buscada es de multiplicidad algebraica mayor a uno (Una raíz doble, triple,…)', 'si la raiz buscada es negativa', 'si la raiz buscada es imaginaria'] },
        { label: '3-	¿Que sucede cuando la ecuación tiene multiples raices?', id: 3, answers: ['modificar el algoritmo aplicando una nueva fórmula, garantizando así la eficacia y capacidad del método', 'repetir el mismo algoritmo con nuevas variables de entrada', 'concatenar el antiguo algoritmo con el actual para forma una misma formula'] }
      ]
      break;
    default:
      break;
  }
  let counter = 0;
  let disOrder = bundleQuestions.answers;


  bundleQuestions.forEach((Element) => {
    question.innerHTML += `
            <h2>${Element.label}</h2>
            <div id="${Element.label}"><div/>

            `
    Element.answers = Element.answers.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    Element.answers.forEach((labels) => {
      counter++;
      console.log('counter -->', counter);
      var actualAnswer = document.getElementById(Element.label);
      let ids = queastionSeriesSelected + Element.id;
      actualAnswer.innerHTML += `
              <div class="form-check">
              <input class="form-check-input ${ids}" type="checkbox" value="${labels}" id="${ids}" onclick="clearAllRadio(event)">
              <label class="form-check-label" for="${counter}">    
                  ${labels}
                </label>
              </div>
              </br>
`
    })


  })
  modal.style.display = "block";

}

function init(incio) {
  document.getElementById("solution").style.display = "none";

  var i, x, tablinks, doc;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  doc = document.getElementById(incio);
  doc.style.display = "block";
  doc.className += " w3-border-red";
}

function openCity(evt, cityName) {
  let tableData = document.getElementById("solution");

  if (tableData == null) {
    document.getElementById("datatTableHtml").outerHTML = `<div id="solution" class="solution" style="display: none;"></div>`;
  }
     
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-yellow", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-yellow";
}

function openMenu() {
  let tableData = document.getElementById("solution");

  if (tableData == null) {
    document.getElementById("datatTableHtml").outerHTML = `<div id="solution" class="solution" style="display: none;"></div>`;
  }

  if (countMenu === 0) {
    countMenu = 1;
    document.getElementById("menu").style.display = "grid";
    document.getElementById("menu").style.position = "absolute";
    document.getElementById("menu").style.backgroundColor = "rgb(8, 36, 90)";
  } else {
    countMenu = 0;
    document.getElementById("menu").style.display = "none";
  }
}

function openCityMenu(evt, cityName) {
  document.getElementById("solution").style.display = "none";
  let tableData = document.getElementById("solution");

  if (tableData == null) {
    document.getElementById("datatTableHtml").outerHTML = `<div id="solution" class="solution" style="display: none;"></div>`;
  }

  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.style;
  if (countMenu === 0) {
    countMenu = 1;
    document.getElementById("menu").style.display = "grid";
    document.getElementById("menu").style.position = "absolute";
    document.getElementById("menu").style.backgroundColor = "rgb(8, 36, 90)";
  } else {
    countMenu = 0;
    document.getElementById("menu").style.display = "none";
  }


}

function showResult() {
  document.getElementById("solution").style.display = "grid";
}

function clearAllRadio(event) {
  console.log('event ..>' + event.target.value);
  let ids = event.target.id;
  let inputToClear = document.getElementsByClassName(`${ids}`);
  console.log(inputToClear);
  let listKeys = [];
  console.log('inputToClear -->' + JSON.stringify(inputToClear));
  for (let i = 0; i < inputToClear.length; i++) {
    inputToClear[i].checked = false;
  }

  if (answersFinal.length > 0) {
    answersFinal.forEach((element) => {
      console.log('element -->', element);
      listKeys = Object.keys(element);
      console.log(listKeys);
      listKeys.forEach((keysita) => {
        console.log('entro 1-->', keysita, ids);
        if (keysita === ids) {
          console.log('entro 2-->', keysita, ids);
          const index = listKeys.indexOf(element);
          answersFinal.splice(index, 1);
        }
      });

    });
    let objToSend = `{"${ids}": "${event.target.value}"}`;
    console.log('json obj -->', objToSend);
    answersFinal.push(JSON.parse(objToSend));
  } else {
    let objToSend = `{"${ids}": "${event.target.value}"}`;
    console.log('json obj -->', objToSend);
    answersFinal.push(JSON.parse(objToSend));
  }
  event.currentTarget.checked = true;
}
function sendAnswer(event) {
  sendButton.style.display = 'none';
  question.innerHTML = '<center><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></center>';
  switch (queastionSeriesSelected) {
    case 'AproxNum':
      correctAnswer = ['proceso matemático iterativo cuyo objetivo es encontrar la aproximación a una solución', 'rama de las matemáticas que, mediante el uso de algoritmos iterativos, obtiene soluciones numéricas a problemas', 'valor cercano a uno considerado como real o verdadero'];
      break;

    case 'PuntoFijo':
      correctAnswer = ['encontrar las raíces de una ecuación al proponerlas como puntos fijos de una formulación alternativa', 'g(x) = x', 'Si'];
      break;

    case 'polinomios':
      correctAnswer = ['aproximación polinómica de una función n veces derivable en un punto exacto.', 'porque es mucho más sencillo trabajar con un polinomio de Taylor que con la propia función porque es mucho más fácil y rápido operar', 'Resolución de algunas indeterminaciones en el cálculo de límites'];
      break;

    case 'descompocición':
      correctAnswer = ['los menores principales de una matriz A de dimensión n son no nulos entonces A admite una descomposición LU', 'el cálculo efectivo de la factorización LU de una matriz dada, en la práctica se obtienen los elementos de L y de U por identificación de forma recursiva',]
      break;

    case 'bisección':
      correctAnswer = ['algoritmo de búsqueda de raíces que trabaja dividiendo el intervalo a la mitad y seleccionando el subintervalo que tiene la raíz', 'es menos eficiente que el método de Newton, pero es mucho más seguro para garantizar la convergencia', 'algebraicas o trascendentes']
      break;

    case 'newtonraphson':
      correctAnswer = ['procedimiento algorítmico que permite hallar raíces de funciones, conocido un valor numérico cercano a la raíz', 'si la raíz buscada es de multiplicidad algebraica mayor a uno (Una raíz doble, triple,…)', 'modificar el algoritmo aplicando una nueva fórmula, garantizando así la eficacia y capacidad del método'];
      break;
    default:
      break;
  }
  let answersSeparetesFinal = [];
  answersFinal.forEach((element) => {
    for (const [key, value] of Object.entries(element)) {
      answersSeparetesFinal.push(value);
    }
  });

  console.log('answersSeparetesFinal -->', answersSeparetesFinal);
  for (let i = 0; i < answersSeparetesFinal.length; i++) {
    const element = answersSeparetesFinal[i];
    console.log('element -->', element);
    if (correctAnswer.includes(element)) {
      isSuccesssfully = true;
      continue;
    } else {
      isSuccesssfully = false;
      break;
    }
  }

  if (isSuccesssfully) {
    question.innerHTML = '<center><div class="alert alert-success" role="alert">Todas las preguntas fueron correctas</div></center>';
  } else {
    question.innerHTML = '<center><div class="alert alert-danger" role="alert">Fallaste el examen :(</div></center>';
  }
  console.log('correctAnswer -->', correctAnswer, ' nad  isSuccesssfully -->', isSuccesssfully);
}

function clearTable() {
  let tableData = document.getElementById("solution");
  
  console.log('tableData -->',tableData);
  
  if (tableData == null) {
    document.getElementById("datatTableHtml").outerHTML = `<div id="solution" class="solution" style="display: none;"></div>`;
  }

  console.log('entro equisde');
  
}
//para metodo de punto fijo
function showResultPuntoFijo() {
  clearTable();

  let funct = document.getElementById("formulaPuntoFIjo").value;
  let xo = document.getElementById("xoPuntoFijo").value;
  let tol = document.getElementById("tolPuntoFijo").value;
  let masit = document.getElementById("maxItPuntoFijo").value;

  if (funct == '' || funct == null || funct == undefined ||
    xo == '' || xo == null || xo == undefined ||
    tol == '' || tol == null || tol == undefined ||
    masit == '' || masit == null || masit == undefined
  ) {
    alert("Favor de completar todos los campos");
  } else {
    let resultado = puntoFijo(String(funct), xo, tol, masit);
    console.log('resultado -->', resultado);
  }
}

function puntoFijo(g, x0, tol, maxIter) {
  dataTable = [];
  document.getElementById("solution").style.innerHTML = "";
  let iter = 0;
  let error = parseFloat(tol)/100;
  if (error>1) {
    alert("El error debe ser menor al 100%");
  }
  let x = parseFloat(x0);
  let blocktoDisplay = document.getElementById("solution");

  while (iter < maxIter) {

    let x_next = newResult(g, x);  // Calcula la siguiente aproximación usando g(x) 
    if (x_next == 'error') {
      alert("Función no valida, favor de verificar su escritura");
      break;
      }
    error = Math.abs((x_next - x) / ((x_next > x) ? x_next : x) * 100);  // Calcula el error
    // Incrementa el contador de iteraciones
    dataTable.push({ i: iter, Xo: x, x1: x_next, err: error });
    if (Math.abs(x_next - x) < parseFloat(tol)) {
      document.getElementById("solution").outerHTML = `<table id="datatTableHtml"  class="table table-bordered table-dark"><thead><tr><th scope="col">#</th><th scope="col">Xo</th><th scope="col">Xo+1</th><th scope="col">Error%</th></tr></thead><tbody id="tableData"></tbody></table>`

      dataTable.forEach((element) => {
        document.getElementById("tableData").innerHTML += `<tr><th scope="row">${element.i}</th><td>${element.Xo}</td><td>${element.x1}</td><td>${element.err}</td></tr>`;
      });
      console.log(dataTable);
      return x_next;
    }
    x = parseFloat(x_next);  // Actualiza x
    iter++;
  }

  // Devuelve el resultado aproximado
  alert("El método no convergió en el número máximo de iteraciones");
  document.getElementById("solution").outerHTML = `<table id="datatTableHtml"  class="table table-bordered table-dark"><thead><tr><th scope="col">#</th><th scope="col">Xo</th><th scope="col">Xo+1</th><th scope="col">Error%</th></tr></thead><tbody id="tableData"></tbody></table>`

  dataTable.forEach((element) => {
    document.getElementById("tableData").innerHTML += `<tr><th scope="row">${element.i}</th><td>${element.Xo}</td><td>${element.x1}</td><td>${element.err}</td></tr>`;
  });
  console.log('dataTable -->', dataTable);

  throw new Error('El método no convergió en el número máximo de iteraciones');

}

function newResult(g, x) {
  const f = math.parse(g);
  let simplified = math.simplify(f);

  try {
    simplified = simplified.evaluate({ x: parseFloat(x) });
  } catch (error) {
    console.log('errorsito -->', error);
    return 'error';
  }
  return simplified;
}

function showBisección() {
  clearTable();

  let funct = document.getElementById("formulaBiseccion").value;
  let xo = document.getElementById("xoBiseccion").value;
  let tol = document.getElementById("xiBiseccion").value;
  let masit = document.getElementById("maxItBiseccion").value;

  if (funct == '' || funct == null || funct == undefined ||
    xo == '' || xo == null || xo == undefined ||
    tol == '' || tol == null || tol == undefined ||
    masit == '' || masit == null || masit == undefined
  ) {
    alert("Favor de completar todos los campos");
  } else {
    let resultado = biseccion(String(funct), xo, tol, masit);
    console.log('resultado -->', resultado);
  }
}

function biseccion(func, xo, tol, masit) {
  dataTable = [];
  let iter = 0;
  let error = parseFloat(tol);
  let xb = parseFloat(tol);
  let xa = parseFloat(xo);
  let xr = (xa + xb) / 2;
  let firstResult = newResult(func, xa);
  let secondResult = newResult(func, xr);
  let change = firstResult * secondResult;

  while (iter < masit) {
    if (firstResult == 'error' || secondResult == 'error') {
      alert("Función no valida, favor de verificar su escritura");
      break;
    }
    if (iter == 0) {
      dataTable.push({ i: (iter + 1), Xa: xa, Xr: xr, Xb: xb, diff: change });
    } else {
      if (change < 0) {
        xb = xr;
        xr = (xa + xb) / 2;

        secondResult = newResult(func, xr);
      } else {

        xa = xr;
        xr = (xa + xb) / 2;

        firstResult = secondResult;
        secondResult = newResult(func, xr);
      }

      change = firstResult * secondResult;

      dataTable.push({ i: (iter + 1), Xa: xa, Xr: xr, Xb: xb, diff: change });
    }

    // Incrementa el contador de iteraciones
    iter++;

    if (iter >= parseFloat(masit)) {
      let finalXr;
      document.getElementById("solution").outerHTML = `<table id="datatTableHtml" class="table table-bordered table-dark"><thead><tr><th scope="col">#</th><th scope="col">Xa</th><th scope="col">Xr</th><th scope="col">Xb</th><th scope="col">𝑓(𝑥𝑎 ) ∗ 𝑓(𝑥𝑟)</th></tr></thead><tbody id="tableData"></tbody></table>`
      dataTable.forEach((element) => {
        document.getElementById("tableData").innerHTML += `<tr><th scope="row">${element.i}</th><td>${element.Xa}</td><td>${element.Xr}</td><td>${element.Xb}</td><td>${element.diff}</td></tr>`;
        finalXr = element.Xr;
      });
      console.log(dataTable);
      return finalXr;
    }

  }
}

function showNewton() {
  clearTable();
  let funct = document.getElementById("formulaNewton").value;
  let xo = document.getElementById("valorInicialNewton").value;
  let masit = document.getElementById("iteracionesNewton").value;

  if (funct == '' || funct == null || funct == undefined ||
    xo == '' || xo == null || xo == undefined ||
    masit == '' || masit == null || masit == undefined
  ) {
    alert("Favor de completar todos los campos");
  } else {
    let resultado = newton(String(funct), xo, masit);
    console.log('resultado -->', resultado);
  }

}

function newton(func, xo, masit) {
  dataTable = [];
  document.getElementById("solution").style.innerHTML = "";
  let iter = 0;
  let xa = parseFloat(xo);
    
  //funcion derivada
  let derivateFunc = math.derivative(func,'x').toString();

  let originalResult;
  let derivateFuncResult;

  let newXr;

  while (iter < masit) {

    originalResult = newResult(func,xa);
    derivateFuncResult = newResult(derivateFunc,xa);

    if (originalResult == 'error' || derivateFuncResult == 'error') {
      alert("Función no valida, favor de verificar su escritura");
      break;
    }

    newXr = xa - ((originalResult)/(derivateFuncResult));

    dataTable.push({ i: (iter + 1), Xn:xa, Xr: newXr });

    xa = newXr;
    // Incrementa el contador de iteraciones
    iter++;

    if (iter >= parseFloat(masit)) {
      let finalXr;
      document.getElementById("solution").outerHTML = `<table id="datatTableHtml" class="table table-bordered table-dark"><thead><tr><th scope="col">#</th><th scope="col">Xa</th><th scope="col">Xr</th></tr></thead><tbody id="tableData"></tbody></table>`
      dataTable.forEach((element) => {
        document.getElementById("tableData").innerHTML += `<tr><th scope="row">${element.i}</th><td>${element.Xn}</td><td>${element.Xr}</td></tr>`;
        finalXr = element.Xr;
      });
      console.log(dataTable);
      return finalXr;
    }

  }
}
