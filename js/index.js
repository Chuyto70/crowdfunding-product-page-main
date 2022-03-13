//Icon menu function
import { menuFunction, bookmarked, modalsFunction, close, selectPledge, finishPledge, finish, addValueBacked, restStock, addValueBar } from "./functions/mainFunctions.js";
const menu_icon = document.querySelector('.menu-icon')
const menu = document.getElementById('menu-mobile')
const svg = document.querySelector('.svg')
const circle = document.querySelector('.circle')
const bookmark = document.querySelector('.bookmark')
const back_project = document.querySelector('.back-this-project')
const modal_container = document.querySelector('.modals-container')
const first_modal = document.querySelector('.first-modal-container')
const buttonClose = document.querySelector('.close-icon')
const selected_pledge = document.querySelector('.selected-container')
const selected_pledge2 = document.querySelector('.selected-container2')
const selected_pledge0 = document.querySelector('.selected-container0')
const pledge1 = document.querySelector('.radio-label1')
const pledge2 = document.querySelector('.radio-label2')
const pledge0 = document.querySelector('.radio-label0')
const finishMessage = document.querySelector('.second-modal-container')
const letsPay = document.querySelector('#letsPay')
const letsPay1 = document.querySelector('#letsPay1')
const letsPay2 = document.querySelector('#letsPay2')
const finishButton = document.querySelector('.finish')
const backed = document.getElementById('backed')
const value1 = document.getElementById('value1')
const value2 = document.getElementById('value2')
const backers = document.querySelector('.backers')
const leftModal = document.querySelector('.left-modal')
const leftPage = document.querySelector('.left-page')
const leftModal1 = document.querySelector('.left-modal1')
const leftPage1 = document.querySelector('.left-page1')
const selectReward = [...document.querySelectorAll('.selectReward')]
const progressBar = document.getElementById('progressBar')
    //menu
menu_icon.addEventListener('click', () => {
    menuFunction(menu, menu_icon)
})

//bookmark  
selectReward.map(selectItem => {
    selectItem.addEventListener('click', () => {
        modalsFunction(modal_container, first_modal)
    })
})
svg.addEventListener('click', () => {
    bookmarked(svg, circle, bookmark)
})
back_project.addEventListener('click', () => {
    modalsFunction(modal_container, first_modal)
})
buttonClose.addEventListener('click', () => {
    close(modal_container)
})
pledge1.addEventListener('click', () => {
    selectPledge(selected_pledge2, selected_pledge0, selected_pledge)
})
pledge2.addEventListener('click', () => {
    selectPledge(selected_pledge, selected_pledge0, selected_pledge2)
})
pledge0.addEventListener('click', () => {
    selectPledge(selected_pledge, selected_pledge2, selected_pledge0)
})
letsPay.addEventListener('click', () => {

    finishPledge(first_modal, finishMessage)
    setTimeout(() => {
        addValueBacked(backed, 0, backers)
    }, 1500)
})
letsPay1.addEventListener('click', () => {
    finishPledge(first_modal, finishMessage)
    setTimeout(() => {
        backed
        addValueBacked(backed, value1, backers)
        restStock(leftModal, leftPage, backed);
        setTimeout(() => {
            addValueBar(progressBar, value1)
        }, 500)

    }, 1500)

})
letsPay2.addEventListener('click', () => {
    finishPledge(first_modal, finishMessage)
    setTimeout(() => {
        addValueBacked(backed, value2, backers)
        restStock(leftModal1, leftPage1, backed);
        setTimeout(() => {
            addValueBar(progressBar, value2)

        }, 500)
    }, 1500)
})
finishButton.addEventListener('click', () => {
    finish(modal_container, finishMessage)
})