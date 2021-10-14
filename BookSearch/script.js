const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("search-btn")
const errorDiv = document.getElementById("error");
const bookContainer = document.getElementById("book-container");
const bookDetails = document.getElementById("book-details");

searchBtn.addEventListener("click", function () {

  const search = searchInput.value;
  if (search === "") {
    errorDiv.innerText = "Search field cannot be empty.";  // Handling empty search error
    return;
  }
  bookContainer.innerHTML = ""      //
  bookDetails.innerHTML = ""       // clearing the search

  const url = `https://openlibrary.org/search.json?q=${search}`

  fetch(url)
    .then((res) => res.json())
    .then((data) => {


      for (var i = 0; i < 100000; i++) {
        var j = 0
        if (i > j) {
          j = i
        }                               // a comparison for loop to count the total books

        const total = document.getElementById("total");
        total.innerHTML = `<h2 style="color:blue; text-align: center;" > Total Found Book : ${j} </h2>`

        if (j == 0) {
          total.innerHTML = `<h2 style="color:blue; text-align: center;" > No Result Found !!! </h2>` // Error handling for Not found data
        }

        const div = document.createElement("div");
        div.classList.add("col-md-3");
        div.innerHTML = `

                  <!---------------------------- Creating Image Container ------------------------------->
                  <div class="rounded overflow-hidden border p-2">
                 
                    <img
                    src="https://covers.openlibrary.org/b/id/${data.docs[i].cover_i}-M.jpg"  

                    class="w-100"
                    alt=""
                    />
                </div>
                <!---------------------------- Creating Body Container -------------------------------->
                  <div
                    class="
                      py-2
                      d-flex
                      justify-content-between
                      align-items-center
                      d-md-block
                      text-md-center
                    "
                  >
                     <h2 style="color:red;"> Book Name : ${data.docs[i].title}</h2>
                     <h4 style="color:blue;"> Book Author : ${data.docs[i].author_name[0]}</h4>
                     <h4 style="color:black;"> Book First Publish : ${data.docs[i].first_publish_year}</h4>
                     <h4 style="color:blue;"> Book Publisher : ${data.docs[i].publisher}</h4>
                   
                  </div>
                  `;
        bookContainer.appendChild(div);  //appending the block one after another
      }
    })

})

