import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../user/userSlice";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const username = useSelector(getUserName);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      {cart.length > 0 ? (
        <ul className="divide-y divide-stone-200 border-b">
          {cart.map((item) => (
            <CartItem item={item} key={item.pizzaId} />
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <div className="mt-10 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
