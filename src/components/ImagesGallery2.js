import "../styles.css";

export default function ImagesGallery2() {
	return (
		<section className="images-gallery">
			<div className="img-card">
				<div className="img-container">
					<img class="gallery_img gallery_img_4" />
				</div>
				<p className="img-card-desc">
					Manta rays are large rays belonging to the genus Mobula
					family.
				</p>
			</div>
			<div className="img-card">
				<div className="img-container">
					<img class="gallery_img gallery_img_5" />
				</div>
				<p className="img-card-desc">
					Corals are marine invertebrates within the class Anthozoa of
					the phylum Cnidaria.
				</p>
			</div>
			<div className="img-card">
				<div className="img-container">
					<img class="gallery_img gallery_img_6" />
				</div>
				<p className="img-card-desc">
					The blacktip shark is a species of requiem shark, and part
					of the family Carcharhinidae.
				</p>
			</div>
		</section>
	);
}
