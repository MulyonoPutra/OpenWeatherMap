import { Observable } from 'rxjs';
export interface UseCase<S, T> {
  execute(params: S): Observable<T>;
}

export interface UseCaseWithoutDto<T> {
  execute(): Observable<T>;
}

export interface UseCaseWithAdditionalURL<S, P, T> {
  execute(params: S, id: P): Observable<T>;
}
