import { useState } from "react";

function Books() {
  const [books, uuendaBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick","The Gilded Cage", "A Clockwork Orange", "The Catcher in the Rye", "Brave New World", "The Hobbit", "The Great Gatsby", "The Cat in the Hat", "The Alchemist", "1984", "To Kill a Mockingbird"]);

      const paneTagasi= () => {;
      uuendaBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick","The Gilded Cage", "A Clockwork Orange", "The Catcher in the Rye", "Brave New World", "The Hobbit", "The Great Gatsby", "The Cat in the Hat", "The Alchemist", "1984", "To Kill a Mockingbird"]);
    }














    
// sort
      const sorteeriAZ = () => {
      books.sort();
      console.log(books);
      uuendaBooks(books.slice());
    }

      const sorteeriZA = () => {
      books.sort((a, b) => b.localeCompare(a));
      uuendaBooks(books.slice());
    }
    
      const sorteeriT2hed = () => {
      books.sort((a, b) => a.length - b.length); 
      uuendaBooks(books.slice());
    }
    
      const sorteeriT2hedVastupidi = () => {
      books.sort((a, b) => b.length - a.length); 
      uuendaBooks(books.slice());
    }
      const sorteeriT2hedTeise = () => {
      books.sort((a, b) => a.charAt(1).localeCompare(b.charAt(1)));
      uuendaBooks(books.slice());
    }
// filter
      const filtreeriAnd = () => {
      const tulem = books.filter(element => element.includes("and") === true);
      uuendaBooks(tulem);  
    }
  
      const filtreeriThe = () => {
      const tulem = books.filter(element => element.includes("The") === true);
      uuendaBooks(tulem);    
    }
    
      const filtreeriT2heArv8 = () => {
      const tulem = books.filter(element => element.length === 8);
      uuendaBooks(tulem);    
    }
  
      const filtreeriT2heArvV2iksemKui7 = () => {
      const tulem = books.filter(element => element.length <= 7);
      uuendaBooks(tulem);    
    }
  
      const filtreeriKellelKolmasS = () => {
      const tulem = books.filter(element => element.charAt(2) === "s");
      uuendaBooks(tulem);      
  }
// map element 
  
      const muudaKoikSuureks = () => {
      const tulem = books.map(element => element.toUpperCase());
      uuendaBooks(tulem);    
  }
  
      const muudaKoikVaikseks = () => {
      const tulem = books.map(element => element.toLowerCase());
      uuendaBooks(tulem);   
  }

      const muudaKoikKriipsuga = () => {
      const tulem = books.map(element => "--" + element);
      uuendaBooks(tulem);     
  }

      const muudaKoikNumberLoppu = () => {
      const tulem = books.map(element => element + element.length);
      uuendaBooks(tulem);    
  }

      const muudaKogilIO = () => {
      const tulem = books.map(element => element.replaceAll("i","o"));
      uuendaBooks(tulem);    
  }


  return (
    
    <div>
      <button onClick={paneTagasi}>Reset</button> 
      <button onClick={sorteeriT2hedTeise}>Sorteeri teise t??he j??rgi</button>
      <button onClick={sorteeriT2hedVastupidi}>Sorteeri vastpidises t??htede j??rjekorras</button>
      <button onClick={sorteeriT2hed}>Sorteeri t??hte j??rjekorras</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={filtreeriAnd}>J??te alles vaid "and"ga keskel</button>
      <button onClick={filtreeriThe}>J??te alles vaid "The" sisaldavad</button>
      <button onClick={filtreeriT2heArv8}>Rohkem kui 10 t??hte</button>
      <button onClick={filtreeriT2heArvV2iksemKui7}>V??hem kui 7 t??hte</button>
      <button onClick={filtreeriKellelKolmasS}>Kolmas t??ht S</button>
      <button onClick={muudaKoikSuureks}>Muuda k??ik suurteks t??htedeks</button>
      <button onClick={muudaKoikVaikseks}>Muuda k??ik v??ikesteks t??htedeks</button>
      <button onClick={muudaKoikKriipsuga}>Muuda k??ik kriipsudega</button>
      <button onClick={muudaKoikNumberLoppu}>Pane k??igile number l??ppu</button>
      <button onClick={muudaKogilIO}>Asenda I O-ga</button>


      <div>{books.lenght}</div>
      {books.map((yksPood, index) => <div key={index}>{yksPood}</div>)} 


    </div>
  )
}

export default Books