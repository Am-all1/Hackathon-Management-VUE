<template>
  <div id="footerContainer">
    <footer class="footer">
      <div class="copyright">© 2022 Copyright: Nice Start(s) Up</div>
      <div id="homeMadeLogo">Hackathon<span id="letter">(s)</span> manager</div>
      <div class="footerMentions">
        Mentions légales <span id="letter"> |</span> A propos de Nice Start(s)
        Up <span id="letter">|</span>
        Nous contacter
      </div>
    </footer>
  </div>
</template>

<style>
.footer {
  display: flex;
  background-color: rgba(0, 0, 0, 0.815);
  bottom: 0;
  width: 100%;
  color: #969696;
  font-family: revert;
  font-size: 14px;
  font-weight: normal;
  justify-content: space-between;
  align-items: center;
  /* position: fixed; */
}

#homeMadeLogo {
  color: whitesmoke;
  letter-spacing: 1px;
  font-size: x-large;
  margin-top: 20px;
  margin-bottom: 20px;
}

#letter {
  color: red;
}

#footerContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  margin: 0;
}
#footerContainer {
  position: relative;
  min-height: 100%;
  height: 50px;
}

.copyright {
  margin-left: 10px;
}

.footerMentions {
  margin-right: 10px;
}
</style>
