var swiper = new Swiper(); // Placeholder to avoid errors if linked? No swiper used yet.

// Scroll Top Logic
window.addEventListener('scroll', function() {
    var scrollButton = document.querySelector('.scroll-top');
    if (scrollButton) {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// Product Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
             // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active', 'btn-primary', 'text-white'));
            filterButtons.forEach(btn => btn.classList.add('btn-outline-secondary')); // Reset style
            
            // Add active class to clicked button
            button.classList.add('active', 'btn-primary', 'text-white');
            button.classList.remove('btn-outline-secondary');

            const filterValue = button.getAttribute('data-filter');

            productItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' ||  category === filterValue) {
                    item.style.display = 'block';
                    // Optional: Add fade-in animation
                    item.classList.add('animate__animated', 'animate__fadeIn');
                    setTimeout(() => item.classList.remove('animate__animated', 'animate__fadeIn'), 500); 
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});


// Product Modal Logic
function showProductDetail(title, category, price, imgSrc, description) {
    const modalTitle = document.getElementById('productModalLabel');
    const modalImg = document.getElementById('modalProductImg');
    const modalCategory = document.getElementById('modalProductCategory');
    const modalPrice = document.getElementById('modalProductPrice');
    const modalDesc = document.getElementById('modalProductDesc');
    const modalWaLink = document.getElementById('modalWaLink');

    modalTitle.textContent = title;
    modalCategory.textContent = category;
    modalPrice.textContent = price;
    modalImg.src = imgSrc;
    modalDesc.textContent = description || "Deskripsi lengkap produk akan ditampilkan di sini. Kualitas premium dengan bahan pilihan.";
    
    // Create WhatsApp Link with pre-filled text
    const waNumber = "62895639068080";
    const text = `Halo, saya tertarik dengan produk ${title} - ${price}`;
    modalWaLink.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

    const myModal = new bootstrap.Modal(document.getElementById('productDetailModal'));
    myModal.show();
}

// Order Form to WA
function sendOrderToWA(event) {
    event.preventDefault();
    
    const name = document.getElementById('orderName').value;
    const phone = document.getElementById('orderPhone').value;
    const product = document.getElementById('orderProduct').value;
    const address = document.getElementById('orderAddress').value;
    const notes = document.getElementById('orderNotes').value;

    const waNumber = "62895639068080";
    const message = `*Pesanan Baru*\n\nNama: ${name}\nNo. HP: ${phone}\nProduk: ${product}\nAlamat: ${address}\nCatatan: ${notes}`;
    
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Contact Form to WA
function sendContactToWA(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    const waNumber = "62895639068080";
    const waText = `*Pesan dari Website*\n\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`;
    
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;
    window.open(url, '_blank');
}
