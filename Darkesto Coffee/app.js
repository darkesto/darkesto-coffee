let weather = document.getElementById('weather');

fetch('https://api.aerisapi.com/forecasts/skopje,macedonia?format=json&filter=day&limit=7&fields=periods.weather,periods.maxTempC&client_id=2QnOKafOaZknml11TFISA&client_secret=W9su1rOP2PyCa22NVTXgrPPiSqtfl38oqroGGShz')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        if (!json.success) {
            console.log('Oh no!');
        } else {
            console.log(json);

            //Za sekoj element od tabelata koja mi ja vraka API JSON kreiram  div vo koj ja vnesuvam posakuvanata vrednosta od elementot i na kraj ja dodavam vo div.
            //Malce cuden e ovoj API morav da vlezam prvo vo 0 vrenosta poso responsot mi stigna tabela vo tabela. A mi treba taa sto e vnatre
            json.response[0].periods.forEach(element => {
                let div1 = document.createElement('div')
                div1.innerHTML = element.weather
                weather.appendChild(div1)

                let div2 = document.createElement('div')
                div2.innerHTML = element.maxTempC
                weather.appendChild(div2)
            });

        }
    })
    .catch((error) => {
        console.log('Oh no!');
    });


//NACIN ZA VALIDIRANJE NA FORMULAR

    // myInput.addEventListener('input', function(e) {
    //     var value = e.target.value;
    //     if (value.startsWith('Hello ')) {
    //         isValid = true;
    //     } else {
    //         isValid = false;
    //     }
    // });