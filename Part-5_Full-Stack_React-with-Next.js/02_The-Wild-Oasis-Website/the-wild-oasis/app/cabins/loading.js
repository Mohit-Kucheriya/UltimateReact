import Spinner from "@/app/_components/Spinner";

export default function () {
  return (
    <div className="grif items-center justify-center ">
      <Spinner />
      <p className="text-xl text-center">Loading cabins data</p>
    </div>
  );
}
