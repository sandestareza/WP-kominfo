import React from "react";
import Video1 from "../assets/video1.png";
import Video2 from "../assets/video2.png";
import Video3 from "../assets/video3.png";
import IconYt from "../assets/iconYt.png";
import Infografis from "../assets/infografis.png";
import { FaArrowRightLong } from "react-icons/fa6";

function CardVideo() {
    return (
        <div className="mt-10 p-5 md:p-0">
            <div className="text-left">
                <p className="relative font-bold text-xl title">Video UMKM</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-4">
                <div className="md:col-span-2">
                    <div className="relative">
                        <img src={Video1} alt="video1" className="w-full" />
                        <div className="absolute top-1/2 w-full">
                            <img
                                src={IconYt}
                                alt="iconYt"
                                className="mx-auto"
                            />
                        </div>
                    </div>
                    <div className="text-left w-full">
                        <p className="font-bold">
                            Wawako Memantau Pendistribusian Bantuan dari Yayasan
                            Budha Tzu Chi di Rumah...
                        </p>
                        <p className="text-gray-400">
                            Selasa, 21 Februari 2022
                        </p>
                    </div>
                </div>
                <div className="order-last md:order-none md:row-span-2">
                    <div className="flex flex-col">
                        <div className="w-full flex justify-between shadow h-auto p-4">
                            <p className="text-xl font-bold">Infografis</p>
                            <div className="flex gap-2 items-center text-sm text-[#016ABF]">
                                <p>Lihat lainnya </p>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div className="overflow-y-auto h-[35rem]">
                            <div className="w-full flex gap-4 shadow h-fit p-4 text-left">
                                <img src={Infografis} alt="Infografis" />
                                <div>
                                    <p className="text-xl font-bold">
                                        Selamat Hari Raya Nyepi 2022
                                    </p>
                                    <p className="text-sm text-slate-400 mt-4">
                                        Kamis, 3 Maret 2022
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex gap-4 shadow h-fit p-4 text-left">
                                <img src={Infografis} alt="Infografis" />
                                <div>
                                    <p className="text-xl font-bold">
                                        Selamat Hari Raya Nyepi 2022
                                    </p>
                                    <p className="text-sm text-slate-400 mt-4">
                                        Kamis, 3 Maret 2022
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex gap-4 shadow h-fit p-4 text-left">
                                <img src={Infografis} alt="Infografis" />
                                <div>
                                    <p className="text-xl font-bold">
                                        Selamat Hari Raya Nyepi 2022
                                    </p>
                                    <p className="text-sm text-slate-400 mt-4">
                                        Kamis, 3 Maret 2022
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex gap-4 shadow h-fit p-4 text-left">
                                <img src={Infografis} alt="Infografis" />
                                <div>
                                    <p className="text-xl font-bold">
                                        Selamat Hari Raya Nyepi 2022
                                    </p>
                                    <p className="text-sm text-slate-400 mt-4">
                                        Kamis, 3 Maret 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img src={Video2} alt="Video2" className="w-full" />
                        <div className="absolute top-1/2 w-full">
                            <img
                                src={IconYt}
                                alt="iconYt"
                                className="mx-auto"
                            />
                        </div>
                    </div>
                    <div className="text-left w-full">
                        <p className="font-bold">
                            PPS Himpun Rp44M, Walikota Palembang Himbau
                            Masyarakat...
                        </p>
                        <p className="text-gray-400">
                            Selasa, 21 Februari 2022
                        </p>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img src={Video3} alt="video3" className="w-full" />
                        <div className="absolute top-1/2 w-full">
                            <img
                                src={IconYt}
                                alt="iconYt"
                                className="mx-auto"
                            />
                        </div>
                    </div>
                    <div className="text-left w-full">
                        <p className="font-bold">
                            April Proyek Tahap Dua Sekanak Labidaro Palembang
                            Dimulai
                        </p>
                        <p className="text-gray-400">
                            Selasa, 21 Februari 2022
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardVideo;
