function pageLoaded() {

    // a munka megkezdese elott alaposan atgondolni a lepesek egymasutanjat
    // mar mukodo kodrol biztonsagi mentes nagyobb atiras elott
    // a kesz kod optimalizalasa - mukodes-sorrend-nevek

    /* HTML
    szemantikai elemek használata
    */

    /* CSS
    fix értékek hanyagolása
    animációk alapos átnézése
    scss előtérbe helyezése
    */

    /* JS
    ciklusok megállítása és újraindítása külső változóval
    duplikált sorok eltüntetése, függvényekbe szervezés
    sebességoptimalizálás, ha több módszerrel is megoldható
    */


    console.log("ok");
    rootDiv = document.getElementById("root");

    let notes = [];

    notes.push({

        type: "language-html",
        pre: "pre",
        tag: "div",
        content: `
        szemantikai elemek használata
        `,
        codetag: "code",
        codeContent: `
        &lt;article&gt;
            &lt;header&gt;
                &lt;h1&gt; Title &lt;/h1&gt;
                &lt;p&gt;Some text...&lt;/p&gt; 
            &lt;/header&gt;
        &lt;/article&gt; 
        `
    },    
        {
        type: "css",
        pre: "pre",   
        tag: "div",
        content: `
        fix értékek hanyagolása
        `,
        codetag: "code",
        codeContent: `
        width: 80vw;
        max-width: 800px;
        `
    },    
        {
        type: "css",
        pre: "pre",
        tag: "div",
        content: `
        animációk alapos átnézése
        `,
        codetag: "code",
        codeContent: `
        @keyframes example {
            0%   {background-color:red; left:0px; top:0px;}
            50%  {background-color:blue; left:200px; top:200px;}
            100% {background-color:red; left:0px; top:0px;}
          }
        `
    },
    {
        type: "css",
        pre: "pre",
        tag: "div",
        content: `
        scss előtérbe helyezése
        `,
        codetag: "code",
        codeContent: `
        nav {
            ul {
                list-style: none;
              
                li {
                    display: inline-block;
                }
            }
        }
        `
    },
        {
        type: "javascript",
        tag: "div",
        pre: "pre",
        content: `
        ciklusok megállítása és újraindítása külső változóval
        `,
        codetag: "code",
        codeContent: `
        const name = "Peter";
        setInterval( {
            alert("Hello " + name + "!");
        }, 3000);
        `
    },
        {
        type: "javascript",
        tag: "div",
        pre: "pre",
        content: `
        duplikált sorok eltüntetése, függvényekbe szervezés
        `,
        codetag: "code",
        codeContent: `
        function functionName(param, param2) {
            // code to be executed
          }
        `
    },
    {
        type: "javascript",
        tag: "div",
        pre: "pre",
        content: `
        sebességoptimalizálás, ha több módszerrel is megoldható
        `,
        codetag: "code",
        codeContent: `
        // don't use
        /* innerHTML = ""; */
        rootDiv = document.getElementById("root");

        rootDiv.insertAdjacentHTML("beforeend", \'
        something
        \`)
        `
    }       
    );




    


    for (notes of notes) {
    //    console.log(notes);
    //    console.log(notes.tag);

         rootDiv.insertAdjacentHTML("beforeend", `
        <${notes.tag}>
        <${notes.tag}>${notes.content}</${notes.tag}>
        <${notes.pre}><${notes.codetag} class="${notes.type} hljs">${notes.codeContent}</${notes.codetag}></${notes.pre}>
        </${notes.tag}>
        `);
      
    }

    
}
window.addEventListener("load", pageLoaded);