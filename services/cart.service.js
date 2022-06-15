const Cart = require("../models/index").Cart;
const Product = require("../models/index").Product;
const CartProduct = require("../models/index").Cart_Products;

const createCart = async (uid) => {
  const cart = await Cart.create({
    userId: uid,
  });
  return cart;
};

const addProductToCart = async (data) => {
  const cart = await Cart.findOne({
    where: {
      id: data.cartId,
    },
  });
  if (!cart.status == "creation") {
    return false;
  }

  const product = await Product.findOne({
    where: {
      id: data.productId,
    },
  });
  const entry = await CartProduct.findOne({
    where: {
      cartId: cart.id,
      productId: product.id,
    },
  });
  if (!entry) {
    cart.addProduct(product, { through: { quantity: 1 } });
  } else {
    let previousQuantity = entry.quantity;
    entry.quantity = previousQuantity + 1;
    await entry.save();
  }

  return cart;
};

const getCartByUser = async (uid, cartStatus) => {
  const cart = await Cart.findOne({
    where: {
      userId: uid,
      status: cartStatus,
    },
  });
  return cart;
};

module.exports = {
  createCart,
  addProductToCart,
  getCartByUser,
};
