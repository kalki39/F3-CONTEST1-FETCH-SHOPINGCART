fetch("https://dummyjson.com/products").then((res) => res.json()).then((data) => {
    let arr = data.products
    let divMain = document.querySelector(".products");
    console.log(divMain)
    
    arr.map((item) => {
        console.log(item)
        // let div=document.createElement('div')
        divMain.innerHTML += `<div class="product">
                <img src="${item.thumbnail}" alt="${item.description}">
                    <p class="title">${item.title}</p>
                    <p class="description">${item.description}</p>
                    <p class="price">
                        <span>${item.price}</span>
                        <span>$</span>
                    </p>
                    <p class="dis">DISCOUNT:${item.discountPercentage}</p>
                    <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
                </div>`


        // divMain.appendChild(div)
       
    })

    console.log(data.products)
    console.log(data)
})



// `<div class="card" style="width: 18rem;">` +
//             `<img src="..." class="card-img-top" alt="...">`+
//             `<div class="card-body">`+
//                     `<h5 class="card-title">Card title</h5>`+
//                     `<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>`+
//                     `<a href="#" class="btn btn-primary">Go somewhere</a>`+
//                 `</div>`+
//             `</div>

// let li = document.createElement('li')
//         li.innerHTML = `<div class="card" style="width: 18rem;">
//         <img src="${objArr}" class="card-img-top img=fluid" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>`