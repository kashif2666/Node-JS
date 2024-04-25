    const quotes=document.getElementById("quotes");
    const author=document.getElementById("author");
    const quoteBtn=document.getElementById("quoteBtn");





    const getNewQuotes=(realData)=>{
      let randomNum=Math.round(Math.random()*10);

      // console.log(realData[randomNum].text);
      // console.log(realData[randomNum].author);
      quotes.innerHTML=`<h1>${realData[randomNum].text} </h1>`;
      author.innerHTML=`<h5> By ${realData[randomNum].author}</h5>`;
      quoteBtn.innerText="New Quote";

    }

    const getQuotes= async ()=>{
      const api="https://type.fit/api/quotes";

      try {

        let data=await fetch(api);
        let realData=await data.json();

        getNewQuotes(realData);

      //  console.log(realData[0].text);
      //   console.log(realData[0].author);

      }catch(error){

      }
    };
    
    quoteBtn.addEventListener("click",getQuotes);
