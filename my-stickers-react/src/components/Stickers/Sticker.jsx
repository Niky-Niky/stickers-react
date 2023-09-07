function Sticker({img, label}){
  
    //    stickers.map((sticker) => {
    //     return console.log(sticker)
    // });
return (
    <div>
        <img src={img} alt="" />
        <p>{label}</p>
    </div>
);


};

export default Sticker;