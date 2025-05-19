import CalculatorListener from "./generated/CalculatorListener.js";

export class CustomCalculatorListener extends CalculatorListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}