import React from "react";
import BannerWeb from "../assets/banner.png";

function Banner() {
    return (
        <div className="relative md:mt-8 w-full">
            <img src={BannerWeb} alt="banner" className="w-full" />
            <div className="bg-gradient-to-t from-slate-900 to-transparent w-full h-full absolute bottom-0 left-0 text-white">
                <div className="absolute bottom-10 text-left left-4 md:left-24 z-10">
                    <p className="text-xl md:text-4xl font-bold">Dinas Koperasi & UKM</p>
                    <p className="text-xs md:text-xl mt-2 md:mt-4">
                        Dinas Koperasi dan Usaha Kecil Menengah
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
