import FareCalculatorHandler from "./FareCalculatorHandler";
import Segment from "./Segment";

export default class NormalFareCalculatorHandler implements FareCalculatorHandler {
  FARE = 2.1;
  
  constructor(readonly next?: FareCalculatorHandler) {}

  calculate(segment: Segment): number {
    if (!segment.isOvernight() && !segment.isSunday()) {
      return segment.distance * this.FARE;
    }
    if (!this.next) throw new Error();
    return this.next.calculate(segment);
  };
  
}
