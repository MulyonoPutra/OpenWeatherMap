import { Observable } from "rxjs";
import { CurrentLocationParams } from "../domain/dto/current-location.dto";
import { CurrentLocation } from "../domain/entity/current-location.entity";

export abstract class CurrentLocationRepository {
  abstract findCurrentLocation(params: CurrentLocationParams): Observable<CurrentLocation>;
}
