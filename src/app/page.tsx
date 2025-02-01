"use client";

import TextBox from "@/components/TextBox";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { use, useEffect, useState } from "react";

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
    <div className={roboto.className}>
      <TextBox
        text="DI TÍCH KIẾN TRÚC NGHỆ THUẬT QUỐC GIA"
        className="py-4 flex justify-center text-white text-center text-3xl font-bold"
      />

      <div
        className="py-[10rem] flex justify-center bg-cover bg-bottom bg-no-repeat relative"
        style={{ backgroundImage: "url(/assets/img/hoiquanLeChau_2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <p className="text-white text-center text-5xl font-bold relative leading-relaxed">
          HỘI QUÁN LỆ CHÂU
        </p>
      </div>
      <TextBox
        text={`Hội quán Lệ Châu, tọa lạc tại Thành phố Hồ Chí Minh, là một trong
          những hội quán lâu đời nhất của cộng đồng người Hoa. Được xây dựng vào
          thế kỷ 18, hội quán mang đậm dấu ấn kiến trúc truyền thống với mái
          ngói cong, chạm khắc tinh xảo và những bức phù điêu ý nghĩa.`}
        className="p-4 flex justify-center text-white text-justify"
      />
      <div className="flex justify-center">
        <div className="border-4 inline-block rounded-lg w-4/5">
          <Image
            src="/assets/img/hoiquanLechau_1.jpg"
            alt="Hội quán Lệ Châu"
            className="object-fit rounded-lg w-full h-auto"
            width={width}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
