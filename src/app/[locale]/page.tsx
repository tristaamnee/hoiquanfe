"use client";

import ImageBox from "@/components/ImageBox";
import TextBox from "@/components/TextBox";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [width, setWidth] = useState(1000);
  const t = useTranslations("LeChau");
  const router = usePathname();
  const [currentPath, setCurrentPath] = useState("");
  const localeList = ["vie", "en", "chi"];

  useEffect(() => {
    setWidth(window.innerWidth * 0.9);
  }, []);

  useEffect(() => {
    setCurrentPath(router);
  }, [router]);

  return (
    <div className={roboto.className + " pb-4 px-4"}>
      <TextBox
        text={t("phanmuc")}
        className="py-4 flex justify-center text-white text-center text-3xl font-bold"
      />

      <div className="w-full bg-red flex justify-evenly font-bold py-4 ">
        {localeList.map((locale) => {
          switch (locale) {
            case "vie":
              return (
                <Link
                  key={locale}
                  href="/vie"
                  className={`${
                    currentPath === "/vie" ? "text-white" : "text-black"
                  }`}
                >
                  Tiếng Việt
                </Link>
              );
            case "en":
              return (
                <Link
                  key={locale}
                  href="/en"
                  className={`${
                    currentPath === "/en" ? "text-white" : "text-black"
                  }`}
                >
                  English
                </Link>
              );
            case "chi":
              return (
                <Link
                  key={locale}
                  href="/chi"
                  className={`${
                    currentPath === "/chi" ? "text-white" : "text-black"
                  }`}
                >
                  中国人
                </Link>
              );
          }
        })}
      </div>

      <div
        className="py-[10rem] flex justify-center bg-cover bg-bottom bg-no-repeat relative rounded-lg"
        style={{ backgroundImage: "url(/assets/img/hoiquanLeChau_2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
        <p className="text-white text-center text-5xl font-bold relative leading-relaxed rounded-lg">
          {t("ten")}
        </p>
      </div>
      <TextBox
        text={t("chitietkientruc")}
        className="p-4 flex justify-center text-white text-justify"
      />
      <ImageBox
        url={"/assets/img/hoiquanLechau_1.jpg"}
        alt={"Hội quán Lệ Châu"}
        width={width}
        height={800}
      />
      <TextBox
        text={t("mota2")}
        className="p-4 flex justify-center text-white text-justify"
      />
      <ImageBox
        url={"/assets/img/hoiquanLeChau_3.jpg"}
        alt={"Hội quán Lệ Châu"}
        width={width}
        height={800}
      />
      <TextBox
        text={t("mota3")}
        className="p-4 flex justify-center text-white text-justify"
      />
    </div>
  );
}
