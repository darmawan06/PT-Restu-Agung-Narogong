import home from "../views/pages/home";
import proyek from "../views/pages/proyek";
import layanan_kami from "../views/pages/layanan_kami";
import tentang_kami from "../views/pages/tentang_kami";
import karir from "../views/pages/karir";
import blog from "../views/pages/blog";

const routes = {
  "/": home,
  '/proyek' : proyek,
  '/layanan_kami' : layanan_kami,
  '/tentang_kami' : tentang_kami,
  '/karir' : karir,
  '/blog' : blog,
};

export default routes;
