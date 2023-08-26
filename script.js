const navbar  = [
    { name: 'HOME', id: 'home', url: 'index.html' },
    { name: 'ABOUT', id: 'about', url: 'about.html' },
    { name: 'OUR PRODUCTS', id: 'product', url: 'products.html', child: [
        { name: 'Product 1', id: 'p1', url: 'product1.html' },
        { name: 'Product 2', id: 'p2', url: 'product2.html' },
        { name: 'Product 3', id: 'p3', url: 'product3.html' },
        { name: 'Product 4', id: 'p4', url: 'product4.html' },
    ] },
    { name: 'CONTACT US', id: 'contact', url: 'contact.html' }
];

function createMenuItems(items, parentElement) {
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const link = document.createElement('a');
        link.textContent = item.name;
        link.href = item.url;

        menuItem.appendChild(link);

        if (item.child) {
            const submenu = document.createElement('div');
            submenu.classList.add('submenu');
            createMenuItems(item.child, submenu);
            menuItem.appendChild(submenu);
        }

        parentElement.appendChild(menuItem);
    });
}

const menuContainer = document.getElementById('menu');
createMenuItems(navbar, menuContainer);



{
function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["email"].value;
    

    if (x === "") {
        alert("Name is required");
        return false;
    }

    if (y === "") {
        alert("Email is required");
        return false;
    }


    returntrue; 
}
}