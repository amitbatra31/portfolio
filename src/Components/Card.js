function Card({ title, description, image, link }) {
  return (
    <div className="flex flex-col justify-start bg-white rounded-lg shadow-xl px-8 py-6 font-['Barlow'] space-y-4  md:w-72">
      <h1 className="text-xl ">{title}</h1>
      <div className="relative aspect-auto ">
        <img
          className="w-full object-contain rounded-lg"
          src={image}
          alt={title}
        ></img>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
