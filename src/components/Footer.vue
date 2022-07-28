<template>

 <div id="footerContainer">
      <footer class="footer">
        <div id="homeMadeLogo">Hackathon<span id="letter">(s)</span> manager</div>
     
        <div class="footerMentions">
          Mentions légales <span id="letter"> |</span> 
          A propos de Nice Start(s) Up  <span id="letter">|</span> 
          Nous contacter
        </div>
        <div class="copyright">© 2022 Copyright: Nice Start(s) Up</div>
      </footer>
    </div>
</template>


<style>
 .footer {
  background-color: rgba(0, 0, 0, 0.815);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  color: #969696;
  font-family: "Work Sans", Arial;
  font-size: 14px;
  font-weight: normal;
  
}
.footerMentions {
  text-align:right;
  padding-left: 10%;
  padding-top: 10px;
}

#homeMadeLogo{
  color: whitesmoke;
  font-family: fantasy;
  letter-spacing: 1px;
  font-size: x-large;
}

#letter{
  color: red;
}

  body {
 display: flex;
flex-direction: column;
justify-content: space-between;
 height: 100vh;
 font-family: Arial, Helvetica, sans-serif;
margin: 0;
}
 #footerContainer {
 position: relative;
 min-height: 100%;
 padding-bottom: 20px;
padding-top: 50px;

 height: 50px;
 }
  
</style>