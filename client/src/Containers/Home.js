import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ListSummary from "../Components/ListSummary";
function Home() {
    const navigate = useNavigate();
	return (
		<div class="flex flex-col justify-center dark:bg-gray-800">
			{/* The Header*/}
			<div className="lg:flex-1 pb-5 pt-20 lg:pt-24 font-extrabold text-center justify-center">
				<h1 className="text-5xl lg:text-6xl dark:text-white">
					The Best Rooms.
				</h1>
				<h1 className="text-5xl lg:text-6xl dark:text-white px-2">
					The Best Prices.
				</h1>
				<div className="p-5 items-center">
					<button
						type="button"
                        onClick={() => {navigate("/search")}}
						className="flex mx-auto items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-700 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
					>
						<svg
							width="24"
							height="24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="flex-none text-slate-300 dark:text-slate-400"
							aria-hidden="true"
						>
							<path d="m19 19-3.5-3.5"></path>
							<circle cx="11" cy="11" r="6"></circle>
						</svg>
						<span class="flex-auto">Search a location...</span>
					</button>
				</div>
			</div>
            {/* Rest of the sections*/ }
            <div className="dark:text-white p-5">
                <h1 className="font-extrabold text-3xl p-2">Popular Locations</h1>
                <div className="flex flex-row overflow-x-auto my-2 gap-4 no-scrollbar">
                        <ListSummary />
                        <ListSummary />
                        <ListSummary />
                        <ListSummary />
                        <ListSummary />
                </div>
            </div>
		</div>
	);
}

export default Home;
