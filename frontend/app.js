async function compareWeather() {
    const city = document.getElementById('city').value;
    const res = await fetch(`/compare?city=${encodeURIComponent(city)}`);
    const data = await res.json();
  
    let html = '';
    data.forEach(api => {
      html += `
        <div>
          <h3>${api.source}</h3>
          ${api.error ? `<p>Error: ${api.error}</p>` : `
          <p>Temperature: ${api.temp}°C</p>
          <p>Description: ${api.description}</p>`}
        </div>
      `;
    });
    document.getElementById('results').innerHTML = html;
  }
  