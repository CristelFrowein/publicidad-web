import "./ShippingBanner.css"
import { HiOutlineWrench } from "react-icons/hi2"
import { FaWhatsapp } from "react-icons/fa"

function ShippingBanner() {

  const BannerContent = () => (
    <div className="shippingBanner__content">
      <span className="shippingBanner__item">
        <HiOutlineWrench className="shippingBanner__icon" />
        Especialistas en cerramientos residenciales y comerciales
      </span>

      <span className="shippingBanner__separator">|</span>

      <span className="shippingBanner__item shippingBanner__phone">
        <FaWhatsapp className="shippingBanner__icon" />
        Consultanos al 11 2345-6789
      </span>
    </div>
  )

  return (
    <div className="shippingBanner">
      <div className="shippingBanner__track">
        <BannerContent />
        <BannerContent />
        <BannerContent />
      </div>
    </div>
  )
}

export default ShippingBanner
