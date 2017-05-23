function test2017(){
     var summa=0;
     if(document.tests.links[0].checked){summa=summa+1;}

     if(document.tests.spis[2].checked) {summa=summa+1;}

     if (document.tests.braus[3].checked){summa=summa+1;}

     if (document.tests.tab[0].checked && document.tests.tab[1].checked && document.tests.tab[2].checked && document.tests.tab[3].checked)
     {
          alert("Возможно ввести только 2 варианта!")}
     else if(document.tests.tab[0].checked || document.tests.tab[3].checked){
         alert("Возможно ввести только 2 варианта!")
     }
     else if(document.tests.tab[1].checked  && document.tests.tab[2].checked)
         summa=summa+2;
     else if (document.tests.tab[1].checked || document.tests.tab[2].checked)
        summa=summa + 1;


      if (document.tests.form[0].checked && document.tests.form[1].checked && document.tests.form[2].checked && document.tests.form[3].checked)
        {
          alert("Возможно ввести только 2 варианта!")}
      else if(document.tests.form[2].checked || document.tests.form[3].checked){
          alert("Возможно ввести только 2 варианта!")
      }
      else if(document.tests.form[0].checked  && document.tests.form[1].checked)
          summa=summa+2;
      else if (document.tests.form[0].checked || document.tests.form[1].checked)
          summa=summa + 1;

      alert("Ваш результат " +summa+ " из 7 ");
  }