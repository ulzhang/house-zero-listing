export default function Realtor() {
    const urlString = "https://images.ctfassets.net/lfyy09oi3n0b/76fenzZGsgkBq1vcX3mj0O/57b749f96311fa7b4d01e9c9f78acc52/JasonBallard_Headshot_2019__1_.jpg?w=1800&h=800&fl=progressive&q=80&fit=fill&f=face"

    return (<div className="py-2.5">
        <div className="border-black border-2 w-48 h-48">
            <div className="mx-auto flex justify-center">
                <div className="rounded-full w-24 h-24 overflow-hidden">
                    <img className="w-auto h-full object-cover" src={urlString} alt="headshot" />
                </div>
                <h3>Jason Ballard</h3>
                <h3>ICON, CEO</h3>
            </div>
        </div>

    </div>)
}
// .image-cropper {
//     width: 100px;
//     height: 100px;
//     position: relative;
//     overflow: hidden;
//     border-radius: 50%;
//   }
  
//   img {
//     display: inline;
//     margin: 0 auto;
//     height: 100%;
//     width: auto;
//   }