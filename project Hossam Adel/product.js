const products = [
            { id: 1, name: "هاتف ذكي", price: 2500, img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "إلكترونيات", discount: 15 },
            { id: 2, name: "لابتوب", price: 4500, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "إلكترونيات", discount: 10 },
            { id: 3, name: "سماعات لاسلكية", price: 800, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "إلكترونيات", discount: 0 },
            { id: 4, name: "ساعة ذكية", price: 1200, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "إلكترونيات", discount: 20 },
            { id: 5, name: "تيشرت رجالي", price: 180, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "ملابس", discount: 5 },
            { id: 6, name: "فستان نسائي", price: 350, img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "ملابس", discount: 25 },
            { id: 7, name: "قهوة عربية", price: 120, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "أطعمة", discount: 0 },
            { id: 8, name: "تمور", price: 90, img: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "أطعمة", discount: 10 },
            { id: 9, name: "سجادة صلاة", price: 150, img: "https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "منزلية", discount: 0 },
            { id: 10, name: "مجموعة عطور", price: 450, img: "https://images.unsplash.com/photo-1592945403247-b9ab7d0a6b9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "جمال", discount: 15 },
            { id: 11, name: "كاميرا احترافية", price: 6000, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "إلكترونيات", discount: 12 },
            { id: 12, name: "حقيبة نسائية", price: 420, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "ملابس", discount: 8 }
        ];

        let showingAll = false;
        let cart = [];

        // تحديث عدد العناصر في السلة
        function updateCartCount() {
            const cartCount = document.querySelector('.cart-count');
            cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        }

        // عرض المنتجات
        function renderProducts(filterCategory = "all", search = "") {
            const productList = document.getElementById("productList");
            productList.innerHTML = "";
            const normalizedSearch = search.trim().toLowerCase();

            const filtered = products.filter(p => {
                const matchesCategory = (filterCategory === "all" || p.category === filterCategory);
                const matchesSearch = p.name.toLowerCase().includes(normalizedSearch);
                return matchesCategory && matchesSearch;
            });

            const toShow = showingAll ? filtered : filtered.slice(0, 8);

            toShow.forEach(product => {
                const card = createProductCard(product);
                productList.appendChild(card);
            });

            document.getElementById("toggleBtn").innerText = showingAll ? "عرض أقل" : "عرض المزيد";
        }

        // عرض العروض
        function renderOffers() {
            const offersList = document.getElementById("offersList");
            offersList.innerHTML = "";

            const offerProducts = products.filter(p => p.discount > 0);

            offerProducts.forEach(product => {
                const card = createProductCard(product);
                offersList.appendChild(card);
            });
        }

        // إنشاء بطاقة منتج
        function createProductCard(product) {
            const card = document.createElement("div");
            card.className = "product-card";

            const finalPrice = product.discount ?
                Math.round(product.price * (1 - product.discount / 100)) :
                product.price;

            card.innerHTML = `
                ${product.discount ? `<div class="product-badge">خصم ${product.discount}%</div>` : ""}
                <div class="product-img">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">${finalPrice} ج.م</span>
                        ${product.discount ? `<span class="old-price">${product.price} ج.م</span>` : ""}
                    </div>
                    <button onclick='addToCart(${JSON.stringify(product)})'>
                        <i class="fas fa-shopping-cart"></i> أضف إلى العربة
                    </button>
                </div>
            `;
            return card;
        }

        // إضافة منتج إلى السلة
        function addToCart(product) {
            const existingItem = cart.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                const finalPrice = product.discount ?
                    Math.round(product.price * (1 - product.discount / 100)) :
                    product.price;

                cart.push({
                    id: product.id,
                    name: product.name,
                    price: finalPrice,
                    img: product.img,
                    quantity: 1
                });
            }

            updateCheckout();
            updateCartCount();

            // إشعار بإضافة المنتج
            showNotification(`تم إضافة ${product.name} إلى السلة`);
        }

        // تحديث سلة الشراء
        function updateCheckout() {
            const container = document.getElementById("checkoutItems");
            container.innerHTML = "";
            let total = 0;

            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>سلة الشراء فارغة</p>
                        <p>قم بإضافة بعض المنتجات من المتجر</p>
                    </div>
                `;
                return;
            }

            // إنشاء جدول سلة الشراء
            const table = document.createElement("table");
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>المنتج</th>
                        <th>السعر</th>
                        <th>الكمية</th>
                        <th>الإجمالي</th>
                        <th>إجراء</th>
                    </tr>
                </thead>
                <tbody id="cartBody"></tbody>
            `;
            container.appendChild(table);

            const cartBody = document.getElementById("cartBody");
            cartBody.innerHTML = "";

            // إضافة العناصر إلى الجدول
            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;

                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>
                        <div class="product-cell">
                            <img src="${item.img}" alt="${item.name}">
                            <span>${item.name}</span>
                        </div>
                    </td>
                    <td>${item.price} ج.م</td>
                    <td>
                        <div class="quantity-control">
                            <button onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
                        </div>
                    </td>
                    <td>${itemTotal} ج.م</td>
                    <td>
                        <button class="remove-btn" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash"></i> حذف
                        </button>
                    </td>
                `;
                cartBody.appendChild(row);
            });

            // إضافة صف الإجمالي
            const totalRow = document.createElement("tr");
            totalRow.innerHTML = `
                <td colspan="5">
                    <div class="checkout-summary">
                        <div class="summary-row">
                            <span>المجموع الجزئي:</span>
                            <span>${total} ج.م</span>
                        </div>
                        <div class="summary-row">
                            <span>التوصيل:</span>
                            <span>50 ج.م</span>
                        </div>
                        <div class="summary-row total">
                            <span>الإجمالي:</span>
                            <span>${total + 50} ج.م</span>
                        </div>
                    </div>
                </td>
            `;
            cartBody.appendChild(totalRow);
        }

        // تحديث كمية المنتج
        function updateQuantity(index, newQuantity) {
            if (newQuantity < 1) {
                removeFromCart(index);
                return;
            }

            cart[index].quantity = newQuantity;
            updateCheckout();
            updateCartCount();
        }

        // حذف منتج من السلة
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCheckout();
            updateCartCount();
        }

        // إفراغ السلة
        function clearCart() {
            cart = [];
            updateCheckout();
            updateCartCount();
            showNotification("تم إفراغ سلة الشراء");
        }

        // إتمام عملية الشراء
        function proceedToCheckout() {
            if (cart.length === 0) {
                showNotification("سلة الشراء فارغة. أضف منتجات قبل إتمام الشراء", "error");
                return;
            }

            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 50;
            showNotification(`تمت عملية الشراء بنجاح! إجمالي المبلغ: ${total} ج.م`, "success");
            clearCart();
        }

        // عرض إشعار
        function showNotification(message, type = "success") {
            const notification = document.createElement("div");
            notification.className = `notification ${type}`;
            notification.textContent = message;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.classList.add("show");
            }, 10);

            setTimeout(() => {
                notification.classList.remove("show");
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // فتح نافذة تسجيل الدخول
        function openLoginModal() {
            document.getElementById("loginModal").classList.add("active");
        }

        // إغلاق نافذة تسجيل الدخول
        function closeLoginModal() {
            document.getElementById("loginModal").classList.remove("active");
        }

        // إعداد الوضع الليلي
        function setupDarkMode() {
            const darkModeToggle = document.getElementById('dark-mode-toggle');
            const body = document.body;

            // التحقق من تفضيلات المستخدم
            if (localStorage.getItem('darkMode') === 'enabled') {
                body.classList.add('dark-mode');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }

            darkModeToggle.addEventListener('click', () => {
                body.classList.toggle('dark-mode');

                if (body.classList.contains('dark-mode')) {
                    localStorage.setItem('darkMode', 'enabled');
                    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                    showNotification("تم تفعيل الوضع الليلي", "success");
                } else {
                    localStorage.setItem('darkMode', 'disabled');
                    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                    showNotification("تم تعطيل الوضع الليلي", "success");
                }
            });
        }

        // التحميل الأولي
        document.addEventListener("DOMContentLoaded", () => {
            // إعداد الوضع الليلي
            setupDarkMode();

            // عرض المنتجات والعروض
            renderProducts();
            renderOffers();
            updateCartCount();

            // تكوين أزرار التبديل
            document.getElementById("toggleBtn").addEventListener("click", () => {
                showingAll = !showingAll;
                renderProducts(
                    document.getElementById("categorySelect").value,
                    document.getElementById("searchInput").value
                );
            });

            // البحث والفلاتر
            document.getElementById("categorySelect").addEventListener("change", () => {
                renderProducts(
                    document.getElementById("categorySelect").value,
                    document.getElementById("searchInput").value
                );
            });

            document.getElementById("searchInput").addEventListener("input", () => {
                renderProducts(
                    document.getElementById("categorySelect").value,
                    document.getElementById("searchInput").value
                );
            });

            // تأثير التمرير للرأس
            window.addEventListener("scroll", () => {
                const header = document.getElementById("header");
                if (window.scrollY > 50) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }
            });

            // إغلاق نافذة تسجيل الدخول بالنقر خارجها
            document.getElementById("loginModal").addEventListener("click", (e) => {
                if (e.target === document.getElementById("loginModal")) {
                    closeLoginModal();
                }
            });
        });
         // إضافة وظيفة لتحديث لون النص في حقول الإدخال عند التبديل بين الوضعين
            function updateInputTextColor() {
                const inputs = document.querySelectorAll('input, textarea, select');
                inputs.forEach(input => {
                    if (document.body.classList.contains('dark-mode')) {
                        input.style.color = '#8e8f91';
                    } else {
                        input.style.color = '#333';
                    }
                });
            }

            // تحديث وظيفة إعداد الوضع الليلي
            function setupDarkMode() {
                const darkModeToggle = document.getElementById('dark-mode-toggle');
                const body = document.body;

                if (localStorage.getItem('darkMode') === 'enabled') {
                    body.classList.add('dark-mode');
                    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                    updateInputTextColor(); // تحديث ألوان النصوص عند التحميل
                }

                darkModeToggle.addEventListener('click', () => {
                    body.classList.toggle('dark-mode');

                    if (body.classList.contains('dark-mode')) {
                        localStorage.setItem('darkMode', 'enabled');
                        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                        showNotification("تم تفعيل الوضع الليلي", "success");
                    } else {
                        localStorage.setItem('darkMode', 'disabled');
                        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                        showNotification("تم تعطيل الوضع الليلي", "success");
                    }

                    updateInputTextColor(); // تحديث ألوان النصوص عند التبديل
                });
            }