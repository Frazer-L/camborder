import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-md navbar-light" style={{backgroundColor: "#ddd"}}>
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
      
    </div>
    <div class="mx-auto order-0">
      <div className="container"><a class="navbar-brand mx-auto" id="navbarTitle" href="/" style={{fontFamily: 'Staatliches'}}>camborder.com</a></div>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" id="navbarHowTo" href="/#/howto">How to use</a>
            </li>
        </ul>
    </div>
</nav>

    // <header>
    //   <h1>
    //       OBS border generator
    //   </h1>
    // </header>
  );
}

export default Header;
