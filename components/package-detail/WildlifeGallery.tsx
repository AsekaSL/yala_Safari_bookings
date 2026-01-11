import React from 'react';

export default function WildlifeGallery() {
    return (
        <div>
            <h3 className="text-2xl font-bold font-display text-[#5a3e2a] mb-6">Wildlife You May See</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                    <img alt="Leopard" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj_W8k9MLHpZTXZyCCTy0PmtbEcbDfN9TqbPDPoTQ1W3b8_hJdf9eGkDlp4MY3kv6XJDOnZRu66U5BP0yCzYQD72-aCgQyKDgzs87L4C0DFpcLD5UFB2fEVjllx6UDygrbGLH3Tg5rmIsdpsdfPVUW4YBRHyBBFT6lffeBzygSaY_o-Rf0hUe7kkXBFB1wsVJn4t9iFopH7MyTNJPM31XXC7jEhHPrnuaNCZiGZWKIGV8ABVRCx359GuI5RGxEs9yCaH-gRM2j-ijy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <span className="text-white font-bold text-sm">Leopard</span>
                    </div>
                </div>
                <div className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                    <img alt="Elephant" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC02iI-Phj57mRdcqhi7ftq6HJG72LIz1Vy64_MyMIaUAnCOJOmfeyFiDoEGm15xD8NbHrR215QEhXPsS5-Y41t2Get_FXtFMkqbc6YvmM3zOiNmMglpb-z7sHQkgrDas4fg6vmu0FmnSQ4vfXEwlBuzgGMg5-DetRsSWWSDpZBDgNMVE8uR1qF2Q4NhI9kaytkODsYUevmcFG3mfmy9yXlmzvkYV_nyqmXBdzxtKoVPKipUGwM-gTWg4DVGrGOyzrZKLnql5UJfRcC" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <span className="text-white font-bold text-sm">Elephant</span>
                    </div>
                </div>
                <div className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                    <img alt="Sloth Bear" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-lHG_f3Gan9XR1DGYtr0ho0d_fs-LG2Ro_MJ4AyHk9IMHt8WqmhBzqwNrgCtjhFaUIssfVDGEc4HMOqHSwKCUPchNGSpFfs8tYVDUBOhrJ_fzB0JTGO8qmcOxgdi-6j1nvLmV31ljjqnRToenvZK7QaUMvFZ63bua1IinTtFc7aZbXSx-QP7-anknim-Yh4Bd2AAt__NZ7vW7lHDfHlFEdcFX1OMd31ArESy24O7ySHpK8wGrzAhYXMFjG09jy53uMCThOY6nDEC6" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <span className="text-white font-bold text-sm">Sloth Bear</span>
                    </div>
                </div>
                <div className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                    <img alt="Birds" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKxeLK39nuyogrN0gZ-lqLg3OWTzYx3qWNWThEzJAlFfO-Cd3aFXiMlkDxCg9c6YDsoW1gP6t37lp7Ivd-FNnud32FCkSlQ26xMV46FxIGA0u7qGP8LxAR-M5se5KI8JYeqsCrICDoOQsyUEG5-mB2jNX5WVIvtTsi6MzhG-HR4JBHxOFJzQepm4TE2wmERiEGsZyRfAHms2bLL7ueNDdY27OBFReLKDkSZcPTzjb8Fop2eVENM-A4OtxuVXlzoN9A4FPHCIXK-M_d" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <span className="text-white font-bold text-sm">Peacock</span>
                    </div>
                </div>
            </div>
            <p className="text-xs text-[#7e746d] mt-2 italic">*Sightings are wild and cannot be 100% guaranteed, but morning offers the highest probability.</p>
        </div>
    );
}
