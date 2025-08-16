import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // 3. TO GET DATA FROM LOADER USING CUSTOM HOOK.
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-4">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// 1. TO CREATE LOADER FUNCTION
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
