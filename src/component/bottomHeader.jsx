import React from "react";
import cupCoffee from "/cupcoffee.png"; // Adjust the path to your image
import "./bottomHeader.css";
import { Carousel } from "antd";

const contentStyle = {
  height: "100%",
  color: "brown",
  textAlign: "center",
  background: "transparent",
  padding: "10px 0",
};

const daSarCoffeeDescriptions = [
  "Đa Sar Coffee - Hương vị đậm đà từ hạt cà phê được chăm sóc bởi đôi tay tận tâm của người dân Đa Sar.",
  "Trải nghiệm Đa Sar Coffee, mỗi ly cà phê là kết quả từ tình yêu và sự chăm sóc tỉ mỉ của bà con Đa Sar.",
  "Đa Sar Coffee: Thưởng thức vị ngon tự nhiên từ hạt cà phê được trồng và chăm sóc bởi người nông dân địa phương.",
  "Ly cà phê Đa Sar - Tinh túy từ hạt cà phê tươi được chăm sóc kỹ lưỡng bởi cộng đồng Đa Sar.",
  "Đa Sar Coffee mang đến cho bạn hương vị nguyên bản, đậm đà từ hạt cà phê do chính tay bà con chăm sóc.",
  "Đa Sar Coffee - Mỗi ly cà phê là một câu chuyện về sự cần mẫn và tâm huyết của người dân trồng cà phê Đa Sar.",
  "Hãy cảm nhận sự khác biệt với Đa Sar Coffee, nơi mà hạt cà phê được chăm sóc bằng tình yêu và sự khéo léo của bà con Đa Sar.",
  "Đa Sar Coffee: Hương vị độc đáo từ hạt cà phê được chăm bón tỉ mỉ bởi đôi tay lành nghề của người dân Đa Sar.",
  "Ly cà phê Đa Sar - Kết tinh từ những hạt cà phê được vun trồng và thu hoạch bằng cả tâm huyết của người dân Đa Sar.",
  "Đến với Đa Sar Coffee để thưởng thức vị cà phê nguyên chất từ hạt cà phê được nuôi dưỡng bởi thiên nhiên và bà con Đa Sar.",
];

const BottomHeader = () => {
  return (
    <div className="bottom-header">
      <img
        className="bottom-header-image"
        src={cupCoffee}
        alt="Cup of Coffee"
      />
      <div className="bottom-header-text">
        <Carousel arrows autoplay>
          {daSarCoffeeDescriptions.map((description, index) => (
            <div key={index}>
              <h3 style={contentStyle}>{description}</h3>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BottomHeader;
