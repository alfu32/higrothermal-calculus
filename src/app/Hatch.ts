export class Hatch {
    public static reg = {};
    public svg: string;
    public name: string;
    width: number = 4;
    height: number = 4;
    public static fromJson(j): Hatch {
        const h = new Hatch();
        h.svg = j.svg;
        h.name = j.name;
        h.width = j.width || 4;
        h.height = j.height || 4;
        return h;
    }
    public static register(name: string, h: Hatch): ({register: Function}) {
        this.reg[name] = h;
        return Hatch;
    }
    public static get(name: string): Hatch {
        return this.reg[name]
    }
    constructor() {
    }
}

Hatch
.register(
    "ANSI30",
    Hatch.fromJson({
        svg: `<path d="M0,0 l0,4" style="stroke:hsl(0, 0%, 0%); stroke-width:1" />`,
            width: 4,
            height: 4,
        ref: "ANSI31"
    })
)
.register(
    "ANSI31",
    Hatch.fromJson({
        svg: `<path d="M-1,1 l2,-2
            M0,4 l4,-4
            M3,5 l2,-2" style="stroke:hsl(0, 0%, 0%); stroke-width:1" />`,
            width: 4,
            height: 4,
        ref: "ANSI31"
    })
)
.register(
    "ANSI32",
    Hatch.fromJson({
        svg: `<path d="M-2,2 l4,-4
            M0,8 l8,-8
            M6,10 l4,-4" style="stroke:hsl(0, 0%, 0%); stroke-width:1" />`,
            width: 8,
            height: 8,
        ref: "ANSI32"
    })
)
.register(
    "ANSI33",
    Hatch.fromJson({
        svg: `<path d="M0,0 l4,0" style="stroke:hsl(0, 0%, 0%); stroke-width:1" />`,
            width: 4,
            height: 4,
        ref: "ANSI32"
    })
);
