import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy({ options }) {
  const [seacrhParams, setSeacrhParams] = useSearchParams();
  const currentSort = seacrhParams.get("sortBy") || "";

  function handleChange(e) {
    seacrhParams.set("sortBy", e.target.value);
    setSeacrhParams(seacrhParams);
  }

  return (
    <Select
      options={options}
      type="white"
      value={currentSort}
      onChange={handleChange}
    />
  );
}
