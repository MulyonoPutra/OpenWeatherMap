import { Observable } from 'rxjs';
import { ForecastParams } from '../domain/dto/forecast.dto';
import { Forecast } from '../domain/entity/forecast.entity';

export abstract class ForecastRepository {
	abstract findByGeographicCoordinates(
		params: ForecastParams
	): Observable<Forecast>;
}
