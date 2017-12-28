import { Component, OnInit, Input } from '@angular/core';
import { Layer } from 'app/Layer';

@Component({
    selector: "[hgt-svg-layer]",
    templateUrl: "./hgt-svg-layer.component.html",
    styleUrls: ["./hgt-svg-layer.component.scss"]
})
export class HgtSvgLayerComponent implements OnInit {
    @Input()
    public layer: Layer;
    constructor() {}
    ngOnInit() {}
}
