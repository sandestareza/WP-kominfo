import { Card } from "flowbite-react";
import React from "react";
import Produk1 from "../assets/produk1.png";
import Produk2 from "../assets/produk2.png";
import Produk3 from "../assets/produk3.png";
import Produk4 from "../assets/produk4.png";
import User2 from "../assets/user2.png";
import User3 from "../assets/user3.png";
import { FaArrowRightLong } from "react-icons/fa6";

function CardProduk() {
    return (
        <div className="mt-10 p-5 md:p-0">
            <div className="text-left flex justify-between">
                <p className="relative font-bold text-xl title">Produk UMKM</p>
                <div className="flex gap-2 items-center text-sm text-[#016ABF]">
                    <p>Selengkapnya </p>
                    <FaArrowRightLong />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-4">
                <div>
                    <Card
                        className="max-w-sm"
                        imgAlt="Produk1"
                        imgSrc={Produk1}
                    >
                        <h5 className="text-md font-normal tracking-tight text-left">
                            Pempek
                        </h5>
                        <p className="font-bold text-xl text-left">Rp. 2000</p>
                        <div className="flex gap-4 items-center">
                            <img
                                src={Produk1}
                                alt="user1"
                                className="rounded-full h-8 w-8"
                            />
                            <p className="text-slate-400">Pempek Sarayi</p>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card
                        className="max-w-sm"
                        imgAlt="Produk2"
                        imgSrc={Produk2}
                    >
                        <h5 className="text-md font-normal tracking-tight text-left">
                            Makanan Ringan
                        </h5>
                        <p className="font-bold text-xl text-left">Rp 10.000</p>
                        <div className="flex gap-4 items-center">
                            <img
                                src={User2}
                                alt="user2"
                                className="rounded-full h-8 w-8"
                            />
                            <p className="text-slate-400">soniaverina99</p>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card
                        className="max-w-sm"
                        imgAlt="Produk3"
                        imgSrc={Produk3}
                    >
                        <h5 className="text-md font-normal tracking-tight text-left">
                            Cemilan Sehat
                        </h5>
                        <p className="font-bold text-xl text-left">Rp 35.000</p>
                        <div className="flex gap-4 items-center">
                            <img
                                src={User2}
                                alt="user2"
                                className="rounded-full h-8 w-8"
                            />
                            <p className="text-slate-400">soniaverina99</p>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card
                        className="max-w-sm"
                        imgAlt="Produk4"
                        imgSrc={Produk4}
                    >
                        <h5 className="text-md font-normal tracking-tight text-left">
                            Rajutan
                        </h5>
                        <p className="font-bold text-xl text-left">Rp 75.000</p>
                        <div className="flex gap-4 items-center">
                            <img
                                src={User3}
                                alt="user3"
                                className="rounded-full h-8 w-8"
                            />
                            <p className="text-slate-400">Rajutan MommyYanti</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default CardProduk;
