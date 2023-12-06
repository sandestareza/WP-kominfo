import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function CardBerita() {
    const [listBerita, setListBerita] = useState([]);
    useEffect(() => {
        const getListBerita = async () => {
            const response = await fetch(
                "https://diskopukm.palembang.go.id/api/beritas?sort[0]=tanggal%3Adesc&pagination[pageSize]=4&populate=*"
            );
            const berita = await response.json();

            setListBerita(berita.data);
        };

        getListBerita();
    }, []);

    return (
        <div className="w-full bg-[#F2F3F7] mt-10 p-5 md:p-10">
            <div className="flex justify-between">
                <div className="h-full">
                    <p className="relative font-bold text-xl title">
                        Berita PPKUKM
                    </p>
                </div>
                <div className="flex gap-2 items-center text-sm text-[#016ABF]">
                    <p>Selengkapnya </p>
                    <FaArrowRightLong />
                </div>
            </div>
            <div className="w-full rounded-lg mt-10 relative">
                <div className="absolute -right-5 top-20 z-10 bg-white rounded-full">
                    <IoIosArrowDropright size={35} />
                </div>
                <div className="absolute -left-5 top-20 z-10 bg-white rounded-full">
                    <IoIosArrowDropleft size={35} />
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    {listBerita.map((item) => {
                        return (
                            <div key={item.id} className="relative">
                                <img
                                    className="rounded-t-lg md:w-72"
                                    src={`https://diskopukm.palembang.go.id${item.attributes.gambar.data.attributes.url}`}
                                    alt="berita1"
                                />
                                <div className="bg-gradient-to-t from-black to-transparent w-full h-full absolute bottom-0 left-0 text-white">
                                    <div className="absolute bottom-2 left-2 text-left md:w-60">
                                        <p className="text-sm font-bold whitespace-pre-line">
                                            {item.attributes.judul}
                                        </p>
                                        <p className="text-xs mt-3">
                                            {item.attributes.tanggal}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CardBerita;
