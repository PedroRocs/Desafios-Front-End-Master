// AVATAR DA NAVBAR
const avatar = document.querySelector("#avatar");

function avatarNavbar() {
    let background = document.querySelector(".avatar");
    background.classList.toggle("active");
}
avatar.addEventListener("click", () => {
    avatarNavbar();
});
// ------------------------------- \\

//CART DA NAVBAR
const car = document.querySelector("#cart");

function aparecerCarrinho() {
    let infoCar = document.querySelector(".cart-info");
    infoCar.classList.toggle("active");
}
car.addEventListener("click", () => {
    aparecerCarrinho();
});
// ------------------------------- \\

//MENU HAMBURGUER REPONSIVO
const hamburguer = document.querySelector(".btn-hamburguer");
const close = document.querySelector(".close");

function abrirMenuHamburguer() {
    let menu = document.querySelector(".list-menu");
    let fundo = document.querySelector(".back");
    menu.classList.add("active");
    fundo.classList.add("active");
}

function fecharMenuHamburguer() {
    let menu = document.querySelector(".list-menu");
    let fundo = document.querySelector(".back");
    menu.classList.remove("active");
    fundo.classList.remove("active");
}
hamburguer.addEventListener("click", () => {
    abrirMenuHamburguer();
});

close.addEventListener("click", () => {
    fecharMenuHamburguer();
});
// ------------------------------- \\

// QUNATIDADE DE PRODUTOS QUE DESEJA INCLUIR NO CARRINHO CARRINHO
const adicionar = document.querySelector(".adicionar");
const diminuir = document.querySelector(".diminuir");
var cont = 0;

function quantidadeProdutosCarrinhoDiminuir() {
    let quantidadePainel = document.querySelector(".number-quantidade");
    if (cont > 0) {
        cont--;
        quantidadePainel.innerHTML = `${cont}`;
    }
}

function quantidadeProdutosCarrinhoAumentar() {
    let quantidadePainel = document.querySelector(".number-quantidade");
    cont++;
    quantidadePainel.innerHTML = `${cont}`;
}

adicionar.addEventListener("click", () => {
    quantidadeProdutosCarrinhoAumentar();
});
diminuir.addEventListener("click", () => {
    quantidadeProdutosCarrinhoDiminuir();
});

// ------------------------------- \\

//ADICIONAR PRODUTOS AO CARRINHO
const adicionarCarrinho = document.querySelector(".carrinho");
let contFinal = 0;

function adicionarProdutoCarrinho() {
    const quantidadeCar = document.querySelector(".number");
    const painelCart = document.querySelector(".title-product-cart");
    const painelCartNull = document.querySelector(".vazio");
    const btnCart = document.querySelector(".btn-cart");
    const quantidadeCarContent = document.querySelector("#quantidade-cart");
    const totalCarContent = document.querySelector("#total-cart");
    let contFinal = 0;
    contFinal = cont + contFinal;
    if (contFinal > 0) {
        totalCarContent.innerHTML = `$${125 * contFinal}`;
        quantidadeCarContent.innerHTML = `${contFinal}`;
        quantidadeCar.innerHTML = `${contFinal}`;
        quantidadeCar.style.display = "block";
        painelCart.style.display = "grid";
        painelCartNull.style.display = "none";
        btnCart.style.display = "flex";
    } else {
        quantidadeCar.style.display = "none";
    }
}
adicionarCarrinho.addEventListener("click", () => {
    adicionarProdutoCarrinho();
});
// ------------------------------- \\

//EXCLUIR PRODUTOS DO CARRINHO
const delecteProduct = document.querySelector(".delete-product");

function deletarProdutoCarrinho() {
    const quantidadeCar = document.querySelector(".number");
    const painelCart = document.querySelector(".title-product-cart");
    const painelCartNull = document.querySelector(".vazio");
    const btnCart = document.querySelector(".btn-cart");

    painelCart.style.display = "none";
    btnCart.style.display = "none";
    painelCartNull.style.display = "flex";
    quantidadeCar.style.display = "none";
    contFinal = 0;
}
delecteProduct.addEventListener("click", () => {
    deletarProdutoCarrinho();
});
// ------------------------------- \\

//CARROSSEL PRINCIPAL DE IMAGENS


const carrosselImagens = document.querySelectorAll(".carrossel");
const imagensPequenas = document.querySelectorAll(".index img");
let imagemAnterior = 4;
carrosselImagens[0].style.display = "block";
carrosselImagens[4].style.display = "block";
for (let imagemAtual = 4; imagemAtual < imagensPequenas.length; imagemAtual++) {
    imagensPequenas[imagemAtual].addEventListener("mouseenter", () => {
        imagensPequenas[imagemAnterior].style.opacity = "100%";
        carrosselImagens[imagemAnterior].style.animation = "none";
        carrosselImagens[imagemAnterior].style.display = "none";
        carrosselImagens[imagemAtual].style.display = "block";
        carrosselImagens[imagemAtual].style.animation = "2s animacao";
        imagensPequenas[imagemAtual].style.opacity = "40%";
        imagemAnterior = imagemAtual;
    });
}
// ------------------------------- \\

// CARROSSEL QUE É EXECUTADO QUANDO CLICADO NO CARROSSEL PRINCIPAL - CARROSSEL MODAL

const carrossel = document.querySelector(".imagens-products");
const closeModal = document.querySelector(".close-modal");

function aparecerCarrosselModal() {
    const travaPagina = document.querySelector("body");
    const carrosselModal = document.querySelector(".carrossel-modal");
    carrosselModal.style.zIndex = "9999";
    carrosselModal.style.opacity = "1";
    travaPagina.style.overflow = "hidden";
}
carrossel.addEventListener("click", () => {
    aparecerCarrosselModal();
});

function fecharCarrosselModal() {
    const travaPagina = document.querySelector("body");
    const carrosselModal = document.querySelector(".carrossel-modal");
    travaPagina.style.overflow = "";
    carrosselModal.style.zIndex = "-990";
    carrosselModal.style.opacity = "0";
}
closeModal.addEventListener("click", () => {
    fecharCarrosselModal();
});

// ------------------------------- \\

// BOTÕES DE AVANÇAR E DE RECUAR DO CARROSSEL MODAL
const btnNext = document.querySelector(".next");
const btnPrevious = document.querySelector(".previous");
let contadora = 0;
function avançarImagemCarrosselModal() {
    contadora++;
    if (contadora == 4) {
        contadora = 0;
    }
    if (contadora == 0) {
        imagensPequenas[3].style.opacity = "100%";
        carrosselImagens[contadora].style.animation = "none";
        carrosselImagens[3].style.display = "none";
    }
    else {
        imagensPequenas[`${contadora - 1}`].style.opacity = "100%";
        carrosselImagens[`${contadora - 1}`].style.animation = "none";
        carrosselImagens[`${contadora - 1}`].style.display = "none";
    }
    carrosselImagens[contadora].style.display = "block";
    carrosselImagens[contadora].style.animation = "2s animacao";
    imagensPequenas[contadora].style.opacity = "40%";
}

function recuarImagemCarrosselModal() {
    contadora--;
    if (contadora < 0) {
        contadora = 3;
        imagensPequenas[0].style.opacity = "100%";
        carrosselImagens[0].style.animation = "none";
        carrosselImagens[0].style.display = "none";
    }
    if (contadora > 3) {
        contadora = 0;
    }
    imagensPequenas[`${contadora + 1}`].style.opacity = "100%";
    carrosselImagens[`${contadora + 1}`].style.animation = "none";
    carrosselImagens[`${contadora + 1}`].style.display = "none";
    carrosselImagens[contadora].style.display = "block";
    carrosselImagens[contadora].style.animation = "2s animacao";
    imagensPequenas[contadora].style.opacity = "40%";
}


btnNext.addEventListener("click", () => {
    avançarImagemCarrosselModal();
});

btnPrevious.addEventListener("click", () => {
    recuarImagemCarrosselModal();
});
// ------------------------------- \\

// RECARREGAR A PAGINA QUANDO ELA CHEGA A LARGURA DE 700 PIXELS - FIZ ISSO POR CAUSA DE UMA BUG E SÓ CONSEGUIR ARRUMAR DESSA FORMA - PERDÃO
window.addEventListener("resize", () => {
    if (window.screen.width <= 700) {
        location.reload();
    }
});
// ------------------------------- \\
