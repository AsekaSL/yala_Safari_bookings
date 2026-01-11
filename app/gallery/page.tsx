import GalleryHero from "../../components/gallery/GalleryHero";
import GalleryIntro from "../../components/gallery/GalleryIntro";
import CategoryFilter from "../../components/gallery/CategoryFilter";
import PhotoMasonry from "../../components/gallery/PhotoMasonry";
import VideoGallery from "../../components/gallery/VideoGallery";
import CuratedCollections from "../../components/gallery/CuratedCollections";
import ShareMoments from "../../components/gallery/ShareMoments";
import GalleryCTA from "../../components/gallery/GalleryCTA";

export default function GalleryPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-[#f7f7f6] font-body text-[#2E1F14] antialiased group/design-root overflow-x-hidden">
            <GalleryHero />
            <GalleryIntro />
            <CategoryFilter />
            <PhotoMasonry />
            <VideoGallery />
            <CuratedCollections />
            <ShareMoments />
            <GalleryCTA />
        </div>
    );
}
