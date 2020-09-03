document.addEventListener('click', async e => {
  e.preventDefault();

  if (e.target.className === 'btn btn-info btn-block') {
    const firstBase = document.getElementsByName('firstBase')[0].value
    const secondBase = document.getElementsByName('secondBase')[0].value
    const firstSelect = document.getElementsByName('firstSelect')[0].value
    const secondSelect = document.getElementsByName('secondSelect')[0].value

    const template = await fetch(`https://api.exchangeratesapi.io/latest?base=${firstSelect}&symbols=${secondSelect}`)
    const fromBack = await template.json();
    console.log(fromBack.rates[secondSelect]);
    console.log(fromBack.rates[secondSelect] * firstBase);
    document.getElementsByName('secondBase')[0].value = fromBack.rates[secondSelect] * firstBase
    console.log(fromBack);
  };
});
