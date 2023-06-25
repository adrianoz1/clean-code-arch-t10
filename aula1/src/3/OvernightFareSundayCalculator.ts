import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class OvernightFareSundayCalculator implements FareCalculator {
  FARE = 5;

  calculate(segment: Segment) {
    return segment.distance * this.FARE;
  }
}
