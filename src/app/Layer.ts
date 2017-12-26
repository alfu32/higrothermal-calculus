import { Material } from "./Material";
import { Hatch } from "app/Hatch";
export class Layer {
    public name: string;
    public width: number;
    public x: number;
    public material: Material;
    public static fromObject(o: {
        name: string;
        width: number;
        material: Material|{
            name: string;
            thermalConductivity: number;
            vapourConductivity: number;
            hatch: string
        }
    }): Layer {
        const l = new Layer();
        l.name     = o.name;
        l.width    = o.width;
        l.material = o.material;
        return l;
    }
    public constructor() {
        this.name = "layer";
        this.width = 10;
        this.x = 0;
        this.material = Material.VOID;
    }
}
