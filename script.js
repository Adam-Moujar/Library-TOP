document.addEventListener("DOMContentLoaded", () => {
    const addBookBtn = document.getElementById('addBookBtn');
    const popupForm = document.getElementById('popupForm');
    const closePopup = document.getElementById('closePopup');
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');

    // Open the popup form  
    addBookBtn.onclick = function() {
        popupForm.style.display = "block";
    }

    // Close the popup form  
    closePopup.onclick = function() {
        popupForm.style.display = "none";
    }

    // Close the popup if clicked outside of the form  
    window.onclick = function(event) {
        if (event.target == popupForm) {
            popupForm.style.display = "none";
        }
    }

    // Add book functionality  
    bookForm.onsubmit = function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const complete = document.getElementById('complete').value;

        // Create a new book card  
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>Pages:</strong> ${pages}</p>
            <p><strong>Complete:</strong> ${complete}</p>
        `;

        // Add the book card to the list  
        bookList.appendChild(bookCard);

        // Clear the form fields  
        bookForm.reset();
        popupForm.style.display = "none"; // Close the popup  
    }
});