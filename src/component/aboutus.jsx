import React from "react";
import { Carousel } from "antd";

import "./aboutus.scss";
import aboutIcon1 from "/abouticon1.png";
import aboutIcon2 from "/about-icon-2.png";
import aboutIcon3 from "/about-icon-3.png";
import aboutImg from "/aboutimg.png";
function AboutUs() {
  const contentStyle = {
    height: "100%",
    color: "brown",
    textAlign: "center",
    background: "transparent",
    padding: "10px 0",
    fontSize: "30px",
  };
  const daSarCoffeeDescriptions = [
    {
      title: "Giới thiệu",
      description: [
        "Nổi tiếng với khí hậu ôn hòa và phong cảnh thiên nhiên tuyệt đẹp, Đà Lạt được mệnh danh là 'thủ phủ cà phê' của Việt Nam.",
        "Nhờ điều kiện thổ nhưỡng và khí hậu lý tưởng, cà phê Đà Lạt sở hữu hương vị thơm ngon đặc trưng, khác biệt so với các vùng cà phê khác trên cả nước.",
      ],
    },
    {
      title: "Đặc điểm",
      description: [
        "Cà phê Đà Lạt thường được trồng ở độ cao từ 1.500 đến 2.000 mét, nơi có khí hậu se lạnh và sương mù bao phủ quanh năm.",
        "Điều kiện này giúp cho cây cà phê phát triển chậm rãi, hấp thụ đầy đủ dưỡng chất từ đất, tạo nên hương vị cà phê đậm đà, êm dịu và ít chua đắng.",
      ],
    },
    {
      title: "Phương pháp chế biến",
      description: [
        "Người dân Đà Lạt áp dụng phương pháp chế biến cà phê thủ công truyền thống, góp phần tạo nên hương vị cà phê đặc trưng.",
        "Cà phê được hái bằng tay, phơi nắng tự nhiên và rang xay bằng củi, tạo nên hương vị cà phê nồng nàn, thơm lừng và lưu luyến mãi trong tâm trí người thưởng thức.",
      ],
    },
    {
      title: "Trải nghiệm",
      description: [
        "Đến với Đà Lạt, du khách không chỉ có cơ hội thưởng thức cà phê ngon mà còn được trải nghiệm không gian quán cà phê độc đáo, hòa mình vào thiên nhiên thơ mộng và tận hưởng bầu không khí trong lành, mát mẻ.",
        "Cà phê Đà Lạt không chỉ là thức uống mà còn là một phần văn hóa của người dân nơi đây, là niềm tự hào của thành phố sương mù.",
      ],
    },
  ];

  return (
    <section className="about" id="about">
      <h1 className="heading">
        about us <span>why choose us</span>
      </h1>
      <div className="row">
        <div className="image">
          <img src={aboutImg} alt="About Us" />
        </div>
        <div style={{ width: "50%" }} className="content">
          <h3 class="title">
            Điều gì khiến cà phê Đa Sar là lựa chọn của bạn?
          </h3>
          <Carousel arrows autoplay>
            {daSarCoffeeDescriptions.map((item, index) => (
              <div key={index}>
                <h3 style={contentStyle}>{item.description}</h3>
              </div>
            ))}
          </Carousel>
          <a style={{ fontSize: "large" }} href="#" className="btn">
            read more
          </a>
          <div className="icons-container">
            <div className="icons">
              <img src={aboutIcon1} alt="Quality Coffee" />
              <h3>Cà phê chất lượng</h3>
            </div>
            <div className="icons">
              <img src={aboutIcon2} alt="Our Branches" />
              <h3>Hương vị khó quên</h3>
            </div>
            <div className="icons">
              <img src={aboutIcon3} alt="Free Delivery" />
              <h3>Vận chuyển nhanh chóng</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
