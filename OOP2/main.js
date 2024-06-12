// Viết các function (thêm, sửa, xóa và hiển thị) tương tác với HTML.
let myStore = new Store("cửa hàng của Linh"); // dữ liểu sẽ lấy từ myStore;

// Dữ liệu giả
let p1 = new Product(1, "Bánh mì", 200, "https://residence.yamazaki.vn/wp-content/uploads/2020/04/MG_9027-scaled.jpg");
let p2 = new Product(2, "Bánh cáy", 100, "https://orion.vn/media/sbrmitiu/goute_8p_2103.png");
myStore.addProduct(p1);
myStore.addProduct(p2);
console.log(myStore.listProduct);


showAll();


function add() {
    let idInput = document.getElementById("id").value;
    let nameInput = document.getElementById("name").value;
    let priceInput = document.getElementById("price").value;
    let imgInput = document.getElementById("img").value;
    let newProduct = new Product(idInput, nameInput, priceInput, imgInput);
    myStore.addProduct(newProduct);
    alert("Thêm thành công");
    showAll();
}

function remove(index) {
    let isConfirm = confirm("Bạn chắc chứ?");
    if(isConfirm) {
        myStore.removeProduct(index);
        alert("Xóa thành công")
        showAll();
    }
}

function showAll() {
    let list = myStore.listProduct;
    let str = `
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th colspan="2">Action</th>
        </tr>
    `
    for(let i = 0; i < list.length; i++) {
        str += `
        <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].img}" alt=""></td>
            <td><button>Sửa</button></td>
            <td><button onclick="remove(${i})">Xóa</button></td>
        </tr>
        `
    }
    document.getElementById("table-product").innerHTML = str;
}

// Tạo khung (các file => các class => dữ liệu => Test (Dữ liệu giả - console.log))
// Chức năng: Tạo HTML (Sử dụng dữ liệu cứng để giả dụ) 
// => xây dựng hàm (Note: Nhớ dữ liệu lấy thông qua đối tượng ~ myStore)
// => Gọi hàm => Kiểm tra lỗi (trong màn hình console)