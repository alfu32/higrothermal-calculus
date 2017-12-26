import { Hatch } from "app/Hatch";

export class Material {
    public static VOID = Material.fromJson({name: "void", thermalConductivity: 1, vapourConductivity: 1, hatch: 'ANSI31'});
    public name: string;
    public thermalConductivity: number;
    public vapourConductivity: number;
    public hatch: string;
    public static fromJson(json: {name: string; thermalConductivity: number; vapourConductivity: number; hatch?: string | 'ANSI31'}) {
        const m = new Material();
        m.name = json.name;
        m.thermalConductivity = json.thermalConductivity;
        m.vapourConductivity = json.vapourConductivity;
        return m;
    }
}
