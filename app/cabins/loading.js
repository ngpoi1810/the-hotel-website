import Spinner from "../_components/Spinner";

export default function loading() {
  return (
    <div className="grid justify-center items-center">
      <Spinner />
      <span className="text-xl text-primary-200">Loading cabins...</span>
    </div>
  );
}
