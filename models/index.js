const Customer = require('./Customer');
const Product = require('./Product');
const Order = require('./Order');
const Review = require('./Review');
const Address = require('./Address');
const OrderProduct = require('./OrderProduct');

//associations
Customer.hasOne(Review, {
    foreignKey: 'customer_id'
});
Review.belongsTo(Customer, {
    foreignKey: 'customer_id',
});
Product.belongsToMany(Order, {
    through: OrderProduct,
    foreignKey: 'product_id'
})
Order.belongsToMany(Product, {
    through: OrderProduct,
    foreignKey: 'order_id'
})
Order.hasOne(Customer, {
    foreignKey: 'customer_id'
});
Customer.hasOne(Address, {
    foreignKey: 'customer_id'
});
Address.belongsTo(Customer, {
    foreignKey: 'customer_id'
})


module.exports = { Customer, Product, Order, Review, Address, OrderProduct };