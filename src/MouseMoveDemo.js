"use strict"



import {
    GridHelper,
    LineBasicMaterial,
    Vector3,
    Line,
    BufferGeometry,
    Matrix4
} from "../node_modules/three/build/three.module.js";

// import {
//     GridHelper,
//     LineBasicMaterial,
//     Vector3,
//     Line,
//     BufferGeometry,
//     Matrix4
// } from "three";

export class MouseMoveDemo {

    init(demo) {
        this.addFloorGrid(demo);
        this.addLine(demo);
    }

    addFloorGrid(demo) {
        const size = 10;
        const divisions = 10;
        const gridHelper = new GridHelper(size, divisions);
        demo.scene.add(gridHelper);
    }

    addLine(demo) {

        //create a blue LineBasicMaterial
        const material = new LineBasicMaterial({
            color: 0xff0000
        });

        const points = [];
        points.push(new Vector3(0, 0, 0));
        points.push(new Vector3(0, 2, 0));

        const geometry = new BufferGeometry().setFromPoints(points);

        const line = new Line(geometry, material);
        console.log(line);
        let matrix = new Matrix4();
        matrix.makeRotationX(Math.PI / 2);
        line.applyMatrix4(matrix);
        line.geometry.attributes.position.needsUpdate = true;
        line.geometry.verticesNeedUpdate = true;
        line.geometry.elementsNeedUpdate = true;
        demo.scene.add(line);
    }
}