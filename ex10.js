/**Uma instrução label checkiandj contém uma instrução label checkj. Se o continue for executado, o programa terminará a iteração atual de checkj e começará a próxima iteração. Toda vez que o continue for executado, checkj recomeçará até que a condição do while for falsa. Quando isto ocorrer checkiandj executará até que sua condição seja falsa.

Se o continue estivesse referenciando checkiandj, o programa deveria continuar do topo de checkiandj. */

checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) == 0) {
          continue checkj;
        }
        console.log(j + " é estranho.");
      }
      console.log("i = " + i);
      console.log("j = " + j);
  }