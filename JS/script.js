document.addEventListener('DOMContentLoaded', () => {
    const clockInBtn = document.getElementById('clockInBtn');
    const clockOutBtn = document.getElementById('clockOutBtn');
    const clockEnBtn = document.getElementById('clockEnBtn');
    const recordsList = document.getElementById('recordsList');

    clockInBtn.addEventListener('click', () => {
        registrarPonto('Entrada');
    });

    clockOutBtn.addEventListener('click', () => {
        registrarPonto('Saída');
    });

    clockEnBtn.addEventListener('click', () => {
        registrarPonto('Intervalo');
    });

    function registrarPonto(tipo) {
        const time = new Date().toLocaleString();
        const record = `${tipo}: ${time}`;
        addRecord(record);
    }

    function addRecord(record) {
        let records = JSON.parse(localStorage.getItem('records')) || [];
        records.push(record);
        localStorage.setItem('records', JSON.stringify(records));
        displayRecords();
    }

    function displayRecords() {
        let records = JSON.parse(localStorage.getItem('records')) || [];
        recordsList.innerHTML = "";
        records.forEach(record => {
            const li = document.createElement('li');
            li.textContent = record;
            recordsList.appendChild(li);
        });
    }

    displayRecords();
});




