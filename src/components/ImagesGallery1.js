import "../styles.css";

export default function ImagesGallery1() {
	return (
		<section className="images-gallery">
			<div className="img-card">
				<div className="img-container">
					<img class="gallery_img gallery_img_1" />
				</div>
				<p className="img-card-desc">
					Clownfish or anemonefish are fishes from the subfamily
					Amphiprioninae in the family Pomacentridae.
				</p>
			</div>
			<div className="img-card">
				<div className="img-container">
					<img class="gallery_img gallery_img_2" />
				</div>
				<p className="img-card-desc">
					Humans (Homo sapiens) are a species of highly intelligent
					primates. This is the female kind.
				</p>
			</div>
			<div className="img-card">
				<div className="img-container">
					<img class="gallery_img gallery_img_3" />
				</div>
				<p className="img-card-desc">
					Dolphin is a common name of aquatic mammals within the
					infraorder Cetacea family.
				</p>
			</div>
		</section>
	);
}
