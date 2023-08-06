/** Declaração for
Um laço for é repetido até que a condição especificada seja falsa. O laço for no JavaScript é similar ao Java e C. Uma declaração for é feita da seguinte maneira:

for ([expressaoInicial]; [condicao]; [incremento])
  declaracao
*/
<form name="selectForm">
    <p>
        <label for="tipoMusica">Escolha alguns tipos de música, em seguida, clique no botão abaixo: </label>
        <select id="tipoMusica" name="tipoMusica" multiple="multiple">
            <option selected="selected"> R&B </option>
            <option>Jazz</option>
            <option>Blues</option>
            <option>New Age</option>
            <option>Classico</option>
            <option>Opera</option>
        </select>
    </p>

    <p><input id="btn" type="button" value="Quantos foram selecionados?"></input></p>
</form>

//java script
<script>
function howMany(selectObject) {
  var numeroSelecionadas = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numeroSelecionadas++;
    }
  }
  return numeroSelecionadas;
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  alert('Total de opções selecionadas: ' + howMany(document.selectForm.tipoMusica))
});
</script>