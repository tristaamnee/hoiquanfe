"use client";

import ImageBox from "@/components/ImageBox";
import TextBox from "@/components/TextBox";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.innerWidth * 0.9);
  }, []);

  return (
    <div className={roboto.className + " pb-4 px-4"}>
      <TextBox
        text="DI TÍCH KIẾN TRÚC NGHỆ THUẬT QUỐC GIA"
        className="py-4 flex justify-center text-white text-center text-3xl font-bold"
      />

      <div
        className="py-[10rem] flex justify-center bg-cover bg-bottom bg-no-repeat relative rounded-lg"
        style={{ backgroundImage: "url(/assets/img/hoiquanLeChau_2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
        <p className="text-white text-center text-5xl font-bold relative leading-relaxed rounded-lg">
          HỘI QUÁN{width < 470 && <br />} LỆ CHÂU
        </p>
      </div>
      <TextBox
        text={`Hội quán Lệ Châu, tọa lạc tại Thành phố Hồ Chí Minh, là một trong
          những hội quán lâu đời nhất của cộng đồng người Hoa. Được xây dựng vào
          thế kỷ 18, hội quán mang đậm dấu ấn kiến trúc truyền thống với mái
          ngói cong, chạm khắc tinh xảo và những bức phù điêu ý nghĩa.`}
        className="p-4 flex justify-center text-white text-justify"
      />
      <ImageBox
        url={"/assets/img/hoiquanLechau_1.jpg"}
        alt={"Hội quán Lệ Châu"}
        width={width}
        height={800}
      />
      <TextBox
        text={`Bên trong hội quán là nơi thờ cúng các vị thần linh quan trọng, trong đó có Thiên Hậu Thánh Mẫu – vị thần bảo trợ của người Hoa. Không gian nội thất mang đậm nét cổ kính với những bức hoành phi, câu đối và tượng thờ trang nghiêm.`}
        className="p-4 flex justify-center text-white text-justify"
      />
      <ImageBox
        url={"/assets/img/hoiquanLechau_3.jpg"}
        alt={"Hội quán Lệ Châu"}
        width={width}
        height={800}
      />
      <TextBox
        text={`Hàng năm, hội quán tổ chức nhiều hoạt động tín ngưỡng và lễ hội truyền thống, thu hút đông đảo người dân và du khách đến tham dự. Đây là một trong những trung tâm văn hóa quan trọng, góp phần bảo tồn bản sắc của cộng đồng người Hoa tại Việt Nam.`}
        className="p-4 flex justify-center text-white text-justify"
      />
    </div>
  );
}
