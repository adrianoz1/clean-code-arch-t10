import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class PeakTimeFareCalculator implements FareCalculator {
  FARE = 6;

  calculate(segment: Segment) {
    return segment.distance * this.FARE;
  }
}
