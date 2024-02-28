import styles from "./Home.module.css"
function Home() {
    return(
    

        <>
            <header>
                <div className={styles.container}>
                    <div className="search">
                        <div className="logo"><img src="/tiendamia-logo.svg" width="218" alt="Logo store"/></div>
                        <div className="form">
                            <form><input type="text" placeholder="Search"/></form>
                        </div>
                        <div className="social">
                            <ul>
                                <li><a href="https://facebook.com"><img src="/facebook.png" alt="Logo social"/></a></li>
                                <li><a href="https://instagram.com"><img src="/instagram.png" alt="Logo social"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav">
                        <ul>
                            <li><a href="#">Ofertas de la semana</a></li>
                            <li><a href="#">Cómo comprar</a></li>
                            <li><a href="#">Costos y tarifas</a></li>
                            <li><a href="#">Mis pedidos</a></li>
                            <li><a href="#">Invita y gana</a></li>
                            <li><a href="#">Garantía de Entrega</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <section id="hero">
                <div className={styles.container}>
                    <div className="title-container">
                        <span>tecnología</span>
                        <span>renovada</span>
                    </div>
                </div>
            </section>
            <main>
                <div className={styles.container}>
                    <div className={styles['product-card']}>
                        <article className={styles['product-card']}>
                            <img className={styles['product-img']} src="/mock1.jpg" alt="Macbook Pro"/>
                                <div className={styles['product-info']}>
                                    <span className={styles['product-title']}>Macbook Pro 15'4</span>
                                    <span className={styles['product-description']}>Space Gray</span>
                                    <div className={styles['product-price-block']}>
                                        <span className="price">$750.000</span>
                                        <span className="discount">50% Off</span>
                                    </div>
                                    <div className={styles['product-tax-policy']}>Incluye impuesto País y percepción AFIP</div>
                                </div>
                        </article>
                        <article className={styles['product-card']}>
                            <img className={styles['product-img']} src="/mock1.jpg" alt="Macbook Pro"/>
                                <div className={styles['product-info']}>
                                    <span className={styles['product-title']}>Macbook Pro 15'4</span>
                                    <span className={styles['product-description']}>Space Gray</span>
                                    <div className={styles['product-price-block']}>
                                        <span className="price">$750.000</span>
                                        <span className="discount">50% Off</span>
                                    </div>
                                    <div className={styles['product-tax-policy']}>Incluye impuesto País y percepción AFIP</div>
                                </div>
                        </article>
                        <article className={styles['product-card']}>
                            <img className={styles['product-img']} src="/mock1.jpg" alt="Macbook Pro"/>
                                <div className={styles['product-info']}>
                                    <span className={styles['product-title']}>Macbook Pro 15'4</span>
                                    <span className={styles['product-description']}>Space Gray</span>
                                    <div className={styles['product-price-block']}>
                                        <span className="price">$750.000</span>
                                        <span className="discount">50% Off</span>
                                    </div>
                                    <div className={styles['product-tax-policy']}>Incluye impuesto País y percepción AFIP</div>
                                </div>
                        </article>
                        <article className={styles['product-card']}>
                            <img className={styles['product-img']} src="/mock1.jpg" alt="Macbook Pro"/>
                                <div className={styles['product-info']}>
                                    <span className={styles['product-title']}>Macbook Pro 15'4</span>
                                    <span className={styles['product-description']}>Space Gray</span>
                                    <div className={styles['product-price-block']}>
                                        <span className="price">$750.000</span>
                                        <span className="discount">50% Off</span>
                                    </div>
                                    <div className={styles['product-tax-policy']}>Incluye impuesto País y percepción AFIP</div>
                                </div>
                        </article>
                        <article className={styles['product-card']}>
                            <img className={styles['product-img']} src="/mock1.jpg" alt="Macbook Pro"/>
                                <div className={styles['product-info']}>
                                    <span className={styles['product-title']}>Macbook Pro 15'4</span>
                                    <span className={styles['product-description']}>Space Gray</span>
                                    <div className={styles['product-price-block']}>
                                        <span className="price">$750.000</span>
                                        <span className="discount">50% Off</span>
                                    </div>
                                    <div className={styles['product-tax-policy']}>Incluye impuesto País y percepción AFIP</div>
                                </div>
                        </article>
                    </div>
                </div>
            </main>
            <footer>
                <div className={styles.container}>
                    <div className="columns-container">
                        <div className="col">
                            <ul>
                                <li className="col-main-item"><a href="#">Ofertas de la semana</a></li>
                                <li><a href="#">Laptops</a></li>
                                <li><a href="#">Audio</a></li>
                                <li><a href="#">Auticulares</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li className="col-main-item"><a href="#">Cómo comprar</a></li>
                                <li><a href="#">Formas de pago</a></li>
                                <li><a href="#">Envios</a></li>
                                <li><a href="#">Devoluciones</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li className="col-main-item"><a href="#">Costos y tarifas</a></li>
                                <li><a href="#">Impuestos</a></li>
                                <li><a href="#">Facturación</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li className="col-main-item"><a href="#">Mis pedidos</a></li>
                                <li><a href="#">Pedir nuevamente</a></li>
                                <li><a href="#">Lista de deseos</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li className="col-main-item"><a href="#">Garantía de Entrega</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        Curso de HTML + CSS 2023
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Home;