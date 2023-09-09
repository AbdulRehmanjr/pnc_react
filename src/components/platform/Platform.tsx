import './Platform.css'


function Platform(){

    return (
        <>
        <section id="platform" className="row bg-white p-5">
  <div className="col-sm-12 col-md-6">
    <div className="platform">
      <div className="platform_sec-title">Access Our Service Anywhere, Anytime</div>
      <div className="underline_pri-title">Available on Multiple Platforms</div>
      <div className="platform_brief-para py-3">
        <ul className='platform_list'>
          <li className="platform_dev_item"><i className="fa-solid fa-mobile devices_icon"></i> Mobiles</li>
          <li className="platform_dev_item"><i className="fa-solid fa-tablet devices_icon"></i> Tablets</li>
          <li className="platform_dev_item"><i className="fa-solid fa-laptop devices_icon"></i> Laptops</li>
          <li className="platform_dev_item"><i className="fa-solid fa-computer devices_icon"></i> Desktops</li>
        </ul>
      </div>
      <div className="m-4 text-center">
        <button className="btn-platform">
          <i className="fa-brands fa-figma"></i>
          Design
        </button>
      </div>
    </div>
  </div>
  <div className="d-none d-md-block col-md-6">
    <img
      className="platform-img"
      src="src/assets/intro/devices.png"
      alt="platform image"
    />
  </div>
</section>

        </>
    )
}

export default Platform