import React, { Suspense } from "react";
import Logo from "./high-level/Logo";
import MarketOverview from "./high-level/MarketOverview";
import PriceGraph from "./high-level/PriceGraph";

function Layout() {
    return(
        <div>
            <header>
                <Logo />
            </header>

            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <MarketOverview />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <PriceGraph />
                </Suspense>
            </main>

            <footer></footer>
        </div>
    );
}

export default Layout;