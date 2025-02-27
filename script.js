 'use strict'
 document.addEventListener("DOMContentLoaded", function() {
     const loadUserBtn = document.querySelector("#load-user-btn"),
         userList = document.querySelector("#user-list"),
         loadingText = document.createElement('p'),
         createAPost = document.querySelector("#create-a-post");

     loadingText.textContent = "Loading..."
     loadingText.style.display = 'none'
     document.body.insertBefore(loadingText, userList);


     loadUserBtn.addEventListener('click', async() => {
         loadingText.style.display = 'block'
         userList.innerHTML = '';
         //  // aixos ni ishlatdik. U  faqat elementimizni addelno json ga o'zgartirib berish functionini o'z ichiga olgan.va data ni object sifatida uzatadi 
         setTimeout(async() => {
             try {
                 const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

                 data.forEach((data) => {
                     const li = document.createElement('li')
                     li.textContent = `${data.title}`
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

             createAPost.addEventListener('click', async() => {
                 loadingText.style.display = 'block'
                 userList.innerHTML = ''
                 try {
                     const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', { title: 'Foo', body: 'bar', userId: 1 })
                     const li = document.createElement('li')
                     li.textContent = `${data.title}`
                     userList.appendChild(li)

                 } catch {
                     const li = document.createElement('li');
                     li.style.color = 'red'
                     li.textContent = 'An error occured while creating posts'
                     userList.appendChild(li)
                 } finally {
                     loadingText.style.display = 'none'

                 }

             })
         }, 2000)




         //     setTimeout(() => {
         //         axios.get('https://jsonplaceholder.typicode.com/users')

         //         .then(({ data }) => {
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
         //             loadingText.style.display = 'none'
         //         })
         //     }, 2000)
         // })
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
     //     .catch(error => console.log(error))}
 })