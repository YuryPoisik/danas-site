
const button = document.querySelector('button');
button.addEventListener('click', () => {
    button.ariaExpanded !== "true" ? document.getElementById("gifka-brand").src = "danas_tongue_01.gif" :
        document.getElementById("gifka-brand").src = "Artefakt_animation_logo_v005_transp.png"
});