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
        
        /**
         * background-image: linear-gradient(to right bottom, #f16491, #fe7973, #f9965c, #e8b355, #cdcf65);
         */
        var gradient = context.createLinearGradient(0,0,500,500);
        gradient.addColorStop(0, "#f16491");
        gradient.addColorStop(0.25, "#fe7973");
        gradient.addColorStop(0.40, "#f9965c");
        gradient.addColorStop(0.75, "#e8b355");
        gradient.addColorStop(1, "#cdcf65");

        new Chart(context, {
            type: 'line',
            data: {
                labels: datePoints,
                datasets: [
                    {
                        label: "Price",
                        data: prices,
                        pointRadius: window.innerWidth < 640 ? 6 : 7,
                        pointHoverRadius: window.innerWidth < 640 ? 7 : 9,
                        hitRadius: window.innerWidth < 640 ? 7 : 1,
                        pointBackgroundColor: "white",
                        backgroundColor: gradient
                    }
                ]
            },
            options: {
                scales: {
                    xAxes:  [{
                        ticks: {
                            display: false
                        }
                    }],

                    yAxes: [{
                        ticks: {
                            maxTicksLimit: 5,
                            fontFamily: "IBM Plex Sans",
                            fontColor: "white",
                            fontSize: window.innerWidth < 640 ? 14 : 18
                        }
                    }]
                },
                layout: {
                    padding: {
                        left: 7,
                        right: 7
                    }
                },
                responsive: true,
                maintainAspectRatio: true,
                legend: {
                    labels: {
                        fontFamily: "IBM Plex Sans",
                        fontColor: "white",
                        fontSize: window.innerWidth < 640 ? 18 : 24
                    }
                },
                animation: {
                    duration: 1200,
                    easing: "easeInOutSine"
                }
            }
        });
    });

    return (
        <div className="w-100 sm:w-10/12 mx-auto overflow-hidden">
            <canvas className="w-100" id="price-chart"></canvas>
        </div>
    );
}

export default PriceGraph;