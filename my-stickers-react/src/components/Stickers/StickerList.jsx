import Sticker from "../Stickers/Sticker";

function StickerList({stickers}){
return (
    <ul>
        
            {stickers.map(({img, label}) => { 
            
           return  <li><Sticker img={img} label={label}/></li>
               
            })}
        
    </ul>
);
};

export default StickerList