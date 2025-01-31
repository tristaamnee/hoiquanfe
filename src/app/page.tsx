import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={roboto.className}>
      <div className="py-4 flex justify-center">
        <p className="text-white text-center text-3xl font-bold">
          DI TÍCH KIẾN TRÚC NGHỆ THUẬT QUỐC GIA
        </p>
      </div>
      <div
        className="py-[10rem] flex justify-center bg-cover bg-bottom bg-no-repeat relative"
        style={{ backgroundImage: "url(/assets/img/hoiquanLeChau_2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <p className="text-white text-center text-5xl font-bold relative leading-relaxed">
          HỘI QUÁN LỆ CHÂU
        </p>
      </div>
      <div className="p-4 flex justify-center">
        <p className="text-white text-justify">
          Hội quán Lệ Châu, tọa lạc tại Thành phố Hồ Chí Minh, là một trong
          những hội quán lâu đời nhất của cộng đồng người Hoa. Được xây dựng vào
          thế kỷ 18, hội quán mang đậm dấu ấn kiến trúc truyền thống với mái
          ngói cong, chạm khắc tinh xảo và những bức phù điêu ý nghĩa.
        </p>
      </div>
      <div className="p-4 flex justify-center">
        <div className="border-4 inline-block rounded-lg max-w-full">
          <Image
            src="/assets/img/hoiquanLechau_1.jpg"
            alt="Hội quán Lệ Châu"
            className="object-cover rounded-lg w-full max-w-[800px] h-auto"
            width={1000}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
