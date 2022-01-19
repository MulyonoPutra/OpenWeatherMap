import { Provider } from "@angular/core";
import { HttpClientService } from "../../data/adapter/http-client.service";
import { CurrentLocationAdapter } from "../../data/web-repository/current-location.adapter";
import { ForecastAdapter } from "../../data/web-repository/forecast.adapter";
import { CurrentLocationRepository } from "../../repository/current-location.repository";
import { ForecastRepository } from "../../repository/forecast.repository";

export const DATA_SERVICE: Provider[] = [
  HttpClientService,
  { provide: CurrentLocationRepository, useClass: CurrentLocationAdapter },
  { provide: ForecastRepository, useClass: ForecastAdapter },
];
