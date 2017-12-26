/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Input } from "@angular/core/src/metadata/directives";
import { Material } from "../Material";
import { Hatch } from "app/Hatch";
import { Layer } from "../Layer";

@Component({
    styleUrls: ["./home.component.scss"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public newDialogOpen: Boolean = false;
    public mat = "./assets/materials.json";
    public materials: Material[];
    public layers: Layer[] = [];
    public newLayer: Layer = Layer.fromObject({
        name     : "exterior",
        width    : 5,
        material : {
            name: "mortar",
            thermalConductivity : 1,
            vapourConductivity : 1,
            hatch: "ANSI31"
        }
    })
    constructor(private http: HttpClient) {

    }
    ngOnInit() {
        this.http.get<Material[]>(this.mat, { observe: "response" }).subscribe(
            resp => {
                // Here, resp is of type HttpResponse<MyJsonData>.
                // You can inspect its headers:
                console.log(resp.headers.get("X-Custom-Header"));
                // And access the body directly, which is typed as MyJsonData as requested.
                console.log(resp.body);

                this.materials = resp.body;
                this.layers = [
                    Layer.fromObject({name: "exterior finishing", width: 10, material: this.materials[0]}),
                    Layer.fromObject({name: "air", width: 5, material: this.materials[3]}),
                    Layer.fromObject({name: "insulation", width: 8, material: this.materials[2]}),
                    Layer.fromObject({name: "brick", width: 25, material: this.materials[1]}),
                    Layer.fromObject({name: "interior finishing", width: 5, material: this.materials[0]}),
                    Layer.fromObject({name: "air buffer", width: 5, material: this.materials[0]})
                ];
            },
            err => {
                console.log("Something went wrong!");
            }
        );
    }
    public getLayers() {
        const r = this.layers.reduce( (a, v, i) => {
            if ( i > 0 ) {
                v.x = a[a.length - 1].x + a[a.length - 1].width;
            } else {
                v.x = 0;
            }
            a.push(v);
            return a;
        }, []);
        console.log(r);
        return r;
    }
    addLayer(layer: Layer) {
        this.layers.push(layer);
    }
    removeLayer(layer: Layer) {
        this.layers = this.layers.filter(l => {
            return l !== layer;
        });
    }
}
