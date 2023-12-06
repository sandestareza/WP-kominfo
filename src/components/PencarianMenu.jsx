import React from "react";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";
import Icon5 from "../assets/icon5.png";
import Icon6 from "../assets/icon6.png";

function PencarianMenu() {
    return (
        <div className="mt-10">
            <p className="text-xl font-bold">Cari Berdasarkan</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-6 justify-center items-center mt-10 text-center">
                <div className="text-center">
                    <img src={Icon1} alt="Icon1" className="mx-auto mb-8 h-16" />
                    <p className="w-full mx-auto">Agenda Pelatihan</p>
                </div>
                <div className="text-center">
                    <img src={Icon2} alt="Icon2" className="mx-auto mb-8 h-16" />
                    <p className="w-full mx-auto">Pendataan UMKM</p>
                </div>
                <div className="text-center">
                    <img src={Icon3} alt="Icon3" className="mx-auto mb-8 h-16" />
                    <p className="w-full mx-auto">Pendataan Koperasi</p>
                </div>
                <div className="text-center">
                    <img src={Icon4} alt="Icon4" className="mx-auto mb-8 h-16" />
                    <p className="w-full mx-auto">Galeri</p>
                </div>
                <div className="text-center">
                    <img src={Icon5} alt="Icon5" className="mx-auto mb-8 h-16" />
                    <p className="w-full mx-auto">Konsultasi UMKM</p>
                </div>
                <div className="text-center">
                    <img src={Icon6} alt="Icon6" className="mx-auto mb-8 h-16" />
                    <p className="w-full mx-auto">Konsultasi Klinik Koperasi</p>
                </div>
            </div>
        </div>
    );
}

export default PencarianMenu;
