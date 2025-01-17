// Sponsor Dialog
document.addEventListener("DOMContentLoaded", function () {
    const modalSponsors = document.querySelector("#modal-sponsors");
    const btnSponsorsModal = document.querySelector("#btn-sponsors");
    const closeSponsorModal = document.querySelector("#close-sponsors-modal");

    btnSponsorsModal.addEventListener("click", function () {
        modalSponsors.showModal();
    });

    closeSponsorModal.addEventListener("click", function(){
        modalSponsors.close();
    })
});


// Modals for the about-cards

// 1. Ludvig Rosbecker
const btnModalLudvig = document.querySelector("#btn-modal-ludvig");
const modalLudvig = document.querySelector("#modal-ludvig");
const closeModalLudvig = document.querySelector("#close-ludvig");

btnModalLudvig.addEventListener("click", function(){
    modalLudvig.showModal();
})

closeModalLudvig.addEventListener("click", function(){
    modalLudvig.close();
})

// Filip Kjellgren

const btnModalFilip = document.querySelector("#btn-modal-filip");
const modalFilip = document.querySelector("#modal-filip");
const closeModalFilip = document.querySelector("#close-filip");

btnModalFilip.addEventListener("click", function(){
    modalFilip.showModal();
})

closeModalFilip.addEventListener("click", function(){
    modalFilip.close();
})

// Julia Asker

const btnModalJulia = document.querySelector("#btn-modal-julia");
const modalJulia = document.querySelector("#modal-julia");
const closeModalJulia = document.querySelector("#close-julia");

btnModalJulia.addEventListener("click", function(){
    modalJulia.showModal();
})

closeModalJulia.addEventListener("click", function(){
    modalJulia.close();
})

// Alice Tartu
const btnModalAlice = document.querySelector("#btn-modal-alice");
const modalAlice = document.querySelector("#modal-alice");
const closeModalAlice = document.querySelector("#close-alice");

btnModalAlice.addEventListener("click", function(){
    modalAlice.showModal();
})

closeModalAlice.addEventListener("click", function(){
    modalAlice.close();
})

// Måns Lundin
const btnModalMans = document.querySelector("#btn-modal-mans");
const modalMans = document.querySelector("#modal-mans");
const closeModalMans = document.querySelector("#close-mans");

btnModalMans.addEventListener("click", function(){
    modalMans.showModal();
})

closeModalMans.addEventListener("click", function(){
    modalMans.close();
})

// Btn scroll down - about page
document.querySelector("#scroll-down-button").addEventListener("click", function(){
    document.querySelector("#about-content-container").scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})


