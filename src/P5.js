import React, { Component } from "react";
import Sketch from "react-p5";
import './P5.css'

let c1, c2

export default class P5 extends Component {
    // mousePressed = p5 => {
    //     p5.noLoop();
    // };

    // mouseReleased = p5 => {
    //     p5.loop();
    // };

    // x = 50;
    // y = 50;

    windowResized = p5 => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    };

    setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
        c1 = p5.color(255, 204, 0);
        c2 = p5.color(255);

    };


    draw = p5 => {
        const dim = Math.max(p5.width, p5.height);

        // Black background
        // p5.background(0);
        function setGradient(c1, c2) {
            p5.noFill()
            for (let y = 0; y < p5.height; y++) {
                let inter = p5.map(y, 0, p5.height, 0, 1);
                let c = p5.lerpColor(c1, c2, inter);
                p5.stroke(c);
                p5.line(0, y, p5.width, y)
            }
        }
        setGradient(c1, c2)
        p5.noFill();
        p5.stroke(255);
        p5.strokeCap(p5.ROUND);
        p5.strokeWeight(dim * 0.005);

        const gridSize = 20;
        const margin = dim * 0.01;
        const innerWidth = p5.width - margin * 2;

        const cellSize = innerWidth / gridSize;


        const time = p5.millis() / 1000 / 2;

        for (let y = 0; y < gridSize; y++) {
            for (let x = 0; x < gridSize; x++) {
                const u = gridSize <= 1 ? 0.5 : x / (gridSize - 1);
                const v = gridSize <= 1 ? 0.5 : y / (gridSize - 1);

                const px = p5.lerp(margin, p5.width - margin, u);
                const py = p5.lerp(margin, p5.height - margin, v);

                const rotation = p5.sin(time + u * p5.PI * 0.25) * p5.PI;
                const lineSize = p5.sin(time + v * p5.PI) * 0.5 + 0.5;
                segment(px, py, cellSize * lineSize, rotation);
            }
        }

        function segment(x, y, length, angle = 0) {
            const r = length / 2;
            const u = Math.cos(angle);
            const v = Math.sin(angle);
            p5.line(x - u * r, y - v * r, x + u * r, y + v * r);
        }


        // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    };

    render() {
        return <Sketch setup={this.setup} draw={this.draw} mousePressed={this.mousePressed} windowResized={this.windowResized} mouseReleased={this.mouseReleased} />;
    }
}