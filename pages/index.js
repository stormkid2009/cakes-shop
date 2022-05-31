
import Link from "next/link";
import About from "../components/about";
import Slider from "../components/slider";
import Layout from "../components/layout"


export default function HomePage() {
  return (
    <Layout>
    <div className="flex flex-col bg-pink-500">
      
      <div>
        <About />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex-initial w-1/2 h-1/2 py-4 " id="slider-div">
          <Slider className="" />
        </div>

        <div className="py-4 px-2 text-2xl text-white border-2 border-slate-300 rounded-lg hover:text-blue-700">
          <Link href="/cakes">
            <a>
              <h2>Explore More Delicious Cakes</h2>
            </a>
          </Link>
        </div>
      </div>
    </div>
    </Layout>
  );
}

