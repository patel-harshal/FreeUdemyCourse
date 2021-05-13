class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    	<nav class="navbar navbar-expand-md bg-dark navbar-dark">
	  <a class="navbar-brand" href="../index.html">Udemy Free Course</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  	<div class="collapse navbar-collapse" id="collapsibleNavbar">
		    <ul class="navbar-nav">
		      <li class="nav-item">
		        <a class="nav-link" href="../category/Developement.html">Developement</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="../category/Business.html">Business</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="../category/IT_Software.html">IT-Software</a>
		      </li> 
		      <li class="nav-item">
		        <a class="nav-link" href="../category/Design.html">Design</a>
		      </li> 
		      <li class="nav-item">
		        <a class="nav-link" href="../category/Marketing.html">Marketing</a>
		      </li> 
		      <li class="nav-item">
		        <a class="nav-link" href="../category/Health_Fitness.html">Health & Fitness</a>
		      </li> 
		      <li class="nav-item">
		        <a class="nav-link" href="../category/Photography_Video.html">Photography & Video</a>
		      </li> 
		      <li class="nav-item">
		        <a class="nav-link" href="../category/Personal_Developement.html">Personal Development</a>
		      </li>    
		    </ul>
		</div>  
	</nav>
    `;
  }
}

customElements.define('header-component', Header);