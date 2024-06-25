import BookIcon from "@/icons/BookIcon";
import TryoutCategory from "./TryoutCategory";
import colors from "tailwindcss/colors";
import ClockIcon from "@/icons/ClockIcon";
import InfoIcon from "@/icons/InfoIcon";
import Image from "next/image";

export default function TryoutDetail() {
    const tryoutData = dummy.data;
    const hour = Math.floor(tryoutData.total_duration / 3600);
    const minute = Math.floor((tryoutData.total_duration % 3600) / 60);
    const bufferTime = Math.floor(tryoutData.buffer_duration / 60);
    const formatDateID = (date: string) => {
        return new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    return (
        <div className="flex flex-col gap-y-3 p-5">
            <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-gray-950">{tryoutData.name}</h1>
                    <p className="font-semibold text-xl text-gray-400">{formatDateID(tryoutData.started_at)}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="flex flex-col gap-1">
                        <span className="flex rounded-md items-center gap-1 border px-4 py-1 border-gray-300 bg-gray-200">
                            <BookIcon color={colors.gray[500]} size={16} />
                            <p className="text-gray-500 font-semibold">{tryoutData.total_sets_questions} Soal</p>
                        </span>
                        <span className="flex items-center rounded-md gap-1 border px-4 py-1 border-gray-300 bg-gray-200">
                            <ClockIcon size={16} color={colors.gray[500]} />
                            <p className="font-semibold text-gray-500">
                                {Math.floor(tryoutData.total_sets_durations / 60)} menit
                            </p>
                        </span>
                    </div>
                    <Image src="/assets/gratis.svg" width={72} height={72} alt="gratis" />
                </div>
            </div>
            <div className="flex justify-center gap-2 items-center text-center font-bold text-gray-700 mb-3">
                <h1>Struktur Tryout Pro</h1>
                <InfoIcon size={20} color={colors.gray[700]} />
            </div>
            {tryoutData.categories.map((category, i) => (<TryoutCategory category={category} key={i} />))}
            <div className="grid grid-cols-3 items-center mb-2 bg-gray-50 px-6 py-4 rounded-xl">
                <h1 className="font-bold text-gray-700">Total Pengerjaan</h1>
                <div className="flex justify-end items-center gap-2">
                    <span className="flex rounded-full items-center gap-1 border px-4 py-1 border-gray-300 bg-gray-200">
                        <BookIcon color={colors.gray[600]} size={16} />
                        <p className="text-gray-600 font-semibold">{tryoutData.total_sets_questions} Soal</p>
                    </span>
                    <span className="flex items-center rounded-full gap-1 border px-4 py-1 border-gray-300 bg-gray-200">
                        <ClockIcon size={16} color={colors.gray[600]} />
                        <p className="font-semibold text-gray-600">
                            {hour} jam {minute > 0 && `${minute} menit`} + {bufferTime} menit istirahat
                        </p>
                    </span>
                </div>
            </div>
        </div>
    )
}

const dummy: TryoutDetail = {
    "statusCode": 200,
    "message": "Success",
    "data": {
        "id": "7a691488-faf3-4645-82f5-326ece3a6139",
        "name": "Try Out Akbar 2",
        "expiry_date": "2024-10-21T00:00:00.000Z",
        "description": "Bergabunglah dengan TRY OUT AKBAR di BangSoal dan uji kesiapan SNBT kalian dengan GRATIS dan menangkan hadiah total sebesar 300rb rupiah!",
        "is_kilat": false,
        "buffer_duration": 600,
        "started_at": "2024-03-30T17:58:26.000Z",
        "event_name": "TO_AKBAR_2",
        "categories": [
            {
                "Kemampuan Penalaran Umum": [
                    {
                        "id": "ad509be3-7723-4985-9b5d-53dfd2cc04c9",
                        "subject_id": "7dcdb22f-a115-4fb8-a521-9980940253d7",
                        "subject_name": "Penalaran Induktif",
                        "duration": 600,
                        "total_questions": 10
                    },
                    {
                        "id": "ad509be3-7723-4985-9b5d-53dfd2cc04c9",
                        "subject_id": "7dcdb22f-a115-4fb8-a521-9980940253d7",
                        "subject_name": "Penalaran Deduktif",
                        "duration": 600,
                        "total_questions": 10
                    },
                    {
                        "id": "ad509be3-7723-4985-9b5d-53dfd2cc04c9",
                        "subject_id": "7dcdb22f-a115-4fb8-a521-9980940253d7",
                        "subject_name": "Penalaran Kuantitatif",
                        "duration": 600,
                        "total_questions": 10
                    }
                ]
            },
            {
                "Pengetahuan dan Pemahaman Umum": [
                    {
                        "id": "bd8c7f3e-c79d-49e5-8baf-79ff224653cd",
                        "subject_id": "02834c15-2d94-4488-b276-c89a87d3d022",
                        "subject_name": "Pengetahuan dan Pemahaman Umum",
                        "duration": 900,
                        "total_questions": 20
                    }
                ]
            },
            {
                "Kemampuan Memahami Bacaan dan Menulis": [
                    {
                        "id": "d7b89658-3631-4a9c-b7f4-b23cef1d22d8",
                        "subject_id": "2db11c6e-a8c0-482e-9bc1-d7ff9c3fc47d",
                        "subject_name": "Kemampuan Memahami Bacaan dan Menulis",
                        "duration": 1500,
                        "total_questions": 20
                    }
                ]
            },
            {
                "Pengetahuan Kuantitatif": [
                    {
                        "id": "4f27510e-7150-47ea-9930-c46d44e28c5b",
                        "subject_id": "843193b2-4710-48ae-b5eb-d5b7121a33c5",
                        "subject_name": "Pengetahuan Kuantitatif",
                        "duration": 1200,
                        "total_questions": 15
                    }
                ]
            },
            {
                "Literasi dalam Bahasa Indonesia dan Bahasa Inggris": [
                    {
                        "id": "77cc287e-287f-4a1a-9914-e39273479808",
                        "subject_id": "ecc7881d-3adf-420a-abc0-cad3ff3233e3",
                        "subject_name": "Literasi dalam Bahasa Indonesia",
                        "duration": 2700,
                        "total_questions": 30
                    },
                    {
                        "id": "899741e8-73eb-4965-837f-73b5e08e1749",
                        "subject_id": "8d71415e-d70b-466d-9b16-00726cf61d40",
                        "subject_name": "Literasi dalam Bahasa Inggris",
                        "duration": 1800,
                        "total_questions": 20
                    }
                ]
            },
            {
                "Penalaran Matematika": [
                    {
                        "id": "147d4640-a589-4ef6-881a-50c4db2ec6bc",
                        "subject_id": "ec6d7a6c-f4d7-40b0-9f1b-7ffdcac9ee5b",
                        "subject_name": "Penalaran Matematika",
                        "duration": 1800,
                        "total_questions": 20
                    }
                ]
            }
        ],
        "total_sets_questions": 155,
        "total_sets_durations": 11700,
        "total_duration": 12300
    }
}

export interface TryoutDetail {
    statusCode: number;
    message: string;
    data: Data;
}

export interface Data {
    id: string;
    name: string;
    expiry_date: string;
    description: string;
    is_kilat: boolean;
    buffer_duration: number;
    started_at: string;
    event_name: string;
    categories: Category[];
    total_sets_questions: number;
    total_sets_durations: number;
    total_duration: number;
}

export interface Category {
    [key: string]: Subject[];
}

export interface Subject {
    id: string;
    subject_id: string;
    subject_name: string;
    duration: number;
    total_questions: number;
}