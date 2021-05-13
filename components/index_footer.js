class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- Footer -->
	<footer class="page-footer bg-dark" >
		<div class="container">
			<div class="container-sm">
				<div class="row">
					<div class="col-sm-4">
						<h5 class="font-weight-bold text-uppercase mt-3 mb-4" style="color: white;">Blank Page</h5>
					</div>
					<div class="col-sm-4">
						<!-- Links -->
				        <h5 class="font-weight-bold mt-3 mb-4" style="color: white;">Main Link</h5>

				        <ul class="list-unstyled">
				          <li>
				            <a href="#!" id="style-link">Contact Us</a>
				          </li>
				          <li>
				            <a href="#!" id="style-link">Privacy Policy</a>
				          </li>
				        </ul>
					</div>
					<div class="col-sm-4" style="margin-bottom: 20px;">
						<h5 class="font-weight-bold mt-3 mb-4" style="color: white;">Social Media</h5>

						<!-- Social buttons -->
						<a href="#" class="fa fa-facebook"></a>
						<a href="#" class="fa fa-instagram"></a>
						<a href="#" class="fa fa-twitter"></a>
					</div>
				</div>
			</div>
		</div>
		<!-- Copyright -->
		  <div class="footer-copyright text-center py-3" style="color: white;">©2021 Copyright:
		    <a href="">@devopscoding</a>
		  </div>
		</footer>
    `;
  }
}

customElements.define('footer-component', Footer);