import React from "react";

const About = () => {
	return (
		<div className="relative z-0 bg-white py-10 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto mt-16">
			{/* Adjusting top margin to avoid overlap with navbar */}
			<h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
				About Us
			</h1>
			<p className="text-lg text-gray-600 leading-relaxed mb-6">
				Welcome to RENT-IT, your trusted partner in finding the perfect rental
				home. Our mission is to connect landlords with tenants efficiently and
				seamlessly, providing a hassle-free rental experience for all.
			</p>
			<p className="text-lg text-gray-600 leading-relaxed mb-6">
				Whether you’re a landlord looking to list your property or a tenant
				searching for your next home, RENT-IT is here to simplify the process.
				We offer a user-friendly platform where you can browse listings,
				schedule viewings, and manage bookings—all in one place.
			</p>
			<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
				Key Features
			</h2>
			<ul className="list-disc list-inside text-lg text-gray-600 mb-6">
				<li>
					Comprehensive property listings with high-quality images and detailed
					descriptions.
				</li>
				<li>
					Easy-to-use booking system to schedule viewings and secure your
					rental.
				</li>
				<li>
					Direct communication between landlords and tenants for smooth
					transactions.
				</li>
				<li>Secure payment processing for rent and deposits.</li>
			</ul>
			<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
				Our Story
			</h2>
			<p className="text-lg text-gray-600 leading-relaxed mb-6">
				Founded in 2024, RENT-IT was created to address the growing need for a
				reliable and efficient rental platform. We understand the challenges
				faced by both landlords and tenants, and we strive to offer a solution
				that meets the needs of both parties. With a dedicated team and a
				passion for real estate, we’re committed to making the rental process as
				smooth and straightforward as possible.
			</p>
			<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
				Contact Us
			</h2>
			<p className="text-lg text-gray-600 leading-relaxed mb-6">
				Have questions or need assistance? Our support team is here to help.
				Reach out to us at{" "}
				<a
					href="mailto:support@yourapp.com"
					className="text-blue-600 hover:underline"
				>
					pawanvanced@gmail.com
				</a>
				, and we’ll get back to you as soon as possible.
			</p>
		</div>
	);
};

export default About;
