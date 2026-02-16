import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Pricing from '../pages/Pricing';
import HowItWorks from '../pages/HowItWorks';

const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/how-it-works" element={<HowItWorks />} />
		<Route path="/pricing" element={<Pricing />} />
		<Route path="/blog" element={<Blog />} />
	</Routes>
);

export default AppRoutes;
