function printInvoice() {

    var page = document.getElementById("page").innerHTML;
    var restorePage = document.body.innerHTML;
    document.body.innerHTML = page;
    window.print();
    document.body.innerHTML = restorePage;

}