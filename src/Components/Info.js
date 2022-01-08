import Card from "./Card";

function Info() {
  return (
    <div className="flex flex-col space-y-10 m-4 md:m-10 ">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Homemade_Apple'] mt-10 pb-3 px-6 mx-auto ">
        Projects
      </h1>

      <div className="flex flex-col flex-wrap md:flex-row gap-4 md:gap-6 lg:gap-10 ">
        <Card
          title="Metaverse Chat App"
          image="images/metaverse.png"
          description="A web3 chat application built using Moralis, Nextjs and tailwindcss  "
          link=""
        />

        <Card
          title="Metaverse Chat App"
          image="images/metaverse.png"
          description="A web3 chat application built using Moralis, Nextjs and tailwindcss  "
          link=""
        />

        <Card
          title="Metaverse Chat App"
          image="images/metaverse.png"
          description="A web3 chat application built using Moralis, Nextjs and tailwindcss  "
          link=""
        />

        <Card
          title="Metaverse Chat App"
          image="images/metaverse.png"
          description="A web3 chat application built using Moralis, Nextjs and tailwindcss  "
          link=""
        />
      </div>
    </div>
  );
}

export default Info;
