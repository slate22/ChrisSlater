import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/:slug" element={<Post />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    )
}
