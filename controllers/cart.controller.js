const CartService = require("../services/cart.service");

const addProductToCart = async (req, res) => {
  let cart = await CartService.getCartByUser(req.body.userId, "creation");
  if (!cart) {
    cart = CartService.createCart(req.body.userId);
  }
  const responSe = await CartService.addProductToCart({
    productId: req.body.productId,
    cartId: cart.id,
  });
  if (!responSe) {
    return res.json({
      code: 500,
      success: false,
      message: "Can not add product to cart",
    });
  }
  return res.json({
    code: 200,
    success: true,
    message: "Added product to cart",
  });
};

const removeProductFromCart = async (req, res) => {
  let cart = await CartService.getCartByUser(req.body.userId, "creation");
  if (!cart) {
    return res.json({
      code: 500,
      success: false,
      message: "No product in the cart",
    });
  }
  const responSe = await CartService.removeProductFromCart({
    productId: req.body.productId,
    cartId: cart.id,
  });
  if (!responSe) {
    return res.json({
      code: 500,
      success: false,
      message: "Can not remove product from cart",
    });
  }
  return res.json({
    code: 200,
    success: true,
    message: "Removed product from cart",
  });
};

const updateCartStatus = async (req, res) => {
  const response = await CartService.updateCartStatus(
    req.body.cartId,
    req.body.statuss
  );
  return res.json({
    code: 201,
    success: true,
    message: "Successfully updated cart status",
    data: true,
  });
};

module.exports = {
  addProductToCart,
  removeProductFromCart,
};
