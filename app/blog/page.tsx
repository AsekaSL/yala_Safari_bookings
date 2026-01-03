import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogHero from "../../components/blog/BlogHero";
import BlogFeatured from "../../components/blog/BlogFeatured";
import BlogCategories from "../../components/blog/BlogCategories";
import FeaturedArticle from "../../components/blog/FeaturedArticle";
import LatestArticles from "../../components/blog/LatestArticles";
import ConservationSection from "../../components/blog/ConservationSection";
import Newsletter from "../../components/blog/Newsletter";
import BlogCTA from "../../components/blog/BlogCTA";

export default function BlogPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-cream font-body text-desert-brown antialiased group/design-root overflow-x-hidden">
            <Navbar />
            <BlogHero />
            <BlogFeatured />
            <BlogCategories />
            <FeaturedArticle />
            <LatestArticles />
            <ConservationSection />
            <Newsletter />
            <BlogCTA />
            <Footer />
        </div>
    );
}
