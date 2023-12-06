import FotoInfo from "../assets/fotoInfo.png";

export default function CardInfo() {
    return (
        <div className="w-full mt-16">
            <div className="flex flex-col md:flex-row gap-4 items-start bg-white">
                <img
                    className="object-cover w-full rounded-t-lg"
                    src={FotoInfo}
                    alt="foto-info"
                />
                <div className="flex flex-col justify-between p-4 leading-normal text-left">
                    <p className="text-[#016ABF]">Selayang Pandang</p>
                    <h5 className="mb-2 text-4xl font-bold tracking-tight mt-5 text-gray-900">
                        Selamat Datang di Dinas PPKUKM Kota Palembang
                    </h5>
                    <p className="mb-3 mt-5 font-normal text-gray-700">
                        ida berenang di Sungai Musi Selamat datang di web PPKUKM
                        Kota Palembang Semoga dapat memberikan informasi Kita
                        wujudkan visi Palembang Emas Darussalam 2023
                        "Pengelolaan Keuangan & Aset Daerah yang Akuntabel
                        menuju Opini Laporan Keuangan WTP"
                    </p>
                </div>
            </div>
        </div>
    );
}
