export default function HelloWorld(){
    const propUserCard = {
        nama : "goku",
        nim : "9999",
        tanggal: "14/02/26"
    };
    return (

        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GretingBinjay/>
            <UserCard nama= "Syauqi" nim= "2455301185" tanggal="14/02/06"/>
           <UserCard{...propUserCard}/>
           <img src="img\Gemini_Generated_Image_btdds3btdds3btdd.png" alt="logo" width="100%"/>
        </div>
    );
}

function GretingBinjay(){
    return(
    <small>Salam dari binjai</small>, // parent
    <CobaCoba/>
    )
}


function CobaCoba(){
    return(
        <small>Ini CobaCoba</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}
function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}