import { Layer } from "./Layer";
export class HeathTransferProcessModel {
    /**
    * @source
https://www.researchgate.net/
publication/280839124_Effect_of_flow_pulsation_on_energy_consumption_of_a_radiator_in_a_centrally_heated_building
    * Q = U*A*deltaT
    * U = 1/ Rtotal
    * Rtotal = RAIndoor + sum(0,N,RLayer[i]) + RAOutdoor
    * Rtotal = 1/alphaIndoor + sum(0,N,layer[i].width/layer[i].k) + 1/alphaOutdoor
    */
    public static getTemperaturesForLayers(layers: Layer[]) {
        return layers.reduce((acc, layer, index, _layers) => {
            if (index === 0) {
            }
            return acc;
        }, []);
    }
}
