import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import Pricing from '../pages/Pricing';
import HowItWorks from '../pages/HowItWorks';
import WhoIsSevvy from '../pages/WhoIsSevvy';
import Privacy from '../pages/Privacy';

const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/how-sevvy-works" element={<HowItWorks />} />
		<Route path="/pricing" element={<Pricing />} />
		<Route path="/blog" element={<Blog />} />
		<Route path="/blog/:slug" element={<BlogDetails />} />
		<Route path="/who-is-sevvy" element={<WhoIsSevvy />} />
		<Route path="/privacy" element={<Privacy />} />
	</Routes>
);

export default AppRoutes;
