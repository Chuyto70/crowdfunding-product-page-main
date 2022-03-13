 //Function of the menu
 function menuFunction(element, menuBurger) {
     if (element.style.transform === "scaleY(0)") {
         menuBurger.style.backgroundImage = "url(./images/icon-close-menu.svg)"
         element.style.transform = "scaleY(1)"
     } else {
         menuBurger.style.backgroundImage = "url(./images/icon-hamburger.svg)"
         element.style.transform = "scaleY(0)"
     }
 }

 //Bookmarked function
 function bookmarked(icon, icon_circle, bookmark) {

     if (!icon.style.color) {
         icon.style.color = 'white'
         icon_circle.style.color = "var(--dark-cyan)"
         bookmark.style.color = "var(--dark-cyan)"
         bookmark.innerHTML = 'Bookmarked'
     } else if (icon.style.color == 'white') {
         icon.style.color = '#b1b1b1'
         icon_circle.style.color = "#2F2F2F"
         bookmark.style.color = "var(--dark-gray)"
         bookmark.innerHTML = 'Bookmark'
     } else {
         icon.style.color = 'white'
         icon_circle.style.color = "var(--dark-cyan)"
         bookmark.style.color = "var(--dark-cyan)"
         bookmark.innerHTML = 'Bookmarked'
     }


 }

 //MODALS function
 function modalsFunction(element, modal1) {
     element.style.display = "flex";
     modal1.style.display = "block"
 }
 //close button modal
 function close(element) {
     element.style.display = "none";
 }

 function selectPledge(validator, validator2, element) {
     validator.style.display = 'none'
     validator2.style.display = 'none'
     element.style.display = "flex"
 }

 function finishPledge(hidEl, showEl) {
     hidEl.style.display = "none"
     showEl.style.display = "flex"
 }


 function addValueBacked(toSum, value, backers) {


     let intNumber = Number(toSum.innerHTML.split(',').join(''));
     let intBackers = Number(backers.innerHTML.split(',').join(''))


     if (value != 0) {
         let valueToNumber = Number(value.value);
         let sum = intNumber + valueToNumber;
         if (sum > 100000) {

         } else {
             let sum2 = intBackers + 1;
             let result = sum.toString().split('')
             if (result.length <= 5) {
                 result.splice(2, 0, ',')
                 toSum.innerHTML = result.join('')
             } else {
                 result.splice(3, 0, ',')
                 toSum.innerHTML = result.join('')
             }


             let result2 = sum2.toString().split('')
             result2.splice(1, 0, ',')

             backers.innerHTML = result2.join('')
         }


     } else {
         let sum = intBackers + 1;
         let result = sum.toString().split('')
         result.splice(1, 0, ',')
         backers.innerHTML = result.join('')

     }


 }

 function restStock(element1, element2, valueActual) {

     if (Number(valueActual.innerHTML.split(',').join('')) > 100000) {

     } else {
         let numberPage = Number(element1.innerHTML);
         let numberModal = Number(element2.innerHTML);

         element1.innerHTML = numberPage - 1;
         element2.innerHTML = numberModal - 1;
     }
 }

 function finish(hiddEl, element) {
     hiddEl.style.display = 'none'
     element.style.display = 'none'
 }

 function addValueBar(valueBar, valueToAdd) {

     let valueToNumber = Number(valueToAdd.value)

     if (valueBar.value + valueToNumber > 100000) {
         alert('The value its too much dude')
     } else {
         valueBar.value += valueToNumber

     }

 }










 export { menuFunction, bookmarked, modalsFunction, close, selectPledge, finishPledge, finish, addValueBacked, restStock, addValueBar };