import React, { useEffect } from "react";
import Chart from "chart.js";
import { useRecoilValue } from "recoil";
import { historyObject } from "../../utils/StateManager";

function PriceGraph() {
    let history = useRecoilValue(historyObject);
    let prices = history.prices;
    let datePoints = history.datePoints;

    useEffect(() => {
        let element: HTMLElement = document.getElementById('price-chart')!;
        let context:CanvasRenderingContext2D = (element as HTMLCanvasElement).getContext('2d')!;
        
        new Chart(context, {
            type: 'line',
            data: {
                labels: datePoints,
                datasets: [
                    {
                        label: "Price",
                        data: prices,
                        pointRadius: 8,
                        pointBackgroundColor: "white",
                        backgroundColor: "rgba(255,255,255,0.7)"
                    }
                ]
            }
        });
    });

    return (
        <div className="container mx-auto overflow-hidden">
            <canvas id="price-chart"></canvas>
        </div>
    );
}

export default PriceGraph;