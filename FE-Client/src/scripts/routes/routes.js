import home from "../views/pages/home";
import proyek from "../views/pages/proyek";
import layanan_kami from "../views/pages/layanan_kami";
import tentang_kami from "../views/pages/tentang_kami";
import galeri from "../views/pages/galeri";
import blog from "../views/pages/blog";

const routes = {
  "/": home,
  '/proyek' : proyek,
  '/layanan_kami' : layanan_kami,
  '/tentang_kami' : tentang_kami,
  '/galeri' : galeri,
  '/blog' : blog,
};

export default routes;
