const background = document.querySelector('.background');
const percentage = document.querySelector('.percentage');


let loading = 0;
document.addEventListener('DOMContentLoaded', function () {
    let percentageHandler = setInterval(() => {
        loading++;
        if (loading >= 100) clearInterval(percentageHandler)
        percentage.innerHTML = `${loading}%`;
        percentage.style.opacity = `${ loading / 100 }`;
        background.style.filter = `blur(${ 5 - (loading / 20 )}px)`;
    }, 30);
});