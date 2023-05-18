exports.getAddProduct = (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><div><label for="title">Title</label><input type="text" name="title" id="Title" /></div><button type="submit">Add Product</button></form>');
};

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    const data = {item: req.body.title};
    console.log(data.item);
    res.redirect('/');
};

exports.getShop = (req, res, next) => {
    res.send('<h1>hello from practice</h1><h2>Here is my product...</h3>');
};

exports.get404Error = (req, res, next) => {
    res.status(404).send('<h1>404 error</h1>');
};