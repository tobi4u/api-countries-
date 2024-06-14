const fetchCountries = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        return data;
      })
      .catch((error) => {
        console.log(error)
      })

    const mainBody = document.getElementById('main');

    const countries = data.map((country) => {
        const countryDiv = document.createElement("div")
        countryDiv.setAttribute('class', 'flex flex-cols items-center bg-slate-100 w-fit')
        countryDiv.innerHTML = `
        <div class="p-3">
            <img src="${country.flags.png}" alt="${country.name.common}" class="w-32 h-32" />
            <h2 class="text-xl font-bold">${country.name.common}</h2>
            <p>Capital: ${country.capital}</p>
            <p>Region: ${country.region}</p>
            <p>Population: ${country.population}</p>
            <p>Area: ${country.area} km<sup>2</sup></p>

        </div>
        `

    mainBody.appendChild(countryDiv)
    })

    return countries

}

fetchCountries()
