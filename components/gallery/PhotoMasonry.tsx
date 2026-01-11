import React from 'react';
import styles from './Gallery.module.css';
import { MdExpand, MdExpandMore } from 'react-icons/md';

export default function PhotoMasonry() {
    return (
        <div className="bg-[#f7f7f6] py-10 px-4 md:px-10">
            <div className={`max-w-[1440px] mx-auto ${styles.masonryGrid}`}>
                <div className={`relative group overflow-hidden rounded-xl shadow-md cursor-zoom-in ${styles.masonryItem}`}>
                    <img alt="Close up of elephant eye" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC02iI-Phj57mRdcqhi7ftq6HJG72LIz1Vy64_MyMIaUAnCOJOmfeyFiDoEGm15xD8NbHrR215QEhXPsS5-Y41t2Get_FXtFMkqbc6YvmM3zOiNmMglpb-z7sHQkgrDas4fg6vmu0FmnSQ4vfXEwlBuzgGMg5-DetRsSWWSDpZBDgNMVE8uR1qF2Q4NhI9kaytkODsYUevmcFG3mfmy9yXlmzvkYV_nyqmXBdzxtKoVPKipUGwM-gTWg4DVGrGOyzrZKLnql5UJfRcC" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-[#FF914D] text-xs font-bold uppercase tracking-wider mb-1">Elephants</span>
                        <h3 className="text-white text-lg font-display font-bold">Gentle Giant's Gaze</h3>
                    </div>
                </div>
                <div className={`relative group overflow-hidden rounded-xl shadow-md cursor-zoom-in ${styles.masonryItem}`}>
                    <img alt="Leopard resting on rock" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX0XdnalZ-eocWpBmw-70DR2eZIzhFP6gD2C_dYzplUqqJ0PZVPF7gbLTtmpkro0Y3PXXsn_6Cndonpo_UzyO8Kcs_uI7-dYx0MdySTiWcHrPC9w594x6Kv0PyTaB2yOwte462DSTGQltO2wpYcw_hYzqD4X-KFLFIyJoeUI_HhqGqLgAmR9JhiiNbJ0GLa03yazqMzx7cep5_Y-I165cVyJ5DKKsB3CmNuL2Do2sPlAz9EOFWxqHQpLhYsI8PFuNBfkC2maiNFX1y" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-[#FF914D] text-xs font-bold uppercase tracking-wider mb-1">Leopards</span>
                        <h3 className="text-white text-lg font-display font-bold">The Prince of Yala</h3>
                    </div>
                </div>
                <div className={`relative group overflow-hidden rounded-xl shadow-md cursor-zoom-in ${styles.masonryItem}`}>
                    <img alt="Sunrise landscape" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKxeLK39nuyogrN0gZ-lqLg3OWTzYx3qWNWThEzJAlFfO-Cd3aFXiMlkDxCg9c6YDsoW1gP6t37lp7Ivd-FNnud32FCkSlQ26xMV46FxIGA0u7qGP8LxAR-M5se5KI8JYeqsCrICDoOQsyUEG5-mB2jNX5WVIvtTsi6MzhG-HR4JBHxOFJzQepm4TE2wmERiEGsZyRfAHms2bLL7ueNDdY27OBFReLKDkSZcPTzjb8Fop2eVENM-A4OtxuVXlzoN9A4FPHCIXK-M_d" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-[#FF914D] text-xs font-bold uppercase tracking-wider mb-1">Landscapes</span>
                        <h3 className="text-white text-lg font-display font-bold">Golden Hour over Block 1</h3>
                    </div>
                </div>
                <div className={`relative group overflow-hidden rounded-xl shadow-md cursor-zoom-in ${styles.masonryItem}`}>
                    <img alt="Peacock dancing" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp5Pnks2ALayH82SkYI7XaLFAQaZkGYCefpmSZEN6KrFpbiREg0Er-rL2TRkqfWK-UYKOZbVe6hqOZRoJzkc5v4m9OcL1MkhAkVlbxLWMJfSrMtT0GsW37C1xwJ0TMQJLwM_2OxBWCeDjsTBQ75dqAbXodFsag61YsyNgdFOq1SYBmpgA75uEiYWcWIWITrHxatjll3iwCwDqClat0_p9ztKDRD7ckHti3ZpPckpdJe1Ou3ZdUjBXB2YjplYR7kXCf0aH1EJPR-_Bj" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-[#FF914D] text-xs font-bold uppercase tracking-wider mb-1">Birds</span>
                        <h3 className="text-white text-lg font-display font-bold">Vibrant Display</h3>
                    </div>
                </div>
                <div className={`relative group overflow-hidden rounded-xl shadow-md cursor-zoom-in ${styles.masonryItem}`}>
                    <img alt="Safari jeep in mud" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-lHG_f3Gan9XR1DGYtr0ho0d_fs-LG2Ro_MJ4AyHk9IMHt8WqmhBzqwNrgCtjhFaUIssfVDGEc4HMOqHSwKCUPchNGSpFfs8tYVDUBOhrJ_fzB0JTGO8qmcOxgdi-6j1nvLmV31ljjqnRToenvZK7QaUMvFZ63bua1IinTtFc7aZbXSx-QP7-anknim-Yh4Bd2AAt__NZ7vW7lHDfHlFEdcFX1OMd31ArESy24O7ySHpK8wGrzAhYXMFjG09jy53uMCThOY6nDEC6" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-[#FF914D] text-xs font-bold uppercase tracking-wider mb-1">Safari Experience</span>
                        <h3 className="text-white text-lg font-display font-bold">Off the Beaten Path</h3>
                    </div>
                </div>
                <div className={`relative group overflow-hidden rounded-xl shadow-md cursor-zoom-in ${styles.masonryItem}`}>
                    <img alt="Crocodile by water" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6BOLDSqQ4miscR7ga7_XG_ezysuVtiyCyCa38JEcl-1klRfP7ycCkK-yTbdvS51Ymd50sPSiTIfo-460NRu_B25nO01Lgpm93hqhHf6ZBi_QcQr0CKCE96FoNUOkGBqfe3KYQmpmIBjMf8JseEOJLStRXfXPSzCH2uD_hkpJH-4sTjnniow52CxBFNWKAHpPCfZ39lOYkZ7nDaMHFtwtvp_lOwnpGFbwX9Ct5Sofa1EQxv06sM7tewFovNrnCOQvt0YNOUrFylHcI" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-[#FF914D] text-xs font-bold uppercase tracking-wider mb-1">Reptiles</span>
                        <h3 className="text-white text-lg font-display font-bold">Ancient Predator</h3>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-12">
                <button className="border border-[#5a3e2a] text-[#5a3e2a] hover:bg-[#5a3e2a] hover:text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2">
                    Load More Photos
                    <MdExpandMore className="text-sm" />
                </button>
            </div>
        </div>
    );
}
