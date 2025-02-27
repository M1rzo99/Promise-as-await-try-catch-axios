 'use strict'
 document.addEventListener("DOMContentLoaded", function() {
     const loadUserBtn = document.querySelector("#load-user-btn"),
         userList = document.querySelector("#user-list"),
         loadingText = document.createElement('p');
     loadingText.textContent = "Loading..."
     loadingText.style.display = 'none'
     document.body.insertBefore(loadingText, userList);


     loadUserBtn.addEventListener('click', async() => {

         loadingText.style.display = 'block'
         userList.innerHTML = '';


         setTimeout(async() => {
                 try {
                     const response = await fetch('https://jsonplaceholder.typicode.com/users')
                     const data = await response.json()
                     data.forEach((user) => {
                         const li = document.createElement('li')
                         li.textContent = `${user.name} =>  ${user.email}`
                         userList.appendChild(li)
                     })

                 } catch {
                     const li = document.createElement('li');
                     li.style.color = 'red'
                     li.textContent = 'An error occured while loading users'
                     userList.appendChild(li)
                 } finally {
                     loadingText.style.display = 'none'
                 }
             }, 2000)
             // setTimeout(() => {
             //     fetch('https://jsonplaceholder.typicode.com/users')
             //         .then(response => response.json())
             //         .then(data => {
             //             data.forEach(user => {
             //                 const li = document.createElement('li');
             //                 li.textContent = `${user.name} ---- ${user.email}`
             //                 userList.appendChild(li)
             //             })
             //         }).catch(err => {
             //             console.log(err)
             //             const li = document.createElement('li');
             //             li.style.color = 'red'
             //             li.textContent = 'An error occured while loading users'
             //             userList.appendChild(li)

         //         }).finally(() => {
         //             
         //         })
         // }, 2000)
     })
 })

 // // #1. synchronous - Kod qatorma - qator bajarilinadi,har bir operatsiya tugamaguncha boshqa kodga o'tmaydi.
 // // #2. asychronous - Kod bajarilishida boshqa jarayon to'xtab qolmasligi un functionlar bir vaqtning o'zida bajarilishi mumkin.
 // let isSucces = false;

 // // O'zlarimiz qolda Promise() yaratib oldik
 // const orderPizza = new Promise((resolve, reject) => {
 //     setTimeout(() => {
 //         isSucces = true
 //         if (isSucces) {
 //             resolve("Your order make successfully")
 //         } else {
 //             reject("Busy,try again later")
 //         }
 //     }, 3000)
 // });
 // orderPizza
 //     .then(messagte => console.log(messagte))
 //     .catch(error => console.log(error))