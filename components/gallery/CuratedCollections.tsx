import React from 'react';

export default function CuratedCollections() {
    return (
        <div className="bg-white py-20 px-4 md:px-10">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="text-3xl font-display font-bold text-primary mb-10 text-center">Curated Collections</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <a className="group block" href="#">
                        <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                            <img alt="Leopard" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX0XdnalZ-eocWpBmw-70DR2eZIzhFP6gD2C_dYzplUqqJ0PZVPF7gbLTtmpkro0Y3PXXsn_6Cndonpo_UzyO8Kcs_uI7-dYx0MdySTiWcHrPC9w594x6Kv0PyTaB2yOwte462DSTGQltO2wpYcw_hYzqD4X-KFLFIyJoeUI_HhqGqLgAmR9JhiiNbJ0GLa03yazqMzx7cep5_Y-I165cVyJ5DKKsB3CmNuL2Do2sPlAz9EOFWxqHQpLhYsI8PFuNBfkC2maiNFX1y" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">The Leopard of Yala</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">Exclusive shots of the world's highest density leopard population.</p>
                    </a>
                    <a className="group block" href="#">
                        <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                            <img alt="Elephants" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC02iI-Phj57mRdcqhi7ftq6HJG72LIz1Vy64_MyMIaUAnCOJOmfeyFiDoEGm15xD8NbHrR215QEhXPsS5-Y41t2Get_FXtFMkqbc6YvmM3zOiNmMglpb-z7sHQkgrDas4fg6vmu0FmnSQ4vfXEwlBuzgGMg5-DetRsSWWSDpZBDgNMVE8uR1qF2Q4NhI9kaytkODsYUevmcFG3mfmy9yXlmzvkYV_nyqmXBdzxtKoVPKipUGwM-gTWg4DVGrGOyzrZKLnql5UJfRcC" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">Giants at Waterholes</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">Witness the social lives of majestic elephant herds.</p>
                    </a>
                    <a className="group block" href="#">
                        <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                            <img alt="Birdlife" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp5Pnks2ALayH82SkYI7XaLFAQaZkGYCefpmSZEN6KrFpbiREg0Er-rL2TRkqfWK-UYKOZbVe6hqOZRoJzkc5v4m9OcL1MkhAkVlbxLWMJfSrMtT0GsW37C1xwJ0TMQJLwM_2OxBWCeDjsTBQ75dqAbXodFsag61YsyNgdFOq1SYBmpgA75uEiYWcWIWITrHxatjll3iwCwDqClat0_p9ztKDRD7ckHti3ZpPckpdJe1Ou3ZdUjBXB2YjplYR7kXCf0aH1EJPR-_Bj" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">Birdlife of Yala</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">A paradise for birdwatchers with over 200 species.</p>
                    </a>
                    <a className="group block" href="#">
                        <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                            <img alt="Sunrise" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKxeLK39nuyogrN0gZ-lqLg3OWTzYx3qWNWThEzJAlFfO-Cd3aFXiMlkDxCg9c6YDsoW1gP6t37lp7Ivd-FNnud32FCkSlQ26xMV46FxIGA0u7qGP8LxAR-M5se5KI8JYeqsCrICDoOQsyUEG5-mB2jNX5WVIvtTsi6MzhG-HR4JBHxOFJzQepm4TE2wmERiEGsZyRfAHms2bLL7ueNDdY27OBFReLKDkSZcPTzjb8Fop2eVENM-A4OtxuVXlzoN9A4FPHCIXK-M_d" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">Sunrise & Sunset Magic</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">The jungle painted in hues of gold and crimson.</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
