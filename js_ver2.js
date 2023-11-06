const displayUmur = document.querySelector('.umur-display');
const btnHitung = document.querySelector('.btn');

btnHitung.addEventListener('click', hitungAge);

    function hitungAge () {

        const dateTgl = document.getElementById('date').value;
        const date = new Date();
            
        if (dateTgl != "") {
                
            const currentDate = new Date(dateTgl) 
                
            let ageInYears = date.getFullYear() - currentDate.getFullYear();
            let ageInMonth = currentDate.getMonth();
            let ageInDay = currentDate.getDate();
                
            displayUmur.textContent = `Umur saya adalah ${ageInYears} tahun, ${ageInMonth} bulan, dan ${ageInDay} hari`;

        } else {
            alert('silahkan isi terlebih dahulu')
        } 
            
    }