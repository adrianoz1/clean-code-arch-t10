import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class SundayFareCalculator implements FareCalculator {
  FARE = 2.9;

  calculate(segment: Segment) {
    return segment.distance * this.FARE;
  }
}
