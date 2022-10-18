export default function Employee({ role, image, name, editEmployees }) {
  return (
    <div className="w-[350px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        src={image}
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{name}</p>
          <p className="text-gray-500 font-medium">{role}</p>
        </div>
        {editEmployees}
      </div>
    </div>
  );
}
