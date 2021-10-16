const vtnDesayuno = document.getElementById("dolce");
const vtnDesayuno2 = document.getElementById("m_dolce");
const vtnDesayuno3 = document.getElementById("s_dolce");
const vtnDesayuno4 = document.getElementById("sd_dolce");
const btnCerrar = document.getElementsByClassName("btn_cerrar");





function abrirVentana(parametro) {
    if (parametro == "btn_1") {
        if (vtnDesayuno.style.display === "none") {
            vtnDesayuno.style.display = "flex";
        } else {
            vtnDesayuno.style.display = "none";
        }
    }
    if (parametro == "btn_2") {
        if (vtnDesayuno2.style.display === "none") {
            vtnDesayuno2.style.display = "flex";
        } else {
            vtnDesayuno2.style.display = "none";
        }
    }

    if (parametro == "btn_3") {
        if (vtnDesayuno3.style.display === "none") {
            vtnDesayuno3.style.display = "flex";
        } else {
            vtnDesayuno3.style.display = "none";
        }
    }
    if (parametro == "btn_4") {
        if (vtnDesayuno4.style.display === "none") {
            vtnDesayuno4.style.display = "flex";
        } else {
            vtnDesayuno4.style.display = "none";
        }
    }

};

function cerrarVentana(parametro) {
    if (parametro == 'dolce') {
        if (vtnDesayuno.style.display === "flex") {
            vtnDesayuno.style.display = "none";
        } else {
            vtnDesayuno.style.display = "flex";
        }
    }
    if (parametro == 'm_dolce') {
        if (vtnDesayuno2.style.display === "flex") {
            vtnDesayuno2.style.display = "none";
        } else {
            vtnDesayuno2.style.display = "flex";
        }
    }
    if (parametro == 's_dolce') {
        if (vtnDesayuno3.style.display === "flex") {
            vtnDesayuno3.style.display = "none";
        } else {
            vtnDesayuno3.style.display = "flex";
        }
    }
    if (parametro == 'sd_dolce') {
        if (vtnDesayuno4.style.display === "flex") {
            vtnDesayuno4.style.display = "none";
        } else {
            vtnDesayuno4.style.display = "flex";
        }
    }

}