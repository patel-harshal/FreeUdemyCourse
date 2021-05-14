class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- Footer -->
	<footer class="page-footer bg-dark" style="margin-top: 20px;">
		<div class="container">
			<div class="row">
				<div class="col-4"></div>
				<div class="col-4">
					<div id="contact">
						<center>
							<a href="https://www.instagram.com/programmers0_0/"><img src="../assets/social/instagram.png" id="contact-logo"></a>
							<a href="https://www.facebook.com/harshal1882001/"><img src="../assets/social/facebook.png" id="contact-logo"></a>
							<a href="https://twitter.com/programmers0_0"><img src="../assets/social/twitter.png" id="contact-logo"></a>
						</center>
					</div>
				</div>
				<div class="col-4"></div>
			</div>
		  <div class="footer-copyright text-center py-3" style="color: white;">©2021 Copyright:
		    <a href="https://www.instagram.com/programmers0_0/">@programmers0_0</a>
		  </div>
		</div>
		</div>
	</footer>
    `;
  }
}

customElements.define('footer-component', Footer);