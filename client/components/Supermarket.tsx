import React from 'react'

const Supermarket = () => {
	return (
		<section className="supermarket-section margin-40">
			<div className="section-title gap-1.5">
				<h3>Colecciones:</h3>
				<span className="title-option flex items-baseline">Supermercado&nbsp;<img src="./img/market-img/Vector.svg" /></span>
			</div>
			<div className="section-container">
				<div className="main-product">
					<div className="main-product-image">
						<img src="./img/supermarket-img/D_NQ_785071-MLA49925593730_052022-OO.webp.svg" alt="" />
					</div>
					<div className="main-product-info">
						<span className="product-info-subtitle">DESCUBRE</span>
						<span className="product-info-title">SUPERMERCADO</span>
					</div>
				</div>
				<div className="supermarket-products">
					<ul className="products-list">
						<li><img src="./img/supermarket-img/D_Q_NP_974625-MCO50881056968_072022-AC.webp.svg" alt="" /></li>
						<li><img src="./img/supermarket-img/D_Q_NP_607202-MCO49742490264_042022-AC.webp.svg" alt="" /></li>
						<li><img src="./img/supermarket-img/D_Q_NP_836022-MCO50698149599_072022-AC.webp.svg" alt="" /></li>
						<li><img src="./img/supermarket-img/D_Q_NP_818268-MCO53683838129_022023-AC.webp.svg" alt="" /></li>
						<li><img src="./img/supermarket-img/D_Q_NP_724857-MCO52556630144_112022-AC.webp.svg" alt="" /></li>
						<li><img src="./img/supermarket-img/D_Q_NP_938631-MCO53529478598_012023-AC.webp.svg" alt="" /></li>
						<li><img src="./img/supermarket-img/D_Q_NP_734105-MCO50543877918_072022-AC.webp.svg" alt="" /></li>
						<li><img src="./img/supermarket-img/D_Q_NP_647076-MCO53339481116_012023-AC.webp.svg" alt="" /></li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export { Supermarket }