const Nav2 = () => {
  const Items = [
    {img: "/public/home/img4.png ",name: "Festive Decor ",},
    {img: "/public/home/img4.png  ",name: "Wall Hangings ",},
    { img: "/public/home/img5.png ", name: "Spiritual & Poo... ", },
    {img: " /public/home/img6.png",name: "Textiles & Soft... ",},
    {img: "/public/home/img4.png  ",name: "Furniture ", },
    {img: "/public/home/img4.png  ",name: "Wall Art ", },
    {img: "/public/home/img4.png  ",  name: "Kitchen Decor ", }
  ];
  return (
    <div className="flex justify-around py-5 px-[8%] ">
      {Items.map((item, index) => (
        <div key={item.name || index} className="flex flex-col gap-2 items-center">
          <img src={item.img} alt="" className=" w-17 h-17 rounded-full " />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Nav2;
