import { MdArrowForward } from 'react-icons/md';

export default function BlogFeatured() {
    return (
        <div className="bg-white py-16 md:py-20">
            <div className="px-4 md:px-20 max-w-[1280px] mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-[#5a3e2a] text-3xl md:text-4xl font-bold font-display">More Than Just a Safari</h2>
                        <p className="text-[#5a5a5a] text-lg leading-relaxed">
                            Yala is a living, breathing ecosystem where every rustle in the bushes tells a story. Our blog goes beyond simple booking advice. Here, we share the pulse of the park—from the secret lives of leopards to the intricate behaviors of our elephant herds.
                        </p>
                        <p className="text-[#5a5a5a] text-lg leading-relaxed">
                            Curated by our team of expert naturalists and local guides, these stories aim to educate, inspire, and foster a deeper connection with nature. We believe that responsible tourism starts with understanding.
                        </p>
                        <div className="flex items-center gap-3 text-[#5a3e2a] font-bold pt-2 cursor-pointer group w-fit">
                            <span>Meet Our Contributors</span>
                            <MdArrowForward className="transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                    <div className="flex-1 h-full w-full">
                        <div className="grid grid-cols-2 gap-4">
                            <div
                                className="h-64 rounded-xl bg-cover bg-center translate-y-8 shadow-lg"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQE7lPcuAqhsHCE3DSGAB-7pZ1yJr0qhd1_C4o11reDqDhPPXmBvaMVLb70CchHW7hAnjY54zoDSVp4opdt2HIqaBHVg9M-_ZQFqBW52D4JlvNI0wWovy3mYq5HwmCn6FcWVGoIlDVrF33Exc3jNdxgVKUvKTGr0hWMINTmCAfiQSx-RnT9aq0Yop6PEvAlNZdaHKkmFnw1rPs0VwnRBdNqgXudD2zUuVPi37vfDQVMcAgsWBt8jCYy1KCcqGeiTZ2lMTf5w_C8SBt")' }}
                            ></div>
                            <div
                                className="h-64 rounded-xl bg-cover bg-center shadow-lg"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDX0XdnalZ-eocWpBmw-70DR2eZIzhFP6gD2C_dYzplUqqJ0PZVPF7gbLTtmpkro0Y3PXXsn_6Cndonpo_UzyO8Kcs_uI7-dYx0MdySTiWcHrPC9w594x6Kv0PyTaB2yOwte462DSTGQltO2wpYcw_hYzqD4X-KFLFIyJoeUI_HhqGqLgAmR9JhiiNbJ0GLa03yazqMzx7cep5_Y-I165cVyJ5DKKsB3CmNuL2Do2sPlAz9EOFWxqHQpLhYsI8PFuNBfkC2maiNFX1y")' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
