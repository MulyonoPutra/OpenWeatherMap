(self.webpackChunkopen_weather = self.webpackChunkopen_weather || []).push([
	[179],
	{
		5106: (Et, Ve, S) => {
			'use strict';
			S.r(Ve), S.d(Ve, { MainModule: () => Ht });
			var m = S(9808),
				P = S(1083),
				o = S(5e3),
				G = S(2340);
			class be {}
			let we = (() => {
					class nt {
						constructor(ke) {
							this.currentLocationRepository = ke;
						}
						execute(ke) {
							return this.currentLocationRepository.findCurrentLocation(ke);
						}
					}
					return (
						(nt.ɵfac = function (ke) {
							return new (ke || nt)(o.LFG(be));
						}),
						(nt.ɵprov = o.Yz7({
							token: nt,
							factory: nt.ɵfac,
							providedIn: 'root',
						})),
						nt
					);
				})(),
				_e = (() => {
					class nt {
						constructor() {}
						findLatitudeAndLongitude() {
							return new Promise((ke, yt) => {
								navigator.geolocation.getCurrentPosition(
									(xt) => {
										ke({
											lat: xt.coords.latitude,
											long: xt.coords.longitude,
										});
									},
									(xt) => {
										yt(xt);
									}
								);
							});
						}
					}
					return (
						(nt.ɵfac = function (ke) {
							return new (ke || nt)();
						}),
						(nt.ɵprov = o.Yz7({
							token: nt,
							factory: nt.ɵfac,
							providedIn: 'root',
						})),
						nt
					);
				})();
			var De = S(1271);
			let ae = (() => {
					class nt {
						constructor(ke) {
							this.messageService = ke;
						}
						showWarn(ke, yt) {
							this.showMessage(ke, yt, 'background-yellow');
						}
						showSuccess(ke, yt) {
							this.showMessage(ke, yt, 'background-green');
						}
						showInfo(ke, yt) {
							this.showMessage(ke, yt, 'background-purple');
						}
						showError(ke, yt) {
							this.showMessage(ke, yt, 'background-red');
						}
						showMessage(ke, yt, xt) {
							const sn = new De.u_();
							(sn.panelClass = ['snackbar-global', `${xt}`]),
								(sn.duration = yt),
								(sn.horizontalPosition = 'right'),
								this.messageService.open(ke, void 0, sn);
						}
					}
					return (
						(nt.ɵfac = function (ke) {
							return new (ke || nt)(o.LFG(De.ux));
						}),
						(nt.ɵprov = o.Yz7({
							token: nt,
							factory: nt.ɵfac,
							providedIn: 'root',
						})),
						nt
					);
				})(),
				Q = (() => {
					class nt {
						constructor(ke) {
							this.messageService = ke;
						}
						getMessage(ke) {
							return 400 === (ke.status || ke.code)
								? this.messageService.showInfo(ke.error.message, 5e3)
								: this.messageService.showError(ke.error.message, 5e3);
						}
					}
					return (
						(nt.ɵfac = function (ke) {
							return new (ke || nt)(o.LFG(ae));
						}),
						(nt.ɵprov = o.Yz7({
							token: nt,
							factory: nt.ɵfac,
							providedIn: 'root',
						})),
						nt
					);
				})();
			var K = S(9224);
			let q = (() => {
					class nt {
						transform(ke, yt) {
							if (ke && !isNaN(ke)) {
								if ('C' === yt) return ((ke - 32) / 1.8).toFixed(2);
								if ('F' === yt) return (32 * ke + 1.8).toFixed(2);
							}
						}
					}
					return (
						(nt.ɵfac = function (ke) {
							return new (ke || nt)();
						}),
						(nt.ɵpipe = o.Yjl({
							name: 'temperatureConverter',
							type: nt,
							pure: !0,
						})),
						nt
					);
				})(),
				Re = (() => {
					class nt {
						constructor(ke, yt, xt) {
							(this.getCurrentLocationUsecase = ke),
								(this.getLocationService = yt),
								(this.errorMessage = xt),
								(this.apiKey = G.N.apiKey);
						}
						ngOnInit() {
							this.getCurrentLocation();
						}
						getCurrentLocation() {
							this.getLocationService.findLatitudeAndLongitude().then(
								(ke) => {
									this.getCurrentLocationUsecase
										.execute({
											lat: ke.lat,
											long: ke.long,
											apiKey: this.apiKey,
										})
										.subscribe(
											(xt) => {
												(this.nameLocation = xt.name),
													(this.mainWeather = xt.weather[0].main),
													(this.description = xt.weather[0].description),
													(this.latitude = xt.coord.lat),
													(this.longitude = xt.coord.lon),
													(this.temperature = (5 * (xt.main.temp - 32)) / 9),
													(this.celcius = this.temperature + '\xb0C'),
													(this.icon = xt.weather[0].icon);
											},
											(xt) => {
												this.errorMessage.getMessage(xt);
											}
										);
								},
								(ke) => {
									this.errorMessage.getMessage(ke);
								}
							);
						}
					}
					return (
						(nt.ɵfac = function (ke) {
							return new (ke || nt)(o.Y36(we), o.Y36(_e), o.Y36(Q));
						}),
						(nt.ɵcmp = o.Xpm({
							type: nt,
							selectors: [['app-current-weather']],
							decls: 29,
							vars: 10,
							consts: [
								[1, 'container', 'p-2'],
								[1, 'mt-12'],
								[1, 'card'],
								[1, 'location', 'flex', 'justify-start'],
								[1, 'flex', 'flex-col', 'space-y-2', '...'],
								[1, 'temperature'],
								['alt', 'Icon', 1, 'icon', 3, 'src'],
							],
							template: function (ke, yt) {
								1 & ke &&
									(o._UZ(0, 'br'),
									o.TgZ(1, 'div', 0),
									o._UZ(2, 'div', 1),
									o.qZA(),
									o.TgZ(3, 'div', 0),
									o.TgZ(4, 'mat-card', 2),
									o.TgZ(5, 'div', 3),
									o.TgZ(6, 'div'),
									o.TgZ(7, 'div', 4),
									o.TgZ(8, 'div'),
									o.TgZ(9, 'span'),
									o.TgZ(10, 'strong'),
									o._uU(11),
									o.qZA(),
									o.qZA(),
									o.qZA(),
									o.TgZ(12, 'div'),
									o.TgZ(13, 'span'),
									o._uU(14),
									o.qZA(),
									o._UZ(15, 'br'),
									o.qZA(),
									o.qZA(),
									o.TgZ(16, 'div', 5),
									o.TgZ(17, 'span'),
									o._uU(18),
									o.ALo(19, 'temperatureConverter'),
									o.qZA(),
									o.qZA(),
									o.TgZ(20, 'div'),
									o._UZ(21, 'img', 6),
									o.qZA(),
									o.TgZ(22, 'div'),
									o.TgZ(23, 'span'),
									o.TgZ(24, 'strong'),
									o._uU(25),
									o.qZA(),
									o.qZA(),
									o._UZ(26, 'br'),
									o.TgZ(27, 'span'),
									o._uU(28),
									o.qZA(),
									o.qZA(),
									o.qZA(),
									o.qZA(),
									o.qZA(),
									o.qZA()),
									2 & ke &&
										(o.xp6(11),
										o.Oqu(yt.nameLocation),
										o.xp6(3),
										o.AsE(' Coordinate ', yt.latitude, ' & ', yt.longitude, ' '),
										o.xp6(4),
										o.hij('', o.xi3(19, 7, yt.temperature, 'C'), ' \xb0C'),
										o.xp6(3),
										o.MGl('src', 'http://openweathermap.org/img/wn/', yt.icon, '@2x.png', o.LSH),
										o.xp6(4),
										o.Oqu(yt.mainWeather),
										o.xp6(3),
										o.hij(' ', yt.description, ' '));
							},
							directives: [K.a8],
							pipes: [q],
							styles: [
								'.card[_ngcontent-%COMP%]{color:#fff;width:50%;margin:auto;display:flex;flex-direction:column;border-radius:10px;background:#833ab4;background:linear-gradient(90deg,#833ab4 0%,#b3279a 50%,#7c45fc 100%)}.location[_ngcontent-%COMP%]{text-align:left}.temperature[_ngcontent-%COMP%]{text-align:left;font-size:5rem;color:#fff;font-weight:700}.icon[_ngcontent-%COMP%]{position:absolute;top:0;right:20px}',
							],
						})),
						nt
					);
				})();
			class de {}
			let Be = (() => {
				class nt {
					constructor(ke) {
						this.forecastRepository = ke;
					}
					execute(ke) {
						return this.forecastRepository.findByGeographicCoordinates(ke);
					}
				}
				return (
					(nt.ɵfac = function (ke) {
						return new (ke || nt)(o.LFG(de));
					}),
					(nt.ɵprov = o.Yz7({
						token: nt,
						factory: nt.ɵfac,
						providedIn: 'root',
					})),
					nt
				);
			})();
			var $e = S(288);
			let ye = (() => {
				class nt {
					constructor(ke, yt) {
						(this.element = ke),
							(this.renderer = yt),
							(this.linearGradient =
								'linear-gradient(90deg,\n                    rgba(70, 58, 180, 0.9755252442773985) 0%,\n                    rgba(166, 54, 180, 1) 14%,\n                    rgba(93, 53, 180, 1) 22%,\n                    rgba(101, 53, 180, 1) 23%,\n                    rgba(103, 52, 180, 1) 26%,\n                    rgba(59, 48, 180, 1) 43%,\n                    rgba(170, 39, 179, 1) 80%,\n                    rgba(69, 79, 252, 1) 100%');
					}
					onmouseover(ke) {
						this.renderer.setStyle(this.element.nativeElement, 'background', this.linearGradient);
					}
					onmouseleave(ke) {
						this.renderer.setStyle(this.element.nativeElement, 'background', this.linearGradient);
					}
				}
				return (
					(nt.ɵfac = function (ke) {
						return new (ke || nt)(o.Y36(o.SBq), o.Y36(o.Qsj));
					}),
					(nt.ɵdir = o.lG2({
						type: nt,
						selectors: [['', 'appRendererHighlight', '']],
						hostBindings: function (ke, yt) {
							1 & ke &&
								o.NdJ('mouseenter', function () {
									return yt.onmouseover();
								})('mouseleave', function () {
									return yt.onmouseleave();
								});
						},
					})),
					nt
				);
			})();
			function Ne(nt, gt) {
				if (1 & nt) {
					const ke = o.EpF();
					o.TgZ(0, 'mat-accordion'),
						o.TgZ(1, 'mat-expansion-panel', 7),
						o.NdJ('opened', function () {
							return o.CHM(ke), (o.oxw().panelOpenState = !0);
						})('closed', function () {
							return o.CHM(ke), (o.oxw().panelOpenState = !1);
						}),
						o.TgZ(2, 'mat-expansion-panel-header', 8),
						o.TgZ(3, 'mat-panel-title'),
						o.TgZ(4, 'div', 9),
						o.TgZ(5, 'div'),
						o.TgZ(6, 'strong'),
						o._uU(7),
						o.ALo(8, 'date'),
						o.qZA(),
						o.qZA(),
						o.TgZ(9, 'div'),
						o._uU(10),
						o.ALo(11, 'temperatureConverter'),
						o.TgZ(12, 'span'),
						o._uU(13, '\u2103'),
						o.qZA(),
						o.qZA(),
						o.TgZ(14, 'div'),
						o._UZ(15, 'img', 10),
						o.qZA(),
						o.TgZ(16, 'div'),
						o.TgZ(17, 'span'),
						o._uU(18),
						o.qZA(),
						o.qZA(),
						o.qZA(),
						o.qZA(),
						o._UZ(19, 'mat-panel-description'),
						o.qZA(),
						o.TgZ(20, 'div', 11),
						o.TgZ(21, 'div'),
						o.TgZ(22, 'span'),
						o.TgZ(23, 'strong'),
						o._uU(24, 'Humidity'),
						o.qZA(),
						o.qZA(),
						o._UZ(25, 'br'),
						o.TgZ(26, 'span'),
						o._uU(27),
						o.qZA(),
						o.qZA(),
						o.TgZ(28, 'div'),
						o.TgZ(29, 'span'),
						o.TgZ(30, 'strong'),
						o._uU(31, 'Wind speed'),
						o.qZA(),
						o.qZA(),
						o._UZ(32, 'br'),
						o.TgZ(33, 'span'),
						o._uU(34),
						o.qZA(),
						o.qZA(),
						o.TgZ(35, 'div'),
						o.TgZ(36, 'span'),
						o.TgZ(37, 'strong'),
						o._uU(38, 'Description'),
						o.qZA(),
						o.qZA(),
						o._UZ(39, 'br'),
						o.TgZ(40, 'span'),
						o._uU(41),
						o.qZA(),
						o.qZA(),
						o.qZA(),
						o.qZA(),
						o._UZ(42, 'div', 12),
						o.qZA();
				}
				if (2 & nt) {
					const ke = gt.$implicit,
						yt = o.oxw();
					o.xp6(2),
						o.Q6J('collapsedHeight', '70px')('expandedHeight', '70px'),
						o.xp6(5),
						o.Oqu(o.lcZ(8, 9, ke.dt_txt)),
						o.xp6(3),
						o.hij('', o.xi3(11, 11, yt.temperature, 'C'), ' '),
						o.xp6(5),
						o.MGl('src', 'http://openweathermap.org/img/wn/', ke.weather[0].icon, '@2x.png', o.LSH),
						o.xp6(3),
						o.Oqu(ke.weather[0].main),
						o.xp6(9),
						o.hij('', ke.main.humidity, '%'),
						o.xp6(7),
						o.Oqu(ke.wind.speed),
						o.xp6(7),
						o.Oqu(ke.weather[0].description);
				}
			}
			let rt = (() => {
				class nt {
					constructor(ke, yt, xt) {
						(this.getLocationService = ke),
							(this.forecastUseCase = yt),
							(this.errorMessage = xt),
							(this.panelOpenState = !1),
							(this.forecast = []),
							(this.apiKey = G.N.apiKey);
					}
					ngOnInit() {
						this.findAllForecast();
					}
					findAllForecast() {
						this.getLocationService.findLatitudeAndLongitude().then((ke) => {
							this.forecastUseCase
								.execute({
									lat: ke.lat,
									long: ke.long,
									apiKey: this.apiKey,
								})
								.subscribe(
									(xt) => {
										(this.locationName = xt.city.name),
											(this.forecast = xt.list),
											this.forecast.forEach((sn) => {
												(this.temperature = (5 * (sn.main.temp - 32)) / 9),
													(this.date = sn.dt_txt),
													(this.icon = sn.weather[0].icon);
											});
									},
									(xt) => {
										this.errorMessage.getMessage(xt);
									}
								);
						});
					}
				}
				return (
					(nt.ɵfac = function (ke) {
						return new (ke || nt)(o.Y36(_e), o.Y36(Be), o.Y36(Q));
					}),
					(nt.ɵcmp = o.Xpm({
						type: nt,
						selectors: [['app-weather-forecast']],
						decls: 14,
						vars: 2,
						consts: [
							[1, 'container', 'p-2'],
							[1, 'mt-12'],
							[1, 'container', 'p-8'],
							[1, 'title'],
							[1, 'title-small'],
							[1, 'w-11/12'],
							[4, 'ngFor', 'ngForOf'],
							['appRendererHighlight', '', 3, 'opened', 'closed'],
							[3, 'collapsedHeight', 'expandedHeight'],
							[1, 'flex', 'space-x-6', 'text-color'],
							['alt', 'Icon', 'height', '30', 'width', '20', 1, 'icon', 3, 'src'],
							[1, 'flex', 'flex-col', 'space-y-4'],
							[1, 'mt-3'],
						],
						template: function (ke, yt) {
							1 & ke &&
								(o.TgZ(0, 'div', 0),
								o._UZ(1, 'div', 1),
								o.qZA(),
								o.TgZ(2, 'div', 2),
								o.TgZ(3, 'div'),
								o.TgZ(4, 'div'),
								o.TgZ(5, 'div', 3),
								o.TgZ(6, 'h1'),
								o._uU(7, '5 Days Weather'),
								o.qZA(),
								o.qZA(),
								o.TgZ(8, 'div', 4),
								o.TgZ(9, 'span'),
								o._uU(10),
								o.qZA(),
								o.qZA(),
								o.qZA(),
								o.qZA(),
								o._UZ(11, 'br'),
								o.TgZ(12, 'div', 5),
								o.YNc(13, Ne, 43, 14, 'mat-accordion', 6),
								o.qZA(),
								o.qZA()),
								2 & ke && (o.xp6(10), o.Oqu(yt.locationName), o.xp6(3), o.Q6J('ngForOf', yt.forecast));
						},
						directives: [m.sg, $e.pp, $e.ib, ye, $e.yz, $e.yK, $e.u4],
						pipes: [m.uU, q],
						styles: [
							'.title{text-align:left;font-size:2rem;color:#000;font-weight:800}.title:hover{color:#833ab4;color:linear-gradient(90deg,#833ab4 0%,#b3279a 50%,#7c45fc 100%)}.title-small{text-align:left;font-size:1rem;color:#000;font-weight:700}.title-small:hover{color:#833ab4;color:linear-gradient(90deg,#833ab4 0%,#b3279a 50%,#7c45fc 100%)}.text-color{color:#faebd7!important}.text-color:hover{color:#000!important}.mat-expansion-panel-header.mat-expanded,.mat-expansion-panel-header.mat-expanded:hover .mat-expansion-panel-header.mat-expanded:focus{background:#833ab4;background:linear-gradient(90deg,#833ab4 0%,#b3276e 50%,#454ffc 100%)}.mat-expansion-panel-header{color:#faebd7;background:#833ab4;background:linear-gradient(90deg,#833ab4 0%,#b3279a 50%,#7c45fc 100%)}.mat-expansion-panel-body{color:#faebd7;background:#463ab4;background:linear-gradient(90deg,rgba(70,58,180,.9755252443) 0%,#a636b4 14%,#5d35b4 22%,#6535b4 23%,#6734b4 26%,#3b30b4 43%,#aa27b3 80%,#454ffc 100%)}.mat-expansion-panel:hover,.mat-expansion-panel:focus{background:#463ab4;background:linear-gradient(90deg,rgba(70,58,180,.9755252443) 0%,#a636b4 14%,#5d35b4 22%,#6535b4 23%,#6734b4 26%,#3b30b4 43%,#aa27b3 80%,#454ffc 100%)}\n',
						],
						encapsulation: 2,
					})),
					nt
				);
			})();
			const Ge = [
				{
					path: '',
					component: (() => {
						class nt {
							constructor() {}
							ngOnInit() {}
						}
						return (
							(nt.ɵfac = function (ke) {
								return new (ke || nt)();
							}),
							(nt.ɵcmp = o.Xpm({
								type: nt,
								selectors: [['app-main']],
								decls: 7,
								vars: 0,
								consts: [
									[1, 'container'],
									[1, 'mt-12', 'p-8'],
									[1, 'mt-7'],
								],
								template: function (ke, yt) {
									1 & ke &&
										(o.TgZ(0, 'div', 0),
										o.TgZ(1, 'div', 1),
										o._UZ(2, 'app-current-weather'),
										o._UZ(3, 'br'),
										o.TgZ(4, 'mat-card'),
										o.TgZ(5, 'div', 2),
										o._UZ(6, 'app-weather-forecast'),
										o.qZA(),
										o.qZA(),
										o.qZA(),
										o.qZA());
								},
								directives: [Re, K.a8, rt],
								styles: [''],
							})),
							nt
						);
					})(),
				},
				{ path: 'forecast', component: rt },
				{ path: 'current', component: Re },
			];
			let ge = (() => {
				class nt {}
				return (
					(nt.ɵfac = function (ke) {
						return new (ke || nt)();
					}),
					(nt.ɵmod = o.oAB({ type: nt })),
					(nt.ɵinj = o.cJS({ imports: [[P.Bz.forChild(Ge)], P.Bz] })),
					nt
				);
			})();
			var tt = S(7108),
				ot = S(3075),
				J = S(520),
				We = S(2843),
				ce = S(8505),
				Pe = S(262);
			let Ie = (() => {
				class nt {
					constructor(ke) {
						this.http = ke;
					}
					postRequest(ke, yt) {
						const xt = new J.WM({
							'Content-type': 'application/json',
						});
						return this.http.post(ke, yt, { headers: xt }).pipe(
							(0, ce.b)((sn) => sn.data),
							(0, Pe.K)(this.handleError)
						);
					}
					getRequest(ke, yt) {
						return (
							new J.WM({ 'Content-type': 'application/json' }),
							this.http.get(ke, { params: yt }).pipe(
								(0, ce.b)((sn) => sn.data),
								(0, Pe.K)(this.handleError)
							)
						);
					}
					putRequest(ke, yt) {
						return (
							new J.WM({ 'Content-type': 'application/json' }),
							this.http.put(ke, yt).pipe(
								(0, ce.b)((sn) => sn.data),
								(0, Pe.K)(this.handleError)
							)
						);
					}
					deleteRequest(ke, yt) {
						return (
							new J.WM({ 'Content-type': 'application/json' }),
							this.http.delete(ke + yt).pipe(
								(0, ce.b)((sn) => sn),
								(0, Pe.K)(this.handleError)
							)
						);
					}
					postUpload(ke, yt) {
						const xt = new J.WM({
							'Content-type': 'multipart/form-data;boundary=test',
						});
						return this.http.post(ke, yt, { headers: xt }).pipe(
							(0, ce.b)((sn) => sn.data),
							(0, Pe.K)(this.handleError)
						);
					}
					handleError(ke) {
						return (0, We._)(ke);
					}
				}
				return (
					(nt.ɵfac = function (ke) {
						return new (ke || nt)(o.LFG(J.eN));
					}),
					(nt.ɵprov = o.Yz7({
						token: nt,
						factory: nt.ɵfac,
						providedIn: 'root',
					})),
					nt
				);
			})();
			var Ue = S(4825);
			const Rt = [
				Ie,
				{
					provide: be,
					useClass: (() => {
						class nt {
							constructor(ke, yt) {
								(this.http = ke), (this.apiService = yt);
							}
							findCurrentLocation(ke) {
								return this.http
									.get(`${G.N.current}lat=${ke.lat}&lon=${ke.long}&appid=${ke.apiKey}`)
									.pipe(
										(0, Ue.g)(2e3),
										(0, ce.b)((xt) => {}),
										(0, Pe.K)(this.apiService.handleError)
									);
							}
						}
						return (
							(nt.ɵfac = function (ke) {
								return new (ke || nt)(o.LFG(J.eN), o.LFG(Ie));
							}),
							(nt.ɵprov = o.Yz7({
								token: nt,
								factory: nt.ɵfac,
								providedIn: 'root',
							})),
							nt
						);
					})(),
				},
				{
					provide: de,
					useClass: (() => {
						class nt {
							constructor(ke, yt) {
								(this.http = ke), (this.apiService = yt);
							}
							findByGeographicCoordinates(ke) {
								return this.http
									.get(`${G.N.forecast}lat=${ke.lat}&lon=${ke.long}&appid=${ke.apiKey}`)
									.pipe((0, Ue.g)(500), (0, Pe.K)(this.apiService.handleError));
							}
						}
						return (
							(nt.ɵfac = function (ke) {
								return new (ke || nt)(o.LFG(J.eN), o.LFG(Ie));
							}),
							(nt.ɵprov = o.Yz7({
								token: nt,
								factory: nt.ɵfac,
								providedIn: 'root',
							})),
							nt
						);
					})(),
				},
			];
			let Ht = (() => {
				class nt {}
				return (
					(nt.ɵfac = function (ke) {
						return new (ke || nt)();
					}),
					(nt.ɵmod = o.oAB({ type: nt })),
					(nt.ɵinj = o.cJS({
						providers: [...Rt],
						imports: [[m.ez, ge, tt.q, ot.u5]],
					})),
					nt
				);
			})();
		},
		7108: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { q: () => Yd });
			var m = S(5664),
				P = S(3262),
				o = S(5e3);
			let De = (() => {
				class l {}
				return (
					(l.ɵfac = function (e) {
						return new (e || l)();
					}),
					(l.ɵmod = o.oAB({ type: l })),
					(l.ɵinj = o.cJS({})),
					l
				);
			})();
			var ae = S(9808),
				Q = S(925),
				K = S(3191),
				q = S(7579),
				Re = S(727),
				de = S(4986),
				Be = S(5963),
				ye = S(6406),
				Ne = S(8306),
				rt = S(6451),
				at = S(2722),
				Ge = S(6731);
			function ge(l, a, e) {
				for (let r in a)
					if (a.hasOwnProperty(r)) {
						const d = a[r];
						d
							? l.setProperty(r, d, (null == e ? void 0 : e.has(r)) ? 'important' : '')
							: l.removeProperty(r);
					}
				return l;
			}
			function tt(l, a) {
				const e = a ? '' : 'none';
				ge(l.style, {
					'touch-action': a ? '' : 'none',
					'-webkit-user-drag': a ? '' : 'none',
					'-webkit-tap-highlight-color': a ? '' : 'transparent',
					'user-select': e,
					'-ms-user-select': e,
					'-webkit-user-select': e,
					'-moz-user-select': e,
				});
			}
			function ot(l, a, e) {
				ge(
					l.style,
					{
						position: a ? '' : 'fixed',
						top: a ? '' : '0',
						opacity: a ? '' : '0',
						left: a ? '' : '-999em',
					},
					e
				);
			}
			function J(l, a) {
				return a && 'none' != a ? l + ' ' + a : l;
			}
			function We(l) {
				const a = l.toLowerCase().indexOf('ms') > -1 ? 1 : 1e3;
				return parseFloat(l) * a;
			}
			function Pe(l, a) {
				return l
					.getPropertyValue(a)
					.split(',')
					.map((r) => r.trim());
			}
			function Ie(l) {
				const a = l.getBoundingClientRect();
				return {
					top: a.top,
					right: a.right,
					bottom: a.bottom,
					left: a.left,
					width: a.width,
					height: a.height,
					x: a.x,
					y: a.y,
				};
			}
			function Ue(l, a, e) {
				const { top: r, bottom: d, left: g, right: H } = l;
				return e >= r && e <= d && a >= g && a <= H;
			}
			function ut(l, a, e) {
				(l.top += a), (l.bottom = l.top + l.height), (l.left += e), (l.right = l.left + l.width);
			}
			function Xe(l, a, e, r) {
				const { top: d, right: g, bottom: H, left: ie, width: ze, height: bt } = l,
					Mt = ze * a,
					hn = bt * a;
				return r > d - hn && r < H + hn && e > ie - Mt && e < g + Mt;
			}
			class Rt {
				constructor(a, e) {
					(this._document = a), (this._viewportRuler = e), (this.positions = new Map());
				}
				clear() {
					this.positions.clear();
				}
				cache(a) {
					this.clear(),
						this.positions.set(this._document, {
							scrollPosition: this._viewportRuler.getViewportScrollPosition(),
						}),
						a.forEach((e) => {
							this.positions.set(e, {
								scrollPosition: {
									top: e.scrollTop,
									left: e.scrollLeft,
								},
								clientRect: Ie(e),
							});
						});
				}
				handleScroll(a) {
					const e = (0, Q.sA)(a),
						r = this.positions.get(e);
					if (!r) return null;
					const d = r.scrollPosition;
					let g, H;
					if (e === this._document) {
						const bt = this._viewportRuler.getViewportScrollPosition();
						(g = bt.top), (H = bt.left);
					} else (g = e.scrollTop), (H = e.scrollLeft);
					const ie = d.top - g,
						ze = d.left - H;
					return (
						this.positions.forEach((bt, Mt) => {
							bt.clientRect && e !== Mt && e.contains(Mt) && ut(bt.clientRect, ie, ze);
						}),
						(d.top = g),
						(d.left = H),
						{ top: ie, left: ze }
					);
				}
			}
			function Ht(l) {
				const a = l.cloneNode(!0),
					e = a.querySelectorAll('[id]'),
					r = l.nodeName.toLowerCase();
				a.removeAttribute('id');
				for (let d = 0; d < e.length; d++) e[d].removeAttribute('id');
				return (
					'canvas' === r ? yt(l, a) : ('input' === r || 'select' === r || 'textarea' === r) && ke(l, a),
					nt('canvas', l, a, yt),
					nt('input, textarea, select', l, a, ke),
					a
				);
			}
			function nt(l, a, e, r) {
				const d = a.querySelectorAll(l);
				if (d.length) {
					const g = e.querySelectorAll(l);
					for (let H = 0; H < d.length; H++) r(d[H], g[H]);
				}
			}
			let gt = 0;
			function ke(l, a) {
				'file' !== a.type && (a.value = l.value),
					'radio' === a.type && a.name && (a.name = `mat-clone-${a.name}-${gt++}`);
			}
			function yt(l, a) {
				const e = a.getContext('2d');
				if (e)
					try {
						e.drawImage(l, 0, 0);
					} catch (r) {}
			}
			const xt = (0, Q.i$)({ passive: !0 }),
				sn = (0, Q.i$)({ passive: !1 }),
				Ot = new Set(['position']);
			class ft {
				constructor(a, e, r, d, g, H) {
					(this._config = e),
						(this._document = r),
						(this._ngZone = d),
						(this._viewportRuler = g),
						(this._dragDropRegistry = H),
						(this._passiveTransform = { x: 0, y: 0 }),
						(this._activeTransform = { x: 0, y: 0 }),
						(this._hasStartedDragging = !1),
						(this._moveEvents = new q.x()),
						(this._pointerMoveSubscription = Re.w0.EMPTY),
						(this._pointerUpSubscription = Re.w0.EMPTY),
						(this._scrollSubscription = Re.w0.EMPTY),
						(this._resizeSubscription = Re.w0.EMPTY),
						(this._boundaryElement = null),
						(this._nativeInteractionsEnabled = !0),
						(this._handles = []),
						(this._disabledHandles = new Set()),
						(this._direction = 'ltr'),
						(this.dragStartDelay = 0),
						(this._disabled = !1),
						(this.beforeStarted = new q.x()),
						(this.started = new q.x()),
						(this.released = new q.x()),
						(this.ended = new q.x()),
						(this.entered = new q.x()),
						(this.exited = new q.x()),
						(this.dropped = new q.x()),
						(this.moved = this._moveEvents),
						(this._pointerDown = (ie) => {
							if ((this.beforeStarted.next(), this._handles.length)) {
								const ze = this._handles.find(
									(bt) => ie.target && (ie.target === bt || bt.contains(ie.target))
								);
								ze &&
									!this._disabledHandles.has(ze) &&
									!this.disabled &&
									this._initializeDragSequence(ze, ie);
							} else this.disabled || this._initializeDragSequence(this._rootElement, ie);
						}),
						(this._pointerMove = (ie) => {
							const ze = this._getPointerPositionOnPage(ie);
							if (!this._hasStartedDragging) {
								if (
									Math.abs(ze.x - this._pickupPositionOnPage.x) +
										Math.abs(ze.y - this._pickupPositionOnPage.y) >=
									this._config.dragStartThreshold
								) {
									const Pi = Date.now() >= this._dragStartTime + this._getDragStartDelay(ie),
										Tr = this._dropContainer;
									if (!Pi) return void this._endDragSequence(ie);
									(!Tr || (!Tr.isDragging() && !Tr.isReceiving())) &&
										(ie.preventDefault(),
										(this._hasStartedDragging = !0),
										this._ngZone.run(() => this._startDragSequence(ie)));
								}
								return;
							}
							this._boundaryElement &&
								(!this._previewRect || (!this._previewRect.width && !this._previewRect.height)) &&
								(this._previewRect = (this._preview || this._rootElement).getBoundingClientRect()),
								ie.preventDefault();
							const bt = this._getConstrainedPointerPosition(ze);
							if (
								((this._hasMoved = !0),
								(this._lastKnownPointerPosition = ze),
								this._updatePointerDirectionDelta(bt),
								this._dropContainer)
							)
								this._updateActiveDropContainer(bt, ze);
							else {
								const Mt = this._activeTransform;
								(Mt.x = bt.x - this._pickupPositionOnPage.x + this._passiveTransform.x),
									(Mt.y = bt.y - this._pickupPositionOnPage.y + this._passiveTransform.y),
									this._applyRootElementTransform(Mt.x, Mt.y);
							}
							this._moveEvents.observers.length &&
								this._ngZone.run(() => {
									this._moveEvents.next({
										source: this,
										pointerPosition: bt,
										event: ie,
										distance: this._getDragDistance(bt),
										delta: this._pointerDirectionDelta,
									});
								});
						}),
						(this._pointerUp = (ie) => {
							this._endDragSequence(ie);
						}),
						this.withRootElement(a).withParent(e.parentDragRef || null),
						(this._parentPositions = new Rt(r, g)),
						H.registerDragItem(this);
				}
				get disabled() {
					return this._disabled || !(!this._dropContainer || !this._dropContainer.disabled);
				}
				set disabled(a) {
					const e = (0, K.Ig)(a);
					e !== this._disabled &&
						((this._disabled = e),
						this._toggleNativeDragInteractions(),
						this._handles.forEach((r) => tt(r, e)));
				}
				getPlaceholderElement() {
					return this._placeholder;
				}
				getRootElement() {
					return this._rootElement;
				}
				getVisibleElement() {
					return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
				}
				withHandles(a) {
					(this._handles = a.map((r) => (0, K.fI)(r))),
						this._handles.forEach((r) => tt(r, this.disabled)),
						this._toggleNativeDragInteractions();
					const e = new Set();
					return (
						this._disabledHandles.forEach((r) => {
							this._handles.indexOf(r) > -1 && e.add(r);
						}),
						(this._disabledHandles = e),
						this
					);
				}
				withPreviewTemplate(a) {
					return (this._previewTemplate = a), this;
				}
				withPlaceholderTemplate(a) {
					return (this._placeholderTemplate = a), this;
				}
				withRootElement(a) {
					const e = (0, K.fI)(a);
					return (
						e !== this._rootElement &&
							(this._rootElement && this._removeRootElementListeners(this._rootElement),
							this._ngZone.runOutsideAngular(() => {
								e.addEventListener('mousedown', this._pointerDown, sn),
									e.addEventListener('touchstart', this._pointerDown, xt);
							}),
							(this._initialTransform = void 0),
							(this._rootElement = e)),
						'undefined' != typeof SVGElement &&
							this._rootElement instanceof SVGElement &&
							(this._ownerSVGElement = this._rootElement.ownerSVGElement),
						this
					);
				}
				withBoundaryElement(a) {
					return (
						(this._boundaryElement = a ? (0, K.fI)(a) : null),
						this._resizeSubscription.unsubscribe(),
						a &&
							(this._resizeSubscription = this._viewportRuler
								.change(10)
								.subscribe(() => this._containInsideBoundaryOnResize())),
						this
					);
				}
				withParent(a) {
					return (this._parentDragRef = a), this;
				}
				dispose() {
					var a, e;
					this._removeRootElementListeners(this._rootElement),
						this.isDragging() && (null === (a = this._rootElement) || void 0 === a || a.remove()),
						null === (e = this._anchor) || void 0 === e || e.remove(),
						this._destroyPreview(),
						this._destroyPlaceholder(),
						this._dragDropRegistry.removeDragItem(this),
						this._removeSubscriptions(),
						this.beforeStarted.complete(),
						this.started.complete(),
						this.released.complete(),
						this.ended.complete(),
						this.entered.complete(),
						this.exited.complete(),
						this.dropped.complete(),
						this._moveEvents.complete(),
						(this._handles = []),
						this._disabledHandles.clear(),
						(this._dropContainer = void 0),
						this._resizeSubscription.unsubscribe(),
						this._parentPositions.clear(),
						(this._boundaryElement =
							this._rootElement =
							this._ownerSVGElement =
							this._placeholderTemplate =
							this._previewTemplate =
							this._anchor =
							this._parentDragRef =
								null);
				}
				isDragging() {
					return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
				}
				reset() {
					(this._rootElement.style.transform = this._initialTransform || ''),
						(this._activeTransform = { x: 0, y: 0 }),
						(this._passiveTransform = { x: 0, y: 0 });
				}
				disableHandle(a) {
					!this._disabledHandles.has(a) &&
						this._handles.indexOf(a) > -1 &&
						(this._disabledHandles.add(a), tt(a, !0));
				}
				enableHandle(a) {
					this._disabledHandles.has(a) && (this._disabledHandles.delete(a), tt(a, this.disabled));
				}
				withDirection(a) {
					return (this._direction = a), this;
				}
				_withDropContainer(a) {
					this._dropContainer = a;
				}
				getFreeDragPosition() {
					const a = this.isDragging() ? this._activeTransform : this._passiveTransform;
					return { x: a.x, y: a.y };
				}
				setFreeDragPosition(a) {
					return (
						(this._activeTransform = { x: 0, y: 0 }),
						(this._passiveTransform.x = a.x),
						(this._passiveTransform.y = a.y),
						this._dropContainer || this._applyRootElementTransform(a.x, a.y),
						this
					);
				}
				withPreviewContainer(a) {
					return (this._previewContainer = a), this;
				}
				_sortFromLastPointerPosition() {
					const a = this._lastKnownPointerPosition;
					a &&
						this._dropContainer &&
						this._updateActiveDropContainer(this._getConstrainedPointerPosition(a), a);
				}
				_removeSubscriptions() {
					this._pointerMoveSubscription.unsubscribe(),
						this._pointerUpSubscription.unsubscribe(),
						this._scrollSubscription.unsubscribe();
				}
				_destroyPreview() {
					var a, e;
					null === (a = this._preview) || void 0 === a || a.remove(),
						null === (e = this._previewRef) || void 0 === e || e.destroy(),
						(this._preview = this._previewRef = null);
				}
				_destroyPlaceholder() {
					var a, e;
					null === (a = this._placeholder) || void 0 === a || a.remove(),
						null === (e = this._placeholderRef) || void 0 === e || e.destroy(),
						(this._placeholder = this._placeholderRef = null);
				}
				_endDragSequence(a) {
					if (
						this._dragDropRegistry.isDragging(this) &&
						(this._removeSubscriptions(),
						this._dragDropRegistry.stopDragging(this),
						this._toggleNativeDragInteractions(),
						this._handles &&
							(this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight),
						this._hasStartedDragging)
					)
						if ((this.released.next({ source: this }), this._dropContainer))
							this._dropContainer._stopScrolling(),
								this._animatePreviewToPlaceholder().then(() => {
									this._cleanupDragArtifacts(a),
										this._cleanupCachedDimensions(),
										this._dragDropRegistry.stopDragging(this);
								});
						else {
							this._passiveTransform.x = this._activeTransform.x;
							const e = this._getPointerPositionOnPage(a);
							(this._passiveTransform.y = this._activeTransform.y),
								this._ngZone.run(() => {
									this.ended.next({
										source: this,
										distance: this._getDragDistance(e),
										dropPoint: e,
									});
								}),
								this._cleanupCachedDimensions(),
								this._dragDropRegistry.stopDragging(this);
						}
				}
				_startDragSequence(a) {
					Ct(a) && (this._lastTouchEventTime = Date.now()), this._toggleNativeDragInteractions();
					const e = this._dropContainer;
					if (e) {
						const r = this._rootElement,
							d = r.parentNode,
							g = (this._placeholder = this._createPlaceholderElement()),
							H = (this._anchor = this._anchor || this._document.createComment('')),
							ie = this._getShadowRoot();
						d.insertBefore(H, r),
							(this._initialTransform = r.style.transform || ''),
							(this._preview = this._createPreviewElement()),
							ot(r, !1, Ot),
							this._document.body.appendChild(d.replaceChild(g, r)),
							this._getPreviewInsertionPoint(d, ie).appendChild(this._preview),
							this.started.next({ source: this }),
							e.start(),
							(this._initialContainer = e),
							(this._initialIndex = e.getItemIndex(this));
					} else this.started.next({ source: this }), (this._initialContainer = this._initialIndex = void 0);
					this._parentPositions.cache(e ? e.getScrollableParents() : []);
				}
				_initializeDragSequence(a, e) {
					this._parentDragRef && e.stopPropagation();
					const r = this.isDragging(),
						d = Ct(e),
						g = !d && 0 !== e.button,
						H = this._rootElement,
						ie = (0, Q.sA)(e),
						ze = !d && this._lastTouchEventTime && this._lastTouchEventTime + 800 > Date.now(),
						bt = d ? (0, m.yG)(e) : (0, m.X6)(e);
					if ((ie && ie.draggable && 'mousedown' === e.type && e.preventDefault(), r || g || ze || bt))
						return;
					if (this._handles.length) {
						const vn = H.style;
						(this._rootElementTapHighlight = vn.webkitTapHighlightColor || ''),
							(vn.webkitTapHighlightColor = 'transparent');
					}
					(this._hasStartedDragging = this._hasMoved = !1),
						this._removeSubscriptions(),
						(this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(
							this._pointerMove
						)),
						(this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp)),
						(this._scrollSubscription = this._dragDropRegistry
							.scrolled(this._getShadowRoot())
							.subscribe((vn) => this._updateOnScroll(vn))),
						this._boundaryElement && (this._boundaryRect = Ie(this._boundaryElement));
					const Mt = this._previewTemplate;
					this._pickupPositionInElement =
						Mt && Mt.template && !Mt.matchSize ? { x: 0, y: 0 } : this._getPointerPositionInElement(a, e);
					const hn =
						(this._pickupPositionOnPage =
						this._lastKnownPointerPosition =
							this._getPointerPositionOnPage(e));
					(this._pointerDirectionDelta = { x: 0, y: 0 }),
						(this._pointerPositionAtLastDirectionChange = {
							x: hn.x,
							y: hn.y,
						}),
						(this._dragStartTime = Date.now()),
						this._dragDropRegistry.startDragging(this, e);
				}
				_cleanupDragArtifacts(a) {
					ot(this._rootElement, !0, Ot),
						this._anchor.parentNode.replaceChild(this._rootElement, this._anchor),
						this._destroyPreview(),
						this._destroyPlaceholder(),
						(this._boundaryRect = this._previewRect = this._initialTransform = void 0),
						this._ngZone.run(() => {
							const e = this._dropContainer,
								r = e.getItemIndex(this),
								d = this._getPointerPositionOnPage(a),
								g = this._getDragDistance(d),
								H = e._isOverContainer(d.x, d.y);
							this.ended.next({
								source: this,
								distance: g,
								dropPoint: d,
							}),
								this.dropped.next({
									item: this,
									currentIndex: r,
									previousIndex: this._initialIndex,
									container: e,
									previousContainer: this._initialContainer,
									isPointerOverContainer: H,
									distance: g,
									dropPoint: d,
								}),
								e.drop(this, r, this._initialIndex, this._initialContainer, H, g, d),
								(this._dropContainer = this._initialContainer);
						});
				}
				_updateActiveDropContainer({ x: a, y: e }, { x: r, y: d }) {
					let g = this._initialContainer._getSiblingContainerFromPosition(this, a, e);
					!g &&
						this._dropContainer !== this._initialContainer &&
						this._initialContainer._isOverContainer(a, e) &&
						(g = this._initialContainer),
						g &&
							g !== this._dropContainer &&
							this._ngZone.run(() => {
								this.exited.next({
									item: this,
									container: this._dropContainer,
								}),
									this._dropContainer.exit(this),
									(this._dropContainer = g),
									this._dropContainer.enter(
										this,
										a,
										e,
										g === this._initialContainer && g.sortingDisabled ? this._initialIndex : void 0
									),
									this.entered.next({
										item: this,
										container: g,
										currentIndex: g.getItemIndex(this),
									});
							}),
						this.isDragging() &&
							(this._dropContainer._startScrollingIfNecessary(r, d),
							this._dropContainer._sortItem(this, a, e, this._pointerDirectionDelta),
							this._applyPreviewTransform(
								a - this._pickupPositionInElement.x,
								e - this._pickupPositionInElement.y
							));
				}
				_createPreviewElement() {
					const a = this._previewTemplate,
						e = this.previewClass,
						r = a ? a.template : null;
					let d;
					if (r && a) {
						const g = a.matchSize ? this._rootElement.getBoundingClientRect() : null,
							H = a.viewContainer.createEmbeddedView(r, a.context);
						H.detectChanges(),
							(d = It(H, this._document)),
							(this._previewRef = H),
							a.matchSize
								? Bt(d, g)
								: (d.style.transform = Je(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y));
					} else {
						const g = this._rootElement;
						(d = Ht(g)),
							Bt(d, g.getBoundingClientRect()),
							this._initialTransform && (d.style.transform = this._initialTransform);
					}
					return (
						ge(
							d.style,
							{
								'pointer-events': 'none',
								margin: '0',
								position: 'fixed',
								top: '0',
								left: '0',
								'z-index': `${this._config.zIndex || 1e3}`,
							},
							Ot
						),
						tt(d, !1),
						d.classList.add('cdk-drag-preview'),
						d.setAttribute('dir', this._direction),
						e && (Array.isArray(e) ? e.forEach((g) => d.classList.add(g)) : d.classList.add(e)),
						d
					);
				}
				_animatePreviewToPlaceholder() {
					if (!this._hasMoved) return Promise.resolve();
					const a = this._placeholder.getBoundingClientRect();
					this._preview.classList.add('cdk-drag-animating'), this._applyPreviewTransform(a.left, a.top);
					const e = (function ce(l) {
						const a = getComputedStyle(l),
							e = Pe(a, 'transition-property'),
							r = e.find((ie) => 'transform' === ie || 'all' === ie);
						if (!r) return 0;
						const d = e.indexOf(r),
							g = Pe(a, 'transition-duration'),
							H = Pe(a, 'transition-delay');
						return We(g[d]) + We(H[d]);
					})(this._preview);
					return 0 === e
						? Promise.resolve()
						: this._ngZone.runOutsideAngular(
								() =>
									new Promise((r) => {
										const d = (H) => {
												var ie;
												(!H ||
													((0, Q.sA)(H) === this._preview &&
														'transform' === H.propertyName)) &&
													(null === (ie = this._preview) ||
														void 0 === ie ||
														ie.removeEventListener('transitionend', d),
													r(),
													clearTimeout(g));
											},
											g = setTimeout(d, 1.5 * e);
										this._preview.addEventListener('transitionend', d);
									})
						  );
				}
				_createPlaceholderElement() {
					const a = this._placeholderTemplate,
						e = a ? a.template : null;
					let r;
					return (
						e
							? ((this._placeholderRef = a.viewContainer.createEmbeddedView(e, a.context)),
							  this._placeholderRef.detectChanges(),
							  (r = It(this._placeholderRef, this._document)))
							: (r = Ht(this._rootElement)),
						r.classList.add('cdk-drag-placeholder'),
						r
					);
				}
				_getPointerPositionInElement(a, e) {
					const r = this._rootElement.getBoundingClientRect(),
						d = a === this._rootElement ? null : a,
						g = d ? d.getBoundingClientRect() : r,
						H = Ct(e) ? e.targetTouches[0] : e,
						ie = this._getViewportScrollPosition();
					return {
						x: g.left - r.left + (H.pageX - g.left - ie.left),
						y: g.top - r.top + (H.pageY - g.top - ie.top),
					};
				}
				_getPointerPositionOnPage(a) {
					const e = this._getViewportScrollPosition(),
						r = Ct(a) ? a.touches[0] || a.changedTouches[0] || { pageX: 0, pageY: 0 } : a,
						d = r.pageX - e.left,
						g = r.pageY - e.top;
					if (this._ownerSVGElement) {
						const H = this._ownerSVGElement.getScreenCTM();
						if (H) {
							const ie = this._ownerSVGElement.createSVGPoint();
							return (ie.x = d), (ie.y = g), ie.matrixTransform(H.inverse());
						}
					}
					return { x: d, y: g };
				}
				_getConstrainedPointerPosition(a) {
					const e = this._dropContainer ? this._dropContainer.lockAxis : null;
					let { x: r, y: d } = this.constrainPosition ? this.constrainPosition(a, this) : a;
					if (
						('x' === this.lockAxis || 'x' === e
							? (d = this._pickupPositionOnPage.y)
							: ('y' === this.lockAxis || 'y' === e) && (r = this._pickupPositionOnPage.x),
						this._boundaryRect)
					) {
						const { x: g, y: H } = this._pickupPositionInElement,
							ie = this._boundaryRect,
							ze = this._previewRect,
							bt = ie.top + H,
							Mt = ie.bottom - (ze.height - H);
						(r = Fe(r, ie.left + g, ie.right - (ze.width - g))), (d = Fe(d, bt, Mt));
					}
					return { x: r, y: d };
				}
				_updatePointerDirectionDelta(a) {
					const { x: e, y: r } = a,
						d = this._pointerDirectionDelta,
						g = this._pointerPositionAtLastDirectionChange,
						H = Math.abs(e - g.x),
						ie = Math.abs(r - g.y);
					return (
						H > this._config.pointerDirectionChangeThreshold && ((d.x = e > g.x ? 1 : -1), (g.x = e)),
						ie > this._config.pointerDirectionChangeThreshold && ((d.y = r > g.y ? 1 : -1), (g.y = r)),
						d
					);
				}
				_toggleNativeDragInteractions() {
					if (!this._rootElement || !this._handles) return;
					const a = this._handles.length > 0 || !this.isDragging();
					a !== this._nativeInteractionsEnabled &&
						((this._nativeInteractionsEnabled = a), tt(this._rootElement, a));
				}
				_removeRootElementListeners(a) {
					a.removeEventListener('mousedown', this._pointerDown, sn),
						a.removeEventListener('touchstart', this._pointerDown, xt);
				}
				_applyRootElementTransform(a, e) {
					const r = Je(a, e),
						d = this._rootElement.style;
					null == this._initialTransform &&
						(this._initialTransform = d.transform && 'none' != d.transform ? d.transform : ''),
						(d.transform = J(r, this._initialTransform));
				}
				_applyPreviewTransform(a, e) {
					var r;
					const d = (null === (r = this._previewTemplate) || void 0 === r ? void 0 : r.template)
							? void 0
							: this._initialTransform,
						g = Je(a, e);
					this._preview.style.transform = J(g, d);
				}
				_getDragDistance(a) {
					const e = this._pickupPositionOnPage;
					return e ? { x: a.x - e.x, y: a.y - e.y } : { x: 0, y: 0 };
				}
				_cleanupCachedDimensions() {
					(this._boundaryRect = this._previewRect = void 0), this._parentPositions.clear();
				}
				_containInsideBoundaryOnResize() {
					let { x: a, y: e } = this._passiveTransform;
					if ((0 === a && 0 === e) || this.isDragging() || !this._boundaryElement) return;
					const r = this._boundaryElement.getBoundingClientRect(),
						d = this._rootElement.getBoundingClientRect();
					if ((0 === r.width && 0 === r.height) || (0 === d.width && 0 === d.height)) return;
					const g = r.left - d.left,
						H = d.right - r.right,
						ie = r.top - d.top,
						ze = d.bottom - r.bottom;
					r.width > d.width ? (g > 0 && (a += g), H > 0 && (a -= H)) : (a = 0),
						r.height > d.height ? (ie > 0 && (e += ie), ze > 0 && (e -= ze)) : (e = 0),
						(a !== this._passiveTransform.x || e !== this._passiveTransform.y) &&
							this.setFreeDragPosition({ y: e, x: a });
				}
				_getDragStartDelay(a) {
					const e = this.dragStartDelay;
					return 'number' == typeof e ? e : Ct(a) ? e.touch : e ? e.mouse : 0;
				}
				_updateOnScroll(a) {
					const e = this._parentPositions.handleScroll(a);
					if (e) {
						const r = (0, Q.sA)(a);
						this._boundaryRect &&
							r !== this._boundaryElement &&
							r.contains(this._boundaryElement) &&
							ut(this._boundaryRect, e.top, e.left),
							(this._pickupPositionOnPage.x += e.left),
							(this._pickupPositionOnPage.y += e.top),
							this._dropContainer ||
								((this._activeTransform.x -= e.left),
								(this._activeTransform.y -= e.top),
								this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y));
					}
				}
				_getViewportScrollPosition() {
					const a = this._parentPositions.positions.get(this._document);
					return a ? a.scrollPosition : this._viewportRuler.getViewportScrollPosition();
				}
				_getShadowRoot() {
					return (
						void 0 === this._cachedShadowRoot && (this._cachedShadowRoot = (0, Q.kV)(this._rootElement)),
						this._cachedShadowRoot
					);
				}
				_getPreviewInsertionPoint(a, e) {
					const r = this._previewContainer || 'global';
					if ('parent' === r) return a;
					if ('global' === r) {
						const d = this._document;
						return (
							e ||
							d.fullscreenElement ||
							d.webkitFullscreenElement ||
							d.mozFullScreenElement ||
							d.msFullscreenElement ||
							d.body
						);
					}
					return (0, K.fI)(r);
				}
			}
			function Je(l, a) {
				return `translate3d(${Math.round(l)}px, ${Math.round(a)}px, 0)`;
			}
			function Fe(l, a, e) {
				return Math.max(a, Math.min(e, l));
			}
			function Ct(l) {
				return 't' === l.type[0];
			}
			function It(l, a) {
				const e = l.rootNodes;
				if (1 === e.length && e[0].nodeType === a.ELEMENT_NODE) return e[0];
				const r = a.createElement('div');
				return e.forEach((d) => r.appendChild(d)), r;
			}
			function Bt(l, a) {
				(l.style.width = `${a.width}px`),
					(l.style.height = `${a.height}px`),
					(l.style.transform = Je(a.left, a.top));
			}
			function Oe(l, a) {
				return Math.max(0, Math.min(a, l));
			}
			class te {
				constructor(a, e, r, d, g) {
					(this._dragDropRegistry = e),
						(this._ngZone = d),
						(this._viewportRuler = g),
						(this.disabled = !1),
						(this.sortingDisabled = !1),
						(this.autoScrollDisabled = !1),
						(this.autoScrollStep = 2),
						(this.enterPredicate = () => !0),
						(this.sortPredicate = () => !0),
						(this.beforeStarted = new q.x()),
						(this.entered = new q.x()),
						(this.exited = new q.x()),
						(this.dropped = new q.x()),
						(this.sorted = new q.x()),
						(this._isDragging = !1),
						(this._itemPositions = []),
						(this._previousSwap = {
							drag: null,
							delta: 0,
							overlaps: !1,
						}),
						(this._draggables = []),
						(this._siblings = []),
						(this._orientation = 'vertical'),
						(this._activeSiblings = new Set()),
						(this._direction = 'ltr'),
						(this._viewportScrollSubscription = Re.w0.EMPTY),
						(this._verticalScrollDirection = 0),
						(this._horizontalScrollDirection = 0),
						(this._stopScrollTimers = new q.x()),
						(this._cachedShadowRoot = null),
						(this._startScrollInterval = () => {
							this._stopScrolling(),
								(function $e(l = 0, a = de.z) {
									return l < 0 && (l = 0), (0, Be.H)(l, l, a);
								})(0, ye.Z)
									.pipe((0, at.R)(this._stopScrollTimers))
									.subscribe(() => {
										const H = this._scrollNode,
											ie = this.autoScrollStep;
										1 === this._verticalScrollDirection
											? H.scrollBy(0, -ie)
											: 2 === this._verticalScrollDirection && H.scrollBy(0, ie),
											1 === this._horizontalScrollDirection
												? H.scrollBy(-ie, 0)
												: 2 === this._horizontalScrollDirection && H.scrollBy(ie, 0);
									});
						}),
						(this.element = (0, K.fI)(a)),
						(this._document = r),
						this.withScrollableParents([this.element]),
						e.registerDropContainer(this),
						(this._parentPositions = new Rt(r, g));
				}
				dispose() {
					this._stopScrolling(),
						this._stopScrollTimers.complete(),
						this._viewportScrollSubscription.unsubscribe(),
						this.beforeStarted.complete(),
						this.entered.complete(),
						this.exited.complete(),
						this.dropped.complete(),
						this.sorted.complete(),
						this._activeSiblings.clear(),
						(this._scrollNode = null),
						this._parentPositions.clear(),
						this._dragDropRegistry.removeDropContainer(this);
				}
				isDragging() {
					return this._isDragging;
				}
				start() {
					this._draggingStarted(), this._notifyReceivingSiblings();
				}
				enter(a, e, r, d) {
					let g;
					this._draggingStarted(),
						null == d
							? ((g = this.sortingDisabled ? this._draggables.indexOf(a) : -1),
							  -1 === g && (g = this._getItemIndexFromPointerPosition(a, e, r)))
							: (g = d);
					const H = this._activeDraggables,
						ie = H.indexOf(a),
						ze = a.getPlaceholderElement();
					let bt = H[g];
					if (
						(bt === a && (bt = H[g + 1]),
						!bt &&
							(null == g || -1 === g || g < H.length - 1) &&
							this._shouldEnterAsFirstChild(e, r) &&
							(bt = H[0]),
						ie > -1 && H.splice(ie, 1),
						bt && !this._dragDropRegistry.isDragging(bt))
					) {
						const Mt = bt.getRootElement();
						Mt.parentElement.insertBefore(ze, Mt), H.splice(g, 0, a);
					} else (0, K.fI)(this.element).appendChild(ze), H.push(a);
					(ze.style.transform = ''),
						this._cacheItemPositions(),
						this._cacheParentPositions(),
						this._notifyReceivingSiblings(),
						this.entered.next({
							item: a,
							container: this,
							currentIndex: this.getItemIndex(a),
						});
				}
				exit(a) {
					this._reset(), this.exited.next({ item: a, container: this });
				}
				drop(a, e, r, d, g, H, ie) {
					this._reset(),
						this.dropped.next({
							item: a,
							currentIndex: e,
							previousIndex: r,
							container: this,
							previousContainer: d,
							isPointerOverContainer: g,
							distance: H,
							dropPoint: ie,
						});
				}
				withItems(a) {
					const e = this._draggables;
					return (
						(this._draggables = a),
						a.forEach((r) => r._withDropContainer(this)),
						this.isDragging() &&
							(e.filter((d) => d.isDragging()).every((d) => -1 === a.indexOf(d))
								? this._reset()
								: this._cacheItems()),
						this
					);
				}
				withDirection(a) {
					return (this._direction = a), this;
				}
				connectedTo(a) {
					return (this._siblings = a.slice()), this;
				}
				withOrientation(a) {
					return (this._orientation = a), this;
				}
				withScrollableParents(a) {
					const e = (0, K.fI)(this.element);
					return (this._scrollableElements = -1 === a.indexOf(e) ? [e, ...a] : a.slice()), this;
				}
				getScrollableParents() {
					return this._scrollableElements;
				}
				getItemIndex(a) {
					return this._isDragging
						? ('horizontal' === this._orientation && 'rtl' === this._direction
								? this._itemPositions.slice().reverse()
								: this._itemPositions
						  ).findIndex((r) => r.drag === a)
						: this._draggables.indexOf(a);
				}
				isReceiving() {
					return this._activeSiblings.size > 0;
				}
				_sortItem(a, e, r, d) {
					if (this.sortingDisabled || !this._clientRect || !Xe(this._clientRect, 0.05, e, r)) return;
					const g = this._itemPositions,
						H = this._getItemIndexFromPointerPosition(a, e, r, d);
					if (-1 === H && g.length > 0) return;
					const ie = 'horizontal' === this._orientation,
						ze = g.findIndex((ei) => ei.drag === a),
						bt = g[H],
						hn = bt.clientRect,
						vn = ze > H ? 1 : -1,
						Pi = this._getItemOffsetPx(g[ze].clientRect, hn, vn),
						Tr = this._getSiblingOffsetPx(ze, g, vn),
						jr = g.slice();
					(function Vt(l, a, e) {
						const r = Oe(a, l.length - 1),
							d = Oe(e, l.length - 1);
						if (r === d) return;
						const g = l[r],
							H = d < r ? -1 : 1;
						for (let ie = r; ie !== d; ie += H) l[ie] = l[ie + H];
						l[d] = g;
					})(g, ze, H),
						this.sorted.next({
							previousIndex: ze,
							currentIndex: H,
							container: this,
							item: a,
						}),
						g.forEach((ei, xo) => {
							if (jr[xo] === ei) return;
							const La = ei.drag === a,
								zs = La ? Pi : Tr,
								Ll = La ? a.getPlaceholderElement() : ei.drag.getRootElement();
							(ei.offset += zs),
								ie
									? ((Ll.style.transform = J(
											`translate3d(${Math.round(ei.offset)}px, 0, 0)`,
											ei.initialTransform
									  )),
									  ut(ei.clientRect, 0, zs))
									: ((Ll.style.transform = J(
											`translate3d(0, ${Math.round(ei.offset)}px, 0)`,
											ei.initialTransform
									  )),
									  ut(ei.clientRect, zs, 0));
						}),
						(this._previousSwap.overlaps = Ue(hn, e, r)),
						(this._previousSwap.drag = bt.drag),
						(this._previousSwap.delta = ie ? d.x : d.y);
				}
				_startScrollingIfNecessary(a, e) {
					if (this.autoScrollDisabled) return;
					let r,
						d = 0,
						g = 0;
					if (
						(this._parentPositions.positions.forEach((H, ie) => {
							ie === this._document ||
								!H.clientRect ||
								r ||
								(Xe(H.clientRect, 0.05, a, e) &&
									(([d, g] = (function xe(l, a, e, r) {
										const d = fe(a, r),
											g = Ye(a, e);
										let H = 0,
											ie = 0;
										if (d) {
											const ze = l.scrollTop;
											1 === d
												? ze > 0 && (H = 1)
												: l.scrollHeight - ze > l.clientHeight && (H = 2);
										}
										if (g) {
											const ze = l.scrollLeft;
											1 === g
												? ze > 0 && (ie = 1)
												: l.scrollWidth - ze > l.clientWidth && (ie = 2);
										}
										return [H, ie];
									})(ie, H.clientRect, a, e)),
									(d || g) && (r = ie)));
						}),
						!d && !g)
					) {
						const { width: H, height: ie } = this._viewportRuler.getViewportSize(),
							ze = {
								width: H,
								height: ie,
								top: 0,
								right: H,
								bottom: ie,
								left: 0,
							};
						(d = fe(ze, e)), (g = Ye(ze, a)), (r = window);
					}
					r &&
						(d !== this._verticalScrollDirection ||
							g !== this._horizontalScrollDirection ||
							r !== this._scrollNode) &&
						((this._verticalScrollDirection = d),
						(this._horizontalScrollDirection = g),
						(this._scrollNode = r),
						(d || g) && r
							? this._ngZone.runOutsideAngular(this._startScrollInterval)
							: this._stopScrolling());
				}
				_stopScrolling() {
					this._stopScrollTimers.next();
				}
				_draggingStarted() {
					const a = (0, K.fI)(this.element).style;
					this.beforeStarted.next(),
						(this._isDragging = !0),
						(this._initialScrollSnap = a.msScrollSnapType || a.scrollSnapType || ''),
						(a.scrollSnapType = a.msScrollSnapType = 'none'),
						this._cacheItems(),
						this._viewportScrollSubscription.unsubscribe(),
						this._listenToScrollEvents();
				}
				_cacheParentPositions() {
					const a = (0, K.fI)(this.element);
					this._parentPositions.cache(this._scrollableElements),
						(this._clientRect = this._parentPositions.positions.get(a).clientRect);
				}
				_cacheItemPositions() {
					const a = 'horizontal' === this._orientation;
					this._itemPositions = this._activeDraggables
						.map((e) => {
							const r = e.getVisibleElement();
							return {
								drag: e,
								offset: 0,
								initialTransform: r.style.transform || '',
								clientRect: Ie(r),
							};
						})
						.sort((e, r) =>
							a ? e.clientRect.left - r.clientRect.left : e.clientRect.top - r.clientRect.top
						);
				}
				_reset() {
					this._isDragging = !1;
					const a = (0, K.fI)(this.element).style;
					(a.scrollSnapType = a.msScrollSnapType = this._initialScrollSnap),
						this._activeDraggables.forEach((e) => {
							var r;
							const d = e.getRootElement();
							if (d) {
								const g =
									null === (r = this._itemPositions.find((H) => H.drag === e)) || void 0 === r
										? void 0
										: r.initialTransform;
								d.style.transform = g || '';
							}
						}),
						this._siblings.forEach((e) => e._stopReceiving(this)),
						(this._activeDraggables = []),
						(this._itemPositions = []),
						(this._previousSwap.drag = null),
						(this._previousSwap.delta = 0),
						(this._previousSwap.overlaps = !1),
						this._stopScrolling(),
						this._viewportScrollSubscription.unsubscribe(),
						this._parentPositions.clear();
				}
				_getSiblingOffsetPx(a, e, r) {
					const d = 'horizontal' === this._orientation,
						g = e[a].clientRect,
						H = e[a + -1 * r];
					let ie = g[d ? 'width' : 'height'] * r;
					if (H) {
						const ze = d ? 'left' : 'top',
							bt = d ? 'right' : 'bottom';
						-1 === r ? (ie -= H.clientRect[ze] - g[bt]) : (ie += g[ze] - H.clientRect[bt]);
					}
					return ie;
				}
				_getItemOffsetPx(a, e, r) {
					const d = 'horizontal' === this._orientation;
					let g = d ? e.left - a.left : e.top - a.top;
					return -1 === r && (g += d ? e.width - a.width : e.height - a.height), g;
				}
				_shouldEnterAsFirstChild(a, e) {
					if (!this._activeDraggables.length) return !1;
					const r = this._itemPositions,
						d = 'horizontal' === this._orientation;
					if (r[0].drag !== this._activeDraggables[0]) {
						const H = r[r.length - 1].clientRect;
						return d ? a >= H.right : e >= H.bottom;
					}
					{
						const H = r[0].clientRect;
						return d ? a <= H.left : e <= H.top;
					}
				}
				_getItemIndexFromPointerPosition(a, e, r, d) {
					const g = 'horizontal' === this._orientation,
						H = this._itemPositions.findIndex(({ drag: ie, clientRect: ze }) => {
							if (ie === a) return !1;
							if (d) {
								const bt = g ? d.x : d.y;
								if (
									ie === this._previousSwap.drag &&
									this._previousSwap.overlaps &&
									bt === this._previousSwap.delta
								)
									return !1;
							}
							return g
								? e >= Math.floor(ze.left) && e < Math.floor(ze.right)
								: r >= Math.floor(ze.top) && r < Math.floor(ze.bottom);
						});
					return -1 !== H && this.sortPredicate(H, a, this) ? H : -1;
				}
				_cacheItems() {
					(this._activeDraggables = this._draggables.slice()),
						this._cacheItemPositions(),
						this._cacheParentPositions();
				}
				_isOverContainer(a, e) {
					return null != this._clientRect && Ue(this._clientRect, a, e);
				}
				_getSiblingContainerFromPosition(a, e, r) {
					return this._siblings.find((d) => d._canReceive(a, e, r));
				}
				_canReceive(a, e, r) {
					if (!this._clientRect || !Ue(this._clientRect, e, r) || !this.enterPredicate(a, this)) return !1;
					const d = this._getShadowRoot().elementFromPoint(e, r);
					if (!d) return !1;
					const g = (0, K.fI)(this.element);
					return d === g || g.contains(d);
				}
				_startReceiving(a, e) {
					const r = this._activeSiblings;
					!r.has(a) &&
						e.every((d) => this.enterPredicate(d, this) || this._draggables.indexOf(d) > -1) &&
						(r.add(a), this._cacheParentPositions(), this._listenToScrollEvents());
				}
				_stopReceiving(a) {
					this._activeSiblings.delete(a), this._viewportScrollSubscription.unsubscribe();
				}
				_listenToScrollEvents() {
					this._viewportScrollSubscription = this._dragDropRegistry
						.scrolled(this._getShadowRoot())
						.subscribe((a) => {
							if (this.isDragging()) {
								const e = this._parentPositions.handleScroll(a);
								e &&
									(this._itemPositions.forEach(({ clientRect: r }) => {
										ut(r, e.top, e.left);
									}),
									this._itemPositions.forEach(({ drag: r }) => {
										this._dragDropRegistry.isDragging(r) && r._sortFromLastPointerPosition();
									}));
							} else this.isReceiving() && this._cacheParentPositions();
						});
				}
				_getShadowRoot() {
					if (!this._cachedShadowRoot) {
						const a = (0, Q.kV)((0, K.fI)(this.element));
						this._cachedShadowRoot = a || this._document;
					}
					return this._cachedShadowRoot;
				}
				_notifyReceivingSiblings() {
					const a = this._activeDraggables.filter((e) => e.isDragging());
					this._siblings.forEach((e) => e._startReceiving(this, a));
				}
			}
			function fe(l, a) {
				const { top: e, bottom: r, height: d } = l,
					g = 0.05 * d;
				return a >= e - g && a <= e + g ? 1 : a >= r - g && a <= r + g ? 2 : 0;
			}
			function Ye(l, a) {
				const { left: e, right: r, width: d } = l,
					g = 0.05 * d;
				return a >= e - g && a <= e + g ? 1 : a >= r - g && a <= r + g ? 2 : 0;
			}
			const X = (0, Q.i$)({ passive: !1, capture: !0 });
			let re = (() => {
				class l {
					constructor(e, r) {
						(this._ngZone = e),
							(this._dropInstances = new Set()),
							(this._dragInstances = new Set()),
							(this._activeDragInstances = []),
							(this._globalListeners = new Map()),
							(this._draggingPredicate = (d) => d.isDragging()),
							(this.pointerMove = new q.x()),
							(this.pointerUp = new q.x()),
							(this.scroll = new q.x()),
							(this._preventDefaultWhileDragging = (d) => {
								this._activeDragInstances.length > 0 && d.preventDefault();
							}),
							(this._persistentTouchmoveListener = (d) => {
								this._activeDragInstances.length > 0 &&
									(this._activeDragInstances.some(this._draggingPredicate) && d.preventDefault(),
									this.pointerMove.next(d));
							}),
							(this._document = r);
					}
					registerDropContainer(e) {
						this._dropInstances.has(e) || this._dropInstances.add(e);
					}
					registerDragItem(e) {
						this._dragInstances.add(e),
							1 === this._dragInstances.size &&
								this._ngZone.runOutsideAngular(() => {
									this._document.addEventListener('touchmove', this._persistentTouchmoveListener, X);
								});
					}
					removeDropContainer(e) {
						this._dropInstances.delete(e);
					}
					removeDragItem(e) {
						this._dragInstances.delete(e),
							this.stopDragging(e),
							0 === this._dragInstances.size &&
								this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, X);
					}
					startDragging(e, r) {
						if (
							!(this._activeDragInstances.indexOf(e) > -1) &&
							(this._activeDragInstances.push(e), 1 === this._activeDragInstances.length)
						) {
							const d = r.type.startsWith('touch');
							this._globalListeners
								.set(d ? 'touchend' : 'mouseup', {
									handler: (g) => this.pointerUp.next(g),
									options: !0,
								})
								.set('scroll', {
									handler: (g) => this.scroll.next(g),
									options: !0,
								})
								.set('selectstart', {
									handler: this._preventDefaultWhileDragging,
									options: X,
								}),
								d ||
									this._globalListeners.set('mousemove', {
										handler: (g) => this.pointerMove.next(g),
										options: X,
									}),
								this._ngZone.runOutsideAngular(() => {
									this._globalListeners.forEach((g, H) => {
										this._document.addEventListener(H, g.handler, g.options);
									});
								});
						}
					}
					stopDragging(e) {
						const r = this._activeDragInstances.indexOf(e);
						r > -1 &&
							(this._activeDragInstances.splice(r, 1),
							0 === this._activeDragInstances.length && this._clearGlobalListeners());
					}
					isDragging(e) {
						return this._activeDragInstances.indexOf(e) > -1;
					}
					scrolled(e) {
						const r = [this.scroll];
						return (
							e &&
								e !== this._document &&
								r.push(
									new Ne.y((d) =>
										this._ngZone.runOutsideAngular(() => {
											const H = (ie) => {
												this._activeDragInstances.length && d.next(ie);
											};
											return (
												e.addEventListener('scroll', H, !0),
												() => {
													e.removeEventListener('scroll', H, !0);
												}
											);
										})
									)
								),
							(0, rt.T)(...r)
						);
					}
					ngOnDestroy() {
						this._dragInstances.forEach((e) => this.removeDragItem(e)),
							this._dropInstances.forEach((e) => this.removeDropContainer(e)),
							this._clearGlobalListeners(),
							this.pointerMove.complete(),
							this.pointerUp.complete();
					}
					_clearGlobalListeners() {
						this._globalListeners.forEach((e, r) => {
							this._document.removeEventListener(r, e.handler, e.options);
						}),
							this._globalListeners.clear();
					}
				}
				return (
					(l.ɵfac = function (e) {
						return new (e || l)(o.LFG(o.R0b), o.LFG(ae.K0));
					}),
					(l.ɵprov = o.Yz7({
						token: l,
						factory: l.ɵfac,
						providedIn: 'root',
					})),
					l
				);
			})();
			const et = {
				dragStartThreshold: 5,
				pointerDirectionChangeThreshold: 5,
			};
			let it = (() => {
					class l {
						constructor(e, r, d, g) {
							(this._document = e),
								(this._ngZone = r),
								(this._viewportRuler = d),
								(this._dragDropRegistry = g);
						}
						createDrag(e, r = et) {
							return new ft(
								e,
								r,
								this._document,
								this._ngZone,
								this._viewportRuler,
								this._dragDropRegistry
							);
						}
						createDropList(e) {
							return new te(e, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
						}
					}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)(o.LFG(ae.K0), o.LFG(o.R0b), o.LFG(Ge.rL), o.LFG(re));
						}),
						(l.ɵprov = o.Yz7({
							token: l,
							factory: l.ɵfac,
							providedIn: 'root',
						})),
						l
					);
				})(),
				he = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ providers: [it], imports: [Ge.ZD] })),
						l
					);
				})();
			var ee = S(7429),
				je = S(226);
			let Pn = (() => {
				class l {}
				return (
					(l.ɵfac = function (e) {
						return new (e || l)();
					}),
					(l.ɵmod = o.oAB({ type: l })),
					(l.ɵinj = o.cJS({ imports: [[je.vT]] })),
					l
				);
			})();
			S(449), S(2076), S(1135), S(576);
			var si = S(9646),
				zn = S(5698);
			let Qi = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ imports: [[Ge.Cl]] })),
						l
					);
				})(),
				st = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({})),
						l
					);
				})();
			var pe = S(508),
				Lt = S(9770),
				on = (S(4968), S(1314)),
				Gt = S(1159),
				R = (S(3075), S(7144)),
				v = S(1777);
			let ss = (() => {
				class l {}
				return (
					(l.ɵfac = function (e) {
						return new (e || l)();
					}),
					(l.ɵmod = o.oAB({ type: l })),
					(l.ɵinj = o.cJS({
						imports: [[ae.ez, pe.BQ, R.Q8], pe.BQ],
					})),
					l
				);
			})();
			S(3900);
			var Zt = S(9300);
			S(4004), S(8505), S(4825);
			const Ks = {
				provide: new o.OlP('mat-autocomplete-scroll-strategy'),
				deps: [on.aV],
				useFactory: function $r(l) {
					return () => l.scrollStrategies.reposition();
				},
			};
			let So = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							providers: [Ks],
							imports: [[on.U8, pe.Ng, pe.BQ, ae.ez], Ge.ZD, pe.Ng, pe.BQ],
						})),
						l
					);
				})(),
				V = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ imports: [[m.rt, pe.BQ], pe.BQ] })),
						l
					);
				})(),
				Vi = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							imports: [[on.U8, pe.BQ, ee.eL], pe.BQ],
						})),
						l
					);
				})();
			var Ss = S(7423);
			let ct = (() => {
				class l {}
				return (
					(l.ɵfac = function (e) {
						return new (e || l)();
					}),
					(l.ɵmod = o.oAB({ type: l })),
					(l.ɵinj = o.cJS({ imports: [[pe.BQ, pe.si], pe.BQ] })),
					l
				);
			})();
			var zt = S(9224),
				kn = S(6360);
			let qs = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({})),
						l
					);
				})(),
				$a = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							imports: [[pe.si, pe.BQ, R.Q8, qs], pe.BQ, qs],
						})),
						l
					);
				})();
			var ko = S(8675);
			const mo = new o.OlP('mat-chips-default-options');
			let cs = (() => {
				class l {}
				return (
					(l.ɵfac = function (e) {
						return new (e || l)();
					}),
					(l.ɵmod = o.oAB({ type: l })),
					(l.ɵinj = o.cJS({
						providers: [
							pe.rD,
							{
								provide: mo,
								useValue: { separatorKeyCodes: [Gt.K5] },
							},
						],
						imports: [[pe.BQ]],
					})),
					l
				);
			})();
			S(2843), S(4128), S(262), S(8746), S(3099), S(520), S(2313);
			let la = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ imports: [[pe.BQ], pe.BQ] })),
						l
					);
				})(),
				el = (() => {
					class l {
						constructor() {
							(this.changes = new q.x()),
								(this.optionalLabel = 'Optional'),
								(this.completedLabel = 'Completed'),
								(this.editableLabel = 'Editable');
						}
					}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵprov = o.Yz7({
							token: l,
							factory: l.ɵfac,
							providedIn: 'root',
						})),
						l
					);
				})();
			const Lo = {
				provide: el,
				deps: [[new o.FiY(), new o.tp0(), el]],
				useFactory: function _o(l) {
					return l || new el();
				},
			};
			let ac = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							providers: [Lo, pe.rD],
							imports: [[pe.BQ, ae.ez, ee.eL, Ss.ot, Pn, la, pe.si], pe.BQ],
						})),
						l
					);
				})(),
				il = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ imports: [[Q.ud]] })),
						l
					);
				})(),
				cc = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							providers: [pe.rD],
							imports: [[il, ss, pe.BQ], il, ss],
						})),
						l
					);
				})(),
				Fu = (() => {
					class l {
						constructor() {
							(this.changes = new q.x()),
								(this.calendarLabel = 'Calendar'),
								(this.openCalendarLabel = 'Open calendar'),
								(this.closeCalendarLabel = 'Close calendar'),
								(this.prevMonthLabel = 'Previous month'),
								(this.nextMonthLabel = 'Next month'),
								(this.prevYearLabel = 'Previous year'),
								(this.nextYearLabel = 'Next year'),
								(this.prevMultiYearLabel = 'Previous 24 years'),
								(this.nextMultiYearLabel = 'Next 24 years'),
								(this.switchToMonthViewLabel = 'Choose date'),
								(this.switchToMultiYearViewLabel = 'Choose month and year');
						}
						formatYearRange(e, r) {
							return `${e} \u2013 ${r}`;
						}
					}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵprov = o.Yz7({
							token: l,
							factory: l.ɵfac,
							providedIn: 'root',
						})),
						l
					);
				})();
			const yc = {
				provide: new o.OlP('mat-datepicker-scroll-strategy'),
				deps: [on.aV],
				useFactory: function vc(l) {
					return () => l.scrollStrategies.reposition();
				},
			};
			let xc = (() => {
				class l {}
				return (
					(l.ɵfac = function (e) {
						return new (e || l)();
					}),
					(l.ɵmod = o.oAB({ type: l })),
					(l.ɵinj = o.cJS({
						providers: [Fu, yc],
						imports: [[ae.ez, Ss.ot, on.U8, m.rt, ee.eL, pe.BQ], Ge.ZD],
					})),
					l
				);
			})();
			function Ec(l, a) {}
			class ol {
				constructor() {
					(this.role = 'dialog'),
						(this.panelClass = ''),
						(this.hasBackdrop = !0),
						(this.backdropClass = ''),
						(this.disableClose = !1),
						(this.width = ''),
						(this.height = ''),
						(this.maxWidth = '80vw'),
						(this.data = null),
						(this.ariaDescribedBy = null),
						(this.ariaLabelledBy = null),
						(this.ariaLabel = null),
						(this.autoFocus = 'first-tabbable'),
						(this.restoreFocus = !0),
						(this.closeOnNavigation = !0);
				}
			}
			const Bu = {
				dialogContainer: (0, v.X$)('dialogContainer', [
					(0, v.SB)('void, exit', (0, v.oB)({ opacity: 0, transform: 'scale(0.7)' })),
					(0, v.SB)('enter', (0, v.oB)({ transform: 'none' })),
					(0, v.eR)(
						'* => enter',
						(0, v.jt)('150ms cubic-bezier(0, 0, 0.2, 1)', (0, v.oB)({ transform: 'none', opacity: 1 }))
					),
					(0, v.eR)(
						'* => void, * => exit',
						(0, v.jt)('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', (0, v.oB)({ opacity: 0 }))
					),
				]),
			};
			let Vu = (() => {
					class l extends ee.en {
						constructor(e, r, d, g, H, ie, ze, bt) {
							super(),
								(this._elementRef = e),
								(this._focusTrapFactory = r),
								(this._changeDetectorRef = d),
								(this._config = H),
								(this._interactivityChecker = ie),
								(this._ngZone = ze),
								(this._focusMonitor = bt),
								(this._animationStateChanged = new o.vpe()),
								(this._elementFocusedBeforeDialogWasOpened = null),
								(this._closeInteractionType = null),
								(this.attachDomPortal = (Mt) => (
									this._portalOutlet.hasAttached(), this._portalOutlet.attachDomPortal(Mt)
								)),
								(this._ariaLabelledBy = H.ariaLabelledBy || null),
								(this._document = g);
						}
						_initializeWithAttachedContent() {
							this._setupFocusTrap(), this._capturePreviouslyFocusedElement();
						}
						attachComponentPortal(e) {
							return this._portalOutlet.hasAttached(), this._portalOutlet.attachComponentPortal(e);
						}
						attachTemplatePortal(e) {
							return this._portalOutlet.hasAttached(), this._portalOutlet.attachTemplatePortal(e);
						}
						_recaptureFocus() {
							this._containsFocus() || this._trapFocus();
						}
						_forceFocus(e, r) {
							this._interactivityChecker.isFocusable(e) ||
								((e.tabIndex = -1),
								this._ngZone.runOutsideAngular(() => {
									e.addEventListener('blur', () => e.removeAttribute('tabindex')),
										e.addEventListener('mousedown', () => e.removeAttribute('tabindex'));
								})),
								e.focus(r);
						}
						_focusByCssSelector(e, r) {
							let d = this._elementRef.nativeElement.querySelector(e);
							d && this._forceFocus(d, r);
						}
						_trapFocus() {
							const e = this._elementRef.nativeElement;
							switch (this._config.autoFocus) {
								case !1:
								case 'dialog':
									this._containsFocus() || e.focus();
									break;
								case !0:
								case 'first-tabbable':
									this._focusTrap.focusInitialElementWhenReady().then((r) => {
										r || this._focusDialogContainer();
									});
									break;
								case 'first-heading':
									this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
									break;
								default:
									this._focusByCssSelector(this._config.autoFocus);
							}
						}
						_restoreFocus() {
							const e = this._elementFocusedBeforeDialogWasOpened;
							if (this._config.restoreFocus && e && 'function' == typeof e.focus) {
								const r = (0, Q.ht)(),
									d = this._elementRef.nativeElement;
								(!r || r === this._document.body || r === d || d.contains(r)) &&
									(this._focusMonitor
										? (this._focusMonitor.focusVia(e, this._closeInteractionType),
										  (this._closeInteractionType = null))
										: e.focus());
							}
							this._focusTrap && this._focusTrap.destroy();
						}
						_setupFocusTrap() {
							this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
						}
						_capturePreviouslyFocusedElement() {
							this._document && (this._elementFocusedBeforeDialogWasOpened = (0, Q.ht)());
						}
						_focusDialogContainer() {
							this._elementRef.nativeElement.focus && this._elementRef.nativeElement.focus();
						}
						_containsFocus() {
							const e = this._elementRef.nativeElement,
								r = (0, Q.ht)();
							return e === r || e.contains(r);
						}
					}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)(
								o.Y36(o.SBq),
								o.Y36(m.qV),
								o.Y36(o.sBO),
								o.Y36(ae.K0, 8),
								o.Y36(ol),
								o.Y36(m.ic),
								o.Y36(o.R0b),
								o.Y36(m.tE)
							);
						}),
						(l.ɵdir = o.lG2({
							type: l,
							viewQuery: function (e, r) {
								if ((1 & e && o.Gf(ee.Pl, 7), 2 & e)) {
									let d;
									o.iGM((d = o.CRH())) && (r._portalOutlet = d.first);
								}
							},
							features: [o.qOj],
						})),
						l
					);
				})(),
				Sc = (() => {
					class l extends Vu {
						constructor() {
							super(...arguments), (this._state = 'enter');
						}
						_onAnimationDone({ toState: e, totalTime: r }) {
							'enter' === e
								? (this._trapFocus(),
								  this._animationStateChanged.next({
										state: 'opened',
										totalTime: r,
								  }))
								: 'exit' === e &&
								  (this._restoreFocus(),
								  this._animationStateChanged.next({
										state: 'closed',
										totalTime: r,
								  }));
						}
						_onAnimationStart({ toState: e, totalTime: r }) {
							'enter' === e
								? this._animationStateChanged.next({
										state: 'opening',
										totalTime: r,
								  })
								: ('exit' === e || 'void' === e) &&
								  this._animationStateChanged.next({
										state: 'closing',
										totalTime: r,
								  });
						}
						_startExitAnimation() {
							(this._state = 'exit'), this._changeDetectorRef.markForCheck();
						}
					}
					return (
						(l.ɵfac = (function () {
							let a;
							return function (r) {
								return (a || (a = o.n5z(l)))(r || l);
							};
						})()),
						(l.ɵcmp = o.Xpm({
							type: l,
							selectors: [['mat-dialog-container']],
							hostAttrs: ['tabindex', '-1', 'aria-modal', 'true', 1, 'mat-dialog-container'],
							hostVars: 6,
							hostBindings: function (e, r) {
								1 & e &&
									o.WFA('@dialogContainer.start', function (g) {
										return r._onAnimationStart(g);
									})('@dialogContainer.done', function (g) {
										return r._onAnimationDone(g);
									}),
									2 & e &&
										(o.Ikx('id', r._id),
										o.uIk('role', r._config.role)(
											'aria-labelledby',
											r._config.ariaLabel ? null : r._ariaLabelledBy
										)('aria-label', r._config.ariaLabel)(
											'aria-describedby',
											r._config.ariaDescribedBy || null
										),
										o.d8E('@dialogContainer', r._state));
							},
							features: [o.qOj],
							decls: 1,
							vars: 0,
							consts: [['cdkPortalOutlet', '']],
							template: function (e, r) {
								1 & e && o.YNc(0, Ec, 0, 0, 'ng-template', 0);
							},
							directives: [ee.Pl],
							styles: [
								'.mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n',
							],
							encapsulation: 2,
							data: { animation: [Bu.dialogContainer] },
						})),
						l
					);
				})(),
				Hu = 0;
			class ju {
				constructor(a, e, r = 'mat-dialog-' + Hu++) {
					(this._overlayRef = a),
						(this._containerInstance = e),
						(this.id = r),
						(this.disableClose = this._containerInstance._config.disableClose),
						(this._afterOpened = new q.x()),
						(this._afterClosed = new q.x()),
						(this._beforeClosed = new q.x()),
						(this._state = 0),
						(e._id = r),
						e._animationStateChanged
							.pipe(
								(0, Zt.h)((d) => 'opened' === d.state),
								(0, zn.q)(1)
							)
							.subscribe(() => {
								this._afterOpened.next(), this._afterOpened.complete();
							}),
						e._animationStateChanged
							.pipe(
								(0, Zt.h)((d) => 'closed' === d.state),
								(0, zn.q)(1)
							)
							.subscribe(() => {
								clearTimeout(this._closeFallbackTimeout), this._finishDialogClose();
							}),
						a.detachments().subscribe(() => {
							this._beforeClosed.next(this._result),
								this._beforeClosed.complete(),
								this._afterClosed.next(this._result),
								this._afterClosed.complete(),
								(this.componentInstance = null),
								this._overlayRef.dispose();
						}),
						a
							.keydownEvents()
							.pipe((0, Zt.h)((d) => d.keyCode === Gt.hY && !this.disableClose && !(0, Gt.Vb)(d)))
							.subscribe((d) => {
								d.preventDefault(), Tc(this, 'keyboard');
							}),
						a.backdropClick().subscribe(() => {
							this.disableClose ? this._containerInstance._recaptureFocus() : Tc(this, 'mouse');
						});
				}
				close(a) {
					(this._result = a),
						this._containerInstance._animationStateChanged
							.pipe(
								(0, Zt.h)((e) => 'closing' === e.state),
								(0, zn.q)(1)
							)
							.subscribe((e) => {
								this._beforeClosed.next(a),
									this._beforeClosed.complete(),
									this._overlayRef.detachBackdrop(),
									(this._closeFallbackTimeout = setTimeout(
										() => this._finishDialogClose(),
										e.totalTime + 100
									));
							}),
						(this._state = 1),
						this._containerInstance._startExitAnimation();
				}
				afterOpened() {
					return this._afterOpened;
				}
				afterClosed() {
					return this._afterClosed;
				}
				beforeClosed() {
					return this._beforeClosed;
				}
				backdropClick() {
					return this._overlayRef.backdropClick();
				}
				keydownEvents() {
					return this._overlayRef.keydownEvents();
				}
				updatePosition(a) {
					let e = this._getPositionStrategy();
					return (
						a && (a.left || a.right)
							? a.left
								? e.left(a.left)
								: e.right(a.right)
							: e.centerHorizontally(),
						a && (a.top || a.bottom) ? (a.top ? e.top(a.top) : e.bottom(a.bottom)) : e.centerVertically(),
						this._overlayRef.updatePosition(),
						this
					);
				}
				updateSize(a = '', e = '') {
					return (
						this._overlayRef.updateSize({ width: a, height: e }), this._overlayRef.updatePosition(), this
					);
				}
				addPanelClass(a) {
					return this._overlayRef.addPanelClass(a), this;
				}
				removePanelClass(a) {
					return this._overlayRef.removePanelClass(a), this;
				}
				getState() {
					return this._state;
				}
				_finishDialogClose() {
					(this._state = 2), this._overlayRef.dispose();
				}
				_getPositionStrategy() {
					return this._overlayRef.getConfig().positionStrategy;
				}
			}
			function Tc(l, a, e) {
				return void 0 !== l._containerInstance && (l._containerInstance._closeInteractionType = a), l.close(e);
			}
			const yo = new o.OlP('MatDialogData'),
				vs = new o.OlP('mat-dialog-default-options'),
				Uu = new o.OlP('mat-dialog-scroll-strategy'),
				Hm = {
					provide: Uu,
					deps: [on.aV],
					useFactory: function Ac(l) {
						return () => l.scrollStrategies.block();
					},
				};
			let ys = (() => {
					class l {
						constructor(e, r, d, g, H, ie, ze, bt, Mt, hn) {
							(this._overlay = e),
								(this._injector = r),
								(this._defaultOptions = d),
								(this._parentDialog = g),
								(this._overlayContainer = H),
								(this._dialogRefConstructor = ze),
								(this._dialogContainerType = bt),
								(this._dialogDataToken = Mt),
								(this._animationMode = hn),
								(this._openDialogsAtThisLevel = []),
								(this._afterAllClosedAtThisLevel = new q.x()),
								(this._afterOpenedAtThisLevel = new q.x()),
								(this._ariaHiddenElements = new Map()),
								(this._dialogAnimatingOpen = !1),
								(this.afterAllClosed = (0, Lt.P)(() =>
									this.openDialogs.length
										? this._getAfterAllClosed()
										: this._getAfterAllClosed().pipe((0, ko.O)(void 0))
								)),
								(this._scrollStrategy = ie);
						}
						get openDialogs() {
							return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
						}
						get afterOpened() {
							return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
						}
						_getAfterAllClosed() {
							const e = this._parentDialog;
							return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
						}
						open(e, r) {
							if (
								((r = (function ll(l, a) {
									return Object.assign(Object.assign({}, a), l);
								})(r, this._defaultOptions || new ol())),
								r.id && this.getDialogById(r.id),
								this._dialogAnimatingOpen)
							)
								return this._lastDialogRef;
							const d = this._createOverlay(r),
								g = this._attachDialogContainer(d, r);
							if ('NoopAnimations' !== this._animationMode) {
								const ie = g._animationStateChanged.subscribe((ze) => {
									'opening' === ze.state && (this._dialogAnimatingOpen = !0),
										'opened' === ze.state && ((this._dialogAnimatingOpen = !1), ie.unsubscribe());
								});
								this._animationStateSubscriptions || (this._animationStateSubscriptions = new Re.w0()),
									this._animationStateSubscriptions.add(ie);
							}
							const H = this._attachDialogContent(e, g, d, r);
							return (
								(this._lastDialogRef = H),
								this.openDialogs.length || this._hideNonDialogContentFromAssistiveTechnology(),
								this.openDialogs.push(H),
								H.afterClosed().subscribe(() => this._removeOpenDialog(H)),
								this.afterOpened.next(H),
								g._initializeWithAttachedContent(),
								H
							);
						}
						closeAll() {
							this._closeDialogs(this.openDialogs);
						}
						getDialogById(e) {
							return this.openDialogs.find((r) => r.id === e);
						}
						ngOnDestroy() {
							this._closeDialogs(this._openDialogsAtThisLevel),
								this._afterAllClosedAtThisLevel.complete(),
								this._afterOpenedAtThisLevel.complete(),
								this._animationStateSubscriptions && this._animationStateSubscriptions.unsubscribe();
						}
						_createOverlay(e) {
							const r = this._getOverlayConfig(e);
							return this._overlay.create(r);
						}
						_getOverlayConfig(e) {
							const r = new on.X_({
								positionStrategy: this._overlay.position().global(),
								scrollStrategy: e.scrollStrategy || this._scrollStrategy(),
								panelClass: e.panelClass,
								hasBackdrop: e.hasBackdrop,
								direction: e.direction,
								minWidth: e.minWidth,
								minHeight: e.minHeight,
								maxWidth: e.maxWidth,
								maxHeight: e.maxHeight,
								disposeOnNavigation: e.closeOnNavigation,
							});
							return e.backdropClass && (r.backdropClass = e.backdropClass), r;
						}
						_attachDialogContainer(e, r) {
							const g = o.zs3.create({
									parent: (r && r.viewContainerRef && r.viewContainerRef.injector) || this._injector,
									providers: [{ provide: ol, useValue: r }],
								}),
								H = new ee.C5(
									this._dialogContainerType,
									r.viewContainerRef,
									g,
									r.componentFactoryResolver
								);
							return e.attach(H).instance;
						}
						_attachDialogContent(e, r, d, g) {
							const H = new this._dialogRefConstructor(d, r, g.id);
							if (e instanceof o.Rgc)
								r.attachTemplatePortal(
									new ee.UE(e, null, {
										$implicit: g.data,
										dialogRef: H,
									})
								);
							else {
								const ie = this._createInjector(g, H, r),
									ze = r.attachComponentPortal(new ee.C5(e, g.viewContainerRef, ie));
								H.componentInstance = ze.instance;
							}
							return H.updateSize(g.width, g.height).updatePosition(g.position), H;
						}
						_createInjector(e, r, d) {
							const g = e && e.viewContainerRef && e.viewContainerRef.injector,
								H = [
									{
										provide: this._dialogContainerType,
										useValue: d,
									},
									{
										provide: this._dialogDataToken,
										useValue: e.data,
									},
									{
										provide: this._dialogRefConstructor,
										useValue: r,
									},
								];
							return (
								e.direction &&
									(!g || !g.get(je.Is, null, o.XFs.Optional)) &&
									H.push({
										provide: je.Is,
										useValue: {
											value: e.direction,
											change: (0, si.of)(),
										},
									}),
								o.zs3.create({
									parent: g || this._injector,
									providers: H,
								})
							);
						}
						_removeOpenDialog(e) {
							const r = this.openDialogs.indexOf(e);
							r > -1 &&
								(this.openDialogs.splice(r, 1),
								this.openDialogs.length ||
									(this._ariaHiddenElements.forEach((d, g) => {
										d ? g.setAttribute('aria-hidden', d) : g.removeAttribute('aria-hidden');
									}),
									this._ariaHiddenElements.clear(),
									this._getAfterAllClosed().next()));
						}
						_hideNonDialogContentFromAssistiveTechnology() {
							const e = this._overlayContainer.getContainerElement();
							if (e.parentElement) {
								const r = e.parentElement.children;
								for (let d = r.length - 1; d > -1; d--) {
									let g = r[d];
									g !== e &&
										'SCRIPT' !== g.nodeName &&
										'STYLE' !== g.nodeName &&
										!g.hasAttribute('aria-live') &&
										(this._ariaHiddenElements.set(g, g.getAttribute('aria-hidden')),
										g.setAttribute('aria-hidden', 'true'));
								}
							}
						}
						_closeDialogs(e) {
							let r = e.length;
							for (; r--; ) e[r].close();
						}
					}
					return (
						(l.ɵfac = function (e) {
							o.$Z();
						}),
						(l.ɵdir = o.lG2({ type: l })),
						l
					);
				})(),
				al = (() => {
					class l extends ys {
						constructor(e, r, d, g, H, ie, ze, bt) {
							super(e, r, g, ie, ze, H, ju, Sc, yo, bt);
						}
					}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)(
								o.LFG(on.aV),
								o.LFG(o.zs3),
								o.LFG(ae.Ye, 8),
								o.LFG(vs, 8),
								o.LFG(Uu),
								o.LFG(l, 12),
								o.LFG(on.Xj),
								o.LFG(kn.Qb, 8)
							);
						}),
						(l.ɵprov = o.Yz7({ token: l, factory: l.ɵfac })),
						l
					);
				})(),
				ya = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							providers: [al, Hm],
							imports: [[on.U8, ee.eL, pe.BQ], pe.BQ],
						})),
						l
					);
				})(),
				Ic = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ imports: [[pe.BQ], pe.BQ] })),
						l
					);
				})();
			var no = S(288);
			let Nc = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							imports: [[pe.uc, pe.BQ], pe.uc, pe.BQ],
						})),
						l
					);
				})(),
				$c = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							imports: [[pe.uc, pe.si, pe.BQ, pe.us, ae.ez], pe.uc, pe.BQ, pe.us, Ic],
						})),
						l
					);
				})();
			const ml = {
				provide: new o.OlP('mat-menu-scroll-strategy'),
				deps: [on.aV],
				useFactory: function Zc(l) {
					return () => l.scrollStrategies.reposition();
				},
			};
			let Vo = (() => {
				class l {}
				return (
					(l.ɵfac = function (e) {
						return new (e || l)();
					}),
					(l.ɵmod = o.oAB({ type: l })),
					(l.ɵinj = o.cJS({
						providers: [ml],
						imports: [[ae.ez, pe.BQ, pe.si, on.U8], Ge.ZD, pe.BQ],
					})),
					l
				);
			})();
			const gg = {
				provide: new o.OlP('mat-select-scroll-strategy'),
				deps: [on.aV],
				useFactory: function mg(l) {
					return () => l.scrollStrategies.reposition();
				},
			};
			let Ho = (() => {
				class l {}
				return (
					(l.ɵfac = function (e) {
						return new (e || l)();
					}),
					(l.ɵmod = o.oAB({ type: l })),
					(l.ɵinj = o.cJS({
						providers: [gg],
						imports: [[ae.ez, on.U8, pe.Ng, pe.BQ], Ge.ZD, ss, pe.Ng, pe.BQ],
					})),
					l
				);
			})();
			const Ch = {
				provide: new o.OlP('mat-tooltip-scroll-strategy'),
				deps: [on.aV],
				useFactory: function td(l) {
					return () => l.scrollStrategies.reposition({ scrollThrottle: 20 });
				},
			};
			let Vs = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							providers: [Ch],
							imports: [[m.rt, ae.ez, on.U8, pe.BQ], pe.BQ, Ge.ZD],
						})),
						l
					);
				})(),
				bo = (() => {
					class l {
						constructor() {
							(this.changes = new q.x()),
								(this.itemsPerPageLabel = 'Items per page:'),
								(this.nextPageLabel = 'Next page'),
								(this.previousPageLabel = 'Previous page'),
								(this.firstPageLabel = 'First page'),
								(this.lastPageLabel = 'Last page'),
								(this.getRangeLabel = (e, r, d) => {
									if (0 == d || 0 == r) return `0 of ${d}`;
									const g = e * r;
									return `${g + 1} \u2013 ${
										g < (d = Math.max(d, 0)) ? Math.min(g + r, d) : g + r
									} of ${d}`;
								});
						}
					}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵprov = o.Yz7({
							token: l,
							factory: l.ɵfac,
							providedIn: 'root',
						})),
						l
					);
				})();
			const ad = {
				provide: bo,
				deps: [[new o.FiY(), new o.tp0(), bo]],
				useFactory: function Mh(l) {
					return l || new bo();
				},
			};
			let ld = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							providers: [ad],
							imports: [[ae.ez, Ss.ot, Ho, Vs, pe.BQ]],
						})),
						l
					);
				})(),
				xa = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ imports: [[ae.ez, pe.BQ], pe.BQ] })),
						l
					);
				})();
			function cd(l, a) {
				if ((1 & l && (o.O4$(), o._UZ(0, 'circle', 3)), 2 & l)) {
					const e = o.oxw();
					o.Udp('animation-name', 'mat-progress-spinner-stroke-rotate-' + e._spinnerAnimationLabel)(
						'stroke-dashoffset',
						e._getStrokeDashOffset(),
						'px'
					)('stroke-dasharray', e._getStrokeCircumference(), 'px')(
						'stroke-width',
						e._getCircleStrokeWidth(),
						'%'
					),
						o.uIk('r', e._getCircleRadius());
				}
			}
			function Ah(l, a) {
				if ((1 & l && (o.O4$(), o._UZ(0, 'circle', 3)), 2 & l)) {
					const e = o.oxw();
					o.Udp('stroke-dashoffset', e._getStrokeDashOffset(), 'px')(
						'stroke-dasharray',
						e._getStrokeCircumference(),
						'px'
					)('stroke-width', e._getCircleStrokeWidth(), '%'),
						o.uIk('r', e._getCircleRadius());
				}
			}
			const Ih = (0, pe.pj)(
					class {
						constructor(l) {
							this._elementRef = l;
						}
					},
					'primary'
				),
				Rh = new o.OlP('mat-progress-spinner-default-options', {
					providedIn: 'root',
					factory: function ud() {
						return { diameter: 100 };
					},
				});
			class Hs extends Ih {
				constructor(a, e, r, d, g) {
					super(a),
						(this._document = r),
						(this._diameter = 100),
						(this._value = 0),
						(this.mode = 'determinate');
					const H = Hs._diameters;
					(this._spinnerAnimationLabel = this._getSpinnerAnimationLabel()),
						H.has(r.head) || H.set(r.head, new Set([100])),
						(this._noopAnimations = 'NoopAnimations' === d && !!g && !g._forceAnimations),
						g &&
							(g.diameter && (this.diameter = g.diameter),
							g.strokeWidth && (this.strokeWidth = g.strokeWidth));
				}
				get diameter() {
					return this._diameter;
				}
				set diameter(a) {
					(this._diameter = (0, K.su)(a)),
						(this._spinnerAnimationLabel = this._getSpinnerAnimationLabel()),
						this._styleRoot && this._attachStyleNode();
				}
				get strokeWidth() {
					return this._strokeWidth || this.diameter / 10;
				}
				set strokeWidth(a) {
					this._strokeWidth = (0, K.su)(a);
				}
				get value() {
					return 'determinate' === this.mode ? this._value : 0;
				}
				set value(a) {
					this._value = Math.max(0, Math.min(100, (0, K.su)(a)));
				}
				ngOnInit() {
					const a = this._elementRef.nativeElement;
					(this._styleRoot = (0, Q.kV)(a) || this._document.head),
						this._attachStyleNode(),
						a.classList.add('mat-progress-spinner-indeterminate-animation');
				}
				_getCircleRadius() {
					return (this.diameter - 10) / 2;
				}
				_getViewBox() {
					const a = 2 * this._getCircleRadius() + this.strokeWidth;
					return `0 0 ${a} ${a}`;
				}
				_getStrokeCircumference() {
					return 2 * Math.PI * this._getCircleRadius();
				}
				_getStrokeDashOffset() {
					return 'determinate' === this.mode
						? (this._getStrokeCircumference() * (100 - this._value)) / 100
						: null;
				}
				_getCircleStrokeWidth() {
					return (this.strokeWidth / this.diameter) * 100;
				}
				_attachStyleNode() {
					const a = this._styleRoot,
						e = this._diameter,
						r = Hs._diameters;
					let d = r.get(a);
					if (!d || !d.has(e)) {
						const g = this._document.createElement('style');
						g.setAttribute('mat-spinner-animation', this._spinnerAnimationLabel),
							(g.textContent = this._getAnimationText()),
							a.appendChild(g),
							d || ((d = new Set()), r.set(a, d)),
							d.add(e);
					}
				}
				_getAnimationText() {
					const a = this._getStrokeCircumference();
					return '\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n'
						.replace(/START_VALUE/g, '' + 0.95 * a)
						.replace(/END_VALUE/g, '' + 0.2 * a)
						.replace(/DIAMETER/g, `${this._spinnerAnimationLabel}`);
				}
				_getSpinnerAnimationLabel() {
					return this.diameter.toString().replace('.', '_');
				}
			}
			(Hs._diameters = new WeakMap()),
				(Hs.ɵfac = function (a) {
					return new (a || Hs)(o.Y36(o.SBq), o.Y36(Q.t4), o.Y36(ae.K0, 8), o.Y36(kn.Qb, 8), o.Y36(Rh));
				}),
				(Hs.ɵcmp = o.Xpm({
					type: Hs,
					selectors: [['mat-progress-spinner']],
					hostAttrs: ['role', 'progressbar', 'tabindex', '-1', 1, 'mat-progress-spinner'],
					hostVars: 10,
					hostBindings: function (a, e) {
						2 & a &&
							(o.uIk('aria-valuemin', 'determinate' === e.mode ? 0 : null)(
								'aria-valuemax',
								'determinate' === e.mode ? 100 : null
							)('aria-valuenow', 'determinate' === e.mode ? e.value : null)('mode', e.mode),
							o.Udp('width', e.diameter, 'px')('height', e.diameter, 'px'),
							o.ekj('_mat-animation-noopable', e._noopAnimations));
					},
					inputs: {
						color: 'color',
						diameter: 'diameter',
						strokeWidth: 'strokeWidth',
						mode: 'mode',
						value: 'value',
					},
					exportAs: ['matProgressSpinner'],
					features: [o.qOj],
					decls: 3,
					vars: 8,
					consts: [
						[
							'preserveAspectRatio',
							'xMidYMid meet',
							'focusable',
							'false',
							'aria-hidden',
							'true',
							3,
							'ngSwitch',
						],
						[
							'cx',
							'50%',
							'cy',
							'50%',
							3,
							'animation-name',
							'stroke-dashoffset',
							'stroke-dasharray',
							'stroke-width',
							4,
							'ngSwitchCase',
						],
						[
							'cx',
							'50%',
							'cy',
							'50%',
							3,
							'stroke-dashoffset',
							'stroke-dasharray',
							'stroke-width',
							4,
							'ngSwitchCase',
						],
						['cx', '50%', 'cy', '50%'],
					],
					template: function (a, e) {
						1 & a &&
							(o.O4$(),
							o.TgZ(0, 'svg', 0),
							o.YNc(1, cd, 1, 9, 'circle', 1),
							o.YNc(2, Ah, 1, 7, 'circle', 2),
							o.qZA()),
							2 & a &&
								(o.Udp('width', e.diameter, 'px')('height', e.diameter, 'px'),
								o.Q6J('ngSwitch', 'indeterminate' === e.mode),
								o.uIk('viewBox', e._getViewBox()),
								o.xp6(1),
								o.Q6J('ngSwitchCase', !0),
								o.xp6(1),
								o.Q6J('ngSwitchCase', !1));
					},
					directives: [ae.RF, ae.n9],
					styles: [
						'.mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}\n',
					],
					encapsulation: 2,
					changeDetection: 0,
				}));
			let Ea = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ imports: [[pe.BQ, ae.ez], pe.BQ] })),
						l
					);
				})(),
				wl = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ imports: [[pe.si, pe.BQ], pe.BQ] })),
						l
					);
				})(),
				Ml = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							imports: [[ae.ez, pe.BQ, Q.ud, Ge.ZD], Ge.ZD, pe.BQ],
						})),
						l
					);
				})(),
				Dd = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ imports: [[ae.ez, pe.BQ], pe.BQ] })),
						l
					);
				})(),
				Tl = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({})),
						l
					);
				})(),
				Ad = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							imports: [[Tl, pe.si, pe.BQ, R.Q8], Tl, pe.BQ],
						})),
						l
					);
				})();
			var kd = S(1271);
			let Rd = (() => {
				class l {
					constructor() {
						this.changes = new q.x();
					}
				}
				return (
					(l.ɵfac = function (e) {
						return new (e || l)();
					}),
					(l.ɵprov = o.Yz7({
						token: l,
						factory: l.ɵfac,
						providedIn: 'root',
					})),
					l
				);
			})();
			const Pd = {
				provide: Rd,
				deps: [[new o.FiY(), new o.tp0(), Rd]],
				useFactory: function Od(l) {
					return l || new Rd();
				},
			};
			let ka = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							providers: [Pd],
							imports: [[ae.ez, pe.BQ]],
						})),
						l
					);
				})(),
				lo = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ imports: [[Qi, pe.BQ], pe.BQ] })),
						l
					);
				})(),
				Oa = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							imports: [[ae.ez, pe.BQ, ee.eL, pe.si, R.Q8, m.rt], pe.BQ],
						})),
						l
					);
				})(),
				Fa = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ imports: [[pe.BQ], pe.BQ] })),
						l
					);
				})(),
				Fl = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({ imports: [[st, pe.BQ], pe.BQ] })),
						l
					);
				})(),
				Yd = (() => {
					class l {}
					return (
						(l.ɵfac = function (e) {
							return new (e || l)();
						}),
						(l.ɵmod = o.oAB({ type: l })),
						(l.ɵinj = o.cJS({
							imports: [
								[
									m.rt,
									P.XD,
									De,
									Pn,
									Qi,
									st,
									he,
									So,
									V,
									Vi,
									Ss.ot,
									ct,
									zt.QW,
									$a,
									cs,
									ac,
									xc,
									ya,
									Ic,
									no.To,
									Nc,
									la,
									cc,
									$c,
									Vo,
									pe.XK,
									ld,
									xa,
									Ea,
									wl,
									pe.si,
									Ho,
									Ml,
									Dd,
									Ad,
									kd.ZX,
									ka,
									lo,
									Oa,
									Fa,
									Vs,
									Fl,
									on.U8,
									ee.eL,
									Ge.Cl,
								],
								m.rt,
								P.XD,
								De,
								Pn,
								Qi,
								st,
								he,
								So,
								V,
								Vi,
								Ss.ot,
								ct,
								zt.QW,
								$a,
								cs,
								ac,
								xc,
								ya,
								Ic,
								no.To,
								Nc,
								la,
								cc,
								$c,
								Vo,
								pe.XK,
								ld,
								xa,
								Ea,
								wl,
								pe.si,
								Ho,
								Ml,
								Dd,
								Ad,
								kd.ZX,
								ka,
								lo,
								Oa,
								Fa,
								Vs,
								Fl,
								on.U8,
								ee.eL,
								Ge.Cl,
							],
						})),
						l
					);
				})();
		},
		2340: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { N: () => m });
			const m = {
				production: !0,
				current: 'http://api.openweathermap.org/data/2.5/weather?',
				forecast: 'http://api.openweathermap.org/data/2.5/forecast?',
				apiKey: '61aea816d83dc6c3604805fc5790f007',
			};
		},
		1703: (Et, Ve, S) => {
			'use strict';
			var m = S(2313),
				P = S(5e3),
				o = S(1083);
			const be = [
				{
					path: '',
					loadChildren: () =>
						Promise.resolve()
							.then(S.bind(S, 5106))
							.then((Ne) => Ne.MainModule),
				},
				{
					path: '404',
					component: (() => {
						class Ne {
							constructor() {}
							ngOnInit() {}
						}
						return (
							(Ne.ɵfac = function (at) {
								return new (at || Ne)();
							}),
							(Ne.ɵcmp = P.Xpm({
								type: Ne,
								selectors: [['app-page-not-found']],
								decls: 2,
								vars: 0,
								consts: [
									[1, 'container', 'mt-4', 'p-8'],
									['src', '/assets/404.svg', 'alt', ''],
								],
								template: function (at, Ge) {
									1 & at && (P.TgZ(0, 'div', 0), P._UZ(1, 'img', 1), P.qZA());
								},
								styles: [
									'.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;padding:0;margin:0}',
								],
							})),
							Ne
						);
					})(),
				},
				{ path: '**', redirectTo: '404', pathMatch: 'full' },
			];
			let we = (() => {
				class Ne {}
				return (
					(Ne.ɵfac = function (at) {
						return new (at || Ne)();
					}),
					(Ne.ɵmod = P.oAB({ type: Ne })),
					(Ne.ɵinj = P.cJS({ imports: [[o.Bz.forRoot(be)], o.Bz] })),
					Ne
				);
			})();
			var _e = S(5226),
				De = S.n(_e);
			let ae = (() => {
					class Ne {
						constructor(at) {
							this.router = at;
						}
						ngOnInit() {}
						navigate(at) {
							'current' === at
								? (this.router.navigate(['/current']),
								  De().fire('warning', 'Please allow location access in your computer!', 'warning'))
								: 'forecast' === at && this.router.navigate(['/forecast']);
						}
					}
					return (
						(Ne.ɵfac = function (at) {
							return new (at || Ne)(P.Y36(o.F0));
						}),
						(Ne.ɵcmp = P.Xpm({
							type: Ne,
							selectors: [['app-toolbar']],
							decls: 13,
							vars: 0,
							consts: [
								['id', 'toolbar', 1, 'toolbar'],
								[
									'width',
									'40',
									'alt',
									'Angular Logo',
									'src',
									'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==',
								],
								['routerLink', '/'],
								[1, 'spacer'],
								[1, 'grid', 'gap-x-8', 'gap-y-4', 'grid-cols-3', 'cursor-pointer'],
								['id', 'toolbar'],
								[3, 'click'],
							],
							template: function (at, Ge) {
								1 & at &&
									(P.TgZ(0, 'div', 0),
									P._UZ(1, 'img', 1),
									P.TgZ(2, 'span'),
									P.TgZ(3, 'a', 2),
									P._uU(4, 'Open Weather'),
									P.qZA(),
									P.qZA(),
									P._UZ(5, 'div', 3),
									P.TgZ(6, 'div', 4),
									P.TgZ(7, 'div', 5),
									P.TgZ(8, 'a', 6),
									P.NdJ('click', function () {
										return Ge.navigate('current');
									}),
									P._uU(9, 'Today'),
									P.qZA(),
									P.qZA(),
									P.TgZ(10, 'div', 5),
									P.TgZ(11, 'a', 6),
									P.NdJ('click', function () {
										return Ge.navigate('forecast');
									}),
									P._uU(12, 'Five Day Forecast'),
									P.qZA(),
									P.qZA(),
									P.qZA(),
									P.qZA());
							},
							directives: [o.yS],
							styles: [
								'h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:8px 0}p[_ngcontent-%COMP%]{margin:0}.spacer[_ngcontent-%COMP%]{flex:1}.toolbar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;height:80px;display:flex;align-items:center;background-color:#6a0dad;color:#fff;font-weight:600}.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 16px}.toolbar[_ngcontent-%COMP%]   #toolbar[_ngcontent-%COMP%]{height:30px;margin:0}.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]{height:30px;margin:0 16px}.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover{opacity:.8}@media screen and (max-width: 767px){.card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]:not(.highlight-card){height:16px;margin:8px 0}.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:72px}svg#rocket-smoke[_ngcontent-%COMP%]{right:120px;transform:rotate(-5deg)}}@media screen and (max-width: 575px){svg#rocket-smoke[_ngcontent-%COMP%]{display:none;visibility:hidden}}',
							],
						})),
						Ne
					);
				})(),
				Q = (() => {
					class Ne {
						constructor() {
							this.title = 'open-weather';
						}
					}
					return (
						(Ne.ɵfac = function (at) {
							return new (at || Ne)();
						}),
						(Ne.ɵcmp = P.Xpm({
							type: Ne,
							selectors: [['app-root']],
							decls: 7,
							vars: 0,
							consts: [
								['role', 'main', 1, 'content'],
								[
									'id',
									'clouds',
									'xmlns',
									'http://www.w3.org/2000/svg',
									'width',
									'2611.084',
									'height',
									'485.677',
									'viewBox',
									'0 0 2611.084 485.677',
								],
								[
									'id',
									'Path_39',
									'data-name',
									'Path 39',
									'd',
									'M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z',
									'transform',
									'translate(142.69 -634.312)',
									'fill',
									'#eee',
								],
							],
							template: function (at, Ge) {
								1 & at &&
									(P._UZ(0, 'app-toolbar'),
									P.TgZ(1, 'div', 0),
									P.O4$(),
									P.TgZ(2, 'svg', 1),
									P.TgZ(3, 'title'),
									P._uU(4, 'Gray Clouds Background'),
									P.qZA(),
									P._UZ(5, 'path', 2),
									P.qZA(),
									P.qZA(),
									P.kcU(),
									P._UZ(6, 'router-outlet'));
							},
							directives: [ae, o.lC],
							styles: [
								'svg#clouds[_ngcontent-%COMP%]{position:fixed;bottom:-160px;left:-230px;z-index:-10;width:1920px}.lds-spinner[_ngcontent-%COMP%]{color:official;display:inline-block;position:relative;width:80px;height:80px}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform-origin:40px 40px;animation:lds-spinner 1.2s linear infinite}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:" ";display:block;position:absolute;top:3px;left:37px;width:6px;height:18px;border-radius:20%;background:#fff}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){transform:rotate(0);animation-delay:-1.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){transform:rotate(30deg);animation-delay:-1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(60deg);animation-delay:-.9s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(90deg);animation-delay:-.8s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){transform:rotate(120deg);animation-delay:-.7s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){transform:rotate(150deg);animation-delay:-.6s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){transform:rotate(180deg);animation-delay:-.5s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){transform:rotate(210deg);animation-delay:-.4s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9){transform:rotate(240deg);animation-delay:-.3s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10){transform:rotate(270deg);animation-delay:-.2s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11){transform:rotate(300deg);animation-delay:-.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12){transform:rotate(330deg);animation-delay:0s}@keyframes lds-spinner{0%{opacity:1}to{opacity:0}}',
							],
						})),
						Ne
					);
				})();
			var K = S(6360),
				q = S(520),
				Re = S(5106),
				de = S(7108),
				Be = S(3075);
			let $e = (() => {
				class Ne {}
				return (
					(Ne.ɵfac = function (at) {
						return new (at || Ne)();
					}),
					(Ne.ɵmod = P.oAB({ type: Ne, bootstrap: [Q] })),
					(Ne.ɵinj = P.cJS({
						providers: [],
						imports: [[m.b2, we, K.PW, q.JF, Re.MainModule, de.q, Be.u5]],
					})),
					Ne
				);
			})();
			S(2340).N.production && (0, P.G48)(),
				m
					.q6()
					.bootstrapModule($e)
					.catch((Ne) => console.error(Ne));
		},
		1135: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { X: () => P });
			var m = S(7579);
			class P extends m.x {
				constructor(G) {
					super(), (this._value = G);
				}
				get value() {
					return this.getValue();
				}
				_subscribe(G) {
					const be = super._subscribe(G);
					return !be.closed && G.next(this._value), be;
				}
				getValue() {
					const { hasError: G, thrownError: be, _value: we } = this;
					if (G) throw be;
					return this._throwIfClosed(), we;
				}
				next(G) {
					super.next((this._value = G));
				}
			}
		},
		8306: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { y: () => Q });
			var m = S(930),
				P = S(727),
				o = S(8822),
				G = S(4671);
			var _e = S(2416),
				De = S(576),
				ae = S(2806);
			let Q = (() => {
				class de {
					constructor($e) {
						$e && (this._subscribe = $e);
					}
					lift($e) {
						const ye = new de();
						return (ye.source = this), (ye.operator = $e), ye;
					}
					subscribe($e, ye, Ne) {
						const rt = (function Re(de) {
							return (
								(de && de instanceof m.Lv) ||
								((function q(de) {
									return de && (0, De.m)(de.next) && (0, De.m)(de.error) && (0, De.m)(de.complete);
								})(de) &&
									(0, P.Nn)(de))
							);
						})($e)
							? $e
							: new m.Hp($e, ye, Ne);
						return (
							(0, ae.x)(() => {
								const { operator: at, source: Ge } = this;
								rt.add(at ? at.call(rt, Ge) : Ge ? this._subscribe(rt) : this._trySubscribe(rt));
							}),
							rt
						);
					}
					_trySubscribe($e) {
						try {
							return this._subscribe($e);
						} catch (ye) {
							$e.error(ye);
						}
					}
					forEach($e, ye) {
						return new (ye = K(ye))((Ne, rt) => {
							let at;
							at = this.subscribe(
								(Ge) => {
									try {
										$e(Ge);
									} catch (ge) {
										rt(ge), null == at || at.unsubscribe();
									}
								},
								rt,
								Ne
							);
						});
					}
					_subscribe($e) {
						var ye;
						return null === (ye = this.source) || void 0 === ye ? void 0 : ye.subscribe($e);
					}
					[o.L]() {
						return this;
					}
					pipe(...$e) {
						return (function we(de) {
							return 0 === de.length
								? G.y
								: 1 === de.length
								? de[0]
								: function ($e) {
										return de.reduce((ye, Ne) => Ne(ye), $e);
								  };
						})($e)(this);
					}
					toPromise($e) {
						return new ($e = K($e))((ye, Ne) => {
							let rt;
							this.subscribe(
								(at) => (rt = at),
								(at) => Ne(at),
								() => ye(rt)
							);
						});
					}
				}
				return (de.create = (Be) => new de(Be)), de;
			})();
			function K(de) {
				var Be;
				return null !== (Be = null != de ? de : _e.v.Promise) && void 0 !== Be ? Be : Promise;
			}
		},
		7579: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { x: () => _e });
			var m = S(8306),
				P = S(727);
			const G = (0, S(3888).d)(
				(ae) =>
					function () {
						ae(this), (this.name = 'ObjectUnsubscribedError'), (this.message = 'object unsubscribed');
					}
			);
			var be = S(8737),
				we = S(2806);
			let _e = (() => {
				class ae extends m.y {
					constructor() {
						super(),
							(this.closed = !1),
							(this.observers = []),
							(this.isStopped = !1),
							(this.hasError = !1),
							(this.thrownError = null);
					}
					lift(K) {
						const q = new De(this, this);
						return (q.operator = K), q;
					}
					_throwIfClosed() {
						if (this.closed) throw new G();
					}
					next(K) {
						(0, we.x)(() => {
							if ((this._throwIfClosed(), !this.isStopped)) {
								const q = this.observers.slice();
								for (const Re of q) Re.next(K);
							}
						});
					}
					error(K) {
						(0, we.x)(() => {
							if ((this._throwIfClosed(), !this.isStopped)) {
								(this.hasError = this.isStopped = !0), (this.thrownError = K);
								const { observers: q } = this;
								for (; q.length; ) q.shift().error(K);
							}
						});
					}
					complete() {
						(0, we.x)(() => {
							if ((this._throwIfClosed(), !this.isStopped)) {
								this.isStopped = !0;
								const { observers: K } = this;
								for (; K.length; ) K.shift().complete();
							}
						});
					}
					unsubscribe() {
						(this.isStopped = this.closed = !0), (this.observers = null);
					}
					get observed() {
						var K;
						return (null === (K = this.observers) || void 0 === K ? void 0 : K.length) > 0;
					}
					_trySubscribe(K) {
						return this._throwIfClosed(), super._trySubscribe(K);
					}
					_subscribe(K) {
						return this._throwIfClosed(), this._checkFinalizedStatuses(K), this._innerSubscribe(K);
					}
					_innerSubscribe(K) {
						const { hasError: q, isStopped: Re, observers: de } = this;
						return q || Re ? P.Lc : (de.push(K), new P.w0(() => (0, be.P)(de, K)));
					}
					_checkFinalizedStatuses(K) {
						const { hasError: q, thrownError: Re, isStopped: de } = this;
						q ? K.error(Re) : de && K.complete();
					}
					asObservable() {
						const K = new m.y();
						return (K.source = this), K;
					}
				}
				return (ae.create = (Q, K) => new De(Q, K)), ae;
			})();
			class De extends _e {
				constructor(Q, K) {
					super(), (this.destination = Q), (this.source = K);
				}
				next(Q) {
					var K, q;
					null === (q = null === (K = this.destination) || void 0 === K ? void 0 : K.next) ||
						void 0 === q ||
						q.call(K, Q);
				}
				error(Q) {
					var K, q;
					null === (q = null === (K = this.destination) || void 0 === K ? void 0 : K.error) ||
						void 0 === q ||
						q.call(K, Q);
				}
				complete() {
					var Q, K;
					null === (K = null === (Q = this.destination) || void 0 === Q ? void 0 : Q.complete) ||
						void 0 === K ||
						K.call(Q);
				}
				_subscribe(Q) {
					var K, q;
					return null !== (q = null === (K = this.source) || void 0 === K ? void 0 : K.subscribe(Q)) &&
						void 0 !== q
						? q
						: P.Lc;
				}
			}
		},
		930: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { Hp: () => Re, Lv: () => q });
			var m = S(576),
				P = S(727),
				o = S(2416),
				G = S(7849),
				be = S(5032);
			const we = ae('C', void 0, void 0);
			function ae(Ne, rt, at) {
				return { kind: Ne, value: rt, error: at };
			}
			var Q = S(3410),
				K = S(2806);
			class q extends P.w0 {
				constructor(rt) {
					super(),
						(this.isStopped = !1),
						rt ? ((this.destination = rt), (0, P.Nn)(rt) && rt.add(this)) : (this.destination = ye);
				}
				static create(rt, at, Ge) {
					return new Re(rt, at, Ge);
				}
				next(rt) {
					this.isStopped
						? $e(
								(function De(Ne) {
									return ae('N', Ne, void 0);
								})(rt),
								this
						  )
						: this._next(rt);
				}
				error(rt) {
					this.isStopped
						? $e(
								(function _e(Ne) {
									return ae('E', void 0, Ne);
								})(rt),
								this
						  )
						: ((this.isStopped = !0), this._error(rt));
				}
				complete() {
					this.isStopped ? $e(we, this) : ((this.isStopped = !0), this._complete());
				}
				unsubscribe() {
					this.closed || ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
				}
				_next(rt) {
					this.destination.next(rt);
				}
				_error(rt) {
					try {
						this.destination.error(rt);
					} finally {
						this.unsubscribe();
					}
				}
				_complete() {
					try {
						this.destination.complete();
					} finally {
						this.unsubscribe();
					}
				}
			}
			class Re extends q {
				constructor(rt, at, Ge) {
					let ge;
					if ((super(), (0, m.m)(rt))) ge = rt;
					else if (rt) {
						let tt;
						({ next: ge, error: at, complete: Ge } = rt),
							this && o.v.useDeprecatedNextContext
								? ((tt = Object.create(rt)), (tt.unsubscribe = () => this.unsubscribe()))
								: (tt = rt),
							(ge = null == ge ? void 0 : ge.bind(tt)),
							(at = null == at ? void 0 : at.bind(tt)),
							(Ge = null == Ge ? void 0 : Ge.bind(tt));
					}
					this.destination = {
						next: ge ? de(ge) : be.Z,
						error: de(null != at ? at : Be),
						complete: Ge ? de(Ge) : be.Z,
					};
				}
			}
			function de(Ne, rt) {
				return (...at) => {
					try {
						Ne(...at);
					} catch (Ge) {
						o.v.useDeprecatedSynchronousErrorHandling ? (0, K.O)(Ge) : (0, G.h)(Ge);
					}
				};
			}
			function Be(Ne) {
				throw Ne;
			}
			function $e(Ne, rt) {
				const { onStoppedNotification: at } = o.v;
				at && Q.z.setTimeout(() => at(Ne, rt));
			}
			const ye = { closed: !0, next: be.Z, error: Be, complete: be.Z };
		},
		727: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { Lc: () => we, w0: () => be, Nn: () => _e });
			var m = S(576);
			const o = (0, S(3888).d)(
				(ae) =>
					function (K) {
						ae(this),
							(this.message = K
								? `${K.length} errors occurred during unsubscription:\n${K.map(
										(q, Re) => `${Re + 1}) ${q.toString()}`
								  ).join('\n  ')}`
								: ''),
							(this.name = 'UnsubscriptionError'),
							(this.errors = K);
					}
			);
			var G = S(8737);
			class be {
				constructor(Q) {
					(this.initialTeardown = Q), (this.closed = !1), (this._parentage = null), (this._teardowns = null);
				}
				unsubscribe() {
					let Q;
					if (!this.closed) {
						this.closed = !0;
						const { _parentage: K } = this;
						if (K)
							if (((this._parentage = null), Array.isArray(K))) for (const de of K) de.remove(this);
							else K.remove(this);
						const { initialTeardown: q } = this;
						if ((0, m.m)(q))
							try {
								q();
							} catch (de) {
								Q = de instanceof o ? de.errors : [de];
							}
						const { _teardowns: Re } = this;
						if (Re) {
							this._teardowns = null;
							for (const de of Re)
								try {
									De(de);
								} catch (Be) {
									(Q = null != Q ? Q : []), Be instanceof o ? (Q = [...Q, ...Be.errors]) : Q.push(Be);
								}
						}
						if (Q) throw new o(Q);
					}
				}
				add(Q) {
					var K;
					if (Q && Q !== this)
						if (this.closed) De(Q);
						else {
							if (Q instanceof be) {
								if (Q.closed || Q._hasParent(this)) return;
								Q._addParent(this);
							}
							(this._teardowns = null !== (K = this._teardowns) && void 0 !== K ? K : []).push(Q);
						}
				}
				_hasParent(Q) {
					const { _parentage: K } = this;
					return K === Q || (Array.isArray(K) && K.includes(Q));
				}
				_addParent(Q) {
					const { _parentage: K } = this;
					this._parentage = Array.isArray(K) ? (K.push(Q), K) : K ? [K, Q] : Q;
				}
				_removeParent(Q) {
					const { _parentage: K } = this;
					K === Q ? (this._parentage = null) : Array.isArray(K) && (0, G.P)(K, Q);
				}
				remove(Q) {
					const { _teardowns: K } = this;
					K && (0, G.P)(K, Q), Q instanceof be && Q._removeParent(this);
				}
			}
			be.EMPTY = (() => {
				const ae = new be();
				return (ae.closed = !0), ae;
			})();
			const we = be.EMPTY;
			function _e(ae) {
				return (
					ae instanceof be ||
					(ae && 'closed' in ae && (0, m.m)(ae.remove) && (0, m.m)(ae.add) && (0, m.m)(ae.unsubscribe))
				);
			}
			function De(ae) {
				(0, m.m)(ae) ? ae() : ae.unsubscribe();
			}
		},
		2416: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { v: () => m });
			const m = {
				onUnhandledError: null,
				onStoppedNotification: null,
				Promise: void 0,
				useDeprecatedSynchronousErrorHandling: !1,
				useDeprecatedNextContext: !1,
			};
		},
		9841: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { a: () => Q });
			var m = S(8306),
				P = S(4742),
				o = S(2076),
				G = S(4671),
				be = S(3268),
				we = S(3269),
				_e = S(1810),
				De = S(5403),
				ae = S(9672);
			function Q(...Re) {
				const de = (0, we.yG)(Re),
					Be = (0, we.jO)(Re),
					{ args: $e, keys: ye } = (0, P.D)(Re);
				if (0 === $e.length) return (0, o.D)([], de);
				const Ne = new m.y(
					(function K(Re, de, Be = G.y) {
						return ($e) => {
							q(
								de,
								() => {
									const { length: ye } = Re,
										Ne = new Array(ye);
									let rt = ye,
										at = ye;
									for (let Ge = 0; Ge < ye; Ge++)
										q(
											de,
											() => {
												const ge = (0, o.D)(Re[Ge], de);
												let tt = !1;
												ge.subscribe(
													new De.Q(
														$e,
														(ot) => {
															(Ne[Ge] = ot),
																tt || ((tt = !0), at--),
																at || $e.next(Be(Ne.slice()));
														},
														() => {
															--rt || $e.complete();
														}
													)
												);
											},
											$e
										);
								},
								$e
							);
						};
					})($e, de, ye ? (rt) => (0, _e.n)(ye, rt) : G.y)
				);
				return Be ? Ne.pipe((0, be.Z)(Be)) : Ne;
			}
			function q(Re, de, Be) {
				Re ? (0, ae.f)(Be, Re, de) : de();
			}
		},
		7272: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { z: () => be });
			var m = S(8189),
				o = S(3269),
				G = S(2076);
			function be(...we) {
				return (function P() {
					return (0, m.J)(1);
				})()((0, G.D)(we, (0, o.yG)(we)));
			}
		},
		9770: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { P: () => o });
			var m = S(8306),
				P = S(8421);
			function o(G) {
				return new m.y((be) => {
					(0, P.Xf)(G()).subscribe(be);
				});
			}
		},
		515: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { E: () => P });
			const P = new (S(8306).y)((be) => be.complete());
		},
		4128: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { D: () => De });
			var m = S(8306),
				P = S(4742),
				o = S(8421),
				G = S(3269),
				be = S(5403),
				we = S(3268),
				_e = S(1810);
			function De(...ae) {
				const Q = (0, G.jO)(ae),
					{ args: K, keys: q } = (0, P.D)(ae),
					Re = new m.y((de) => {
						const { length: Be } = K;
						if (!Be) return void de.complete();
						const $e = new Array(Be);
						let ye = Be,
							Ne = Be;
						for (let rt = 0; rt < Be; rt++) {
							let at = !1;
							(0, o.Xf)(K[rt]).subscribe(
								new be.Q(
									de,
									(Ge) => {
										at || ((at = !0), Ne--), ($e[rt] = Ge);
									},
									() => ye--,
									void 0,
									() => {
										(!ye || !at) && (Ne || de.next(q ? (0, _e.n)(q, $e) : $e), de.complete());
									}
								)
							);
						}
					});
				return Q ? Re.pipe((0, we.Z)(Q)) : Re;
			}
		},
		2076: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { D: () => ot });
			var m = S(8421),
				P = S(9672),
				o = S(4482),
				G = S(5403);
			function be(J, We = 0) {
				return (0, o.e)((ce, Pe) => {
					ce.subscribe(
						new G.Q(
							Pe,
							(Ie) => (0, P.f)(Pe, J, () => Pe.next(Ie), We),
							() => (0, P.f)(Pe, J, () => Pe.complete(), We),
							(Ie) => (0, P.f)(Pe, J, () => Pe.error(Ie), We)
						)
					);
				});
			}
			function we(J, We = 0) {
				return (0, o.e)((ce, Pe) => {
					Pe.add(J.schedule(() => ce.subscribe(Pe), We));
				});
			}
			var ae = S(8306),
				K = S(2202),
				q = S(576);
			function de(J, We) {
				if (!J) throw new Error('Iterable cannot be null');
				return new ae.y((ce) => {
					(0, P.f)(ce, We, () => {
						const Pe = J[Symbol.asyncIterator]();
						(0, P.f)(
							ce,
							We,
							() => {
								Pe.next().then((Ie) => {
									Ie.done ? ce.complete() : ce.next(Ie.value);
								});
							},
							0,
							!0
						);
					});
				});
			}
			var Be = S(3670),
				$e = S(8239),
				ye = S(1144),
				Ne = S(6495),
				rt = S(2206),
				at = S(4532),
				Ge = S(3260);
			function ot(J, We) {
				return We
					? (function tt(J, We) {
							if (null != J) {
								if ((0, Be.c)(J))
									return (function _e(J, We) {
										return (0, m.Xf)(J).pipe(we(We), be(We));
									})(J, We);
								if ((0, ye.z)(J))
									return (function Q(J, We) {
										return new ae.y((ce) => {
											let Pe = 0;
											return We.schedule(function () {
												Pe === J.length
													? ce.complete()
													: (ce.next(J[Pe++]), ce.closed || this.schedule());
											});
										});
									})(J, We);
								if ((0, $e.t)(J))
									return (function De(J, We) {
										return (0, m.Xf)(J).pipe(we(We), be(We));
									})(J, We);
								if ((0, rt.D)(J)) return de(J, We);
								if ((0, Ne.T)(J))
									return (function Re(J, We) {
										return new ae.y((ce) => {
											let Pe;
											return (
												(0, P.f)(ce, We, () => {
													(Pe = J[K.h]()),
														(0, P.f)(
															ce,
															We,
															() => {
																let Ie, Ue;
																try {
																	({ value: Ie, done: Ue } = Pe.next());
																} catch (ut) {
																	return void ce.error(ut);
																}
																Ue ? ce.complete() : ce.next(Ie);
															},
															0,
															!0
														);
												}),
												() => (0, q.m)(null == Pe ? void 0 : Pe.return) && Pe.return()
											);
										});
									})(J, We);
								if ((0, Ge.L)(J))
									return (function ge(J, We) {
										return de((0, Ge.Q)(J), We);
									})(J, We);
							}
							throw (0, at.z)(J);
					  })(J, We)
					: (0, m.Xf)(J);
			}
		},
		4968: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { R: () => Q });
			var m = S(8421),
				P = S(8306),
				o = S(5577),
				G = S(1144),
				be = S(576),
				we = S(3268);
			const _e = ['addListener', 'removeListener'],
				De = ['addEventListener', 'removeEventListener'],
				ae = ['on', 'off'];
			function Q(Be, $e, ye, Ne) {
				if (((0, be.m)(ye) && ((Ne = ye), (ye = void 0)), Ne)) return Q(Be, $e, ye).pipe((0, we.Z)(Ne));
				const [rt, at] = (function de(Be) {
					return (0, be.m)(Be.addEventListener) && (0, be.m)(Be.removeEventListener);
				})(Be)
					? De.map((Ge) => (ge) => Be[Ge]($e, ge, ye))
					: (function q(Be) {
							return (0, be.m)(Be.addListener) && (0, be.m)(Be.removeListener);
					  })(Be)
					? _e.map(K(Be, $e))
					: (function Re(Be) {
							return (0, be.m)(Be.on) && (0, be.m)(Be.off);
					  })(Be)
					? ae.map(K(Be, $e))
					: [];
				if (!rt && (0, G.z)(Be)) return (0, o.z)((Ge) => Q(Ge, $e, ye))((0, m.Xf)(Be));
				if (!rt) throw new TypeError('Invalid event target');
				return new P.y((Ge) => {
					const ge = (...tt) => Ge.next(1 < tt.length ? tt : tt[0]);
					return rt(ge), () => at(ge);
				});
			}
			function K(Be, $e) {
				return (ye) => (Ne) => Be[ye]($e, Ne);
			}
		},
		8421: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { Xf: () => Re });
			var m = S(5987),
				P = S(1144),
				o = S(8239),
				G = S(8306),
				be = S(3670),
				we = S(2206),
				_e = S(4532),
				De = S(6495),
				ae = S(3260),
				Q = S(576),
				K = S(7849),
				q = S(8822);
			function Re(Ge) {
				if (Ge instanceof G.y) return Ge;
				if (null != Ge) {
					if ((0, be.c)(Ge))
						return (function de(Ge) {
							return new G.y((ge) => {
								const tt = Ge[q.L]();
								if ((0, Q.m)(tt.subscribe)) return tt.subscribe(ge);
								throw new TypeError('Provided object does not correctly implement Symbol.observable');
							});
						})(Ge);
					if ((0, P.z)(Ge))
						return (function Be(Ge) {
							return new G.y((ge) => {
								for (let tt = 0; tt < Ge.length && !ge.closed; tt++) ge.next(Ge[tt]);
								ge.complete();
							});
						})(Ge);
					if ((0, o.t)(Ge))
						return (function $e(Ge) {
							return new G.y((ge) => {
								Ge.then(
									(tt) => {
										ge.closed || (ge.next(tt), ge.complete());
									},
									(tt) => ge.error(tt)
								).then(null, K.h);
							});
						})(Ge);
					if ((0, we.D)(Ge)) return Ne(Ge);
					if ((0, De.T)(Ge))
						return (function ye(Ge) {
							return new G.y((ge) => {
								for (const tt of Ge) if ((ge.next(tt), ge.closed)) return;
								ge.complete();
							});
						})(Ge);
					if ((0, ae.L)(Ge))
						return (function rt(Ge) {
							return Ne((0, ae.Q)(Ge));
						})(Ge);
				}
				throw (0, _e.z)(Ge);
			}
			function Ne(Ge) {
				return new G.y((ge) => {
					(function at(Ge, ge) {
						var tt, ot, J, We;
						return (0, m.mG)(this, void 0, void 0, function* () {
							try {
								for (tt = (0, m.KL)(Ge); !(ot = yield tt.next()).done; )
									if ((ge.next(ot.value), ge.closed)) return;
							} catch (ce) {
								J = { error: ce };
							} finally {
								try {
									ot && !ot.done && (We = tt.return) && (yield We.call(tt));
								} finally {
									if (J) throw J.error;
								}
							}
							ge.complete();
						});
					})(Ge, ge).catch((tt) => ge.error(tt));
				});
			}
		},
		6451: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { T: () => we });
			var m = S(8189),
				P = S(8421),
				o = S(515),
				G = S(3269),
				be = S(2076);
			function we(..._e) {
				const De = (0, G.yG)(_e),
					ae = (0, G._6)(_e, 1 / 0),
					Q = _e;
				return Q.length ? (1 === Q.length ? (0, P.Xf)(Q[0]) : (0, m.J)(ae)((0, be.D)(Q, De))) : o.E;
			}
		},
		9646: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { of: () => o });
			var m = S(3269),
				P = S(2076);
			function o(...G) {
				const be = (0, m.yG)(G);
				return (0, P.D)(G, be);
			}
		},
		2843: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { _: () => o });
			var m = S(8306),
				P = S(576);
			function o(G, be) {
				const we = (0, P.m)(G) ? G : () => G,
					_e = (De) => De.error(we());
				return new m.y(be ? (De) => be.schedule(_e, 0, De) : _e);
			}
		},
		5963: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { H: () => be });
			var m = S(8306),
				P = S(4986),
				o = S(3532);
			function be(we = 0, _e, De = P.P) {
				let ae = -1;
				return (
					null != _e && ((0, o.K)(_e) ? (De = _e) : (ae = _e)),
					new m.y((Q) => {
						let K = (function G(we) {
							return we instanceof Date && !isNaN(we);
						})(we)
							? +we - De.now()
							: we;
						K < 0 && (K = 0);
						let q = 0;
						return De.schedule(function () {
							Q.closed || (Q.next(q++), 0 <= ae ? this.schedule(void 0, ae) : Q.complete());
						}, K);
					})
				);
			}
		},
		5403: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { Q: () => P });
			var m = S(930);
			class P extends m.Lv {
				constructor(G, be, we, _e, De) {
					super(G),
						(this.onFinalize = De),
						(this._next = be
							? function (ae) {
									try {
										be(ae);
									} catch (Q) {
										G.error(Q);
									}
							  }
							: super._next),
						(this._error = _e
							? function (ae) {
									try {
										_e(ae);
									} catch (Q) {
										G.error(Q);
									} finally {
										this.unsubscribe();
									}
							  }
							: super._error),
						(this._complete = we
							? function () {
									try {
										we();
									} catch (ae) {
										G.error(ae);
									} finally {
										this.unsubscribe();
									}
							  }
							: super._complete);
				}
				unsubscribe() {
					var G;
					const { closed: be } = this;
					super.unsubscribe(), !be && (null === (G = this.onFinalize) || void 0 === G || G.call(this));
				}
			}
		},
		262: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { K: () => G });
			var m = S(8421),
				P = S(5403),
				o = S(4482);
			function G(be) {
				return (0, o.e)((we, _e) => {
					let Q,
						De = null,
						ae = !1;
					(De = we.subscribe(
						new P.Q(_e, void 0, void 0, (K) => {
							(Q = (0, m.Xf)(be(K, G(be)(we)))),
								De ? (De.unsubscribe(), (De = null), Q.subscribe(_e)) : (ae = !0);
						})
					)),
						ae && (De.unsubscribe(), (De = null), Q.subscribe(_e));
				});
			}
		},
		4351: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { b: () => o });
			var m = S(5577),
				P = S(576);
			function o(G, be) {
				return (0, P.m)(be) ? (0, m.z)(G, be, 1) : (0, m.z)(G, 1);
			}
		},
		8372: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { b: () => G });
			var m = S(4986),
				P = S(4482),
				o = S(5403);
			function G(be, we = m.z) {
				return (0, P.e)((_e, De) => {
					let ae = null,
						Q = null,
						K = null;
					const q = () => {
						if (ae) {
							ae.unsubscribe(), (ae = null);
							const de = Q;
							(Q = null), De.next(de);
						}
					};
					function Re() {
						const de = K + be,
							Be = we.now();
						if (Be < de) return (ae = this.schedule(void 0, de - Be)), void De.add(ae);
						q();
					}
					_e.subscribe(
						new o.Q(
							De,
							(de) => {
								(Q = de), (K = we.now()), ae || ((ae = we.schedule(Re, be)), De.add(ae));
							},
							() => {
								q(), De.complete();
							},
							void 0,
							() => {
								Q = ae = null;
							}
						)
					);
				});
			}
		},
		4825: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { g: () => Re });
			var m = S(4986),
				P = S(7272),
				o = S(5698),
				G = S(4482),
				be = S(5403),
				we = S(5032),
				De = S(4004),
				Q = S(5577);
			function K(de, Be) {
				return Be
					? ($e) =>
							(0, P.z)(
								Be.pipe(
									(0, o.q)(1),
									(function _e() {
										return (0, G.e)((de, Be) => {
											de.subscribe(new be.Q(Be, we.Z));
										});
									})()
								),
								$e.pipe(K(de))
							)
					: (0, Q.z)(($e, ye) =>
							de($e, ye).pipe(
								(0, o.q)(1),
								(function ae(de) {
									return (0, De.U)(() => de);
								})($e)
							)
					  );
			}
			var q = S(5963);
			function Re(de, Be = m.z) {
				const $e = (0, q.H)(de, Be);
				return K(() => $e);
			}
		},
		1884: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { x: () => G });
			var m = S(4671),
				P = S(4482),
				o = S(5403);
			function G(we, _e = m.y) {
				return (
					(we = null != we ? we : be),
					(0, P.e)((De, ae) => {
						let Q,
							K = !0;
						De.subscribe(
							new o.Q(ae, (q) => {
								const Re = _e(q);
								(K || !we(Q, Re)) && ((K = !1), (Q = Re), ae.next(q));
							})
						);
					})
				);
			}
			function be(we, _e) {
				return we === _e;
			}
		},
		9300: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { h: () => o });
			var m = S(4482),
				P = S(5403);
			function o(G, be) {
				return (0, m.e)((we, _e) => {
					let De = 0;
					we.subscribe(new P.Q(_e, (ae) => G.call(be, ae, De++) && _e.next(ae)));
				});
			}
		},
		8746: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { x: () => P });
			var m = S(4482);
			function P(o) {
				return (0, m.e)((G, be) => {
					try {
						G.subscribe(be);
					} finally {
						be.add(o);
					}
				});
			}
		},
		4004: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { U: () => o });
			var m = S(4482),
				P = S(5403);
			function o(G, be) {
				return (0, m.e)((we, _e) => {
					let De = 0;
					we.subscribe(
						new P.Q(_e, (ae) => {
							_e.next(G.call(be, ae, De++));
						})
					);
				});
			}
		},
		8189: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { J: () => o });
			var m = S(5577),
				P = S(4671);
			function o(G = 1 / 0) {
				return (0, m.z)(P.y, G);
			}
		},
		5577: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { z: () => De });
			var m = S(4004),
				P = S(8421),
				o = S(4482),
				G = S(9672),
				be = S(5403),
				_e = S(576);
			function De(ae, Q, K = 1 / 0) {
				return (0, _e.m)(Q)
					? De((q, Re) => (0, m.U)((de, Be) => Q(q, de, Re, Be))((0, P.Xf)(ae(q, Re))), K)
					: ('number' == typeof Q && (K = Q),
					  (0, o.e)((q, Re) =>
							(function we(ae, Q, K, q, Re, de, Be, $e) {
								const ye = [];
								let Ne = 0,
									rt = 0,
									at = !1;
								const Ge = () => {
										at && !ye.length && !Ne && Q.complete();
									},
									ge = (ot) => (Ne < q ? tt(ot) : ye.push(ot)),
									tt = (ot) => {
										de && Q.next(ot), Ne++;
										let J = !1;
										(0, P.Xf)(K(ot, rt++)).subscribe(
											new be.Q(
												Q,
												(We) => {
													null == Re || Re(We), de ? ge(We) : Q.next(We);
												},
												() => {
													J = !0;
												},
												void 0,
												() => {
													if (J)
														try {
															for (Ne--; ye.length && Ne < q; ) {
																const We = ye.shift();
																Be ? (0, G.f)(Q, Be, () => tt(We)) : tt(We);
															}
															Ge();
														} catch (We) {
															Q.error(We);
														}
												}
											)
										);
									};
								return (
									ae.subscribe(
										new be.Q(Q, ge, () => {
											(at = !0), Ge();
										})
									),
									() => {
										null == $e || $e();
									}
								);
							})(q, Re, ae, K)
					  ));
			}
		},
		3099: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { B: () => we });
			var m = S(2076),
				P = S(5698),
				o = S(7579),
				G = S(930),
				be = S(4482);
			function we(De = {}) {
				const {
					connector: ae = () => new o.x(),
					resetOnError: Q = !0,
					resetOnComplete: K = !0,
					resetOnRefCountZero: q = !0,
				} = De;
				return (Re) => {
					let de = null,
						Be = null,
						$e = null,
						ye = 0,
						Ne = !1,
						rt = !1;
					const at = () => {
							null == Be || Be.unsubscribe(), (Be = null);
						},
						Ge = () => {
							at(), (de = $e = null), (Ne = rt = !1);
						},
						ge = () => {
							const tt = de;
							Ge(), null == tt || tt.unsubscribe();
						};
					return (0, be.e)((tt, ot) => {
						ye++, !rt && !Ne && at();
						const J = ($e = null != $e ? $e : ae());
						ot.add(() => {
							ye--, 0 === ye && !rt && !Ne && (Be = _e(ge, q));
						}),
							J.subscribe(ot),
							de ||
								((de = new G.Hp({
									next: (We) => J.next(We),
									error: (We) => {
										(rt = !0), at(), (Be = _e(Ge, Q, We)), J.error(We);
									},
									complete: () => {
										(Ne = !0), at(), (Be = _e(Ge, K)), J.complete();
									},
								})),
								(0, m.D)(tt).subscribe(de));
					})(Re);
				};
			}
			function _e(De, ae, ...Q) {
				return !0 === ae
					? (De(), null)
					: !1 === ae
					? null
					: ae(...Q)
							.pipe((0, P.q)(1))
							.subscribe(() => De());
			}
		},
		5684: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { T: () => P });
			var m = S(9300);
			function P(o) {
				return (0, m.h)((G, be) => o <= be);
			}
		},
		8675: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { O: () => G });
			var m = S(7272),
				P = S(3269),
				o = S(4482);
			function G(...be) {
				const we = (0, P.yG)(be);
				return (0, o.e)((_e, De) => {
					(we ? (0, m.z)(be, _e, we) : (0, m.z)(be, _e)).subscribe(De);
				});
			}
		},
		3900: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { w: () => G });
			var m = S(8421),
				P = S(4482),
				o = S(5403);
			function G(be, we) {
				return (0, P.e)((_e, De) => {
					let ae = null,
						Q = 0,
						K = !1;
					const q = () => K && !ae && De.complete();
					_e.subscribe(
						new o.Q(
							De,
							(Re) => {
								null == ae || ae.unsubscribe();
								let de = 0;
								const Be = Q++;
								(0, m.Xf)(be(Re, Be)).subscribe(
									(ae = new o.Q(
										De,
										($e) => De.next(we ? we(Re, $e, Be, de++) : $e),
										() => {
											(ae = null), q();
										}
									))
								);
							},
							() => {
								(K = !0), q();
							}
						)
					);
				});
			}
		},
		5698: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { q: () => G });
			var m = S(515),
				P = S(4482),
				o = S(5403);
			function G(be) {
				return be <= 0
					? () => m.E
					: (0, P.e)((we, _e) => {
							let De = 0;
							we.subscribe(
								new o.Q(_e, (ae) => {
									++De <= be && (_e.next(ae), be <= De && _e.complete());
								})
							);
					  });
			}
		},
		2722: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { R: () => be });
			var m = S(4482),
				P = S(5403),
				o = S(8421),
				G = S(5032);
			function be(we) {
				return (0, m.e)((_e, De) => {
					(0, o.Xf)(we).subscribe(new P.Q(De, () => De.complete(), G.Z)), !De.closed && _e.subscribe(De);
				});
			}
		},
		8505: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { b: () => be });
			var m = S(576),
				P = S(4482),
				o = S(5403),
				G = S(4671);
			function be(we, _e, De) {
				const ae = (0, m.m)(we) || _e || De ? { next: we, error: _e, complete: De } : we;
				return ae
					? (0, P.e)((Q, K) => {
							var q;
							null === (q = ae.subscribe) || void 0 === q || q.call(ae);
							let Re = !0;
							Q.subscribe(
								new o.Q(
									K,
									(de) => {
										var Be;
										null === (Be = ae.next) || void 0 === Be || Be.call(ae, de), K.next(de);
									},
									() => {
										var de;
										(Re = !1),
											null === (de = ae.complete) || void 0 === de || de.call(ae),
											K.complete();
									},
									(de) => {
										var Be;
										(Re = !1),
											null === (Be = ae.error) || void 0 === Be || Be.call(ae, de),
											K.error(de);
									},
									() => {
										var de, Be;
										Re && (null === (de = ae.unsubscribe) || void 0 === de || de.call(ae)),
											null === (Be = ae.finalize) || void 0 === Be || Be.call(ae);
									}
								)
							);
					  })
					: G.y;
			}
		},
		4408: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { o: () => be });
			var m = S(727);
			class P extends m.w0 {
				constructor(_e, De) {
					super();
				}
				schedule(_e, De = 0) {
					return this;
				}
			}
			const o = {
				setInterval(...we) {
					const { delegate: _e } = o;
					return ((null == _e ? void 0 : _e.setInterval) || setInterval)(...we);
				},
				clearInterval(we) {
					const { delegate: _e } = o;
					return ((null == _e ? void 0 : _e.clearInterval) || clearInterval)(we);
				},
				delegate: void 0,
			};
			var G = S(8737);
			class be extends P {
				constructor(_e, De) {
					super(_e, De), (this.scheduler = _e), (this.work = De), (this.pending = !1);
				}
				schedule(_e, De = 0) {
					if (this.closed) return this;
					this.state = _e;
					const ae = this.id,
						Q = this.scheduler;
					return (
						null != ae && (this.id = this.recycleAsyncId(Q, ae, De)),
						(this.pending = !0),
						(this.delay = De),
						(this.id = this.id || this.requestAsyncId(Q, this.id, De)),
						this
					);
				}
				requestAsyncId(_e, De, ae = 0) {
					return o.setInterval(_e.flush.bind(_e, this), ae);
				}
				recycleAsyncId(_e, De, ae = 0) {
					if (null != ae && this.delay === ae && !1 === this.pending) return De;
					o.clearInterval(De);
				}
				execute(_e, De) {
					if (this.closed) return new Error('executing a cancelled action');
					this.pending = !1;
					const ae = this._execute(_e, De);
					if (ae) return ae;
					!1 === this.pending &&
						null != this.id &&
						(this.id = this.recycleAsyncId(this.scheduler, this.id, null));
				}
				_execute(_e, De) {
					let Q,
						ae = !1;
					try {
						this.work(_e);
					} catch (K) {
						(ae = !0), (Q = K || new Error('Scheduled action threw falsy error'));
					}
					if (ae) return this.unsubscribe(), Q;
				}
				unsubscribe() {
					if (!this.closed) {
						const { id: _e, scheduler: De } = this,
							{ actions: ae } = De;
						(this.work = this.state = this.scheduler = null),
							(this.pending = !1),
							(0, G.P)(ae, this),
							null != _e && (this.id = this.recycleAsyncId(De, _e, null)),
							(this.delay = null),
							super.unsubscribe();
					}
				}
			}
		},
		640: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { v: () => o });
			const m = {
				now: () => (m.delegate || Date).now(),
				delegate: void 0,
			};
			class P {
				constructor(be, we = P.now) {
					(this.schedulerActionCtor = be), (this.now = we);
				}
				schedule(be, we = 0, _e) {
					return new this.schedulerActionCtor(this, be).schedule(_e, we);
				}
			}
			P.now = m.now;
			class o extends P {
				constructor(be, we = P.now) {
					super(be, we), (this.actions = []), (this._active = !1), (this._scheduled = void 0);
				}
				flush(be) {
					const { actions: we } = this;
					if (this._active) return void we.push(be);
					let _e;
					this._active = !0;
					do {
						if ((_e = be.execute(be.state, be.delay))) break;
					} while ((be = we.shift()));
					if (((this._active = !1), _e)) {
						for (; (be = we.shift()); ) be.unsubscribe();
						throw _e;
					}
				}
			}
		},
		6406: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { Z: () => _e });
			var m = S(4408),
				P = S(727);
			const o = {
				schedule(ae) {
					let Q = requestAnimationFrame,
						K = cancelAnimationFrame;
					const { delegate: q } = o;
					q && ((Q = q.requestAnimationFrame), (K = q.cancelAnimationFrame));
					const Re = Q((de) => {
						(K = void 0), ae(de);
					});
					return new P.w0(() => (null == K ? void 0 : K(Re)));
				},
				requestAnimationFrame(...ae) {
					const { delegate: Q } = o;
					return ((null == Q ? void 0 : Q.requestAnimationFrame) || requestAnimationFrame)(...ae);
				},
				cancelAnimationFrame(...ae) {
					const { delegate: Q } = o;
					return ((null == Q ? void 0 : Q.cancelAnimationFrame) || cancelAnimationFrame)(...ae);
				},
				delegate: void 0,
			};
			var be = S(640);
			const _e = new (class we extends be.v {
				flush(Q) {
					(this._active = !0), (this._scheduled = void 0);
					const { actions: K } = this;
					let q,
						Re = -1;
					Q = Q || K.shift();
					const de = K.length;
					do {
						if ((q = Q.execute(Q.state, Q.delay))) break;
					} while (++Re < de && (Q = K.shift()));
					if (((this._active = !1), q)) {
						for (; ++Re < de && (Q = K.shift()); ) Q.unsubscribe();
						throw q;
					}
				}
			})(
				class G extends m.o {
					constructor(Q, K) {
						super(Q, K), (this.scheduler = Q), (this.work = K);
					}
					requestAsyncId(Q, K, q = 0) {
						return null !== q && q > 0
							? super.requestAsyncId(Q, K, q)
							: (Q.actions.push(this),
							  Q._scheduled || (Q._scheduled = o.requestAnimationFrame(() => Q.flush(void 0))));
					}
					recycleAsyncId(Q, K, q = 0) {
						if ((null != q && q > 0) || (null == q && this.delay > 0)) return super.recycleAsyncId(Q, K, q);
						0 === Q.actions.length && (o.cancelAnimationFrame(K), (Q._scheduled = void 0));
					}
				}
			);
		},
		4986: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { z: () => o, P: () => G });
			var m = S(4408);
			const o = new (S(640).v)(m.o),
				G = o;
		},
		3410: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { z: () => m });
			const m = {
				setTimeout(...P) {
					const { delegate: o } = m;
					return ((null == o ? void 0 : o.setTimeout) || setTimeout)(...P);
				},
				clearTimeout(P) {
					const { delegate: o } = m;
					return ((null == o ? void 0 : o.clearTimeout) || clearTimeout)(P);
				},
				delegate: void 0,
			};
		},
		2202: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { h: () => P });
			const P = (function m() {
				return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
			})();
		},
		8822: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { L: () => m });
			const m = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
		},
		3269: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { jO: () => G, yG: () => be, _6: () => we });
			var m = S(576),
				P = S(3532);
			function o(_e) {
				return _e[_e.length - 1];
			}
			function G(_e) {
				return (0, m.m)(o(_e)) ? _e.pop() : void 0;
			}
			function be(_e) {
				return (0, P.K)(o(_e)) ? _e.pop() : void 0;
			}
			function we(_e, De) {
				return 'number' == typeof o(_e) ? _e.pop() : De;
			}
		},
		4742: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { D: () => be });
			const { isArray: m } = Array,
				{ getPrototypeOf: P, prototype: o, keys: G } = Object;
			function be(_e) {
				if (1 === _e.length) {
					const De = _e[0];
					if (m(De)) return { args: De, keys: null };
					if (
						(function we(_e) {
							return _e && 'object' == typeof _e && P(_e) === o;
						})(De)
					) {
						const ae = G(De);
						return { args: ae.map((Q) => De[Q]), keys: ae };
					}
				}
				return { args: _e, keys: null };
			}
		},
		8737: (Et, Ve, S) => {
			'use strict';
			function m(P, o) {
				if (P) {
					const G = P.indexOf(o);
					0 <= G && P.splice(G, 1);
				}
			}
			S.d(Ve, { P: () => m });
		},
		3888: (Et, Ve, S) => {
			'use strict';
			function m(P) {
				const G = P((be) => {
					Error.call(be), (be.stack = new Error().stack);
				});
				return (G.prototype = Object.create(Error.prototype)), (G.prototype.constructor = G), G;
			}
			S.d(Ve, { d: () => m });
		},
		1810: (Et, Ve, S) => {
			'use strict';
			function m(P, o) {
				return P.reduce((G, be, we) => ((G[be] = o[we]), G), {});
			}
			S.d(Ve, { n: () => m });
		},
		2806: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { x: () => o, O: () => G });
			var m = S(2416);
			let P = null;
			function o(be) {
				if (m.v.useDeprecatedSynchronousErrorHandling) {
					const we = !P;
					if ((we && (P = { errorThrown: !1, error: null }), be(), we)) {
						const { errorThrown: _e, error: De } = P;
						if (((P = null), _e)) throw De;
					}
				} else be();
			}
			function G(be) {
				m.v.useDeprecatedSynchronousErrorHandling && P && ((P.errorThrown = !0), (P.error = be));
			}
		},
		9672: (Et, Ve, S) => {
			'use strict';
			function m(P, o, G, be = 0, we = !1) {
				const _e = o.schedule(function () {
					G(), we ? P.add(this.schedule(null, be)) : this.unsubscribe();
				}, be);
				if ((P.add(_e), !we)) return _e;
			}
			S.d(Ve, { f: () => m });
		},
		4671: (Et, Ve, S) => {
			'use strict';
			function m(P) {
				return P;
			}
			S.d(Ve, { y: () => m });
		},
		1144: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { z: () => m });
			const m = (P) => P && 'number' == typeof P.length && 'function' != typeof P;
		},
		2206: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { D: () => P });
			var m = S(576);
			function P(o) {
				return Symbol.asyncIterator && (0, m.m)(null == o ? void 0 : o[Symbol.asyncIterator]);
			}
		},
		576: (Et, Ve, S) => {
			'use strict';
			function m(P) {
				return 'function' == typeof P;
			}
			S.d(Ve, { m: () => m });
		},
		3670: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { c: () => o });
			var m = S(8822),
				P = S(576);
			function o(G) {
				return (0, P.m)(G[m.L]);
			}
		},
		6495: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { T: () => o });
			var m = S(2202),
				P = S(576);
			function o(G) {
				return (0, P.m)(null == G ? void 0 : G[m.h]);
			}
		},
		8239: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { t: () => P });
			var m = S(576);
			function P(o) {
				return (0, m.m)(null == o ? void 0 : o.then);
			}
		},
		3260: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { Q: () => o, L: () => G });
			var m = S(5987),
				P = S(576);
			function o(be) {
				return (0, m.FC)(this, arguments, function* () {
					const _e = be.getReader();
					try {
						for (;;) {
							const { value: De, done: ae } = yield (0, m.qq)(_e.read());
							if (ae) return yield (0, m.qq)(void 0);
							yield yield (0, m.qq)(De);
						}
					} finally {
						_e.releaseLock();
					}
				});
			}
			function G(be) {
				return (0, P.m)(null == be ? void 0 : be.getReader);
			}
		},
		3532: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { K: () => P });
			var m = S(576);
			function P(o) {
				return o && (0, m.m)(o.schedule);
			}
		},
		4482: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { A: () => P, e: () => o });
			var m = S(576);
			function P(G) {
				return (0, m.m)(null == G ? void 0 : G.lift);
			}
			function o(G) {
				return (be) => {
					if (P(be))
						return be.lift(function (we) {
							try {
								return G(we, this);
							} catch (_e) {
								this.error(_e);
							}
						});
					throw new TypeError('Unable to lift unknown Observable type');
				};
			}
		},
		3268: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { Z: () => G });
			var m = S(4004);
			const { isArray: P } = Array;
			function G(be) {
				return (0, m.U)((we) =>
					(function o(be, we) {
						return P(we) ? be(...we) : be(we);
					})(be, we)
				);
			}
		},
		5032: (Et, Ve, S) => {
			'use strict';
			function m() {}
			S.d(Ve, { Z: () => m });
		},
		7849: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { h: () => o });
			var m = S(2416),
				P = S(3410);
			function o(G) {
				P.z.setTimeout(() => {
					const { onUnhandledError: be } = m.v;
					if (!be) throw G;
					be(G);
				});
			}
		},
		4532: (Et, Ve, S) => {
			'use strict';
			function m(P) {
				return new TypeError(
					`You provided ${
						null !== P && 'object' == typeof P ? 'an invalid object' : `'${P}'`
					} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
				);
			}
			S.d(Ve, { z: () => m });
		},
		5226: function (Et) {
			(Et.exports = (function () {
				'use strict';
				const Ve = 'SweetAlert2:',
					m = (C) => C.charAt(0).toUpperCase() + C.slice(1),
					P = (C) => Array.prototype.slice.call(C),
					o = (C) => {
						console.warn(''.concat(Ve, ' ').concat('object' == typeof C ? C.join(' ') : C));
					},
					G = (C) => {
						console.error(''.concat(Ve, ' ').concat(C));
					},
					be = [],
					_e = (C, M) => {
						((C) => {
							be.includes(C) || (be.push(C), o(C));
						})(
							'"'
								.concat(
									C,
									'" is deprecated and will be removed in the next major release. Please use "'
								)
								.concat(M, '" instead.')
						);
					},
					De = (C) => ('function' == typeof C ? C() : C),
					ae = (C) => C && 'function' == typeof C.toPromise,
					Q = (C) => (ae(C) ? C.toPromise() : Promise.resolve(C)),
					K = (C) => C && Promise.resolve(C) === C,
					q = {
						title: '',
						titleText: '',
						text: '',
						html: '',
						footer: '',
						icon: void 0,
						iconColor: void 0,
						iconHtml: void 0,
						template: void 0,
						toast: !1,
						showClass: {
							popup: 'swal2-show',
							backdrop: 'swal2-backdrop-show',
							icon: 'swal2-icon-show',
						},
						hideClass: {
							popup: 'swal2-hide',
							backdrop: 'swal2-backdrop-hide',
							icon: 'swal2-icon-hide',
						},
						customClass: {},
						target: 'body',
						color: void 0,
						backdrop: !0,
						heightAuto: !0,
						allowOutsideClick: !0,
						allowEscapeKey: !0,
						allowEnterKey: !0,
						stopKeydownPropagation: !0,
						keydownListenerCapture: !1,
						showConfirmButton: !0,
						showDenyButton: !1,
						showCancelButton: !1,
						preConfirm: void 0,
						preDeny: void 0,
						confirmButtonText: 'OK',
						confirmButtonAriaLabel: '',
						confirmButtonColor: void 0,
						denyButtonText: 'No',
						denyButtonAriaLabel: '',
						denyButtonColor: void 0,
						cancelButtonText: 'Cancel',
						cancelButtonAriaLabel: '',
						cancelButtonColor: void 0,
						buttonsStyling: !0,
						reverseButtons: !1,
						focusConfirm: !0,
						focusDeny: !1,
						focusCancel: !1,
						returnFocus: !0,
						showCloseButton: !1,
						closeButtonHtml: '&times;',
						closeButtonAriaLabel: 'Close this dialog',
						loaderHtml: '',
						showLoaderOnConfirm: !1,
						showLoaderOnDeny: !1,
						imageUrl: void 0,
						imageWidth: void 0,
						imageHeight: void 0,
						imageAlt: '',
						timer: void 0,
						timerProgressBar: !1,
						width: void 0,
						padding: void 0,
						background: void 0,
						input: void 0,
						inputPlaceholder: '',
						inputLabel: '',
						inputValue: '',
						inputOptions: {},
						inputAutoTrim: !0,
						inputAttributes: {},
						inputValidator: void 0,
						returnInputValueOnDeny: !1,
						validationMessage: void 0,
						grow: !1,
						position: 'center',
						progressSteps: [],
						currentProgressStep: void 0,
						progressStepsDistance: void 0,
						willOpen: void 0,
						didOpen: void 0,
						didRender: void 0,
						willClose: void 0,
						didClose: void 0,
						didDestroy: void 0,
						scrollbarPadding: !0,
					},
					Re = [
						'allowEscapeKey',
						'allowOutsideClick',
						'background',
						'buttonsStyling',
						'cancelButtonAriaLabel',
						'cancelButtonColor',
						'cancelButtonText',
						'closeButtonAriaLabel',
						'closeButtonHtml',
						'color',
						'confirmButtonAriaLabel',
						'confirmButtonColor',
						'confirmButtonText',
						'currentProgressStep',
						'customClass',
						'denyButtonAriaLabel',
						'denyButtonColor',
						'denyButtonText',
						'didClose',
						'didDestroy',
						'footer',
						'hideClass',
						'html',
						'icon',
						'iconColor',
						'iconHtml',
						'imageAlt',
						'imageHeight',
						'imageUrl',
						'imageWidth',
						'preConfirm',
						'preDeny',
						'progressSteps',
						'returnFocus',
						'reverseButtons',
						'showCancelButton',
						'showCloseButton',
						'showConfirmButton',
						'showDenyButton',
						'text',
						'title',
						'titleText',
						'willClose',
					],
					de = {},
					Be = [
						'allowOutsideClick',
						'allowEnterKey',
						'backdrop',
						'focusConfirm',
						'focusDeny',
						'focusCancel',
						'returnFocus',
						'heightAuto',
						'keydownListenerCapture',
					],
					$e = (C) => Object.prototype.hasOwnProperty.call(q, C),
					ye = (C) => -1 !== Re.indexOf(C),
					Ne = (C) => de[C],
					rt = (C) => {
						$e(C) || o('Unknown parameter "'.concat(C, '"'));
					},
					at = (C) => {
						Be.includes(C) && o('The parameter "'.concat(C, '" is incompatible with toasts'));
					},
					Ge = (C) => {
						Ne(C) && _e(C, Ne(C));
					},
					ot = (C) => {
						const M = {};
						for (const V in C) M[C[V]] = 'swal2-' + C[V];
						return M;
					},
					J = ot([
						'container',
						'shown',
						'height-auto',
						'iosfix',
						'popup',
						'modal',
						'no-backdrop',
						'no-transition',
						'toast',
						'toast-shown',
						'show',
						'hide',
						'close',
						'title',
						'html-container',
						'actions',
						'confirm',
						'deny',
						'cancel',
						'default-outline',
						'footer',
						'icon',
						'icon-content',
						'image',
						'input',
						'file',
						'range',
						'select',
						'radio',
						'checkbox',
						'label',
						'textarea',
						'inputerror',
						'input-label',
						'validation-message',
						'progress-steps',
						'active-progress-step',
						'progress-step',
						'progress-step-line',
						'loader',
						'loading',
						'styled',
						'top',
						'top-start',
						'top-end',
						'top-left',
						'top-right',
						'center',
						'center-start',
						'center-end',
						'center-left',
						'center-right',
						'bottom',
						'bottom-start',
						'bottom-end',
						'bottom-left',
						'bottom-right',
						'grow-row',
						'grow-column',
						'grow-fullscreen',
						'rtl',
						'timer-progress-bar',
						'timer-progress-bar-container',
						'scrollbar-measure',
						'icon-success',
						'icon-warning',
						'icon-info',
						'icon-question',
						'icon-error',
					]),
					We = ot(['success', 'warning', 'info', 'question', 'error']),
					ce = () => document.body.querySelector('.'.concat(J.container)),
					Pe = (C) => {
						const M = ce();
						return M ? M.querySelector(C) : null;
					},
					Ie = (C) => Pe('.'.concat(C)),
					Ue = () => Ie(J.popup),
					ut = () => Ie(J.icon),
					Xe = () => Ie(J.title),
					Rt = () => Ie(J['html-container']),
					Ht = () => Ie(J.image),
					nt = () => Ie(J['progress-steps']),
					gt = () => Ie(J['validation-message']),
					ke = () => Pe('.'.concat(J.actions, ' .').concat(J.confirm)),
					yt = () => Pe('.'.concat(J.actions, ' .').concat(J.deny)),
					sn = () => Pe('.'.concat(J.loader)),
					Wt = () => Pe('.'.concat(J.actions, ' .').concat(J.cancel)),
					Ot = () => Ie(J.actions),
					ft = () => Ie(J.footer),
					Je = () => Ie(J['timer-progress-bar']),
					Fe = () => Ie(J.close),
					It = () => {
						const C = P(Ue().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(
								(V, ve) => {
									const vt = parseInt(V.getAttribute('tabindex')),
										rn = parseInt(ve.getAttribute('tabindex'));
									return vt > rn ? 1 : vt < rn ? -1 : 0;
								}
							),
							M = P(
								Ue().querySelectorAll(
									'\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
								)
							).filter((V) => '-1' !== V.getAttribute('tabindex'));
						return ((C) => {
							const M = [];
							for (let V = 0; V < C.length; V++) -1 === M.indexOf(C[V]) && M.push(C[V]);
							return M;
						})(C.concat(M)).filter((V) => xn(V));
					},
					Bt = () => !F(document.body, J['toast-shown']) && !F(document.body, J['no-backdrop']),
					Vt = () => Ue() && F(Ue(), J.toast),
					bn = { previousBodyPadding: null },
					Oe = (C, M) => {
						if (((C.textContent = ''), M)) {
							const ve = new DOMParser().parseFromString(M, 'text/html');
							P(ve.querySelector('head').childNodes).forEach((vt) => {
								C.appendChild(vt);
							}),
								P(ve.querySelector('body').childNodes).forEach((vt) => {
									C.appendChild(vt);
								});
						}
					},
					F = (C, M) => {
						if (!M) return !1;
						const V = M.split(/\s+/);
						for (let ve = 0; ve < V.length; ve++) if (!C.classList.contains(V[ve])) return !1;
						return !0;
					},
					te = (C, M, V) => {
						if (
							(((C, M) => {
								P(C.classList).forEach((V) => {
									!Object.values(J).includes(V) &&
										!Object.values(We).includes(V) &&
										!Object.values(M.showClass).includes(V) &&
										C.classList.remove(V);
								});
							})(C, M),
							M.customClass && M.customClass[V])
						) {
							if ('string' != typeof M.customClass[V] && !M.customClass[V].forEach)
								return o(
									'Invalid type of customClass.'
										.concat(V, '! Expected string or iterable object, got "')
										.concat(typeof M.customClass[V], '"')
								);
							X(C, M.customClass[V]);
						}
					},
					fe = (C, M) => {
						if (!M) return null;
						switch (M) {
							case 'select':
							case 'textarea':
							case 'file':
								return C.querySelector('.'.concat(J.popup, ' > .').concat(J[M]));
							case 'checkbox':
								return C.querySelector('.'.concat(J.popup, ' > .').concat(J.checkbox, ' input'));
							case 'radio':
								return (
									C.querySelector('.'.concat(J.popup, ' > .').concat(J.radio, ' input:checked')) ||
									C.querySelector('.'.concat(J.popup, ' > .').concat(J.radio, ' input:first-child'))
								);
							case 'range':
								return C.querySelector('.'.concat(J.popup, ' > .').concat(J.range, ' input'));
							default:
								return C.querySelector('.'.concat(J.popup, ' > .').concat(J.input));
						}
					},
					Ye = (C) => {
						if ((C.focus(), 'file' !== C.type)) {
							const M = C.value;
							(C.value = ''), (C.value = M);
						}
					},
					xe = (C, M, V) => {
						!C ||
							!M ||
							('string' == typeof M && (M = M.split(/\s+/).filter(Boolean)),
							M.forEach((ve) => {
								Array.isArray(C)
									? C.forEach((vt) => {
											V ? vt.classList.add(ve) : vt.classList.remove(ve);
									  })
									: V
									? C.classList.add(ve)
									: C.classList.remove(ve);
							}));
					},
					X = (C, M) => {
						xe(C, M, !0);
					},
					re = (C, M) => {
						xe(C, M, !1);
					},
					et = (C, M) => {
						const V = P(C.childNodes);
						for (let ve = 0; ve < V.length; ve++) if (F(V[ve], M)) return V[ve];
					},
					it = (C, M, V) => {
						V === ''.concat(parseInt(V)) && (V = parseInt(V)),
							V || 0 === parseInt(V)
								? (C.style[M] = 'number' == typeof V ? ''.concat(V, 'px') : V)
								: C.style.removeProperty(M);
					},
					_t = function (C) {
						C.style.display = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'flex';
					},
					pt = (C) => {
						C.style.display = 'none';
					},
					At = (C, M, V, ve) => {
						const vt = C.querySelector(M);
						vt && (vt.style[V] = ve);
					},
					Qt = (C, M, V) => {
						M ? _t(C, V) : pt(C);
					},
					xn = (C) => !(!C || !(C.offsetWidth || C.offsetHeight || C.getClientRects().length)),
					On = (C) => C.scrollHeight > C.clientHeight,
					An = (C) => {
						const M = window.getComputedStyle(C),
							V = parseFloat(M.getPropertyValue('animation-duration') || '0'),
							ve = parseFloat(M.getPropertyValue('transition-duration') || '0');
						return V > 0 || ve > 0;
					},
					cn = function (C) {
						let M = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						const V = Je();
						xn(V) &&
							(M && ((V.style.transition = 'none'), (V.style.width = '100%')),
							setTimeout(() => {
								(V.style.transition = 'width '.concat(C / 1e3, 's linear')), (V.style.width = '0%');
							}, 10));
					},
					Yn = () => 'undefined' == typeof window || 'undefined' == typeof document,
					Me = {},
					ue = (C) =>
						new Promise((M) => {
							if (!C) return M();
							const V = window.scrollX,
								ve = window.scrollY;
							(Me.restoreFocusTimeout = setTimeout(() => {
								Me.previousActiveElement && Me.previousActiveElement.focus
									? (Me.previousActiveElement.focus(), (Me.previousActiveElement = null))
									: document.body && document.body.focus(),
									M();
							}, 100)),
								window.scrollTo(V, ve);
						}),
					oe = '\n <div aria-labelledby="'
						.concat(J.title, '" aria-describedby="')
						.concat(J['html-container'], '" class="')
						.concat(J.popup, '" tabindex="-1">\n   <button type="button" class="')
						.concat(J.close, '"></button>\n   <ul class="')
						.concat(J['progress-steps'], '"></ul>\n   <div class="')
						.concat(J.icon, '"></div>\n   <img class="')
						.concat(J.image, '" />\n   <h2 class="')
						.concat(J.title, '" id="')
						.concat(J.title, '"></h2>\n   <div class="')
						.concat(J['html-container'], '" id="')
						.concat(J['html-container'], '"></div>\n   <input class="')
						.concat(J.input, '" />\n   <input type="file" class="')
						.concat(J.file, '" />\n   <div class="')
						.concat(
							J.range,
							'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="'
						)
						.concat(J.select, '"></select>\n   <div class="')
						.concat(J.radio, '"></div>\n   <label for="')
						.concat(J.checkbox, '" class="')
						.concat(J.checkbox, '">\n     <input type="checkbox" />\n     <span class="')
						.concat(J.label, '"></span>\n   </label>\n   <textarea class="')
						.concat(J.textarea, '"></textarea>\n   <div class="')
						.concat(J['validation-message'], '" id="')
						.concat(J['validation-message'], '"></div>\n   <div class="')
						.concat(J.actions, '">\n     <div class="')
						.concat(J.loader, '"></div>\n     <button type="button" class="')
						.concat(J.confirm, '"></button>\n     <button type="button" class="')
						.concat(J.deny, '"></button>\n     <button type="button" class="')
						.concat(J.cancel, '"></button>\n   </div>\n   <div class="')
						.concat(J.footer, '"></div>\n   <div class="')
						.concat(J['timer-progress-bar-container'], '">\n     <div class="')
						.concat(J['timer-progress-bar'], '"></div>\n   </div>\n </div>\n')
						.replace(/(^|\n)\s*/g, ''),
					ee = () => {
						Me.currentInstance.resetValidationMessage();
					},
					_n = (C) => {
						const M = (() => {
							const C = ce();
							return (
								!!C &&
								(C.remove(),
								re(
									[document.documentElement, document.body],
									[J['no-backdrop'], J['toast-shown'], J['has-column']]
								),
								!0)
							);
						})();
						if (Yn()) return void G('SweetAlert2 requires document to initialize');
						const V = document.createElement('div');
						(V.className = J.container), M && X(V, J['no-transition']), Oe(V, oe);
						const ve = ((C) => ('string' == typeof C ? document.querySelector(C) : C))(C.target);
						ve.appendChild(V),
							((C) => {
								const M = Ue();
								M.setAttribute('role', C.toast ? 'alert' : 'dialog'),
									M.setAttribute('aria-live', C.toast ? 'polite' : 'assertive'),
									C.toast || M.setAttribute('aria-modal', 'true');
							})(C),
							((C) => {
								'rtl' === window.getComputedStyle(C).direction && X(ce(), J.rtl);
							})(ve),
							(() => {
								const C = Ue(),
									M = et(C, J.input),
									V = et(C, J.file),
									ve = C.querySelector('.'.concat(J.range, ' input')),
									vt = C.querySelector('.'.concat(J.range, ' output')),
									rn = et(C, J.select),
									xi = C.querySelector('.'.concat(J.checkbox, ' input')),
									Oi = et(C, J.textarea);
								(M.oninput = ee),
									(V.onchange = ee),
									(rn.onchange = ee),
									(xi.onchange = ee),
									(Oi.oninput = ee),
									(ve.oninput = () => {
										ee(), (vt.value = ve.value);
									}),
									(ve.onchange = () => {
										ee(), (ve.nextSibling.value = ve.value);
									});
							})();
					},
					Un = (C, M) => {
						C instanceof HTMLElement ? M.appendChild(C) : 'object' == typeof C ? qe(C, M) : C && Oe(M, C);
					},
					qe = (C, M) => {
						C.jquery ? Te(M, C) : Oe(M, C.toString());
					},
					Te = (C, M) => {
						if (((C.textContent = ''), 0 in M))
							for (let V = 0; V in M; V++) C.appendChild(M[V].cloneNode(!0));
						else C.appendChild(M.cloneNode(!0));
					},
					se = (() => {
						if (Yn()) return !1;
						const C = document.createElement('div'),
							M = {
								WebkitAnimation: 'webkitAnimationEnd',
								animation: 'animationend',
							};
						for (const V in M)
							if (Object.prototype.hasOwnProperty.call(M, V) && void 0 !== C.style[V]) return M[V];
						return !1;
					})(),
					mt = (C, M) => {
						const V = Ot(),
							ve = sn();
						M.showConfirmButton || M.showDenyButton || M.showCancelButton ? _t(V) : pt(V),
							te(V, M, 'actions'),
							(function $t(C, M, V) {
								const ve = ke(),
									vt = yt(),
									rn = Wt();
								Pn(ve, 'confirm', V),
									Pn(vt, 'deny', V),
									Pn(rn, 'cancel', V),
									(function tn(C, M, V, ve) {
										if (!ve.buttonsStyling) return re([C, M, V], J.styled);
										X([C, M, V], J.styled),
											ve.confirmButtonColor &&
												((C.style.backgroundColor = ve.confirmButtonColor),
												X(C, J['default-outline'])),
											ve.denyButtonColor &&
												((M.style.backgroundColor = ve.denyButtonColor),
												X(M, J['default-outline'])),
											ve.cancelButtonColor &&
												((V.style.backgroundColor = ve.cancelButtonColor),
												X(V, J['default-outline']));
									})(ve, vt, rn, V),
									V.reverseButtons &&
										(V.toast
											? (C.insertBefore(rn, ve), C.insertBefore(vt, ve))
											: (C.insertBefore(rn, M), C.insertBefore(vt, M), C.insertBefore(ve, M)));
							})(V, ve, M),
							Oe(ve, M.loaderHtml),
							te(ve, M, 'loader');
					};
				function Pn(C, M, V) {
					Qt(C, V['show'.concat(m(M), 'Button')], 'inline-block'),
						Oe(C, V[''.concat(M, 'ButtonText')]),
						C.setAttribute('aria-label', V[''.concat(M, 'ButtonAriaLabel')]),
						(C.className = J[M]),
						te(C, V, ''.concat(M, 'Button')),
						X(C, V[''.concat(M, 'ButtonClass')]);
				}
				const bi = (C, M) => {
					const V = ce();
					!V ||
						((function Cn(C, M) {
							'string' == typeof M
								? (C.style.background = M)
								: M || X([document.documentElement, document.body], J['no-backdrop']);
						})(V, M.backdrop),
						(function ci(C, M) {
							M in J
								? X(C, J[M])
								: (o('The "position" parameter is not valid, defaulting to "center"'), X(C, J.center));
						})(V, M.position),
						(function ji(C, M) {
							if (M && 'string' == typeof M) {
								const V = 'grow-'.concat(M);
								V in J && X(C, J[V]);
							}
						})(V, M.grow),
						te(V, M, 'container'));
				};
				var Yt = {
					awaitingPromise: new WeakMap(),
					promise: new WeakMap(),
					innerParams: new WeakMap(),
					domCache: new WeakMap(),
				};
				const si = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'],
					Tt = (C) => {
						if (!dn[C.input])
							return G(
								'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
									C.input,
									'"'
								)
							);
						const M = fi(C.input),
							V = dn[C.input](M, C);
						_t(V),
							setTimeout(() => {
								Ye(V);
							});
					},
					Fn = (C, M) => {
						const V = fe(Ue(), C);
						if (V) {
							((C) => {
								for (let M = 0; M < C.attributes.length; M++) {
									const V = C.attributes[M].name;
									['type', 'value', 'style'].includes(V) || C.removeAttribute(V);
								}
							})(V);
							for (const ve in M) V.setAttribute(ve, M[ve]);
						}
					},
					pi = (C) => {
						const M = fi(C.input);
						C.customClass && X(M, C.customClass.input);
					},
					Ci = (C, M) => {
						(!C.placeholder || M.inputPlaceholder) && (C.placeholder = M.inputPlaceholder);
					},
					Ln = (C, M, V) => {
						if (V.inputLabel) {
							C.id = J.input;
							const ve = document.createElement('label'),
								vt = J['input-label'];
							ve.setAttribute('for', C.id),
								(ve.className = vt),
								X(ve, V.customClass.inputLabel),
								(ve.innerText = V.inputLabel),
								M.insertAdjacentElement('beforebegin', ve);
						}
					},
					fi = (C) => {
						const M = J[C] ? J[C] : J.input;
						return et(Ue(), M);
					},
					dn = {};
				(dn.text =
					dn.email =
					dn.password =
					dn.number =
					dn.tel =
					dn.url =
						(C, M) => (
							'string' == typeof M.inputValue || 'number' == typeof M.inputValue
								? (C.value = M.inputValue)
								: K(M.inputValue) ||
								  o(
										'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
											typeof M.inputValue,
											'"'
										)
								  ),
							Ln(C, C, M),
							Ci(C, M),
							(C.type = M.input),
							C
						)),
					(dn.file = (C, M) => (Ln(C, C, M), Ci(C, M), C)),
					(dn.range = (C, M) => {
						const V = C.querySelector('input'),
							ve = C.querySelector('output');
						return (V.value = M.inputValue), (V.type = M.input), (ve.value = M.inputValue), Ln(V, C, M), C;
					}),
					(dn.select = (C, M) => {
						if (((C.textContent = ''), M.inputPlaceholder)) {
							const V = document.createElement('option');
							Oe(V, M.inputPlaceholder),
								(V.value = ''),
								(V.disabled = !0),
								(V.selected = !0),
								C.appendChild(V);
						}
						return Ln(C, C, M), C;
					}),
					(dn.radio = (C) => ((C.textContent = ''), C)),
					(dn.checkbox = (C, M) => {
						const V = fe(Ue(), 'checkbox');
						(V.value = '1'), (V.id = J.checkbox), (V.checked = Boolean(M.inputValue));
						const ve = C.querySelector('span');
						return Oe(ve, M.inputPlaceholder), C;
					}),
					(dn.textarea = (C, M) => {
						(C.value = M.inputValue), Ci(C, M), Ln(C, C, M);
						return (
							setTimeout(() => {
								if ('MutationObserver' in window) {
									const ve = parseInt(window.getComputedStyle(Ue()).width);
									new MutationObserver(() => {
										const rn =
											C.offsetWidth +
											((ve) =>
												parseInt(window.getComputedStyle(ve).marginLeft) +
												parseInt(window.getComputedStyle(ve).marginRight))(C);
										Ue().style.width = rn > ve ? ''.concat(rn, 'px') : null;
									}).observe(C, {
										attributes: !0,
										attributeFilter: ['style'],
									});
								}
							}),
							C
						);
					});
				const di = (C, M) => {
						const V = Rt();
						te(V, M, 'htmlContainer'),
							M.html
								? (Un(M.html, V), _t(V, 'block'))
								: M.text
								? ((V.textContent = M.text), _t(V, 'block'))
								: pt(V),
							((C, M) => {
								const V = Ue(),
									ve = Yt.innerParams.get(C),
									vt = !ve || M.input !== ve.input;
								si.forEach((rn) => {
									const xi = J[rn],
										Oi = et(V, xi);
									Fn(rn, M.inputAttributes), (Oi.className = xi), vt && pt(Oi);
								}),
									M.input && (vt && Tt(M), pi(M));
							})(C, M);
					},
					Kn = (C, M) => {
						for (const V in We) M.icon !== V && re(C, We[V]);
						X(C, We[M.icon]), ni(C, M), Ui(), te(C, M, 'icon');
					},
					Ui = () => {
						const C = Ue(),
							M = window.getComputedStyle(C).getPropertyValue('background-color'),
							V = C.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
						for (let ve = 0; ve < V.length; ve++) V[ve].style.backgroundColor = M;
					},
					oi = (C, M) => {
						(C.textContent = ''),
							Oe(
								C,
								M.iconHtml
									? Fi(M.iconHtml)
									: 'success' === M.icon
									? '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '
									: 'error' === M.icon
									? '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '
									: Fi(
											{
												question: '?',
												warning: '!',
												info: 'i',
											}[M.icon]
									  )
							);
					},
					ni = (C, M) => {
						if (M.iconColor) {
							(C.style.color = M.iconColor), (C.style.borderColor = M.iconColor);
							for (const V of [
								'.swal2-success-line-tip',
								'.swal2-success-line-long',
								'.swal2-x-mark-line-left',
								'.swal2-x-mark-line-right',
							])
								At(C, V, 'backgroundColor', M.iconColor);
							At(C, '.swal2-success-ring', 'borderColor', M.iconColor);
						}
					},
					Fi = (C) => '<div class="'.concat(J['icon-content'], '">').concat(C, '</div>'),
					Ni = (C, M) => {
						const V = nt();
						if (!M.progressSteps || 0 === M.progressSteps.length) return pt(V);
						_t(V),
							(V.textContent = ''),
							M.currentProgressStep >= M.progressSteps.length &&
								o(
									'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'
								),
							M.progressSteps.forEach((ve, vt) => {
								const rn = ((C) => {
									const M = document.createElement('li');
									return X(M, J['progress-step']), Oe(M, C), M;
								})(ve);
								if (
									(V.appendChild(rn),
									vt === M.currentProgressStep && X(rn, J['active-progress-step']),
									vt !== M.progressSteps.length - 1)
								) {
									const xi = ((C) => {
										const M = document.createElement('li');
										return (
											X(M, J['progress-step-line']),
											C.progressStepsDistance && (M.style.width = C.progressStepsDistance),
											M
										);
									})(M);
									V.appendChild(xi);
								}
							});
					},
					wi = (C, M) => {
						(C.className = ''.concat(J.popup, ' ').concat(xn(C) ? M.showClass.popup : '')),
							M.toast
								? (X([document.documentElement, document.body], J['toast-shown']), X(C, J.toast))
								: X(C, J.modal),
							te(C, M, 'popup'),
							'string' == typeof M.customClass && X(C, M.customClass),
							M.icon && X(C, J['icon-'.concat(M.icon)]);
					},
					mi = (C, M) => {
						((C, M) => {
							const V = ce(),
								ve = Ue();
							M.toast
								? (it(V, 'width', M.width), (ve.style.width = '100%'), ve.insertBefore(sn(), ut()))
								: it(ve, 'width', M.width),
								it(ve, 'padding', M.padding),
								M.color && (ve.style.color = M.color),
								M.background && (ve.style.background = M.background),
								pt(gt()),
								wi(ve, M);
						})(0, M),
							bi(0, M),
							Ni(0, M),
							((C, M) => {
								const V = Yt.innerParams.get(C),
									ve = ut();
								V && M.icon === V.icon
									? (oi(ve, M), Kn(ve, M))
									: M.icon || M.iconHtml
									? M.icon && -1 === Object.keys(We).indexOf(M.icon)
										? (G(
												'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
													M.icon,
													'"'
												)
										  ),
										  pt(ve))
										: (_t(ve), oi(ve, M), Kn(ve, M), X(ve, M.showClass.icon))
									: pt(ve);
							})(C, M),
							((C, M) => {
								const V = Ht();
								if (!M.imageUrl) return pt(V);
								_t(V, ''),
									V.setAttribute('src', M.imageUrl),
									V.setAttribute('alt', M.imageAlt),
									it(V, 'width', M.imageWidth),
									it(V, 'height', M.imageHeight),
									(V.className = J.image),
									te(V, M, 'image');
							})(0, M),
							((C, M) => {
								const V = Xe();
								Qt(V, M.title || M.titleText, 'block'),
									M.title && Un(M.title, V),
									M.titleText && (V.innerText = M.titleText),
									te(V, M, 'title');
							})(0, M),
							((C, M) => {
								const V = Fe();
								Oe(V, M.closeButtonHtml),
									te(V, M, 'closeButton'),
									Qt(V, M.showCloseButton),
									V.setAttribute('aria-label', M.closeButtonAriaLabel);
							})(0, M),
							di(C, M),
							mt(0, M),
							((C, M) => {
								const V = ft();
								Qt(V, M.footer), M.footer && Un(M.footer, V), te(V, M, 'footer');
							})(0, M),
							'function' == typeof M.didRender && M.didRender(Ue());
					},
					Zi = Object.freeze({
						cancel: 'cancel',
						backdrop: 'backdrop',
						close: 'close',
						esc: 'esc',
						timer: 'timer',
					}),
					Jn = () => {
						P(document.body.children).forEach((M) => {
							M.hasAttribute('data-previous-aria-hidden')
								? (M.setAttribute('aria-hidden', M.getAttribute('data-previous-aria-hidden')),
								  M.removeAttribute('data-previous-aria-hidden'))
								: M.removeAttribute('aria-hidden');
						});
					},
					qi = ['swal-title', 'swal-html', 'swal-footer'],
					br = (C) => {
						const M = {};
						return (
							P(C.querySelectorAll('swal-param')).forEach((V) => {
								Cr(V, ['name', 'value']);
								const ve = V.getAttribute('name'),
									vt = V.getAttribute('value');
								'boolean' == typeof q[ve] && 'false' === vt && (M[ve] = !1),
									'object' == typeof q[ve] && (M[ve] = JSON.parse(vt));
							}),
							M
						);
					},
					li = (C) => {
						const M = {};
						return (
							P(C.querySelectorAll('swal-button')).forEach((V) => {
								Cr(V, ['type', 'color', 'aria-label']);
								const ve = V.getAttribute('type');
								(M[''.concat(ve, 'ButtonText')] = V.innerHTML),
									(M['show'.concat(m(ve), 'Button')] = !0),
									V.hasAttribute('color') &&
										(M[''.concat(ve, 'ButtonColor')] = V.getAttribute('color')),
									V.hasAttribute('aria-label') &&
										(M[''.concat(ve, 'ButtonAriaLabel')] = V.getAttribute('aria-label'));
							}),
							M
						);
					},
					_i = (C) => {
						const M = {},
							V = C.querySelector('swal-image');
						return (
							V &&
								(Cr(V, ['src', 'width', 'height', 'alt']),
								V.hasAttribute('src') && (M.imageUrl = V.getAttribute('src')),
								V.hasAttribute('width') && (M.imageWidth = V.getAttribute('width')),
								V.hasAttribute('height') && (M.imageHeight = V.getAttribute('height')),
								V.hasAttribute('alt') && (M.imageAlt = V.getAttribute('alt'))),
							M
						);
					},
					zi = (C) => {
						const M = {},
							V = C.querySelector('swal-icon');
						return (
							V &&
								(Cr(V, ['type', 'color']),
								V.hasAttribute('type') && (M.icon = V.getAttribute('type')),
								V.hasAttribute('color') && (M.iconColor = V.getAttribute('color')),
								(M.iconHtml = V.innerHTML)),
							M
						);
					},
					Ar = (C) => {
						const M = {},
							V = C.querySelector('swal-input');
						V &&
							(Cr(V, ['type', 'label', 'placeholder', 'value']),
							(M.input = V.getAttribute('type') || 'text'),
							V.hasAttribute('label') && (M.inputLabel = V.getAttribute('label')),
							V.hasAttribute('placeholder') && (M.inputPlaceholder = V.getAttribute('placeholder')),
							V.hasAttribute('value') && (M.inputValue = V.getAttribute('value')));
						const ve = C.querySelectorAll('swal-input-option');
						return (
							ve.length &&
								((M.inputOptions = {}),
								P(ve).forEach((vt) => {
									Cr(vt, ['value']);
									const rn = vt.getAttribute('value');
									M.inputOptions[rn] = vt.innerHTML;
								})),
							M
						);
					},
					hs = (C, M) => {
						const V = {};
						for (const ve in M) {
							const vt = M[ve],
								rn = C.querySelector(vt);
							rn && (Cr(rn, []), (V[vt.replace(/^swal-/, '')] = rn.innerHTML.trim()));
						}
						return V;
					},
					Jr = (C) => {
						const M = qi.concat([
							'swal-param',
							'swal-button',
							'swal-image',
							'swal-icon',
							'swal-input',
							'swal-input-option',
						]);
						P(C.children).forEach((V) => {
							const ve = V.tagName.toLowerCase();
							-1 === M.indexOf(ve) && o('Unrecognized element <'.concat(ve, '>'));
						});
					},
					Cr = (C, M) => {
						P(C.attributes).forEach((V) => {
							-1 === M.indexOf(V.name) &&
								o([
									'Unrecognized attribute "'
										.concat(V.name, '" on <')
										.concat(C.tagName.toLowerCase(), '>.'),
									''.concat(
										M.length
											? 'Allowed attributes are: '.concat(M.join(', '))
											: 'To set the value, use HTML within the element.'
									),
								]);
						});
					};
				var wr = {
					email: (C, M) =>
						/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(C)
							? Promise.resolve()
							: Promise.resolve(M || 'Invalid email address'),
					url: (C, M) =>
						/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
							C
						)
							? Promise.resolve()
							: Promise.resolve(M || 'Invalid URL'),
				};
				function es(C) {
					(function Dr(C) {
						C.inputValidator ||
							Object.keys(wr).forEach((M) => {
								C.input === M && (C.inputValidator = wr[M]);
							});
					})(C),
						C.showLoaderOnConfirm &&
							!C.preConfirm &&
							o(
								'showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request'
							),
						(function zr(C) {
							(!C.target ||
								('string' == typeof C.target && !document.querySelector(C.target)) ||
								('string' != typeof C.target && !C.target.appendChild)) &&
								(o('Target parameter is not valid, defaulting to "body"'), (C.target = 'body'));
						})(C),
						'string' == typeof C.title && (C.title = C.title.split('\n').join('<br />')),
						_n(C);
				}
				class kr {
					constructor(M, V) {
						(this.callback = M), (this.remaining = V), (this.running = !1), this.start();
					}
					start() {
						return (
							this.running ||
								((this.running = !0),
								(this.started = new Date()),
								(this.id = setTimeout(this.callback, this.remaining))),
							this.remaining
						);
					}
					stop() {
						return (
							this.running &&
								((this.running = !1),
								clearTimeout(this.id),
								(this.remaining -= new Date().getTime() - this.started.getTime())),
							this.remaining
						);
					}
					increase(M) {
						const V = this.running;
						return V && this.stop(), (this.remaining += M), V && this.start(), this.remaining;
					}
					getTimerLeft() {
						return this.running && (this.stop(), this.start()), this.remaining;
					}
					isRunning() {
						return this.running;
					}
				}
				const ts = () => {
						null === bn.previousBodyPadding &&
							document.body.scrollHeight > window.innerHeight &&
							((bn.previousBodyPadding = parseInt(
								window.getComputedStyle(document.body).getPropertyValue('padding-right')
							)),
							(document.body.style.paddingRight = ''.concat(
								bn.previousBodyPadding +
									(() => {
										const C = document.createElement('div');
										(C.className = J['scrollbar-measure']), document.body.appendChild(C);
										const M = C.getBoundingClientRect().width - C.clientWidth;
										return document.body.removeChild(C), M;
									})(),
								'px'
							)));
					},
					hr = () => {
						const C = navigator.userAgent,
							M = !!C.match(/iPad/i) || !!C.match(/iPhone/i),
							V = !!C.match(/WebKit/i);
						if (M && V && !C.match(/CriOS/i)) {
							const vt = 44;
							Ue().scrollHeight > window.innerHeight - vt &&
								(ce().style.paddingBottom = ''.concat(vt, 'px'));
						}
					},
					tr = () => {
						const C = ce();
						let M;
						(C.ontouchstart = (V) => {
							M = Mr(V);
						}),
							(C.ontouchmove = (V) => {
								M && (V.preventDefault(), V.stopPropagation());
							});
					},
					Mr = (C) => {
						const M = C.target,
							V = ce();
						return !(
							vi(C) ||
							Ms(C) ||
							(M !== V &&
								(On(V) ||
									'INPUT' === M.tagName ||
									'TEXTAREA' === M.tagName ||
									(On(Rt()) && Rt().contains(M))))
						);
					},
					vi = (C) => C.touches && C.touches.length && 'stylus' === C.touches[0].touchType,
					Ms = (C) => C.touches && C.touches.length > 1,
					Bi = (C) => {
						const M = ce(),
							V = Ue();
						'function' == typeof C.willOpen && C.willOpen(V);
						const vt = window.getComputedStyle(document.body).overflowY;
						fr(M, V, C),
							setTimeout(() => {
								xr(M, V);
							}, 10),
							Bt() &&
								(Qi(M, C.scrollbarPadding, vt),
								P(document.body.children).forEach((M) => {
									M === ce() ||
										M.contains(ce()) ||
										(M.hasAttribute('aria-hidden') &&
											M.setAttribute('data-previous-aria-hidden', M.getAttribute('aria-hidden')),
										M.setAttribute('aria-hidden', 'true'));
								})),
							!Vt() && !Me.previousActiveElement && (Me.previousActiveElement = document.activeElement),
							'function' == typeof C.didOpen && setTimeout(() => C.didOpen(V)),
							re(M, J['no-transition']);
					},
					pr = (C) => {
						const M = Ue();
						if (C.target !== M) return;
						const V = ce();
						M.removeEventListener(se, pr), (V.style.overflowY = 'auto');
					},
					xr = (C, M) => {
						se && An(M)
							? ((C.style.overflowY = 'hidden'), M.addEventListener(se, pr))
							: (C.style.overflowY = 'auto');
					},
					Qi = (C, M, V) => {
						(() => {
							if (
								((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
									('MacIntel' === navigator.platform && navigator.maxTouchPoints > 1)) &&
								!F(document.body, J.iosfix)
							) {
								const M = document.body.scrollTop;
								(document.body.style.top = ''.concat(-1 * M, 'px')),
									X(document.body, J.iosfix),
									tr(),
									hr();
							}
						})(),
							M && 'hidden' !== V && ts(),
							setTimeout(() => {
								C.scrollTop = 0;
							});
					},
					fr = (C, M, V) => {
						X(C, V.showClass.backdrop),
							M.style.setProperty('opacity', '0', 'important'),
							_t(M, 'grid'),
							setTimeout(() => {
								X(M, V.showClass.popup), M.style.removeProperty('opacity');
							}, 10),
							X([document.documentElement, document.body], J.shown),
							V.heightAuto &&
								V.backdrop &&
								!V.toast &&
								X([document.documentElement, document.body], J['height-auto']);
					},
					Xi = (C) => {
						let M = Ue();
						M || new Zs(), (M = Ue());
						const V = sn();
						Vt() ? pt(ut()) : ir(M, C),
							_t(V),
							M.setAttribute('data-loading', !0),
							M.setAttribute('aria-busy', !0),
							M.focus();
					},
					ir = (C, M) => {
						const V = Ot(),
							ve = sn();
						!M && xn(ke()) && (M = ke()),
							_t(V),
							M && (pt(M), ve.setAttribute('data-button-to-replace', M.className)),
							ve.parentNode.insertBefore(ve, M),
							X([C, V], J.loading);
					},
					Di = (C) => (C.checked ? 1 : 0),
					rr = (C) => (C.checked ? C.value : null),
					ns = (C) => (C.files.length ? (null !== C.getAttribute('multiple') ? C.files : C.files[0]) : null),
					is = (C, M) => {
						const V = Ue(),
							ve = (vt) => ui[M.input](V, Nr(vt), M);
						ae(M.inputOptions) || K(M.inputOptions)
							? (Xi(ke()),
							  Q(M.inputOptions).then((vt) => {
									C.hideLoading(), ve(vt);
							  }))
							: 'object' == typeof M.inputOptions
							? ve(M.inputOptions)
							: G(
									'Unexpected type of inputOptions! Expected object, Map or Promise, got '.concat(
										typeof M.inputOptions
									)
							  );
					},
					Lr = (C, M) => {
						const V = C.getInput();
						pt(V),
							Q(M.inputValue)
								.then((ve) => {
									(V.value = 'number' === M.input ? parseFloat(ve) || 0 : ''.concat(ve)),
										_t(V),
										V.focus(),
										C.hideLoading();
								})
								.catch((ve) => {
									G('Error in inputValue promise: '.concat(ve)),
										(V.value = ''),
										_t(V),
										V.focus(),
										C.hideLoading();
								});
					},
					ui = {
						select: (C, M, V) => {
							const ve = et(C, J.select),
								vt = (rn, xi, Oi) => {
									const Vi = document.createElement('option');
									(Vi.value = Oi),
										Oe(Vi, xi),
										(Vi.selected = In(Oi, V.inputValue)),
										rn.appendChild(Vi);
								};
							M.forEach((rn) => {
								const xi = rn[0],
									Oi = rn[1];
								if (Array.isArray(Oi)) {
									const Vi = document.createElement('optgroup');
									(Vi.label = xi),
										(Vi.disabled = !1),
										ve.appendChild(Vi),
										Oi.forEach((Or) => vt(Vi, Or[1], Or[0]));
								} else vt(ve, Oi, xi);
							}),
								ve.focus();
						},
						radio: (C, M, V) => {
							const ve = et(C, J.radio);
							M.forEach((rn) => {
								const xi = rn[0],
									Oi = rn[1],
									Vi = document.createElement('input'),
									Or = document.createElement('label');
								(Vi.type = 'radio'),
									(Vi.name = J.radio),
									(Vi.value = xi),
									In(xi, V.inputValue) && (Vi.checked = !0);
								const gs = document.createElement('span');
								Oe(gs, Oi),
									(gs.className = J.label),
									Or.appendChild(Vi),
									Or.appendChild(gs),
									ve.appendChild(Or);
							});
							const vt = ve.querySelectorAll('input');
							vt.length && vt[0].focus();
						},
					},
					Nr = (C) => {
						const M = [];
						return (
							'undefined' != typeof Map && C instanceof Map
								? C.forEach((V, ve) => {
										let vt = V;
										'object' == typeof vt && (vt = Nr(vt)), M.push([ve, vt]);
								  })
								: Object.keys(C).forEach((V) => {
										let ve = C[V];
										'object' == typeof ve && (ve = Nr(ve)), M.push([V, ve]);
								  }),
							M
						);
					},
					In = (C, M) => M && M.toString() === C.toString(),
					k = (C, M) => {
						const V = Yt.innerParams.get(C);
						if (!V.input)
							return G(
								'The "input" parameter is needed to be set when using returnInputValueOn'.concat(m(M))
							);
						const ve = ((C, M) => {
							const V = C.getInput();
							if (!V) return null;
							switch (M.input) {
								case 'checkbox':
									return Di(V);
								case 'radio':
									return rr(V);
								case 'file':
									return ns(V);
								default:
									return M.inputAutoTrim ? V.value.trim() : V.value;
							}
						})(C, V);
						V.inputValidator
							? z(C, ve, M)
							: C.getInput().checkValidity()
							? 'deny' === M
								? I(C, ve)
								: st(C, ve)
							: (C.enableButtons(), C.showValidationMessage(V.validationMessage));
					},
					z = (C, M, V) => {
						const ve = Yt.innerParams.get(C);
						C.disableInput(),
							Promise.resolve()
								.then(() => Q(ve.inputValidator(M, ve.validationMessage)))
								.then((rn) => {
									C.enableButtons(),
										C.enableInput(),
										rn ? C.showValidationMessage(rn) : 'deny' === V ? I(C, M) : st(C, M);
								});
					},
					I = (C, M) => {
						const V = Yt.innerParams.get(C || void 0);
						V.showLoaderOnDeny && Xi(yt()),
							V.preDeny
								? (Yt.awaitingPromise.set(C || void 0, !0),
								  Promise.resolve()
										.then(() => Q(V.preDeny(M, V.validationMessage)))
										.then((vt) => {
											!1 === vt
												? C.hideLoading()
												: C.closePopup({
														isDenied: !0,
														value: void 0 === vt ? M : vt,
												  });
										})
										.catch((vt) => Ee(C || void 0, vt)))
								: C.closePopup({ isDenied: !0, value: M });
					},
					Y = (C, M) => {
						C.closePopup({ isConfirmed: !0, value: M });
					},
					Ee = (C, M) => {
						C.rejectPromise(M);
					},
					st = (C, M) => {
						const V = Yt.innerParams.get(C || void 0);
						V.showLoaderOnConfirm && Xi(),
							V.preConfirm
								? (C.resetValidationMessage(),
								  Yt.awaitingPromise.set(C || void 0, !0),
								  Promise.resolve()
										.then(() => Q(V.preConfirm(M, V.validationMessage)))
										.then((vt) => {
											xn(gt()) || !1 === vt ? C.hideLoading() : Y(C, void 0 === vt ? M : vt);
										})
										.catch((vt) => Ee(C || void 0, vt)))
								: Y(C, M);
					},
					Lt = (C, M, V) => {
						M.popup.onclick = () => {
							const ve = Yt.innerParams.get(C);
							(ve && (Nn(ve) || ve.timer || ve.input)) || V(Zi.close);
						};
					},
					Nn = (C) => C.showConfirmButton || C.showDenyButton || C.showCancelButton || C.showCloseButton;
				let on = !1;
				const Gt = (C) => {
						C.popup.onmousedown = () => {
							C.container.onmouseup = function (M) {
								(C.container.onmouseup = void 0), M.target === C.container && (on = !0);
							};
						};
					},
					qt = (C) => {
						C.container.onmousedown = () => {
							C.popup.onmouseup = function (M) {
								(C.popup.onmouseup = void 0),
									(M.target === C.popup || C.popup.contains(M.target)) && (on = !0);
							};
						};
					},
					R = (C, M, V) => {
						M.container.onclick = (ve) => {
							const vt = Yt.innerParams.get(C);
							on ? (on = !1) : ve.target === M.container && De(vt.allowOutsideClick) && V(Zi.backdrop);
						};
					},
					D = () => ke() && ke().click(),
					Hn = (C, M, V) => {
						const ve = It();
						if (ve.length)
							return (M += V) === ve.length ? (M = 0) : -1 === M && (M = ve.length - 1), ve[M].focus();
						Ue().focus();
					},
					Ti = ['ArrowRight', 'ArrowDown'],
					gr = ['ArrowLeft', 'ArrowUp'],
					sr = (C, M, V) => {
						const ve = Yt.innerParams.get(C);
						!ve ||
							(ve.stopKeydownPropagation && M.stopPropagation(),
							'Enter' === M.key
								? Dt(C, M, ve)
								: 'Tab' === M.key
								? N(M, ve)
								: [...Ti, ...gr].includes(M.key)
								? h(M.key)
								: 'Escape' === M.key && p(M, ve, V));
					},
					Dt = (C, M, V) => {
						if (
							!M.isComposing &&
							M.target &&
							C.getInput() &&
							M.target.outerHTML === C.getInput().outerHTML
						) {
							if (['textarea', 'file'].includes(V.input)) return;
							D(), M.preventDefault();
						}
					},
					N = (C, M) => {
						const V = C.target,
							ve = It();
						let vt = -1;
						for (let rn = 0; rn < ve.length; rn++)
							if (V === ve[rn]) {
								vt = rn;
								break;
							}
						Hn(0, vt, C.shiftKey ? -1 : 1), C.stopPropagation(), C.preventDefault();
					},
					h = (C) => {
						if (![ke(), yt(), Wt()].includes(document.activeElement)) return;
						const vt = Ti.includes(C) ? 'nextElementSibling' : 'previousElementSibling',
							rn = document.activeElement[vt];
						rn instanceof HTMLElement && rn.focus();
					},
					p = (C, M, V) => {
						De(M.allowEscapeKey) && (C.preventDefault(), V(Zi.esc));
					},
					B = (C) => C instanceof Element || ((C) => 'object' == typeof C && C.jquery)(C);
				const dt = () => {
						if (Me.timeout)
							return (
								(() => {
									const C = Je(),
										M = parseInt(window.getComputedStyle(C).width);
									C.style.removeProperty('transition'), (C.style.width = '100%');
									const ve = (M / parseInt(window.getComputedStyle(C).width)) * 100;
									C.style.removeProperty('transition'), (C.style.width = ''.concat(ve, '%'));
								})(),
								Me.timeout.stop()
							);
					},
					St = () => {
						if (Me.timeout) {
							const C = Me.timeout.start();
							return cn(C), C;
						}
					};
				let an = !1;
				const fn = {};
				const ii = (C) => {
					for (let M = C.target; M && M !== document; M = M.parentNode)
						for (const V in fn) {
							const ve = M.getAttribute(V);
							if (ve) return void fn[V].fire({ template: ve });
						}
				};
				var ri = Object.freeze({
					isValidParameter: $e,
					isUpdatableParameter: ye,
					isDeprecatedParameter: Ne,
					argsToParams: (C) => {
						const M = {};
						return (
							'object' != typeof C[0] || B(C[0])
								? ['title', 'html', 'icon'].forEach((V, ve) => {
										const vt = C[ve];
										'string' == typeof vt || B(vt)
											? (M[V] = vt)
											: void 0 !== vt &&
											  G(
													'Unexpected type of '
														.concat(V, '! Expected "string" or "Element", got ')
														.concat(typeof vt)
											  );
								  })
								: Object.assign(M, C[0]),
							M
						);
					},
					isVisible: () => xn(Ue()),
					clickConfirm: D,
					clickDeny: () => yt() && yt().click(),
					clickCancel: () => Wt() && Wt().click(),
					getContainer: ce,
					getPopup: Ue,
					getTitle: Xe,
					getHtmlContainer: Rt,
					getImage: Ht,
					getIcon: ut,
					getInputLabel: () => Ie(J['input-label']),
					getCloseButton: Fe,
					getActions: Ot,
					getConfirmButton: ke,
					getDenyButton: yt,
					getCancelButton: Wt,
					getLoader: sn,
					getFooter: ft,
					getTimerProgressBar: Je,
					getFocusableElements: It,
					getValidationMessage: gt,
					isLoading: () => Ue().hasAttribute('data-loading'),
					fire: function me() {
						const C = this;
						for (var M = arguments.length, V = new Array(M), ve = 0; ve < M; ve++) V[ve] = arguments[ve];
						return new C(...V);
					},
					mixin: function Ce(C) {
						return class M extends this {
							_main(ve, vt) {
								return super._main(ve, Object.assign({}, C, vt));
							}
						};
					},
					showLoading: Xi,
					enableLoading: Xi,
					getTimerLeft: () => Me.timeout && Me.timeout.getTimerLeft(),
					stopTimer: dt,
					resumeTimer: St,
					toggleTimer: () => {
						const C = Me.timeout;
						return C && (C.running ? dt() : St());
					},
					increaseTimer: (C) => {
						if (Me.timeout) {
							const M = Me.timeout.increase(C);
							return cn(M, !0), M;
						}
					},
					isTimerRunning: () => Me.timeout && Me.timeout.isRunning(),
					bindClickHandler: function Sn() {
						(fn[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'data-swal-template'] =
							this),
							an || (document.body.addEventListener('click', ii), (an = !0));
					},
				});
				function Ai() {
					const C = Yt.innerParams.get(this);
					if (!C) return;
					const M = Yt.domCache.get(this);
					pt(M.loader),
						Vt() ? C.icon && _t(ut()) : Ri(M),
						re([M.popup, M.actions], J.loading),
						M.popup.removeAttribute('aria-busy'),
						M.popup.removeAttribute('data-loading'),
						(M.confirmButton.disabled = !1),
						(M.denyButton.disabled = !1),
						(M.cancelButton.disabled = !1);
				}
				const Ri = (C) => {
					const M = C.popup.getElementsByClassName(C.loader.getAttribute('data-button-to-replace'));
					M.length ? _t(M[0], 'inline-block') : !xn(ke()) && !xn(yt()) && !xn(Wt()) && pt(C.actions);
				};
				var ki = {
					swalPromiseResolve: new WeakMap(),
					swalPromiseReject: new WeakMap(),
				};
				function Mi(C, M, V, ve) {
					Vt()
						? Zt(C, ve)
						: (ue(V).then(() => Zt(C, ve)),
						  Me.keydownTarget.removeEventListener('keydown', Me.keydownHandler, {
								capture: Me.keydownListenerCapture,
						  }),
						  (Me.keydownHandlerAdded = !1)),
						/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
							? (M.setAttribute('style', 'display:none !important'),
							  M.removeAttribute('class'),
							  (M.innerHTML = ''))
							: M.remove(),
						Bt() &&
							(null !== bn.previousBodyPadding &&
								((document.body.style.paddingRight = ''.concat(bn.previousBodyPadding, 'px')),
								(bn.previousBodyPadding = null)),
							(() => {
								if (F(document.body, J.iosfix)) {
									const C = parseInt(document.body.style.top, 10);
									re(document.body, J.iosfix),
										(document.body.style.top = ''),
										(document.body.scrollTop = -1 * C);
								}
							})(),
							Jn()),
						(function or() {
							re(
								[document.documentElement, document.body],
								[J.shown, J['height-auto'], J['no-backdrop'], J['toast-shown']]
							);
						})();
				}
				function ar(C) {
					C = fs(C);
					const M = ki.swalPromiseResolve.get(this),
						V = ps(this);
					this.isAwaitingPromise() ? C.isDismissed || (_r(this), M(C)) : V && M(C);
				}
				const ps = (C) => {
					const M = Ue();
					if (!M) return !1;
					const V = Yt.innerParams.get(C);
					if (!V || F(M, V.hideClass.popup)) return !1;
					re(M, V.showClass.popup), X(M, V.hideClass.popup);
					const ve = ce();
					return re(ve, V.showClass.backdrop), X(ve, V.hideClass.backdrop), ss(C, M, V), !0;
				};
				const _r = (C) => {
						C.isAwaitingPromise() && (Yt.awaitingPromise.delete(C), Yt.innerParams.get(C) || C._destroy());
					},
					fs = (C) =>
						void 0 === C
							? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
							: Object.assign(
									{
										isConfirmed: !1,
										isDenied: !1,
										isDismissed: !1,
									},
									C
							  ),
					ss = (C, M, V) => {
						const ve = ce(),
							vt = se && An(M);
						'function' == typeof V.willClose && V.willClose(M),
							vt ? jt(C, M, ve, V.returnFocus, V.didClose) : Mi(C, ve, V.returnFocus, V.didClose);
					},
					jt = (C, M, V, ve, vt) => {
						(Me.swalCloseEventFinishedCallback = Mi.bind(null, C, V, ve, vt)),
							M.addEventListener(se, function (rn) {
								rn.target === M &&
									(Me.swalCloseEventFinishedCallback(), delete Me.swalCloseEventFinishedCallback);
							});
					},
					Zt = (C, M) => {
						setTimeout(() => {
							'function' == typeof M && M.bind(C.params)(), C._destroy();
						});
					};
				function Xt(C, M, V) {
					const ve = Yt.domCache.get(C);
					M.forEach((vt) => {
						ve[vt].disabled = V;
					});
				}
				function ln(C, M) {
					if (!C) return !1;
					if ('radio' === C.type) {
						const ve = C.parentNode.parentNode.querySelectorAll('input');
						for (let vt = 0; vt < ve.length; vt++) ve[vt].disabled = M;
					} else C.disabled = M;
				}
				const Yi = (C) => {
						Ji(C),
							delete C.params,
							delete Me.keydownHandler,
							delete Me.keydownTarget,
							delete Me.currentInstance;
					},
					Ji = (C) => {
						C.isAwaitingPromise() ? (lr(Yt, C), Yt.awaitingPromise.set(C, !0)) : (lr(ki, C), lr(Yt, C));
					},
					lr = (C, M) => {
						for (const V in C) C[V].delete(M);
					};
				var $r = Object.freeze({
					hideLoading: Ai,
					disableLoading: Ai,
					getInput: function Rr(C) {
						const M = Yt.innerParams.get(C || this),
							V = Yt.domCache.get(C || this);
						return V ? fe(V.popup, M.input) : null;
					},
					close: ar,
					isAwaitingPromise: function Er() {
						return !!Yt.awaitingPromise.get(this);
					},
					rejectPromise: function rs(C) {
						const M = ki.swalPromiseReject.get(this);
						_r(this), M && M(C);
					},
					closePopup: ar,
					closeModal: ar,
					closeToast: ar,
					enableButtons: function Zn() {
						Xt(this, ['confirmButton', 'denyButton', 'cancelButton'], !1);
					},
					disableButtons: function Vn() {
						Xt(this, ['confirmButton', 'denyButton', 'cancelButton'], !0);
					},
					enableInput: function $i() {
						return ln(this.getInput(), !1);
					},
					disableInput: function Br() {
						return ln(this.getInput(), !0);
					},
					showValidationMessage: function Xn(C) {
						const M = Yt.domCache.get(this),
							V = Yt.innerParams.get(this);
						Oe(M.validationMessage, C),
							(M.validationMessage.className = J['validation-message']),
							V.customClass &&
								V.customClass.validationMessage &&
								X(M.validationMessage, V.customClass.validationMessage),
							_t(M.validationMessage);
						const ve = this.getInput();
						ve &&
							(ve.setAttribute('aria-invalid', !0),
							ve.setAttribute('aria-describedby', J['validation-message']),
							Ye(ve),
							X(ve, J.inputerror));
					},
					resetValidationMessage: function Ws() {
						const C = Yt.domCache.get(this);
						C.validationMessage && pt(C.validationMessage);
						const M = this.getInput();
						M &&
							(M.removeAttribute('aria-invalid'),
							M.removeAttribute('aria-describedby'),
							re(M, J.inputerror));
					},
					getProgressSteps: function co() {
						return Yt.domCache.get(this).progressSteps;
					},
					update: function Gn(C) {
						const M = Ue(),
							V = Yt.innerParams.get(this);
						if (!M || F(M, V.hideClass.popup))
							return o(
								"You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
							);
						const ve = {};
						Object.keys(C).forEach((rn) => {
							ye(rn)
								? (ve[rn] = C[rn])
								: o(
										'Invalid parameter to update: "'.concat(
											rn,
											'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'
										)
								  );
						});
						const vt = Object.assign({}, V, ve);
						mi(this, vt),
							Yt.innerParams.set(this, vt),
							Object.defineProperties(this, {
								params: {
									value: Object.assign({}, this.params, C),
									writable: !1,
									enumerable: !0,
								},
							});
					},
					_destroy: function vr() {
						const C = Yt.domCache.get(this),
							M = Yt.innerParams.get(this);
						M
							? (C.popup &&
									Me.swalCloseEventFinishedCallback &&
									(Me.swalCloseEventFinishedCallback(), delete Me.swalCloseEventFinishedCallback),
							  Me.deferDisposalTimer &&
									(clearTimeout(Me.deferDisposalTimer), delete Me.deferDisposalTimer),
							  'function' == typeof M.didDestroy && M.didDestroy(),
							  Yi(this))
							: Ji(this);
					},
				});
				let Ks;
				class cr {
					constructor() {
						if ('undefined' == typeof window) return;
						Ks = this;
						for (var M = arguments.length, V = new Array(M), ve = 0; ve < M; ve++) V[ve] = arguments[ve];
						const vt = Object.freeze(this.constructor.argsToParams(V));
						Object.defineProperties(this, {
							params: {
								value: vt,
								writable: !1,
								enumerable: !0,
								configurable: !0,
							},
						});
						const rn = this._main(this.params);
						Yt.promise.set(this, rn);
					}
					_main(M) {
						let V = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						((C) => {
							!C.backdrop &&
								C.allowOutsideClick &&
								o('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
							for (const M in C) rt(M), C.toast && at(M), Ge(M);
						})(Object.assign({}, V, M)),
							Me.currentInstance && (Me.currentInstance._destroy(), Bt() && Jn()),
							(Me.currentInstance = this);
						const ve = Eo(M, V);
						es(ve),
							Object.freeze(ve),
							Me.timeout && (Me.timeout.stop(), delete Me.timeout),
							clearTimeout(Me.restoreFocusTimeout);
						const vt = uo(this);
						return mi(this, ve), Yt.innerParams.set(this, ve), xs(this, vt, ve);
					}
					then(M) {
						return Yt.promise.get(this).then(M);
					}
					finally(M) {
						return Yt.promise.get(this).finally(M);
					}
				}
				const xs = (C, M, V) =>
						new Promise((ve, vt) => {
							const rn = (xi) => {
								C.closePopup({ isDismissed: !0, dismiss: xi });
							};
							ki.swalPromiseResolve.set(C, ve),
								ki.swalPromiseReject.set(C, vt),
								(M.confirmButton.onclick = () =>
									((C) => {
										const M = Yt.innerParams.get(C);
										C.disableButtons(), M.input ? k(C, 'confirm') : st(C, !0);
									})(C)),
								(M.denyButton.onclick = () =>
									((C) => {
										const M = Yt.innerParams.get(C);
										C.disableButtons(), M.returnInputValueOnDeny ? k(C, 'deny') : I(C, !1);
									})(C)),
								(M.cancelButton.onclick = () =>
									((C, M) => {
										C.disableButtons(), M(Zi.cancel);
									})(C, rn)),
								(M.closeButton.onclick = () => rn(Zi.close)),
								((C, M, V) => {
									Yt.innerParams.get(C).toast ? Lt(C, M, V) : (Gt(M), qt(M), R(C, M, V));
								})(C, M, rn),
								((C, M, V, ve) => {
									M.keydownTarget &&
										M.keydownHandlerAdded &&
										(M.keydownTarget.removeEventListener('keydown', M.keydownHandler, {
											capture: M.keydownListenerCapture,
										}),
										(M.keydownHandlerAdded = !1)),
										V.toast ||
											((M.keydownHandler = (vt) => sr(C, vt, ve)),
											(M.keydownTarget = V.keydownListenerCapture ? window : Ue()),
											(M.keydownListenerCapture = V.keydownListenerCapture),
											M.keydownTarget.addEventListener('keydown', M.keydownHandler, {
												capture: M.keydownListenerCapture,
											}),
											(M.keydownHandlerAdded = !0));
								})(C, Me, V, rn),
								((C, M) => {
									'select' === M.input || 'radio' === M.input
										? is(C, M)
										: ['text', 'email', 'number', 'tel', 'textarea'].includes(M.input) &&
										  (ae(M.inputValue) || K(M.inputValue)) &&
										  (Xi(ke()), Lr(C, M));
								})(C, V),
								Bi(V),
								Es(Me, V, rn),
								Os(M, V),
								setTimeout(() => {
									M.container.scrollTop = 0;
								});
						}),
					Eo = (C, M) => {
						const V = ((C) => {
								const M =
									'string' == typeof C.template ? document.querySelector(C.template) : C.template;
								if (!M) return {};
								const V = M.content;
								return Jr(V), Object.assign(br(V), li(V), _i(V), zi(V), Ar(V), hs(V, qi));
							})(C),
							ve = Object.assign({}, q, M, V, C);
						return (
							(ve.showClass = Object.assign({}, q.showClass, ve.showClass)),
							(ve.hideClass = Object.assign({}, q.hideClass, ve.hideClass)),
							ve
						);
					},
					uo = (C) => {
						const M = {
							popup: Ue(),
							container: ce(),
							actions: Ot(),
							confirmButton: ke(),
							denyButton: yt(),
							cancelButton: Wt(),
							loader: sn(),
							closeButton: Fe(),
							validationMessage: gt(),
							progressSteps: nt(),
						};
						return Yt.domCache.set(C, M), M;
					},
					Es = (C, M, V) => {
						const ve = Je();
						pt(ve),
							M.timer &&
								((C.timeout = new kr(() => {
									V('timer'), delete C.timeout;
								}, M.timer)),
								M.timerProgressBar &&
									(_t(ve),
									setTimeout(() => {
										C.timeout && C.timeout.running && cn(M.timer);
									})));
					},
					Os = (C, M) => {
						if (!M.toast) {
							if (!De(M.allowEnterKey)) return ms();
							So(C, M) || Hn(0, -1, 1);
						}
					},
					So = (C, M) =>
						M.focusDeny && xn(C.denyButton)
							? (C.denyButton.focus(), !0)
							: M.focusCancel && xn(C.cancelButton)
							? (C.cancelButton.focus(), !0)
							: !(!M.focusConfirm || !xn(C.confirmButton) || (C.confirmButton.focus(), 0)),
					ms = () => {
						document.activeElement instanceof HTMLElement &&
							'function' == typeof document.activeElement.blur &&
							document.activeElement.blur();
					};
				Object.assign(cr.prototype, $r),
					Object.assign(cr, ri),
					Object.keys($r).forEach((C) => {
						cr[C] = function () {
							if (Ks) return Ks[C](...arguments);
						};
					}),
					(cr.DismissReason = Zi),
					(cr.version = '11.3.6');
				const Zs = cr;
				return (Zs.default = Zs), Zs;
			})()),
				void 0 !== this &&
					this.Sweetalert2 &&
					(this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2),
				'undefined' != typeof document &&
					(function (Ve, S) {
						var m = Ve.createElement('style');
						if ((Ve.getElementsByTagName('head')[0].appendChild(m), m.styleSheet))
							m.styleSheet.disabled || (m.styleSheet.cssText = S);
						else
							try {
								m.innerHTML = S;
							} catch (P) {
								m.innerText = S;
							}
					})(
						document,
						'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}'
					);
		},
		5987: (Et, Ve, S) => {
			'use strict';
			function De(ce, Pe, Ie, Ue) {
				return new (Ie || (Ie = Promise))(function (Xe, Rt) {
					function Ht(ke) {
						try {
							gt(Ue.next(ke));
						} catch (yt) {
							Rt(yt);
						}
					}
					function nt(ke) {
						try {
							gt(Ue.throw(ke));
						} catch (yt) {
							Rt(yt);
						}
					}
					function gt(ke) {
						ke.done
							? Xe(ke.value)
							: (function ut(Xe) {
									return Xe instanceof Ie
										? Xe
										: new Ie(function (Rt) {
												Rt(Xe);
										  });
							  })(ke.value).then(Ht, nt);
					}
					gt((Ue = Ue.apply(ce, Pe || [])).next());
				});
			}
			function ye(ce) {
				return this instanceof ye ? ((this.v = ce), this) : new ye(ce);
			}
			function Ne(ce, Pe, Ie) {
				if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
				var ut,
					Ue = Ie.apply(ce, Pe || []),
					Xe = [];
				return (
					(ut = {}),
					Rt('next'),
					Rt('throw'),
					Rt('return'),
					(ut[Symbol.asyncIterator] = function () {
						return this;
					}),
					ut
				);
				function Rt(xt) {
					Ue[xt] &&
						(ut[xt] = function (sn) {
							return new Promise(function (Wt, Ot) {
								Xe.push([xt, sn, Wt, Ot]) > 1 || Ht(xt, sn);
							});
						});
				}
				function Ht(xt, sn) {
					try {
						!(function nt(xt) {
							xt.value instanceof ye ? Promise.resolve(xt.value.v).then(gt, ke) : yt(Xe[0][2], xt);
						})(Ue[xt](sn));
					} catch (Wt) {
						yt(Xe[0][3], Wt);
					}
				}
				function gt(xt) {
					Ht('next', xt);
				}
				function ke(xt) {
					Ht('throw', xt);
				}
				function yt(xt, sn) {
					xt(sn), Xe.shift(), Xe.length && Ht(Xe[0][0], Xe[0][1]);
				}
			}
			function at(ce) {
				if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
				var Ie,
					Pe = ce[Symbol.asyncIterator];
				return Pe
					? Pe.call(ce)
					: ((ce = (function q(ce) {
							var Pe = 'function' == typeof Symbol && Symbol.iterator,
								Ie = Pe && ce[Pe],
								Ue = 0;
							if (Ie) return Ie.call(ce);
							if (ce && 'number' == typeof ce.length)
								return {
									next: function () {
										return (
											ce && Ue >= ce.length && (ce = void 0), { value: ce && ce[Ue++], done: !ce }
										);
									},
								};
							throw new TypeError(Pe ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
					  })(ce)),
					  (Ie = {}),
					  Ue('next'),
					  Ue('throw'),
					  Ue('return'),
					  (Ie[Symbol.asyncIterator] = function () {
							return this;
					  }),
					  Ie);
				function Ue(Xe) {
					Ie[Xe] =
						ce[Xe] &&
						function (Rt) {
							return new Promise(function (Ht, nt) {
								!(function ut(Xe, Rt, Ht, nt) {
									Promise.resolve(nt).then(function (gt) {
										Xe({ value: gt, done: Ht });
									}, Rt);
								})(Ht, nt, (Rt = ce[Xe](Rt)).done, Rt.value);
							});
						};
				}
			}
			S.d(Ve, { mG: () => De, qq: () => ye, FC: () => Ne, KL: () => at });
		},
		1777: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, {
				l3: () => o,
				_j: () => m,
				LC: () => P,
				ZN: () => Ne,
				jt: () => be,
				pV: () => Re,
				F4: () => Q,
				IO: () => Be,
				vP: () => _e,
				SB: () => ae,
				oB: () => De,
				eR: () => K,
				X$: () => G,
				ZE: () => rt,
				k1: () => at,
			});
			class m {}
			class P {}
			const o = '*';
			function G(Ge, ge) {
				return { type: 7, name: Ge, definitions: ge, options: {} };
			}
			function be(Ge, ge = null) {
				return { type: 4, styles: ge, timings: Ge };
			}
			function _e(Ge, ge = null) {
				return { type: 2, steps: Ge, options: ge };
			}
			function De(Ge) {
				return { type: 6, styles: Ge, offset: null };
			}
			function ae(Ge, ge, tt) {
				return { type: 0, name: Ge, styles: ge, options: tt };
			}
			function Q(Ge) {
				return { type: 5, steps: Ge };
			}
			function K(Ge, ge, tt = null) {
				return { type: 1, expr: Ge, animation: ge, options: tt };
			}
			function Re(Ge = null) {
				return { type: 9, options: Ge };
			}
			function Be(Ge, ge, tt = null) {
				return { type: 11, selector: Ge, animation: ge, options: tt };
			}
			function ye(Ge) {
				Promise.resolve(null).then(Ge);
			}
			class Ne {
				constructor(ge = 0, tt = 0) {
					(this._onDoneFns = []),
						(this._onStartFns = []),
						(this._onDestroyFns = []),
						(this._started = !1),
						(this._destroyed = !1),
						(this._finished = !1),
						(this._position = 0),
						(this.parentPlayer = null),
						(this.totalTime = ge + tt);
				}
				_onFinish() {
					this._finished ||
						((this._finished = !0), this._onDoneFns.forEach((ge) => ge()), (this._onDoneFns = []));
				}
				onStart(ge) {
					this._onStartFns.push(ge);
				}
				onDone(ge) {
					this._onDoneFns.push(ge);
				}
				onDestroy(ge) {
					this._onDestroyFns.push(ge);
				}
				hasStarted() {
					return this._started;
				}
				init() {}
				play() {
					this.hasStarted() || (this._onStart(), this.triggerMicrotask()), (this._started = !0);
				}
				triggerMicrotask() {
					ye(() => this._onFinish());
				}
				_onStart() {
					this._onStartFns.forEach((ge) => ge()), (this._onStartFns = []);
				}
				pause() {}
				restart() {}
				finish() {
					this._onFinish();
				}
				destroy() {
					this._destroyed ||
						((this._destroyed = !0),
						this.hasStarted() || this._onStart(),
						this.finish(),
						this._onDestroyFns.forEach((ge) => ge()),
						(this._onDestroyFns = []));
				}
				reset() {
					this._started = !1;
				}
				setPosition(ge) {
					this._position = this.totalTime ? ge * this.totalTime : 1;
				}
				getPosition() {
					return this.totalTime ? this._position / this.totalTime : 1;
				}
				triggerCallback(ge) {
					const tt = 'start' == ge ? this._onStartFns : this._onDoneFns;
					tt.forEach((ot) => ot()), (tt.length = 0);
				}
			}
			class rt {
				constructor(ge) {
					(this._onDoneFns = []),
						(this._onStartFns = []),
						(this._finished = !1),
						(this._started = !1),
						(this._destroyed = !1),
						(this._onDestroyFns = []),
						(this.parentPlayer = null),
						(this.totalTime = 0),
						(this.players = ge);
					let tt = 0,
						ot = 0,
						J = 0;
					const We = this.players.length;
					0 == We
						? ye(() => this._onFinish())
						: this.players.forEach((ce) => {
								ce.onDone(() => {
									++tt == We && this._onFinish();
								}),
									ce.onDestroy(() => {
										++ot == We && this._onDestroy();
									}),
									ce.onStart(() => {
										++J == We && this._onStart();
									});
						  }),
						(this.totalTime = this.players.reduce((ce, Pe) => Math.max(ce, Pe.totalTime), 0));
				}
				_onFinish() {
					this._finished ||
						((this._finished = !0), this._onDoneFns.forEach((ge) => ge()), (this._onDoneFns = []));
				}
				init() {
					this.players.forEach((ge) => ge.init());
				}
				onStart(ge) {
					this._onStartFns.push(ge);
				}
				_onStart() {
					this.hasStarted() ||
						((this._started = !0), this._onStartFns.forEach((ge) => ge()), (this._onStartFns = []));
				}
				onDone(ge) {
					this._onDoneFns.push(ge);
				}
				onDestroy(ge) {
					this._onDestroyFns.push(ge);
				}
				hasStarted() {
					return this._started;
				}
				play() {
					this.parentPlayer || this.init(), this._onStart(), this.players.forEach((ge) => ge.play());
				}
				pause() {
					this.players.forEach((ge) => ge.pause());
				}
				restart() {
					this.players.forEach((ge) => ge.restart());
				}
				finish() {
					this._onFinish(), this.players.forEach((ge) => ge.finish());
				}
				destroy() {
					this._onDestroy();
				}
				_onDestroy() {
					this._destroyed ||
						((this._destroyed = !0),
						this._onFinish(),
						this.players.forEach((ge) => ge.destroy()),
						this._onDestroyFns.forEach((ge) => ge()),
						(this._onDestroyFns = []));
				}
				reset() {
					this.players.forEach((ge) => ge.reset()),
						(this._destroyed = !1),
						(this._finished = !1),
						(this._started = !1);
				}
				setPosition(ge) {
					const tt = ge * this.totalTime;
					this.players.forEach((ot) => {
						const J = ot.totalTime ? Math.min(1, tt / ot.totalTime) : 1;
						ot.setPosition(J);
					});
				}
				getPosition() {
					const ge = this.players.reduce(
						(tt, ot) => (null === tt || ot.totalTime > tt.totalTime ? ot : tt),
						null
					);
					return null != ge ? ge.getPosition() : 0;
				}
				beforeDestroy() {
					this.players.forEach((ge) => {
						ge.beforeDestroy && ge.beforeDestroy();
					});
				}
				triggerCallback(ge) {
					const tt = 'start' == ge ? this._onStartFns : this._onDoneFns;
					tt.forEach((ot) => ot()), (tt.length = 0);
				}
			}
			const at = '!';
		},
		5664: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, {
				rt: () => ue,
				Em: () => Ht,
				tE: () => cn,
				qV: () => en,
				qm: () => He,
				ic: () => gt,
				Kd: () => xn,
				X6: () => Ye,
				yG: () => xe,
			});
			var m = S(9808),
				P = S(5e3),
				o = S(7579),
				G = S(727),
				be = S(1135),
				we = S(9646),
				_e = S(1159),
				De = S(8505),
				ae = S(8372),
				Q = S(9300),
				K = S(4004),
				q = S(5698),
				Re = S(5684),
				de = S(1884),
				Be = S(2722),
				$e = S(3191),
				ye = S(925),
				Ne = S(7144);
			class Ht extends class Xe {
				constructor(he) {
					(this._items = he),
						(this._activeItemIndex = -1),
						(this._activeItem = null),
						(this._wrap = !1),
						(this._letterKeyStream = new o.x()),
						(this._typeaheadSubscription = G.w0.EMPTY),
						(this._vertical = !0),
						(this._allowedModifierKeys = []),
						(this._homeAndEnd = !1),
						(this._skipPredicateFn = (ee) => ee.disabled),
						(this._pressedLetters = []),
						(this.tabOut = new o.x()),
						(this.change = new o.x()),
						he instanceof P.n_E &&
							he.changes.subscribe((ee) => {
								if (this._activeItem) {
									const Ke = ee.toArray().indexOf(this._activeItem);
									Ke > -1 && Ke !== this._activeItemIndex && (this._activeItemIndex = Ke);
								}
							});
				}
				skipPredicate(he) {
					return (this._skipPredicateFn = he), this;
				}
				withWrap(he = !0) {
					return (this._wrap = he), this;
				}
				withVerticalOrientation(he = !0) {
					return (this._vertical = he), this;
				}
				withHorizontalOrientation(he) {
					return (this._horizontal = he), this;
				}
				withAllowedModifierKeys(he) {
					return (this._allowedModifierKeys = he), this;
				}
				withTypeAhead(he = 200) {
					return (
						this._typeaheadSubscription.unsubscribe(),
						(this._typeaheadSubscription = this._letterKeyStream
							.pipe(
								(0, De.b)((ee) => this._pressedLetters.push(ee)),
								(0, ae.b)(he),
								(0, Q.h)(() => this._pressedLetters.length > 0),
								(0, K.U)(() => this._pressedLetters.join(''))
							)
							.subscribe((ee) => {
								const je = this._getItemsArray();
								for (let Ke = 1; Ke < je.length + 1; Ke++) {
									const Ft = (this._activeItemIndex + Ke) % je.length,
										wn = je[Ft];
									if (
										!this._skipPredicateFn(wn) &&
										0 === wn.getLabel().toUpperCase().trim().indexOf(ee)
									) {
										this.setActiveItem(Ft);
										break;
									}
								}
								this._pressedLetters = [];
							})),
						this
					);
				}
				withHomeAndEnd(he = !0) {
					return (this._homeAndEnd = he), this;
				}
				setActiveItem(he) {
					const ee = this._activeItem;
					this.updateActiveItem(he), this._activeItem !== ee && this.change.next(this._activeItemIndex);
				}
				onKeydown(he) {
					const ee = he.keyCode,
						Ke = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].every(
							(Ft) => !he[Ft] || this._allowedModifierKeys.indexOf(Ft) > -1
						);
					switch (ee) {
						case _e.Mf:
							return void this.tabOut.next();
						case _e.JH:
							if (this._vertical && Ke) {
								this.setNextItemActive();
								break;
							}
							return;
						case _e.LH:
							if (this._vertical && Ke) {
								this.setPreviousItemActive();
								break;
							}
							return;
						case _e.SV:
							if (this._horizontal && Ke) {
								'rtl' === this._horizontal ? this.setPreviousItemActive() : this.setNextItemActive();
								break;
							}
							return;
						case _e.oh:
							if (this._horizontal && Ke) {
								'rtl' === this._horizontal ? this.setNextItemActive() : this.setPreviousItemActive();
								break;
							}
							return;
						case _e.Sd:
							if (this._homeAndEnd && Ke) {
								this.setFirstItemActive();
								break;
							}
							return;
						case _e.uR:
							if (this._homeAndEnd && Ke) {
								this.setLastItemActive();
								break;
							}
							return;
						default:
							return void (
								(Ke || (0, _e.Vb)(he, 'shiftKey')) &&
								(he.key && 1 === he.key.length
									? this._letterKeyStream.next(he.key.toLocaleUpperCase())
									: ((ee >= _e.A && ee <= _e.Z) || (ee >= _e.xE && ee <= _e.aO)) &&
									  this._letterKeyStream.next(String.fromCharCode(ee)))
							);
					}
					(this._pressedLetters = []), he.preventDefault();
				}
				get activeItemIndex() {
					return this._activeItemIndex;
				}
				get activeItem() {
					return this._activeItem;
				}
				isTyping() {
					return this._pressedLetters.length > 0;
				}
				setFirstItemActive() {
					this._setActiveItemByIndex(0, 1);
				}
				setLastItemActive() {
					this._setActiveItemByIndex(this._items.length - 1, -1);
				}
				setNextItemActive() {
					this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
				}
				setPreviousItemActive() {
					this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
				}
				updateActiveItem(he) {
					const ee = this._getItemsArray(),
						je = 'number' == typeof he ? he : ee.indexOf(he),
						Ke = ee[je];
					(this._activeItem = null == Ke ? null : Ke), (this._activeItemIndex = je);
				}
				_setActiveItemByDelta(he) {
					this._wrap ? this._setActiveInWrapMode(he) : this._setActiveInDefaultMode(he);
				}
				_setActiveInWrapMode(he) {
					const ee = this._getItemsArray();
					for (let je = 1; je <= ee.length; je++) {
						const Ke = (this._activeItemIndex + he * je + ee.length) % ee.length;
						if (!this._skipPredicateFn(ee[Ke])) return void this.setActiveItem(Ke);
					}
				}
				_setActiveInDefaultMode(he) {
					this._setActiveItemByIndex(this._activeItemIndex + he, he);
				}
				_setActiveItemByIndex(he, ee) {
					const je = this._getItemsArray();
					if (je[he]) {
						for (; this._skipPredicateFn(je[he]); ) if (!je[(he += ee)]) return;
						this.setActiveItem(he);
					}
				}
				_getItemsArray() {
					return this._items instanceof P.n_E ? this._items.toArray() : this._items;
				}
			} {
				constructor() {
					super(...arguments), (this._origin = 'program');
				}
				setFocusOrigin(he) {
					return (this._origin = he), this;
				}
				setActiveItem(he) {
					super.setActiveItem(he), this.activeItem && this.activeItem.focus(this._origin);
				}
			}
			let gt = (() => {
				class oe {
					constructor(ee) {
						this._platform = ee;
					}
					isDisabled(ee) {
						return ee.hasAttribute('disabled');
					}
					isVisible(ee) {
						return (
							(function yt(oe) {
								return !!(
									oe.offsetWidth ||
									oe.offsetHeight ||
									('function' == typeof oe.getClientRects && oe.getClientRects().length)
								);
							})(ee) && 'visible' === getComputedStyle(ee).visibility
						);
					}
					isTabbable(ee) {
						if (!this._platform.isBrowser) return !1;
						const je = (function ke(oe) {
							try {
								return oe.frameElement;
							} catch (he) {
								return null;
							}
						})(
							(function Bt(oe) {
								return (oe.ownerDocument && oe.ownerDocument.defaultView) || window;
							})(ee)
						);
						if (je && (-1 === Fe(je) || !this.isVisible(je))) return !1;
						let Ke = ee.nodeName.toLowerCase(),
							Ft = Fe(ee);
						return ee.hasAttribute('contenteditable')
							? -1 !== Ft
							: !(
									'iframe' === Ke ||
									'object' === Ke ||
									(this._platform.WEBKIT &&
										this._platform.IOS &&
										!(function Ct(oe) {
											let he = oe.nodeName.toLowerCase(),
												ee = 'input' === he && oe.type;
											return (
												'text' === ee ||
												'password' === ee ||
												'select' === he ||
												'textarea' === he
											);
										})(ee))
							  ) &&
									('audio' === Ke
										? !!ee.hasAttribute('controls') && -1 !== Ft
										: 'video' === Ke
										? -1 !== Ft &&
										  (null !== Ft || this._platform.FIREFOX || ee.hasAttribute('controls'))
										: ee.tabIndex >= 0);
					}
					isFocusable(ee, je) {
						return (
							(function It(oe) {
								return (
									!(function sn(oe) {
										return (
											(function Ot(oe) {
												return 'input' == oe.nodeName.toLowerCase();
											})(oe) && 'hidden' == oe.type
										);
									})(oe) &&
									((function xt(oe) {
										let he = oe.nodeName.toLowerCase();
										return (
											'input' === he || 'select' === he || 'button' === he || 'textarea' === he
										);
									})(oe) ||
										(function Wt(oe) {
											return (
												(function ft(oe) {
													return 'a' == oe.nodeName.toLowerCase();
												})(oe) && oe.hasAttribute('href')
											);
										})(oe) ||
										oe.hasAttribute('contenteditable') ||
										Je(oe))
								);
							})(ee) &&
							!this.isDisabled(ee) &&
							((null == je ? void 0 : je.ignoreVisibility) || this.isVisible(ee))
						);
					}
				}
				return (
					(oe.ɵfac = function (ee) {
						return new (ee || oe)(P.LFG(ye.t4));
					}),
					(oe.ɵprov = P.Yz7({
						token: oe,
						factory: oe.ɵfac,
						providedIn: 'root',
					})),
					oe
				);
			})();
			function Je(oe) {
				if (!oe.hasAttribute('tabindex') || void 0 === oe.tabIndex) return !1;
				let he = oe.getAttribute('tabindex');
				return !(!he || isNaN(parseInt(he, 10)));
			}
			function Fe(oe) {
				if (!Je(oe)) return null;
				const he = parseInt(oe.getAttribute('tabindex') || '', 10);
				return isNaN(he) ? -1 : he;
			}
			class Vt {
				constructor(he, ee, je, Ke, Ft = !1) {
					(this._element = he),
						(this._checker = ee),
						(this._ngZone = je),
						(this._document = Ke),
						(this._hasAttached = !1),
						(this.startAnchorListener = () => this.focusLastTabbableElement()),
						(this.endAnchorListener = () => this.focusFirstTabbableElement()),
						(this._enabled = !0),
						Ft || this.attachAnchors();
				}
				get enabled() {
					return this._enabled;
				}
				set enabled(he) {
					(this._enabled = he),
						this._startAnchor &&
							this._endAnchor &&
							(this._toggleAnchorTabIndex(he, this._startAnchor),
							this._toggleAnchorTabIndex(he, this._endAnchor));
				}
				destroy() {
					const he = this._startAnchor,
						ee = this._endAnchor;
					he && (he.removeEventListener('focus', this.startAnchorListener), he.remove()),
						ee && (ee.removeEventListener('focus', this.endAnchorListener), ee.remove()),
						(this._startAnchor = this._endAnchor = null),
						(this._hasAttached = !1);
				}
				attachAnchors() {
					return (
						!!this._hasAttached ||
						(this._ngZone.runOutsideAngular(() => {
							this._startAnchor ||
								((this._startAnchor = this._createAnchor()),
								this._startAnchor.addEventListener('focus', this.startAnchorListener)),
								this._endAnchor ||
									((this._endAnchor = this._createAnchor()),
									this._endAnchor.addEventListener('focus', this.endAnchorListener));
						}),
						this._element.parentNode &&
							(this._element.parentNode.insertBefore(this._startAnchor, this._element),
							this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling),
							(this._hasAttached = !0)),
						this._hasAttached)
					);
				}
				focusInitialElementWhenReady(he) {
					return new Promise((ee) => {
						this._executeOnStable(() => ee(this.focusInitialElement(he)));
					});
				}
				focusFirstTabbableElementWhenReady(he) {
					return new Promise((ee) => {
						this._executeOnStable(() => ee(this.focusFirstTabbableElement(he)));
					});
				}
				focusLastTabbableElementWhenReady(he) {
					return new Promise((ee) => {
						this._executeOnStable(() => ee(this.focusLastTabbableElement(he)));
					});
				}
				_getRegionBoundary(he) {
					const ee = this._element.querySelectorAll(
						`[cdk-focus-region-${he}], [cdkFocusRegion${he}], [cdk-focus-${he}]`
					);
					return 'start' == he
						? ee.length
							? ee[0]
							: this._getFirstTabbableElement(this._element)
						: ee.length
						? ee[ee.length - 1]
						: this._getLastTabbableElement(this._element);
				}
				focusInitialElement(he) {
					const ee = this._element.querySelector('[cdk-focus-initial], [cdkFocusInitial]');
					if (ee) {
						if (!this._checker.isFocusable(ee)) {
							const je = this._getFirstTabbableElement(ee);
							return null == je || je.focus(he), !!je;
						}
						return ee.focus(he), !0;
					}
					return this.focusFirstTabbableElement(he);
				}
				focusFirstTabbableElement(he) {
					const ee = this._getRegionBoundary('start');
					return ee && ee.focus(he), !!ee;
				}
				focusLastTabbableElement(he) {
					const ee = this._getRegionBoundary('end');
					return ee && ee.focus(he), !!ee;
				}
				hasAttached() {
					return this._hasAttached;
				}
				_getFirstTabbableElement(he) {
					if (this._checker.isFocusable(he) && this._checker.isTabbable(he)) return he;
					const ee = he.children;
					for (let je = 0; je < ee.length; je++) {
						const Ke =
							ee[je].nodeType === this._document.ELEMENT_NODE
								? this._getFirstTabbableElement(ee[je])
								: null;
						if (Ke) return Ke;
					}
					return null;
				}
				_getLastTabbableElement(he) {
					if (this._checker.isFocusable(he) && this._checker.isTabbable(he)) return he;
					const ee = he.children;
					for (let je = ee.length - 1; je >= 0; je--) {
						const Ke =
							ee[je].nodeType === this._document.ELEMENT_NODE
								? this._getLastTabbableElement(ee[je])
								: null;
						if (Ke) return Ke;
					}
					return null;
				}
				_createAnchor() {
					const he = this._document.createElement('div');
					return (
						this._toggleAnchorTabIndex(this._enabled, he),
						he.classList.add('cdk-visually-hidden'),
						he.classList.add('cdk-focus-trap-anchor'),
						he.setAttribute('aria-hidden', 'true'),
						he
					);
				}
				_toggleAnchorTabIndex(he, ee) {
					he ? ee.setAttribute('tabindex', '0') : ee.removeAttribute('tabindex');
				}
				toggleAnchors(he) {
					this._startAnchor &&
						this._endAnchor &&
						(this._toggleAnchorTabIndex(he, this._startAnchor),
						this._toggleAnchorTabIndex(he, this._endAnchor));
				}
				_executeOnStable(he) {
					this._ngZone.isStable ? he() : this._ngZone.onStable.pipe((0, q.q)(1)).subscribe(he);
				}
			}
			let en = (() => {
				class oe {
					constructor(ee, je, Ke) {
						(this._checker = ee), (this._ngZone = je), (this._document = Ke);
					}
					create(ee, je = !1) {
						return new Vt(ee, this._checker, this._ngZone, this._document, je);
					}
				}
				return (
					(oe.ɵfac = function (ee) {
						return new (ee || oe)(P.LFG(gt), P.LFG(P.R0b), P.LFG(m.K0));
					}),
					(oe.ɵprov = P.Yz7({
						token: oe,
						factory: oe.ɵfac,
						providedIn: 'root',
					})),
					oe
				);
			})();
			function Ye(oe) {
				return 0 === oe.offsetX && 0 === oe.offsetY;
			}
			function xe(oe) {
				const he = (oe.touches && oe.touches[0]) || (oe.changedTouches && oe.changedTouches[0]);
				return !(
					!he ||
					-1 !== he.identifier ||
					(null != he.radiusX && 1 !== he.radiusX) ||
					(null != he.radiusY && 1 !== he.radiusY)
				);
			}
			const X = new P.OlP('cdk-input-modality-detector-options'),
				re = { ignoreKeys: [_e.zL, _e.jx, _e.b2, _e.MW, _e.JU] },
				it = (0, ye.i$)({ passive: !0, capture: !0 });
			let _t = (() => {
				class oe {
					constructor(ee, je, Ke, Ft) {
						(this._platform = ee),
							(this._mostRecentTarget = null),
							(this._modality = new be.X(null)),
							(this._lastTouchMs = 0),
							(this._onKeydown = (wn) => {
								var _n, Un;
								(null ===
									(Un = null === (_n = this._options) || void 0 === _n ? void 0 : _n.ignoreKeys) ||
								void 0 === Un
									? void 0
									: Un.some((qe) => qe === wn.keyCode)) ||
									(this._modality.next('keyboard'), (this._mostRecentTarget = (0, ye.sA)(wn)));
							}),
							(this._onMousedown = (wn) => {
								Date.now() - this._lastTouchMs < 650 ||
									(this._modality.next(Ye(wn) ? 'keyboard' : 'mouse'),
									(this._mostRecentTarget = (0, ye.sA)(wn)));
							}),
							(this._onTouchstart = (wn) => {
								xe(wn)
									? this._modality.next('keyboard')
									: ((this._lastTouchMs = Date.now()),
									  this._modality.next('touch'),
									  (this._mostRecentTarget = (0, ye.sA)(wn)));
							}),
							(this._options = Object.assign(Object.assign({}, re), Ft)),
							(this.modalityDetected = this._modality.pipe((0, Re.T)(1))),
							(this.modalityChanged = this.modalityDetected.pipe((0, de.x)())),
							ee.isBrowser &&
								je.runOutsideAngular(() => {
									Ke.addEventListener('keydown', this._onKeydown, it),
										Ke.addEventListener('mousedown', this._onMousedown, it),
										Ke.addEventListener('touchstart', this._onTouchstart, it);
								});
					}
					get mostRecentModality() {
						return this._modality.value;
					}
					ngOnDestroy() {
						this._modality.complete(),
							this._platform.isBrowser &&
								(document.removeEventListener('keydown', this._onKeydown, it),
								document.removeEventListener('mousedown', this._onMousedown, it),
								document.removeEventListener('touchstart', this._onTouchstart, it));
					}
				}
				return (
					(oe.ɵfac = function (ee) {
						return new (ee || oe)(P.LFG(ye.t4), P.LFG(P.R0b), P.LFG(m.K0), P.LFG(X, 8));
					}),
					(oe.ɵprov = P.Yz7({
						token: oe,
						factory: oe.ɵfac,
						providedIn: 'root',
					})),
					oe
				);
			})();
			const pt = new P.OlP('liveAnnouncerElement', {
					providedIn: 'root',
					factory: function At() {
						return null;
					},
				}),
				Qt = new P.OlP('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
			let xn = (() => {
				class oe {
					constructor(ee, je, Ke, Ft) {
						(this._ngZone = je),
							(this._defaultOptions = Ft),
							(this._document = Ke),
							(this._liveElement = ee || this._createLiveElement());
					}
					announce(ee, ...je) {
						const Ke = this._defaultOptions;
						let Ft, wn;
						return (
							1 === je.length && 'number' == typeof je[0] ? (wn = je[0]) : ([Ft, wn] = je),
							this.clear(),
							clearTimeout(this._previousTimeout),
							Ft || (Ft = Ke && Ke.politeness ? Ke.politeness : 'polite'),
							null == wn && Ke && (wn = Ke.duration),
							this._liveElement.setAttribute('aria-live', Ft),
							this._ngZone.runOutsideAngular(
								() =>
									new Promise((_n) => {
										clearTimeout(this._previousTimeout),
											(this._previousTimeout = setTimeout(() => {
												(this._liveElement.textContent = ee),
													_n(),
													'number' == typeof wn &&
														(this._previousTimeout = setTimeout(() => this.clear(), wn));
											}, 100));
									})
							)
						);
					}
					clear() {
						this._liveElement && (this._liveElement.textContent = '');
					}
					ngOnDestroy() {
						var ee;
						clearTimeout(this._previousTimeout),
							null === (ee = this._liveElement) || void 0 === ee || ee.remove(),
							(this._liveElement = null);
					}
					_createLiveElement() {
						const ee = 'cdk-live-announcer-element',
							je = this._document.getElementsByClassName(ee),
							Ke = this._document.createElement('div');
						for (let Ft = 0; Ft < je.length; Ft++) je[Ft].remove();
						return (
							Ke.classList.add(ee),
							Ke.classList.add('cdk-visually-hidden'),
							Ke.setAttribute('aria-atomic', 'true'),
							Ke.setAttribute('aria-live', 'polite'),
							this._document.body.appendChild(Ke),
							Ke
						);
					}
				}
				return (
					(oe.ɵfac = function (ee) {
						return new (ee || oe)(P.LFG(pt, 8), P.LFG(P.R0b), P.LFG(m.K0), P.LFG(Qt, 8));
					}),
					(oe.ɵprov = P.Yz7({
						token: oe,
						factory: oe.ɵfac,
						providedIn: 'root',
					})),
					oe
				);
			})();
			const On = new P.OlP('cdk-focus-monitor-default-options'),
				An = (0, ye.i$)({ passive: !0, capture: !0 });
			let cn = (() => {
				class oe {
					constructor(ee, je, Ke, Ft, wn) {
						(this._ngZone = ee),
							(this._platform = je),
							(this._inputModalityDetector = Ke),
							(this._origin = null),
							(this._windowFocused = !1),
							(this._originFromTouchInteraction = !1),
							(this._elementInfo = new Map()),
							(this._monitoredElementCount = 0),
							(this._rootNodeFocusListenerCount = new Map()),
							(this._windowFocusListener = () => {
								(this._windowFocused = !0),
									(this._windowFocusTimeoutId = window.setTimeout(() => (this._windowFocused = !1)));
							}),
							(this._stopInputModalityDetector = new o.x()),
							(this._rootNodeFocusAndBlurListener = (_n) => {
								const Un = (0, ye.sA)(_n),
									qe = 'focus' === _n.type ? this._onFocus : this._onBlur;
								for (let Te = Un; Te; Te = Te.parentElement) qe.call(this, _n, Te);
							}),
							(this._document = Ft),
							(this._detectionMode = (null == wn ? void 0 : wn.detectionMode) || 0);
					}
					monitor(ee, je = !1) {
						const Ke = (0, $e.fI)(ee);
						if (!this._platform.isBrowser || 1 !== Ke.nodeType) return (0, we.of)(null);
						const Ft = (0, ye.kV)(Ke) || this._getDocument(),
							wn = this._elementInfo.get(Ke);
						if (wn) return je && (wn.checkChildren = !0), wn.subject;
						const _n = {
							checkChildren: je,
							subject: new o.x(),
							rootNode: Ft,
						};
						return this._elementInfo.set(Ke, _n), this._registerGlobalListeners(_n), _n.subject;
					}
					stopMonitoring(ee) {
						const je = (0, $e.fI)(ee),
							Ke = this._elementInfo.get(je);
						Ke &&
							(Ke.subject.complete(),
							this._setClasses(je),
							this._elementInfo.delete(je),
							this._removeGlobalListeners(Ke));
					}
					focusVia(ee, je, Ke) {
						const Ft = (0, $e.fI)(ee);
						Ft === this._getDocument().activeElement
							? this._getClosestElementsInfo(Ft).forEach(([_n, Un]) => this._originChanged(_n, je, Un))
							: (this._setOrigin(je), 'function' == typeof Ft.focus && Ft.focus(Ke));
					}
					ngOnDestroy() {
						this._elementInfo.forEach((ee, je) => this.stopMonitoring(je));
					}
					_getDocument() {
						return this._document || document;
					}
					_getWindow() {
						return this._getDocument().defaultView || window;
					}
					_getFocusOrigin(ee) {
						return this._origin
							? this._originFromTouchInteraction
								? this._shouldBeAttributedToTouch(ee)
									? 'touch'
									: 'program'
								: this._origin
							: this._windowFocused && this._lastFocusOrigin
							? this._lastFocusOrigin
							: 'program';
					}
					_shouldBeAttributedToTouch(ee) {
						return (
							1 === this._detectionMode ||
							!!(null == ee ? void 0 : ee.contains(this._inputModalityDetector._mostRecentTarget))
						);
					}
					_setClasses(ee, je) {
						ee.classList.toggle('cdk-focused', !!je),
							ee.classList.toggle('cdk-touch-focused', 'touch' === je),
							ee.classList.toggle('cdk-keyboard-focused', 'keyboard' === je),
							ee.classList.toggle('cdk-mouse-focused', 'mouse' === je),
							ee.classList.toggle('cdk-program-focused', 'program' === je);
					}
					_setOrigin(ee, je = !1) {
						this._ngZone.runOutsideAngular(() => {
							(this._origin = ee),
								(this._originFromTouchInteraction = 'touch' === ee && je),
								0 === this._detectionMode &&
									(clearTimeout(this._originTimeoutId),
									(this._originTimeoutId = setTimeout(
										() => (this._origin = null),
										this._originFromTouchInteraction ? 650 : 1
									)));
						});
					}
					_onFocus(ee, je) {
						const Ke = this._elementInfo.get(je),
							Ft = (0, ye.sA)(ee);
						!Ke ||
							(!Ke.checkChildren && je !== Ft) ||
							this._originChanged(je, this._getFocusOrigin(Ft), Ke);
					}
					_onBlur(ee, je) {
						const Ke = this._elementInfo.get(je);
						!Ke ||
							(Ke.checkChildren && ee.relatedTarget instanceof Node && je.contains(ee.relatedTarget)) ||
							(this._setClasses(je), this._emitOrigin(Ke.subject, null));
					}
					_emitOrigin(ee, je) {
						this._ngZone.run(() => ee.next(je));
					}
					_registerGlobalListeners(ee) {
						if (!this._platform.isBrowser) return;
						const je = ee.rootNode,
							Ke = this._rootNodeFocusListenerCount.get(je) || 0;
						Ke ||
							this._ngZone.runOutsideAngular(() => {
								je.addEventListener('focus', this._rootNodeFocusAndBlurListener, An),
									je.addEventListener('blur', this._rootNodeFocusAndBlurListener, An);
							}),
							this._rootNodeFocusListenerCount.set(je, Ke + 1),
							1 == ++this._monitoredElementCount &&
								(this._ngZone.runOutsideAngular(() => {
									this._getWindow().addEventListener('focus', this._windowFocusListener);
								}),
								this._inputModalityDetector.modalityDetected
									.pipe((0, Be.R)(this._stopInputModalityDetector))
									.subscribe((Ft) => {
										this._setOrigin(Ft, !0);
									}));
					}
					_removeGlobalListeners(ee) {
						const je = ee.rootNode;
						if (this._rootNodeFocusListenerCount.has(je)) {
							const Ke = this._rootNodeFocusListenerCount.get(je);
							Ke > 1
								? this._rootNodeFocusListenerCount.set(je, Ke - 1)
								: (je.removeEventListener('focus', this._rootNodeFocusAndBlurListener, An),
								  je.removeEventListener('blur', this._rootNodeFocusAndBlurListener, An),
								  this._rootNodeFocusListenerCount.delete(je));
						}
						--this._monitoredElementCount ||
							(this._getWindow().removeEventListener('focus', this._windowFocusListener),
							this._stopInputModalityDetector.next(),
							clearTimeout(this._windowFocusTimeoutId),
							clearTimeout(this._originTimeoutId));
					}
					_originChanged(ee, je, Ke) {
						this._setClasses(ee, je), this._emitOrigin(Ke.subject, je), (this._lastFocusOrigin = je);
					}
					_getClosestElementsInfo(ee) {
						const je = [];
						return (
							this._elementInfo.forEach((Ke, Ft) => {
								(Ft === ee || (Ke.checkChildren && Ft.contains(ee))) && je.push([Ft, Ke]);
							}),
							je
						);
					}
				}
				return (
					(oe.ɵfac = function (ee) {
						return new (ee || oe)(P.LFG(P.R0b), P.LFG(ye.t4), P.LFG(_t), P.LFG(m.K0, 8), P.LFG(On, 8));
					}),
					(oe.ɵprov = P.Yz7({
						token: oe,
						factory: oe.ɵfac,
						providedIn: 'root',
					})),
					oe
				);
			})();
			const Yn = 'cdk-high-contrast-black-on-white',
				gn = 'cdk-high-contrast-white-on-black',
				Me = 'cdk-high-contrast-active';
			let He = (() => {
					class oe {
						constructor(ee, je) {
							(this._platform = ee), (this._document = je);
						}
						getHighContrastMode() {
							if (!this._platform.isBrowser) return 0;
							const ee = this._document.createElement('div');
							(ee.style.backgroundColor = 'rgb(1,2,3)'),
								(ee.style.position = 'absolute'),
								this._document.body.appendChild(ee);
							const je = this._document.defaultView || window,
								Ke = je && je.getComputedStyle ? je.getComputedStyle(ee) : null,
								Ft = ((Ke && Ke.backgroundColor) || '').replace(/ /g, '');
							switch ((ee.remove(), Ft)) {
								case 'rgb(0,0,0)':
									return 2;
								case 'rgb(255,255,255)':
									return 1;
							}
							return 0;
						}
						_applyBodyHighContrastModeCssClasses() {
							if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
								const ee = this._document.body.classList;
								ee.remove(Me), ee.remove(Yn), ee.remove(gn), (this._hasCheckedHighContrastMode = !0);
								const je = this.getHighContrastMode();
								1 === je ? (ee.add(Me), ee.add(Yn)) : 2 === je && (ee.add(Me), ee.add(gn));
							}
						}
					}
					return (
						(oe.ɵfac = function (ee) {
							return new (ee || oe)(P.LFG(ye.t4), P.LFG(m.K0));
						}),
						(oe.ɵprov = P.Yz7({
							token: oe,
							factory: oe.ɵfac,
							providedIn: 'root',
						})),
						oe
					);
				})(),
				ue = (() => {
					class oe {
						constructor(ee) {
							ee._applyBodyHighContrastModeCssClasses();
						}
					}
					return (
						(oe.ɵfac = function (ee) {
							return new (ee || oe)(P.LFG(He));
						}),
						(oe.ɵmod = P.oAB({ type: oe })),
						(oe.ɵinj = P.cJS({ imports: [[ye.ud, Ne.Q8]] })),
						oe
					);
				})();
		},
		3262: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { xI: () => De, dD: () => Q, XD: () => K });
			var m = S(5e3),
				P = S(3191),
				o = S(7579),
				G = S(727),
				be = S(449);
			let we = 0;
			const _e = new m.OlP('CdkAccordion');
			let De = (() => {
					class q {
						constructor() {
							(this._stateChanges = new o.x()),
								(this._openCloseAllActions = new o.x()),
								(this.id = 'cdk-accordion-' + we++),
								(this._multi = !1);
						}
						get multi() {
							return this._multi;
						}
						set multi(de) {
							this._multi = (0, P.Ig)(de);
						}
						openAll() {
							this._multi && this._openCloseAllActions.next(!0);
						}
						closeAll() {
							this._openCloseAllActions.next(!1);
						}
						ngOnChanges(de) {
							this._stateChanges.next(de);
						}
						ngOnDestroy() {
							this._stateChanges.complete(), this._openCloseAllActions.complete();
						}
					}
					return (
						(q.ɵfac = function (de) {
							return new (de || q)();
						}),
						(q.ɵdir = m.lG2({
							type: q,
							selectors: [['cdk-accordion'], ['', 'cdkAccordion', '']],
							inputs: { multi: 'multi' },
							exportAs: ['cdkAccordion'],
							features: [m._Bn([{ provide: _e, useExisting: q }]), m.TTD],
						})),
						q
					);
				})(),
				ae = 0,
				Q = (() => {
					class q {
						constructor(de, Be, $e) {
							(this.accordion = de),
								(this._changeDetectorRef = Be),
								(this._expansionDispatcher = $e),
								(this._openCloseAllSubscription = G.w0.EMPTY),
								(this.closed = new m.vpe()),
								(this.opened = new m.vpe()),
								(this.destroyed = new m.vpe()),
								(this.expandedChange = new m.vpe()),
								(this.id = 'cdk-accordion-child-' + ae++),
								(this._expanded = !1),
								(this._disabled = !1),
								(this._removeUniqueSelectionListener = () => {}),
								(this._removeUniqueSelectionListener = $e.listen((ye, Ne) => {
									this.accordion &&
										!this.accordion.multi &&
										this.accordion.id === Ne &&
										this.id !== ye &&
										(this.expanded = !1);
								})),
								this.accordion &&
									(this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions());
						}
						get expanded() {
							return this._expanded;
						}
						set expanded(de) {
							(de = (0, P.Ig)(de)),
								this._expanded !== de &&
									((this._expanded = de),
									this.expandedChange.emit(de),
									de
										? (this.opened.emit(),
										  this._expansionDispatcher.notify(
												this.id,
												this.accordion ? this.accordion.id : this.id
										  ))
										: this.closed.emit(),
									this._changeDetectorRef.markForCheck());
						}
						get disabled() {
							return this._disabled;
						}
						set disabled(de) {
							this._disabled = (0, P.Ig)(de);
						}
						ngOnDestroy() {
							this.opened.complete(),
								this.closed.complete(),
								this.destroyed.emit(),
								this.destroyed.complete(),
								this._removeUniqueSelectionListener(),
								this._openCloseAllSubscription.unsubscribe();
						}
						toggle() {
							this.disabled || (this.expanded = !this.expanded);
						}
						close() {
							this.disabled || (this.expanded = !1);
						}
						open() {
							this.disabled || (this.expanded = !0);
						}
						_subscribeToOpenCloseAllActions() {
							return this.accordion._openCloseAllActions.subscribe((de) => {
								this.disabled || (this.expanded = de);
							});
						}
					}
					return (
						(q.ɵfac = function (de) {
							return new (de || q)(m.Y36(_e, 12), m.Y36(m.sBO), m.Y36(be.A8));
						}),
						(q.ɵdir = m.lG2({
							type: q,
							selectors: [['cdk-accordion-item'], ['', 'cdkAccordionItem', '']],
							inputs: {
								expanded: 'expanded',
								disabled: 'disabled',
							},
							outputs: {
								closed: 'closed',
								opened: 'opened',
								destroyed: 'destroyed',
								expandedChange: 'expandedChange',
							},
							exportAs: ['cdkAccordionItem'],
							features: [m._Bn([{ provide: _e, useValue: void 0 }])],
						})),
						q
					);
				})(),
				K = (() => {
					class q {}
					return (
						(q.ɵfac = function (de) {
							return new (de || q)();
						}),
						(q.ɵmod = m.oAB({ type: q })),
						(q.ɵinj = m.cJS({})),
						q
					);
				})();
		},
		226: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { vT: () => ae, Is: () => _e });
			var m = S(5e3),
				P = S(9808);
			const o = new m.OlP('cdk-dir-doc', {
					providedIn: 'root',
					factory: function G() {
						return (0, m.f3M)(P.K0);
					},
				}),
				be =
					/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
			let _e = (() => {
					class Q {
						constructor(q) {
							if (((this.value = 'ltr'), (this.change = new m.vpe()), q)) {
								const de = q.documentElement ? q.documentElement.dir : null;
								this.value = (function we(Q) {
									const K = (null == Q ? void 0 : Q.toLowerCase()) || '';
									return 'auto' === K &&
										'undefined' != typeof navigator &&
										(null == navigator ? void 0 : navigator.language)
										? be.test(navigator.language)
											? 'rtl'
											: 'ltr'
										: 'rtl' === K
										? 'rtl'
										: 'ltr';
								})((q.body ? q.body.dir : null) || de || 'ltr');
							}
						}
						ngOnDestroy() {
							this.change.complete();
						}
					}
					return (
						(Q.ɵfac = function (q) {
							return new (q || Q)(m.LFG(o, 8));
						}),
						(Q.ɵprov = m.Yz7({
							token: Q,
							factory: Q.ɵfac,
							providedIn: 'root',
						})),
						Q
					);
				})(),
				ae = (() => {
					class Q {}
					return (
						(Q.ɵfac = function (q) {
							return new (q || Q)();
						}),
						(Q.ɵmod = m.oAB({ type: Q })),
						(Q.ɵinj = m.cJS({})),
						Q
					);
				})();
		},
		3191: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, {
				Eq: () => be,
				Ig: () => P,
				HM: () => we,
				fI: () => _e,
				su: () => o,
			});
			var m = S(5e3);
			function P(ae) {
				return null != ae && 'false' != `${ae}`;
			}
			function o(ae, Q = 0) {
				return (function G(ae) {
					return !isNaN(parseFloat(ae)) && !isNaN(Number(ae));
				})(ae)
					? Number(ae)
					: Q;
			}
			function be(ae) {
				return Array.isArray(ae) ? ae : [ae];
			}
			function we(ae) {
				return null == ae ? '' : 'string' == typeof ae ? ae : `${ae}px`;
			}
			function _e(ae) {
				return ae instanceof m.SBq ? ae.nativeElement : ae;
			}
		},
		449: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, {
				Ov: () => De,
				A8: () => Q,
				yy: () => we,
				eX: () => _e,
				k: () => K,
				Z9: () => G,
			});
			var m = S(7579),
				P = S(5e3);
			function G(q) {
				return q && 'function' == typeof q.connect;
			}
			class we {
				applyChanges(Re, de, Be, $e, ye) {
					Re.forEachOperation((Ne, rt, at) => {
						let Ge, ge;
						if (null == Ne.previousIndex) {
							const tt = Be(Ne, rt, at);
							(Ge = de.createEmbeddedView(tt.templateRef, tt.context, tt.index)), (ge = 1);
						} else null == at ? (de.remove(rt), (ge = 3)) : ((Ge = de.get(rt)), de.move(Ge, at), (ge = 2));
						ye &&
							ye({
								context: null == Ge ? void 0 : Ge.context,
								operation: ge,
								record: Ne,
							});
					});
				}
				detach() {}
			}
			class _e {
				constructor() {
					(this.viewCacheSize = 20), (this._viewCache = []);
				}
				applyChanges(Re, de, Be, $e, ye) {
					Re.forEachOperation((Ne, rt, at) => {
						let Ge, ge;
						null == Ne.previousIndex
							? ((Ge = this._insertView(() => Be(Ne, rt, at), at, de, $e(Ne))), (ge = Ge ? 1 : 0))
							: null == at
							? (this._detachAndCacheView(rt, de), (ge = 3))
							: ((Ge = this._moveView(rt, at, de, $e(Ne))), (ge = 2)),
							ye &&
								ye({
									context: null == Ge ? void 0 : Ge.context,
									operation: ge,
									record: Ne,
								});
					});
				}
				detach() {
					for (const Re of this._viewCache) Re.destroy();
					this._viewCache = [];
				}
				_insertView(Re, de, Be, $e) {
					const ye = this._insertViewFromCache(de, Be);
					if (ye) return void (ye.context.$implicit = $e);
					const Ne = Re();
					return Be.createEmbeddedView(Ne.templateRef, Ne.context, Ne.index);
				}
				_detachAndCacheView(Re, de) {
					const Be = de.detach(Re);
					this._maybeCacheView(Be, de);
				}
				_moveView(Re, de, Be, $e) {
					const ye = Be.get(Re);
					return Be.move(ye, de), (ye.context.$implicit = $e), ye;
				}
				_maybeCacheView(Re, de) {
					if (this._viewCache.length < this.viewCacheSize) this._viewCache.push(Re);
					else {
						const Be = de.indexOf(Re);
						-1 === Be ? Re.destroy() : de.remove(Be);
					}
				}
				_insertViewFromCache(Re, de) {
					const Be = this._viewCache.pop();
					return Be && de.insert(Be, Re), Be || null;
				}
			}
			class De {
				constructor(Re = !1, de, Be = !0) {
					(this._multiple = Re),
						(this._emitChanges = Be),
						(this._selection = new Set()),
						(this._deselectedToEmit = []),
						(this._selectedToEmit = []),
						(this.changed = new m.x()),
						de &&
							de.length &&
							(Re ? de.forEach(($e) => this._markSelected($e)) : this._markSelected(de[0]),
							(this._selectedToEmit.length = 0));
				}
				get selected() {
					return this._selected || (this._selected = Array.from(this._selection.values())), this._selected;
				}
				select(...Re) {
					this._verifyValueAssignment(Re),
						Re.forEach((de) => this._markSelected(de)),
						this._emitChangeEvent();
				}
				deselect(...Re) {
					this._verifyValueAssignment(Re),
						Re.forEach((de) => this._unmarkSelected(de)),
						this._emitChangeEvent();
				}
				toggle(Re) {
					this.isSelected(Re) ? this.deselect(Re) : this.select(Re);
				}
				clear() {
					this._unmarkAll(), this._emitChangeEvent();
				}
				isSelected(Re) {
					return this._selection.has(Re);
				}
				isEmpty() {
					return 0 === this._selection.size;
				}
				hasValue() {
					return !this.isEmpty();
				}
				sort(Re) {
					this._multiple && this.selected && this._selected.sort(Re);
				}
				isMultipleSelection() {
					return this._multiple;
				}
				_emitChangeEvent() {
					(this._selected = null),
						(this._selectedToEmit.length || this._deselectedToEmit.length) &&
							(this.changed.next({
								source: this,
								added: this._selectedToEmit,
								removed: this._deselectedToEmit,
							}),
							(this._deselectedToEmit = []),
							(this._selectedToEmit = []));
				}
				_markSelected(Re) {
					this.isSelected(Re) ||
						(this._multiple || this._unmarkAll(),
						this._selection.add(Re),
						this._emitChanges && this._selectedToEmit.push(Re));
				}
				_unmarkSelected(Re) {
					this.isSelected(Re) &&
						(this._selection.delete(Re), this._emitChanges && this._deselectedToEmit.push(Re));
				}
				_unmarkAll() {
					this.isEmpty() || this._selection.forEach((Re) => this._unmarkSelected(Re));
				}
				_verifyValueAssignment(Re) {}
			}
			let Q = (() => {
				class q {
					constructor() {
						this._listeners = [];
					}
					notify(de, Be) {
						for (let $e of this._listeners) $e(de, Be);
					}
					listen(de) {
						return (
							this._listeners.push(de),
							() => {
								this._listeners = this._listeners.filter((Be) => de !== Be);
							}
						);
					}
					ngOnDestroy() {
						this._listeners = [];
					}
				}
				return (
					(q.ɵfac = function (de) {
						return new (de || q)();
					}),
					(q.ɵprov = P.Yz7({
						token: q,
						factory: q.ɵfac,
						providedIn: 'root',
					})),
					q
				);
			})();
			const K = new P.OlP('_ViewRepeater');
		},
		1159: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, {
				A: () => xt,
				zL: () => De,
				ZH: () => P,
				jx: () => _e,
				yY: () => ot,
				JH: () => at,
				uR: () => Be,
				K5: () => be,
				hY: () => K,
				Sd: () => $e,
				oh: () => ye,
				b2: () => Li,
				MW: () => At,
				aO: () => Ht,
				VM: () => de,
				Ku: () => Re,
				SV: () => rt,
				JU: () => we,
				L_: () => q,
				Mf: () => o,
				LH: () => Ne,
				Z: () => pt,
				xE: () => J,
				Vb: () => Bn,
			});
			const P = 8,
				o = 9,
				be = 13,
				we = 16,
				_e = 17,
				De = 18,
				K = 27,
				q = 32,
				Re = 33,
				de = 34,
				Be = 35,
				$e = 36,
				ye = 37,
				Ne = 38,
				rt = 39,
				at = 40,
				ot = 46,
				J = 48,
				Ht = 57,
				xt = 65,
				pt = 90,
				At = 91,
				Li = 224;
			function Bn(Tn, ...Ni) {
				return Ni.length ? Ni.some((Ii) => Tn[Ii]) : Tn.altKey || Tn.shiftKey || Tn.ctrlKey || Tn.metaKey;
			}
		},
		7144: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { wD: () => De, Q8: () => ae });
			var m = S(3191),
				P = S(5e3),
				o = S(8306),
				G = S(7579),
				be = S(8372);
			let we = (() => {
					class Q {
						create(q) {
							return 'undefined' == typeof MutationObserver ? null : new MutationObserver(q);
						}
					}
					return (
						(Q.ɵfac = function (q) {
							return new (q || Q)();
						}),
						(Q.ɵprov = P.Yz7({
							token: Q,
							factory: Q.ɵfac,
							providedIn: 'root',
						})),
						Q
					);
				})(),
				_e = (() => {
					class Q {
						constructor(q) {
							(this._mutationObserverFactory = q), (this._observedElements = new Map());
						}
						ngOnDestroy() {
							this._observedElements.forEach((q, Re) => this._cleanupObserver(Re));
						}
						observe(q) {
							const Re = (0, m.fI)(q);
							return new o.y((de) => {
								const $e = this._observeElement(Re).subscribe(de);
								return () => {
									$e.unsubscribe(), this._unobserveElement(Re);
								};
							});
						}
						_observeElement(q) {
							if (this._observedElements.has(q)) this._observedElements.get(q).count++;
							else {
								const Re = new G.x(),
									de = this._mutationObserverFactory.create((Be) => Re.next(Be));
								de &&
									de.observe(q, {
										characterData: !0,
										childList: !0,
										subtree: !0,
									}),
									this._observedElements.set(q, {
										observer: de,
										stream: Re,
										count: 1,
									});
							}
							return this._observedElements.get(q).stream;
						}
						_unobserveElement(q) {
							this._observedElements.has(q) &&
								(this._observedElements.get(q).count--,
								this._observedElements.get(q).count || this._cleanupObserver(q));
						}
						_cleanupObserver(q) {
							if (this._observedElements.has(q)) {
								const { observer: Re, stream: de } = this._observedElements.get(q);
								Re && Re.disconnect(), de.complete(), this._observedElements.delete(q);
							}
						}
					}
					return (
						(Q.ɵfac = function (q) {
							return new (q || Q)(P.LFG(we));
						}),
						(Q.ɵprov = P.Yz7({
							token: Q,
							factory: Q.ɵfac,
							providedIn: 'root',
						})),
						Q
					);
				})(),
				De = (() => {
					class Q {
						constructor(q, Re, de) {
							(this._contentObserver = q),
								(this._elementRef = Re),
								(this._ngZone = de),
								(this.event = new P.vpe()),
								(this._disabled = !1),
								(this._currentSubscription = null);
						}
						get disabled() {
							return this._disabled;
						}
						set disabled(q) {
							(this._disabled = (0, m.Ig)(q)), this._disabled ? this._unsubscribe() : this._subscribe();
						}
						get debounce() {
							return this._debounce;
						}
						set debounce(q) {
							(this._debounce = (0, m.su)(q)), this._subscribe();
						}
						ngAfterContentInit() {
							!this._currentSubscription && !this.disabled && this._subscribe();
						}
						ngOnDestroy() {
							this._unsubscribe();
						}
						_subscribe() {
							this._unsubscribe();
							const q = this._contentObserver.observe(this._elementRef);
							this._ngZone.runOutsideAngular(() => {
								this._currentSubscription = (
									this.debounce ? q.pipe((0, be.b)(this.debounce)) : q
								).subscribe(this.event);
							});
						}
						_unsubscribe() {
							var q;
							null === (q = this._currentSubscription) || void 0 === q || q.unsubscribe();
						}
					}
					return (
						(Q.ɵfac = function (q) {
							return new (q || Q)(P.Y36(_e), P.Y36(P.SBq), P.Y36(P.R0b));
						}),
						(Q.ɵdir = P.lG2({
							type: Q,
							selectors: [['', 'cdkObserveContent', '']],
							inputs: {
								disabled: ['cdkObserveContentDisabled', 'disabled'],
								debounce: 'debounce',
							},
							outputs: { event: 'cdkObserveContent' },
							exportAs: ['cdkObserveContent'],
						})),
						Q
					);
				})(),
				ae = (() => {
					class Q {}
					return (
						(Q.ɵfac = function (q) {
							return new (q || Q)();
						}),
						(Q.ɵmod = P.oAB({ type: Q })),
						(Q.ɵinj = P.cJS({ providers: [we] })),
						Q
					);
				})();
		},
		1314: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { aV: () => ft, X_: () => ge, Xj: () => Ie, U8: () => en });
			var m = S(6731),
				P = S(9808),
				o = S(5e3),
				G = S(3191),
				be = S(925),
				we = S(226),
				_e = S(7429),
				De = S(7579),
				ae = S(727),
				Q = S(6451),
				K = S(5698),
				q = S(2722);
			const Re = (0, be.Mq)();
			class de {
				constructor(F, U) {
					(this._viewportRuler = F),
						(this._previousHTMLStyles = { top: '', left: '' }),
						(this._isEnabled = !1),
						(this._document = U);
				}
				attach() {}
				enable() {
					if (this._canBeEnabled()) {
						const F = this._document.documentElement;
						(this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition()),
							(this._previousHTMLStyles.left = F.style.left || ''),
							(this._previousHTMLStyles.top = F.style.top || ''),
							(F.style.left = (0, G.HM)(-this._previousScrollPosition.left)),
							(F.style.top = (0, G.HM)(-this._previousScrollPosition.top)),
							F.classList.add('cdk-global-scrollblock'),
							(this._isEnabled = !0);
					}
				}
				disable() {
					if (this._isEnabled) {
						const F = this._document.documentElement,
							te = F.style,
							fe = this._document.body.style,
							Ye = te.scrollBehavior || '',
							xe = fe.scrollBehavior || '';
						(this._isEnabled = !1),
							(te.left = this._previousHTMLStyles.left),
							(te.top = this._previousHTMLStyles.top),
							F.classList.remove('cdk-global-scrollblock'),
							Re && (te.scrollBehavior = fe.scrollBehavior = 'auto'),
							window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top),
							Re && ((te.scrollBehavior = Ye), (fe.scrollBehavior = xe));
					}
				}
				_canBeEnabled() {
					if (this._document.documentElement.classList.contains('cdk-global-scrollblock') || this._isEnabled)
						return !1;
					const U = this._document.body,
						te = this._viewportRuler.getViewportSize();
					return U.scrollHeight > te.height || U.scrollWidth > te.width;
				}
			}
			class $e {
				constructor(F, U, te, fe) {
					(this._scrollDispatcher = F),
						(this._ngZone = U),
						(this._viewportRuler = te),
						(this._config = fe),
						(this._scrollSubscription = null),
						(this._detach = () => {
							this.disable(),
								this._overlayRef.hasAttached() && this._ngZone.run(() => this._overlayRef.detach());
						});
				}
				attach(F) {
					this._overlayRef = F;
				}
				enable() {
					if (this._scrollSubscription) return;
					const F = this._scrollDispatcher.scrolled(0);
					this._config && this._config.threshold && this._config.threshold > 1
						? ((this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top),
						  (this._scrollSubscription = F.subscribe(() => {
								const U = this._viewportRuler.getViewportScrollPosition().top;
								Math.abs(U - this._initialScrollPosition) > this._config.threshold
									? this._detach()
									: this._overlayRef.updatePosition();
						  })))
						: (this._scrollSubscription = F.subscribe(this._detach));
				}
				disable() {
					this._scrollSubscription &&
						(this._scrollSubscription.unsubscribe(), (this._scrollSubscription = null));
				}
				detach() {
					this.disable(), (this._overlayRef = null);
				}
			}
			class ye {
				enable() {}
				disable() {}
				attach() {}
			}
			function Ne(Oe, F) {
				return F.some((U) => Oe.bottom < U.top || Oe.top > U.bottom || Oe.right < U.left || Oe.left > U.right);
			}
			function rt(Oe, F) {
				return F.some((U) => Oe.top < U.top || Oe.bottom > U.bottom || Oe.left < U.left || Oe.right > U.right);
			}
			class at {
				constructor(F, U, te, fe) {
					(this._scrollDispatcher = F),
						(this._viewportRuler = U),
						(this._ngZone = te),
						(this._config = fe),
						(this._scrollSubscription = null);
				}
				attach(F) {
					this._overlayRef = F;
				}
				enable() {
					this._scrollSubscription ||
						(this._scrollSubscription = this._scrollDispatcher
							.scrolled(this._config ? this._config.scrollThrottle : 0)
							.subscribe(() => {
								if ((this._overlayRef.updatePosition(), this._config && this._config.autoClose)) {
									const U = this._overlayRef.overlayElement.getBoundingClientRect(),
										{ width: te, height: fe } = this._viewportRuler.getViewportSize();
									Ne(U, [
										{
											width: te,
											height: fe,
											bottom: fe,
											right: te,
											top: 0,
											left: 0,
										},
									]) && (this.disable(), this._ngZone.run(() => this._overlayRef.detach()));
								}
							}));
				}
				disable() {
					this._scrollSubscription &&
						(this._scrollSubscription.unsubscribe(), (this._scrollSubscription = null));
				}
				detach() {
					this.disable(), (this._overlayRef = null);
				}
			}
			let Ge = (() => {
				class Oe {
					constructor(U, te, fe, Ye) {
						(this._scrollDispatcher = U),
							(this._viewportRuler = te),
							(this._ngZone = fe),
							(this.noop = () => new ye()),
							(this.close = (xe) =>
								new $e(this._scrollDispatcher, this._ngZone, this._viewportRuler, xe)),
							(this.block = () => new de(this._viewportRuler, this._document)),
							(this.reposition = (xe) =>
								new at(this._scrollDispatcher, this._viewportRuler, this._ngZone, xe)),
							(this._document = Ye);
					}
				}
				return (
					(Oe.ɵfac = function (U) {
						return new (U || Oe)(o.LFG(m.mF), o.LFG(m.rL), o.LFG(o.R0b), o.LFG(P.K0));
					}),
					(Oe.ɵprov = o.Yz7({
						token: Oe,
						factory: Oe.ɵfac,
						providedIn: 'root',
					})),
					Oe
				);
			})();
			class ge {
				constructor(F) {
					if (
						((this.scrollStrategy = new ye()),
						(this.panelClass = ''),
						(this.hasBackdrop = !1),
						(this.backdropClass = 'cdk-overlay-dark-backdrop'),
						(this.disposeOnNavigation = !1),
						F)
					) {
						const U = Object.keys(F);
						for (const te of U) void 0 !== F[te] && (this[te] = F[te]);
					}
				}
			}
			class J {
				constructor(F, U) {
					(this.connectionPair = F), (this.scrollableViewProperties = U);
				}
			}
			class Pe {
				constructor(F, U, te, fe, Ye, xe, X, re, et) {
					(this._portalOutlet = F),
						(this._host = U),
						(this._pane = te),
						(this._config = fe),
						(this._ngZone = Ye),
						(this._keyboardDispatcher = xe),
						(this._document = X),
						(this._location = re),
						(this._outsideClickDispatcher = et),
						(this._backdropElement = null),
						(this._backdropClick = new De.x()),
						(this._attachments = new De.x()),
						(this._detachments = new De.x()),
						(this._locationChanges = ae.w0.EMPTY),
						(this._backdropClickHandler = (it) => this._backdropClick.next(it)),
						(this._keydownEvents = new De.x()),
						(this._outsidePointerEvents = new De.x()),
						fe.scrollStrategy &&
							((this._scrollStrategy = fe.scrollStrategy), this._scrollStrategy.attach(this)),
						(this._positionStrategy = fe.positionStrategy);
				}
				get overlayElement() {
					return this._pane;
				}
				get backdropElement() {
					return this._backdropElement;
				}
				get hostElement() {
					return this._host;
				}
				attach(F) {
					let U = this._portalOutlet.attach(F);
					return (
						!this._host.parentElement &&
							this._previousHostParent &&
							this._previousHostParent.appendChild(this._host),
						this._positionStrategy && this._positionStrategy.attach(this),
						this._updateStackingOrder(),
						this._updateElementSize(),
						this._updateElementDirection(),
						this._scrollStrategy && this._scrollStrategy.enable(),
						this._ngZone.onStable.pipe((0, K.q)(1)).subscribe(() => {
							this.hasAttached() && this.updatePosition();
						}),
						this._togglePointerEvents(!0),
						this._config.hasBackdrop && this._attachBackdrop(),
						this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0),
						this._attachments.next(),
						this._keyboardDispatcher.add(this),
						this._config.disposeOnNavigation &&
							(this._locationChanges = this._location.subscribe(() => this.dispose())),
						this._outsideClickDispatcher.add(this),
						U
					);
				}
				detach() {
					if (!this.hasAttached()) return;
					this.detachBackdrop(),
						this._togglePointerEvents(!1),
						this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(),
						this._scrollStrategy && this._scrollStrategy.disable();
					const F = this._portalOutlet.detach();
					return (
						this._detachments.next(),
						this._keyboardDispatcher.remove(this),
						this._detachContentWhenStable(),
						this._locationChanges.unsubscribe(),
						this._outsideClickDispatcher.remove(this),
						F
					);
				}
				dispose() {
					var F;
					const U = this.hasAttached();
					this._positionStrategy && this._positionStrategy.dispose(),
						this._disposeScrollStrategy(),
						this._disposeBackdrop(this._backdropElement),
						this._locationChanges.unsubscribe(),
						this._keyboardDispatcher.remove(this),
						this._portalOutlet.dispose(),
						this._attachments.complete(),
						this._backdropClick.complete(),
						this._keydownEvents.complete(),
						this._outsidePointerEvents.complete(),
						this._outsideClickDispatcher.remove(this),
						null === (F = this._host) || void 0 === F || F.remove(),
						(this._previousHostParent = this._pane = this._host = null),
						U && this._detachments.next(),
						this._detachments.complete();
				}
				hasAttached() {
					return this._portalOutlet.hasAttached();
				}
				backdropClick() {
					return this._backdropClick;
				}
				attachments() {
					return this._attachments;
				}
				detachments() {
					return this._detachments;
				}
				keydownEvents() {
					return this._keydownEvents;
				}
				outsidePointerEvents() {
					return this._outsidePointerEvents;
				}
				getConfig() {
					return this._config;
				}
				updatePosition() {
					this._positionStrategy && this._positionStrategy.apply();
				}
				updatePositionStrategy(F) {
					F !== this._positionStrategy &&
						(this._positionStrategy && this._positionStrategy.dispose(),
						(this._positionStrategy = F),
						this.hasAttached() && (F.attach(this), this.updatePosition()));
				}
				updateSize(F) {
					(this._config = Object.assign(Object.assign({}, this._config), F)), this._updateElementSize();
				}
				setDirection(F) {
					(this._config = Object.assign(Object.assign({}, this._config), { direction: F })),
						this._updateElementDirection();
				}
				addPanelClass(F) {
					this._pane && this._toggleClasses(this._pane, F, !0);
				}
				removePanelClass(F) {
					this._pane && this._toggleClasses(this._pane, F, !1);
				}
				getDirection() {
					const F = this._config.direction;
					return F ? ('string' == typeof F ? F : F.value) : 'ltr';
				}
				updateScrollStrategy(F) {
					F !== this._scrollStrategy &&
						(this._disposeScrollStrategy(),
						(this._scrollStrategy = F),
						this.hasAttached() && (F.attach(this), F.enable()));
				}
				_updateElementDirection() {
					this._host.setAttribute('dir', this.getDirection());
				}
				_updateElementSize() {
					if (!this._pane) return;
					const F = this._pane.style;
					(F.width = (0, G.HM)(this._config.width)),
						(F.height = (0, G.HM)(this._config.height)),
						(F.minWidth = (0, G.HM)(this._config.minWidth)),
						(F.minHeight = (0, G.HM)(this._config.minHeight)),
						(F.maxWidth = (0, G.HM)(this._config.maxWidth)),
						(F.maxHeight = (0, G.HM)(this._config.maxHeight));
				}
				_togglePointerEvents(F) {
					this._pane.style.pointerEvents = F ? '' : 'none';
				}
				_attachBackdrop() {
					const F = 'cdk-overlay-backdrop-showing';
					(this._backdropElement = this._document.createElement('div')),
						this._backdropElement.classList.add('cdk-overlay-backdrop'),
						this._config.backdropClass &&
							this._toggleClasses(this._backdropElement, this._config.backdropClass, !0),
						this._host.parentElement.insertBefore(this._backdropElement, this._host),
						this._backdropElement.addEventListener('click', this._backdropClickHandler),
						'undefined' != typeof requestAnimationFrame
							? this._ngZone.runOutsideAngular(() => {
									requestAnimationFrame(() => {
										this._backdropElement && this._backdropElement.classList.add(F);
									});
							  })
							: this._backdropElement.classList.add(F);
				}
				_updateStackingOrder() {
					this._host.nextSibling && this._host.parentNode.appendChild(this._host);
				}
				detachBackdrop() {
					const F = this._backdropElement;
					if (!F) return;
					let U;
					const te = () => {
						F &&
							(F.removeEventListener('click', this._backdropClickHandler),
							F.removeEventListener('transitionend', te),
							this._disposeBackdrop(F)),
							this._config.backdropClass && this._toggleClasses(F, this._config.backdropClass, !1),
							clearTimeout(U);
					};
					F.classList.remove('cdk-overlay-backdrop-showing'),
						this._ngZone.runOutsideAngular(() => {
							F.addEventListener('transitionend', te);
						}),
						(F.style.pointerEvents = 'none'),
						(U = this._ngZone.runOutsideAngular(() => setTimeout(te, 500)));
				}
				_toggleClasses(F, U, te) {
					const fe = (0, G.Eq)(U || []).filter((Ye) => !!Ye);
					fe.length && (te ? F.classList.add(...fe) : F.classList.remove(...fe));
				}
				_detachContentWhenStable() {
					this._ngZone.runOutsideAngular(() => {
						const F = this._ngZone.onStable
							.pipe((0, q.R)((0, Q.T)(this._attachments, this._detachments)))
							.subscribe(() => {
								(!this._pane || !this._host || 0 === this._pane.children.length) &&
									(this._pane &&
										this._config.panelClass &&
										this._toggleClasses(this._pane, this._config.panelClass, !1),
									this._host &&
										this._host.parentElement &&
										((this._previousHostParent = this._host.parentElement), this._host.remove()),
									F.unsubscribe());
							});
					});
				}
				_disposeScrollStrategy() {
					const F = this._scrollStrategy;
					F && (F.disable(), F.detach && F.detach());
				}
				_disposeBackdrop(F) {
					F && (F.remove(), this._backdropElement === F && (this._backdropElement = null));
				}
			}
			let Ie = (() => {
				class Oe {
					constructor(U, te) {
						(this._platform = te), (this._document = U);
					}
					ngOnDestroy() {
						var U;
						null === (U = this._containerElement) || void 0 === U || U.remove();
					}
					getContainerElement() {
						return this._containerElement || this._createContainer(), this._containerElement;
					}
					_createContainer() {
						const U = 'cdk-overlay-container';
						if (this._platform.isBrowser || (0, be.Oy)()) {
							const fe = this._document.querySelectorAll(
								`.${U}[platform="server"], .${U}[platform="test"]`
							);
							for (let Ye = 0; Ye < fe.length; Ye++) fe[Ye].remove();
						}
						const te = this._document.createElement('div');
						te.classList.add(U),
							(0, be.Oy)()
								? te.setAttribute('platform', 'test')
								: this._platform.isBrowser || te.setAttribute('platform', 'server'),
							this._document.body.appendChild(te),
							(this._containerElement = te);
					}
				}
				return (
					(Oe.ɵfac = function (U) {
						return new (U || Oe)(o.LFG(P.K0), o.LFG(be.t4));
					}),
					(Oe.ɵprov = o.Yz7({
						token: Oe,
						factory: Oe.ɵfac,
						providedIn: 'root',
					})),
					Oe
				);
			})();
			const Ue = 'cdk-overlay-connected-position-bounding-box',
				ut = /([A-Za-z%]+)$/;
			class Xe {
				constructor(F, U, te, fe, Ye) {
					(this._viewportRuler = U),
						(this._document = te),
						(this._platform = fe),
						(this._overlayContainer = Ye),
						(this._lastBoundingBoxSize = { width: 0, height: 0 }),
						(this._isPushed = !1),
						(this._canPush = !0),
						(this._growAfterOpen = !1),
						(this._hasFlexibleDimensions = !0),
						(this._positionLocked = !1),
						(this._viewportMargin = 0),
						(this._scrollables = []),
						(this._preferredPositions = []),
						(this._positionChanges = new De.x()),
						(this._resizeSubscription = ae.w0.EMPTY),
						(this._offsetX = 0),
						(this._offsetY = 0),
						(this._appliedPanelClasses = []),
						(this.positionChanges = this._positionChanges),
						this.setOrigin(F);
				}
				get positions() {
					return this._preferredPositions;
				}
				attach(F) {
					this._validatePositions(),
						F.hostElement.classList.add(Ue),
						(this._overlayRef = F),
						(this._boundingBox = F.hostElement),
						(this._pane = F.overlayElement),
						(this._isDisposed = !1),
						(this._isInitialRender = !0),
						(this._lastPosition = null),
						this._resizeSubscription.unsubscribe(),
						(this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
							(this._isInitialRender = !0), this.apply();
						}));
				}
				apply() {
					if (this._isDisposed || !this._platform.isBrowser) return;
					if (!this._isInitialRender && this._positionLocked && this._lastPosition)
						return void this.reapplyLastPosition();
					this._clearPanelClasses(),
						this._resetOverlayElementStyles(),
						this._resetBoundingBoxStyles(),
						(this._viewportRect = this._getNarrowedViewportRect()),
						(this._originRect = this._getOriginRect()),
						(this._overlayRect = this._pane.getBoundingClientRect()),
						(this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect());
					const F = this._originRect,
						U = this._overlayRect,
						te = this._viewportRect,
						fe = this._containerRect,
						Ye = [];
					let xe;
					for (let X of this._preferredPositions) {
						let re = this._getOriginPoint(F, fe, X),
							et = this._getOverlayPoint(re, U, X),
							it = this._getOverlayFit(et, U, te, X);
						if (it.isCompletelyWithinViewport)
							return (this._isPushed = !1), void this._applyPosition(X, re);
						this._canFitWithFlexibleDimensions(it, et, te)
							? Ye.push({
									position: X,
									origin: re,
									overlayRect: U,
									boundingBoxRect: this._calculateBoundingBoxRect(re, X),
							  })
							: (!xe || xe.overlayFit.visibleArea < it.visibleArea) &&
							  (xe = {
									overlayFit: it,
									overlayPoint: et,
									originPoint: re,
									position: X,
									overlayRect: U,
							  });
					}
					if (Ye.length) {
						let X = null,
							re = -1;
						for (const et of Ye) {
							const it = et.boundingBoxRect.width * et.boundingBoxRect.height * (et.position.weight || 1);
							it > re && ((re = it), (X = et));
						}
						return (this._isPushed = !1), void this._applyPosition(X.position, X.origin);
					}
					if (this._canPush)
						return (this._isPushed = !0), void this._applyPosition(xe.position, xe.originPoint);
					this._applyPosition(xe.position, xe.originPoint);
				}
				detach() {
					this._clearPanelClasses(),
						(this._lastPosition = null),
						(this._previousPushAmount = null),
						this._resizeSubscription.unsubscribe();
				}
				dispose() {
					this._isDisposed ||
						(this._boundingBox &&
							Rt(this._boundingBox.style, {
								top: '',
								left: '',
								right: '',
								bottom: '',
								height: '',
								width: '',
								alignItems: '',
								justifyContent: '',
							}),
						this._pane && this._resetOverlayElementStyles(),
						this._overlayRef && this._overlayRef.hostElement.classList.remove(Ue),
						this.detach(),
						this._positionChanges.complete(),
						(this._overlayRef = this._boundingBox = null),
						(this._isDisposed = !0));
				}
				reapplyLastPosition() {
					if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
						(this._originRect = this._getOriginRect()),
							(this._overlayRect = this._pane.getBoundingClientRect()),
							(this._viewportRect = this._getNarrowedViewportRect()),
							(this._containerRect = this._overlayContainer
								.getContainerElement()
								.getBoundingClientRect());
						const F = this._lastPosition || this._preferredPositions[0],
							U = this._getOriginPoint(this._originRect, this._containerRect, F);
						this._applyPosition(F, U);
					}
				}
				withScrollableContainers(F) {
					return (this._scrollables = F), this;
				}
				withPositions(F) {
					return (
						(this._preferredPositions = F),
						-1 === F.indexOf(this._lastPosition) && (this._lastPosition = null),
						this._validatePositions(),
						this
					);
				}
				withViewportMargin(F) {
					return (this._viewportMargin = F), this;
				}
				withFlexibleDimensions(F = !0) {
					return (this._hasFlexibleDimensions = F), this;
				}
				withGrowAfterOpen(F = !0) {
					return (this._growAfterOpen = F), this;
				}
				withPush(F = !0) {
					return (this._canPush = F), this;
				}
				withLockedPosition(F = !0) {
					return (this._positionLocked = F), this;
				}
				setOrigin(F) {
					return (this._origin = F), this;
				}
				withDefaultOffsetX(F) {
					return (this._offsetX = F), this;
				}
				withDefaultOffsetY(F) {
					return (this._offsetY = F), this;
				}
				withTransformOriginOn(F) {
					return (this._transformOriginSelector = F), this;
				}
				_getOriginPoint(F, U, te) {
					let fe, Ye;
					if ('center' == te.originX) fe = F.left + F.width / 2;
					else {
						const xe = this._isRtl() ? F.right : F.left,
							X = this._isRtl() ? F.left : F.right;
						fe = 'start' == te.originX ? xe : X;
					}
					return (
						U.left < 0 && (fe -= U.left),
						(Ye = 'center' == te.originY ? F.top + F.height / 2 : 'top' == te.originY ? F.top : F.bottom),
						U.top < 0 && (Ye -= U.top),
						{ x: fe, y: Ye }
					);
				}
				_getOverlayPoint(F, U, te) {
					let fe, Ye;
					return (
						(fe =
							'center' == te.overlayX
								? -U.width / 2
								: 'start' === te.overlayX
								? this._isRtl()
									? -U.width
									: 0
								: this._isRtl()
								? 0
								: -U.width),
						(Ye = 'center' == te.overlayY ? -U.height / 2 : 'top' == te.overlayY ? 0 : -U.height),
						{ x: F.x + fe, y: F.y + Ye }
					);
				}
				_getOverlayFit(F, U, te, fe) {
					const Ye = nt(U);
					let { x: xe, y: X } = F,
						re = this._getOffset(fe, 'x'),
						et = this._getOffset(fe, 'y');
					re && (xe += re), et && (X += et);
					let pt = 0 - X,
						At = X + Ye.height - te.height,
						Qt = this._subtractOverflows(Ye.width, 0 - xe, xe + Ye.width - te.width),
						xn = this._subtractOverflows(Ye.height, pt, At),
						mn = Qt * xn;
					return {
						visibleArea: mn,
						isCompletelyWithinViewport: Ye.width * Ye.height === mn,
						fitsInViewportVertically: xn === Ye.height,
						fitsInViewportHorizontally: Qt == Ye.width,
					};
				}
				_canFitWithFlexibleDimensions(F, U, te) {
					if (this._hasFlexibleDimensions) {
						const fe = te.bottom - U.y,
							Ye = te.right - U.x,
							xe = Ht(this._overlayRef.getConfig().minHeight),
							X = Ht(this._overlayRef.getConfig().minWidth),
							et = F.fitsInViewportHorizontally || (null != X && X <= Ye);
						return (F.fitsInViewportVertically || (null != xe && xe <= fe)) && et;
					}
					return !1;
				}
				_pushOverlayOnScreen(F, U, te) {
					if (this._previousPushAmount && this._positionLocked)
						return {
							x: F.x + this._previousPushAmount.x,
							y: F.y + this._previousPushAmount.y,
						};
					const fe = nt(U),
						Ye = this._viewportRect,
						xe = Math.max(F.x + fe.width - Ye.width, 0),
						X = Math.max(F.y + fe.height - Ye.height, 0),
						re = Math.max(Ye.top - te.top - F.y, 0),
						et = Math.max(Ye.left - te.left - F.x, 0);
					let it = 0,
						_t = 0;
					return (
						(it =
							fe.width <= Ye.width
								? et || -xe
								: F.x < this._viewportMargin
								? Ye.left - te.left - F.x
								: 0),
						(_t =
							fe.height <= Ye.height ? re || -X : F.y < this._viewportMargin ? Ye.top - te.top - F.y : 0),
						(this._previousPushAmount = { x: it, y: _t }),
						{ x: F.x + it, y: F.y + _t }
					);
				}
				_applyPosition(F, U) {
					if (
						(this._setTransformOrigin(F),
						this._setOverlayElementStyles(U, F),
						this._setBoundingBoxStyles(U, F),
						F.panelClass && this._addPanelClasses(F.panelClass),
						(this._lastPosition = F),
						this._positionChanges.observers.length)
					) {
						const te = this._getScrollVisibility(),
							fe = new J(F, te);
						this._positionChanges.next(fe);
					}
					this._isInitialRender = !1;
				}
				_setTransformOrigin(F) {
					if (!this._transformOriginSelector) return;
					const U = this._boundingBox.querySelectorAll(this._transformOriginSelector);
					let te,
						fe = F.overlayY;
					te =
						'center' === F.overlayX
							? 'center'
							: this._isRtl()
							? 'start' === F.overlayX
								? 'right'
								: 'left'
							: 'start' === F.overlayX
							? 'left'
							: 'right';
					for (let Ye = 0; Ye < U.length; Ye++) U[Ye].style.transformOrigin = `${te} ${fe}`;
				}
				_calculateBoundingBoxRect(F, U) {
					const te = this._viewportRect,
						fe = this._isRtl();
					let Ye, xe, X, it, _t, pt;
					if ('top' === U.overlayY) (xe = F.y), (Ye = te.height - xe + this._viewportMargin);
					else if ('bottom' === U.overlayY)
						(X = te.height - F.y + 2 * this._viewportMargin), (Ye = te.height - X + this._viewportMargin);
					else {
						const At = Math.min(te.bottom - F.y + te.top, F.y),
							Qt = this._lastBoundingBoxSize.height;
						(Ye = 2 * At),
							(xe = F.y - At),
							Ye > Qt && !this._isInitialRender && !this._growAfterOpen && (xe = F.y - Qt / 2);
					}
					if (('end' === U.overlayX && !fe) || ('start' === U.overlayX && fe))
						(pt = te.width - F.x + this._viewportMargin), (it = F.x - this._viewportMargin);
					else if (('start' === U.overlayX && !fe) || ('end' === U.overlayX && fe))
						(_t = F.x), (it = te.right - F.x);
					else {
						const At = Math.min(te.right - F.x + te.left, F.x),
							Qt = this._lastBoundingBoxSize.width;
						(it = 2 * At),
							(_t = F.x - At),
							it > Qt && !this._isInitialRender && !this._growAfterOpen && (_t = F.x - Qt / 2);
					}
					return {
						top: xe,
						left: _t,
						bottom: X,
						right: pt,
						width: it,
						height: Ye,
					};
				}
				_setBoundingBoxStyles(F, U) {
					const te = this._calculateBoundingBoxRect(F, U);
					!this._isInitialRender &&
						!this._growAfterOpen &&
						((te.height = Math.min(te.height, this._lastBoundingBoxSize.height)),
						(te.width = Math.min(te.width, this._lastBoundingBoxSize.width)));
					const fe = {};
					if (this._hasExactPosition())
						(fe.top = fe.left = '0'),
							(fe.bottom = fe.right = fe.maxHeight = fe.maxWidth = ''),
							(fe.width = fe.height = '100%');
					else {
						const Ye = this._overlayRef.getConfig().maxHeight,
							xe = this._overlayRef.getConfig().maxWidth;
						(fe.height = (0, G.HM)(te.height)),
							(fe.top = (0, G.HM)(te.top)),
							(fe.bottom = (0, G.HM)(te.bottom)),
							(fe.width = (0, G.HM)(te.width)),
							(fe.left = (0, G.HM)(te.left)),
							(fe.right = (0, G.HM)(te.right)),
							(fe.alignItems =
								'center' === U.overlayX ? 'center' : 'end' === U.overlayX ? 'flex-end' : 'flex-start'),
							(fe.justifyContent =
								'center' === U.overlayY
									? 'center'
									: 'bottom' === U.overlayY
									? 'flex-end'
									: 'flex-start'),
							Ye && (fe.maxHeight = (0, G.HM)(Ye)),
							xe && (fe.maxWidth = (0, G.HM)(xe));
					}
					(this._lastBoundingBoxSize = te), Rt(this._boundingBox.style, fe);
				}
				_resetBoundingBoxStyles() {
					Rt(this._boundingBox.style, {
						top: '0',
						left: '0',
						right: '0',
						bottom: '0',
						height: '',
						width: '',
						alignItems: '',
						justifyContent: '',
					});
				}
				_resetOverlayElementStyles() {
					Rt(this._pane.style, {
						top: '',
						left: '',
						bottom: '',
						right: '',
						position: '',
						transform: '',
					});
				}
				_setOverlayElementStyles(F, U) {
					const te = {},
						fe = this._hasExactPosition(),
						Ye = this._hasFlexibleDimensions,
						xe = this._overlayRef.getConfig();
					if (fe) {
						const it = this._viewportRuler.getViewportScrollPosition();
						Rt(te, this._getExactOverlayY(U, F, it)), Rt(te, this._getExactOverlayX(U, F, it));
					} else te.position = 'static';
					let X = '',
						re = this._getOffset(U, 'x'),
						et = this._getOffset(U, 'y');
					re && (X += `translateX(${re}px) `),
						et && (X += `translateY(${et}px)`),
						(te.transform = X.trim()),
						xe.maxHeight && (fe ? (te.maxHeight = (0, G.HM)(xe.maxHeight)) : Ye && (te.maxHeight = '')),
						xe.maxWidth && (fe ? (te.maxWidth = (0, G.HM)(xe.maxWidth)) : Ye && (te.maxWidth = '')),
						Rt(this._pane.style, te);
				}
				_getExactOverlayY(F, U, te) {
					let fe = { top: '', bottom: '' },
						Ye = this._getOverlayPoint(U, this._overlayRect, F);
					return (
						this._isPushed && (Ye = this._pushOverlayOnScreen(Ye, this._overlayRect, te)),
						'bottom' === F.overlayY
							? (fe.bottom =
									this._document.documentElement.clientHeight -
									(Ye.y + this._overlayRect.height) +
									'px')
							: (fe.top = (0, G.HM)(Ye.y)),
						fe
					);
				}
				_getExactOverlayX(F, U, te) {
					let xe,
						fe = { left: '', right: '' },
						Ye = this._getOverlayPoint(U, this._overlayRect, F);
					return (
						this._isPushed && (Ye = this._pushOverlayOnScreen(Ye, this._overlayRect, te)),
						(xe = this._isRtl()
							? 'end' === F.overlayX
								? 'left'
								: 'right'
							: 'end' === F.overlayX
							? 'right'
							: 'left'),
						'right' === xe
							? (fe.right =
									this._document.documentElement.clientWidth -
									(Ye.x + this._overlayRect.width) +
									'px')
							: (fe.left = (0, G.HM)(Ye.x)),
						fe
					);
				}
				_getScrollVisibility() {
					const F = this._getOriginRect(),
						U = this._pane.getBoundingClientRect(),
						te = this._scrollables.map((fe) => fe.getElementRef().nativeElement.getBoundingClientRect());
					return {
						isOriginClipped: rt(F, te),
						isOriginOutsideView: Ne(F, te),
						isOverlayClipped: rt(U, te),
						isOverlayOutsideView: Ne(U, te),
					};
				}
				_subtractOverflows(F, ...U) {
					return U.reduce((te, fe) => te - Math.max(fe, 0), F);
				}
				_getNarrowedViewportRect() {
					const F = this._document.documentElement.clientWidth,
						U = this._document.documentElement.clientHeight,
						te = this._viewportRuler.getViewportScrollPosition();
					return {
						top: te.top + this._viewportMargin,
						left: te.left + this._viewportMargin,
						right: te.left + F - this._viewportMargin,
						bottom: te.top + U - this._viewportMargin,
						width: F - 2 * this._viewportMargin,
						height: U - 2 * this._viewportMargin,
					};
				}
				_isRtl() {
					return 'rtl' === this._overlayRef.getDirection();
				}
				_hasExactPosition() {
					return !this._hasFlexibleDimensions || this._isPushed;
				}
				_getOffset(F, U) {
					return 'x' === U
						? null == F.offsetX
							? this._offsetX
							: F.offsetX
						: null == F.offsetY
						? this._offsetY
						: F.offsetY;
				}
				_validatePositions() {}
				_addPanelClasses(F) {
					this._pane &&
						(0, G.Eq)(F).forEach((U) => {
							'' !== U &&
								-1 === this._appliedPanelClasses.indexOf(U) &&
								(this._appliedPanelClasses.push(U), this._pane.classList.add(U));
						});
				}
				_clearPanelClasses() {
					this._pane &&
						(this._appliedPanelClasses.forEach((F) => {
							this._pane.classList.remove(F);
						}),
						(this._appliedPanelClasses = []));
				}
				_getOriginRect() {
					const F = this._origin;
					if (F instanceof o.SBq) return F.nativeElement.getBoundingClientRect();
					if (F instanceof Element) return F.getBoundingClientRect();
					const U = F.width || 0,
						te = F.height || 0;
					return {
						top: F.y,
						bottom: F.y + te,
						left: F.x,
						right: F.x + U,
						height: te,
						width: U,
					};
				}
			}
			function Rt(Oe, F) {
				for (let U in F) F.hasOwnProperty(U) && (Oe[U] = F[U]);
				return Oe;
			}
			function Ht(Oe) {
				if ('number' != typeof Oe && null != Oe) {
					const [F, U] = Oe.split(ut);
					return U && 'px' !== U ? null : parseFloat(F);
				}
				return Oe || null;
			}
			function nt(Oe) {
				return {
					top: Math.floor(Oe.top),
					right: Math.floor(Oe.right),
					bottom: Math.floor(Oe.bottom),
					left: Math.floor(Oe.left),
					width: Math.floor(Oe.width),
					height: Math.floor(Oe.height),
				};
			}
			const gt = 'cdk-global-overlay-wrapper';
			class ke {
				constructor() {
					(this._cssPosition = 'static'),
						(this._topOffset = ''),
						(this._bottomOffset = ''),
						(this._leftOffset = ''),
						(this._rightOffset = ''),
						(this._alignItems = ''),
						(this._justifyContent = ''),
						(this._width = ''),
						(this._height = '');
				}
				attach(F) {
					const U = F.getConfig();
					(this._overlayRef = F),
						this._width && !U.width && F.updateSize({ width: this._width }),
						this._height && !U.height && F.updateSize({ height: this._height }),
						F.hostElement.classList.add(gt),
						(this._isDisposed = !1);
				}
				top(F = '') {
					return (this._bottomOffset = ''), (this._topOffset = F), (this._alignItems = 'flex-start'), this;
				}
				left(F = '') {
					return (
						(this._rightOffset = ''), (this._leftOffset = F), (this._justifyContent = 'flex-start'), this
					);
				}
				bottom(F = '') {
					return (this._topOffset = ''), (this._bottomOffset = F), (this._alignItems = 'flex-end'), this;
				}
				right(F = '') {
					return (this._leftOffset = ''), (this._rightOffset = F), (this._justifyContent = 'flex-end'), this;
				}
				width(F = '') {
					return this._overlayRef ? this._overlayRef.updateSize({ width: F }) : (this._width = F), this;
				}
				height(F = '') {
					return this._overlayRef ? this._overlayRef.updateSize({ height: F }) : (this._height = F), this;
				}
				centerHorizontally(F = '') {
					return this.left(F), (this._justifyContent = 'center'), this;
				}
				centerVertically(F = '') {
					return this.top(F), (this._alignItems = 'center'), this;
				}
				apply() {
					if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
					const F = this._overlayRef.overlayElement.style,
						U = this._overlayRef.hostElement.style,
						te = this._overlayRef.getConfig(),
						{ width: fe, height: Ye, maxWidth: xe, maxHeight: X } = te,
						re = !(('100%' !== fe && '100vw' !== fe) || (xe && '100%' !== xe && '100vw' !== xe)),
						et = !(('100%' !== Ye && '100vh' !== Ye) || (X && '100%' !== X && '100vh' !== X));
					(F.position = this._cssPosition),
						(F.marginLeft = re ? '0' : this._leftOffset),
						(F.marginTop = et ? '0' : this._topOffset),
						(F.marginBottom = this._bottomOffset),
						(F.marginRight = this._rightOffset),
						re
							? (U.justifyContent = 'flex-start')
							: 'center' === this._justifyContent
							? (U.justifyContent = 'center')
							: 'rtl' === this._overlayRef.getConfig().direction
							? 'flex-start' === this._justifyContent
								? (U.justifyContent = 'flex-end')
								: 'flex-end' === this._justifyContent && (U.justifyContent = 'flex-start')
							: (U.justifyContent = this._justifyContent),
						(U.alignItems = et ? 'flex-start' : this._alignItems);
				}
				dispose() {
					if (this._isDisposed || !this._overlayRef) return;
					const F = this._overlayRef.overlayElement.style,
						U = this._overlayRef.hostElement,
						te = U.style;
					U.classList.remove(gt),
						(te.justifyContent =
							te.alignItems =
							F.marginTop =
							F.marginBottom =
							F.marginLeft =
							F.marginRight =
							F.position =
								''),
						(this._overlayRef = null),
						(this._isDisposed = !0);
				}
			}
			let yt = (() => {
					class Oe {
						constructor(U, te, fe, Ye) {
							(this._viewportRuler = U),
								(this._document = te),
								(this._platform = fe),
								(this._overlayContainer = Ye);
						}
						global() {
							return new ke();
						}
						flexibleConnectedTo(U) {
							return new Xe(
								U,
								this._viewportRuler,
								this._document,
								this._platform,
								this._overlayContainer
							);
						}
					}
					return (
						(Oe.ɵfac = function (U) {
							return new (U || Oe)(o.LFG(m.rL), o.LFG(P.K0), o.LFG(be.t4), o.LFG(Ie));
						}),
						(Oe.ɵprov = o.Yz7({
							token: Oe,
							factory: Oe.ɵfac,
							providedIn: 'root',
						})),
						Oe
					);
				})(),
				xt = (() => {
					class Oe {
						constructor(U) {
							(this._attachedOverlays = []), (this._document = U);
						}
						ngOnDestroy() {
							this.detach();
						}
						add(U) {
							this.remove(U), this._attachedOverlays.push(U);
						}
						remove(U) {
							const te = this._attachedOverlays.indexOf(U);
							te > -1 && this._attachedOverlays.splice(te, 1),
								0 === this._attachedOverlays.length && this.detach();
						}
					}
					return (
						(Oe.ɵfac = function (U) {
							return new (U || Oe)(o.LFG(P.K0));
						}),
						(Oe.ɵprov = o.Yz7({
							token: Oe,
							factory: Oe.ɵfac,
							providedIn: 'root',
						})),
						Oe
					);
				})(),
				sn = (() => {
					class Oe extends xt {
						constructor(U) {
							super(U),
								(this._keydownListener = (te) => {
									const fe = this._attachedOverlays;
									for (let Ye = fe.length - 1; Ye > -1; Ye--)
										if (fe[Ye]._keydownEvents.observers.length > 0) {
											fe[Ye]._keydownEvents.next(te);
											break;
										}
								});
						}
						add(U) {
							super.add(U),
								this._isAttached ||
									(this._document.body.addEventListener('keydown', this._keydownListener),
									(this._isAttached = !0));
						}
						detach() {
							this._isAttached &&
								(this._document.body.removeEventListener('keydown', this._keydownListener),
								(this._isAttached = !1));
						}
					}
					return (
						(Oe.ɵfac = function (U) {
							return new (U || Oe)(o.LFG(P.K0));
						}),
						(Oe.ɵprov = o.Yz7({
							token: Oe,
							factory: Oe.ɵfac,
							providedIn: 'root',
						})),
						Oe
					);
				})(),
				Wt = (() => {
					class Oe extends xt {
						constructor(U, te) {
							super(U),
								(this._platform = te),
								(this._cursorStyleIsSet = !1),
								(this._pointerDownListener = (fe) => {
									this._pointerDownEventTarget = (0, be.sA)(fe);
								}),
								(this._clickListener = (fe) => {
									const Ye = (0, be.sA)(fe),
										xe =
											'click' === fe.type && this._pointerDownEventTarget
												? this._pointerDownEventTarget
												: Ye;
									this._pointerDownEventTarget = null;
									const X = this._attachedOverlays.slice();
									for (let re = X.length - 1; re > -1; re--) {
										const et = X[re];
										if (!(et._outsidePointerEvents.observers.length < 1) && et.hasAttached()) {
											if (et.overlayElement.contains(Ye) || et.overlayElement.contains(xe)) break;
											et._outsidePointerEvents.next(fe);
										}
									}
								});
						}
						add(U) {
							if ((super.add(U), !this._isAttached)) {
								const te = this._document.body;
								te.addEventListener('pointerdown', this._pointerDownListener, !0),
									te.addEventListener('click', this._clickListener, !0),
									te.addEventListener('auxclick', this._clickListener, !0),
									te.addEventListener('contextmenu', this._clickListener, !0),
									this._platform.IOS &&
										!this._cursorStyleIsSet &&
										((this._cursorOriginalValue = te.style.cursor),
										(te.style.cursor = 'pointer'),
										(this._cursorStyleIsSet = !0)),
									(this._isAttached = !0);
							}
						}
						detach() {
							if (this._isAttached) {
								const U = this._document.body;
								U.removeEventListener('pointerdown', this._pointerDownListener, !0),
									U.removeEventListener('click', this._clickListener, !0),
									U.removeEventListener('auxclick', this._clickListener, !0),
									U.removeEventListener('contextmenu', this._clickListener, !0),
									this._platform.IOS &&
										this._cursorStyleIsSet &&
										((U.style.cursor = this._cursorOriginalValue), (this._cursorStyleIsSet = !1)),
									(this._isAttached = !1);
							}
						}
					}
					return (
						(Oe.ɵfac = function (U) {
							return new (U || Oe)(o.LFG(P.K0), o.LFG(be.t4));
						}),
						(Oe.ɵprov = o.Yz7({
							token: Oe,
							factory: Oe.ɵfac,
							providedIn: 'root',
						})),
						Oe
					);
				})(),
				Ot = 0,
				ft = (() => {
					class Oe {
						constructor(U, te, fe, Ye, xe, X, re, et, it, _t, pt) {
							(this.scrollStrategies = U),
								(this._overlayContainer = te),
								(this._componentFactoryResolver = fe),
								(this._positionBuilder = Ye),
								(this._keyboardDispatcher = xe),
								(this._injector = X),
								(this._ngZone = re),
								(this._document = et),
								(this._directionality = it),
								(this._location = _t),
								(this._outsideClickDispatcher = pt);
						}
						create(U) {
							const te = this._createHostElement(),
								fe = this._createPaneElement(te),
								Ye = this._createPortalOutlet(fe),
								xe = new ge(U);
							return (
								(xe.direction = xe.direction || this._directionality.value),
								new Pe(
									Ye,
									te,
									fe,
									xe,
									this._ngZone,
									this._keyboardDispatcher,
									this._document,
									this._location,
									this._outsideClickDispatcher
								)
							);
						}
						position() {
							return this._positionBuilder;
						}
						_createPaneElement(U) {
							const te = this._document.createElement('div');
							return (
								(te.id = 'cdk-overlay-' + Ot++),
								te.classList.add('cdk-overlay-pane'),
								U.appendChild(te),
								te
							);
						}
						_createHostElement() {
							const U = this._document.createElement('div');
							return this._overlayContainer.getContainerElement().appendChild(U), U;
						}
						_createPortalOutlet(U) {
							return (
								this._appRef || (this._appRef = this._injector.get(o.z2F)),
								new _e.u0(
									U,
									this._componentFactoryResolver,
									this._appRef,
									this._injector,
									this._document
								)
							);
						}
					}
					return (
						(Oe.ɵfac = function (U) {
							return new (U || Oe)(
								o.LFG(Ge),
								o.LFG(Ie),
								o.LFG(o._Vd),
								o.LFG(yt),
								o.LFG(sn),
								o.LFG(o.zs3),
								o.LFG(o.R0b),
								o.LFG(P.K0),
								o.LFG(we.Is),
								o.LFG(P.Ye),
								o.LFG(Wt)
							);
						}),
						(Oe.ɵprov = o.Yz7({ token: Oe, factory: Oe.ɵfac })),
						Oe
					);
				})();
			const Vt = {
				provide: new o.OlP('cdk-connected-overlay-scroll-strategy'),
				deps: [ft],
				useFactory: function Bt(Oe) {
					return () => Oe.scrollStrategies.reposition();
				},
			};
			let en = (() => {
				class Oe {}
				return (
					(Oe.ɵfac = function (U) {
						return new (U || Oe)();
					}),
					(Oe.ɵmod = o.oAB({ type: Oe })),
					(Oe.ɵinj = o.cJS({
						providers: [ft, Vt],
						imports: [[we.vT, _e.eL, m.Cl], m.Cl],
					})),
					Oe
				);
			})();
		},
		925: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, {
				t4: () => G,
				ud: () => be,
				sA: () => at,
				ht: () => rt,
				kV: () => Ne,
				Oy: () => Ge,
				i$: () => K,
				Mq: () => de,
			});
			var m = S(5e3),
				P = S(9808);
			let o;
			try {
				o = 'undefined' != typeof Intl && Intl.v8BreakIterator;
			} catch (ge) {
				o = !1;
			}
			let ae,
				Re,
				$e,
				G = (() => {
					class ge {
						constructor(ot) {
							(this._platformId = ot),
								(this.isBrowser = this._platformId
									? (0, P.NF)(this._platformId)
									: 'object' == typeof document && !!document),
								(this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
								(this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
								(this.BLINK =
									this.isBrowser &&
									!(!window.chrome && !o) &&
									'undefined' != typeof CSS &&
									!this.EDGE &&
									!this.TRIDENT),
								(this.WEBKIT =
									this.isBrowser &&
									/AppleWebKit/i.test(navigator.userAgent) &&
									!this.BLINK &&
									!this.EDGE &&
									!this.TRIDENT),
								(this.IOS =
									this.isBrowser &&
									/iPad|iPhone|iPod/.test(navigator.userAgent) &&
									!('MSStream' in window)),
								(this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
								(this.ANDROID =
									this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT),
								(this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
						}
					}
					return (
						(ge.ɵfac = function (ot) {
							return new (ot || ge)(m.LFG(m.Lbi));
						}),
						(ge.ɵprov = m.Yz7({
							token: ge,
							factory: ge.ɵfac,
							providedIn: 'root',
						})),
						ge
					);
				})(),
				be = (() => {
					class ge {}
					return (
						(ge.ɵfac = function (ot) {
							return new (ot || ge)();
						}),
						(ge.ɵmod = m.oAB({ type: ge })),
						(ge.ɵinj = m.cJS({})),
						ge
					);
				})();
			function K(ge) {
				return (function Q() {
					if (null == ae && 'undefined' != typeof window)
						try {
							window.addEventListener(
								'test',
								null,
								Object.defineProperty({}, 'passive', {
									get: () => (ae = !0),
								})
							);
						} finally {
							ae = ae || !1;
						}
					return ae;
				})()
					? ge
					: !!ge.capture;
			}
			function de() {
				if (null == Re) {
					if ('object' != typeof document || !document || 'function' != typeof Element || !Element)
						return (Re = !1), Re;
					if ('scrollBehavior' in document.documentElement.style) Re = !0;
					else {
						const ge = Element.prototype.scrollTo;
						Re = !!ge && !/\{\s*\[native code\]\s*\}/.test(ge.toString());
					}
				}
				return Re;
			}
			function Ne(ge) {
				if (
					(function ye() {
						if (null == $e) {
							const ge = 'undefined' != typeof document ? document.head : null;
							$e = !(!ge || (!ge.createShadowRoot && !ge.attachShadow));
						}
						return $e;
					})()
				) {
					const tt = ge.getRootNode ? ge.getRootNode() : null;
					if ('undefined' != typeof ShadowRoot && ShadowRoot && tt instanceof ShadowRoot) return tt;
				}
				return null;
			}
			function rt() {
				let ge = 'undefined' != typeof document && document ? document.activeElement : null;
				for (; ge && ge.shadowRoot; ) {
					const tt = ge.shadowRoot.activeElement;
					if (tt === ge) break;
					ge = tt;
				}
				return ge;
			}
			function at(ge) {
				return ge.composedPath ? ge.composedPath()[0] : ge.target;
			}
			function Ge() {
				return (
					('undefined' != typeof __karma__ && !!__karma__) ||
					('undefined' != typeof jasmine && !!jasmine) ||
					('undefined' != typeof jest && !!jest) ||
					('undefined' != typeof Mocha && !!Mocha)
				);
			}
		},
		7429: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, {
				en: () => Re,
				Pl: () => rt,
				C5: () => Q,
				u0: () => Be,
				eL: () => Ge,
				UE: () => K,
			});
			var m = S(5e3),
				P = S(9808);
			class ae {
				attach(ot) {
					return (this._attachedHost = ot), ot.attach(this);
				}
				detach() {
					let ot = this._attachedHost;
					null != ot && ((this._attachedHost = null), ot.detach());
				}
				get isAttached() {
					return null != this._attachedHost;
				}
				setAttachedHost(ot) {
					this._attachedHost = ot;
				}
			}
			class Q extends ae {
				constructor(ot, J, We, ce) {
					super(),
						(this.component = ot),
						(this.viewContainerRef = J),
						(this.injector = We),
						(this.componentFactoryResolver = ce);
				}
			}
			class K extends ae {
				constructor(ot, J, We) {
					super(), (this.templateRef = ot), (this.viewContainerRef = J), (this.context = We);
				}
				get origin() {
					return this.templateRef.elementRef;
				}
				attach(ot, J = this.context) {
					return (this.context = J), super.attach(ot);
				}
				detach() {
					return (this.context = void 0), super.detach();
				}
			}
			class q extends ae {
				constructor(ot) {
					super(), (this.element = ot instanceof m.SBq ? ot.nativeElement : ot);
				}
			}
			class Re {
				constructor() {
					(this._isDisposed = !1), (this.attachDomPortal = null);
				}
				hasAttached() {
					return !!this._attachedPortal;
				}
				attach(ot) {
					return ot instanceof Q
						? ((this._attachedPortal = ot), this.attachComponentPortal(ot))
						: ot instanceof K
						? ((this._attachedPortal = ot), this.attachTemplatePortal(ot))
						: this.attachDomPortal && ot instanceof q
						? ((this._attachedPortal = ot), this.attachDomPortal(ot))
						: void 0;
				}
				detach() {
					this._attachedPortal && (this._attachedPortal.setAttachedHost(null), (this._attachedPortal = null)),
						this._invokeDisposeFn();
				}
				dispose() {
					this.hasAttached() && this.detach(), this._invokeDisposeFn(), (this._isDisposed = !0);
				}
				setDisposeFn(ot) {
					this._disposeFn = ot;
				}
				_invokeDisposeFn() {
					this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
				}
			}
			class Be extends Re {
				constructor(ot, J, We, ce, Pe) {
					super(),
						(this.outletElement = ot),
						(this._componentFactoryResolver = J),
						(this._appRef = We),
						(this._defaultInjector = ce),
						(this.attachDomPortal = (Ie) => {
							const Ue = Ie.element,
								ut = this._document.createComment('dom-portal');
							Ue.parentNode.insertBefore(ut, Ue),
								this.outletElement.appendChild(Ue),
								(this._attachedPortal = Ie),
								super.setDisposeFn(() => {
									ut.parentNode && ut.parentNode.replaceChild(Ue, ut);
								});
						}),
						(this._document = Pe);
				}
				attachComponentPortal(ot) {
					const We = (ot.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(
						ot.component
					);
					let ce;
					return (
						ot.viewContainerRef
							? ((ce = ot.viewContainerRef.createComponent(
									We,
									ot.viewContainerRef.length,
									ot.injector || ot.viewContainerRef.injector
							  )),
							  this.setDisposeFn(() => ce.destroy()))
							: ((ce = We.create(ot.injector || this._defaultInjector)),
							  this._appRef.attachView(ce.hostView),
							  this.setDisposeFn(() => {
									this._appRef.detachView(ce.hostView), ce.destroy();
							  })),
						this.outletElement.appendChild(this._getComponentRootNode(ce)),
						(this._attachedPortal = ot),
						ce
					);
				}
				attachTemplatePortal(ot) {
					let J = ot.viewContainerRef,
						We = J.createEmbeddedView(ot.templateRef, ot.context);
					return (
						We.rootNodes.forEach((ce) => this.outletElement.appendChild(ce)),
						We.detectChanges(),
						this.setDisposeFn(() => {
							let ce = J.indexOf(We);
							-1 !== ce && J.remove(ce);
						}),
						(this._attachedPortal = ot),
						We
					);
				}
				dispose() {
					super.dispose(), this.outletElement.remove();
				}
				_getComponentRootNode(ot) {
					return ot.hostView.rootNodes[0];
				}
			}
			let rt = (() => {
					class tt extends Re {
						constructor(J, We, ce) {
							super(),
								(this._componentFactoryResolver = J),
								(this._viewContainerRef = We),
								(this._isInitialized = !1),
								(this.attached = new m.vpe()),
								(this.attachDomPortal = (Pe) => {
									const Ie = Pe.element,
										Ue = this._document.createComment('dom-portal');
									Pe.setAttachedHost(this),
										Ie.parentNode.insertBefore(Ue, Ie),
										this._getRootNode().appendChild(Ie),
										(this._attachedPortal = Pe),
										super.setDisposeFn(() => {
											Ue.parentNode && Ue.parentNode.replaceChild(Ie, Ue);
										});
								}),
								(this._document = ce);
						}
						get portal() {
							return this._attachedPortal;
						}
						set portal(J) {
							(this.hasAttached() && !J && !this._isInitialized) ||
								(this.hasAttached() && super.detach(),
								J && super.attach(J),
								(this._attachedPortal = J || null));
						}
						get attachedRef() {
							return this._attachedRef;
						}
						ngOnInit() {
							this._isInitialized = !0;
						}
						ngOnDestroy() {
							super.dispose(), (this._attachedPortal = null), (this._attachedRef = null);
						}
						attachComponentPortal(J) {
							J.setAttachedHost(this);
							const We = null != J.viewContainerRef ? J.viewContainerRef : this._viewContainerRef,
								Pe = (
									J.componentFactoryResolver || this._componentFactoryResolver
								).resolveComponentFactory(J.component),
								Ie = We.createComponent(Pe, We.length, J.injector || We.injector);
							return (
								We !== this._viewContainerRef &&
									this._getRootNode().appendChild(Ie.hostView.rootNodes[0]),
								super.setDisposeFn(() => Ie.destroy()),
								(this._attachedPortal = J),
								(this._attachedRef = Ie),
								this.attached.emit(Ie),
								Ie
							);
						}
						attachTemplatePortal(J) {
							J.setAttachedHost(this);
							const We = this._viewContainerRef.createEmbeddedView(J.templateRef, J.context);
							return (
								super.setDisposeFn(() => this._viewContainerRef.clear()),
								(this._attachedPortal = J),
								(this._attachedRef = We),
								this.attached.emit(We),
								We
							);
						}
						_getRootNode() {
							const J = this._viewContainerRef.element.nativeElement;
							return J.nodeType === J.ELEMENT_NODE ? J : J.parentNode;
						}
					}
					return (
						(tt.ɵfac = function (J) {
							return new (J || tt)(m.Y36(m._Vd), m.Y36(m.s_b), m.Y36(P.K0));
						}),
						(tt.ɵdir = m.lG2({
							type: tt,
							selectors: [['', 'cdkPortalOutlet', '']],
							inputs: { portal: ['cdkPortalOutlet', 'portal'] },
							outputs: { attached: 'attached' },
							exportAs: ['cdkPortalOutlet'],
							features: [m.qOj],
						})),
						tt
					);
				})(),
				Ge = (() => {
					class tt {}
					return (
						(tt.ɵfac = function (J) {
							return new (J || tt)();
						}),
						(tt.ɵmod = m.oAB({ type: tt })),
						(tt.ɵinj = m.cJS({})),
						tt
					);
				})();
		},
		6731: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { ZD: () => en, mF: () => Wt, Cl: () => bn, rL: () => Je });
			var m = S(3191),
				P = S(5e3),
				o = S(4408);
			let be,
				G = 1;
			const we = {};
			function _e(Oe) {
				return Oe in we && (delete we[Oe], !0);
			}
			const De = {
					setImmediate(Oe) {
						const F = G++;
						return (we[F] = !0), be || (be = Promise.resolve()), be.then(() => _e(F) && Oe()), F;
					},
					clearImmediate(Oe) {
						_e(Oe);
					},
				},
				{ setImmediate: Q, clearImmediate: K } = De,
				q = {
					setImmediate(...Oe) {
						const { delegate: F } = q;
						return ((null == F ? void 0 : F.setImmediate) || Q)(...Oe);
					},
					clearImmediate(Oe) {
						const { delegate: F } = q;
						return ((null == F ? void 0 : F.clearImmediate) || K)(Oe);
					},
					delegate: void 0,
				};
			var de = S(640);
			new (class Be extends de.v {
				flush(F) {
					(this._active = !0), (this._scheduled = void 0);
					const { actions: U } = this;
					let te,
						fe = -1;
					F = F || U.shift();
					const Ye = U.length;
					do {
						if ((te = F.execute(F.state, F.delay))) break;
					} while (++fe < Ye && (F = U.shift()));
					if (((this._active = !1), te)) {
						for (; ++fe < Ye && (F = U.shift()); ) F.unsubscribe();
						throw te;
					}
				}
			})(
				class Re extends o.o {
					constructor(F, U) {
						super(F, U), (this.scheduler = F), (this.work = U);
					}
					requestAsyncId(F, U, te = 0) {
						return null !== te && te > 0
							? super.requestAsyncId(F, U, te)
							: (F.actions.push(this),
							  F._scheduled || (F._scheduled = q.setImmediate(F.flush.bind(F, void 0))));
					}
					recycleAsyncId(F, U, te = 0) {
						if ((null != te && te > 0) || (null == te && this.delay > 0))
							return super.recycleAsyncId(F, U, te);
						0 === F.actions.length && (q.clearImmediate(U), (F._scheduled = void 0));
					}
				}
			);
			var Ne = S(7579),
				rt = S(9646),
				at = S(8306),
				Ge = S(4968),
				tt = (S(6406), S(4986)),
				ot = S(4482),
				J = S(8421),
				We = S(5403),
				Pe = S(5963);
			function Ie(Oe, F = tt.P) {
				return (function ce(Oe) {
					return (0, ot.e)((F, U) => {
						let te = !1,
							fe = null,
							Ye = null,
							xe = !1;
						const X = () => {
								if ((null == Ye || Ye.unsubscribe(), (Ye = null), te)) {
									te = !1;
									const et = fe;
									(fe = null), U.next(et);
								}
								xe && U.complete();
							},
							re = () => {
								(Ye = null), xe && U.complete();
							};
						F.subscribe(
							new We.Q(
								U,
								(et) => {
									(te = !0), (fe = et), Ye || (0, J.Xf)(Oe(et)).subscribe((Ye = new We.Q(U, X, re)));
								},
								() => {
									(xe = !0), (!te || !Ye || Ye.closed) && U.complete();
								}
							)
						);
					});
				})(() => (0, Pe.H)(Oe, F));
			}
			var Ue = S(9300),
				ut = S(9808),
				Xe = S(925),
				Rt = S(226);
			let Wt = (() => {
					class Oe {
						constructor(U, te, fe) {
							(this._ngZone = U),
								(this._platform = te),
								(this._scrolled = new Ne.x()),
								(this._globalSubscription = null),
								(this._scrolledCount = 0),
								(this.scrollContainers = new Map()),
								(this._document = fe);
						}
						register(U) {
							this.scrollContainers.has(U) ||
								this.scrollContainers.set(
									U,
									U.elementScrolled().subscribe(() => this._scrolled.next(U))
								);
						}
						deregister(U) {
							const te = this.scrollContainers.get(U);
							te && (te.unsubscribe(), this.scrollContainers.delete(U));
						}
						scrolled(U = 20) {
							return this._platform.isBrowser
								? new at.y((te) => {
										this._globalSubscription || this._addGlobalListener();
										const fe =
											U > 0
												? this._scrolled.pipe(Ie(U)).subscribe(te)
												: this._scrolled.subscribe(te);
										return (
											this._scrolledCount++,
											() => {
												fe.unsubscribe(),
													this._scrolledCount--,
													this._scrolledCount || this._removeGlobalListener();
											}
										);
								  })
								: (0, rt.of)();
						}
						ngOnDestroy() {
							this._removeGlobalListener(),
								this.scrollContainers.forEach((U, te) => this.deregister(te)),
								this._scrolled.complete();
						}
						ancestorScrolled(U, te) {
							const fe = this.getAncestorScrollContainers(U);
							return this.scrolled(te).pipe((0, Ue.h)((Ye) => !Ye || fe.indexOf(Ye) > -1));
						}
						getAncestorScrollContainers(U) {
							const te = [];
							return (
								this.scrollContainers.forEach((fe, Ye) => {
									this._scrollableContainsElement(Ye, U) && te.push(Ye);
								}),
								te
							);
						}
						_getWindow() {
							return this._document.defaultView || window;
						}
						_scrollableContainsElement(U, te) {
							let fe = (0, m.fI)(te),
								Ye = U.getElementRef().nativeElement;
							do {
								if (fe == Ye) return !0;
							} while ((fe = fe.parentElement));
							return !1;
						}
						_addGlobalListener() {
							this._globalSubscription = this._ngZone.runOutsideAngular(() => {
								const U = this._getWindow();
								return (0, Ge.R)(U.document, 'scroll').subscribe(() => this._scrolled.next());
							});
						}
						_removeGlobalListener() {
							this._globalSubscription &&
								(this._globalSubscription.unsubscribe(), (this._globalSubscription = null));
						}
					}
					return (
						(Oe.ɵfac = function (U) {
							return new (U || Oe)(P.LFG(P.R0b), P.LFG(Xe.t4), P.LFG(ut.K0, 8));
						}),
						(Oe.ɵprov = P.Yz7({
							token: Oe,
							factory: Oe.ɵfac,
							providedIn: 'root',
						})),
						Oe
					);
				})(),
				Je = (() => {
					class Oe {
						constructor(U, te, fe) {
							(this._platform = U),
								(this._change = new Ne.x()),
								(this._changeListener = (Ye) => {
									this._change.next(Ye);
								}),
								(this._document = fe),
								te.runOutsideAngular(() => {
									if (U.isBrowser) {
										const Ye = this._getWindow();
										Ye.addEventListener('resize', this._changeListener),
											Ye.addEventListener('orientationchange', this._changeListener);
									}
									this.change().subscribe(() => (this._viewportSize = null));
								});
						}
						ngOnDestroy() {
							if (this._platform.isBrowser) {
								const U = this._getWindow();
								U.removeEventListener('resize', this._changeListener),
									U.removeEventListener('orientationchange', this._changeListener);
							}
							this._change.complete();
						}
						getViewportSize() {
							this._viewportSize || this._updateViewportSize();
							const U = {
								width: this._viewportSize.width,
								height: this._viewportSize.height,
							};
							return this._platform.isBrowser || (this._viewportSize = null), U;
						}
						getViewportRect() {
							const U = this.getViewportScrollPosition(),
								{ width: te, height: fe } = this.getViewportSize();
							return {
								top: U.top,
								left: U.left,
								bottom: U.top + fe,
								right: U.left + te,
								height: fe,
								width: te,
							};
						}
						getViewportScrollPosition() {
							if (!this._platform.isBrowser) return { top: 0, left: 0 };
							const U = this._document,
								te = this._getWindow(),
								fe = U.documentElement,
								Ye = fe.getBoundingClientRect();
							return {
								top: -Ye.top || U.body.scrollTop || te.scrollY || fe.scrollTop || 0,
								left: -Ye.left || U.body.scrollLeft || te.scrollX || fe.scrollLeft || 0,
							};
						}
						change(U = 20) {
							return U > 0 ? this._change.pipe(Ie(U)) : this._change;
						}
						_getWindow() {
							return this._document.defaultView || window;
						}
						_updateViewportSize() {
							const U = this._getWindow();
							this._viewportSize = this._platform.isBrowser
								? { width: U.innerWidth, height: U.innerHeight }
								: { width: 0, height: 0 };
						}
					}
					return (
						(Oe.ɵfac = function (U) {
							return new (U || Oe)(P.LFG(Xe.t4), P.LFG(P.R0b), P.LFG(ut.K0, 8));
						}),
						(Oe.ɵprov = P.Yz7({
							token: Oe,
							factory: Oe.ɵfac,
							providedIn: 'root',
						})),
						Oe
					);
				})(),
				en = (() => {
					class Oe {}
					return (
						(Oe.ɵfac = function (U) {
							return new (U || Oe)();
						}),
						(Oe.ɵmod = P.oAB({ type: Oe })),
						(Oe.ɵinj = P.cJS({})),
						Oe
					);
				})(),
				bn = (() => {
					class Oe {}
					return (
						(Oe.ɵfac = function (U) {
							return new (U || Oe)();
						}),
						(Oe.ɵmod = P.oAB({ type: Oe })),
						(Oe.ɵinj = P.cJS({
							imports: [[Rt.vT, Xe.ud, en], Rt.vT, en],
						})),
						Oe
					);
				})();
		},
		9808: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, {
				mr: () => rt,
				ez: () => fr,
				K0: () => _e,
				uU: () => kr,
				Do: () => Ge,
				V_: () => Q,
				Ye: () => ge,
				S$: () => ye,
				sg: () => ni,
				O5: () => Bn,
				PC: () => qi,
				RF: () => ai,
				n9: () => wi,
				b0: () => at,
				lw: () => De,
				EM: () => ui,
				JF: () => Qn,
				NF: () => Di,
				w_: () => we,
				bD: () => Xi,
				q: () => o,
				Mx: () => Ki,
				HT: () => be,
			});
			var m = S(5e3);
			let P = null;
			function o() {
				return P;
			}
			function be(k) {
				P || (P = k);
			}
			class we {}
			const _e = new m.OlP('DocumentToken');
			let De = (() => {
				class k {
					historyGo(I) {
						throw new Error('Not implemented');
					}
				}
				return (
					(k.ɵfac = function (I) {
						return new (I || k)();
					}),
					(k.ɵprov = m.Yz7({
						token: k,
						factory: function () {
							return (function ae() {
								return (0, m.LFG)(K);
							})();
						},
						providedIn: 'platform',
					})),
					k
				);
			})();
			const Q = new m.OlP('Location Initialized');
			let K = (() => {
				class k extends De {
					constructor(I) {
						super(), (this._doc = I), this._init();
					}
					_init() {
						(this.location = window.location), (this._history = window.history);
					}
					getBaseHrefFromDOM() {
						return o().getBaseHref(this._doc);
					}
					onPopState(I) {
						const Y = o().getGlobalEventTarget(this._doc, 'window');
						return Y.addEventListener('popstate', I, !1), () => Y.removeEventListener('popstate', I);
					}
					onHashChange(I) {
						const Y = o().getGlobalEventTarget(this._doc, 'window');
						return Y.addEventListener('hashchange', I, !1), () => Y.removeEventListener('hashchange', I);
					}
					get href() {
						return this.location.href;
					}
					get protocol() {
						return this.location.protocol;
					}
					get hostname() {
						return this.location.hostname;
					}
					get port() {
						return this.location.port;
					}
					get pathname() {
						return this.location.pathname;
					}
					get search() {
						return this.location.search;
					}
					get hash() {
						return this.location.hash;
					}
					set pathname(I) {
						this.location.pathname = I;
					}
					pushState(I, Y, Ee) {
						q() ? this._history.pushState(I, Y, Ee) : (this.location.hash = Ee);
					}
					replaceState(I, Y, Ee) {
						q() ? this._history.replaceState(I, Y, Ee) : (this.location.hash = Ee);
					}
					forward() {
						this._history.forward();
					}
					back() {
						this._history.back();
					}
					historyGo(I = 0) {
						this._history.go(I);
					}
					getState() {
						return this._history.state;
					}
				}
				return (
					(k.ɵfac = function (I) {
						return new (I || k)(m.LFG(_e));
					}),
					(k.ɵprov = m.Yz7({
						token: k,
						factory: function () {
							return (function Re() {
								return new K((0, m.LFG)(_e));
							})();
						},
						providedIn: 'platform',
					})),
					k
				);
			})();
			function q() {
				return !!window.history.pushState;
			}
			function de(k, z) {
				if (0 == k.length) return z;
				if (0 == z.length) return k;
				let I = 0;
				return (
					k.endsWith('/') && I++,
					z.startsWith('/') && I++,
					2 == I ? k + z.substring(1) : 1 == I ? k + z : k + '/' + z
				);
			}
			function Be(k) {
				const z = k.match(/#|\?|$/),
					I = (z && z.index) || k.length;
				return k.slice(0, I - ('/' === k[I - 1] ? 1 : 0)) + k.slice(I);
			}
			function $e(k) {
				return k && '?' !== k[0] ? '?' + k : k;
			}
			let ye = (() => {
				class k {
					historyGo(I) {
						throw new Error('Not implemented');
					}
				}
				return (
					(k.ɵfac = function (I) {
						return new (I || k)();
					}),
					(k.ɵprov = m.Yz7({
						token: k,
						factory: function () {
							return (function Ne(k) {
								const z = (0, m.LFG)(_e).location;
								return new at((0, m.LFG)(De), (z && z.origin) || '');
							})();
						},
						providedIn: 'root',
					})),
					k
				);
			})();
			const rt = new m.OlP('appBaseHref');
			let at = (() => {
					class k extends ye {
						constructor(I, Y) {
							if (
								(super(),
								(this._platformLocation = I),
								(this._removeListenerFns = []),
								null == Y && (Y = this._platformLocation.getBaseHrefFromDOM()),
								null == Y)
							)
								throw new Error(
									'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
								);
							this._baseHref = Y;
						}
						ngOnDestroy() {
							for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
						}
						onPopState(I) {
							this._removeListenerFns.push(
								this._platformLocation.onPopState(I),
								this._platformLocation.onHashChange(I)
							);
						}
						getBaseHref() {
							return this._baseHref;
						}
						prepareExternalUrl(I) {
							return de(this._baseHref, I);
						}
						path(I = !1) {
							const Y = this._platformLocation.pathname + $e(this._platformLocation.search),
								Ee = this._platformLocation.hash;
							return Ee && I ? `${Y}${Ee}` : Y;
						}
						pushState(I, Y, Ee, st) {
							const pe = this.prepareExternalUrl(Ee + $e(st));
							this._platformLocation.pushState(I, Y, pe);
						}
						replaceState(I, Y, Ee, st) {
							const pe = this.prepareExternalUrl(Ee + $e(st));
							this._platformLocation.replaceState(I, Y, pe);
						}
						forward() {
							this._platformLocation.forward();
						}
						back() {
							this._platformLocation.back();
						}
						historyGo(I = 0) {
							var Y, Ee;
							null === (Ee = (Y = this._platformLocation).historyGo) || void 0 === Ee || Ee.call(Y, I);
						}
					}
					return (
						(k.ɵfac = function (I) {
							return new (I || k)(m.LFG(De), m.LFG(rt, 8));
						}),
						(k.ɵprov = m.Yz7({ token: k, factory: k.ɵfac })),
						k
					);
				})(),
				Ge = (() => {
					class k extends ye {
						constructor(I, Y) {
							super(),
								(this._platformLocation = I),
								(this._baseHref = ''),
								(this._removeListenerFns = []),
								null != Y && (this._baseHref = Y);
						}
						ngOnDestroy() {
							for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
						}
						onPopState(I) {
							this._removeListenerFns.push(
								this._platformLocation.onPopState(I),
								this._platformLocation.onHashChange(I)
							);
						}
						getBaseHref() {
							return this._baseHref;
						}
						path(I = !1) {
							let Y = this._platformLocation.hash;
							return null == Y && (Y = '#'), Y.length > 0 ? Y.substring(1) : Y;
						}
						prepareExternalUrl(I) {
							const Y = de(this._baseHref, I);
							return Y.length > 0 ? '#' + Y : Y;
						}
						pushState(I, Y, Ee, st) {
							let pe = this.prepareExternalUrl(Ee + $e(st));
							0 == pe.length && (pe = this._platformLocation.pathname),
								this._platformLocation.pushState(I, Y, pe);
						}
						replaceState(I, Y, Ee, st) {
							let pe = this.prepareExternalUrl(Ee + $e(st));
							0 == pe.length && (pe = this._platformLocation.pathname),
								this._platformLocation.replaceState(I, Y, pe);
						}
						forward() {
							this._platformLocation.forward();
						}
						back() {
							this._platformLocation.back();
						}
						historyGo(I = 0) {
							var Y, Ee;
							null === (Ee = (Y = this._platformLocation).historyGo) || void 0 === Ee || Ee.call(Y, I);
						}
					}
					return (
						(k.ɵfac = function (I) {
							return new (I || k)(m.LFG(De), m.LFG(rt, 8));
						}),
						(k.ɵprov = m.Yz7({ token: k, factory: k.ɵfac })),
						k
					);
				})(),
				ge = (() => {
					class k {
						constructor(I, Y) {
							(this._subject = new m.vpe()),
								(this._urlChangeListeners = []),
								(this._platformStrategy = I);
							const Ee = this._platformStrategy.getBaseHref();
							(this._platformLocation = Y),
								(this._baseHref = Be(J(Ee))),
								this._platformStrategy.onPopState((st) => {
									this._subject.emit({
										url: this.path(!0),
										pop: !0,
										state: st.state,
										type: st.type,
									});
								});
						}
						path(I = !1) {
							return this.normalize(this._platformStrategy.path(I));
						}
						getState() {
							return this._platformLocation.getState();
						}
						isCurrentPathEqualTo(I, Y = '') {
							return this.path() == this.normalize(I + $e(Y));
						}
						normalize(I) {
							return k.stripTrailingSlash(
								(function ot(k, z) {
									return k && z.startsWith(k) ? z.substring(k.length) : z;
								})(this._baseHref, J(I))
							);
						}
						prepareExternalUrl(I) {
							return I && '/' !== I[0] && (I = '/' + I), this._platformStrategy.prepareExternalUrl(I);
						}
						go(I, Y = '', Ee = null) {
							this._platformStrategy.pushState(Ee, '', I, Y),
								this._notifyUrlChangeListeners(this.prepareExternalUrl(I + $e(Y)), Ee);
						}
						replaceState(I, Y = '', Ee = null) {
							this._platformStrategy.replaceState(Ee, '', I, Y),
								this._notifyUrlChangeListeners(this.prepareExternalUrl(I + $e(Y)), Ee);
						}
						forward() {
							this._platformStrategy.forward();
						}
						back() {
							this._platformStrategy.back();
						}
						historyGo(I = 0) {
							var Y, Ee;
							null === (Ee = (Y = this._platformStrategy).historyGo) || void 0 === Ee || Ee.call(Y, I);
						}
						onUrlChange(I) {
							this._urlChangeListeners.push(I),
								this._urlChangeSubscription ||
									(this._urlChangeSubscription = this.subscribe((Y) => {
										this._notifyUrlChangeListeners(Y.url, Y.state);
									}));
						}
						_notifyUrlChangeListeners(I = '', Y) {
							this._urlChangeListeners.forEach((Ee) => Ee(I, Y));
						}
						subscribe(I, Y, Ee) {
							return this._subject.subscribe({
								next: I,
								error: Y,
								complete: Ee,
							});
						}
					}
					return (
						(k.normalizeQueryParams = $e),
						(k.joinWithSlash = de),
						(k.stripTrailingSlash = Be),
						(k.ɵfac = function (I) {
							return new (I || k)(m.LFG(ye), m.LFG(De));
						}),
						(k.ɵprov = m.Yz7({
							token: k,
							factory: function () {
								return (function tt() {
									return new ge((0, m.LFG)(ye), (0, m.LFG)(De));
								})();
							},
							providedIn: 'root',
						})),
						k
					);
				})();
			function J(k) {
				return k.replace(/\/index.html$/, '');
			}
			var Pe = (() => (
					((Pe = Pe || {})[(Pe.Zero = 0)] = 'Zero'),
					(Pe[(Pe.One = 1)] = 'One'),
					(Pe[(Pe.Two = 2)] = 'Two'),
					(Pe[(Pe.Few = 3)] = 'Few'),
					(Pe[(Pe.Many = 4)] = 'Many'),
					(Pe[(Pe.Other = 5)] = 'Other'),
					Pe
				))(),
				Ie = (() => (
					((Ie = Ie || {})[(Ie.Format = 0)] = 'Format'), (Ie[(Ie.Standalone = 1)] = 'Standalone'), Ie
				))(),
				Ue = (() => (
					((Ue = Ue || {})[(Ue.Narrow = 0)] = 'Narrow'),
					(Ue[(Ue.Abbreviated = 1)] = 'Abbreviated'),
					(Ue[(Ue.Wide = 2)] = 'Wide'),
					(Ue[(Ue.Short = 3)] = 'Short'),
					Ue
				))(),
				ut = (() => (
					((ut = ut || {})[(ut.Short = 0)] = 'Short'),
					(ut[(ut.Medium = 1)] = 'Medium'),
					(ut[(ut.Long = 2)] = 'Long'),
					(ut[(ut.Full = 3)] = 'Full'),
					ut
				))(),
				Xe = (() => (
					((Xe = Xe || {})[(Xe.Decimal = 0)] = 'Decimal'),
					(Xe[(Xe.Group = 1)] = 'Group'),
					(Xe[(Xe.List = 2)] = 'List'),
					(Xe[(Xe.PercentSign = 3)] = 'PercentSign'),
					(Xe[(Xe.PlusSign = 4)] = 'PlusSign'),
					(Xe[(Xe.MinusSign = 5)] = 'MinusSign'),
					(Xe[(Xe.Exponential = 6)] = 'Exponential'),
					(Xe[(Xe.SuperscriptingExponent = 7)] = 'SuperscriptingExponent'),
					(Xe[(Xe.PerMille = 8)] = 'PerMille'),
					(Xe[(Xe.Infinity = 9)] = 'Infinity'),
					(Xe[(Xe.NaN = 10)] = 'NaN'),
					(Xe[(Xe.TimeSeparator = 11)] = 'TimeSeparator'),
					(Xe[(Xe.CurrencyDecimal = 12)] = 'CurrencyDecimal'),
					(Xe[(Xe.CurrencyGroup = 13)] = 'CurrencyGroup'),
					Xe
				))();
			function Wt(k, z) {
				return te((0, m.cg1)(k)[m.wAp.DateFormat], z);
			}
			function Ot(k, z) {
				return te((0, m.cg1)(k)[m.wAp.TimeFormat], z);
			}
			function ft(k, z) {
				return te((0, m.cg1)(k)[m.wAp.DateTimeFormat], z);
			}
			function Je(k, z) {
				const I = (0, m.cg1)(k),
					Y = I[m.wAp.NumberSymbols][z];
				if (void 0 === Y) {
					if (z === Xe.CurrencyDecimal) return I[m.wAp.NumberSymbols][Xe.Decimal];
					if (z === Xe.CurrencyGroup) return I[m.wAp.NumberSymbols][Xe.Group];
				}
				return Y;
			}
			const en = m.kL8;
			function bn(k) {
				if (!k[m.wAp.ExtraData])
					throw new Error(
						`Missing extra locale data for the locale "${
							k[m.wAp.LocaleId]
						}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
					);
			}
			function te(k, z) {
				for (let I = z; I > -1; I--) if (void 0 !== k[I]) return k[I];
				throw new Error('Locale data API: locale data undefined');
			}
			function fe(k) {
				const [z, I] = k.split(':');
				return { hours: +z, minutes: +I };
			}
			const re =
					/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
				et = {},
				it =
					/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
			var _t = (() => (
					((_t = _t || {})[(_t.Short = 0)] = 'Short'),
					(_t[(_t.ShortGMT = 1)] = 'ShortGMT'),
					(_t[(_t.Long = 2)] = 'Long'),
					(_t[(_t.Extended = 3)] = 'Extended'),
					_t
				))(),
				pt = (() => (
					((pt = pt || {})[(pt.FullYear = 0)] = 'FullYear'),
					(pt[(pt.Month = 1)] = 'Month'),
					(pt[(pt.Date = 2)] = 'Date'),
					(pt[(pt.Hours = 3)] = 'Hours'),
					(pt[(pt.Minutes = 4)] = 'Minutes'),
					(pt[(pt.Seconds = 5)] = 'Seconds'),
					(pt[(pt.FractionalSeconds = 6)] = 'FractionalSeconds'),
					(pt[(pt.Day = 7)] = 'Day'),
					pt
				))(),
				At = (() => (
					((At = At || {})[(At.DayPeriods = 0)] = 'DayPeriods'),
					(At[(At.Days = 1)] = 'Days'),
					(At[(At.Months = 2)] = 'Months'),
					(At[(At.Eras = 3)] = 'Eras'),
					At
				))();
			function Qt(k, z, I, Y) {
				let Ee = (function Te(k) {
					if (Le(k)) return k;
					if ('number' == typeof k && !isNaN(k)) return new Date(k);
					if ('string' == typeof k) {
						if (((k = k.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(k))) {
							const [Ee, st = 1, pe = 1] = k.split('-').map((Lt) => +Lt);
							return xn(Ee, st - 1, pe);
						}
						const I = parseFloat(k);
						if (!isNaN(k - I)) return new Date(I);
						let Y;
						if ((Y = k.match(re)))
							return (function se(k) {
								const z = new Date(0);
								let I = 0,
									Y = 0;
								const Ee = k[8] ? z.setUTCFullYear : z.setFullYear,
									st = k[8] ? z.setUTCHours : z.setHours;
								k[9] && ((I = Number(k[9] + k[10])), (Y = Number(k[9] + k[11]))),
									Ee.call(z, Number(k[1]), Number(k[2]) - 1, Number(k[3]));
								const pe = Number(k[4] || 0) - I,
									Lt = Number(k[5] || 0) - Y,
									Nn = Number(k[6] || 0),
									on = Math.floor(1e3 * parseFloat('0.' + (k[7] || 0)));
								return st.call(z, pe, Lt, Nn, on), z;
							})(Y);
					}
					const z = new Date(k);
					if (!Le(z)) throw new Error(`Unable to convert "${k}" into a date`);
					return z;
				})(k);
				z = mn(I, z) || z;
				let Lt,
					pe = [];
				for (; z; ) {
					if (((Lt = it.exec(z)), !Lt)) {
						pe.push(z);
						break;
					}
					{
						pe = pe.concat(Lt.slice(1));
						const Gt = pe.pop();
						if (!Gt) break;
						z = Gt;
					}
				}
				let Nn = Ee.getTimezoneOffset();
				Y &&
					((Nn = _n(Y, Nn)),
					(Ee = (function qe(k, z, I) {
						const Y = I ? -1 : 1,
							Ee = k.getTimezoneOffset();
						return (function Un(k, z) {
							return (k = new Date(k.getTime())).setMinutes(k.getMinutes() + z), k;
						})(k, Y * (_n(z, Ee) - Ee));
					})(Ee, Y, !0)));
				let on = '';
				return (
					pe.forEach((Gt) => {
						const qt = (function wn(k) {
							if (Ft[k]) return Ft[k];
							let z;
							switch (k) {
								case 'G':
								case 'GG':
								case 'GGG':
									z = gn(At.Eras, Ue.Abbreviated);
									break;
								case 'GGGG':
									z = gn(At.Eras, Ue.Wide);
									break;
								case 'GGGGG':
									z = gn(At.Eras, Ue.Narrow);
									break;
								case 'y':
									z = Pt(pt.FullYear, 1, 0, !1, !0);
									break;
								case 'yy':
									z = Pt(pt.FullYear, 2, 0, !0, !0);
									break;
								case 'yyy':
									z = Pt(pt.FullYear, 3, 0, !1, !0);
									break;
								case 'yyyy':
									z = Pt(pt.FullYear, 4, 0, !1, !0);
									break;
								case 'Y':
									z = Ke(1);
									break;
								case 'YY':
									z = Ke(2, !0);
									break;
								case 'YYY':
									z = Ke(3);
									break;
								case 'YYYY':
									z = Ke(4);
									break;
								case 'M':
								case 'L':
									z = Pt(pt.Month, 1, 1);
									break;
								case 'MM':
								case 'LL':
									z = Pt(pt.Month, 2, 1);
									break;
								case 'MMM':
									z = gn(At.Months, Ue.Abbreviated);
									break;
								case 'MMMM':
									z = gn(At.Months, Ue.Wide);
									break;
								case 'MMMMM':
									z = gn(At.Months, Ue.Narrow);
									break;
								case 'LLL':
									z = gn(At.Months, Ue.Abbreviated, Ie.Standalone);
									break;
								case 'LLLL':
									z = gn(At.Months, Ue.Wide, Ie.Standalone);
									break;
								case 'LLLLL':
									z = gn(At.Months, Ue.Narrow, Ie.Standalone);
									break;
								case 'w':
									z = je(1);
									break;
								case 'ww':
									z = je(2);
									break;
								case 'W':
									z = je(1, !0);
									break;
								case 'd':
									z = Pt(pt.Date, 1);
									break;
								case 'dd':
									z = Pt(pt.Date, 2);
									break;
								case 'c':
								case 'cc':
									z = Pt(pt.Day, 1);
									break;
								case 'ccc':
									z = gn(At.Days, Ue.Abbreviated, Ie.Standalone);
									break;
								case 'cccc':
									z = gn(At.Days, Ue.Wide, Ie.Standalone);
									break;
								case 'ccccc':
									z = gn(At.Days, Ue.Narrow, Ie.Standalone);
									break;
								case 'cccccc':
									z = gn(At.Days, Ue.Short, Ie.Standalone);
									break;
								case 'E':
								case 'EE':
								case 'EEE':
									z = gn(At.Days, Ue.Abbreviated);
									break;
								case 'EEEE':
									z = gn(At.Days, Ue.Wide);
									break;
								case 'EEEEE':
									z = gn(At.Days, Ue.Narrow);
									break;
								case 'EEEEEE':
									z = gn(At.Days, Ue.Short);
									break;
								case 'a':
								case 'aa':
								case 'aaa':
									z = gn(At.DayPeriods, Ue.Abbreviated);
									break;
								case 'aaaa':
									z = gn(At.DayPeriods, Ue.Wide);
									break;
								case 'aaaaa':
									z = gn(At.DayPeriods, Ue.Narrow);
									break;
								case 'b':
								case 'bb':
								case 'bbb':
									z = gn(At.DayPeriods, Ue.Abbreviated, Ie.Standalone, !0);
									break;
								case 'bbbb':
									z = gn(At.DayPeriods, Ue.Wide, Ie.Standalone, !0);
									break;
								case 'bbbbb':
									z = gn(At.DayPeriods, Ue.Narrow, Ie.Standalone, !0);
									break;
								case 'B':
								case 'BB':
								case 'BBB':
									z = gn(At.DayPeriods, Ue.Abbreviated, Ie.Format, !0);
									break;
								case 'BBBB':
									z = gn(At.DayPeriods, Ue.Wide, Ie.Format, !0);
									break;
								case 'BBBBB':
									z = gn(At.DayPeriods, Ue.Narrow, Ie.Format, !0);
									break;
								case 'h':
									z = Pt(pt.Hours, 1, -12);
									break;
								case 'hh':
									z = Pt(pt.Hours, 2, -12);
									break;
								case 'H':
									z = Pt(pt.Hours, 1);
									break;
								case 'HH':
									z = Pt(pt.Hours, 2);
									break;
								case 'm':
									z = Pt(pt.Minutes, 1);
									break;
								case 'mm':
									z = Pt(pt.Minutes, 2);
									break;
								case 's':
									z = Pt(pt.Seconds, 1);
									break;
								case 'ss':
									z = Pt(pt.Seconds, 2);
									break;
								case 'S':
									z = Pt(pt.FractionalSeconds, 1);
									break;
								case 'SS':
									z = Pt(pt.FractionalSeconds, 2);
									break;
								case 'SSS':
									z = Pt(pt.FractionalSeconds, 3);
									break;
								case 'Z':
								case 'ZZ':
								case 'ZZZ':
									z = He(_t.Short);
									break;
								case 'ZZZZZ':
									z = He(_t.Extended);
									break;
								case 'O':
								case 'OO':
								case 'OOO':
								case 'z':
								case 'zz':
								case 'zzz':
									z = He(_t.ShortGMT);
									break;
								case 'OOOO':
								case 'ZZZZ':
								case 'zzzz':
									z = He(_t.Long);
									break;
								default:
									return null;
							}
							return (Ft[k] = z), z;
						})(Gt);
						on += qt ? qt(Ee, I, Nn) : "''" === Gt ? "'" : Gt.replace(/(^'|'$)/g, '').replace(/''/g, "'");
					}),
					on
				);
			}
			function xn(k, z, I) {
				const Y = new Date(0);
				return Y.setFullYear(k, z, I), Y.setHours(0, 0, 0), Y;
			}
			function mn(k, z) {
				const I = (function Ht(k) {
					return (0, m.cg1)(k)[m.wAp.LocaleId];
				})(k);
				if (((et[I] = et[I] || {}), et[I][z])) return et[I][z];
				let Y = '';
				switch (z) {
					case 'shortDate':
						Y = Wt(k, ut.Short);
						break;
					case 'mediumDate':
						Y = Wt(k, ut.Medium);
						break;
					case 'longDate':
						Y = Wt(k, ut.Long);
						break;
					case 'fullDate':
						Y = Wt(k, ut.Full);
						break;
					case 'shortTime':
						Y = Ot(k, ut.Short);
						break;
					case 'mediumTime':
						Y = Ot(k, ut.Medium);
						break;
					case 'longTime':
						Y = Ot(k, ut.Long);
						break;
					case 'fullTime':
						Y = Ot(k, ut.Full);
						break;
					case 'short':
						const Ee = mn(k, 'shortTime'),
							st = mn(k, 'shortDate');
						Y = On(ft(k, ut.Short), [Ee, st]);
						break;
					case 'medium':
						const pe = mn(k, 'mediumTime'),
							Lt = mn(k, 'mediumDate');
						Y = On(ft(k, ut.Medium), [pe, Lt]);
						break;
					case 'long':
						const Nn = mn(k, 'longTime'),
							on = mn(k, 'longDate');
						Y = On(ft(k, ut.Long), [Nn, on]);
						break;
					case 'full':
						const Gt = mn(k, 'fullTime'),
							qt = mn(k, 'fullDate');
						Y = On(ft(k, ut.Full), [Gt, qt]);
				}
				return Y && (et[I][z] = Y), Y;
			}
			function On(k, z) {
				return (
					z &&
						(k = k.replace(/\{([^}]+)}/g, function (I, Y) {
							return null != z && Y in z ? z[Y] : I;
						})),
					k
				);
			}
			function An(k, z, I = '-', Y, Ee) {
				let st = '';
				(k < 0 || (Ee && k <= 0)) && (Ee ? (k = 1 - k) : ((k = -k), (st = I)));
				let pe = String(k);
				for (; pe.length < z; ) pe = '0' + pe;
				return Y && (pe = pe.substr(pe.length - z)), st + pe;
			}
			function Pt(k, z, I = 0, Y = !1, Ee = !1) {
				return function (st, pe) {
					let Lt = (function Yn(k, z) {
						switch (k) {
							case pt.FullYear:
								return z.getFullYear();
							case pt.Month:
								return z.getMonth();
							case pt.Date:
								return z.getDate();
							case pt.Hours:
								return z.getHours();
							case pt.Minutes:
								return z.getMinutes();
							case pt.Seconds:
								return z.getSeconds();
							case pt.FractionalSeconds:
								return z.getMilliseconds();
							case pt.Day:
								return z.getDay();
							default:
								throw new Error(`Unknown DateType value "${k}".`);
						}
					})(k, st);
					if (((I > 0 || Lt > -I) && (Lt += I), k === pt.Hours)) 0 === Lt && -12 === I && (Lt = 12);
					else if (k === pt.FractionalSeconds)
						return (function cn(k, z) {
							return An(k, 3).substr(0, z);
						})(Lt, z);
					const Nn = Je(pe, Xe.MinusSign);
					return An(Lt, z, Nn, Y, Ee);
				};
			}
			function gn(k, z, I = Ie.Format, Y = !1) {
				return function (Ee, st) {
					return (function Me(k, z, I, Y, Ee, st) {
						switch (I) {
							case At.Months:
								return (function ke(k, z, I) {
									const Y = (0, m.cg1)(k),
										st = te([Y[m.wAp.MonthsFormat], Y[m.wAp.MonthsStandalone]], z);
									return te(st, I);
								})(z, Ee, Y)[k.getMonth()];
							case At.Days:
								return (function gt(k, z, I) {
									const Y = (0, m.cg1)(k),
										st = te([Y[m.wAp.DaysFormat], Y[m.wAp.DaysStandalone]], z);
									return te(st, I);
								})(z, Ee, Y)[k.getDay()];
							case At.DayPeriods:
								const pe = k.getHours(),
									Lt = k.getMinutes();
								if (st) {
									const on = (function Oe(k) {
											const z = (0, m.cg1)(k);
											return (
												bn(z),
												(z[m.wAp.ExtraData][2] || []).map((Y) =>
													'string' == typeof Y ? fe(Y) : [fe(Y[0]), fe(Y[1])]
												)
											);
										})(z),
										Gt = (function F(k, z, I) {
											const Y = (0, m.cg1)(k);
											bn(Y);
											const st = te([Y[m.wAp.ExtraData][0], Y[m.wAp.ExtraData][1]], z) || [];
											return te(st, I) || [];
										})(z, Ee, Y),
										qt = on.findIndex((R) => {
											if (Array.isArray(R)) {
												const [v, D] = R,
													W = pe >= v.hours && Lt >= v.minutes,
													lt = pe < D.hours || (pe === D.hours && Lt < D.minutes);
												if (v.hours < D.hours) {
													if (W && lt) return !0;
												} else if (W || lt) return !0;
											} else if (R.hours === pe && R.minutes === Lt) return !0;
											return !1;
										});
									if (-1 !== qt) return Gt[qt];
								}
								return (function nt(k, z, I) {
									const Y = (0, m.cg1)(k),
										st = te([Y[m.wAp.DayPeriodsFormat], Y[m.wAp.DayPeriodsStandalone]], z);
									return te(st, I);
								})(z, Ee, Y)[pe < 12 ? 0 : 1];
							case At.Eras:
								return (function yt(k, z) {
									return te((0, m.cg1)(k)[m.wAp.Eras], z);
								})(z, Y)[k.getFullYear() <= 0 ? 0 : 1];
							default:
								throw new Error(`unexpected translation type ${I}`);
						}
					})(Ee, st, k, z, I, Y);
				};
			}
			function He(k) {
				return function (z, I, Y) {
					const Ee = -1 * Y,
						st = Je(I, Xe.MinusSign),
						pe = Ee > 0 ? Math.floor(Ee / 60) : Math.ceil(Ee / 60);
					switch (k) {
						case _t.Short:
							return (Ee >= 0 ? '+' : '') + An(pe, 2, st) + An(Math.abs(Ee % 60), 2, st);
						case _t.ShortGMT:
							return 'GMT' + (Ee >= 0 ? '+' : '') + An(pe, 1, st);
						case _t.Long:
							return 'GMT' + (Ee >= 0 ? '+' : '') + An(pe, 2, st) + ':' + An(Math.abs(Ee % 60), 2, st);
						case _t.Extended:
							return 0 === Y
								? 'Z'
								: (Ee >= 0 ? '+' : '') + An(pe, 2, st) + ':' + An(Math.abs(Ee % 60), 2, st);
						default:
							throw new Error(`Unknown zone width "${k}"`);
					}
				};
			}
			function ee(k) {
				return xn(k.getFullYear(), k.getMonth(), k.getDate() + (4 - k.getDay()));
			}
			function je(k, z = !1) {
				return function (I, Y) {
					let Ee;
					if (z) {
						const st = new Date(I.getFullYear(), I.getMonth(), 1).getDay() - 1,
							pe = I.getDate();
						Ee = 1 + Math.floor((pe + st) / 7);
					} else {
						const st = ee(I),
							pe = (function he(k) {
								const z = xn(k, 0, 1).getDay();
								return xn(k, 0, 1 + (z <= 4 ? 4 : 11) - z);
							})(st.getFullYear()),
							Lt = st.getTime() - pe.getTime();
						Ee = 1 + Math.round(Lt / 6048e5);
					}
					return An(Ee, k, Je(Y, Xe.MinusSign));
				};
			}
			function Ke(k, z = !1) {
				return function (I, Y) {
					return An(ee(I).getFullYear(), k, Je(Y, Xe.MinusSign), z);
				};
			}
			const Ft = {};
			function _n(k, z) {
				k = k.replace(/:/g, '');
				const I = Date.parse('Jan 01, 1970 00:00:00 ' + k) / 6e4;
				return isNaN(I) ? z : I;
			}
			function Le(k) {
				return k instanceof Date && !isNaN(k.valueOf());
			}
			class dn {}
			let Wn = (() => {
				class k extends dn {
					constructor(I) {
						super(), (this.locale = I);
					}
					getPluralCategory(I, Y) {
						switch (en(Y || this.locale)(I)) {
							case Pe.Zero:
								return 'zero';
							case Pe.One:
								return 'one';
							case Pe.Two:
								return 'two';
							case Pe.Few:
								return 'few';
							case Pe.Many:
								return 'many';
							default:
								return 'other';
						}
					}
				}
				return (
					(k.ɵfac = function (I) {
						return new (I || k)(m.LFG(m.soG));
					}),
					(k.ɵprov = m.Yz7({ token: k, factory: k.ɵfac })),
					k
				);
			})();
			function Ki(k, z) {
				z = encodeURIComponent(z);
				for (const I of k.split(';')) {
					const Y = I.indexOf('='),
						[Ee, st] = -1 == Y ? [I, ''] : [I.slice(0, Y), I.slice(Y + 1)];
					if (Ee.trim() === z) return decodeURIComponent(st);
				}
				return null;
			}
			class oi {
				constructor(z, I, Y, Ee) {
					(this.$implicit = z), (this.ngForOf = I), (this.index = Y), (this.count = Ee);
				}
				get first() {
					return 0 === this.index;
				}
				get last() {
					return this.index === this.count - 1;
				}
				get even() {
					return this.index % 2 == 0;
				}
				get odd() {
					return !this.even;
				}
			}
			let ni = (() => {
				class k {
					constructor(I, Y, Ee) {
						(this._viewContainer = I),
							(this._template = Y),
							(this._differs = Ee),
							(this._ngForOf = null),
							(this._ngForOfDirty = !0),
							(this._differ = null);
					}
					set ngForOf(I) {
						(this._ngForOf = I), (this._ngForOfDirty = !0);
					}
					set ngForTrackBy(I) {
						this._trackByFn = I;
					}
					get ngForTrackBy() {
						return this._trackByFn;
					}
					set ngForTemplate(I) {
						I && (this._template = I);
					}
					ngDoCheck() {
						if (this._ngForOfDirty) {
							this._ngForOfDirty = !1;
							const I = this._ngForOf;
							!this._differ && I && (this._differ = this._differs.find(I).create(this.ngForTrackBy));
						}
						if (this._differ) {
							const I = this._differ.diff(this._ngForOf);
							I && this._applyChanges(I);
						}
					}
					_applyChanges(I) {
						const Y = this._viewContainer;
						I.forEachOperation((Ee, st, pe) => {
							if (null == Ee.previousIndex)
								Y.createEmbeddedView(
									this._template,
									new oi(Ee.item, this._ngForOf, -1, -1),
									null === pe ? void 0 : pe
								);
							else if (null == pe) Y.remove(null === st ? void 0 : st);
							else if (null !== st) {
								const Lt = Y.get(st);
								Y.move(Lt, pe), Fi(Lt, Ee);
							}
						});
						for (let Ee = 0, st = Y.length; Ee < st; Ee++) {
							const Lt = Y.get(Ee).context;
							(Lt.index = Ee), (Lt.count = st), (Lt.ngForOf = this._ngForOf);
						}
						I.forEachIdentityChange((Ee) => {
							Fi(Y.get(Ee.currentIndex), Ee);
						});
					}
					static ngTemplateContextGuard(I, Y) {
						return !0;
					}
				}
				return (
					(k.ɵfac = function (I) {
						return new (I || k)(m.Y36(m.s_b), m.Y36(m.Rgc), m.Y36(m.ZZ4));
					}),
					(k.ɵdir = m.lG2({
						type: k,
						selectors: [['', 'ngFor', '', 'ngForOf', '']],
						inputs: {
							ngForOf: 'ngForOf',
							ngForTrackBy: 'ngForTrackBy',
							ngForTemplate: 'ngForTemplate',
						},
					})),
					k
				);
			})();
			function Fi(k, z) {
				k.context.$implicit = z.item;
			}
			let Bn = (() => {
				class k {
					constructor(I, Y) {
						(this._viewContainer = I),
							(this._context = new Tn()),
							(this._thenTemplateRef = null),
							(this._elseTemplateRef = null),
							(this._thenViewRef = null),
							(this._elseViewRef = null),
							(this._thenTemplateRef = Y);
					}
					set ngIf(I) {
						(this._context.$implicit = this._context.ngIf = I), this._updateView();
					}
					set ngIfThen(I) {
						Ni('ngIfThen', I), (this._thenTemplateRef = I), (this._thenViewRef = null), this._updateView();
					}
					set ngIfElse(I) {
						Ni('ngIfElse', I), (this._elseTemplateRef = I), (this._elseViewRef = null), this._updateView();
					}
					_updateView() {
						this._context.$implicit
							? this._thenViewRef ||
							  (this._viewContainer.clear(),
							  (this._elseViewRef = null),
							  this._thenTemplateRef &&
									(this._thenViewRef = this._viewContainer.createEmbeddedView(
										this._thenTemplateRef,
										this._context
									)))
							: this._elseViewRef ||
							  (this._viewContainer.clear(),
							  (this._thenViewRef = null),
							  this._elseTemplateRef &&
									(this._elseViewRef = this._viewContainer.createEmbeddedView(
										this._elseTemplateRef,
										this._context
									)));
					}
					static ngTemplateContextGuard(I, Y) {
						return !0;
					}
				}
				return (
					(k.ɵfac = function (I) {
						return new (I || k)(m.Y36(m.s_b), m.Y36(m.Rgc));
					}),
					(k.ɵdir = m.lG2({
						type: k,
						selectors: [['', 'ngIf', '']],
						inputs: {
							ngIf: 'ngIf',
							ngIfThen: 'ngIfThen',
							ngIfElse: 'ngIfElse',
						},
					})),
					k
				);
			})();
			class Tn {
				constructor() {
					(this.$implicit = null), (this.ngIf = null);
				}
			}
			function Ni(k, z) {
				if (z && !z.createEmbeddedView)
					throw new Error(`${k} must be a TemplateRef, but received '${(0, m.AaK)(z)}'.`);
			}
			class Ii {
				constructor(z, I) {
					(this._viewContainerRef = z), (this._templateRef = I), (this._created = !1);
				}
				create() {
					(this._created = !0), this._viewContainerRef.createEmbeddedView(this._templateRef);
				}
				destroy() {
					(this._created = !1), this._viewContainerRef.clear();
				}
				enforceState(z) {
					z && !this._created ? this.create() : !z && this._created && this.destroy();
				}
			}
			let ai = (() => {
					class k {
						constructor() {
							(this._defaultUsed = !1),
								(this._caseCount = 0),
								(this._lastCaseCheckIndex = 0),
								(this._lastCasesMatched = !1);
						}
						set ngSwitch(I) {
							(this._ngSwitch = I), 0 === this._caseCount && this._updateDefaultCases(!0);
						}
						_addCase() {
							return this._caseCount++;
						}
						_addDefault(I) {
							this._defaultViews || (this._defaultViews = []), this._defaultViews.push(I);
						}
						_matchCase(I) {
							const Y = I == this._ngSwitch;
							return (
								(this._lastCasesMatched = this._lastCasesMatched || Y),
								this._lastCaseCheckIndex++,
								this._lastCaseCheckIndex === this._caseCount &&
									(this._updateDefaultCases(!this._lastCasesMatched),
									(this._lastCaseCheckIndex = 0),
									(this._lastCasesMatched = !1)),
								Y
							);
						}
						_updateDefaultCases(I) {
							if (this._defaultViews && I !== this._defaultUsed) {
								this._defaultUsed = I;
								for (let Y = 0; Y < this._defaultViews.length; Y++)
									this._defaultViews[Y].enforceState(I);
							}
						}
					}
					return (
						(k.ɵfac = function (I) {
							return new (I || k)();
						}),
						(k.ɵdir = m.lG2({
							type: k,
							selectors: [['', 'ngSwitch', '']],
							inputs: { ngSwitch: 'ngSwitch' },
						})),
						k
					);
				})(),
				wi = (() => {
					class k {
						constructor(I, Y, Ee) {
							(this.ngSwitch = Ee), Ee._addCase(), (this._view = new Ii(I, Y));
						}
						ngDoCheck() {
							this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
						}
					}
					return (
						(k.ɵfac = function (I) {
							return new (I || k)(m.Y36(m.s_b), m.Y36(m.Rgc), m.Y36(ai, 9));
						}),
						(k.ɵdir = m.lG2({
							type: k,
							selectors: [['', 'ngSwitchCase', '']],
							inputs: { ngSwitchCase: 'ngSwitchCase' },
						})),
						k
					);
				})(),
				qi = (() => {
					class k {
						constructor(I, Y, Ee) {
							(this._ngEl = I),
								(this._differs = Y),
								(this._renderer = Ee),
								(this._ngStyle = null),
								(this._differ = null);
						}
						set ngStyle(I) {
							(this._ngStyle = I), !this._differ && I && (this._differ = this._differs.find(I).create());
						}
						ngDoCheck() {
							if (this._differ) {
								const I = this._differ.diff(this._ngStyle);
								I && this._applyChanges(I);
							}
						}
						_setStyle(I, Y) {
							const [Ee, st] = I.split('.');
							null != (Y = null != Y && st ? `${Y}${st}` : Y)
								? this._renderer.setStyle(this._ngEl.nativeElement, Ee, Y)
								: this._renderer.removeStyle(this._ngEl.nativeElement, Ee);
						}
						_applyChanges(I) {
							I.forEachRemovedItem((Y) => this._setStyle(Y.key, null)),
								I.forEachAddedItem((Y) => this._setStyle(Y.key, Y.currentValue)),
								I.forEachChangedItem((Y) => this._setStyle(Y.key, Y.currentValue));
						}
					}
					return (
						(k.ɵfac = function (I) {
							return new (I || k)(m.Y36(m.SBq), m.Y36(m.aQg), m.Y36(m.Qsj));
						}),
						(k.ɵdir = m.lG2({
							type: k,
							selectors: [['', 'ngStyle', '']],
							inputs: { ngStyle: 'ngStyle' },
						})),
						k
					);
				})();
			const es = new m.OlP('DATE_PIPE_DEFAULT_TIMEZONE');
			let kr = (() => {
					class k {
						constructor(I, Y) {
							(this.locale = I), (this.defaultTimezone = Y);
						}
						transform(I, Y = 'mediumDate', Ee, st) {
							var pe;
							if (null == I || '' === I || I != I) return null;
							try {
								return Qt(
									I,
									Y,
									st || this.locale,
									null !== (pe = null != Ee ? Ee : this.defaultTimezone) && void 0 !== pe
										? pe
										: void 0
								);
							} catch (Lt) {
								throw (function li(k, z) {
									return Error(`InvalidPipeArgument: '${z}' for pipe '${(0, m.AaK)(k)}'`);
								})(k, Lt.message);
							}
						}
					}
					return (
						(k.ɵfac = function (I) {
							return new (I || k)(m.Y36(m.soG, 16), m.Y36(es, 24));
						}),
						(k.ɵpipe = m.Yjl({ name: 'date', type: k, pure: !0 })),
						k
					);
				})(),
				fr = (() => {
					class k {}
					return (
						(k.ɵfac = function (I) {
							return new (I || k)();
						}),
						(k.ɵmod = m.oAB({ type: k })),
						(k.ɵinj = m.cJS({
							providers: [{ provide: dn, useClass: Wn }],
						})),
						k
					);
				})();
			const Xi = 'browser';
			function Di(k) {
				return k === Xi;
			}
			let ui = (() => {
				class k {}
				return (
					(k.ɵprov = (0, m.Yz7)({
						token: k,
						providedIn: 'root',
						factory: () => new Nr((0, m.LFG)(_e), window),
					})),
					k
				);
			})();
			class Nr {
				constructor(z, I) {
					(this.document = z), (this.window = I), (this.offset = () => [0, 0]);
				}
				setOffset(z) {
					this.offset = Array.isArray(z) ? () => z : z;
				}
				getScrollPosition() {
					return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0];
				}
				scrollToPosition(z) {
					this.supportsScrolling() && this.window.scrollTo(z[0], z[1]);
				}
				scrollToAnchor(z) {
					if (!this.supportsScrolling()) return;
					const I = (function hi(k, z) {
						const I = k.getElementById(z) || k.getElementsByName(z)[0];
						if (I) return I;
						if (
							'function' == typeof k.createTreeWalker &&
							k.body &&
							(k.body.createShadowRoot || k.body.attachShadow)
						) {
							const Y = k.createTreeWalker(k.body, NodeFilter.SHOW_ELEMENT);
							let Ee = Y.currentNode;
							for (; Ee; ) {
								const st = Ee.shadowRoot;
								if (st) {
									const pe = st.getElementById(z) || st.querySelector(`[name="${z}"]`);
									if (pe) return pe;
								}
								Ee = Y.nextNode();
							}
						}
						return null;
					})(this.document, z);
					I && (this.scrollToElement(I), this.attemptFocus(I));
				}
				setHistoryScrollRestoration(z) {
					if (this.supportScrollRestoration()) {
						const I = this.window.history;
						I && I.scrollRestoration && (I.scrollRestoration = z);
					}
				}
				scrollToElement(z) {
					const I = z.getBoundingClientRect(),
						Y = I.left + this.window.pageXOffset,
						Ee = I.top + this.window.pageYOffset,
						st = this.offset();
					this.window.scrollTo(Y - st[0], Ee - st[1]);
				}
				attemptFocus(z) {
					return z.focus(), this.document.activeElement === z;
				}
				supportScrollRestoration() {
					try {
						if (!this.supportsScrolling()) return !1;
						const z = In(this.window.history) || In(Object.getPrototypeOf(this.window.history));
						return !(!z || (!z.writable && !z.set));
					} catch (z) {
						return !1;
					}
				}
				supportsScrolling() {
					try {
						return !!this.window && !!this.window.scrollTo && 'pageXOffset' in this.window;
					} catch (z) {
						return !1;
					}
				}
			}
			function In(k) {
				return Object.getOwnPropertyDescriptor(k, 'scrollRestoration');
			}
			class Qn {}
		},
		520: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { eN: () => Xe, JF: () => te, WM: () => Q });
			var m = S(9808),
				P = S(5e3),
				o = S(9646),
				G = S(8306),
				be = S(4351),
				we = S(9300),
				_e = S(4004);
			class De {}
			class ae {}
			class Q {
				constructor(X) {
					(this.normalizedNames = new Map()),
						(this.lazyUpdate = null),
						X
							? (this.lazyInit =
									'string' == typeof X
										? () => {
												(this.headers = new Map()),
													X.split('\n').forEach((re) => {
														const et = re.indexOf(':');
														if (et > 0) {
															const it = re.slice(0, et),
																_t = it.toLowerCase(),
																pt = re.slice(et + 1).trim();
															this.maybeSetNormalizedName(it, _t),
																this.headers.has(_t)
																	? this.headers.get(_t).push(pt)
																	: this.headers.set(_t, [pt]);
														}
													});
										  }
										: () => {
												(this.headers = new Map()),
													Object.keys(X).forEach((re) => {
														let et = X[re];
														const it = re.toLowerCase();
														'string' == typeof et && (et = [et]),
															et.length > 0 &&
																(this.headers.set(it, et),
																this.maybeSetNormalizedName(re, it));
													});
										  })
							: (this.headers = new Map());
				}
				has(X) {
					return this.init(), this.headers.has(X.toLowerCase());
				}
				get(X) {
					this.init();
					const re = this.headers.get(X.toLowerCase());
					return re && re.length > 0 ? re[0] : null;
				}
				keys() {
					return this.init(), Array.from(this.normalizedNames.values());
				}
				getAll(X) {
					return this.init(), this.headers.get(X.toLowerCase()) || null;
				}
				append(X, re) {
					return this.clone({ name: X, value: re, op: 'a' });
				}
				set(X, re) {
					return this.clone({ name: X, value: re, op: 's' });
				}
				delete(X, re) {
					return this.clone({ name: X, value: re, op: 'd' });
				}
				maybeSetNormalizedName(X, re) {
					this.normalizedNames.has(re) || this.normalizedNames.set(re, X);
				}
				init() {
					this.lazyInit &&
						(this.lazyInit instanceof Q ? this.copyFrom(this.lazyInit) : this.lazyInit(),
						(this.lazyInit = null),
						this.lazyUpdate &&
							(this.lazyUpdate.forEach((X) => this.applyUpdate(X)), (this.lazyUpdate = null)));
				}
				copyFrom(X) {
					X.init(),
						Array.from(X.headers.keys()).forEach((re) => {
							this.headers.set(re, X.headers.get(re)),
								this.normalizedNames.set(re, X.normalizedNames.get(re));
						});
				}
				clone(X) {
					const re = new Q();
					return (
						(re.lazyInit = this.lazyInit && this.lazyInit instanceof Q ? this.lazyInit : this),
						(re.lazyUpdate = (this.lazyUpdate || []).concat([X])),
						re
					);
				}
				applyUpdate(X) {
					const re = X.name.toLowerCase();
					switch (X.op) {
						case 'a':
						case 's':
							let et = X.value;
							if (('string' == typeof et && (et = [et]), 0 === et.length)) return;
							this.maybeSetNormalizedName(X.name, re);
							const it = ('a' === X.op ? this.headers.get(re) : void 0) || [];
							it.push(...et), this.headers.set(re, it);
							break;
						case 'd':
							const _t = X.value;
							if (_t) {
								let pt = this.headers.get(re);
								if (!pt) return;
								(pt = pt.filter((At) => -1 === _t.indexOf(At))),
									0 === pt.length
										? (this.headers.delete(re), this.normalizedNames.delete(re))
										: this.headers.set(re, pt);
							} else this.headers.delete(re), this.normalizedNames.delete(re);
					}
				}
				forEach(X) {
					this.init(),
						Array.from(this.normalizedNames.keys()).forEach((re) =>
							X(this.normalizedNames.get(re), this.headers.get(re))
						);
				}
			}
			class K {
				encodeKey(X) {
					return Be(X);
				}
				encodeValue(X) {
					return Be(X);
				}
				decodeKey(X) {
					return decodeURIComponent(X);
				}
				decodeValue(X) {
					return decodeURIComponent(X);
				}
			}
			const Re = /%(\d[a-f0-9])/gi,
				de = {
					40: '@',
					'3A': ':',
					24: '$',
					'2C': ',',
					'3B': ';',
					'2B': '+',
					'3D': '=',
					'3F': '?',
					'2F': '/',
				};
			function Be(xe) {
				return encodeURIComponent(xe).replace(Re, (X, re) => {
					var et;
					return null !== (et = de[re]) && void 0 !== et ? et : X;
				});
			}
			function $e(xe) {
				return `${xe}`;
			}
			class ye {
				constructor(X = {}) {
					if (
						((this.updates = null),
						(this.cloneFrom = null),
						(this.encoder = X.encoder || new K()),
						X.fromString)
					) {
						if (X.fromObject) throw new Error('Cannot specify both fromString and fromObject.');
						this.map = (function q(xe, X) {
							const re = new Map();
							return (
								xe.length > 0 &&
									xe
										.replace(/^\?/, '')
										.split('&')
										.forEach((it) => {
											const _t = it.indexOf('='),
												[pt, At] =
													-1 == _t
														? [X.decodeKey(it), '']
														: [
																X.decodeKey(it.slice(0, _t)),
																X.decodeValue(it.slice(_t + 1)),
														  ],
												Qt = re.get(pt) || [];
											Qt.push(At), re.set(pt, Qt);
										}),
								re
							);
						})(X.fromString, this.encoder);
					} else
						X.fromObject
							? ((this.map = new Map()),
							  Object.keys(X.fromObject).forEach((re) => {
									const et = X.fromObject[re];
									this.map.set(re, Array.isArray(et) ? et : [et]);
							  }))
							: (this.map = null);
				}
				has(X) {
					return this.init(), this.map.has(X);
				}
				get(X) {
					this.init();
					const re = this.map.get(X);
					return re ? re[0] : null;
				}
				getAll(X) {
					return this.init(), this.map.get(X) || null;
				}
				keys() {
					return this.init(), Array.from(this.map.keys());
				}
				append(X, re) {
					return this.clone({ param: X, value: re, op: 'a' });
				}
				appendAll(X) {
					const re = [];
					return (
						Object.keys(X).forEach((et) => {
							const it = X[et];
							Array.isArray(it)
								? it.forEach((_t) => {
										re.push({
											param: et,
											value: _t,
											op: 'a',
										});
								  })
								: re.push({ param: et, value: it, op: 'a' });
						}),
						this.clone(re)
					);
				}
				set(X, re) {
					return this.clone({ param: X, value: re, op: 's' });
				}
				delete(X, re) {
					return this.clone({ param: X, value: re, op: 'd' });
				}
				toString() {
					return (
						this.init(),
						this.keys()
							.map((X) => {
								const re = this.encoder.encodeKey(X);
								return this.map
									.get(X)
									.map((et) => re + '=' + this.encoder.encodeValue(et))
									.join('&');
							})
							.filter((X) => '' !== X)
							.join('&')
					);
				}
				clone(X) {
					const re = new ye({ encoder: this.encoder });
					return (re.cloneFrom = this.cloneFrom || this), (re.updates = (this.updates || []).concat(X)), re;
				}
				init() {
					null === this.map && (this.map = new Map()),
						null !== this.cloneFrom &&
							(this.cloneFrom.init(),
							this.cloneFrom.keys().forEach((X) => this.map.set(X, this.cloneFrom.map.get(X))),
							this.updates.forEach((X) => {
								switch (X.op) {
									case 'a':
									case 's':
										const re = ('a' === X.op ? this.map.get(X.param) : void 0) || [];
										re.push($e(X.value)), this.map.set(X.param, re);
										break;
									case 'd':
										if (void 0 === X.value) {
											this.map.delete(X.param);
											break;
										}
										{
											let et = this.map.get(X.param) || [];
											const it = et.indexOf($e(X.value));
											-1 !== it && et.splice(it, 1),
												et.length > 0 ? this.map.set(X.param, et) : this.map.delete(X.param);
										}
								}
							}),
							(this.cloneFrom = this.updates = null));
				}
			}
			class rt {
				constructor() {
					this.map = new Map();
				}
				set(X, re) {
					return this.map.set(X, re), this;
				}
				get(X) {
					return this.map.has(X) || this.map.set(X, X.defaultValue()), this.map.get(X);
				}
				delete(X) {
					return this.map.delete(X), this;
				}
				has(X) {
					return this.map.has(X);
				}
				keys() {
					return this.map.keys();
				}
			}
			function Ge(xe) {
				return 'undefined' != typeof ArrayBuffer && xe instanceof ArrayBuffer;
			}
			function ge(xe) {
				return 'undefined' != typeof Blob && xe instanceof Blob;
			}
			function tt(xe) {
				return 'undefined' != typeof FormData && xe instanceof FormData;
			}
			class J {
				constructor(X, re, et, it) {
					let _t;
					if (
						((this.url = re),
						(this.body = null),
						(this.reportProgress = !1),
						(this.withCredentials = !1),
						(this.responseType = 'json'),
						(this.method = X.toUpperCase()),
						(function at(xe) {
							switch (xe) {
								case 'DELETE':
								case 'GET':
								case 'HEAD':
								case 'OPTIONS':
								case 'JSONP':
									return !1;
								default:
									return !0;
							}
						})(this.method) || it
							? ((this.body = void 0 !== et ? et : null), (_t = it))
							: (_t = et),
						_t &&
							((this.reportProgress = !!_t.reportProgress),
							(this.withCredentials = !!_t.withCredentials),
							_t.responseType && (this.responseType = _t.responseType),
							_t.headers && (this.headers = _t.headers),
							_t.context && (this.context = _t.context),
							_t.params && (this.params = _t.params)),
						this.headers || (this.headers = new Q()),
						this.context || (this.context = new rt()),
						this.params)
					) {
						const pt = this.params.toString();
						if (0 === pt.length) this.urlWithParams = re;
						else {
							const At = re.indexOf('?');
							this.urlWithParams = re + (-1 === At ? '?' : At < re.length - 1 ? '&' : '') + pt;
						}
					} else (this.params = new ye()), (this.urlWithParams = re);
				}
				serializeBody() {
					return null === this.body
						? null
						: Ge(this.body) ||
						  ge(this.body) ||
						  tt(this.body) ||
						  (function ot(xe) {
								return 'undefined' != typeof URLSearchParams && xe instanceof URLSearchParams;
						  })(this.body) ||
						  'string' == typeof this.body
						? this.body
						: this.body instanceof ye
						? this.body.toString()
						: 'object' == typeof this.body || 'boolean' == typeof this.body || Array.isArray(this.body)
						? JSON.stringify(this.body)
						: this.body.toString();
				}
				detectContentTypeHeader() {
					return null === this.body || tt(this.body)
						? null
						: ge(this.body)
						? this.body.type || null
						: Ge(this.body)
						? null
						: 'string' == typeof this.body
						? 'text/plain'
						: this.body instanceof ye
						? 'application/x-www-form-urlencoded;charset=UTF-8'
						: 'object' == typeof this.body || 'number' == typeof this.body || 'boolean' == typeof this.body
						? 'application/json'
						: null;
				}
				clone(X = {}) {
					var re;
					const et = X.method || this.method,
						it = X.url || this.url,
						_t = X.responseType || this.responseType,
						pt = void 0 !== X.body ? X.body : this.body,
						At = void 0 !== X.withCredentials ? X.withCredentials : this.withCredentials,
						Qt = void 0 !== X.reportProgress ? X.reportProgress : this.reportProgress;
					let xn = X.headers || this.headers,
						mn = X.params || this.params;
					const On = null !== (re = X.context) && void 0 !== re ? re : this.context;
					return (
						void 0 !== X.setHeaders &&
							(xn = Object.keys(X.setHeaders).reduce((An, cn) => An.set(cn, X.setHeaders[cn]), xn)),
						X.setParams &&
							(mn = Object.keys(X.setParams).reduce((An, cn) => An.set(cn, X.setParams[cn]), mn)),
						new J(et, it, pt, {
							params: mn,
							headers: xn,
							context: On,
							reportProgress: Qt,
							responseType: _t,
							withCredentials: At,
						})
					);
				}
			}
			var We = (() => (
				((We = We || {})[(We.Sent = 0)] = 'Sent'),
				(We[(We.UploadProgress = 1)] = 'UploadProgress'),
				(We[(We.ResponseHeader = 2)] = 'ResponseHeader'),
				(We[(We.DownloadProgress = 3)] = 'DownloadProgress'),
				(We[(We.Response = 4)] = 'Response'),
				(We[(We.User = 5)] = 'User'),
				We
			))();
			class ce {
				constructor(X, re = 200, et = 'OK') {
					(this.headers = X.headers || new Q()),
						(this.status = void 0 !== X.status ? X.status : re),
						(this.statusText = X.statusText || et),
						(this.url = X.url || null),
						(this.ok = this.status >= 200 && this.status < 300);
				}
			}
			class Pe extends ce {
				constructor(X = {}) {
					super(X), (this.type = We.ResponseHeader);
				}
				clone(X = {}) {
					return new Pe({
						headers: X.headers || this.headers,
						status: void 0 !== X.status ? X.status : this.status,
						statusText: X.statusText || this.statusText,
						url: X.url || this.url || void 0,
					});
				}
			}
			class Ie extends ce {
				constructor(X = {}) {
					super(X), (this.type = We.Response), (this.body = void 0 !== X.body ? X.body : null);
				}
				clone(X = {}) {
					return new Ie({
						body: void 0 !== X.body ? X.body : this.body,
						headers: X.headers || this.headers,
						status: void 0 !== X.status ? X.status : this.status,
						statusText: X.statusText || this.statusText,
						url: X.url || this.url || void 0,
					});
				}
			}
			class Ue extends ce {
				constructor(X) {
					super(X, 0, 'Unknown Error'),
						(this.name = 'HttpErrorResponse'),
						(this.ok = !1),
						(this.message =
							this.status >= 200 && this.status < 300
								? `Http failure during parsing for ${X.url || '(unknown url)'}`
								: `Http failure response for ${X.url || '(unknown url)'}: ${X.status} ${X.statusText}`),
						(this.error = X.error || null);
				}
			}
			function ut(xe, X) {
				return {
					body: X,
					headers: xe.headers,
					context: xe.context,
					observe: xe.observe,
					params: xe.params,
					reportProgress: xe.reportProgress,
					responseType: xe.responseType,
					withCredentials: xe.withCredentials,
				};
			}
			let Xe = (() => {
				class xe {
					constructor(re) {
						this.handler = re;
					}
					request(re, et, it = {}) {
						let _t;
						if (re instanceof J) _t = re;
						else {
							let Qt, xn;
							(Qt = it.headers instanceof Q ? it.headers : new Q(it.headers)),
								it.params &&
									(xn =
										it.params instanceof ye
											? it.params
											: new ye({
													fromObject: it.params,
											  })),
								(_t = new J(re, et, void 0 !== it.body ? it.body : null, {
									headers: Qt,
									context: it.context,
									params: xn,
									reportProgress: it.reportProgress,
									responseType: it.responseType || 'json',
									withCredentials: it.withCredentials,
								}));
						}
						const pt = (0, o.of)(_t).pipe((0, be.b)((Qt) => this.handler.handle(Qt)));
						if (re instanceof J || 'events' === it.observe) return pt;
						const At = pt.pipe((0, we.h)((Qt) => Qt instanceof Ie));
						switch (it.observe || 'body') {
							case 'body':
								switch (_t.responseType) {
									case 'arraybuffer':
										return At.pipe(
											(0, _e.U)((Qt) => {
												if (null !== Qt.body && !(Qt.body instanceof ArrayBuffer))
													throw new Error('Response is not an ArrayBuffer.');
												return Qt.body;
											})
										);
									case 'blob':
										return At.pipe(
											(0, _e.U)((Qt) => {
												if (null !== Qt.body && !(Qt.body instanceof Blob))
													throw new Error('Response is not a Blob.');
												return Qt.body;
											})
										);
									case 'text':
										return At.pipe(
											(0, _e.U)((Qt) => {
												if (null !== Qt.body && 'string' != typeof Qt.body)
													throw new Error('Response is not a string.');
												return Qt.body;
											})
										);
									default:
										return At.pipe((0, _e.U)((Qt) => Qt.body));
								}
							case 'response':
								return At;
							default:
								throw new Error(`Unreachable: unhandled observe type ${it.observe}}`);
						}
					}
					delete(re, et = {}) {
						return this.request('DELETE', re, et);
					}
					get(re, et = {}) {
						return this.request('GET', re, et);
					}
					head(re, et = {}) {
						return this.request('HEAD', re, et);
					}
					jsonp(re, et) {
						return this.request('JSONP', re, {
							params: new ye().append(et, 'JSONP_CALLBACK'),
							observe: 'body',
							responseType: 'json',
						});
					}
					options(re, et = {}) {
						return this.request('OPTIONS', re, et);
					}
					patch(re, et, it = {}) {
						return this.request('PATCH', re, ut(it, et));
					}
					post(re, et, it = {}) {
						return this.request('POST', re, ut(it, et));
					}
					put(re, et, it = {}) {
						return this.request('PUT', re, ut(it, et));
					}
				}
				return (
					(xe.ɵfac = function (re) {
						return new (re || xe)(P.LFG(De));
					}),
					(xe.ɵprov = P.Yz7({ token: xe, factory: xe.ɵfac })),
					xe
				);
			})();
			class Rt {
				constructor(X, re) {
					(this.next = X), (this.interceptor = re);
				}
				handle(X) {
					return this.interceptor.intercept(X, this.next);
				}
			}
			const Ht = new P.OlP('HTTP_INTERCEPTORS');
			let nt = (() => {
				class xe {
					intercept(re, et) {
						return et.handle(re);
					}
				}
				return (
					(xe.ɵfac = function (re) {
						return new (re || xe)();
					}),
					(xe.ɵprov = P.Yz7({ token: xe, factory: xe.ɵfac })),
					xe
				);
			})();
			const ft = /^\)\]\}',?\n/;
			let Fe = (() => {
				class xe {
					constructor(re) {
						this.xhrFactory = re;
					}
					handle(re) {
						if ('JSONP' === re.method)
							throw new Error(
								'Attempted to construct Jsonp request without HttpClientJsonpModule installed.'
							);
						return new G.y((et) => {
							const it = this.xhrFactory.build();
							if (
								(it.open(re.method, re.urlWithParams),
								re.withCredentials && (it.withCredentials = !0),
								re.headers.forEach((cn, Pt) => it.setRequestHeader(cn, Pt.join(','))),
								re.headers.has('Accept') ||
									it.setRequestHeader('Accept', 'application/json, text/plain, */*'),
								!re.headers.has('Content-Type'))
							) {
								const cn = re.detectContentTypeHeader();
								null !== cn && it.setRequestHeader('Content-Type', cn);
							}
							if (re.responseType) {
								const cn = re.responseType.toLowerCase();
								it.responseType = 'json' !== cn ? cn : 'text';
							}
							const _t = re.serializeBody();
							let pt = null;
							const At = () => {
									if (null !== pt) return pt;
									const cn = 1223 === it.status ? 204 : it.status,
										Pt = it.statusText || 'OK',
										Yn = new Q(it.getAllResponseHeaders()),
										gn =
											(function Je(xe) {
												return 'responseURL' in xe && xe.responseURL
													? xe.responseURL
													: /^X-Request-URL:/m.test(xe.getAllResponseHeaders())
													? xe.getResponseHeader('X-Request-URL')
													: null;
											})(it) || re.url;
									return (
										(pt = new Pe({
											headers: Yn,
											status: cn,
											statusText: Pt,
											url: gn,
										})),
										pt
									);
								},
								Qt = () => {
									let { headers: cn, status: Pt, statusText: Yn, url: gn } = At(),
										Me = null;
									204 !== Pt && (Me = void 0 === it.response ? it.responseText : it.response),
										0 === Pt && (Pt = Me ? 200 : 0);
									let He = Pt >= 200 && Pt < 300;
									if ('json' === re.responseType && 'string' == typeof Me) {
										const ue = Me;
										Me = Me.replace(ft, '');
										try {
											Me = '' !== Me ? JSON.parse(Me) : null;
										} catch (oe) {
											(Me = ue),
												He &&
													((He = !1),
													(Me = {
														error: oe,
														text: Me,
													}));
										}
									}
									He
										? (et.next(
												new Ie({
													body: Me,
													headers: cn,
													status: Pt,
													statusText: Yn,
													url: gn || void 0,
												})
										  ),
										  et.complete())
										: et.error(
												new Ue({
													error: Me,
													headers: cn,
													status: Pt,
													statusText: Yn,
													url: gn || void 0,
												})
										  );
								},
								xn = (cn) => {
									const { url: Pt } = At(),
										Yn = new Ue({
											error: cn,
											status: it.status || 0,
											statusText: it.statusText || 'Unknown Error',
											url: Pt || void 0,
										});
									et.error(Yn);
								};
							let mn = !1;
							const On = (cn) => {
									mn || (et.next(At()), (mn = !0));
									let Pt = {
										type: We.DownloadProgress,
										loaded: cn.loaded,
									};
									cn.lengthComputable && (Pt.total = cn.total),
										'text' === re.responseType &&
											!!it.responseText &&
											(Pt.partialText = it.responseText),
										et.next(Pt);
								},
								An = (cn) => {
									let Pt = {
										type: We.UploadProgress,
										loaded: cn.loaded,
									};
									cn.lengthComputable && (Pt.total = cn.total), et.next(Pt);
								};
							return (
								it.addEventListener('load', Qt),
								it.addEventListener('error', xn),
								it.addEventListener('timeout', xn),
								it.addEventListener('abort', xn),
								re.reportProgress &&
									(it.addEventListener('progress', On),
									null !== _t && it.upload && it.upload.addEventListener('progress', An)),
								it.send(_t),
								et.next({ type: We.Sent }),
								() => {
									it.removeEventListener('error', xn),
										it.removeEventListener('abort', xn),
										it.removeEventListener('load', Qt),
										it.removeEventListener('timeout', xn),
										re.reportProgress &&
											(it.removeEventListener('progress', On),
											null !== _t && it.upload && it.upload.removeEventListener('progress', An)),
										it.readyState !== it.DONE && it.abort();
								}
							);
						});
					}
				}
				return (
					(xe.ɵfac = function (re) {
						return new (re || xe)(P.LFG(m.JF));
					}),
					(xe.ɵprov = P.Yz7({ token: xe, factory: xe.ɵfac })),
					xe
				);
			})();
			const Ct = new P.OlP('XSRF_COOKIE_NAME'),
				It = new P.OlP('XSRF_HEADER_NAME');
			class Bt {}
			let Vt = (() => {
					class xe {
						constructor(re, et, it) {
							(this.doc = re),
								(this.platform = et),
								(this.cookieName = it),
								(this.lastCookieString = ''),
								(this.lastToken = null),
								(this.parseCount = 0);
						}
						getToken() {
							if ('server' === this.platform) return null;
							const re = this.doc.cookie || '';
							return (
								re !== this.lastCookieString &&
									(this.parseCount++,
									(this.lastToken = (0, m.Mx)(re, this.cookieName)),
									(this.lastCookieString = re)),
								this.lastToken
							);
						}
					}
					return (
						(xe.ɵfac = function (re) {
							return new (re || xe)(P.LFG(m.K0), P.LFG(P.Lbi), P.LFG(Ct));
						}),
						(xe.ɵprov = P.Yz7({ token: xe, factory: xe.ɵfac })),
						xe
					);
				})(),
				en = (() => {
					class xe {
						constructor(re, et) {
							(this.tokenService = re), (this.headerName = et);
						}
						intercept(re, et) {
							const it = re.url.toLowerCase();
							if (
								'GET' === re.method ||
								'HEAD' === re.method ||
								it.startsWith('http://') ||
								it.startsWith('https://')
							)
								return et.handle(re);
							const _t = this.tokenService.getToken();
							return (
								null !== _t &&
									!re.headers.has(this.headerName) &&
									(re = re.clone({
										headers: re.headers.set(this.headerName, _t),
									})),
								et.handle(re)
							);
						}
					}
					return (
						(xe.ɵfac = function (re) {
							return new (re || xe)(P.LFG(Bt), P.LFG(It));
						}),
						(xe.ɵprov = P.Yz7({ token: xe, factory: xe.ɵfac })),
						xe
					);
				})(),
				bn = (() => {
					class xe {
						constructor(re, et) {
							(this.backend = re), (this.injector = et), (this.chain = null);
						}
						handle(re) {
							if (null === this.chain) {
								const et = this.injector.get(Ht, []);
								this.chain = et.reduceRight((it, _t) => new Rt(it, _t), this.backend);
							}
							return this.chain.handle(re);
						}
					}
					return (
						(xe.ɵfac = function (re) {
							return new (re || xe)(P.LFG(ae), P.LFG(P.zs3));
						}),
						(xe.ɵprov = P.Yz7({ token: xe, factory: xe.ɵfac })),
						xe
					);
				})(),
				U = (() => {
					class xe {
						static disable() {
							return {
								ngModule: xe,
								providers: [{ provide: en, useClass: nt }],
							};
						}
						static withOptions(re = {}) {
							return {
								ngModule: xe,
								providers: [
									re.cookieName
										? {
												provide: Ct,
												useValue: re.cookieName,
										  }
										: [],
									re.headerName
										? {
												provide: It,
												useValue: re.headerName,
										  }
										: [],
								],
							};
						}
					}
					return (
						(xe.ɵfac = function (re) {
							return new (re || xe)();
						}),
						(xe.ɵmod = P.oAB({ type: xe })),
						(xe.ɵinj = P.cJS({
							providers: [
								en,
								{ provide: Ht, useExisting: en, multi: !0 },
								{ provide: Bt, useClass: Vt },
								{ provide: Ct, useValue: 'XSRF-TOKEN' },
								{ provide: It, useValue: 'X-XSRF-TOKEN' },
							],
						})),
						xe
					);
				})(),
				te = (() => {
					class xe {}
					return (
						(xe.ɵfac = function (re) {
							return new (re || xe)();
						}),
						(xe.ɵmod = P.oAB({ type: xe })),
						(xe.ɵinj = P.cJS({
							providers: [Xe, { provide: De, useClass: bn }, Fe, { provide: ae, useExisting: Fe }],
							imports: [
								[
									U.withOptions({
										cookieName: 'XSRF-TOKEN',
										headerName: 'X-XSRF-TOKEN',
									}),
								],
							],
						})),
						xe
					);
				})();
		},
		5e3: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, {
				deG: () => Xl,
				tb: () => sy,
				AFp: () => ny,
				ip1: () => gf,
				CZH: () => Ga,
				hGG: () => nD,
				z2F: () => Zl,
				sBO: () => Iw,
				Sil: () => vf,
				_Vd: () => Ul,
				EJc: () => ay,
				SBq: () => zl,
				qLn: () => _a,
				vpe: () => Ys,
				tBr: () => da,
				XFs: () => F,
				OlP: () => Ei,
				zs3: () => Qr,
				ZZ4: () => cu,
				aQg: () => du,
				soG: () => au,
				YKP: () => mv,
				h0i: () => ja,
				PXZ: () => Mw,
				R0b: () => ds,
				FiY: () => eo,
				Lbi: () => ry,
				g9A: () => iy,
				n_E: () => tu,
				Qsj: () => oC,
				FYo: () => uv,
				JOm: () => ys,
				q3G: () => yi,
				tp0: () => go,
				Rgc: () => Wl,
				dDg: () => dy,
				GfV: () => hv,
				s_b: () => iu,
				ifc: () => _t,
				eFA: () => py,
				G48: () => kw,
				Gpc: () => K,
				f3M: () => qf,
				_c5: () => Zw,
				VLi: () => Cw,
				c2e: () => oy,
				zSh: () => vd,
				wAp: () => Mn,
				vHH: () => Be,
				EiD: () => Ru,
				mCW: () => ua,
				qzn: () => Bo,
				JVY: () => xu,
				pB0: () => pm,
				eBb: () => um,
				L6k: () => dm,
				LAX: () => hm,
				cg1: () => Yp,
				kL8: () => F_,
				yhl: () => dc,
				dqk: () => mn,
				sIi: () => wo,
				CqO: () => Yd,
				QGY: () => $d,
				F4k: () => Bp,
				RDi: () => Lr,
				AaK: () => De,
				z3N: () => Ps,
				qOj: () => Fd,
				TTD: () => Bi,
				_Bn: () => lv,
				xp6: () => ch,
				uIk: () => Al,
				ekj: () => Hp,
				Suo: () => Fv,
				Xpm: () => ee,
				lG2: () => Te,
				Yz7: () => Wt,
				cJS: () => ft,
				oAB: () => _n,
				Yjl: () => se,
				Y36: () => Pa,
				_UZ: () => Ud,
				GkF: () => Fl,
				BQk: () => Gd,
				ynx: () => Pl,
				qZA: () => Ol,
				TgZ: () => Rl,
				EpF: () => Np,
				n5z: () => Zr,
				Ikx: () => Gp,
				LFG: () => er,
				$8M: () => Ao,
				$Z: () => Pp,
				NdJ: () => l,
				CRH: () => Lv,
				kcU: () => Xn,
				O4$: () => $i,
				oxw: () => H,
				ALo: () => xv,
				lcZ: () => Ev,
				xi3: () => Sv,
				Hsn: () => bt,
				F$t: () => ze,
				Q6J: () => Fa,
				MGl: () => hn,
				VKq: () => yv,
				iGM: () => Ov,
				MAs: () => Mp,
				CHM: () => h,
				LSH: () => gc,
				Udp: () => Vp,
				WFA: () => a,
				d8E: () => $p,
				YNc: () => Nd,
				_uU: () => v_,
				Oqu: () => Up,
				hij: () => Kd,
				AsE: () => zp,
				Gf: () => Pv,
			});
			var m = S(7579),
				P = S(727),
				o = S(8306),
				G = S(6451),
				be = S(3099);
			function we(t) {
				for (let n in t) if (t[n] === we) return n;
				throw Error('Could not find renamed property on target object.');
			}
			function _e(t, n) {
				for (const i in n) n.hasOwnProperty(i) && !t.hasOwnProperty(i) && (t[i] = n[i]);
			}
			function De(t) {
				if ('string' == typeof t) return t;
				if (Array.isArray(t)) return '[' + t.map(De).join(', ') + ']';
				if (null == t) return '' + t;
				if (t.overriddenName) return `${t.overriddenName}`;
				if (t.name) return `${t.name}`;
				const n = t.toString();
				if (null == n) return '' + n;
				const i = n.indexOf('\n');
				return -1 === i ? n : n.substring(0, i);
			}
			function ae(t, n) {
				return null == t || '' === t ? (null === n ? '' : n) : null == n || '' === n ? t : t + ' ' + n;
			}
			const Q = we({ __forward_ref__: we });
			function K(t) {
				return (
					(t.__forward_ref__ = K),
					(t.toString = function () {
						return De(this());
					}),
					t
				);
			}
			function q(t) {
				return Re(t) ? t() : t;
			}
			function Re(t) {
				return 'function' == typeof t && t.hasOwnProperty(Q) && t.__forward_ref__ === K;
			}
			class Be extends Error {
				constructor(n, i) {
					super(
						(function $e(t, n) {
							return `NG0${Math.abs(t)}${n ? ': ' + n : ''}`;
						})(n, i)
					),
						(this.code = n);
				}
			}
			function ye(t) {
				return 'string' == typeof t ? t : null == t ? '' : String(t);
			}
			function Ne(t) {
				return 'function' == typeof t
					? t.name || t.toString()
					: 'object' == typeof t && null != t && 'function' == typeof t.type
					? t.type.name || t.type.toString()
					: ye(t);
			}
			function ge(t, n) {
				const i = n ? ` in ${n}` : '';
				throw new Be(-201, `No provider for ${Ne(t)} found${i}`);
			}
			function gt(t, n) {
				null == t &&
					(function ke(t, n, i, s) {
						throw new Error(
							`ASSERTION ERROR: ${t}` + (null == s ? '' : ` [Expected=> ${i} ${s} ${n} <=Actual]`)
						);
					})(n, t, null, '!=');
			}
			function Wt(t) {
				return {
					token: t.token,
					providedIn: t.providedIn || null,
					factory: t.factory,
					value: void 0,
				};
			}
			function ft(t) {
				return {
					providers: t.providers || [],
					imports: t.imports || [],
				};
			}
			function Je(t) {
				return Fe(t, Vt) || Fe(t, bn);
			}
			function Fe(t, n) {
				return t.hasOwnProperty(n) ? t[n] : null;
			}
			function Bt(t) {
				return t && (t.hasOwnProperty(en) || t.hasOwnProperty(Oe)) ? t[en] : null;
			}
			const Vt = we({ ɵprov: we }),
				en = we({ ɵinj: we }),
				bn = we({ ngInjectableDef: we }),
				Oe = we({ ngInjectorDef: we });
			var F = (() => (
				((F = F || {})[(F.Default = 0)] = 'Default'),
				(F[(F.Host = 1)] = 'Host'),
				(F[(F.Self = 2)] = 'Self'),
				(F[(F.SkipSelf = 4)] = 'SkipSelf'),
				(F[(F.Optional = 8)] = 'Optional'),
				F
			))();
			let U;
			function fe(t) {
				const n = U;
				return (U = t), n;
			}
			function Ye(t, n, i) {
				const s = Je(t);
				return s && 'root' == s.providedIn
					? void 0 === s.value
						? (s.value = s.factory())
						: s.value
					: i & F.Optional
					? null
					: void 0 !== n
					? n
					: void ge(De(t), 'Injector');
			}
			function X(t) {
				return { toString: t }.toString();
			}
			var re = (() => (((re = re || {})[(re.OnPush = 0)] = 'OnPush'), (re[(re.Default = 1)] = 'Default'), re))(),
				_t = (() => {
					return (
						((t = _t || (_t = {}))[(t.Emulated = 0)] = 'Emulated'),
						(t[(t.None = 2)] = 'None'),
						(t[(t.ShadowDom = 3)] = 'ShadowDom'),
						_t
					);
					var t;
				})();
			const pt = 'undefined' != typeof globalThis && globalThis,
				At = 'undefined' != typeof window && window,
				Qt =
					'undefined' != typeof self &&
					'undefined' != typeof WorkerGlobalScope &&
					self instanceof WorkerGlobalScope &&
					self,
				mn = pt || ('undefined' != typeof global && global) || At || Qt,
				cn = {},
				Pt = [],
				Yn = we({ ɵcmp: we }),
				gn = we({ ɵdir: we }),
				Me = we({ ɵpipe: we }),
				He = we({ ɵmod: we }),
				ue = we({ ɵfac: we }),
				oe = we({ __NG_ELEMENT_ID__: we });
			let he = 0;
			function ee(t) {
				return X(() => {
					const i = {},
						s = {
							type: t.type,
							providersResolver: null,
							decls: t.decls,
							vars: t.vars,
							factory: null,
							template: t.template || null,
							consts: t.consts || null,
							ngContentSelectors: t.ngContentSelectors,
							hostBindings: t.hostBindings || null,
							hostVars: t.hostVars || 0,
							hostAttrs: t.hostAttrs || null,
							contentQueries: t.contentQueries || null,
							declaredInputs: i,
							inputs: null,
							outputs: null,
							exportAs: t.exportAs || null,
							onPush: t.changeDetection === re.OnPush,
							directiveDefs: null,
							pipeDefs: null,
							selectors: t.selectors || Pt,
							viewQuery: t.viewQuery || null,
							features: t.features || null,
							data: t.data || {},
							encapsulation: t.encapsulation || _t.Emulated,
							id: 'c',
							styles: t.styles || Pt,
							_: null,
							setInput: null,
							schemas: t.schemas || null,
							tView: null,
						},
						c = t.directives,
						u = t.features,
						f = t.pipes;
					return (
						(s.id += he++),
						(s.inputs = qe(t.inputs, i)),
						(s.outputs = qe(t.outputs)),
						u && u.forEach((b) => b(s)),
						(s.directiveDefs = c ? () => ('function' == typeof c ? c() : c).map(Ke) : null),
						(s.pipeDefs = f ? () => ('function' == typeof f ? f() : f).map(Ft) : null),
						s
					);
				});
			}
			function Ke(t) {
				return (
					Le(t) ||
					(function mt(t) {
						return t[gn] || null;
					})(t)
				);
			}
			function Ft(t) {
				return (function $t(t) {
					return t[Me] || null;
				})(t);
			}
			const wn = {};
			function _n(t) {
				return X(() => {
					const n = {
						type: t.type,
						bootstrap: t.bootstrap || Pt,
						declarations: t.declarations || Pt,
						imports: t.imports || Pt,
						exports: t.exports || Pt,
						transitiveCompileScopes: null,
						schemas: t.schemas || null,
						id: t.id || null,
					};
					return null != t.id && (wn[t.id] = t.type), n;
				});
			}
			function qe(t, n) {
				if (null == t) return cn;
				const i = {};
				for (const s in t)
					if (t.hasOwnProperty(s)) {
						let c = t[s],
							u = c;
						Array.isArray(c) && ((u = c[1]), (c = c[0])), (i[c] = s), n && (n[c] = u);
					}
				return i;
			}
			const Te = ee;
			function se(t) {
				return {
					type: t.type,
					name: t.name,
					factory: null,
					pure: !1 !== t.pure,
					onDestroy: t.type.prototype.ngOnDestroy || null,
				};
			}
			function Le(t) {
				return t[Yn] || null;
			}
			function tn(t, n) {
				const i = t[He] || null;
				if (!i && !0 === n) throw new Error(`Type ${De(t)} does not have '\u0275mod' property.`);
				return i;
			}
			function ai(t) {
				return Array.isArray(t) && 'object' == typeof t[1];
			}
			function wi(t) {
				return Array.isArray(t) && !0 === t[1];
			}
			function mi(t) {
				return 0 != (8 & t.flags);
			}
			function Zi(t) {
				return 2 == (2 & t.flags);
			}
			function ur(t) {
				return 1 == (1 & t.flags);
			}
			function Jn(t) {
				return null !== t.template;
			}
			function qi(t) {
				return 0 != (512 & t[2]);
			}
			function Si(t, n) {
				return t.hasOwnProperty(ue) ? t[ue] : null;
			}
			class nr {
				constructor(n, i, s) {
					(this.previousValue = n), (this.currentValue = i), (this.firstChange = s);
				}
				isFirstChange() {
					return this.firstChange;
				}
			}
			function Bi() {
				return pr;
			}
			function pr(t) {
				return t.type.prototype.ngOnChanges && (t.setInput = Qi), xr;
			}
			function xr() {
				const t = Xi(this),
					n = null == t ? void 0 : t.current;
				if (n) {
					const i = t.previous;
					if (i === cn) t.previous = n;
					else for (let s in n) i[s] = n[s];
					(t.current = null), this.ngOnChanges(n);
				}
			}
			function Qi(t, n, i, s) {
				const c =
						Xi(t) ||
						(function ir(t, n) {
							return (t[fr] = n);
						})(t, { previous: cn, current: null }),
					u = c.current || (c.current = {}),
					f = c.previous,
					b = this.declaredInputs[i],
					E = f[b];
				(u[b] = new nr(E && E.currentValue, n, f === cn)), (t[s] = n);
			}
			Bi.ngInherit = !0;
			const fr = '__ngSimpleChanges__';
			function Xi(t) {
				return t[fr] || null;
			}
			const rr = 'http://www.w3.org/2000/svg';
			let is;
			function Lr(t) {
				is = t;
			}
			function In(t) {
				return !!t.listen;
			}
			const hi = {
				createRenderer: (t, n) =>
					(function ui() {
						return void 0 !== is ? is : 'undefined' != typeof document ? document : void 0;
					})(),
			};
			function Qn(t) {
				for (; Array.isArray(t); ) t = t[0];
				return t;
			}
			function I(t, n) {
				return Qn(n[t]);
			}
			function Y(t, n) {
				return Qn(n[t.index]);
			}
			function st(t, n) {
				return t.data[n];
			}
			function pe(t, n) {
				return t[n];
			}
			function Lt(t, n) {
				const i = n[t];
				return ai(i) ? i : i[0];
			}
			function Nn(t) {
				return 4 == (4 & t[2]);
			}
			function on(t) {
				return 128 == (128 & t[2]);
			}
			function qt(t, n) {
				return null == n ? null : t[n];
			}
			function R(t) {
				t[18] = 0;
			}
			function v(t, n) {
				t[5] += n;
				let i = t,
					s = t[3];
				for (; null !== s && ((1 === n && 1 === i[5]) || (-1 === n && 0 === i[5])); )
					(s[5] += n), (i = s), (s = s[3]);
			}
			const D = {
				lFrame: _r(null),
				bindingsEnabled: !0,
				isInCheckNoChangesMode: !1,
			};
			function Ti() {
				return D.bindingsEnabled;
			}
			function Dt() {
				return D.lFrame.lView;
			}
			function N() {
				return D.lFrame.tView;
			}
			function h(t) {
				return (D.lFrame.contextLView = t), t[8];
			}
			function p() {
				let t = x();
				for (; null !== t && 64 === t.type; ) t = t.parent;
				return t;
			}
			function x() {
				return D.lFrame.currentTNode;
			}
			function Z(t, n) {
				const i = D.lFrame;
				(i.currentTNode = t), (i.isParent = n);
			}
			function me() {
				return D.lFrame.isParent;
			}
			function Ce() {
				D.lFrame.isParent = !1;
			}
			function St() {
				return D.isInCheckNoChangesMode;
			}
			function Ut(t) {
				D.isInCheckNoChangesMode = t;
			}
			function nn() {
				const t = D.lFrame;
				let n = t.bindingRootIndex;
				return -1 === n && (n = t.bindingRootIndex = t.tView.bindingStartIndex), n;
			}
			function fn() {
				return D.lFrame.bindingIndex++;
			}
			function Sn(t) {
				const n = D.lFrame,
					i = n.bindingIndex;
				return (n.bindingIndex = n.bindingIndex + t), i;
			}
			function Ai(t, n) {
				const i = D.lFrame;
				(i.bindingIndex = i.bindingRootIndex = t), Rr(n);
			}
			function Rr(t) {
				D.lFrame.currentDirectiveIndex = t;
			}
			function ki(t) {
				const n = D.lFrame.currentDirectiveIndex;
				return -1 === n ? null : t[n];
			}
			function Mi() {
				return D.lFrame.currentQueryIndex;
			}
			function or(t) {
				D.lFrame.currentQueryIndex = t;
			}
			function ar(t) {
				const n = t[1];
				return 2 === n.type ? n.declTNode : 1 === n.type ? t[6] : null;
			}
			function Er(t, n, i) {
				if (i & F.SkipSelf) {
					let c = n,
						u = t;
					for (
						;
						!((c = c.parent),
						null !== c || i & F.Host || ((c = ar(u)), null === c || ((u = u[15]), 10 & c.type)));

					);
					if (null === c) return !1;
					(n = c), (t = u);
				}
				const s = (D.lFrame = rs());
				return (s.currentTNode = n), (s.lView = t), !0;
			}
			function ps(t) {
				const n = rs(),
					i = t[1];
				(D.lFrame = n),
					(n.currentTNode = i.firstChild),
					(n.lView = t),
					(n.tView = i),
					(n.contextLView = t),
					(n.bindingIndex = i.bindingStartIndex),
					(n.inI18n = !1);
			}
			function rs() {
				const t = D.lFrame,
					n = null === t ? null : t.child;
				return null === n ? _r(t) : n;
			}
			function _r(t) {
				const n = {
					currentTNode: null,
					isParent: !0,
					lView: null,
					tView: null,
					selectedIndex: -1,
					contextLView: null,
					elementDepthCount: 0,
					currentNamespace: null,
					currentDirectiveIndex: -1,
					bindingRootIndex: -1,
					bindingIndex: -1,
					currentQueryIndex: 0,
					parent: t,
					child: null,
					inI18n: !1,
				};
				return null !== t && (t.child = n), n;
			}
			function fs() {
				const t = D.lFrame;
				return (D.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t;
			}
			const ss = fs;
			function jt() {
				const t = fs();
				(t.isParent = !0),
					(t.tView = null),
					(t.selectedIndex = -1),
					(t.contextLView = null),
					(t.elementDepthCount = 0),
					(t.currentDirectiveIndex = -1),
					(t.currentNamespace = null),
					(t.bindingRootIndex = -1),
					(t.bindingIndex = -1),
					(t.currentQueryIndex = 0);
			}
			function ln() {
				return D.lFrame.selectedIndex;
			}
			function Zn(t) {
				D.lFrame.selectedIndex = t;
			}
			function Vn() {
				const t = D.lFrame;
				return st(t.tView, t.selectedIndex);
			}
			function $i() {
				D.lFrame.currentNamespace = rr;
			}
			function Xn() {
				!(function Ws() {
					D.lFrame.currentNamespace = null;
				})();
			}
			function vr(t, n) {
				for (let i = n.directiveStart, s = n.directiveEnd; i < s; i++) {
					const u = t.data[i].type.prototype,
						{
							ngAfterContentInit: f,
							ngAfterContentChecked: b,
							ngAfterViewInit: E,
							ngAfterViewChecked: L,
							ngOnDestroy: j,
						} = u;
					f && (t.contentHooks || (t.contentHooks = [])).push(-i, f),
						b &&
							((t.contentHooks || (t.contentHooks = [])).push(i, b),
							(t.contentCheckHooks || (t.contentCheckHooks = [])).push(i, b)),
						E && (t.viewHooks || (t.viewHooks = [])).push(-i, E),
						L &&
							((t.viewHooks || (t.viewHooks = [])).push(i, L),
							(t.viewCheckHooks || (t.viewCheckHooks = [])).push(i, L)),
						null != j && (t.destroyHooks || (t.destroyHooks = [])).push(i, j);
				}
			}
			function Yi(t, n, i) {
				$r(t, n, 3, i);
			}
			function Ji(t, n, i, s) {
				(3 & t[2]) === i && $r(t, n, i, s);
			}
			function lr(t, n) {
				let i = t[2];
				(3 & i) === n && ((i &= 2047), (i += 1), (t[2] = i));
			}
			function $r(t, n, i, s) {
				const u = null != s ? s : -1,
					f = n.length - 1;
				let b = 0;
				for (let E = void 0 !== s ? 65535 & t[18] : 0; E < f; E++)
					if ('number' == typeof n[E + 1]) {
						if (((b = n[E]), null != s && b >= s)) break;
					} else
						n[E] < 0 && (t[18] += 65536),
							(b < u || -1 == u) && (Ks(t, i, n, E), (t[18] = (4294901760 & t[18]) + E + 2)),
							E++;
			}
			function Ks(t, n, i, s) {
				const c = i[s] < 0,
					u = i[s + 1],
					b = t[c ? -i[s] : i[s]];
				if (c) {
					if (t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === n) {
						t[2] += 2048;
						try {
							u.call(b);
						} finally {
						}
					}
				} else
					try {
						u.call(b);
					} finally {
					}
			}
			class xs {
				constructor(n, i, s) {
					(this.factory = n), (this.resolving = !1), (this.canSeeViewProviders = i), (this.injectImpl = s);
				}
			}
			function M(t, n, i) {
				const s = In(t);
				let c = 0;
				for (; c < i.length; ) {
					const u = i[c];
					if ('number' == typeof u) {
						if (0 !== u) break;
						c++;
						const f = i[c++],
							b = i[c++],
							E = i[c++];
						s ? t.setAttribute(n, b, E, f) : n.setAttributeNS(f, b, E);
					} else {
						const f = u,
							b = i[++c];
						ve(f) ? s && t.setProperty(n, f, b) : s ? t.setAttribute(n, f, b) : n.setAttribute(f, b), c++;
					}
				}
				return c;
			}
			function V(t) {
				return 3 === t || 4 === t || 6 === t;
			}
			function ve(t) {
				return 64 === t.charCodeAt(0);
			}
			function vt(t, n) {
				if (null !== n && 0 !== n.length)
					if (null === t || 0 === t.length) t = n.slice();
					else {
						let i = -1;
						for (let s = 0; s < n.length; s++) {
							const c = n[s];
							'number' == typeof c
								? (i = c)
								: 0 === i || rn(t, i, c, null, -1 === i || 2 === i ? n[++s] : null);
						}
					}
				return t;
			}
			function rn(t, n, i, s, c) {
				let u = 0,
					f = t.length;
				if (-1 === n) f = -1;
				else
					for (; u < t.length; ) {
						const b = t[u++];
						if ('number' == typeof b) {
							if (b === n) {
								f = -1;
								break;
							}
							if (b > n) {
								f = u - 1;
								break;
							}
						}
					}
				for (; u < t.length; ) {
					const b = t[u];
					if ('number' == typeof b) break;
					if (b === i) {
						if (null === s) return void (null !== c && (t[u + 1] = c));
						if (s === t[u + 1]) return void (t[u + 2] = c);
					}
					u++, null !== s && u++, null !== c && u++;
				}
				-1 !== f && (t.splice(f, 0, n), (u = f + 1)),
					t.splice(u++, 0, i),
					null !== s && t.splice(u++, 0, s),
					null !== c && t.splice(u++, 0, c);
			}
			function xi(t) {
				return -1 !== t;
			}
			function Oi(t) {
				return 32767 & t;
			}
			function Or(t, n) {
				let i = (function Vi(t) {
						return t >> 16;
					})(t),
					s = n;
				for (; i > 0; ) (s = s[15]), i--;
				return s;
			}
			let gs = !0;
			function To(t) {
				const n = gs;
				return (gs = t), n;
			}
			let ql = 0;
			function y(t, n) {
				const i = T(t, n);
				if (-1 !== i) return i;
				const s = n[1];
				s.firstCreatePass && ((t.injectorIndex = n.length), _(s.data, t), _(n, null), _(s.blueprint, null));
				const c = O(t, n),
					u = t.injectorIndex;
				if (xi(c)) {
					const f = Oi(c),
						b = Or(c, n),
						E = b[1].data;
					for (let L = 0; L < 8; L++) n[u + L] = b[f + L] | E[f + L];
				}
				return (n[u + 8] = c), u;
			}
			function _(t, n) {
				t.push(0, 0, 0, 0, 0, 0, 0, 0, n);
			}
			function T(t, n) {
				return -1 === t.injectorIndex ||
					(t.parent && t.parent.injectorIndex === t.injectorIndex) ||
					null === n[t.injectorIndex + 8]
					? -1
					: t.injectorIndex;
			}
			function O(t, n) {
				if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
				let i = 0,
					s = null,
					c = n;
				for (; null !== c; ) {
					const u = c[1],
						f = u.type;
					if (((s = 2 === f ? u.declTNode : 1 === f ? c[6] : null), null === s)) return -1;
					if ((i++, (c = c[15]), -1 !== s.injectorIndex)) return s.injectorIndex | (i << 16);
				}
				return -1;
			}
			function $(t, n, i) {
				!(function w(t, n, i) {
					let s;
					'string' == typeof i ? (s = i.charCodeAt(0) || 0) : i.hasOwnProperty(oe) && (s = i[oe]),
						null == s && (s = i[oe] = ql++);
					const c = 255 & s;
					n.data[t + (c >> 5)] |= 1 << c;
				})(t, n, i);
			}
			function Se(t, n, i) {
				if (i & F.Optional) return t;
				ge(n, 'NodeInjector');
			}
			function ct(t, n, i, s) {
				if ((i & F.Optional && void 0 === s && (s = null), 0 == (i & (F.Self | F.Host)))) {
					const c = t[9],
						u = fe(void 0);
					try {
						return c ? c.get(n, s, i & F.Optional) : Ye(n, s, i & F.Optional);
					} finally {
						fe(u);
					}
				}
				return Se(s, n, i);
			}
			function zt(t, n, i, s = F.Default, c) {
				if (null !== t) {
					const u = (function Yr(t) {
						if ('string' == typeof t) return t.charCodeAt(0) || 0;
						const n = t.hasOwnProperty(oe) ? t[oe] : void 0;
						return 'number' == typeof n ? (n >= 0 ? 255 & n : un) : n;
					})(i);
					if ('function' == typeof u) {
						if (!Er(n, t, s)) return s & F.Host ? Se(c, i, s) : ct(n, i, s, c);
						try {
							const f = u(s);
							if (null != f || s & F.Optional) return f;
							ge(i);
						} finally {
							ss();
						}
					} else if ('number' == typeof u) {
						let f = null,
							b = T(t, n),
							E = -1,
							L = s & F.Host ? n[16][6] : null;
						for (
							(-1 === b || s & F.SkipSelf) &&
							((E = -1 === b ? O(t, n) : n[b + 8]),
							-1 !== E && Kr(s, !1) ? ((f = n[1]), (b = Oi(E)), (n = Or(E, n))) : (b = -1));
							-1 !== b;

						) {
							const j = n[1];
							if (Wr(u, b, j.data)) {
								const ne = qn(b, n, i, f, s, L);
								if (ne !== kn) return ne;
							}
							(E = n[b + 8]),
								-1 !== E && Kr(s, n[1].data[b + 8] === L) && Wr(u, b, n)
									? ((f = j), (b = Oi(E)), (n = Or(E, n)))
									: (b = -1);
						}
					}
				}
				return ct(n, i, s, c);
			}
			const kn = {};
			function un() {
				return new as(p(), Dt());
			}
			function qn(t, n, i, s, c, u) {
				const f = n[1],
					b = f.data[t + 8],
					j = $n(b, f, i, null == s ? Zi(b) && gs : s != f && 0 != (3 & b.type), c & F.Host && u === b);
				return null !== j ? os(n, f, j, b) : kn;
			}
			function $n(t, n, i, s, c) {
				const u = t.providerIndexes,
					f = n.data,
					b = 1048575 & u,
					E = t.directiveStart,
					j = u >> 20,
					Ae = c ? b + j : t.directiveEnd;
				for (let Ze = s ? b : b + j; Ze < Ae; Ze++) {
					const ht = f[Ze];
					if ((Ze < E && i === ht) || (Ze >= E && ht.type === i)) return Ze;
				}
				if (c) {
					const Ze = f[E];
					if (Ze && Jn(Ze) && Ze.type === i) return E;
				}
				return null;
			}
			function os(t, n, i, s) {
				let c = t[i];
				const u = n.data;
				if (
					(function Eo(t) {
						return t instanceof xs;
					})(c)
				) {
					const f = c;
					f.resolving &&
						(function rt(t, n) {
							const i = n ? `. Dependency path: ${n.join(' > ')} > ${t}` : '';
							throw new Be(-200, `Circular dependency in DI detected for ${t}${i}`);
						})(Ne(u[i]));
					const b = To(f.canSeeViewProviders);
					f.resolving = !0;
					const E = f.injectImpl ? fe(f.injectImpl) : null;
					Er(t, s, F.Default);
					try {
						(c = t[i] = f.factory(void 0, u, t, s)),
							n.firstCreatePass &&
								i >= s.directiveStart &&
								(function Gn(t, n, i) {
									const { ngOnChanges: s, ngOnInit: c, ngDoCheck: u } = n.type.prototype;
									if (s) {
										const f = pr(n);
										(i.preOrderHooks || (i.preOrderHooks = [])).push(t, f),
											(i.preOrderCheckHooks || (i.preOrderCheckHooks = [])).push(t, f);
									}
									c && (i.preOrderHooks || (i.preOrderHooks = [])).push(0 - t, c),
										u &&
											((i.preOrderHooks || (i.preOrderHooks = [])).push(t, u),
											(i.preOrderCheckHooks || (i.preOrderCheckHooks = [])).push(t, u));
								})(i, u[i], n);
					} finally {
						null !== E && fe(E), To(b), (f.resolving = !1), ss();
					}
				}
				return c;
			}
			function Wr(t, n, i) {
				return !!(i[n + (t >> 5)] & (1 << t));
			}
			function Kr(t, n) {
				return !(t & F.Self || (t & F.Host && n));
			}
			class as {
				constructor(n, i) {
					(this._tNode = n), (this._lView = i);
				}
				get(n, i, s) {
					return zt(this._tNode, this._lView, n, s, i);
				}
			}
			function Zr(t) {
				return X(() => {
					const n = t.prototype.constructor,
						i = n[ue] || _s(n),
						s = Object.prototype;
					let c = Object.getPrototypeOf(t.prototype).constructor;
					for (; c && c !== s; ) {
						const u = c[ue] || _s(c);
						if (u && u !== i) return u;
						c = Object.getPrototypeOf(c);
					}
					return (u) => new u();
				});
			}
			function _s(t) {
				return Re(t)
					? () => {
							const n = _s(q(t));
							return n && n();
					  }
					: Si(t);
			}
			function Ao(t) {
				return (function le(t, n) {
					if ('class' === n) return t.classes;
					if ('style' === n) return t.styles;
					const i = t.attrs;
					if (i) {
						const s = i.length;
						let c = 0;
						for (; c < s; ) {
							const u = i[c];
							if (V(u)) break;
							if (0 === u) c += 2;
							else if ('number' == typeof u) for (c++; c < s && 'string' == typeof i[c]; ) c++;
							else {
								if (u === n) return i[c + 1];
								c += 2;
							}
						}
					}
					return null;
				})(p(), t);
			}
			const po = '__parameters__';
			function fo(t, n, i) {
				return X(() => {
					const s = (function ko(t) {
						return function (...i) {
							if (t) {
								const s = t(...i);
								for (const c in s) this[c] = s[c];
							}
						};
					})(n);
					function c(...u) {
						if (this instanceof c) return s.apply(this, u), this;
						const f = new c(...u);
						return (b.annotation = f), b;
						function b(E, L, j) {
							const ne = E.hasOwnProperty(po) ? E[po] : Object.defineProperty(E, po, { value: [] })[po];
							for (; ne.length <= j; ) ne.push(null);
							return (ne[j] = ne[j] || []).push(f), E;
						}
					}
					return (
						i && (c.prototype = Object.create(i.prototype)),
						(c.prototype.ngMetadataName = t),
						(c.annotationCls = c),
						c
					);
				});
			}
			class Ei {
				constructor(n, i) {
					(this._desc = n),
						(this.ngMetadataName = 'InjectionToken'),
						(this.ɵprov = void 0),
						'number' == typeof i
							? (this.__NG_ELEMENT_ID__ = i)
							: void 0 !== i &&
							  (this.ɵprov = Wt({
									token: this,
									providedIn: i.providedIn || 'root',
									factory: i.factory,
							  }));
				}
				toString() {
					return `InjectionToken ${this._desc}`;
				}
			}
			const Xl = new Ei('AnalyzeForEntryComponents');
			function ls(t, n) {
				void 0 === n && (n = t);
				for (let i = 0; i < t.length; i++) {
					let s = t[i];
					Array.isArray(s) ? (n === t && (n = t.slice(0, i)), ls(s, n)) : n !== t && n.push(s);
				}
				return n;
			}
			function cs(t, n) {
				t.forEach((i) => (Array.isArray(i) ? cs(i, n) : n(i)));
			}
			function ec(t, n, i) {
				n >= t.length ? t.push(i) : t.splice(n, 0, i);
			}
			function ra(t, n) {
				return n >= t.length - 1 ? t.pop() : t.splice(n, 1)[0];
			}
			function Ro(t, n) {
				const i = [];
				for (let s = 0; s < t; s++) i.push(n);
				return i;
			}
			function Vr(t, n, i) {
				let s = Xs(t, n);
				return (
					s >= 0
						? (t[1 | s] = i)
						: ((s = ~s),
						  (function nc(t, n, i, s) {
								let c = t.length;
								if (c == n) t.push(i, s);
								else if (1 === c) t.push(s, t[0]), (t[0] = i);
								else {
									for (c--, t.push(t[c - 1], t[c]); c > n; ) (t[c] = t[c - 2]), c--;
									(t[n] = i), (t[n + 1] = s);
								}
						  })(t, s, n, i)),
					s
				);
			}
			function Qs(t, n) {
				const i = Xs(t, n);
				if (i >= 0) return t[1 | i];
			}
			function Xs(t, n) {
				return (function Wa(t, n, i) {
					let s = 0,
						c = t.length >> i;
					for (; c !== s; ) {
						const u = s + ((c - s) >> 1),
							f = t[u << i];
						if (n === f) return u << i;
						f > n ? (c = u) : (s = u + 1);
					}
					return ~(c << i);
				})(t, n, 1);
			}
			const aa = {},
				Za = '__NG_DI_FLAG__',
				qa = 'ngTempTokenPath',
				Wf = /\n/gm,
				la = '__source',
				Zf = we({ provide: String, useValue: we });
			let Fo;
			function rc(t) {
				const n = Fo;
				return (Fo = t), n;
			}
			function gu(t, n = F.Default) {
				if (void 0 === Fo) throw new Error('inject() must be called from an injection context');
				return null === Fo ? Ye(t, void 0, n) : Fo.get(t, n & F.Optional ? null : void 0, n);
			}
			function er(t, n = F.Default) {
				return (
					(function te() {
						return U;
					})() || gu
				)(q(t), n);
			}
			const qf = er;
			function sc(t) {
				const n = [];
				for (let i = 0; i < t.length; i++) {
					const s = q(t[i]);
					if (Array.isArray(s)) {
						if (0 === s.length) throw new Error('Arguments array must have arguments.');
						let c,
							u = F.Default;
						for (let f = 0; f < s.length; f++) {
							const b = s[f],
								E = Qf(b);
							'number' == typeof E ? (-1 === E ? (c = b.token) : (u |= E)) : (c = b);
						}
						n.push(er(c, u));
					} else n.push(er(s));
				}
				return n;
			}
			function ca(t, n) {
				return (t[Za] = n), (t.prototype[Za] = n), t;
			}
			function Qf(t) {
				return t[Za];
			}
			const da = ca(
					fo('Inject', (t) => ({ token: t })),
					-1
				),
				eo = ca(fo('Optional'), 8),
				go = ca(fo('SkipSelf'), 4);
			let tl;
			function No(t) {
				var n;
				return (
					(null ===
						(n = (function oc() {
							if (void 0 === tl && ((tl = null), mn.trustedTypes))
								try {
									tl = mn.trustedTypes.createPolicy('angular', {
										createHTML: (t) => t,
										createScript: (t) => t,
										createScriptURL: (t) => t,
									});
								} catch (t) {}
							return tl;
						})()) || void 0 === n
						? void 0
						: n.createHTML(t)) || t
				);
			}
			class to {
				constructor(n) {
					this.changingThisBreaksApplicationSecurity = n;
				}
				toString() {
					return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
				}
			}
			class om extends to {
				getTypeName() {
					return 'HTML';
				}
			}
			class am extends to {
				getTypeName() {
					return 'Style';
				}
			}
			class lm extends to {
				getTypeName() {
					return 'Script';
				}
			}
			class cm extends to {
				getTypeName() {
					return 'URL';
				}
			}
			class cc extends to {
				getTypeName() {
					return 'ResourceURL';
				}
			}
			function Ps(t) {
				return t instanceof to ? t.changingThisBreaksApplicationSecurity : t;
			}
			function Bo(t, n) {
				const i = dc(t);
				if (null != i && i !== n) {
					if ('ResourceURL' === i && 'URL' === n) return !0;
					throw new Error(`Required a safe ${n}, got a ${i} (see https://g.co/ng/security#xss)`);
				}
				return i === n;
			}
			function dc(t) {
				return (t instanceof to && t.getTypeName()) || null;
			}
			function xu(t) {
				return new om(t);
			}
			function dm(t) {
				return new am(t);
			}
			function um(t) {
				return new lm(t);
			}
			function hm(t) {
				return new cm(t);
			}
			function pm(t) {
				return new cc(t);
			}
			class fm {
				constructor(n) {
					this.inertDocumentHelper = n;
				}
				getInertBodyElement(n) {
					n = '<body><remove></remove>' + n;
					try {
						const i = new window.DOMParser().parseFromString(No(n), 'text/html').body;
						return null === i
							? this.inertDocumentHelper.getInertBodyElement(n)
							: (i.removeChild(i.firstChild), i);
					} catch (i) {
						return null;
					}
				}
			}
			class mm {
				constructor(n) {
					if (
						((this.defaultDoc = n),
						(this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert')),
						null == this.inertDocument.body)
					) {
						const i = this.inertDocument.createElement('html');
						this.inertDocument.appendChild(i);
						const s = this.inertDocument.createElement('body');
						i.appendChild(s);
					}
				}
				getInertBodyElement(n) {
					const i = this.inertDocument.createElement('template');
					if ('content' in i) return (i.innerHTML = No(n)), i;
					const s = this.inertDocument.createElement('body');
					return (s.innerHTML = No(n)), this.defaultDoc.documentMode && this.stripCustomNsAttrs(s), s;
				}
				stripCustomNsAttrs(n) {
					const i = n.attributes;
					for (let c = i.length - 1; 0 < c; c--) {
						const f = i.item(c).name;
						('xmlns:ns1' === f || 0 === f.indexOf('ns1:')) && n.removeAttribute(f);
					}
					let s = n.firstChild;
					for (; s; ) s.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(s), (s = s.nextSibling);
				}
			}
			const _m = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
				vm =
					/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
			function ua(t) {
				return (t = String(t)).match(_m) || t.match(vm) ? t : 'unsafe:' + t;
			}
			function Ts(t) {
				const n = {};
				for (const i of t.split(',')) n[i] = !0;
				return n;
			}
			function ha(...t) {
				const n = {};
				for (const i of t) for (const s in i) i.hasOwnProperty(s) && (n[s] = !0);
				return n;
			}
			const Tu = Ts('area,br,col,hr,img,wbr'),
				Au = Ts('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
				ku = Ts('rp,rt'),
				uc = ha(
					Tu,
					ha(
						Au,
						Ts(
							'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
						)
					),
					ha(
						ku,
						Ts(
							'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
						)
					),
					ha(ku, Au)
				),
				vo = Ts('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
				Fs = Ts('srcset'),
				hc = ha(
					vo,
					Fs,
					Ts(
						'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
					),
					Ts(
						'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
					)
				),
				Cm = Ts('script,style,template');
			class Iu {
				constructor() {
					(this.sanitizedSomething = !1), (this.buf = []);
				}
				sanitizeChildren(n) {
					let i = n.firstChild,
						s = !0;
					for (; i; )
						if (
							(i.nodeType === Node.ELEMENT_NODE
								? (s = this.startElement(i))
								: i.nodeType === Node.TEXT_NODE
								? this.chars(i.nodeValue)
								: (this.sanitizedSomething = !0),
							s && i.firstChild)
						)
							i = i.firstChild;
						else
							for (; i; ) {
								i.nodeType === Node.ELEMENT_NODE && this.endElement(i);
								let c = this.checkClobberedElement(i, i.nextSibling);
								if (c) {
									i = c;
									break;
								}
								i = this.checkClobberedElement(i, i.parentNode);
							}
					return this.buf.join('');
				}
				startElement(n) {
					const i = n.nodeName.toLowerCase();
					if (!uc.hasOwnProperty(i)) return (this.sanitizedSomething = !0), !Cm.hasOwnProperty(i);
					this.buf.push('<'), this.buf.push(i);
					const s = n.attributes;
					for (let c = 0; c < s.length; c++) {
						const u = s.item(c),
							f = u.name,
							b = f.toLowerCase();
						if (!hc.hasOwnProperty(b)) {
							this.sanitizedSomething = !0;
							continue;
						}
						let E = u.value;
						vo[b] && (E = ua(E)),
							Fs[b] &&
								((t = E),
								(E = (t = String(t))
									.split(',')
									.map((n) => ua(n.trim()))
									.join(', '))),
							this.buf.push(' ', f, '="', fc(E), '"');
					}
					var t;
					return this.buf.push('>'), !0;
				}
				endElement(n) {
					const i = n.nodeName.toLowerCase();
					uc.hasOwnProperty(i) &&
						!Tu.hasOwnProperty(i) &&
						(this.buf.push('</'), this.buf.push(i), this.buf.push('>'));
				}
				chars(n) {
					this.buf.push(fc(n));
				}
				checkClobberedElement(n, i) {
					if (
						i &&
						(n.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY) ===
							Node.DOCUMENT_POSITION_CONTAINED_BY
					)
						throw new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`);
					return i;
				}
			}
			const wm = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				pc = /([^\#-~ |!])/g;
			function fc(t) {
				return t
					.replace(/&/g, '&amp;')
					.replace(wm, function (n) {
						return '&#' + (1024 * (n.charCodeAt(0) - 55296) + (n.charCodeAt(1) - 56320) + 65536) + ';';
					})
					.replace(pc, function (n) {
						return '&#' + n.charCodeAt(0) + ';';
					})
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
			}
			let pa;
			function Ru(t, n) {
				let i = null;
				try {
					pa =
						pa ||
						(function Eu(t) {
							const n = new mm(t);
							return (function gm() {
								try {
									return !!new window.DOMParser().parseFromString(No(''), 'text/html');
								} catch (t) {
									return !1;
								}
							})()
								? new fm(n)
								: n;
						})(t);
					let s = n ? String(n) : '';
					i = pa.getInertBodyElement(s);
					let c = 5,
						u = s;
					do {
						if (0 === c) throw new Error('Failed to sanitize html because the input is unstable');
						c--, (s = u), (u = i.innerHTML), (i = pa.getInertBodyElement(s));
					} while (s !== u);
					return No(new Iu().sanitizeChildren(mc(i) || i));
				} finally {
					if (i) {
						const s = mc(i) || i;
						for (; s.firstChild; ) s.removeChild(s.firstChild);
					}
				}
			}
			function mc(t) {
				return 'content' in t &&
					(function Dm(t) {
						return t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName;
					})(t)
					? t.content
					: null;
			}
			var yi = (() => (
				((yi = yi || {})[(yi.NONE = 0)] = 'NONE'),
				(yi[(yi.HTML = 1)] = 'HTML'),
				(yi[(yi.STYLE = 2)] = 'STYLE'),
				(yi[(yi.SCRIPT = 3)] = 'SCRIPT'),
				(yi[(yi.URL = 4)] = 'URL'),
				(yi[(yi.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
				yi
			))();
			function gc(t) {
				const n = (function fa() {
					const t = Dt();
					return t && t[12];
				})();
				return n ? n.sanitize(yi.URL, t) || '' : Bo(t, 'URL') ? Ps(t) : ua(ye(t));
			}
			const yc = '__ngContext__';
			function Sr(t, n) {
				t[yc] = n;
			}
			function bc(t) {
				const n = (function ma(t) {
					return t[yc] || null;
				})(t);
				return n ? (Array.isArray(n) ? n : n.lView) : null;
			}
			function Mc(t) {
				return t.ngOriginalError;
			}
			function Pm(t, ...n) {
				t.error(...n);
			}
			class _a {
				constructor() {
					this._console = console;
				}
				handleError(n) {
					const i = this._findOriginalError(n),
						s = (function Om(t) {
							return (t && t.ngErrorLogger) || Pm;
						})(n);
					s(this._console, 'ERROR', n), i && s(this._console, 'ORIGINAL ERROR', i);
				}
				_findOriginalError(n) {
					let i = n && Mc(n);
					for (; i && Mc(i); ) i = Mc(i);
					return i || null;
				}
			}
			const Sc = (() =>
				(('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(mn))();
			function vs(t) {
				return t instanceof Function ? t() : t;
			}
			var ys = (() => (
				((ys = ys || {})[(ys.Important = 1)] = 'Important'), (ys[(ys.DashCase = 2)] = 'DashCase'), ys
			))();
			function ll(t, n) {
				return undefined(t, n);
			}
			function va(t) {
				const n = t[3];
				return wi(n) ? n[3] : n;
			}
			function kc(t) {
				return Yu(t[13]);
			}
			function ya(t) {
				return Yu(t[4]);
			}
			function Yu(t) {
				for (; null !== t && !wi(t); ) t = t[4];
				return t;
			}
			function no(t, n, i, s, c) {
				if (null != s) {
					let u,
						f = !1;
					wi(s) ? (u = s) : ai(s) && ((f = !0), (s = s[0]));
					const b = Qn(s);
					0 === t && null !== i
						? null == c
							? Qu(n, i, b)
							: Ns(n, i, b, c || null, !0)
						: 1 === t && null !== i
						? Ns(n, i, b, c || null, !0)
						: 2 === t
						? (function ih(t, n, i) {
								const s = cl(t, n);
								s &&
									(function Nc(t, n, i, s) {
										In(t) ? t.removeChild(n, i, s) : n.removeChild(i);
									})(t, s, n, i);
						  })(n, b, f)
						: 3 === t && n.destroyNode(b),
						null != u &&
							(function rh(t, n, i, s, c) {
								const u = i[7];
								u !== Qn(i) && no(n, t, s, u, c);
								for (let b = 10; b < i.length; b++) {
									const E = i[b];
									wa(E[1], E, t, n, s, u);
								}
							})(n, t, u, i, c);
				}
			}
			function Oc(t, n, i) {
				return In(t) ? t.createElement(n, i) : null === i ? t.createElement(n) : t.createElementNS(i, n);
			}
			function Zu(t, n) {
				const i = t[9],
					s = i.indexOf(n),
					c = n[3];
				1024 & n[2] && ((n[2] &= -1025), v(c, -1)), i.splice(s, 1);
			}
			function Pc(t, n) {
				if (t.length <= 10) return;
				const i = 10 + n,
					s = t[i];
				if (s) {
					const c = s[17];
					null !== c && c !== t && Zu(c, s), n > 0 && (t[i - 1][4] = s[4]);
					const u = ra(t, 10 + n);
					!(function zm(t, n) {
						wa(t, n, n[11], 2, null, null), (n[0] = null), (n[6] = null);
					})(s[1], s);
					const f = u[19];
					null !== f && f.detachView(u[1]), (s[3] = null), (s[4] = null), (s[2] &= -129);
				}
				return s;
			}
			function Fc(t, n) {
				if (!(256 & n[2])) {
					const i = n[11];
					In(i) && i.destroyNode && wa(t, n, i, 3, null, null),
						(function $m(t) {
							let n = t[13];
							if (!n) return Lc(t[1], t);
							for (; n; ) {
								let i = null;
								if (ai(n)) i = n[13];
								else {
									const s = n[10];
									s && (i = s);
								}
								if (!i) {
									for (; n && !n[4] && n !== t; ) ai(n) && Lc(n[1], n), (n = n[3]);
									null === n && (n = t), ai(n) && Lc(n[1], n), (i = n && n[4]);
								}
								n = i;
							}
						})(n);
				}
			}
			function Lc(t, n) {
				if (!(256 & n[2])) {
					(n[2] &= -129),
						(n[2] |= 256),
						(function Zm(t, n) {
							let i;
							if (null != t && null != (i = t.destroyHooks))
								for (let s = 0; s < i.length; s += 2) {
									const c = n[i[s]];
									if (!(c instanceof xs)) {
										const u = i[s + 1];
										if (Array.isArray(u))
											for (let f = 0; f < u.length; f += 2) {
												const b = c[u[f]],
													E = u[f + 1];
												try {
													E.call(b);
												} finally {
												}
											}
										else
											try {
												u.call(c);
											} finally {
											}
									}
								}
						})(t, n),
						(function Km(t, n) {
							const i = t.cleanup,
								s = n[7];
							let c = -1;
							if (null !== i)
								for (let u = 0; u < i.length - 1; u += 2)
									if ('string' == typeof i[u]) {
										const f = i[u + 1],
											b = 'function' == typeof f ? f(n) : Qn(n[f]),
											E = s[(c = i[u + 2])],
											L = i[u + 3];
										'boolean' == typeof L
											? b.removeEventListener(i[u], E, L)
											: L >= 0
											? s[(c = L)]()
											: s[(c = -L)].unsubscribe(),
											(u += 2);
									} else {
										const f = s[(c = i[u + 1])];
										i[u].call(f);
									}
							if (null !== s) {
								for (let u = c + 1; u < s.length; u++) s[u]();
								n[7] = null;
							}
						})(t, n),
						1 === n[1].type && In(n[11]) && n[11].destroy();
					const i = n[17];
					if (null !== i && wi(n[3])) {
						i !== n[3] && Zu(i, n);
						const s = n[19];
						null !== s && s.detachView(t);
					}
				}
			}
			function qu(t, n, i) {
				return (function Ls(t, n, i) {
					let s = n;
					for (; null !== s && 40 & s.type; ) s = (n = s).parent;
					if (null === s) return i[0];
					if (2 & s.flags) {
						const c = t.data[s.directiveStart].encapsulation;
						if (c === _t.None || c === _t.Emulated) return null;
					}
					return Y(s, i);
				})(t, n.parent, i);
			}
			function Ns(t, n, i, s, c) {
				In(t) ? t.insertBefore(n, i, s, c) : n.insertBefore(i, s, c);
			}
			function Qu(t, n, i) {
				In(t) ? t.appendChild(n, i) : n.appendChild(i);
			}
			function Xu(t, n, i, s, c) {
				null !== s ? Ns(t, n, i, s, c) : Qu(t, n, i);
			}
			function cl(t, n) {
				return In(t) ? t.parentNode(n) : n.parentNode;
			}
			function Bc(t, n, i) {
				return th(t, n, i);
			}
			let th = function eh(t, n, i) {
				return 40 & t.type ? Y(t, i) : null;
			};
			function ba(t, n, i, s) {
				const c = qu(t, s, n),
					u = n[11],
					b = Bc(s.parent || n[6], s, n);
				if (null != c)
					if (Array.isArray(i)) for (let E = 0; E < i.length; E++) Xu(u, c, i[E], b, !1);
					else Xu(u, c, i, b, !1);
			}
			function Ca(t, n) {
				if (null !== n) {
					const i = n.type;
					if (3 & i) return Y(n, t);
					if (4 & i) return Hc(-1, t[n.index]);
					if (8 & i) {
						const s = n.child;
						if (null !== s) return Ca(t, s);
						{
							const c = t[n.index];
							return wi(c) ? Hc(-1, c) : Qn(c);
						}
					}
					if (32 & i) return ll(n, t)() || Qn(t[n.index]);
					{
						const s = nh(t, n);
						return null !== s ? (Array.isArray(s) ? s[0] : Ca(va(t[16]), s)) : Ca(t, n.next);
					}
				}
				return null;
			}
			function nh(t, n) {
				return null !== n ? t[16][6].projection[n.projection] : null;
			}
			function Hc(t, n) {
				const i = 10 + t + 1;
				if (i < n.length) {
					const s = n[i],
						c = s[1].firstChild;
					if (null !== c) return Ca(s, c);
				}
				return n[7];
			}
			function jc(t, n, i, s, c, u, f) {
				for (; null != i; ) {
					const b = s[i.index],
						E = i.type;
					if ((f && 0 === n && (b && Sr(Qn(b), s), (i.flags |= 4)), 64 != (64 & i.flags)))
						if (8 & E) jc(t, n, i.child, s, c, u, !1), no(n, t, c, b, u);
						else if (32 & E) {
							const L = ll(i, s);
							let j;
							for (; (j = L()); ) no(n, t, c, j, u);
							no(n, t, c, b, u);
						} else 16 & E ? Uc(t, n, s, i, c, u) : no(n, t, c, b, u);
					i = f ? i.projectionNext : i.next;
				}
			}
			function wa(t, n, i, s, c, u) {
				jc(i, s, t.firstChild, n, c, u, !1);
			}
			function Uc(t, n, i, s, c, u) {
				const f = i[16],
					E = f[6].projection[s.projection];
				if (Array.isArray(E)) for (let L = 0; L < E.length; L++) no(n, t, c, E[L], u);
				else jc(t, n, E, f[3], c, u, !0);
			}
			function sh(t, n, i) {
				In(t) ? t.setAttribute(n, 'style', i) : (n.style.cssText = i);
			}
			function ul(t, n, i) {
				In(t) ? ('' === i ? t.removeAttribute(n, 'class') : t.setAttribute(n, 'class', i)) : (n.className = i);
			}
			function zc(t, n, i) {
				let s = t.length;
				for (;;) {
					const c = t.indexOf(n, i);
					if (-1 === c) return c;
					if (0 === c || t.charCodeAt(c - 1) <= 32) {
						const u = n.length;
						if (c + u === s || t.charCodeAt(c + u) <= 32) return c;
					}
					i = c + 1;
				}
			}
			const Gc = 'ng-template';
			function oh(t, n, i) {
				let s = 0;
				for (; s < t.length; ) {
					let c = t[s++];
					if (i && 'class' === c) {
						if (((c = t[s]), -1 !== zc(c.toLowerCase(), n, 0))) return !0;
					} else if (1 === c) {
						for (; s < t.length && 'string' == typeof (c = t[s++]); ) if (c.toLowerCase() === n) return !0;
						return !1;
					}
				}
				return !1;
			}
			function hl(t) {
				return 4 === t.type && t.value !== Gc;
			}
			function $c(t, n, i) {
				return n === (4 !== t.type || i ? t.value : Gc);
			}
			function Jm(t, n, i) {
				let s = 4;
				const c = t.attrs || [],
					u = (function tg(t) {
						for (let n = 0; n < t.length; n++) if (V(t[n])) return n;
						return t.length;
					})(c);
				let f = !1;
				for (let b = 0; b < n.length; b++) {
					const E = n[b];
					if ('number' != typeof E) {
						if (!f)
							if (4 & s) {
								if (((s = 2 | (1 & s)), ('' !== E && !$c(t, E, i)) || ('' === E && 1 === n.length))) {
									if (bs(s)) return !1;
									f = !0;
								}
							} else {
								const L = 8 & s ? E : n[++b];
								if (8 & s && null !== t.attrs) {
									if (!oh(t.attrs, L, i)) {
										if (bs(s)) return !1;
										f = !0;
									}
									continue;
								}
								const ne = eg(8 & s ? 'class' : E, c, hl(t), i);
								if (-1 === ne) {
									if (bs(s)) return !1;
									f = !0;
									continue;
								}
								if ('' !== L) {
									let Ae;
									Ae = ne > u ? '' : c[ne + 1].toLowerCase();
									const Ze = 8 & s ? Ae : null;
									if ((Ze && -1 !== zc(Ze, L, 0)) || (2 & s && L !== Ae)) {
										if (bs(s)) return !1;
										f = !0;
									}
								}
							}
					} else {
						if (!f && !bs(s) && !bs(E)) return !1;
						if (f && bs(E)) continue;
						(f = !1), (s = E | (1 & s));
					}
				}
				return bs(s) || f;
			}
			function bs(t) {
				return 0 == (1 & t);
			}
			function eg(t, n, i, s) {
				if (null === n) return -1;
				let c = 0;
				if (s || !i) {
					let u = !1;
					for (; c < n.length; ) {
						const f = n[c];
						if (f === t) return c;
						if (3 === f || 6 === f) u = !0;
						else {
							if (1 === f || 2 === f) {
								let b = n[++c];
								for (; 'string' == typeof b; ) b = n[++c];
								continue;
							}
							if (4 === f) break;
							if (0 === f) {
								c += 4;
								continue;
							}
						}
						c += u ? 1 : 2;
					}
					return -1;
				}
				return (function ng(t, n) {
					let i = t.indexOf(4);
					if (i > -1)
						for (i++; i < t.length; ) {
							const s = t[i];
							if ('number' == typeof s) return -1;
							if (s === n) return i;
							i++;
						}
					return -1;
				})(n, t);
			}
			function ah(t, n, i = !1) {
				for (let s = 0; s < n.length; s++) if (Jm(t, n[s], i)) return !0;
				return !1;
			}
			function ig(t, n) {
				e: for (let i = 0; i < n.length; i++) {
					const s = n[i];
					if (t.length === s.length) {
						for (let c = 0; c < t.length; c++) if (t[c] !== s[c]) continue e;
						return !0;
					}
				}
				return !1;
			}
			function lh(t, n) {
				return t ? ':not(' + n.trim() + ')' : n;
			}
			function rg(t) {
				let n = t[0],
					i = 1,
					s = 2,
					c = '',
					u = !1;
				for (; i < t.length; ) {
					let f = t[i];
					if ('string' == typeof f)
						if (2 & s) {
							const b = t[++i];
							c += '[' + f + (b.length > 0 ? '="' + b + '"' : '') + ']';
						} else 8 & s ? (c += '.' + f) : 4 & s && (c += ' ' + f);
					else '' !== c && !bs(f) && ((n += lh(u, c)), (c = '')), (s = f), (u = u || !bs(s));
					i++;
				}
				return '' !== c && (n += lh(u, c)), n;
			}
			const Rn = {};
			function ch(t) {
				dh(N(), Dt(), ln() + t, St());
			}
			function dh(t, n, i, s) {
				if (!s)
					if (3 == (3 & n[2])) {
						const u = t.preOrderCheckHooks;
						null !== u && Yi(n, u, i);
					} else {
						const u = t.preOrderHooks;
						null !== u && Ji(n, u, 0, i);
					}
				Zn(i);
			}
			function pl(t, n) {
				return (t << 17) | (n << 2);
			}
			function Cs(t) {
				return (t >> 17) & 32767;
			}
			function Kc(t) {
				return 2 | t;
			}
			function Bs(t) {
				return (131068 & t) >> 2;
			}
			function fl(t, n) {
				return (-131069 & t) | (n << 2);
			}
			function ml(t) {
				return 1 | t;
			}
			function td(t, n) {
				const i = t.contentQueries;
				if (null !== i)
					for (let s = 0; s < i.length; s += 2) {
						const c = i[s],
							u = i[s + 1];
						if (-1 !== u) {
							const f = t.data[u];
							or(c), f.contentQueries(2, n[u], u);
						}
					}
			}
			function jo(t, n, i, s, c, u, f, b, E, L) {
				const j = n.blueprint.slice();
				return (
					(j[0] = c),
					(j[2] = 140 | s),
					R(j),
					(j[3] = j[15] = t),
					(j[8] = i),
					(j[10] = f || (t && t[10])),
					(j[11] = b || (t && t[11])),
					(j[12] = E || (t && t[12]) || null),
					(j[9] = L || (t && t[9]) || null),
					(j[6] = u),
					(j[16] = 2 == n.type ? t[16] : j),
					j
				);
			}
			function Uo(t, n, i, s, c) {
				let u = t.data[n];
				if (null === u)
					(u = (function nd(t, n, i, s, c) {
						const u = x(),
							f = me(),
							E = (t.data[n] = (function Cg(t, n, i, s, c, u) {
								return {
									type: i,
									index: s,
									insertBeforeIndex: null,
									injectorIndex: n ? n.injectorIndex : -1,
									directiveStart: -1,
									directiveEnd: -1,
									directiveStylingLast: -1,
									propertyBindings: null,
									flags: 0,
									providerIndexes: 0,
									value: c,
									attrs: u,
									mergedAttrs: null,
									localNames: null,
									initialInputs: void 0,
									inputs: null,
									outputs: null,
									tViews: null,
									next: null,
									projectionNext: null,
									child: null,
									parent: n,
									projection: null,
									styles: null,
									stylesWithoutHost: null,
									residualStyles: void 0,
									classes: null,
									classesWithoutHost: null,
									residualClasses: void 0,
									classBindings: 0,
									styleBindings: 0,
								};
							})(0, f ? u : u && u.parent, i, n, s, c));
						return (
							null === t.firstChild && (t.firstChild = E),
							null !== u &&
								(f
									? null == u.child && null !== E.parent && (u.child = E)
									: null === u.next && (u.next = E)),
							E
						);
					})(t, n, i, s, c)),
						(function ii() {
							return D.lFrame.inI18n;
						})() && (u.flags |= 64);
				else if (64 & u.type) {
					(u.type = i), (u.value = s), (u.attrs = c);
					const f = (function B() {
						const t = D.lFrame,
							n = t.currentTNode;
						return t.isParent ? n : n.parent;
					})();
					u.injectorIndex = null === f ? -1 : f.injectorIndex;
				}
				return Z(u, !0), u;
			}
			function zo(t, n, i, s) {
				if (0 === i) return -1;
				const c = n.length;
				for (let u = 0; u < i; u++) n.push(s), t.blueprint.push(s), t.data.push(null);
				return c;
			}
			function Ma(t, n, i) {
				ps(n);
				try {
					const s = t.viewQuery;
					null !== s && gd(1, s, i);
					const c = t.template;
					null !== c && id(t, n, c, 1, i),
						t.firstCreatePass && (t.firstCreatePass = !1),
						t.staticContentQueries && td(t, n),
						t.staticViewQueries && gd(2, t.viewQuery, i);
					const u = t.components;
					null !== u &&
						(function bg(t, n) {
							for (let i = 0; i < n.length; i++) md(t, n[i]);
						})(n, u);
				} catch (s) {
					throw (t.firstCreatePass && ((t.incompleteFirstPass = !0), (t.firstCreatePass = !1)), s);
				} finally {
					(n[2] &= -5), jt();
				}
			}
			function Vs(t, n, i, s) {
				const c = n[2];
				if (256 == (256 & c)) return;
				ps(n);
				const u = St();
				try {
					R(n),
						(function an(t) {
							return (D.lFrame.bindingIndex = t);
						})(t.bindingStartIndex),
						null !== i && id(t, n, i, 2, s);
					const f = 3 == (3 & c);
					if (!u)
						if (f) {
							const L = t.preOrderCheckHooks;
							null !== L && Yi(n, L, null);
						} else {
							const L = t.preOrderHooks;
							null !== L && Ji(n, L, 0, null), lr(n, 0);
						}
					if (
						((function fd(t) {
							for (let n = kc(t); null !== n; n = ya(n)) {
								if (!n[2]) continue;
								const i = n[9];
								for (let s = 0; s < i.length; s++) {
									const c = i[s],
										u = c[3];
									0 == (1024 & c[2]) && v(u, 1), (c[2] |= 1024);
								}
							}
						})(n),
						(function Fh(t) {
							for (let n = kc(t); null !== n; n = ya(n))
								for (let i = 10; i < n.length; i++) {
									const s = n[i],
										c = s[1];
									on(s) && Vs(c, s, c.template, s[8]);
								}
						})(n),
						null !== t.contentQueries && td(t, n),
						!u)
					)
						if (f) {
							const L = t.contentCheckHooks;
							null !== L && Yi(n, L);
						} else {
							const L = t.contentHooks;
							null !== L && Ji(n, L, 1), lr(n, 1);
						}
					!(function bh(t, n) {
						const i = t.hostBindingOpCodes;
						if (null !== i)
							try {
								for (let s = 0; s < i.length; s++) {
									const c = i[s];
									if (c < 0) Zn(~c);
									else {
										const u = c,
											f = i[++s],
											b = i[++s];
										Ai(f, u), b(2, n[u]);
									}
								}
							} finally {
								Zn(-1);
							}
					})(t, n);
					const b = t.components;
					null !== b &&
						(function Ch(t, n) {
							for (let i = 0; i < n.length; i++) Lh(t, n[i]);
						})(n, b);
					const E = t.viewQuery;
					if ((null !== E && gd(2, E, s), !u))
						if (f) {
							const L = t.viewCheckHooks;
							null !== L && Yi(n, L);
						} else {
							const L = t.viewHooks;
							null !== L && Ji(n, L, 2), lr(n, 2);
						}
					!0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
						u || (n[2] &= -73),
						1024 & n[2] && ((n[2] &= -1025), v(n[3], -1));
				} finally {
					jt();
				}
			}
			function wh(t, n, i, s) {
				const c = n[10],
					u = !St(),
					f = Nn(n);
				try {
					u && !f && c.begin && c.begin(), f && Ma(t, n, s), Vs(t, n, i, s);
				} finally {
					u && !f && c.end && c.end();
				}
			}
			function id(t, n, i, s, c) {
				const u = ln(),
					f = 2 & s;
				try {
					Zn(-1), f && n.length > 20 && dh(t, n, 20, St()), i(s, c);
				} finally {
					Zn(u);
				}
			}
			function rd(t, n, i) {
				if (mi(n)) {
					const c = n.directiveEnd;
					for (let u = n.directiveStart; u < c; u++) {
						const f = t.data[u];
						f.contentQueries && f.contentQueries(1, i[u], u);
					}
				}
			}
			function sd(t, n, i) {
				!Ti() ||
					((function Sg(t, n, i, s) {
						const c = i.directiveStart,
							u = i.directiveEnd;
						t.firstCreatePass || y(i, n), Sr(s, n);
						const f = i.initialInputs;
						for (let b = c; b < u; b++) {
							const E = t.data[b],
								L = Jn(E);
							L && Hs(n, i, E);
							const j = os(n, t, b, i);
							Sr(j, n), null !== f && Oh(0, b - c, j, E, 0, f), L && (Lt(i.index, n)[8] = j);
						}
					})(t, n, i, Y(i, n)),
					128 == (128 & i.flags) &&
						(function Tg(t, n, i) {
							const s = i.directiveStart,
								c = i.directiveEnd,
								f = i.index,
								b = (function Ri() {
									return D.lFrame.currentDirectiveIndex;
								})();
							try {
								Zn(f);
								for (let E = s; E < c; E++) {
									const L = t.data[E],
										j = n[E];
									Rr(E),
										(null !== L.hostBindings || 0 !== L.hostVars || null !== L.hostAttrs) &&
											kh(L, j);
								}
							} finally {
								Zn(-1), Rr(b);
							}
						})(t, n, i));
			}
			function od(t, n, i = Y) {
				const s = n.localNames;
				if (null !== s) {
					let c = n.index + 1;
					for (let u = 0; u < s.length; u += 2) {
						const f = s[u + 1],
							b = -1 === f ? i(n, t) : t[f];
						t[c++] = b;
					}
				}
			}
			function Dh(t) {
				const n = t.tView;
				return null === n || n.incompleteFirstPass
					? (t.tView = bo(
							1,
							null,
							t.template,
							t.decls,
							t.vars,
							t.directiveDefs,
							t.pipeDefs,
							t.viewQuery,
							t.schemas,
							t.consts
					  ))
					: n;
			}
			function bo(t, n, i, s, c, u, f, b, E, L) {
				const j = 20 + s,
					ne = j + c,
					Ae = (function Mh(t, n) {
						const i = [];
						for (let s = 0; s < n; s++) i.push(s < t ? null : Rn);
						return i;
					})(j, ne),
					Ze = 'function' == typeof L ? L() : L;
				return (Ae[1] = {
					type: t,
					blueprint: Ae,
					template: i,
					queries: null,
					viewQuery: b,
					declTNode: n,
					data: Ae.slice().fill(null, j),
					bindingStartIndex: j,
					expandoStartIndex: ne,
					hostBindingOpCodes: null,
					firstCreatePass: !0,
					firstUpdatePass: !0,
					staticViewQueries: !1,
					staticContentQueries: !1,
					preOrderHooks: null,
					preOrderCheckHooks: null,
					contentHooks: null,
					contentCheckHooks: null,
					viewHooks: null,
					viewCheckHooks: null,
					destroyHooks: null,
					cleanup: null,
					contentQueries: null,
					components: null,
					directiveRegistry: 'function' == typeof u ? u() : u,
					pipeRegistry: 'function' == typeof f ? f() : f,
					firstChild: null,
					schemas: E,
					consts: Ze,
					incompleteFirstPass: !1,
				});
			}
			function Eh(t, n, i, s) {
				const c = Vh(n);
				null === i ? c.push(s) : (c.push(i), t.firstCreatePass && Hh(t).push(s, c.length - 1));
			}
			function Sh(t, n, i) {
				for (let s in t)
					if (t.hasOwnProperty(s)) {
						const c = t[s];
						(i = null === i ? {} : i).hasOwnProperty(s) ? i[s].push(n, c) : (i[s] = [n, c]);
					}
				return i;
			}
			function qr(t, n, i, s, c, u, f, b) {
				const E = Y(n, i);
				let j,
					L = n.inputs;
				!b && null != L && (j = L[s])
					? (zh(t, i, j, s, c),
					  Zi(n) &&
							(function Dg(t, n) {
								const i = Lt(n, t);
								16 & i[2] || (i[2] |= 64);
							})(i, n.index))
					: 3 & n.type &&
					  ((s = (function ld(t) {
							return 'class' === t
								? 'className'
								: 'for' === t
								? 'htmlFor'
								: 'formaction' === t
								? 'formAction'
								: 'innerHtml' === t
								? 'innerHTML'
								: 'readonly' === t
								? 'readOnly'
								: 'tabindex' === t
								? 'tabIndex'
								: t;
					  })(s)),
					  (c = null != f ? f(c, n.value || '', s) : c),
					  In(u) ? u.setProperty(E, s, c) : ve(s) || (E.setProperty ? E.setProperty(s, c) : (E[s] = c)));
			}
			function xa(t, n, i, s) {
				let c = !1;
				if (Ti()) {
					const u = (function vl(t, n, i) {
							const s = t.directiveRegistry;
							let c = null;
							if (s)
								for (let u = 0; u < s.length; u++) {
									const f = s[u];
									ah(i, f.selectors, !1) &&
										(c || (c = []),
										$(y(i, n), t, f.type),
										Jn(f) ? (dd(t, i), c.unshift(f)) : c.push(f));
								}
							return c;
						})(t, n, i),
						f = null === s ? null : { '': -1 };
					if (null !== u) {
						(c = !0), ud(i, t.data.length, u.length);
						for (let j = 0; j < u.length; j++) {
							const ne = u[j];
							ne.providersResolver && ne.providersResolver(ne);
						}
						let b = !1,
							E = !1,
							L = zo(t, n, u.length, null);
						for (let j = 0; j < u.length; j++) {
							const ne = u[j];
							(i.mergedAttrs = vt(i.mergedAttrs, ne.hostAttrs)),
								hd(t, i, n, L, ne),
								Rh(L, ne, f),
								null !== ne.contentQueries && (i.flags |= 8),
								(null !== ne.hostBindings || null !== ne.hostAttrs || 0 !== ne.hostVars) &&
									(i.flags |= 128);
							const Ae = ne.type.prototype;
							!b &&
								(Ae.ngOnChanges || Ae.ngOnInit || Ae.ngDoCheck) &&
								((t.preOrderHooks || (t.preOrderHooks = [])).push(i.index), (b = !0)),
								!E &&
									(Ae.ngOnChanges || Ae.ngDoCheck) &&
									((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(i.index), (E = !0)),
								L++;
						}
						!(function wg(t, n) {
							const s = n.directiveEnd,
								c = t.data,
								u = n.attrs,
								f = [];
							let b = null,
								E = null;
							for (let L = n.directiveStart; L < s; L++) {
								const j = c[L],
									ne = j.inputs,
									Ae = null === u || hl(n) ? null : Ph(ne, u);
								f.push(Ae), (b = Sh(ne, L, b)), (E = Sh(j.outputs, L, E));
							}
							null !== b &&
								(b.hasOwnProperty('class') && (n.flags |= 16),
								b.hasOwnProperty('style') && (n.flags |= 32)),
								(n.initialInputs = f),
								(n.inputs = b),
								(n.outputs = E);
						})(t, i);
					}
					f &&
						(function Ih(t, n, i) {
							if (n) {
								const s = (t.localNames = []);
								for (let c = 0; c < n.length; c += 2) {
									const u = i[n[c + 1]];
									if (null == u) throw new Be(-301, `Export of name '${n[c + 1]}' not found!`);
									s.push(n[c], u);
								}
							}
						})(i, s, f);
				}
				return (i.mergedAttrs = vt(i.mergedAttrs, i.attrs)), c;
			}
			function cd(t, n, i, s, c, u) {
				const f = u.hostBindings;
				if (f) {
					let b = t.hostBindingOpCodes;
					null === b && (b = t.hostBindingOpCodes = []);
					const E = ~n.index;
					(function Ah(t) {
						let n = t.length;
						for (; n > 0; ) {
							const i = t[--n];
							if ('number' == typeof i && i < 0) return i;
						}
						return 0;
					})(b) != E && b.push(E),
						b.push(s, c, f);
				}
			}
			function kh(t, n) {
				null !== t.hostBindings && t.hostBindings(1, n);
			}
			function dd(t, n) {
				(n.flags |= 2), (t.components || (t.components = [])).push(n.index);
			}
			function Rh(t, n, i) {
				if (i) {
					if (n.exportAs) for (let s = 0; s < n.exportAs.length; s++) i[n.exportAs[s]] = t;
					Jn(n) && (i[''] = t);
				}
			}
			function ud(t, n, i) {
				(t.flags |= 1), (t.directiveStart = n), (t.directiveEnd = n + i), (t.providerIndexes = n);
			}
			function hd(t, n, i, s, c) {
				t.data[s] = c;
				const u = c.factory || (c.factory = Si(c.type)),
					f = new xs(u, Jn(c), null);
				(t.blueprint[s] = f), (i[s] = f), cd(t, n, 0, s, zo(t, i, c.hostVars, Rn), c);
			}
			function Hs(t, n, i) {
				const s = Y(n, t),
					c = Dh(i),
					u = t[10],
					f = Ta(t, jo(t, c, null, i.onPush ? 64 : 16, s, n, u, u.createRenderer(s, i), null, null));
				t[n.index] = f;
			}
			function As(t, n, i, s, c, u) {
				const f = Y(t, n);
				!(function Ea(t, n, i, s, c, u, f) {
					if (null == u) In(t) ? t.removeAttribute(n, c, i) : n.removeAttribute(c);
					else {
						const b = null == f ? ye(u) : f(u, s || '', c);
						In(t) ? t.setAttribute(n, c, b, i) : i ? n.setAttributeNS(i, c, b) : n.setAttribute(c, b);
					}
				})(n[11], f, u, t.value, i, s, c);
			}
			function Oh(t, n, i, s, c, u) {
				const f = u[n];
				if (null !== f) {
					const b = s.setInput;
					for (let E = 0; E < f.length; ) {
						const L = f[E++],
							j = f[E++],
							ne = f[E++];
						null !== b ? s.setInput(i, ne, L, j) : (i[j] = ne);
					}
				}
			}
			function Ph(t, n) {
				let i = null,
					s = 0;
				for (; s < n.length; ) {
					const c = n[s];
					if (0 !== c)
						if (5 !== c) {
							if ('number' == typeof c) break;
							t.hasOwnProperty(c) && (null === i && (i = []), i.push(c, t[c], n[s + 1])), (s += 2);
						} else s += 2;
					else s += 4;
				}
				return i;
			}
			function pd(t, n, i, s) {
				return new Array(t, !0, !1, n, null, 0, s, i, null, null);
			}
			function Lh(t, n) {
				const i = Lt(n, t);
				if (on(i)) {
					const s = i[1];
					80 & i[2] ? Vs(s, i, s.template, i[8]) : i[5] > 0 && Sa(i);
				}
			}
			function Sa(t) {
				for (let s = kc(t); null !== s; s = ya(s))
					for (let c = 10; c < s.length; c++) {
						const u = s[c];
						if (1024 & u[2]) {
							const f = u[1];
							Vs(f, u, f.template, u[8]);
						} else u[5] > 0 && Sa(u);
					}
				const i = t[1].components;
				if (null !== i)
					for (let s = 0; s < i.length; s++) {
						const c = Lt(i[s], t);
						on(c) && c[5] > 0 && Sa(c);
					}
			}
			function md(t, n) {
				const i = Lt(n, t),
					s = i[1];
				(function Nh(t, n) {
					for (let i = n.length; i < t.blueprint.length; i++) n.push(t.blueprint[i]);
				})(s, i),
					Ma(s, i, i[8]);
			}
			function Ta(t, n) {
				return t[13] ? (t[14][4] = n) : (t[13] = n), (t[14] = n), n;
			}
			function yl(t) {
				for (; t; ) {
					t[2] |= 64;
					const n = va(t);
					if (qi(t) && !n) return t;
					t = n;
				}
				return null;
			}
			function Cl(t, n, i) {
				const s = n[10];
				s.begin && s.begin();
				try {
					Vs(t, n, t.template, i);
				} catch (c) {
					throw (Uh(n, c), c);
				} finally {
					s.end && s.end();
				}
			}
			function wl(t) {
				!(function bl(t) {
					for (let n = 0; n < t.components.length; n++) {
						const i = t.components[n],
							s = bc(i),
							c = s[1];
						wh(c, s, c.template, i);
					}
				})(t[8]);
			}
			function gd(t, n, i) {
				or(0), n(t, i);
			}
			const Rg = (() => Promise.resolve(null))();
			function Vh(t) {
				return t[7] || (t[7] = []);
			}
			function Hh(t) {
				return t.cleanup || (t.cleanup = []);
			}
			function jh(t, n, i) {
				return (
					(null === t || Jn(t)) &&
						(i = (function k(t) {
							for (; Array.isArray(t); ) {
								if ('object' == typeof t[1]) return t;
								t = t[0];
							}
							return null;
						})(i[n.index])),
					i[11]
				);
			}
			function Uh(t, n) {
				const i = t[9],
					s = i ? i.get(_a, null) : null;
				s && s.handleError(n);
			}
			function zh(t, n, i, s, c) {
				for (let u = 0; u < i.length; ) {
					const f = i[u++],
						b = i[u++],
						E = n[f],
						L = t.data[f];
					null !== L.setInput ? L.setInput(E, c, s, b) : (E[b] = c);
				}
			}
			function js(t, n, i) {
				const s = I(n, t);
				!(function Wu(t, n, i) {
					In(t) ? t.setValue(n, i) : (n.textContent = i);
				})(t[11], s, i);
			}
			function Dl(t, n, i) {
				let s = i ? t.styles : null,
					c = i ? t.classes : null,
					u = 0;
				if (null !== n)
					for (let f = 0; f < n.length; f++) {
						const b = n[f];
						'number' == typeof b
							? (u = b)
							: 1 == u
							? (c = ae(c, b))
							: 2 == u && (s = ae(s, b + ': ' + n[++f] + ';'));
					}
				i ? (t.styles = s) : (t.stylesWithoutHost = s), i ? (t.classes = c) : (t.classesWithoutHost = c);
			}
			const _d = new Ei('INJECTOR', -1);
			class Gh {
				get(n, i = aa) {
					if (i === aa) {
						const s = new Error(`NullInjectorError: No provider for ${De(n)}!`);
						throw ((s.name = 'NullInjectorError'), s);
					}
					return i;
				}
			}
			const vd = new Ei('Set Injector scope.'),
				Aa = {},
				Lg = {};
			let yd;
			function Ml() {
				return void 0 === yd && (yd = new Gh()), yd;
			}
			function bd(t, n = null, i = null, s) {
				const c = Hr(t, n, i, s);
				return c._resolveInjectorDefTypes(), c;
			}
			function Hr(t, n = null, i = null, s) {
				return new $h(t, i, n || Ml(), s);
			}
			class $h {
				constructor(n, i, s, c = null) {
					(this.parent = s),
						(this.records = new Map()),
						(this.injectorDefTypes = new Set()),
						(this.onDestroy = new Set()),
						(this._destroyed = !1);
					const u = [];
					i && cs(i, (b) => this.processProvider(b, n, i)),
						cs([n], (b) => this.processInjectorType(b, [], u)),
						this.records.set(_d, Co(void 0, this));
					const f = this.records.get(vd);
					(this.scope = null != f ? f.value : null),
						(this.source = c || ('object' == typeof n ? null : De(n)));
				}
				get destroyed() {
					return this._destroyed;
				}
				destroy() {
					this.assertNotDestroyed(), (this._destroyed = !0);
					try {
						this.onDestroy.forEach((n) => n.ngOnDestroy());
					} finally {
						this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
					}
				}
				get(n, i = aa, s = F.Default) {
					this.assertNotDestroyed();
					const c = rc(this),
						u = fe(void 0);
					try {
						if (!(s & F.SkipSelf)) {
							let b = this.records.get(n);
							if (void 0 === b) {
								const E =
									(function qh(t) {
										return 'function' == typeof t || ('object' == typeof t && t instanceof Ei);
									})(n) && Je(n);
								(b = E && this.injectableDefInScope(E) ? Co(xl(n), Aa) : null), this.records.set(n, b);
							}
							if (null != b) return this.hydrate(n, b);
						}
						return (s & F.Self ? Ml() : this.parent).get(n, (i = s & F.Optional && i === aa ? null : i));
					} catch (f) {
						if ('NullInjectorError' === f.name) {
							if (((f[qa] = f[qa] || []).unshift(De(n)), c)) throw f;
							return (function vu(t, n, i, s) {
								const c = t[qa];
								throw (
									(n[la] && c.unshift(n[la]),
									(t.message = (function Xf(t, n, i, s = null) {
										t = t && '\n' === t.charAt(0) && '\u0275' == t.charAt(1) ? t.substr(2) : t;
										let c = De(n);
										if (Array.isArray(n)) c = n.map(De).join(' -> ');
										else if ('object' == typeof n) {
											let u = [];
											for (let f in n)
												if (n.hasOwnProperty(f)) {
													let b = n[f];
													u.push(
														f + ':' + ('string' == typeof b ? JSON.stringify(b) : De(b))
													);
												}
											c = `{${u.join(', ')}}`;
										}
										return `${i}${s ? '(' + s + ')' : ''}[${c}]: ${t.replace(Wf, '\n  ')}`;
									})('\n' + t.message, c, i, s)),
									(t.ngTokenPath = c),
									(t[qa] = null),
									t)
								);
							})(f, n, 'R3InjectorError', this.source);
						}
						throw f;
					} finally {
						fe(u), rc(c);
					}
				}
				_resolveInjectorDefTypes() {
					this.injectorDefTypes.forEach((n) => this.get(n));
				}
				toString() {
					const n = [];
					return this.records.forEach((s, c) => n.push(De(c))), `R3Injector[${n.join(', ')}]`;
				}
				assertNotDestroyed() {
					if (this._destroyed) throw new Error('Injector has already been destroyed.');
				}
				processInjectorType(n, i, s) {
					if (!(n = q(n))) return !1;
					let c = Bt(n);
					const u = (null == c && n.ngModule) || void 0,
						f = void 0 === u ? n : u,
						b = -1 !== s.indexOf(f);
					if ((void 0 !== u && (c = Bt(u)), null == c)) return !1;
					if (null != c.imports && !b) {
						let j;
						s.push(f);
						try {
							cs(c.imports, (ne) => {
								this.processInjectorType(ne, i, s) && (void 0 === j && (j = []), j.push(ne));
							});
						} finally {
						}
						if (void 0 !== j)
							for (let ne = 0; ne < j.length; ne++) {
								const { ngModule: Ae, providers: Ze } = j[ne];
								cs(Ze, (ht) => this.processProvider(ht, Ae, Ze || Pt));
							}
					}
					this.injectorDefTypes.add(f);
					const E = Si(f) || (() => new f());
					this.records.set(f, Co(E, Aa));
					const L = c.providers;
					if (null != L && !b) {
						const j = n;
						cs(L, (ne) => this.processProvider(ne, j, L));
					}
					return void 0 !== u && void 0 !== n.providers;
				}
				processProvider(n, i, s) {
					let c = so((n = q(n))) ? n : q(n && n.provide);
					const u = (function Wh(t, n, i) {
						return wd(t) ? Co(void 0, t.useValue) : Co(Cd(t), Aa);
					})(n);
					if (so(n) || !0 !== n.multi) this.records.get(c);
					else {
						let f = this.records.get(c);
						f || ((f = Co(void 0, Aa, !0)), (f.factory = () => sc(f.multi)), this.records.set(c, f)),
							(c = n),
							f.multi.push(n);
					}
					this.records.set(c, u);
				}
				hydrate(n, i) {
					return (
						i.value === Aa && ((i.value = Lg), (i.value = i.factory())),
						'object' == typeof i.value &&
							i.value &&
							(function Dd(t) {
								return null !== t && 'object' == typeof t && 'function' == typeof t.ngOnDestroy;
							})(i.value) &&
							this.onDestroy.add(i.value),
						i.value
					);
				}
				injectableDefInScope(n) {
					if (!n.providedIn) return !1;
					const i = q(n.providedIn);
					return 'string' == typeof i ? 'any' === i || i === this.scope : this.injectorDefTypes.has(i);
				}
			}
			function xl(t) {
				const n = Je(t),
					i = null !== n ? n.factory : Si(t);
				if (null !== i) return i;
				if (t instanceof Ei) throw new Error(`Token ${De(t)} is missing a \u0275prov definition.`);
				if (t instanceof Function)
					return (function Yh(t) {
						const n = t.length;
						if (n > 0) {
							const s = Ro(n, '?');
							throw new Error(`Can't resolve all parameters for ${De(t)}: (${s.join(', ')}).`);
						}
						const i = (function Ct(t) {
							const n = t && (t[Vt] || t[bn]);
							if (n) {
								const i = (function It(t) {
									if (t.hasOwnProperty('name')) return t.name;
									const n = ('' + t).match(/^function\s*([^\s(]+)/);
									return null === n ? '' : n[1];
								})(t);
								return (
									console.warn(
										`DEPRECATED: DI is instantiating a token "${i}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${i}" class.`
									),
									n
								);
							}
							return null;
						})(t);
						return null !== i ? () => i.factory(t) : () => new t();
					})(t);
				throw new Error('unreachable');
			}
			function Cd(t, n, i) {
				let s;
				if (so(t)) {
					const c = q(t);
					return Si(c) || xl(c);
				}
				if (wd(t)) s = () => q(t.useValue);
				else if (
					(function Go(t) {
						return !(!t || !t.useFactory);
					})(t)
				)
					s = () => t.useFactory(...sc(t.deps || []));
				else if (
					(function Kh(t) {
						return !(!t || !t.useExisting);
					})(t)
				)
					s = () => er(q(t.useExisting));
				else {
					const c = q(t && (t.useClass || t.provide));
					if (
						!(function Zh(t) {
							return !!t.deps;
						})(t)
					)
						return Si(c) || xl(c);
					s = () => new c(...sc(t.deps));
				}
				return s;
			}
			function Co(t, n, i = !1) {
				return { factory: t, value: n, multi: i ? [] : void 0 };
			}
			function wd(t) {
				return null !== t && 'object' == typeof t && Zf in t;
			}
			function so(t) {
				return 'function' == typeof t;
			}
			let Qr = (() => {
				class t {
					static create(i, s) {
						var c;
						if (Array.isArray(i)) return bd({ name: '' }, s, i, '');
						{
							const u = null !== (c = i.name) && void 0 !== c ? c : '';
							return bd({ name: u }, i.parent, i.providers, u);
						}
					}
				}
				return (
					(t.THROW_IF_NOT_FOUND = aa),
					(t.NULL = new Gh()),
					(t.ɵprov = Wt({
						token: t,
						providedIn: 'any',
						factory: () => er(_d),
					})),
					(t.__NG_ELEMENT_ID__ = -1),
					t
				);
			})();
			function Bg(t, n) {
				vr(bc(t)[1], p());
			}
			function Fd(t) {
				let n = (function rp(t) {
						return Object.getPrototypeOf(t.prototype).constructor;
					})(t.type),
					i = !0;
				const s = [t];
				for (; n; ) {
					let c;
					if (Jn(t)) c = n.ɵcmp || n.ɵdir;
					else {
						if (n.ɵcmp) throw new Error('Directives cannot inherit Components');
						c = n.ɵdir;
					}
					if (c) {
						if (i) {
							s.push(c);
							const f = t;
							(f.inputs = ka(t.inputs)),
								(f.declaredInputs = ka(t.declaredInputs)),
								(f.outputs = ka(t.outputs));
							const b = c.hostBindings;
							b && ap(t, b);
							const E = c.viewQuery,
								L = c.contentQueries;
							if (
								(E && sp(t, E),
								L && op(t, L),
								_e(t.inputs, c.inputs),
								_e(t.declaredInputs, c.declaredInputs),
								_e(t.outputs, c.outputs),
								Jn(c) && c.data.animation)
							) {
								const j = t.data;
								j.animation = (j.animation || []).concat(c.data.animation);
							}
						}
						const u = c.features;
						if (u)
							for (let f = 0; f < u.length; f++) {
								const b = u[f];
								b && b.ngInherit && b(t), b === Fd && (i = !1);
							}
					}
					n = Object.getPrototypeOf(n);
				}
				!(function Vg(t) {
					let n = 0,
						i = null;
					for (let s = t.length - 1; s >= 0; s--) {
						const c = t[s];
						(c.hostVars = n += c.hostVars), (c.hostAttrs = vt(c.hostAttrs, (i = vt(i, c.hostAttrs))));
					}
				})(s);
			}
			function ka(t) {
				return t === cn ? {} : t === Pt ? [] : t;
			}
			function sp(t, n) {
				const i = t.viewQuery;
				t.viewQuery = i
					? (s, c) => {
							n(s, c), i(s, c);
					  }
					: n;
			}
			function op(t, n) {
				const i = t.contentQueries;
				t.contentQueries = i
					? (s, c, u) => {
							n(s, c, u), i(s, c, u);
					  }
					: n;
			}
			function ap(t, n) {
				const i = t.hostBindings;
				t.hostBindings = i
					? (s, c) => {
							n(s, c), i(s, c);
					  }
					: n;
			}
			let $o = null;
			function oo() {
				if (!$o) {
					const t = mn.Symbol;
					if (t && t.iterator) $o = t.iterator;
					else {
						const n = Object.getOwnPropertyNames(Map.prototype);
						for (let i = 0; i < n.length; ++i) {
							const s = n[i];
							'entries' !== s && 'size' !== s && Map.prototype[s] === Map.prototype.entries && ($o = s);
						}
					}
				}
				return $o;
			}
			function wo(t) {
				return !!Ia(t) && (Array.isArray(t) || (!(t instanceof Map) && oo() in t));
			}
			function Ia(t) {
				return null !== t && ('function' == typeof t || 'object' == typeof t);
			}
			function Ds(t, n, i) {
				return (t[n] = i);
			}
			function yr(t, n, i) {
				return !Object.is(t[n], i) && ((t[n] = i), !0);
			}
			function ao(t, n, i, s) {
				const c = yr(t, n, i);
				return yr(t, n + 1, s) || c;
			}
			function Al(t, n, i, s) {
				const c = Dt();
				return yr(c, fn(), n) && (N(), As(Vn(), c, t, n, i, s)), Al;
			}
			function Wo(t, n, i, s) {
				return yr(t, fn(), i) ? n + ye(i) + s : Rn;
			}
			function lo(t, n, i, s, c, u) {
				const b = ao(
					t,
					(function En() {
						return D.lFrame.bindingIndex;
					})(),
					i,
					c
				);
				return Sn(2), b ? n + ye(i) + s + ye(c) + u : Rn;
			}
			function Nd(t, n, i, s, c, u, f, b) {
				const E = Dt(),
					L = N(),
					j = t + 20,
					ne = L.firstCreatePass
						? (function wp(t, n, i, s, c, u, f, b, E) {
								const L = n.consts,
									j = Uo(n, t, 4, f || null, qt(L, b));
								xa(n, i, j, qt(L, E)), vr(n, j);
								const ne = (j.tViews = bo(
									2,
									j,
									s,
									c,
									u,
									n.directiveRegistry,
									n.pipeRegistry,
									null,
									n.schemas,
									L
								));
								return (
									null !== n.queries &&
										(n.queries.template(n, j), (ne.queries = n.queries.embeddedTView(j))),
									j
								);
						  })(j, L, E, n, i, s, c, u, f)
						: L.data[j];
				Z(ne, !1);
				const Ae = E[11].createComment('');
				ba(L, E, Ae, ne),
					Sr(Ae, E),
					Ta(E, (E[j] = pd(Ae, E, Ae, ne))),
					ur(ne) && sd(L, E, ne),
					null != f && od(E, ne, b);
			}
			function Mp(t) {
				return pe(
					(function dt() {
						return D.lFrame.contextLView;
					})(),
					20 + t
				);
			}
			function Pa(t, n = F.Default) {
				const i = Dt();
				return null === i ? er(t, n) : zt(p(), i, q(t), n);
			}
			function Pp() {
				throw new Error('invalid');
			}
			function Fa(t, n, i) {
				const s = Dt();
				return yr(s, fn(), n) && qr(N(), Vn(), s, t, n, s[11], i, !1), Fa;
			}
			function Il(t, n, i, s, c) {
				const f = c ? 'class' : 'style';
				zh(t, i, n.inputs[f], f, s);
			}
			function Rl(t, n, i, s) {
				const c = Dt(),
					u = N(),
					f = 20 + t,
					b = c[11],
					E = (c[f] = Oc(
						b,
						n,
						(function co() {
							return D.lFrame.currentNamespace;
						})()
					)),
					L = u.firstCreatePass
						? (function Fp(t, n, i, s, c, u, f) {
								const b = n.consts,
									L = Uo(n, t, 2, c, qt(b, u));
								return (
									xa(n, i, L, qt(b, f)),
									null !== L.attrs && Dl(L, L.attrs, !1),
									null !== L.mergedAttrs && Dl(L, L.mergedAttrs, !0),
									null !== n.queries && n.queries.elementStart(n, L),
									L
								);
						  })(f, u, c, 0, n, i, s)
						: u.data[f];
				Z(L, !0);
				const j = L.mergedAttrs;
				null !== j && M(b, E, j);
				const ne = L.classes;
				null !== ne && ul(b, E, ne);
				const Ae = L.styles;
				null !== Ae && sh(b, E, Ae),
					64 != (64 & L.flags) && ba(u, c, E, L),
					0 ===
						(function lt() {
							return D.lFrame.elementDepthCount;
						})() && Sr(E, c),
					(function Kt() {
						D.lFrame.elementDepthCount++;
					})(),
					ur(L) && (sd(u, c, L), rd(u, L, c)),
					null !== s && od(c, L);
			}
			function Ol() {
				let t = p();
				me() ? Ce() : ((t = t.parent), Z(t, !1));
				const n = t;
				!(function Hn() {
					D.lFrame.elementDepthCount--;
				})();
				const i = N();
				i.firstCreatePass && (vr(i, t), mi(t) && i.queries.elementEnd(t)),
					null != n.classesWithoutHost &&
						(function So(t) {
							return 0 != (16 & t.flags);
						})(n) &&
						Il(i, n, Dt(), n.classesWithoutHost, !0),
					null != n.stylesWithoutHost &&
						(function ms(t) {
							return 0 != (32 & t.flags);
						})(n) &&
						Il(i, n, Dt(), n.stylesWithoutHost, !1);
			}
			function Ud(t, n, i, s) {
				Rl(t, n, i, s), Ol();
			}
			function Pl(t, n, i) {
				const s = Dt(),
					c = N(),
					u = t + 20,
					f = c.firstCreatePass
						? (function Lp(t, n, i, s, c) {
								const u = n.consts,
									f = qt(u, s),
									b = Uo(n, t, 8, 'ng-container', f);
								return (
									null !== f && Dl(b, f, !0),
									xa(n, i, b, qt(u, c)),
									null !== n.queries && n.queries.elementStart(n, b),
									b
								);
						  })(u, c, s, n, i)
						: c.data[u];
				Z(f, !0);
				const b = (s[u] = s[11].createComment(''));
				ba(c, s, b, f), Sr(b, s), ur(f) && (sd(c, s, f), rd(c, f, s)), null != i && od(s, f);
			}
			function Gd() {
				let t = p();
				const n = N();
				me() ? Ce() : ((t = t.parent), Z(t, !1)),
					n.firstCreatePass && (vr(n, t), mi(t) && n.queries.elementEnd(t));
			}
			function Fl(t, n, i) {
				Pl(t, n, i), Gd();
			}
			function Np() {
				return Dt();
			}
			function $d(t) {
				return !!t && 'function' == typeof t.then;
			}
			function Bp(t) {
				return !!t && 'function' == typeof t.subscribe;
			}
			const Yd = Bp;
			function l(t, n, i, s) {
				const c = Dt(),
					u = N(),
					f = p();
				return r(u, c, c[11], f, t, n, !!i, s), l;
			}
			function a(t, n) {
				const i = p(),
					s = Dt(),
					c = N();
				return r(c, s, jh(ki(c.data), i, s), i, t, n, !1), a;
			}
			function r(t, n, i, s, c, u, f, b) {
				const E = ur(s),
					j = t.firstCreatePass && Hh(t),
					ne = n[8],
					Ae = Vh(n);
				let Ze = !0;
				if (3 & s.type || b) {
					const Nt = Y(s, n),
						Jt = b ? b(Nt) : Nt,
						wt = Ae.length,
						yn = b ? (jn) => b(Qn(jn[s.index])) : s.index;
					if (In(i)) {
						let jn = null;
						if (
							(!b &&
								E &&
								(jn = (function e(t, n, i, s) {
									const c = t.cleanup;
									if (null != c)
										for (let u = 0; u < c.length - 1; u += 2) {
											const f = c[u];
											if (f === i && c[u + 1] === s) {
												const b = n[7],
													E = c[u + 2];
												return b.length > E ? b[E] : null;
											}
											'string' == typeof f && (u += 2);
										}
									return null;
								})(t, n, c, s.index)),
							null !== jn)
						)
							((jn.__ngLastListenerFn__ || jn).__ngNextListenerFn__ = u),
								(jn.__ngLastListenerFn__ = u),
								(Ze = !1);
						else {
							u = g(s, n, ne, u, !1);
							const ti = i.listen(Jt, c, u);
							Ae.push(u, ti), j && j.push(c, yn, wt, wt + 1);
						}
					} else
						(u = g(s, n, ne, u, !0)), Jt.addEventListener(c, u, f), Ae.push(u), j && j.push(c, yn, wt, f);
				} else u = g(s, n, ne, u, !1);
				const ht = s.outputs;
				let kt;
				if (Ze && null !== ht && (kt = ht[c])) {
					const Nt = kt.length;
					if (Nt)
						for (let Jt = 0; Jt < Nt; Jt += 2) {
							const us = n[kt[Jt]][kt[Jt + 1]].subscribe(u),
								na = Ae.length;
							Ae.push(u, us), j && j.push(c, s.index, na, -(na + 1));
						}
				}
			}
			function d(t, n, i, s) {
				try {
					return !1 !== i(s);
				} catch (c) {
					return Uh(t, c), !1;
				}
			}
			function g(t, n, i, s, c) {
				return function u(f) {
					if (f === Function) return s;
					const b = 2 & t.flags ? Lt(t.index, n) : n;
					0 == (32 & n[2]) && yl(b);
					let E = d(n, 0, s, f),
						L = u.__ngNextListenerFn__;
					for (; L; ) (E = d(n, 0, L, f) && E), (L = L.__ngNextListenerFn__);
					return c && !1 === E && (f.preventDefault(), (f.returnValue = !1)), E;
				};
			}
			function H(t = 1) {
				return (function Zt(t) {
					return (D.lFrame.contextLView = (function Xt(t, n) {
						for (; t > 0; ) (n = n[15]), t--;
						return n;
					})(t, D.lFrame.contextLView))[8];
				})(t);
			}
			function ie(t, n) {
				let i = null;
				const s = (function Yc(t) {
					const n = t.attrs;
					if (null != n) {
						const i = n.indexOf(5);
						if (0 == (1 & i)) return n[i + 1];
					}
					return null;
				})(t);
				for (let c = 0; c < n.length; c++) {
					const u = n[c];
					if ('*' !== u) {
						if (null === s ? ah(t, u, !0) : ig(s, u)) return c;
					} else i = c;
				}
				return i;
			}
			function ze(t) {
				const n = Dt()[16][6];
				if (!n.projection) {
					const s = (n.projection = Ro(t ? t.length : 1, null)),
						c = s.slice();
					let u = n.child;
					for (; null !== u; ) {
						const f = t ? ie(u, t) : 0;
						null !== f && (c[f] ? (c[f].projectionNext = u) : (s[f] = u), (c[f] = u)), (u = u.next);
					}
				}
			}
			function bt(t, n = 0, i) {
				const s = Dt(),
					c = N(),
					u = Uo(c, 20 + t, 16, null, i || null);
				null === u.projection && (u.projection = n),
					Ce(),
					64 != (64 & u.flags) &&
						(function qm(t, n, i) {
							Uc(n[11], 0, n, i, qu(t, i, n), Bc(i.parent || n[6], i, n));
						})(c, s, u);
			}
			function hn(t, n, i, s, c) {
				const u = Dt(),
					f = Wo(u, n, i, s);
				return f !== Rn && qr(N(), Vn(), u, t, f, u[11], c, !1), hn;
			}
			function s_(t, n, i, s, c) {
				const u = t[i + 1],
					f = null === n;
				let b = s ? Cs(u) : Bs(u),
					E = !1;
				for (; 0 !== b && (!1 === E || f); ) {
					const j = t[b + 1];
					yb(t[b], n) && ((E = !0), (t[b + 1] = s ? ml(j) : Kc(j))), (b = s ? Cs(j) : Bs(j));
				}
				E && (t[i + 1] = s ? Kc(u) : ml(u));
			}
			function yb(t, n) {
				return (
					null === t ||
					null == n ||
					(Array.isArray(t) ? t[1] : t) === n ||
					(!(!Array.isArray(t) || 'string' != typeof n) && Xs(t, n) >= 0)
				);
			}
			function Vp(t, n, i) {
				return ks(t, n, i, !1), Vp;
			}
			function Hp(t, n) {
				return ks(t, n, null, !0), Hp;
			}
			function ks(t, n, i, s) {
				const c = Dt(),
					u = N(),
					f = Sn(2);
				u.firstUpdatePass &&
					(function p_(t, n, i, s) {
						const c = t.data;
						if (null === c[i + 1]) {
							const u = c[ln()],
								f = (function h_(t, n) {
									return n >= t.expandoStartIndex;
								})(t, i);
							(function __(t, n) {
								return 0 != (t.flags & (n ? 16 : 32));
							})(u, s) &&
								null === n &&
								!f &&
								(n = !1),
								(n = (function Tb(t, n, i, s) {
									const c = ki(t);
									let u = s ? n.residualClasses : n.residualStyles;
									if (null === c)
										0 === (s ? n.classBindings : n.styleBindings) &&
											((i = Nl((i = jp(null, t, n, i, s)), n.attrs, s)), (u = null));
									else {
										const f = n.directiveStylingLast;
										if (-1 === f || t[f] !== c)
											if (((i = jp(c, t, n, i, s)), null === u)) {
												let E = (function Ab(t, n, i) {
													const s = i ? n.classBindings : n.styleBindings;
													if (0 !== Bs(s)) return t[Cs(s)];
												})(t, n, s);
												void 0 !== E &&
													Array.isArray(E) &&
													((E = jp(null, t, n, E[1], s)),
													(E = Nl(E, n.attrs, s)),
													(function kb(t, n, i, s) {
														t[Cs(i ? n.classBindings : n.styleBindings)] = s;
													})(t, n, s, E));
											} else
												u = (function Ib(t, n, i) {
													let s;
													const c = n.directiveEnd;
													for (let u = 1 + n.directiveStylingLast; u < c; u++)
														s = Nl(s, t[u].hostAttrs, i);
													return Nl(s, n.attrs, i);
												})(t, n, s);
									}
									return void 0 !== u && (s ? (n.residualClasses = u) : (n.residualStyles = u)), i;
								})(c, u, n, s)),
								(function _b(t, n, i, s, c, u) {
									let f = u ? n.classBindings : n.styleBindings,
										b = Cs(f),
										E = Bs(f);
									t[s] = i;
									let j,
										L = !1;
									if (Array.isArray(i)) {
										const ne = i;
										(j = ne[1]), (null === j || Xs(ne, j) > 0) && (L = !0);
									} else j = i;
									if (c)
										if (0 !== E) {
											const Ae = Cs(t[b + 1]);
											(t[s + 1] = pl(Ae, b)),
												0 !== Ae && (t[Ae + 1] = fl(t[Ae + 1], s)),
												(t[b + 1] = (function ag(t, n) {
													return (131071 & t) | (n << 17);
												})(t[b + 1], s));
										} else (t[s + 1] = pl(b, 0)), 0 !== b && (t[b + 1] = fl(t[b + 1], s)), (b = s);
									else
										(t[s + 1] = pl(E, 0)),
											0 === b ? (b = s) : (t[E + 1] = fl(t[E + 1], s)),
											(E = s);
									L && (t[s + 1] = Kc(t[s + 1])),
										s_(t, j, s, !0),
										s_(t, j, s, !1),
										(function vb(t, n, i, s, c) {
											const u = c ? t.residualClasses : t.residualStyles;
											null != u &&
												'string' == typeof n &&
												Xs(u, n) >= 0 &&
												(i[s + 1] = ml(i[s + 1]));
										})(n, j, t, s, u),
										(f = pl(b, E)),
										u ? (n.classBindings = f) : (n.styleBindings = f);
								})(c, u, n, i, f, s);
						}
					})(u, t, f, s),
					n !== Rn &&
						yr(c, f, n) &&
						(function m_(t, n, i, s, c, u, f, b) {
							if (!(3 & n.type)) return;
							const E = t.data,
								L = E[b + 1];
							Wd(
								(function Zc(t) {
									return 1 == (1 & t);
								})(L)
									? g_(E, n, i, c, Bs(L), f)
									: void 0
							) ||
								(Wd(u) ||
									((function Wc(t) {
										return 2 == (2 & t);
									})(L) &&
										(u = g_(E, null, i, c, b, f))),
								(function Qm(t, n, i, s, c) {
									const u = In(t);
									if (n)
										c
											? u
												? t.addClass(i, s)
												: i.classList.add(s)
											: u
											? t.removeClass(i, s)
											: i.classList.remove(s);
									else {
										let f = -1 === s.indexOf('-') ? void 0 : ys.DashCase;
										if (null == c) u ? t.removeStyle(i, s, f) : i.style.removeProperty(s);
										else {
											const b = 'string' == typeof c && c.endsWith('!important');
											b && ((c = c.slice(0, -10)), (f |= ys.Important)),
												u
													? t.setStyle(i, s, c, f)
													: i.style.setProperty(s, c, b ? 'important' : '');
										}
									}
								})(s, f, I(ln(), i), c, u));
						})(
							u,
							u.data[ln()],
							c,
							c[11],
							t,
							(c[f + 1] = (function Pb(t, n) {
								return (
									null == t ||
										('string' == typeof n ? (t += n) : 'object' == typeof t && (t = De(Ps(t)))),
									t
								);
							})(n, i)),
							s,
							f
						);
			}
			function jp(t, n, i, s, c) {
				let u = null;
				const f = i.directiveEnd;
				let b = i.directiveStylingLast;
				for (
					-1 === b ? (b = i.directiveStart) : b++;
					b < f && ((u = n[b]), (s = Nl(s, u.hostAttrs, c)), u !== t);

				)
					b++;
				return null !== t && (i.directiveStylingLast = b), s;
			}
			function Nl(t, n, i) {
				const s = i ? 1 : 2;
				let c = -1;
				if (null !== n)
					for (let u = 0; u < n.length; u++) {
						const f = n[u];
						'number' == typeof f
							? (c = f)
							: c === s &&
							  (Array.isArray(t) || (t = void 0 === t ? [] : ['', t]), Vr(t, f, !!i || n[++u]));
					}
				return void 0 === t ? null : t;
			}
			function g_(t, n, i, s, c, u) {
				const f = null === n;
				let b;
				for (; c > 0; ) {
					const E = t[c],
						L = Array.isArray(E),
						j = L ? E[1] : E,
						ne = null === j;
					let Ae = i[c + 1];
					Ae === Rn && (Ae = ne ? Pt : void 0);
					let Ze = ne ? Qs(Ae, s) : j === s ? Ae : void 0;
					if ((L && !Wd(Ze) && (Ze = Qs(E, s)), Wd(Ze) && ((b = Ze), f))) return b;
					const ht = t[c + 1];
					c = f ? Cs(ht) : Bs(ht);
				}
				if (null !== n) {
					let E = u ? n.residualClasses : n.residualStyles;
					null != E && (b = Qs(E, s));
				}
				return b;
			}
			function Wd(t) {
				return void 0 !== t;
			}
			function v_(t, n = '') {
				const i = Dt(),
					s = N(),
					c = t + 20,
					u = s.firstCreatePass ? Uo(s, c, 1, n, null) : s.data[c],
					f = (i[c] = (function Rc(t, n) {
						return In(t) ? t.createText(n) : t.createTextNode(n);
					})(i[11], n));
				ba(s, i, f, u), Z(u, !1);
			}
			function Up(t) {
				return Kd('', t, ''), Up;
			}
			function Kd(t, n, i) {
				const s = Dt(),
					c = Wo(s, t, n, i);
				return c !== Rn && js(s, ln(), c), Kd;
			}
			function zp(t, n, i, s, c) {
				const u = Dt(),
					f = lo(u, t, n, i, s, c);
				return f !== Rn && js(u, ln(), f), zp;
			}
			function Gp(t, n, i) {
				const s = Dt();
				return yr(s, fn(), n) && qr(N(), Vn(), s, t, n, s[11], i, !0), Gp;
			}
			function $p(t, n, i) {
				const s = Dt();
				if (yr(s, fn(), n)) {
					const u = N(),
						f = Vn();
					qr(u, f, s, t, n, jh(ki(u.data), f, s), i, !0);
				}
				return $p;
			}
			const ea = void 0;
			var e0 = [
				'en',
				[['a', 'p'], ['AM', 'PM'], ea],
				[['AM', 'PM'], ea, ea],
				[
					['S', 'M', 'T', 'W', 'T', 'F', 'S'],
					['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
					['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
					['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
				],
				ea,
				[
					['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
					['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					[
						'January',
						'February',
						'March',
						'April',
						'May',
						'June',
						'July',
						'August',
						'September',
						'October',
						'November',
						'December',
					],
				],
				ea,
				[
					['B', 'A'],
					['BC', 'AD'],
					['Before Christ', 'Anno Domini'],
				],
				0,
				[6, 0],
				['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
				['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
				['{1}, {0}', ea, "{1} 'at' {0}", ea],
				['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
				['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
				'USD',
				'$',
				'US Dollar',
				{},
				'ltr',
				function Jb(t) {
					const i = Math.floor(Math.abs(t)),
						s = t.toString().replace(/^[^.]*\.?/, '').length;
					return 1 === i && 0 === s ? 1 : 5;
				},
			];
			let Ba = {};
			function Yp(t) {
				const n = (function t0(t) {
					return t.toLowerCase().replace(/_/g, '-');
				})(t);
				let i = L_(n);
				if (i) return i;
				const s = n.split('-')[0];
				if (((i = L_(s)), i)) return i;
				if ('en' === s) return e0;
				throw new Error(`Missing locale data for the locale "${t}".`);
			}
			function F_(t) {
				return Yp(t)[Mn.PluralCase];
			}
			function L_(t) {
				return (
					t in Ba || (Ba[t] = mn.ng && mn.ng.common && mn.ng.common.locales && mn.ng.common.locales[t]), Ba[t]
				);
			}
			var Mn = (() => (
				((Mn = Mn || {})[(Mn.LocaleId = 0)] = 'LocaleId'),
				(Mn[(Mn.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
				(Mn[(Mn.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
				(Mn[(Mn.DaysFormat = 3)] = 'DaysFormat'),
				(Mn[(Mn.DaysStandalone = 4)] = 'DaysStandalone'),
				(Mn[(Mn.MonthsFormat = 5)] = 'MonthsFormat'),
				(Mn[(Mn.MonthsStandalone = 6)] = 'MonthsStandalone'),
				(Mn[(Mn.Eras = 7)] = 'Eras'),
				(Mn[(Mn.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
				(Mn[(Mn.WeekendRange = 9)] = 'WeekendRange'),
				(Mn[(Mn.DateFormat = 10)] = 'DateFormat'),
				(Mn[(Mn.TimeFormat = 11)] = 'TimeFormat'),
				(Mn[(Mn.DateTimeFormat = 12)] = 'DateTimeFormat'),
				(Mn[(Mn.NumberSymbols = 13)] = 'NumberSymbols'),
				(Mn[(Mn.NumberFormats = 14)] = 'NumberFormats'),
				(Mn[(Mn.CurrencyCode = 15)] = 'CurrencyCode'),
				(Mn[(Mn.CurrencySymbol = 16)] = 'CurrencySymbol'),
				(Mn[(Mn.CurrencyName = 17)] = 'CurrencyName'),
				(Mn[(Mn.Currencies = 18)] = 'Currencies'),
				(Mn[(Mn.Directionality = 19)] = 'Directionality'),
				(Mn[(Mn.PluralCase = 20)] = 'PluralCase'),
				(Mn[(Mn.ExtraData = 21)] = 'ExtraData'),
				Mn
			))();
			const Zd = 'en-US';
			let N_ = Zd;
			function Zp(t, n, i, s, c) {
				if (((t = q(t)), Array.isArray(t))) for (let u = 0; u < t.length; u++) Zp(t[u], n, i, s, c);
				else {
					const u = N(),
						f = Dt();
					let b = so(t) ? t : q(t.provide),
						E = Cd(t);
					const L = p(),
						j = 1048575 & L.providerIndexes,
						ne = L.directiveStart,
						Ae = L.providerIndexes >> 20;
					if (so(t) || !t.multi) {
						const Ze = new xs(E, c, Pa),
							ht = Qp(b, n, c ? j : j + Ae, ne);
						-1 === ht
							? ($(y(L, f), u, b),
							  qp(u, t, n.length),
							  n.push(b),
							  L.directiveStart++,
							  L.directiveEnd++,
							  c && (L.providerIndexes += 1048576),
							  i.push(Ze),
							  f.push(Ze))
							: ((i[ht] = Ze), (f[ht] = Ze));
					} else {
						const Ze = Qp(b, n, j + Ae, ne),
							ht = Qp(b, n, j, j + Ae),
							kt = Ze >= 0 && i[Ze],
							Nt = ht >= 0 && i[ht];
						if ((c && !Nt) || (!c && !kt)) {
							$(y(L, f), u, b);
							const Jt = (function eC(t, n, i, s, c) {
								const u = new xs(t, i, Pa);
								return (u.multi = []), (u.index = n), (u.componentProviders = 0), av(u, c, s && !i), u;
							})(c ? J0 : X0, i.length, c, s, E);
							!c && Nt && (i[ht].providerFactory = Jt),
								qp(u, t, n.length, 0),
								n.push(b),
								L.directiveStart++,
								L.directiveEnd++,
								c && (L.providerIndexes += 1048576),
								i.push(Jt),
								f.push(Jt);
						} else qp(u, t, Ze > -1 ? Ze : ht, av(i[c ? ht : Ze], E, !c && s));
						!c && s && Nt && i[ht].componentProviders++;
					}
				}
			}
			function qp(t, n, i, s) {
				const c = so(n),
					u = (function El(t) {
						return !!t.useClass;
					})(n);
				if (c || u) {
					const E = (u ? q(n.useClass) : n).prototype.ngOnDestroy;
					if (E) {
						const L = t.destroyHooks || (t.destroyHooks = []);
						if (!c && n.multi) {
							const j = L.indexOf(i);
							-1 === j ? L.push(i, [s, E]) : L[j + 1].push(s, E);
						} else L.push(i, E);
					}
				}
			}
			function av(t, n, i) {
				return i && t.componentProviders++, t.multi.push(n) - 1;
			}
			function Qp(t, n, i, s) {
				for (let c = i; c < s; c++) if (n[c] === t) return c;
				return -1;
			}
			function X0(t, n, i, s) {
				return Xp(this.multi, []);
			}
			function J0(t, n, i, s) {
				const c = this.multi;
				let u;
				if (this.providerFactory) {
					const f = this.providerFactory.componentProviders,
						b = os(i, i[1], this.providerFactory.index, s);
					(u = b.slice(0, f)), Xp(c, u);
					for (let E = f; E < b.length; E++) u.push(b[E]);
				} else (u = []), Xp(c, u);
				return u;
			}
			function Xp(t, n) {
				for (let i = 0; i < t.length; i++) n.push((0, t[i])());
				return n;
			}
			function lv(t, n = []) {
				return (i) => {
					i.providersResolver = (s, c) =>
						(function Q0(t, n, i) {
							const s = N();
							if (s.firstCreatePass) {
								const c = Jn(t);
								Zp(i, s.data, s.blueprint, c, !0), Zp(n, s.data, s.blueprint, c, !1);
							}
						})(s, c ? c(t) : t, n);
				};
			}
			class cv {}
			class iC {
				resolveComponentFactory(n) {
					throw (function nC(t) {
						const n = Error(
							`No component factory found for ${De(t)}. Did you add it to @NgModule.entryComponents?`
						);
						return (n.ngComponent = t), n;
					})(n);
				}
			}
			let Ul = (() => {
				class t {}
				return (t.NULL = new iC()), t;
			})();
			function rC() {
				return Ha(p(), Dt());
			}
			function Ha(t, n) {
				return new zl(Y(t, n));
			}
			let zl = (() => {
				class t {
					constructor(i) {
						this.nativeElement = i;
					}
				}
				return (t.__NG_ELEMENT_ID__ = rC), t;
			})();
			function sC(t) {
				return t instanceof zl ? t.nativeElement : t;
			}
			class uv {}
			let oC = (() => {
					class t {}
					return (
						(t.__NG_ELEMENT_ID__ = () =>
							(function lC() {
								const t = Dt(),
									i = Lt(p().index, t);
								return (function aC(t) {
									return t[11];
								})(ai(i) ? i : t);
							})()),
						t
					);
				})(),
				cC = (() => {
					class t {}
					return (
						(t.ɵprov = Wt({
							token: t,
							providedIn: 'root',
							factory: () => null,
						})),
						t
					);
				})();
			class hv {
				constructor(n) {
					(this.full = n),
						(this.major = n.split('.')[0]),
						(this.minor = n.split('.')[1]),
						(this.patch = n.split('.').slice(2).join('.'));
				}
			}
			const dC = new hv('13.1.2'),
				Jp = {};
			function eu(t, n, i, s, c = !1) {
				for (; null !== i; ) {
					const u = n[i.index];
					if ((null !== u && s.push(Qn(u)), wi(u)))
						for (let b = 10; b < u.length; b++) {
							const E = u[b],
								L = E[1].firstChild;
							null !== L && eu(E[1], E, L, s);
						}
					const f = i.type;
					if (8 & f) eu(t, n, i.child, s);
					else if (32 & f) {
						const b = ll(i, n);
						let E;
						for (; (E = b()); ) s.push(E);
					} else if (16 & f) {
						const b = nh(n, i);
						if (Array.isArray(b)) s.push(...b);
						else {
							const E = va(n[16]);
							eu(E[1], E, b, s, !0);
						}
					}
					i = c ? i.projectionNext : i.next;
				}
				return s;
			}
			class Gl {
				constructor(n, i) {
					(this._lView = n),
						(this._cdRefInjectingView = i),
						(this._appRef = null),
						(this._attachedToViewContainer = !1);
				}
				get rootNodes() {
					const n = this._lView,
						i = n[1];
					return eu(i, n, i.firstChild, []);
				}
				get context() {
					return this._lView[8];
				}
				set context(n) {
					this._lView[8] = n;
				}
				get destroyed() {
					return 256 == (256 & this._lView[2]);
				}
				destroy() {
					if (this._appRef) this._appRef.detachView(this);
					else if (this._attachedToViewContainer) {
						const n = this._lView[3];
						if (wi(n)) {
							const i = n[8],
								s = i ? i.indexOf(this) : -1;
							s > -1 && (Pc(n, s), ra(i, s));
						}
						this._attachedToViewContainer = !1;
					}
					Fc(this._lView[1], this._lView);
				}
				onDestroy(n) {
					Eh(this._lView[1], this._lView, null, n);
				}
				markForCheck() {
					yl(this._cdRefInjectingView || this._lView);
				}
				detach() {
					this._lView[2] &= -129;
				}
				reattach() {
					this._lView[2] |= 128;
				}
				detectChanges() {
					Cl(this._lView[1], this._lView, this.context);
				}
				checkNoChanges() {
					!(function kg(t, n, i) {
						Ut(!0);
						try {
							Cl(t, n, i);
						} finally {
							Ut(!1);
						}
					})(this._lView[1], this._lView, this.context);
				}
				attachToViewContainerRef() {
					if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
					this._attachedToViewContainer = !0;
				}
				detachFromAppRef() {
					(this._appRef = null),
						(function Gm(t, n) {
							wa(t, n, n[11], 2, null, null);
						})(this._lView[1], this._lView);
				}
				attachToAppRef(n) {
					if (this._attachedToViewContainer)
						throw new Error('This view is already attached to a ViewContainer!');
					this._appRef = n;
				}
			}
			class uC extends Gl {
				constructor(n) {
					super(n), (this._view = n);
				}
				detectChanges() {
					wl(this._view);
				}
				checkNoChanges() {
					!(function Ig(t) {
						Ut(!0);
						try {
							wl(t);
						} finally {
							Ut(!1);
						}
					})(this._view);
				}
				get context() {
					return null;
				}
			}
			class pv extends Ul {
				constructor(n) {
					super(), (this.ngModule = n);
				}
				resolveComponentFactory(n) {
					const i = Le(n);
					return new ef(i, this.ngModule);
				}
			}
			function fv(t) {
				const n = [];
				for (let i in t) t.hasOwnProperty(i) && n.push({ propName: t[i], templateName: i });
				return n;
			}
			const pC = new Ei('SCHEDULER_TOKEN', {
				providedIn: 'root',
				factory: () => Sc,
			});
			class ef extends cv {
				constructor(n, i) {
					super(),
						(this.componentDef = n),
						(this.ngModule = i),
						(this.componentType = n.type),
						(this.selector = (function sg(t) {
							return t.map(rg).join(',');
						})(n.selectors)),
						(this.ngContentSelectors = n.ngContentSelectors ? n.ngContentSelectors : []),
						(this.isBoundToModule = !!i);
				}
				get inputs() {
					return fv(this.componentDef.inputs);
				}
				get outputs() {
					return fv(this.componentDef.outputs);
				}
				create(n, i, s, c) {
					const u = (c = c || this.ngModule)
							? (function fC(t, n) {
									return {
										get: (i, s, c) => {
											const u = t.get(i, Jp, c);
											return u !== Jp || s === Jp ? u : n.get(i, s, c);
										},
									};
							  })(n, c.injector)
							: n,
						f = u.get(uv, hi),
						b = u.get(cC, null),
						E = f.createRenderer(null, this.componentDef),
						L = this.componentDef.selectors[0][0] || 'div',
						j = s
							? (function xh(t, n, i) {
									if (In(t)) return t.selectRootElement(n, i === _t.ShadowDom);
									let s = 'string' == typeof n ? t.querySelector(n) : n;
									return (s.textContent = ''), s;
							  })(E, s, this.componentDef.encapsulation)
							: Oc(
									f.createRenderer(null, this.componentDef),
									L,
									(function hC(t) {
										const n = t.toLowerCase();
										return 'svg' === n
											? rr
											: 'math' === n
											? 'http://www.w3.org/1998/MathML/'
											: null;
									})(L)
							  ),
						ne = this.componentDef.onPush ? 576 : 528,
						Ae = (function ip(t, n) {
							return {
								components: [],
								scheduler: t || Sc,
								clean: Rg,
								playerHandler: n || null,
								flags: 0,
							};
						})(),
						Ze = bo(0, null, null, 1, 0, null, null, null, null, null),
						ht = jo(null, Ze, Ae, ne, null, null, f, E, b, u);
					let kt, Nt;
					ps(ht);
					try {
						const Jt = (function Od(t, n, i, s, c, u) {
							const f = i[1];
							i[20] = t;
							const E = Uo(f, 20, 2, '#host', null),
								L = (E.mergedAttrs = n.hostAttrs);
							null !== L &&
								(Dl(E, L, !0),
								null !== t &&
									(M(c, t, L),
									null !== E.classes && ul(c, t, E.classes),
									null !== E.styles && sh(c, t, E.styles)));
							const j = s.createRenderer(t, n),
								ne = jo(i, Dh(n), null, n.onPush ? 64 : 16, i[20], E, s, j, u || null, null);
							return (
								f.firstCreatePass && ($(y(E, i), f, n.type), dd(f, E), ud(E, i.length, 1)),
								Ta(i, ne),
								(i[20] = ne)
							);
						})(j, this.componentDef, ht, f, E);
						if (j)
							if (s) M(E, j, ['ng-version', dC.full]);
							else {
								const { attrs: wt, classes: yn } = (function og(t) {
									const n = [],
										i = [];
									let s = 1,
										c = 2;
									for (; s < t.length; ) {
										let u = t[s];
										if ('string' == typeof u)
											2 === c ? '' !== u && n.push(u, t[++s]) : 8 === c && i.push(u);
										else {
											if (!bs(c)) break;
											c = u;
										}
										s++;
									}
									return { attrs: n, classes: i };
								})(this.componentDef.selectors[0]);
								wt && M(E, j, wt), yn && yn.length > 0 && ul(E, j, yn.join(' '));
							}
						if (((Nt = st(Ze, 20)), void 0 !== i)) {
							const wt = (Nt.projection = []);
							for (let yn = 0; yn < this.ngContentSelectors.length; yn++) {
								const jn = i[yn];
								wt.push(null != jn ? Array.from(jn) : null);
							}
						}
						(kt = (function Pd(t, n, i, s, c) {
							const u = i[1],
								f = (function Eg(t, n, i) {
									const s = p();
									t.firstCreatePass &&
										(i.providersResolver && i.providersResolver(i),
										hd(t, s, n, zo(t, n, 1, null), i));
									const c = os(n, t, s.directiveStart, s);
									Sr(c, n);
									const u = Y(s, n);
									return u && Sr(u, n), c;
								})(u, i, n);
							if ((s.components.push(f), (t[8] = f), c && c.forEach((E) => E(f, n)), n.contentQueries)) {
								const E = p();
								n.contentQueries(1, f, E.directiveStart);
							}
							const b = p();
							return (
								!u.firstCreatePass ||
									(null === n.hostBindings && null === n.hostAttrs) ||
									(Zn(b.index), cd(i[1], b, 0, b.directiveStart, b.directiveEnd, n), kh(n, f)),
								f
							);
						})(Jt, this.componentDef, ht, Ae, [Bg])),
							Ma(Ze, ht, null);
					} finally {
						jt();
					}
					return new gC(this.componentType, kt, Ha(Nt, ht), ht, Nt);
				}
			}
			class gC extends class tC {} {
				constructor(n, i, s, c, u) {
					super(),
						(this.location = s),
						(this._rootLView = c),
						(this._tNode = u),
						(this.instance = i),
						(this.hostView = this.changeDetectorRef = new uC(c)),
						(this.componentType = n);
				}
				get injector() {
					return new as(this._tNode, this._rootLView);
				}
				destroy() {
					this.hostView.destroy();
				}
				onDestroy(n) {
					this.hostView.onDestroy(n);
				}
			}
			class ja {}
			class mv {}
			const Ua = new Map();
			class vv extends ja {
				constructor(n, i) {
					super(),
						(this._parent = i),
						(this._bootstrapComponents = []),
						(this.injector = this),
						(this.destroyCbs = []),
						(this.componentFactoryResolver = new pv(this));
					const s = tn(n);
					(this._bootstrapComponents = vs(s.bootstrap)),
						(this._r3Injector = Hr(
							n,
							i,
							[
								{ provide: ja, useValue: this },
								{
									provide: Ul,
									useValue: this.componentFactoryResolver,
								},
							],
							De(n)
						)),
						this._r3Injector._resolveInjectorDefTypes(),
						(this.instance = this.get(n));
				}
				get(n, i = Qr.THROW_IF_NOT_FOUND, s = F.Default) {
					return n === Qr || n === ja || n === _d ? this : this._r3Injector.get(n, i, s);
				}
				destroy() {
					const n = this._r3Injector;
					!n.destroyed && n.destroy(), this.destroyCbs.forEach((i) => i()), (this.destroyCbs = null);
				}
				onDestroy(n) {
					this.destroyCbs.push(n);
				}
			}
			class tf extends mv {
				constructor(n) {
					super(),
						(this.moduleType = n),
						null !== tn(n) &&
							(function vC(t) {
								const n = new Set();
								!(function i(s) {
									const c = tn(s, !0),
										u = c.id;
									null !== u &&
										((function gv(t, n, i) {
											if (n && n !== i)
												throw new Error(
													`Duplicate module registered for ${t} - ${De(n)} vs ${De(n.name)}`
												);
										})(u, Ua.get(u), s),
										Ua.set(u, s));
									const f = vs(c.imports);
									for (const b of f) n.has(b) || (n.add(b), i(b));
								})(t);
							})(n);
				}
				create(n) {
					return new vv(this.moduleType, n);
				}
			}
			function yv(t, n, i, s) {
				return bv(Dt(), nn(), t, n, i, s);
			}
			function $l(t, n) {
				const i = t[n];
				return i === Rn ? void 0 : i;
			}
			function bv(t, n, i, s, c, u) {
				const f = n + i;
				return yr(t, f, c) ? Ds(t, f + 1, u ? s.call(u, c) : s(c)) : $l(t, f + 1);
			}
			function xv(t, n) {
				const i = N();
				let s;
				const c = t + 20;
				i.firstCreatePass
					? ((s = (function TC(t, n) {
							if (n)
								for (let i = n.length - 1; i >= 0; i--) {
									const s = n[i];
									if (t === s.name) return s;
								}
					  })(n, i.pipeRegistry)),
					  (i.data[c] = s),
					  s.onDestroy && (i.destroyHooks || (i.destroyHooks = [])).push(c, s.onDestroy))
					: (s = i.data[c]);
				const u = s.factory || (s.factory = Si(s.type)),
					f = fe(Pa);
				try {
					const b = To(!1),
						E = u();
					return (
						To(b),
						(function Dp(t, n, i, s) {
							i >= t.data.length && ((t.data[i] = null), (t.blueprint[i] = null)), (n[i] = s);
						})(i, Dt(), c, E),
						E
					);
				} finally {
					fe(f);
				}
			}
			function Ev(t, n, i) {
				const s = t + 20,
					c = Dt(),
					u = pe(c, s);
				return Yl(c, s) ? bv(c, nn(), n, u.transform, i, u) : u.transform(i);
			}
			function Sv(t, n, i, s) {
				const c = t + 20,
					u = Dt(),
					f = pe(u, c);
				return Yl(u, c)
					? (function Cv(t, n, i, s, c, u, f) {
							const b = n + i;
							return ao(t, b, c, u) ? Ds(t, b + 2, f ? s.call(f, c, u) : s(c, u)) : $l(t, b + 2);
					  })(u, nn(), n, f.transform, i, s, f)
					: f.transform(i, s);
			}
			function Yl(t, n) {
				return t[1].data[n].pure;
			}
			function nf(t) {
				return (n) => {
					setTimeout(t, void 0, n);
				};
			}
			const Ys = class RC extends m.x {
				constructor(n = !1) {
					super(), (this.__isAsync = n);
				}
				emit(n) {
					super.next(n);
				}
				subscribe(n, i, s) {
					var c, u, f;
					let b = n,
						E = i || (() => null),
						L = s;
					if (n && 'object' == typeof n) {
						const ne = n;
						(b = null === (c = ne.next) || void 0 === c ? void 0 : c.bind(ne)),
							(E = null === (u = ne.error) || void 0 === u ? void 0 : u.bind(ne)),
							(L = null === (f = ne.complete) || void 0 === f ? void 0 : f.bind(ne));
					}
					this.__isAsync && ((E = nf(E)), b && (b = nf(b)), L && (L = nf(L)));
					const j = super.subscribe({
						next: b,
						error: E,
						complete: L,
					});
					return n instanceof P.w0 && n.add(j), j;
				}
			};
			function OC() {
				return this._results[oo()]();
			}
			class tu {
				constructor(n = !1) {
					(this._emitDistinctChangesOnly = n),
						(this.dirty = !0),
						(this._results = []),
						(this._changesDetected = !1),
						(this._changes = null),
						(this.length = 0),
						(this.first = void 0),
						(this.last = void 0);
					const i = oo(),
						s = tu.prototype;
					s[i] || (s[i] = OC);
				}
				get changes() {
					return this._changes || (this._changes = new Ys());
				}
				get(n) {
					return this._results[n];
				}
				map(n) {
					return this._results.map(n);
				}
				filter(n) {
					return this._results.filter(n);
				}
				find(n) {
					return this._results.find(n);
				}
				reduce(n, i) {
					return this._results.reduce(n, i);
				}
				forEach(n) {
					this._results.forEach(n);
				}
				some(n) {
					return this._results.some(n);
				}
				toArray() {
					return this._results.slice();
				}
				toString() {
					return this._results.toString();
				}
				reset(n, i) {
					const s = this;
					s.dirty = !1;
					const c = ls(n);
					(this._changesDetected = !(function hu(t, n, i) {
						if (t.length !== n.length) return !1;
						for (let s = 0; s < t.length; s++) {
							let c = t[s],
								u = n[s];
							if ((i && ((c = i(c)), (u = i(u))), u !== c)) return !1;
						}
						return !0;
					})(s._results, c, i)) &&
						((s._results = c), (s.length = c.length), (s.last = c[this.length - 1]), (s.first = c[0]));
				}
				notifyOnChanges() {
					this._changes &&
						(this._changesDetected || !this._emitDistinctChangesOnly) &&
						this._changes.emit(this);
				}
				setDirty() {
					this.dirty = !0;
				}
				destroy() {
					this.changes.complete(), this.changes.unsubscribe();
				}
			}
			Symbol;
			let Wl = (() => {
				class t {}
				return (t.__NG_ELEMENT_ID__ = LC), t;
			})();
			const PC = Wl,
				FC = class extends PC {
					constructor(n, i, s) {
						super(), (this._declarationLView = n), (this._declarationTContainer = i), (this.elementRef = s);
					}
					createEmbeddedView(n) {
						const i = this._declarationTContainer.tViews,
							s = jo(this._declarationLView, i, n, 16, null, i.declTNode, null, null, null, null);
						s[17] = this._declarationLView[this._declarationTContainer.index];
						const u = this._declarationLView[19];
						return null !== u && (s[19] = u.createEmbeddedView(i)), Ma(i, s, n), new Gl(s);
					}
				};
			function LC() {
				return nu(p(), Dt());
			}
			function nu(t, n) {
				return 4 & t.type ? new FC(n, t, Ha(t, n)) : null;
			}
			let iu = (() => {
				class t {}
				return (t.__NG_ELEMENT_ID__ = NC), t;
			})();
			function NC() {
				return kv(p(), Dt());
			}
			const BC = iu,
				Tv = class extends BC {
					constructor(n, i, s) {
						super(), (this._lContainer = n), (this._hostTNode = i), (this._hostLView = s);
					}
					get element() {
						return Ha(this._hostTNode, this._hostLView);
					}
					get injector() {
						return new as(this._hostTNode, this._hostLView);
					}
					get parentInjector() {
						const n = O(this._hostTNode, this._hostLView);
						if (xi(n)) {
							const i = Or(n, this._hostLView),
								s = Oi(n);
							return new as(i[1].data[s + 8], i);
						}
						return new as(null, this._hostLView);
					}
					clear() {
						for (; this.length > 0; ) this.remove(this.length - 1);
					}
					get(n) {
						const i = Av(this._lContainer);
						return (null !== i && i[n]) || null;
					}
					get length() {
						return this._lContainer.length - 10;
					}
					createEmbeddedView(n, i, s) {
						const c = n.createEmbeddedView(i || {});
						return this.insert(c, s), c;
					}
					createComponent(n, i, s, c, u) {
						const f =
							n &&
							!(function Io(t) {
								return 'function' == typeof t;
							})(n);
						let b;
						if (f) b = i;
						else {
							const ne = i || {};
							(b = ne.index), (s = ne.injector), (c = ne.projectableNodes), (u = ne.ngModuleRef);
						}
						const E = f ? n : new ef(Le(n)),
							L = s || this.parentInjector;
						if (!u && null == E.ngModule && L) {
							const ne = L.get(ja, null);
							ne && (u = ne);
						}
						const j = E.create(L, c, void 0, u);
						return this.insert(j.hostView, b), j;
					}
					insert(n, i) {
						const s = n._lView,
							c = s[1];
						if (
							(function Gt(t) {
								return wi(t[3]);
							})(s)
						) {
							const j = this.indexOf(n);
							if (-1 !== j) this.detach(j);
							else {
								const ne = s[3],
									Ae = new Tv(ne, ne[6], ne[3]);
								Ae.detach(Ae.indexOf(n));
							}
						}
						const u = this._adjustIndex(i),
							f = this._lContainer;
						!(function Ym(t, n, i, s) {
							const c = 10 + s,
								u = i.length;
							s > 0 && (i[c - 1][4] = n),
								s < u - 10 ? ((n[4] = i[c]), ec(i, 10 + s, n)) : (i.push(n), (n[4] = null)),
								(n[3] = i);
							const f = n[17];
							null !== f &&
								i !== f &&
								(function Wm(t, n) {
									const i = t[9];
									n[16] !== n[3][3][16] && (t[2] = !0), null === i ? (t[9] = [n]) : i.push(n);
								})(f, n);
							const b = n[19];
							null !== b && b.insertView(t), (n[2] |= 128);
						})(c, s, f, u);
						const b = Hc(u, f),
							E = s[11],
							L = cl(E, f[7]);
						return (
							null !== L &&
								(function Ku(t, n, i, s, c, u) {
									(s[0] = c), (s[6] = n), wa(t, s, i, 1, c, u);
								})(c, f[6], E, s, L, b),
							n.attachToViewContainerRef(),
							ec(rf(f), u, n),
							n
						);
					}
					move(n, i) {
						return this.insert(n, i);
					}
					indexOf(n) {
						const i = Av(this._lContainer);
						return null !== i ? i.indexOf(n) : -1;
					}
					remove(n) {
						const i = this._adjustIndex(n, -1),
							s = Pc(this._lContainer, i);
						s && (ra(rf(this._lContainer), i), Fc(s[1], s));
					}
					detach(n) {
						const i = this._adjustIndex(n, -1),
							s = Pc(this._lContainer, i);
						return s && null != ra(rf(this._lContainer), i) ? new Gl(s) : null;
					}
					_adjustIndex(n, i = 0) {
						return null == n ? this.length + i : n;
					}
				};
			function Av(t) {
				return t[8];
			}
			function rf(t) {
				return t[8] || (t[8] = []);
			}
			function kv(t, n) {
				let i;
				const s = n[t.index];
				if (wi(s)) i = s;
				else {
					let c;
					if (8 & t.type) c = Qn(s);
					else {
						const u = n[11];
						c = u.createComment('');
						const f = Y(t, n);
						Ns(
							u,
							cl(u, f),
							c,
							(function Ju(t, n) {
								return In(t) ? t.nextSibling(n) : n.nextSibling;
							})(u, f),
							!1
						);
					}
					(n[t.index] = i = pd(s, n, c, t)), Ta(n, i);
				}
				return new Tv(i, t, n);
			}
			class sf {
				constructor(n) {
					(this.queryList = n), (this.matches = null);
				}
				clone() {
					return new sf(this.queryList);
				}
				setDirty() {
					this.queryList.setDirty();
				}
			}
			class af {
				constructor(n = []) {
					this.queries = n;
				}
				createEmbeddedView(n) {
					const i = n.queries;
					if (null !== i) {
						const s = null !== n.contentQueries ? n.contentQueries[0] : i.length,
							c = [];
						for (let u = 0; u < s; u++) {
							const f = i.getByIndex(u);
							c.push(this.queries[f.indexInDeclarationView].clone());
						}
						return new af(c);
					}
					return null;
				}
				insertView(n) {
					this.dirtyQueriesWithMatches(n);
				}
				detachView(n) {
					this.dirtyQueriesWithMatches(n);
				}
				dirtyQueriesWithMatches(n) {
					for (let i = 0; i < this.queries.length; i++)
						null !== Vv(n, i).matches && this.queries[i].setDirty();
				}
			}
			class Iv {
				constructor(n, i, s = null) {
					(this.predicate = n), (this.flags = i), (this.read = s);
				}
			}
			class lf {
				constructor(n = []) {
					this.queries = n;
				}
				elementStart(n, i) {
					for (let s = 0; s < this.queries.length; s++) this.queries[s].elementStart(n, i);
				}
				elementEnd(n) {
					for (let i = 0; i < this.queries.length; i++) this.queries[i].elementEnd(n);
				}
				embeddedTView(n) {
					let i = null;
					for (let s = 0; s < this.length; s++) {
						const c = null !== i ? i.length : 0,
							u = this.getByIndex(s).embeddedTView(n, c);
						u && ((u.indexInDeclarationView = s), null !== i ? i.push(u) : (i = [u]));
					}
					return null !== i ? new lf(i) : null;
				}
				template(n, i) {
					for (let s = 0; s < this.queries.length; s++) this.queries[s].template(n, i);
				}
				getByIndex(n) {
					return this.queries[n];
				}
				get length() {
					return this.queries.length;
				}
				track(n) {
					this.queries.push(n);
				}
			}
			class cf {
				constructor(n, i = -1) {
					(this.metadata = n),
						(this.matches = null),
						(this.indexInDeclarationView = -1),
						(this.crossesNgTemplate = !1),
						(this._appliesToNextNode = !0),
						(this._declarationNodeIndex = i);
				}
				elementStart(n, i) {
					this.isApplyingToNode(i) && this.matchTNode(n, i);
				}
				elementEnd(n) {
					this._declarationNodeIndex === n.index && (this._appliesToNextNode = !1);
				}
				template(n, i) {
					this.elementStart(n, i);
				}
				embeddedTView(n, i) {
					return this.isApplyingToNode(n)
						? ((this.crossesNgTemplate = !0), this.addMatch(-n.index, i), new cf(this.metadata))
						: null;
				}
				isApplyingToNode(n) {
					if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
						const i = this._declarationNodeIndex;
						let s = n.parent;
						for (; null !== s && 8 & s.type && s.index !== i; ) s = s.parent;
						return i === (null !== s ? s.index : -1);
					}
					return this._appliesToNextNode;
				}
				matchTNode(n, i) {
					const s = this.metadata.predicate;
					if (Array.isArray(s))
						for (let c = 0; c < s.length; c++) {
							const u = s[c];
							this.matchTNodeWithReadOption(n, i, jC(i, u)),
								this.matchTNodeWithReadOption(n, i, $n(i, n, u, !1, !1));
						}
					else
						s === Wl
							? 4 & i.type && this.matchTNodeWithReadOption(n, i, -1)
							: this.matchTNodeWithReadOption(n, i, $n(i, n, s, !1, !1));
				}
				matchTNodeWithReadOption(n, i, s) {
					if (null !== s) {
						const c = this.metadata.read;
						if (null !== c)
							if (c === zl || c === iu || (c === Wl && 4 & i.type)) this.addMatch(i.index, -2);
							else {
								const u = $n(i, n, c, !1, !1);
								null !== u && this.addMatch(i.index, u);
							}
						else this.addMatch(i.index, s);
					}
				}
				addMatch(n, i) {
					null === this.matches ? (this.matches = [n, i]) : this.matches.push(n, i);
				}
			}
			function jC(t, n) {
				const i = t.localNames;
				if (null !== i) for (let s = 0; s < i.length; s += 2) if (i[s] === n) return i[s + 1];
				return null;
			}
			function zC(t, n, i, s) {
				return -1 === i
					? (function UC(t, n) {
							return 11 & t.type ? Ha(t, n) : 4 & t.type ? nu(t, n) : null;
					  })(n, t)
					: -2 === i
					? (function GC(t, n, i) {
							return i === zl ? Ha(n, t) : i === Wl ? nu(n, t) : i === iu ? kv(n, t) : void 0;
					  })(t, n, s)
					: os(t, t[1], i, n);
			}
			function Rv(t, n, i, s) {
				const c = n[19].queries[s];
				if (null === c.matches) {
					const u = t.data,
						f = i.matches,
						b = [];
					for (let E = 0; E < f.length; E += 2) {
						const L = f[E];
						b.push(L < 0 ? null : zC(n, u[L], f[E + 1], i.metadata.read));
					}
					c.matches = b;
				}
				return c.matches;
			}
			function df(t, n, i, s) {
				const c = t.queries.getByIndex(i),
					u = c.matches;
				if (null !== u) {
					const f = Rv(t, n, c, i);
					for (let b = 0; b < u.length; b += 2) {
						const E = u[b];
						if (E > 0) s.push(f[b / 2]);
						else {
							const L = u[b + 1],
								j = n[-E];
							for (let ne = 10; ne < j.length; ne++) {
								const Ae = j[ne];
								Ae[17] === Ae[3] && df(Ae[1], Ae, L, s);
							}
							if (null !== j[9]) {
								const ne = j[9];
								for (let Ae = 0; Ae < ne.length; Ae++) {
									const Ze = ne[Ae];
									df(Ze[1], Ze, L, s);
								}
							}
						}
					}
				}
				return s;
			}
			function Ov(t) {
				const n = Dt(),
					i = N(),
					s = Mi();
				or(s + 1);
				const c = Vv(i, s);
				if (t.dirty && Nn(n) === (2 == (2 & c.metadata.flags))) {
					if (null === c.matches) t.reset([]);
					else {
						const u = c.crossesNgTemplate ? df(i, n, s, []) : Rv(i, n, c, s);
						t.reset(u, sC), t.notifyOnChanges();
					}
					return !0;
				}
				return !1;
			}
			function Pv(t, n, i) {
				const s = N();
				s.firstCreatePass && (Bv(s, new Iv(t, n, i), -1), 2 == (2 & n) && (s.staticViewQueries = !0)),
					Nv(s, Dt(), n);
			}
			function Fv(t, n, i, s) {
				const c = N();
				if (c.firstCreatePass) {
					const u = p();
					Bv(c, new Iv(n, i, s), u.index),
						(function YC(t, n) {
							const i = t.contentQueries || (t.contentQueries = []);
							n !== (i.length ? i[i.length - 1] : -1) && i.push(t.queries.length - 1, n);
						})(c, t),
						2 == (2 & i) && (c.staticContentQueries = !0);
				}
				Nv(c, Dt(), i);
			}
			function Lv() {
				return (function $C(t, n) {
					return t[19].queries[n].queryList;
				})(Dt(), Mi());
			}
			function Nv(t, n, i) {
				const s = new tu(4 == (4 & i));
				Eh(t, n, s, s.destroy), null === n[19] && (n[19] = new af()), n[19].queries.push(new sf(s));
			}
			function Bv(t, n, i) {
				null === t.queries && (t.queries = new lf()), t.queries.track(new cf(n, i));
			}
			function Vv(t, n) {
				return t.queries.getByIndex(n);
			}
			function ou(...t) {}
			const gf = new Ei('Application Initializer');
			let Ga = (() => {
				class t {
					constructor(i) {
						(this.appInits = i),
							(this.resolve = ou),
							(this.reject = ou),
							(this.initialized = !1),
							(this.done = !1),
							(this.donePromise = new Promise((s, c) => {
								(this.resolve = s), (this.reject = c);
							}));
					}
					runInitializers() {
						if (this.initialized) return;
						const i = [],
							s = () => {
								(this.done = !0), this.resolve();
							};
						if (this.appInits)
							for (let c = 0; c < this.appInits.length; c++) {
								const u = this.appInits[c]();
								if ($d(u)) i.push(u);
								else if (Yd(u)) {
									const f = new Promise((b, E) => {
										u.subscribe({ complete: b, error: E });
									});
									i.push(f);
								}
							}
						Promise.all(i)
							.then(() => {
								s();
							})
							.catch((c) => {
								this.reject(c);
							}),
							0 === i.length && s(),
							(this.initialized = !0);
					}
				}
				return (
					(t.ɵfac = function (i) {
						return new (i || t)(er(gf, 8));
					}),
					(t.ɵprov = Wt({ token: t, factory: t.ɵfac })),
					t
				);
			})();
			const ny = new Ei('AppId'),
				uw = {
					provide: ny,
					useFactory: function dw() {
						return `${_f()}${_f()}${_f()}`;
					},
					deps: [],
				};
			function _f() {
				return String.fromCharCode(97 + Math.floor(25 * Math.random()));
			}
			const iy = new Ei('Platform Initializer'),
				ry = new Ei('Platform ID'),
				sy = new Ei('appBootstrapListener');
			let oy = (() => {
				class t {
					log(i) {
						console.log(i);
					}
					warn(i) {
						console.warn(i);
					}
				}
				return (
					(t.ɵfac = function (i) {
						return new (i || t)();
					}),
					(t.ɵprov = Wt({ token: t, factory: t.ɵfac })),
					t
				);
			})();
			const au = new Ei('LocaleId'),
				ay = new Ei('DefaultCurrencyCode');
			class hw {
				constructor(n, i) {
					(this.ngModuleFactory = n), (this.componentFactories = i);
				}
			}
			let vf = (() => {
				class t {
					compileModuleSync(i) {
						return new tf(i);
					}
					compileModuleAsync(i) {
						return Promise.resolve(this.compileModuleSync(i));
					}
					compileModuleAndAllComponentsSync(i) {
						const s = this.compileModuleSync(i),
							u = vs(tn(i).declarations).reduce((f, b) => {
								const E = Le(b);
								return E && f.push(new ef(E)), f;
							}, []);
						return new hw(s, u);
					}
					compileModuleAndAllComponentsAsync(i) {
						return Promise.resolve(this.compileModuleAndAllComponentsSync(i));
					}
					clearCache() {}
					clearCacheFor(i) {}
					getModuleId(i) {}
				}
				return (
					(t.ɵfac = function (i) {
						return new (i || t)();
					}),
					(t.ɵprov = Wt({ token: t, factory: t.ɵfac })),
					t
				);
			})();
			const fw = (() => Promise.resolve(0))();
			function yf(t) {
				'undefined' == typeof Zone
					? fw.then(() => {
							t && t.apply(null, null);
					  })
					: Zone.current.scheduleMicroTask('scheduleMicrotask', t);
			}
			class ds {
				constructor({
					enableLongStackTrace: n = !1,
					shouldCoalesceEventChangeDetection: i = !1,
					shouldCoalesceRunChangeDetection: s = !1,
				}) {
					if (
						((this.hasPendingMacrotasks = !1),
						(this.hasPendingMicrotasks = !1),
						(this.isStable = !0),
						(this.onUnstable = new Ys(!1)),
						(this.onMicrotaskEmpty = new Ys(!1)),
						(this.onStable = new Ys(!1)),
						(this.onError = new Ys(!1)),
						'undefined' == typeof Zone)
					)
						throw new Error('In this configuration Angular requires Zone.js');
					Zone.assertZonePatched();
					const c = this;
					(c._nesting = 0),
						(c._outer = c._inner = Zone.current),
						Zone.TaskTrackingZoneSpec && (c._inner = c._inner.fork(new Zone.TaskTrackingZoneSpec())),
						n && Zone.longStackTraceZoneSpec && (c._inner = c._inner.fork(Zone.longStackTraceZoneSpec)),
						(c.shouldCoalesceEventChangeDetection = !s && i),
						(c.shouldCoalesceRunChangeDetection = s),
						(c.lastRequestAnimationFrameId = -1),
						(c.nativeRequestAnimationFrame = (function mw() {
							let t = mn.requestAnimationFrame,
								n = mn.cancelAnimationFrame;
							if ('undefined' != typeof Zone && t && n) {
								const i = t[Zone.__symbol__('OriginalDelegate')];
								i && (t = i);
								const s = n[Zone.__symbol__('OriginalDelegate')];
								s && (n = s);
							}
							return {
								nativeRequestAnimationFrame: t,
								nativeCancelAnimationFrame: n,
							};
						})().nativeRequestAnimationFrame),
						(function vw(t) {
							const n = () => {
								!(function _w(t) {
									t.isCheckStableRunning ||
										-1 !== t.lastRequestAnimationFrameId ||
										((t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(mn, () => {
											t.fakeTopEventTask ||
												(t.fakeTopEventTask = Zone.root.scheduleEventTask(
													'fakeTopEventTask',
													() => {
														(t.lastRequestAnimationFrameId = -1),
															Cf(t),
															(t.isCheckStableRunning = !0),
															bf(t),
															(t.isCheckStableRunning = !1);
													},
													void 0,
													() => {},
													() => {}
												)),
												t.fakeTopEventTask.invoke();
										})),
										Cf(t));
								})(t);
							};
							t._inner = t._inner.fork({
								name: 'angular',
								properties: { isAngularZone: !0 },
								onInvokeTask: (i, s, c, u, f, b) => {
									try {
										return ly(t), i.invokeTask(c, u, f, b);
									} finally {
										((t.shouldCoalesceEventChangeDetection && 'eventTask' === u.type) ||
											t.shouldCoalesceRunChangeDetection) &&
											n(),
											cy(t);
									}
								},
								onInvoke: (i, s, c, u, f, b, E) => {
									try {
										return ly(t), i.invoke(c, u, f, b, E);
									} finally {
										t.shouldCoalesceRunChangeDetection && n(), cy(t);
									}
								},
								onHasTask: (i, s, c, u) => {
									i.hasTask(c, u),
										s === c &&
											('microTask' == u.change
												? ((t._hasPendingMicrotasks = u.microTask), Cf(t), bf(t))
												: 'macroTask' == u.change && (t.hasPendingMacrotasks = u.macroTask));
								},
								onHandleError: (i, s, c, u) => (
									i.handleError(c, u), t.runOutsideAngular(() => t.onError.emit(u)), !1
								),
							});
						})(c);
				}
				static isInAngularZone() {
					return !0 === Zone.current.get('isAngularZone');
				}
				static assertInAngularZone() {
					if (!ds.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
				}
				static assertNotInAngularZone() {
					if (ds.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
				}
				run(n, i, s) {
					return this._inner.run(n, i, s);
				}
				runTask(n, i, s, c) {
					const u = this._inner,
						f = u.scheduleEventTask('NgZoneEvent: ' + c, n, gw, ou, ou);
					try {
						return u.runTask(f, i, s);
					} finally {
						u.cancelTask(f);
					}
				}
				runGuarded(n, i, s) {
					return this._inner.runGuarded(n, i, s);
				}
				runOutsideAngular(n) {
					return this._outer.run(n);
				}
			}
			const gw = {};
			function bf(t) {
				if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
					try {
						t._nesting++, t.onMicrotaskEmpty.emit(null);
					} finally {
						if ((t._nesting--, !t.hasPendingMicrotasks))
							try {
								t.runOutsideAngular(() => t.onStable.emit(null));
							} finally {
								t.isStable = !0;
							}
					}
			}
			function Cf(t) {
				t.hasPendingMicrotasks = !!(
					t._hasPendingMicrotasks ||
					((t.shouldCoalesceEventChangeDetection || t.shouldCoalesceRunChangeDetection) &&
						-1 !== t.lastRequestAnimationFrameId)
				);
			}
			function ly(t) {
				t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
			}
			function cy(t) {
				t._nesting--, bf(t);
			}
			class yw {
				constructor() {
					(this.hasPendingMicrotasks = !1),
						(this.hasPendingMacrotasks = !1),
						(this.isStable = !0),
						(this.onUnstable = new Ys()),
						(this.onMicrotaskEmpty = new Ys()),
						(this.onStable = new Ys()),
						(this.onError = new Ys());
				}
				run(n, i, s) {
					return n.apply(i, s);
				}
				runGuarded(n, i, s) {
					return n.apply(i, s);
				}
				runOutsideAngular(n) {
					return n();
				}
				runTask(n, i, s, c) {
					return n.apply(i, s);
				}
			}
			let dy = (() => {
					class t {
						constructor(i) {
							(this._ngZone = i),
								(this._pendingCount = 0),
								(this._isZoneStable = !0),
								(this._didWork = !1),
								(this._callbacks = []),
								(this.taskTrackingZone = null),
								this._watchAngularEvents(),
								i.run(() => {
									this.taskTrackingZone =
										'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
								});
						}
						_watchAngularEvents() {
							this._ngZone.onUnstable.subscribe({
								next: () => {
									(this._didWork = !0), (this._isZoneStable = !1);
								},
							}),
								this._ngZone.runOutsideAngular(() => {
									this._ngZone.onStable.subscribe({
										next: () => {
											ds.assertNotInAngularZone(),
												yf(() => {
													(this._isZoneStable = !0), this._runCallbacksIfReady();
												});
										},
									});
								});
						}
						increasePendingRequestCount() {
							return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
						}
						decreasePendingRequestCount() {
							if (((this._pendingCount -= 1), this._pendingCount < 0))
								throw new Error('pending async requests below zero');
							return this._runCallbacksIfReady(), this._pendingCount;
						}
						isStable() {
							return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
						}
						_runCallbacksIfReady() {
							if (this.isStable())
								yf(() => {
									for (; 0 !== this._callbacks.length; ) {
										let i = this._callbacks.pop();
										clearTimeout(i.timeoutId), i.doneCb(this._didWork);
									}
									this._didWork = !1;
								});
							else {
								let i = this.getPendingTasks();
								(this._callbacks = this._callbacks.filter(
									(s) => !s.updateCb || !s.updateCb(i) || (clearTimeout(s.timeoutId), !1)
								)),
									(this._didWork = !0);
							}
						}
						getPendingTasks() {
							return this.taskTrackingZone
								? this.taskTrackingZone.macroTasks.map((i) => ({
										source: i.source,
										creationLocation: i.creationLocation,
										data: i.data,
								  }))
								: [];
						}
						addCallback(i, s, c) {
							let u = -1;
							s &&
								s > 0 &&
								(u = setTimeout(() => {
									(this._callbacks = this._callbacks.filter((f) => f.timeoutId !== u)),
										i(this._didWork, this.getPendingTasks());
								}, s)),
								this._callbacks.push({
									doneCb: i,
									timeoutId: u,
									updateCb: c,
								});
						}
						whenStable(i, s, c) {
							if (c && !this.taskTrackingZone)
								throw new Error(
									'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
								);
							this.addCallback(i, s, c), this._runCallbacksIfReady();
						}
						getPendingRequestCount() {
							return this._pendingCount;
						}
						findProviders(i, s, c) {
							return [];
						}
					}
					return (
						(t.ɵfac = function (i) {
							return new (i || t)(er(ds));
						}),
						(t.ɵprov = Wt({ token: t, factory: t.ɵfac })),
						t
					);
				})(),
				uy = (() => {
					class t {
						constructor() {
							(this._applications = new Map()), wf.addToWindow(this);
						}
						registerApplication(i, s) {
							this._applications.set(i, s);
						}
						unregisterApplication(i) {
							this._applications.delete(i);
						}
						unregisterAllApplications() {
							this._applications.clear();
						}
						getTestability(i) {
							return this._applications.get(i) || null;
						}
						getAllTestabilities() {
							return Array.from(this._applications.values());
						}
						getAllRootElements() {
							return Array.from(this._applications.keys());
						}
						findTestabilityInTree(i, s = !0) {
							return wf.findTestabilityInTree(this, i, s);
						}
					}
					return (
						(t.ɵfac = function (i) {
							return new (i || t)();
						}),
						(t.ɵprov = Wt({ token: t, factory: t.ɵfac })),
						t
					);
				})();
			class bw {
				addToWindow(n) {}
				findTestabilityInTree(n, i, s) {
					return null;
				}
			}
			function Cw(t) {
				wf = t;
			}
			let Rs,
				wf = new bw();
			const hy = new Ei('AllowMultipleToken');
			class Mw {
				constructor(n, i) {
					(this.name = n), (this.token = i);
				}
			}
			function py(t, n, i = []) {
				const s = `Platform: ${n}`,
					c = new Ei(s);
				return (u = []) => {
					let f = fy();
					if (!f || f.injector.get(hy, !1))
						if (t) t(i.concat(u).concat({ provide: c, useValue: !0 }));
						else {
							const b = i
								.concat(u)
								.concat({ provide: c, useValue: !0 }, { provide: vd, useValue: 'platform' });
							!(function xw(t) {
								if (Rs && !Rs.destroyed && !Rs.injector.get(hy, !1)) throw new Be(400, '');
								Rs = t.get(my);
								const n = t.get(iy, null);
								n && n.forEach((i) => i());
							})(Qr.create({ providers: b, name: s }));
						}
					return (function Ew(t) {
						const n = fy();
						if (!n) throw new Be(401, '');
						return n;
					})();
				};
			}
			function fy() {
				return Rs && !Rs.destroyed ? Rs : null;
			}
			let my = (() => {
				class t {
					constructor(i) {
						(this._injector = i),
							(this._modules = []),
							(this._destroyListeners = []),
							(this._destroyed = !1);
					}
					bootstrapModuleFactory(i, s) {
						const b = (function Sw(t, n) {
								let i;
								return (
									(i =
										'noop' === t
											? new yw()
											: ('zone.js' === t ? void 0 : t) ||
											  new ds({
													enableLongStackTrace: !1,
													shouldCoalesceEventChangeDetection: !!(null == n
														? void 0
														: n.ngZoneEventCoalescing),
													shouldCoalesceRunChangeDetection: !!(null == n
														? void 0
														: n.ngZoneRunCoalescing),
											  })),
									i
								);
							})(s ? s.ngZone : void 0, {
								ngZoneEventCoalescing: (s && s.ngZoneEventCoalescing) || !1,
								ngZoneRunCoalescing: (s && s.ngZoneRunCoalescing) || !1,
							}),
							E = [{ provide: ds, useValue: b }];
						return b.run(() => {
							const L = Qr.create({
									providers: E,
									parent: this.injector,
									name: i.moduleType.name,
								}),
								j = i.create(L),
								ne = j.injector.get(_a, null);
							if (!ne) throw new Be(402, '');
							return (
								b.runOutsideAngular(() => {
									const Ae = b.onError.subscribe({
										next: (Ze) => {
											ne.handleError(Ze);
										},
									});
									j.onDestroy(() => {
										Df(this._modules, j), Ae.unsubscribe();
									});
								}),
								(function Tw(t, n, i) {
									try {
										const s = i();
										return $d(s)
											? s.catch((c) => {
													throw (n.runOutsideAngular(() => t.handleError(c)), c);
											  })
											: s;
									} catch (s) {
										throw (n.runOutsideAngular(() => t.handleError(s)), s);
									}
								})(ne, b, () => {
									const Ae = j.injector.get(Ga);
									return (
										Ae.runInitializers(),
										Ae.donePromise.then(
											() => (
												(function o0(t) {
													gt(t, 'Expected localeId to be defined'),
														'string' == typeof t &&
															(N_ = t.toLowerCase().replace(/_/g, '-'));
												})(j.injector.get(au, Zd) || Zd),
												this._moduleDoBootstrap(j),
												j
											)
										)
									);
								})
							);
						});
					}
					bootstrapModule(i, s = []) {
						const c = gy({}, s);
						return (function ww(t, n, i) {
							const s = new tf(i);
							return Promise.resolve(s);
						})(0, 0, i).then((u) => this.bootstrapModuleFactory(u, c));
					}
					_moduleDoBootstrap(i) {
						const s = i.injector.get(Zl);
						if (i._bootstrapComponents.length > 0) i._bootstrapComponents.forEach((c) => s.bootstrap(c));
						else {
							if (!i.instance.ngDoBootstrap) throw new Be(403, '');
							i.instance.ngDoBootstrap(s);
						}
						this._modules.push(i);
					}
					onDestroy(i) {
						this._destroyListeners.push(i);
					}
					get injector() {
						return this._injector;
					}
					destroy() {
						if (this._destroyed) throw new Be(404, '');
						this._modules.slice().forEach((i) => i.destroy()),
							this._destroyListeners.forEach((i) => i()),
							(this._destroyed = !0);
					}
					get destroyed() {
						return this._destroyed;
					}
				}
				return (
					(t.ɵfac = function (i) {
						return new (i || t)(er(Qr));
					}),
					(t.ɵprov = Wt({ token: t, factory: t.ɵfac })),
					t
				);
			})();
			function gy(t, n) {
				return Array.isArray(n) ? n.reduce(gy, t) : Object.assign(Object.assign({}, t), n);
			}
			let Zl = (() => {
				class t {
					constructor(i, s, c, u, f) {
						(this._zone = i),
							(this._injector = s),
							(this._exceptionHandler = c),
							(this._componentFactoryResolver = u),
							(this._initStatus = f),
							(this._bootstrapListeners = []),
							(this._views = []),
							(this._runningTick = !1),
							(this._stable = !0),
							(this.componentTypes = []),
							(this.components = []),
							(this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
								next: () => {
									this._zone.run(() => {
										this.tick();
									});
								},
							}));
						const b = new o.y((L) => {
								(this._stable =
									this._zone.isStable &&
									!this._zone.hasPendingMacrotasks &&
									!this._zone.hasPendingMicrotasks),
									this._zone.runOutsideAngular(() => {
										L.next(this._stable), L.complete();
									});
							}),
							E = new o.y((L) => {
								let j;
								this._zone.runOutsideAngular(() => {
									j = this._zone.onStable.subscribe(() => {
										ds.assertNotInAngularZone(),
											yf(() => {
												!this._stable &&
													!this._zone.hasPendingMacrotasks &&
													!this._zone.hasPendingMicrotasks &&
													((this._stable = !0), L.next(!0));
											});
									});
								});
								const ne = this._zone.onUnstable.subscribe(() => {
									ds.assertInAngularZone(),
										this._stable &&
											((this._stable = !1),
											this._zone.runOutsideAngular(() => {
												L.next(!1);
											}));
								});
								return () => {
									j.unsubscribe(), ne.unsubscribe();
								};
							});
						this.isStable = (0, G.T)(b, E.pipe((0, be.B)()));
					}
					bootstrap(i, s) {
						if (!this._initStatus.done) throw new Be(405, '');
						let c;
						(c = i instanceof cv ? i : this._componentFactoryResolver.resolveComponentFactory(i)),
							this.componentTypes.push(c.componentType);
						const u = (function Dw(t) {
								return t.isBoundToModule;
							})(c)
								? void 0
								: this._injector.get(ja),
							b = c.create(Qr.NULL, [], s || c.selector, u),
							E = b.location.nativeElement,
							L = b.injector.get(dy, null),
							j = L && b.injector.get(uy);
						return (
							L && j && j.registerApplication(E, L),
							b.onDestroy(() => {
								this.detachView(b.hostView), Df(this.components, b), j && j.unregisterApplication(E);
							}),
							this._loadComponent(b),
							b
						);
					}
					tick() {
						if (this._runningTick) throw new Be(101, '');
						try {
							this._runningTick = !0;
							for (let i of this._views) i.detectChanges();
						} catch (i) {
							this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(i));
						} finally {
							this._runningTick = !1;
						}
					}
					attachView(i) {
						const s = i;
						this._views.push(s), s.attachToAppRef(this);
					}
					detachView(i) {
						const s = i;
						Df(this._views, s), s.detachFromAppRef();
					}
					_loadComponent(i) {
						this.attachView(i.hostView),
							this.tick(),
							this.components.push(i),
							this._injector
								.get(sy, [])
								.concat(this._bootstrapListeners)
								.forEach((c) => c(i));
					}
					ngOnDestroy() {
						this._views.slice().forEach((i) => i.destroy()),
							this._onMicrotaskEmptySubscription.unsubscribe();
					}
					get viewCount() {
						return this._views.length;
					}
				}
				return (
					(t.ɵfac = function (i) {
						return new (i || t)(er(ds), er(Qr), er(_a), er(Ul), er(Ga));
					}),
					(t.ɵprov = Wt({ token: t, factory: t.ɵfac })),
					t
				);
			})();
			function Df(t, n) {
				const i = t.indexOf(n);
				i > -1 && t.splice(i, 1);
			}
			let vy = !0;
			function kw() {
				vy = !1;
			}
			let Iw = (() => {
				class t {}
				return (t.__NG_ELEMENT_ID__ = Rw), t;
			})();
			function Rw(t) {
				return (function Ow(t, n, i) {
					if (Zi(t) && !i) {
						const s = Lt(t.index, n);
						return new Gl(s, s);
					}
					return 47 & t.type ? new Gl(n[16], n) : null;
				})(p(), Dt(), 16 == (16 & t));
			}
			class xy {
				constructor() {}
				supports(n) {
					return wo(n);
				}
				create(n) {
					return new Vw(n);
				}
			}
			const Bw = (t, n) => n;
			class Vw {
				constructor(n) {
					(this.length = 0),
						(this._linkedRecords = null),
						(this._unlinkedRecords = null),
						(this._previousItHead = null),
						(this._itHead = null),
						(this._itTail = null),
						(this._additionsHead = null),
						(this._additionsTail = null),
						(this._movesHead = null),
						(this._movesTail = null),
						(this._removalsHead = null),
						(this._removalsTail = null),
						(this._identityChangesHead = null),
						(this._identityChangesTail = null),
						(this._trackByFn = n || Bw);
				}
				forEachItem(n) {
					let i;
					for (i = this._itHead; null !== i; i = i._next) n(i);
				}
				forEachOperation(n) {
					let i = this._itHead,
						s = this._removalsHead,
						c = 0,
						u = null;
					for (; i || s; ) {
						const f = !s || (i && i.currentIndex < Sy(s, c, u)) ? i : s,
							b = Sy(f, c, u),
							E = f.currentIndex;
						if (f === s) c--, (s = s._nextRemoved);
						else if (((i = i._next), null == f.previousIndex)) c++;
						else {
							u || (u = []);
							const L = b - c,
								j = E - c;
							if (L != j) {
								for (let Ae = 0; Ae < L; Ae++) {
									const Ze = Ae < u.length ? u[Ae] : (u[Ae] = 0),
										ht = Ze + Ae;
									j <= ht && ht < L && (u[Ae] = Ze + 1);
								}
								u[f.previousIndex] = j - L;
							}
						}
						b !== E && n(f, b, E);
					}
				}
				forEachPreviousItem(n) {
					let i;
					for (i = this._previousItHead; null !== i; i = i._nextPrevious) n(i);
				}
				forEachAddedItem(n) {
					let i;
					for (i = this._additionsHead; null !== i; i = i._nextAdded) n(i);
				}
				forEachMovedItem(n) {
					let i;
					for (i = this._movesHead; null !== i; i = i._nextMoved) n(i);
				}
				forEachRemovedItem(n) {
					let i;
					for (i = this._removalsHead; null !== i; i = i._nextRemoved) n(i);
				}
				forEachIdentityChange(n) {
					let i;
					for (i = this._identityChangesHead; null !== i; i = i._nextIdentityChange) n(i);
				}
				diff(n) {
					if ((null == n && (n = []), !wo(n)))
						throw new Error(`Error trying to diff '${De(n)}'. Only arrays and iterables are allowed`);
					return this.check(n) ? this : null;
				}
				onDestroy() {}
				check(n) {
					this._reset();
					let c,
						u,
						f,
						i = this._itHead,
						s = !1;
					if (Array.isArray(n)) {
						this.length = n.length;
						for (let b = 0; b < this.length; b++)
							(u = n[b]),
								(f = this._trackByFn(b, u)),
								null !== i && Object.is(i.trackById, f)
									? (s && (i = this._verifyReinsertion(i, u, f, b)),
									  Object.is(i.item, u) || this._addIdentityChange(i, u))
									: ((i = this._mismatch(i, u, f, b)), (s = !0)),
								(i = i._next);
					} else
						(c = 0),
							(function hp(t, n) {
								if (Array.isArray(t)) for (let i = 0; i < t.length; i++) n(t[i]);
								else {
									const i = t[oo()]();
									let s;
									for (; !(s = i.next()).done; ) n(s.value);
								}
							})(n, (b) => {
								(f = this._trackByFn(c, b)),
									null !== i && Object.is(i.trackById, f)
										? (s && (i = this._verifyReinsertion(i, b, f, c)),
										  Object.is(i.item, b) || this._addIdentityChange(i, b))
										: ((i = this._mismatch(i, b, f, c)), (s = !0)),
									(i = i._next),
									c++;
							}),
							(this.length = c);
					return this._truncate(i), (this.collection = n), this.isDirty;
				}
				get isDirty() {
					return (
						null !== this._additionsHead ||
						null !== this._movesHead ||
						null !== this._removalsHead ||
						null !== this._identityChangesHead
					);
				}
				_reset() {
					if (this.isDirty) {
						let n;
						for (n = this._previousItHead = this._itHead; null !== n; n = n._next)
							n._nextPrevious = n._next;
						for (n = this._additionsHead; null !== n; n = n._nextAdded) n.previousIndex = n.currentIndex;
						for (
							this._additionsHead = this._additionsTail = null, n = this._movesHead;
							null !== n;
							n = n._nextMoved
						)
							n.previousIndex = n.currentIndex;
						(this._movesHead = this._movesTail = null),
							(this._removalsHead = this._removalsTail = null),
							(this._identityChangesHead = this._identityChangesTail = null);
					}
				}
				_mismatch(n, i, s, c) {
					let u;
					return (
						null === n ? (u = this._itTail) : ((u = n._prev), this._remove(n)),
						null !== (n = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(s, null))
							? (Object.is(n.item, i) || this._addIdentityChange(n, i), this._reinsertAfter(n, u, c))
							: null !== (n = null === this._linkedRecords ? null : this._linkedRecords.get(s, c))
							? (Object.is(n.item, i) || this._addIdentityChange(n, i), this._moveAfter(n, u, c))
							: (n = this._addAfter(new Hw(i, s), u, c)),
						n
					);
				}
				_verifyReinsertion(n, i, s, c) {
					let u = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(s, null);
					return (
						null !== u
							? (n = this._reinsertAfter(u, n._prev, c))
							: n.currentIndex != c && ((n.currentIndex = c), this._addToMoves(n, c)),
						n
					);
				}
				_truncate(n) {
					for (; null !== n; ) {
						const i = n._next;
						this._addToRemovals(this._unlink(n)), (n = i);
					}
					null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
						null !== this._additionsTail && (this._additionsTail._nextAdded = null),
						null !== this._movesTail && (this._movesTail._nextMoved = null),
						null !== this._itTail && (this._itTail._next = null),
						null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
						null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
				}
				_reinsertAfter(n, i, s) {
					null !== this._unlinkedRecords && this._unlinkedRecords.remove(n);
					const c = n._prevRemoved,
						u = n._nextRemoved;
					return (
						null === c ? (this._removalsHead = u) : (c._nextRemoved = u),
						null === u ? (this._removalsTail = c) : (u._prevRemoved = c),
						this._insertAfter(n, i, s),
						this._addToMoves(n, s),
						n
					);
				}
				_moveAfter(n, i, s) {
					return this._unlink(n), this._insertAfter(n, i, s), this._addToMoves(n, s), n;
				}
				_addAfter(n, i, s) {
					return (
						this._insertAfter(n, i, s),
						(this._additionsTail =
							null === this._additionsTail
								? (this._additionsHead = n)
								: (this._additionsTail._nextAdded = n)),
						n
					);
				}
				_insertAfter(n, i, s) {
					const c = null === i ? this._itHead : i._next;
					return (
						(n._next = c),
						(n._prev = i),
						null === c ? (this._itTail = n) : (c._prev = n),
						null === i ? (this._itHead = n) : (i._next = n),
						null === this._linkedRecords && (this._linkedRecords = new Ey()),
						this._linkedRecords.put(n),
						(n.currentIndex = s),
						n
					);
				}
				_remove(n) {
					return this._addToRemovals(this._unlink(n));
				}
				_unlink(n) {
					null !== this._linkedRecords && this._linkedRecords.remove(n);
					const i = n._prev,
						s = n._next;
					return (
						null === i ? (this._itHead = s) : (i._next = s),
						null === s ? (this._itTail = i) : (s._prev = i),
						n
					);
				}
				_addToMoves(n, i) {
					return (
						n.previousIndex === i ||
							(this._movesTail =
								null === this._movesTail ? (this._movesHead = n) : (this._movesTail._nextMoved = n)),
						n
					);
				}
				_addToRemovals(n) {
					return (
						null === this._unlinkedRecords && (this._unlinkedRecords = new Ey()),
						this._unlinkedRecords.put(n),
						(n.currentIndex = null),
						(n._nextRemoved = null),
						null === this._removalsTail
							? ((this._removalsTail = this._removalsHead = n), (n._prevRemoved = null))
							: ((n._prevRemoved = this._removalsTail),
							  (this._removalsTail = this._removalsTail._nextRemoved = n)),
						n
					);
				}
				_addIdentityChange(n, i) {
					return (
						(n.item = i),
						(this._identityChangesTail =
							null === this._identityChangesTail
								? (this._identityChangesHead = n)
								: (this._identityChangesTail._nextIdentityChange = n)),
						n
					);
				}
			}
			class Hw {
				constructor(n, i) {
					(this.item = n),
						(this.trackById = i),
						(this.currentIndex = null),
						(this.previousIndex = null),
						(this._nextPrevious = null),
						(this._prev = null),
						(this._next = null),
						(this._prevDup = null),
						(this._nextDup = null),
						(this._prevRemoved = null),
						(this._nextRemoved = null),
						(this._nextAdded = null),
						(this._nextMoved = null),
						(this._nextIdentityChange = null);
				}
			}
			class jw {
				constructor() {
					(this._head = null), (this._tail = null);
				}
				add(n) {
					null === this._head
						? ((this._head = this._tail = n), (n._nextDup = null), (n._prevDup = null))
						: ((this._tail._nextDup = n), (n._prevDup = this._tail), (n._nextDup = null), (this._tail = n));
				}
				get(n, i) {
					let s;
					for (s = this._head; null !== s; s = s._nextDup)
						if ((null === i || i <= s.currentIndex) && Object.is(s.trackById, n)) return s;
					return null;
				}
				remove(n) {
					const i = n._prevDup,
						s = n._nextDup;
					return (
						null === i ? (this._head = s) : (i._nextDup = s),
						null === s ? (this._tail = i) : (s._prevDup = i),
						null === this._head
					);
				}
			}
			class Ey {
				constructor() {
					this.map = new Map();
				}
				put(n) {
					const i = n.trackById;
					let s = this.map.get(i);
					s || ((s = new jw()), this.map.set(i, s)), s.add(n);
				}
				get(n, i) {
					const c = this.map.get(n);
					return c ? c.get(n, i) : null;
				}
				remove(n) {
					const i = n.trackById;
					return this.map.get(i).remove(n) && this.map.delete(i), n;
				}
				get isEmpty() {
					return 0 === this.map.size;
				}
				clear() {
					this.map.clear();
				}
			}
			function Sy(t, n, i) {
				const s = t.previousIndex;
				if (null === s) return s;
				let c = 0;
				return i && s < i.length && (c = i[s]), s + n + c;
			}
			class Ty {
				constructor() {}
				supports(n) {
					return n instanceof Map || Ia(n);
				}
				create() {
					return new Uw();
				}
			}
			class Uw {
				constructor() {
					(this._records = new Map()),
						(this._mapHead = null),
						(this._appendAfter = null),
						(this._previousMapHead = null),
						(this._changesHead = null),
						(this._changesTail = null),
						(this._additionsHead = null),
						(this._additionsTail = null),
						(this._removalsHead = null),
						(this._removalsTail = null);
				}
				get isDirty() {
					return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
				}
				forEachItem(n) {
					let i;
					for (i = this._mapHead; null !== i; i = i._next) n(i);
				}
				forEachPreviousItem(n) {
					let i;
					for (i = this._previousMapHead; null !== i; i = i._nextPrevious) n(i);
				}
				forEachChangedItem(n) {
					let i;
					for (i = this._changesHead; null !== i; i = i._nextChanged) n(i);
				}
				forEachAddedItem(n) {
					let i;
					for (i = this._additionsHead; null !== i; i = i._nextAdded) n(i);
				}
				forEachRemovedItem(n) {
					let i;
					for (i = this._removalsHead; null !== i; i = i._nextRemoved) n(i);
				}
				diff(n) {
					if (n) {
						if (!(n instanceof Map || Ia(n)))
							throw new Error(`Error trying to diff '${De(n)}'. Only maps and objects are allowed`);
					} else n = new Map();
					return this.check(n) ? this : null;
				}
				onDestroy() {}
				check(n) {
					this._reset();
					let i = this._mapHead;
					if (
						((this._appendAfter = null),
						this._forEach(n, (s, c) => {
							if (i && i.key === c) this._maybeAddToChanges(i, s), (this._appendAfter = i), (i = i._next);
							else {
								const u = this._getOrCreateRecordForKey(c, s);
								i = this._insertBeforeOrAppend(i, u);
							}
						}),
						i)
					) {
						i._prev && (i._prev._next = null), (this._removalsHead = i);
						for (let s = i; null !== s; s = s._nextRemoved)
							s === this._mapHead && (this._mapHead = null),
								this._records.delete(s.key),
								(s._nextRemoved = s._next),
								(s.previousValue = s.currentValue),
								(s.currentValue = null),
								(s._prev = null),
								(s._next = null);
					}
					return (
						this._changesTail && (this._changesTail._nextChanged = null),
						this._additionsTail && (this._additionsTail._nextAdded = null),
						this.isDirty
					);
				}
				_insertBeforeOrAppend(n, i) {
					if (n) {
						const s = n._prev;
						return (
							(i._next = n),
							(i._prev = s),
							(n._prev = i),
							s && (s._next = i),
							n === this._mapHead && (this._mapHead = i),
							(this._appendAfter = n),
							n
						);
					}
					return (
						this._appendAfter
							? ((this._appendAfter._next = i), (i._prev = this._appendAfter))
							: (this._mapHead = i),
						(this._appendAfter = i),
						null
					);
				}
				_getOrCreateRecordForKey(n, i) {
					if (this._records.has(n)) {
						const c = this._records.get(n);
						this._maybeAddToChanges(c, i);
						const u = c._prev,
							f = c._next;
						return u && (u._next = f), f && (f._prev = u), (c._next = null), (c._prev = null), c;
					}
					const s = new zw(n);
					return this._records.set(n, s), (s.currentValue = i), this._addToAdditions(s), s;
				}
				_reset() {
					if (this.isDirty) {
						let n;
						for (this._previousMapHead = this._mapHead, n = this._previousMapHead; null !== n; n = n._next)
							n._nextPrevious = n._next;
						for (n = this._changesHead; null !== n; n = n._nextChanged) n.previousValue = n.currentValue;
						for (n = this._additionsHead; null != n; n = n._nextAdded) n.previousValue = n.currentValue;
						(this._changesHead = this._changesTail = null),
							(this._additionsHead = this._additionsTail = null),
							(this._removalsHead = null);
					}
				}
				_maybeAddToChanges(n, i) {
					Object.is(i, n.currentValue) ||
						((n.previousValue = n.currentValue), (n.currentValue = i), this._addToChanges(n));
				}
				_addToAdditions(n) {
					null === this._additionsHead
						? (this._additionsHead = this._additionsTail = n)
						: ((this._additionsTail._nextAdded = n), (this._additionsTail = n));
				}
				_addToChanges(n) {
					null === this._changesHead
						? (this._changesHead = this._changesTail = n)
						: ((this._changesTail._nextChanged = n), (this._changesTail = n));
				}
				_forEach(n, i) {
					n instanceof Map ? n.forEach(i) : Object.keys(n).forEach((s) => i(n[s], s));
				}
			}
			class zw {
				constructor(n) {
					(this.key = n),
						(this.previousValue = null),
						(this.currentValue = null),
						(this._nextPrevious = null),
						(this._next = null),
						(this._prev = null),
						(this._nextAdded = null),
						(this._nextRemoved = null),
						(this._nextChanged = null);
				}
			}
			function Ay() {
				return new cu([new xy()]);
			}
			let cu = (() => {
				class t {
					constructor(i) {
						this.factories = i;
					}
					static create(i, s) {
						if (null != s) {
							const c = s.factories.slice();
							i = i.concat(c);
						}
						return new t(i);
					}
					static extend(i) {
						return {
							provide: t,
							useFactory: (s) => t.create(i, s || Ay()),
							deps: [[t, new go(), new eo()]],
						};
					}
					find(i) {
						const s = this.factories.find((c) => c.supports(i));
						if (null != s) return s;
						throw new Error(
							`Cannot find a differ supporting object '${i}' of type '${(function Gw(t) {
								return t.name || typeof t;
							})(i)}'`
						);
					}
				}
				return (
					(t.ɵprov = Wt({
						token: t,
						providedIn: 'root',
						factory: Ay,
					})),
					t
				);
			})();
			function ky() {
				return new du([new Ty()]);
			}
			let du = (() => {
				class t {
					constructor(i) {
						this.factories = i;
					}
					static create(i, s) {
						if (s) {
							const c = s.factories.slice();
							i = i.concat(c);
						}
						return new t(i);
					}
					static extend(i) {
						return {
							provide: t,
							useFactory: (s) => t.create(i, s || ky()),
							deps: [[t, new go(), new eo()]],
						};
					}
					find(i) {
						const s = this.factories.find((c) => c.supports(i));
						if (s) return s;
						throw new Error(`Cannot find a differ supporting object '${i}'`);
					}
				}
				return (
					(t.ɵprov = Wt({
						token: t,
						providedIn: 'root',
						factory: ky,
					})),
					t
				);
			})();
			const $w = [new Ty()],
				Ww = new cu([new xy()]),
				Kw = new du($w),
				Zw = py(null, 'core', [
					{ provide: ry, useValue: 'unknown' },
					{ provide: my, deps: [Qr] },
					{ provide: uy, deps: [] },
					{ provide: oy, deps: [] },
				]),
				eD = [
					{ provide: Zl, useClass: Zl, deps: [ds, Qr, _a, Ul, Ga] },
					{
						provide: pC,
						deps: [ds],
						useFactory: function tD(t) {
							let n = [];
							return (
								t.onStable.subscribe(() => {
									for (; n.length; ) n.pop()();
								}),
								function (i) {
									n.push(i);
								}
							);
						},
					},
					{ provide: Ga, useClass: Ga, deps: [[new eo(), gf]] },
					{ provide: vf, useClass: vf, deps: [] },
					uw,
					{
						provide: cu,
						useFactory: function qw() {
							return Ww;
						},
						deps: [],
					},
					{
						provide: du,
						useFactory: function Qw() {
							return Kw;
						},
						deps: [],
					},
					{
						provide: au,
						useFactory: function Xw(t) {
							return (
								t ||
								(function Jw() {
									return ('undefined' != typeof $localize && $localize.locale) || Zd;
								})()
							);
						},
						deps: [[new da(au), new eo(), new go()]],
					},
					{ provide: ay, useValue: 'USD' },
				];
			let nD = (() => {
				class t {
					constructor(i) {}
				}
				return (
					(t.ɵfac = function (i) {
						return new (i || t)(er(Zl));
					}),
					(t.ɵmod = _n({ type: t })),
					(t.ɵinj = ft({ providers: eD })),
					t
				);
			})();
		},
		3075: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, {
				Zs: () => ui,
				sg: () => wr,
				u5: () => Lt,
				Cf: () => ye,
				JU: () => De,
				a5: () => Bt,
				F: () => Ui,
				kI: () => at,
			});
			var m = S(5e3),
				o = (S(9808), S(2076)),
				G = S(4128),
				be = S(4004);
			const De = new m.OlP('NgValueAccessor');
			function Be(R) {
				return null == R || 0 === R.length;
			}
			function $e(R) {
				return null != R && 'number' == typeof R.length;
			}
			const ye = new m.OlP('NgValidators'),
				Ne = new m.OlP('NgAsyncValidators'),
				rt =
					/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			class at {
				static min(v) {
					return (function Ge(R) {
						return (v) => {
							if (Be(v.value) || Be(R)) return null;
							const D = parseFloat(v.value);
							return !isNaN(D) && D < R ? { min: { min: R, actual: v.value } } : null;
						};
					})(v);
				}
				static max(v) {
					return (function ge(R) {
						return (v) => {
							if (Be(v.value) || Be(R)) return null;
							const D = parseFloat(v.value);
							return !isNaN(D) && D > R ? { max: { max: R, actual: v.value } } : null;
						};
					})(v);
				}
				static required(v) {
					return tt(v);
				}
				static requiredTrue(v) {
					return ot(v);
				}
				static email(v) {
					return (function J(R) {
						return Be(R.value) || rt.test(R.value) ? null : { email: !0 };
					})(v);
				}
				static minLength(v) {
					return (function We(R) {
						return (v) =>
							Be(v.value) || !$e(v.value)
								? null
								: v.value.length < R
								? {
										minlength: {
											requiredLength: R,
											actualLength: v.value.length,
										},
								  }
								: null;
					})(v);
				}
				static maxLength(v) {
					return (function ce(R) {
						return (v) =>
							$e(v.value) && v.value.length > R
								? {
										maxlength: {
											requiredLength: R,
											actualLength: v.value.length,
										},
								  }
								: null;
					})(v);
				}
				static pattern(v) {
					return (function Pe(R) {
						if (!R) return Ie;
						let v, D;
						return (
							'string' == typeof R
								? ((D = ''),
								  '^' !== R.charAt(0) && (D += '^'),
								  (D += R),
								  '$' !== R.charAt(R.length - 1) && (D += '$'),
								  (v = new RegExp(D)))
								: ((D = R.toString()), (v = R)),
							(W) => {
								if (Be(W.value)) return null;
								const lt = W.value;
								return v.test(lt)
									? null
									: {
											pattern: {
												requiredPattern: D,
												actualValue: lt,
											},
									  };
							}
						);
					})(v);
				}
				static nullValidator(v) {
					return null;
				}
				static compose(v) {
					return gt(v);
				}
				static composeAsync(v) {
					return yt(v);
				}
			}
			function tt(R) {
				return Be(R.value) ? { required: !0 } : null;
			}
			function ot(R) {
				return !0 === R.value ? null : { required: !0 };
			}
			function Ie(R) {
				return null;
			}
			function Ue(R) {
				return null != R;
			}
			function ut(R) {
				const v = (0, m.QGY)(R) ? (0, o.D)(R) : R;
				return (0, m.CqO)(v), v;
			}
			function Xe(R) {
				let v = {};
				return (
					R.forEach((D) => {
						v = null != D ? Object.assign(Object.assign({}, v), D) : v;
					}),
					0 === Object.keys(v).length ? null : v
				);
			}
			function Rt(R, v) {
				return v.map((D) => D(R));
			}
			function nt(R) {
				return R.map((v) =>
					(function Ht(R) {
						return !R.validate;
					})(v)
						? v
						: (D) => v.validate(D)
				);
			}
			function gt(R) {
				if (!R) return null;
				const v = R.filter(Ue);
				return 0 == v.length
					? null
					: function (D) {
							return Xe(Rt(D, v));
					  };
			}
			function ke(R) {
				return null != R ? gt(nt(R)) : null;
			}
			function yt(R) {
				if (!R) return null;
				const v = R.filter(Ue);
				return 0 == v.length
					? null
					: function (D) {
							const W = Rt(D, v).map(ut);
							return (0, G.D)(W).pipe((0, be.U)(Xe));
					  };
			}
			function xt(R) {
				return null != R ? yt(nt(R)) : null;
			}
			function sn(R, v) {
				return null === R ? [v] : Array.isArray(R) ? [...R, v] : [R, v];
			}
			function Wt(R) {
				return R._rawValidators;
			}
			function Ot(R) {
				return R._rawAsyncValidators;
			}
			function ft(R) {
				return R ? (Array.isArray(R) ? R : [R]) : [];
			}
			function Je(R, v) {
				return Array.isArray(R) ? R.includes(v) : R === v;
			}
			function Fe(R, v) {
				const D = ft(v);
				return (
					ft(R).forEach((lt) => {
						Je(D, lt) || D.push(lt);
					}),
					D
				);
			}
			function Ct(R, v) {
				return ft(v).filter((D) => !Je(R, D));
			}
			class It {
				constructor() {
					(this._rawValidators = []), (this._rawAsyncValidators = []), (this._onDestroyCallbacks = []);
				}
				get value() {
					return this.control ? this.control.value : null;
				}
				get valid() {
					return this.control ? this.control.valid : null;
				}
				get invalid() {
					return this.control ? this.control.invalid : null;
				}
				get pending() {
					return this.control ? this.control.pending : null;
				}
				get disabled() {
					return this.control ? this.control.disabled : null;
				}
				get enabled() {
					return this.control ? this.control.enabled : null;
				}
				get errors() {
					return this.control ? this.control.errors : null;
				}
				get pristine() {
					return this.control ? this.control.pristine : null;
				}
				get dirty() {
					return this.control ? this.control.dirty : null;
				}
				get touched() {
					return this.control ? this.control.touched : null;
				}
				get status() {
					return this.control ? this.control.status : null;
				}
				get untouched() {
					return this.control ? this.control.untouched : null;
				}
				get statusChanges() {
					return this.control ? this.control.statusChanges : null;
				}
				get valueChanges() {
					return this.control ? this.control.valueChanges : null;
				}
				get path() {
					return null;
				}
				_setValidators(v) {
					(this._rawValidators = v || []), (this._composedValidatorFn = ke(this._rawValidators));
				}
				_setAsyncValidators(v) {
					(this._rawAsyncValidators = v || []),
						(this._composedAsyncValidatorFn = xt(this._rawAsyncValidators));
				}
				get validator() {
					return this._composedValidatorFn || null;
				}
				get asyncValidator() {
					return this._composedAsyncValidatorFn || null;
				}
				_registerOnDestroy(v) {
					this._onDestroyCallbacks.push(v);
				}
				_invokeOnDestroyCallbacks() {
					this._onDestroyCallbacks.forEach((v) => v()), (this._onDestroyCallbacks = []);
				}
				reset(v) {
					this.control && this.control.reset(v);
				}
				hasError(v, D) {
					return !!this.control && this.control.hasError(v, D);
				}
				getError(v, D) {
					return this.control ? this.control.getError(v, D) : null;
				}
			}
			class Bt extends It {
				constructor() {
					super(...arguments), (this._parent = null), (this.name = null), (this.valueAccessor = null);
				}
			}
			class Vt extends It {
				get formDirective() {
					return null;
				}
				get path() {
					return null;
				}
			}
			function Pt(R, v) {
				He(R, v),
					v.valueAccessor.writeValue(R.value),
					(function oe(R, v) {
						v.valueAccessor.registerOnChange((D) => {
							(R._pendingValue = D),
								(R._pendingChange = !0),
								(R._pendingDirty = !0),
								'change' === R.updateOn && ee(R, v);
						});
					})(R, v),
					(function je(R, v) {
						const D = (W, lt) => {
							v.valueAccessor.writeValue(W), lt && v.viewToModelUpdate(W);
						};
						R.registerOnChange(D),
							v._registerOnDestroy(() => {
								R._unregisterOnChange(D);
							});
					})(R, v),
					(function he(R, v) {
						v.valueAccessor.registerOnTouched(() => {
							(R._pendingTouched = !0),
								'blur' === R.updateOn && R._pendingChange && ee(R, v),
								'submit' !== R.updateOn && R.markAsTouched();
						});
					})(R, v),
					(function Me(R, v) {
						if (v.valueAccessor.setDisabledState) {
							const D = (W) => {
								v.valueAccessor.setDisabledState(W);
							};
							R.registerOnDisabledChange(D),
								v._registerOnDestroy(() => {
									R._unregisterOnDisabledChange(D);
								});
						}
					})(R, v);
			}
			function Yn(R, v, D = !0) {
				const W = () => {};
				v.valueAccessor && (v.valueAccessor.registerOnChange(W), v.valueAccessor.registerOnTouched(W)),
					ue(R, v),
					R && (v._invokeOnDestroyCallbacks(), R._registerOnCollectionChange(() => {}));
			}
			function gn(R, v) {
				R.forEach((D) => {
					D.registerOnValidatorChange && D.registerOnValidatorChange(v);
				});
			}
			function He(R, v) {
				const D = Wt(R);
				null !== v.validator
					? R.setValidators(sn(D, v.validator))
					: 'function' == typeof D && R.setValidators([D]);
				const W = Ot(R);
				null !== v.asyncValidator
					? R.setAsyncValidators(sn(W, v.asyncValidator))
					: 'function' == typeof W && R.setAsyncValidators([W]);
				const lt = () => R.updateValueAndValidity();
				gn(v._rawValidators, lt), gn(v._rawAsyncValidators, lt);
			}
			function ue(R, v) {
				let D = !1;
				if (null !== R) {
					if (null !== v.validator) {
						const lt = Wt(R);
						if (Array.isArray(lt) && lt.length > 0) {
							const Kt = lt.filter((Hn) => Hn !== v.validator);
							Kt.length !== lt.length && ((D = !0), R.setValidators(Kt));
						}
					}
					if (null !== v.asyncValidator) {
						const lt = Ot(R);
						if (Array.isArray(lt) && lt.length > 0) {
							const Kt = lt.filter((Hn) => Hn !== v.asyncValidator);
							Kt.length !== lt.length && ((D = !0), R.setAsyncValidators(Kt));
						}
					}
				}
				const W = () => {};
				return gn(v._rawValidators, W), gn(v._rawAsyncValidators, W), D;
			}
			function ee(R, v) {
				R._pendingDirty && R.markAsDirty(),
					R.setValue(R._pendingValue, { emitModelToViewChange: !1 }),
					v.viewToModelUpdate(R._pendingValue),
					(R._pendingChange = !1);
			}
			function Ke(R, v) {
				He(R, v);
			}
			function Te(R, v) {
				R._syncPendingControls(),
					v.forEach((D) => {
						const W = D.control;
						'submit' === W.updateOn &&
							W._pendingChange &&
							(D.viewToModelUpdate(W._pendingValue), (W._pendingChange = !1));
					});
			}
			function Le(R, v) {
				const D = R.indexOf(v);
				D > -1 && R.splice(D, 1);
			}
			const tn = 'VALID',
				Pn = 'INVALID',
				Cn = 'PENDING',
				ci = 'DISABLED';
			function bi(R) {
				return (Tt(R) ? R.validators : R) || null;
			}
			function Yt(R) {
				return Array.isArray(R) ? ke(R) : R || null;
			}
			function si(R, v) {
				return (Tt(v) ? v.asyncValidators : R) || null;
			}
			function zn(R) {
				return Array.isArray(R) ? xt(R) : R || null;
			}
			function Tt(R) {
				return null != R && !Array.isArray(R) && 'object' == typeof R;
			}
			const Dn = (R) => R instanceof di,
				Fn = (R) => R instanceof Wn;
			function Ci(R) {
				return Dn(R) ? R.value : R.getRawValue();
			}
			function Ln(R, v) {
				const D = Fn(R),
					W = R.controls;
				if (!(D ? Object.keys(W) : W).length) throw new m.vHH(1e3, '');
				if (!W[v]) throw new m.vHH(1001, '');
			}
			function fi(R, v) {
				Fn(R),
					R._forEachChild((W, lt) => {
						if (void 0 === v[lt]) throw new m.vHH(1002, '');
					});
			}
			class dn {
				constructor(v, D) {
					(this._pendingDirty = !1),
						(this._hasOwnPendingAsyncValidator = !1),
						(this._pendingTouched = !1),
						(this._onCollectionChange = () => {}),
						(this._parent = null),
						(this.pristine = !0),
						(this.touched = !1),
						(this._onDisabledChange = []),
						(this._rawValidators = v),
						(this._rawAsyncValidators = D),
						(this._composedValidatorFn = Yt(this._rawValidators)),
						(this._composedAsyncValidatorFn = zn(this._rawAsyncValidators));
				}
				get validator() {
					return this._composedValidatorFn;
				}
				set validator(v) {
					this._rawValidators = this._composedValidatorFn = v;
				}
				get asyncValidator() {
					return this._composedAsyncValidatorFn;
				}
				set asyncValidator(v) {
					this._rawAsyncValidators = this._composedAsyncValidatorFn = v;
				}
				get parent() {
					return this._parent;
				}
				get valid() {
					return this.status === tn;
				}
				get invalid() {
					return this.status === Pn;
				}
				get pending() {
					return this.status == Cn;
				}
				get disabled() {
					return this.status === ci;
				}
				get enabled() {
					return this.status !== ci;
				}
				get dirty() {
					return !this.pristine;
				}
				get untouched() {
					return !this.touched;
				}
				get updateOn() {
					return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
				}
				setValidators(v) {
					(this._rawValidators = v), (this._composedValidatorFn = Yt(v));
				}
				setAsyncValidators(v) {
					(this._rawAsyncValidators = v), (this._composedAsyncValidatorFn = zn(v));
				}
				addValidators(v) {
					this.setValidators(Fe(v, this._rawValidators));
				}
				addAsyncValidators(v) {
					this.setAsyncValidators(Fe(v, this._rawAsyncValidators));
				}
				removeValidators(v) {
					this.setValidators(Ct(v, this._rawValidators));
				}
				removeAsyncValidators(v) {
					this.setAsyncValidators(Ct(v, this._rawAsyncValidators));
				}
				hasValidator(v) {
					return Je(this._rawValidators, v);
				}
				hasAsyncValidator(v) {
					return Je(this._rawAsyncValidators, v);
				}
				clearValidators() {
					this.validator = null;
				}
				clearAsyncValidators() {
					this.asyncValidator = null;
				}
				markAsTouched(v = {}) {
					(this.touched = !0), this._parent && !v.onlySelf && this._parent.markAsTouched(v);
				}
				markAllAsTouched() {
					this.markAsTouched({ onlySelf: !0 }), this._forEachChild((v) => v.markAllAsTouched());
				}
				markAsUntouched(v = {}) {
					(this.touched = !1),
						(this._pendingTouched = !1),
						this._forEachChild((D) => {
							D.markAsUntouched({ onlySelf: !0 });
						}),
						this._parent && !v.onlySelf && this._parent._updateTouched(v);
				}
				markAsDirty(v = {}) {
					(this.pristine = !1), this._parent && !v.onlySelf && this._parent.markAsDirty(v);
				}
				markAsPristine(v = {}) {
					(this.pristine = !0),
						(this._pendingDirty = !1),
						this._forEachChild((D) => {
							D.markAsPristine({ onlySelf: !0 });
						}),
						this._parent && !v.onlySelf && this._parent._updatePristine(v);
				}
				markAsPending(v = {}) {
					(this.status = Cn),
						!1 !== v.emitEvent && this.statusChanges.emit(this.status),
						this._parent && !v.onlySelf && this._parent.markAsPending(v);
				}
				disable(v = {}) {
					const D = this._parentMarkedDirty(v.onlySelf);
					(this.status = ci),
						(this.errors = null),
						this._forEachChild((W) => {
							W.disable(
								Object.assign(Object.assign({}, v), {
									onlySelf: !0,
								})
							);
						}),
						this._updateValue(),
						!1 !== v.emitEvent &&
							(this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
						this._updateAncestors(
							Object.assign(Object.assign({}, v), {
								skipPristineCheck: D,
							})
						),
						this._onDisabledChange.forEach((W) => W(!0));
				}
				enable(v = {}) {
					const D = this._parentMarkedDirty(v.onlySelf);
					(this.status = tn),
						this._forEachChild((W) => {
							W.enable(
								Object.assign(Object.assign({}, v), {
									onlySelf: !0,
								})
							);
						}),
						this.updateValueAndValidity({
							onlySelf: !0,
							emitEvent: v.emitEvent,
						}),
						this._updateAncestors(
							Object.assign(Object.assign({}, v), {
								skipPristineCheck: D,
							})
						),
						this._onDisabledChange.forEach((W) => W(!1));
				}
				_updateAncestors(v) {
					this._parent &&
						!v.onlySelf &&
						(this._parent.updateValueAndValidity(v),
						v.skipPristineCheck || this._parent._updatePristine(),
						this._parent._updateTouched());
				}
				setParent(v) {
					this._parent = v;
				}
				updateValueAndValidity(v = {}) {
					this._setInitialStatus(),
						this._updateValue(),
						this.enabled &&
							(this._cancelExistingSubscription(),
							(this.errors = this._runValidator()),
							(this.status = this._calculateStatus()),
							(this.status === tn || this.status === Cn) && this._runAsyncValidator(v.emitEvent)),
						!1 !== v.emitEvent &&
							(this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
						this._parent && !v.onlySelf && this._parent.updateValueAndValidity(v);
				}
				_updateTreeValidity(v = { emitEvent: !0 }) {
					this._forEachChild((D) => D._updateTreeValidity(v)),
						this.updateValueAndValidity({
							onlySelf: !0,
							emitEvent: v.emitEvent,
						});
				}
				_setInitialStatus() {
					this.status = this._allControlsDisabled() ? ci : tn;
				}
				_runValidator() {
					return this.validator ? this.validator(this) : null;
				}
				_runAsyncValidator(v) {
					if (this.asyncValidator) {
						(this.status = Cn), (this._hasOwnPendingAsyncValidator = !0);
						const D = ut(this.asyncValidator(this));
						this._asyncValidationSubscription = D.subscribe((W) => {
							(this._hasOwnPendingAsyncValidator = !1), this.setErrors(W, { emitEvent: v });
						});
					}
				}
				_cancelExistingSubscription() {
					this._asyncValidationSubscription &&
						(this._asyncValidationSubscription.unsubscribe(), (this._hasOwnPendingAsyncValidator = !1));
				}
				setErrors(v, D = {}) {
					(this.errors = v), this._updateControlsErrors(!1 !== D.emitEvent);
				}
				get(v) {
					return (function ji(R, v, D) {
						if (null == v || (Array.isArray(v) || (v = v.split(D)), Array.isArray(v) && 0 === v.length))
							return null;
						let W = R;
						return (
							v.forEach((lt) => {
								W = Fn(W)
									? W.controls.hasOwnProperty(lt)
										? W.controls[lt]
										: null
									: (((R) => R instanceof pn)(W) && W.at(lt)) || null;
							}),
							W
						);
					})(this, v, '.');
				}
				getError(v, D) {
					const W = D ? this.get(D) : this;
					return W && W.errors ? W.errors[v] : null;
				}
				hasError(v, D) {
					return !!this.getError(v, D);
				}
				get root() {
					let v = this;
					for (; v._parent; ) v = v._parent;
					return v;
				}
				_updateControlsErrors(v) {
					(this.status = this._calculateStatus()),
						v && this.statusChanges.emit(this.status),
						this._parent && this._parent._updateControlsErrors(v);
				}
				_initObservables() {
					(this.valueChanges = new m.vpe()), (this.statusChanges = new m.vpe());
				}
				_calculateStatus() {
					return this._allControlsDisabled()
						? ci
						: this.errors
						? Pn
						: this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Cn)
						? Cn
						: this._anyControlsHaveStatus(Pn)
						? Pn
						: tn;
				}
				_anyControlsHaveStatus(v) {
					return this._anyControls((D) => D.status === v);
				}
				_anyControlsDirty() {
					return this._anyControls((v) => v.dirty);
				}
				_anyControlsTouched() {
					return this._anyControls((v) => v.touched);
				}
				_updatePristine(v = {}) {
					(this.pristine = !this._anyControlsDirty()),
						this._parent && !v.onlySelf && this._parent._updatePristine(v);
				}
				_updateTouched(v = {}) {
					(this.touched = this._anyControlsTouched()),
						this._parent && !v.onlySelf && this._parent._updateTouched(v);
				}
				_isBoxedValue(v) {
					return (
						'object' == typeof v &&
						null !== v &&
						2 === Object.keys(v).length &&
						'value' in v &&
						'disabled' in v
					);
				}
				_registerOnCollectionChange(v) {
					this._onCollectionChange = v;
				}
				_setUpdateStrategy(v) {
					Tt(v) && null != v.updateOn && (this._updateOn = v.updateOn);
				}
				_parentMarkedDirty(v) {
					return !v && !(!this._parent || !this._parent.dirty) && !this._parent._anyControlsDirty();
				}
			}
			class di extends dn {
				constructor(v = null, D, W) {
					super(bi(D), si(W, D)),
						(this._onChange = []),
						(this._pendingChange = !1),
						this._applyFormState(v),
						this._setUpdateStrategy(D),
						this._initObservables(),
						this.updateValueAndValidity({
							onlySelf: !0,
							emitEvent: !!this.asyncValidator,
						});
				}
				setValue(v, D = {}) {
					(this.value = this._pendingValue = v),
						this._onChange.length &&
							!1 !== D.emitModelToViewChange &&
							this._onChange.forEach((W) => W(this.value, !1 !== D.emitViewToModelChange)),
						this.updateValueAndValidity(D);
				}
				patchValue(v, D = {}) {
					this.setValue(v, D);
				}
				reset(v = null, D = {}) {
					this._applyFormState(v),
						this.markAsPristine(D),
						this.markAsUntouched(D),
						this.setValue(this.value, D),
						(this._pendingChange = !1);
				}
				_updateValue() {}
				_anyControls(v) {
					return !1;
				}
				_allControlsDisabled() {
					return this.disabled;
				}
				registerOnChange(v) {
					this._onChange.push(v);
				}
				_unregisterOnChange(v) {
					Le(this._onChange, v);
				}
				registerOnDisabledChange(v) {
					this._onDisabledChange.push(v);
				}
				_unregisterOnDisabledChange(v) {
					Le(this._onDisabledChange, v);
				}
				_forEachChild(v) {}
				_syncPendingControls() {
					return !(
						'submit' !== this.updateOn ||
						(this._pendingDirty && this.markAsDirty(),
						this._pendingTouched && this.markAsTouched(),
						!this._pendingChange) ||
						(this.setValue(this._pendingValue, {
							onlySelf: !0,
							emitModelToViewChange: !1,
						}),
						0)
					);
				}
				_applyFormState(v) {
					this._isBoxedValue(v)
						? ((this.value = this._pendingValue = v.value),
						  v.disabled
								? this.disable({ onlySelf: !0, emitEvent: !1 })
								: this.enable({ onlySelf: !0, emitEvent: !1 }))
						: (this.value = this._pendingValue = v);
				}
			}
			class Wn extends dn {
				constructor(v, D, W) {
					super(bi(D), si(W, D)),
						(this.controls = v),
						this._initObservables(),
						this._setUpdateStrategy(D),
						this._setUpControls(),
						this.updateValueAndValidity({
							onlySelf: !0,
							emitEvent: !!this.asyncValidator,
						});
				}
				registerControl(v, D) {
					return this.controls[v]
						? this.controls[v]
						: ((this.controls[v] = D),
						  D.setParent(this),
						  D._registerOnCollectionChange(this._onCollectionChange),
						  D);
				}
				addControl(v, D, W = {}) {
					this.registerControl(v, D),
						this.updateValueAndValidity({ emitEvent: W.emitEvent }),
						this._onCollectionChange();
				}
				removeControl(v, D = {}) {
					this.controls[v] && this.controls[v]._registerOnCollectionChange(() => {}),
						delete this.controls[v],
						this.updateValueAndValidity({ emitEvent: D.emitEvent }),
						this._onCollectionChange();
				}
				setControl(v, D, W = {}) {
					this.controls[v] && this.controls[v]._registerOnCollectionChange(() => {}),
						delete this.controls[v],
						D && this.registerControl(v, D),
						this.updateValueAndValidity({ emitEvent: W.emitEvent }),
						this._onCollectionChange();
				}
				contains(v) {
					return this.controls.hasOwnProperty(v) && this.controls[v].enabled;
				}
				setValue(v, D = {}) {
					fi(this, v),
						Object.keys(v).forEach((W) => {
							Ln(this, W),
								this.controls[W].setValue(v[W], {
									onlySelf: !0,
									emitEvent: D.emitEvent,
								});
						}),
						this.updateValueAndValidity(D);
				}
				patchValue(v, D = {}) {
					null != v &&
						(Object.keys(v).forEach((W) => {
							this.controls[W] &&
								this.controls[W].patchValue(v[W], {
									onlySelf: !0,
									emitEvent: D.emitEvent,
								});
						}),
						this.updateValueAndValidity(D));
				}
				reset(v = {}, D = {}) {
					this._forEachChild((W, lt) => {
						W.reset(v[lt], {
							onlySelf: !0,
							emitEvent: D.emitEvent,
						});
					}),
						this._updatePristine(D),
						this._updateTouched(D),
						this.updateValueAndValidity(D);
				}
				getRawValue() {
					return this._reduceChildren({}, (v, D, W) => ((v[W] = Ci(D)), v));
				}
				_syncPendingControls() {
					let v = this._reduceChildren(!1, (D, W) => !!W._syncPendingControls() || D);
					return v && this.updateValueAndValidity({ onlySelf: !0 }), v;
				}
				_forEachChild(v) {
					Object.keys(this.controls).forEach((D) => {
						const W = this.controls[D];
						W && v(W, D);
					});
				}
				_setUpControls() {
					this._forEachChild((v) => {
						v.setParent(this), v._registerOnCollectionChange(this._onCollectionChange);
					});
				}
				_updateValue() {
					this.value = this._reduceValue();
				}
				_anyControls(v) {
					for (const D of Object.keys(this.controls)) {
						const W = this.controls[D];
						if (this.contains(D) && v(W)) return !0;
					}
					return !1;
				}
				_reduceValue() {
					return this._reduceChildren({}, (v, D, W) => ((D.enabled || this.disabled) && (v[W] = D.value), v));
				}
				_reduceChildren(v, D) {
					let W = v;
					return (
						this._forEachChild((lt, Kt) => {
							W = D(W, lt, Kt);
						}),
						W
					);
				}
				_allControlsDisabled() {
					for (const v of Object.keys(this.controls)) if (this.controls[v].enabled) return !1;
					return Object.keys(this.controls).length > 0 || this.disabled;
				}
			}
			class pn extends dn {
				constructor(v, D, W) {
					super(bi(D), si(W, D)),
						(this.controls = v),
						this._initObservables(),
						this._setUpdateStrategy(D),
						this._setUpControls(),
						this.updateValueAndValidity({
							onlySelf: !0,
							emitEvent: !!this.asyncValidator,
						});
				}
				at(v) {
					return this.controls[v];
				}
				push(v, D = {}) {
					this.controls.push(v),
						this._registerControl(v),
						this.updateValueAndValidity({ emitEvent: D.emitEvent }),
						this._onCollectionChange();
				}
				insert(v, D, W = {}) {
					this.controls.splice(v, 0, D),
						this._registerControl(D),
						this.updateValueAndValidity({ emitEvent: W.emitEvent });
				}
				removeAt(v, D = {}) {
					this.controls[v] && this.controls[v]._registerOnCollectionChange(() => {}),
						this.controls.splice(v, 1),
						this.updateValueAndValidity({ emitEvent: D.emitEvent });
				}
				setControl(v, D, W = {}) {
					this.controls[v] && this.controls[v]._registerOnCollectionChange(() => {}),
						this.controls.splice(v, 1),
						D && (this.controls.splice(v, 0, D), this._registerControl(D)),
						this.updateValueAndValidity({ emitEvent: W.emitEvent }),
						this._onCollectionChange();
				}
				get length() {
					return this.controls.length;
				}
				setValue(v, D = {}) {
					fi(this, v),
						v.forEach((W, lt) => {
							Ln(this, lt),
								this.at(lt).setValue(W, {
									onlySelf: !0,
									emitEvent: D.emitEvent,
								});
						}),
						this.updateValueAndValidity(D);
				}
				patchValue(v, D = {}) {
					null != v &&
						(v.forEach((W, lt) => {
							this.at(lt) &&
								this.at(lt).patchValue(W, {
									onlySelf: !0,
									emitEvent: D.emitEvent,
								});
						}),
						this.updateValueAndValidity(D));
				}
				reset(v = [], D = {}) {
					this._forEachChild((W, lt) => {
						W.reset(v[lt], {
							onlySelf: !0,
							emitEvent: D.emitEvent,
						});
					}),
						this._updatePristine(D),
						this._updateTouched(D),
						this.updateValueAndValidity(D);
				}
				getRawValue() {
					return this.controls.map((v) => Ci(v));
				}
				clear(v = {}) {
					this.controls.length < 1 ||
						(this._forEachChild((D) => D._registerOnCollectionChange(() => {})),
						this.controls.splice(0),
						this.updateValueAndValidity({
							emitEvent: v.emitEvent,
						}));
				}
				_syncPendingControls() {
					let v = this.controls.reduce((D, W) => !!W._syncPendingControls() || D, !1);
					return v && this.updateValueAndValidity({ onlySelf: !0 }), v;
				}
				_forEachChild(v) {
					this.controls.forEach((D, W) => {
						v(D, W);
					});
				}
				_updateValue() {
					this.value = this.controls.filter((v) => v.enabled || this.disabled).map((v) => v.value);
				}
				_anyControls(v) {
					return this.controls.some((D) => D.enabled && v(D));
				}
				_setUpControls() {
					this._forEachChild((v) => this._registerControl(v));
				}
				_allControlsDisabled() {
					for (const v of this.controls) if (v.enabled) return !1;
					return this.controls.length > 0 || this.disabled;
				}
				_registerControl(v) {
					v.setParent(this), v._registerOnCollectionChange(this._onCollectionChange);
				}
			}
			const Ki = { provide: Vt, useExisting: (0, m.Gpc)(() => Ui) },
				Kn = (() => Promise.resolve(null))();
			let Ui = (() => {
					class R extends Vt {
						constructor(D, W) {
							super(),
								(this.submitted = !1),
								(this._directives = []),
								(this.ngSubmit = new m.vpe()),
								(this.form = new Wn({}, ke(D), xt(W)));
						}
						ngAfterViewInit() {
							this._setUpdateStrategy();
						}
						get formDirective() {
							return this;
						}
						get control() {
							return this.form;
						}
						get path() {
							return [];
						}
						get controls() {
							return this.form.controls;
						}
						addControl(D) {
							Kn.then(() => {
								const W = this._findContainer(D.path);
								(D.control = W.registerControl(D.name, D.control)),
									Pt(D.control, D),
									D.control.updateValueAndValidity({
										emitEvent: !1,
									}),
									this._directives.push(D);
							});
						}
						getControl(D) {
							return this.form.get(D.path);
						}
						removeControl(D) {
							Kn.then(() => {
								const W = this._findContainer(D.path);
								W && W.removeControl(D.name), Le(this._directives, D);
							});
						}
						addFormGroup(D) {
							Kn.then(() => {
								const W = this._findContainer(D.path),
									lt = new Wn({});
								Ke(lt, D),
									W.registerControl(D.name, lt),
									lt.updateValueAndValidity({
										emitEvent: !1,
									});
							});
						}
						removeFormGroup(D) {
							Kn.then(() => {
								const W = this._findContainer(D.path);
								W && W.removeControl(D.name);
							});
						}
						getFormGroup(D) {
							return this.form.get(D.path);
						}
						updateModel(D, W) {
							Kn.then(() => {
								this.form.get(D.path).setValue(W);
							});
						}
						setValue(D) {
							this.control.setValue(D);
						}
						onSubmit(D) {
							return (this.submitted = !0), Te(this.form, this._directives), this.ngSubmit.emit(D), !1;
						}
						onReset() {
							this.resetForm();
						}
						resetForm(D) {
							this.form.reset(D), (this.submitted = !1);
						}
						_setUpdateStrategy() {
							this.options &&
								null != this.options.updateOn &&
								(this.form._updateOn = this.options.updateOn);
						}
						_findContainer(D) {
							return D.pop(), D.length ? this.form.get(D) : this.form;
						}
					}
					return (
						(R.ɵfac = function (D) {
							return new (D || R)(m.Y36(ye, 10), m.Y36(Ne, 10));
						}),
						(R.ɵdir = m.lG2({
							type: R,
							selectors: [
								['form', 3, 'ngNoForm', '', 3, 'formGroup', ''],
								['ng-form'],
								['', 'ngForm', ''],
							],
							hostBindings: function (D, W) {
								1 & D &&
									m.NdJ('submit', function (Kt) {
										return W.onSubmit(Kt);
									})('reset', function () {
										return W.onReset();
									});
							},
							inputs: { options: ['ngFormOptions', 'options'] },
							outputs: { ngSubmit: 'ngSubmit' },
							exportAs: ['ngForm'],
							features: [m._Bn([Ki]), m.qOj],
						})),
						R
					);
				})(),
				gi = (() => {
					class R {}
					return (
						(R.ɵfac = function (D) {
							return new (D || R)();
						}),
						(R.ɵmod = m.oAB({ type: R })),
						(R.ɵinj = m.cJS({})),
						R
					);
				})();
			const Cr = { provide: Vt, useExisting: (0, m.Gpc)(() => wr) };
			let wr = (() => {
				class R extends Vt {
					constructor(D, W) {
						super(),
							(this.validators = D),
							(this.asyncValidators = W),
							(this.submitted = !1),
							(this._onCollectionChange = () => this._updateDomValue()),
							(this.directives = []),
							(this.form = null),
							(this.ngSubmit = new m.vpe()),
							this._setValidators(D),
							this._setAsyncValidators(W);
					}
					ngOnChanges(D) {
						this._checkFormPresent(),
							D.hasOwnProperty('form') &&
								(this._updateValidators(),
								this._updateDomValue(),
								this._updateRegistrations(),
								(this._oldForm = this.form));
					}
					ngOnDestroy() {
						this.form &&
							(ue(this.form, this),
							this.form._onCollectionChange === this._onCollectionChange &&
								this.form._registerOnCollectionChange(() => {}));
					}
					get formDirective() {
						return this;
					}
					get control() {
						return this.form;
					}
					get path() {
						return [];
					}
					addControl(D) {
						const W = this.form.get(D.path);
						return Pt(W, D), W.updateValueAndValidity({ emitEvent: !1 }), this.directives.push(D), W;
					}
					getControl(D) {
						return this.form.get(D.path);
					}
					removeControl(D) {
						Yn(D.control || null, D, !1), Le(this.directives, D);
					}
					addFormGroup(D) {
						this._setUpFormContainer(D);
					}
					removeFormGroup(D) {
						this._cleanUpFormContainer(D);
					}
					getFormGroup(D) {
						return this.form.get(D.path);
					}
					addFormArray(D) {
						this._setUpFormContainer(D);
					}
					removeFormArray(D) {
						this._cleanUpFormContainer(D);
					}
					getFormArray(D) {
						return this.form.get(D.path);
					}
					updateModel(D, W) {
						this.form.get(D.path).setValue(W);
					}
					onSubmit(D) {
						return (this.submitted = !0), Te(this.form, this.directives), this.ngSubmit.emit(D), !1;
					}
					onReset() {
						this.resetForm();
					}
					resetForm(D) {
						this.form.reset(D), (this.submitted = !1);
					}
					_updateDomValue() {
						this.directives.forEach((D) => {
							const W = D.control,
								lt = this.form.get(D.path);
							W !== lt && (Yn(W || null, D), Dn(lt) && (Pt(lt, D), (D.control = lt)));
						}),
							this.form._updateTreeValidity({ emitEvent: !1 });
					}
					_setUpFormContainer(D) {
						const W = this.form.get(D.path);
						Ke(W, D), W.updateValueAndValidity({ emitEvent: !1 });
					}
					_cleanUpFormContainer(D) {
						if (this.form) {
							const W = this.form.get(D.path);
							W &&
								(function Ft(R, v) {
									return ue(R, v);
								})(W, D) &&
								W.updateValueAndValidity({ emitEvent: !1 });
						}
					}
					_updateRegistrations() {
						this.form._registerOnCollectionChange(this._onCollectionChange),
							this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
					}
					_updateValidators() {
						He(this.form, this), this._oldForm && ue(this._oldForm, this);
					}
					_checkFormPresent() {}
				}
				return (
					(R.ɵfac = function (D) {
						return new (D || R)(m.Y36(ye, 10), m.Y36(Ne, 10));
					}),
					(R.ɵdir = m.lG2({
						type: R,
						selectors: [['', 'formGroup', '']],
						hostBindings: function (D, W) {
							1 & D &&
								m.NdJ('submit', function (Kt) {
									return W.onSubmit(Kt);
								})('reset', function () {
									return W.onReset();
								});
						},
						inputs: { form: ['formGroup', 'form'] },
						outputs: { ngSubmit: 'ngSubmit' },
						exportAs: ['ngForm'],
						features: [m._Bn([Cr]), m.qOj, m.TTD],
					})),
					R
				);
			})();
			const ns = {
					provide: ye,
					useExisting: (0, m.Gpc)(() => Lr),
					multi: !0,
				},
				is = {
					provide: ye,
					useExisting: (0, m.Gpc)(() => ui),
					multi: !0,
				};
			let Lr = (() => {
					class R {
						constructor() {
							this._required = !1;
						}
						get required() {
							return this._required;
						}
						set required(D) {
							(this._required = null != D && !1 !== D && 'false' != `${D}`),
								this._onChange && this._onChange();
						}
						validate(D) {
							return this.required ? tt(D) : null;
						}
						registerOnValidatorChange(D) {
							this._onChange = D;
						}
					}
					return (
						(R.ɵfac = function (D) {
							return new (D || R)();
						}),
						(R.ɵdir = m.lG2({
							type: R,
							selectors: [
								['', 'required', '', 'formControlName', '', 3, 'type', 'checkbox'],
								['', 'required', '', 'formControl', '', 3, 'type', 'checkbox'],
								['', 'required', '', 'ngModel', '', 3, 'type', 'checkbox'],
							],
							hostVars: 1,
							hostBindings: function (D, W) {
								2 & D && m.uIk('required', W.required ? '' : null);
							},
							inputs: { required: 'required' },
							features: [m._Bn([ns])],
						})),
						R
					);
				})(),
				ui = (() => {
					class R extends Lr {
						validate(D) {
							return this.required ? ot(D) : null;
						}
					}
					return (
						(R.ɵfac = (function () {
							let v;
							return function (W) {
								return (v || (v = m.n5z(R)))(W || R);
							};
						})()),
						(R.ɵdir = m.lG2({
							type: R,
							selectors: [
								['input', 'type', 'checkbox', 'required', '', 'formControlName', ''],
								['input', 'type', 'checkbox', 'required', '', 'formControl', ''],
								['input', 'type', 'checkbox', 'required', '', 'ngModel', ''],
							],
							hostVars: 1,
							hostBindings: function (D, W) {
								2 & D && m.uIk('required', W.required ? '' : null);
							},
							features: [m._Bn([is]), m.qOj],
						})),
						R
					);
				})(),
				pe = (() => {
					class R {}
					return (
						(R.ɵfac = function (D) {
							return new (D || R)();
						}),
						(R.ɵmod = m.oAB({ type: R })),
						(R.ɵinj = m.cJS({ imports: [[gi]] })),
						R
					);
				})(),
				Lt = (() => {
					class R {}
					return (
						(R.ɵfac = function (D) {
							return new (D || R)();
						}),
						(R.ɵmod = m.oAB({ type: R })),
						(R.ɵinj = m.cJS({ imports: [pe] })),
						R
					);
				})();
		},
		7423: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { lW: () => K, ot: () => Re });
			var m = S(5e3),
				P = S(508),
				o = S(6360),
				G = S(5664);
			const be = ['mat-button', ''],
				we = ['*'],
				ae = [
					'mat-button',
					'mat-flat-button',
					'mat-icon-button',
					'mat-raised-button',
					'mat-stroked-button',
					'mat-mini-fab',
					'mat-fab',
				],
				Q = (0, P.pj)(
					(0, P.Id)(
						(0, P.Kr)(
							class {
								constructor(de) {
									this._elementRef = de;
								}
							}
						)
					)
				);
			let K = (() => {
					class de extends Q {
						constructor($e, ye, Ne) {
							super($e),
								(this._focusMonitor = ye),
								(this._animationMode = Ne),
								(this.isRoundButton = this._hasHostAttributes('mat-fab', 'mat-mini-fab')),
								(this.isIconButton = this._hasHostAttributes('mat-icon-button'));
							for (const rt of ae)
								this._hasHostAttributes(rt) && this._getHostElement().classList.add(rt);
							$e.nativeElement.classList.add('mat-button-base'),
								this.isRoundButton && (this.color = 'accent');
						}
						ngAfterViewInit() {
							this._focusMonitor.monitor(this._elementRef, !0);
						}
						ngOnDestroy() {
							this._focusMonitor.stopMonitoring(this._elementRef);
						}
						focus($e, ye) {
							$e
								? this._focusMonitor.focusVia(this._getHostElement(), $e, ye)
								: this._getHostElement().focus(ye);
						}
						_getHostElement() {
							return this._elementRef.nativeElement;
						}
						_isRippleDisabled() {
							return this.disableRipple || this.disabled;
						}
						_hasHostAttributes(...$e) {
							return $e.some((ye) => this._getHostElement().hasAttribute(ye));
						}
					}
					return (
						(de.ɵfac = function ($e) {
							return new ($e || de)(m.Y36(m.SBq), m.Y36(G.tE), m.Y36(o.Qb, 8));
						}),
						(de.ɵcmp = m.Xpm({
							type: de,
							selectors: [
								['button', 'mat-button', ''],
								['button', 'mat-raised-button', ''],
								['button', 'mat-icon-button', ''],
								['button', 'mat-fab', ''],
								['button', 'mat-mini-fab', ''],
								['button', 'mat-stroked-button', ''],
								['button', 'mat-flat-button', ''],
							],
							viewQuery: function ($e, ye) {
								if ((1 & $e && m.Gf(P.wG, 5), 2 & $e)) {
									let Ne;
									m.iGM((Ne = m.CRH())) && (ye.ripple = Ne.first);
								}
							},
							hostAttrs: [1, 'mat-focus-indicator'],
							hostVars: 5,
							hostBindings: function ($e, ye) {
								2 & $e &&
									(m.uIk('disabled', ye.disabled || null),
									m.ekj('_mat-animation-noopable', 'NoopAnimations' === ye._animationMode)(
										'mat-button-disabled',
										ye.disabled
									));
							},
							inputs: {
								disabled: 'disabled',
								disableRipple: 'disableRipple',
								color: 'color',
							},
							exportAs: ['matButton'],
							features: [m.qOj],
							attrs: be,
							ngContentSelectors: we,
							decls: 4,
							vars: 5,
							consts: [
								[1, 'mat-button-wrapper'],
								[
									'matRipple',
									'',
									1,
									'mat-button-ripple',
									3,
									'matRippleDisabled',
									'matRippleCentered',
									'matRippleTrigger',
								],
								[1, 'mat-button-focus-overlay'],
							],
							template: function ($e, ye) {
								1 & $e &&
									(m.F$t(),
									m.TgZ(0, 'span', 0),
									m.Hsn(1),
									m.qZA(),
									m._UZ(2, 'span', 1),
									m._UZ(3, 'span', 2)),
									2 & $e &&
										(m.xp6(2),
										m.ekj('mat-button-ripple-round', ye.isRoundButton || ye.isIconButton),
										m.Q6J('matRippleDisabled', ye._isRippleDisabled())(
											'matRippleCentered',
											ye.isIconButton
										)('matRippleTrigger', ye._getHostElement()));
							},
							directives: [P.wG],
							styles: [
								'.mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n',
							],
							encapsulation: 2,
							changeDetection: 0,
						})),
						de
					);
				})(),
				Re = (() => {
					class de {}
					return (
						(de.ɵfac = function ($e) {
							return new ($e || de)();
						}),
						(de.ɵmod = m.oAB({ type: de })),
						(de.ɵinj = m.cJS({ imports: [[P.si, P.BQ], P.BQ] })),
						de
					);
				})();
		},
		9224: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { a8: () => Ge, QW: () => ot });
			var m = S(5e3),
				P = S(6360),
				o = S(508);
			const G = ['*', [['mat-card-footer']]],
				be = ['*', 'mat-card-footer'];
			let Ge = (() => {
					class J {
						constructor(ce) {
							this._animationMode = ce;
						}
					}
					return (
						(J.ɵfac = function (ce) {
							return new (ce || J)(m.Y36(P.Qb, 8));
						}),
						(J.ɵcmp = m.Xpm({
							type: J,
							selectors: [['mat-card']],
							hostAttrs: [1, 'mat-card', 'mat-focus-indicator'],
							hostVars: 2,
							hostBindings: function (ce, Pe) {
								2 & ce && m.ekj('_mat-animation-noopable', 'NoopAnimations' === Pe._animationMode);
							},
							exportAs: ['matCard'],
							ngContentSelectors: be,
							decls: 2,
							vars: 0,
							template: function (ce, Pe) {
								1 & ce && (m.F$t(G), m.Hsn(0), m.Hsn(1, 1));
							},
							styles: [
								'.mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n',
							],
							encapsulation: 2,
							changeDetection: 0,
						})),
						J
					);
				})(),
				ot = (() => {
					class J {}
					return (
						(J.ɵfac = function (ce) {
							return new (ce || J)();
						}),
						(J.ɵmod = m.oAB({ type: J })),
						(J.ɵinj = m.cJS({ imports: [[o.BQ], o.BQ] })),
						J
					);
				})();
		},
		508: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, {
				yN: () => ye,
				mZ: () => Ne,
				_A: () => Ht,
				rD: () => ft,
				sG: () => nt,
				Y2: () => Ye,
				BQ: () => ge,
				X2: () => Je,
				uc: () => It,
				XK: () => Wt,
				Ng: () => gn,
				rN: () => On,
				nP: () => re,
				us: () => et,
				wG: () => xe,
				si: () => X,
				IR: () => U,
				CB: () => Pt,
				jH: () => Yn,
				pj: () => ce,
				Kr: () => Pe,
				Id: () => We,
				FD: () => Ue,
				sb: () => Ie,
				E0: () => Fe,
			});
			var m = S(5e3),
				P = S(226),
				G = S(9808),
				be = S(925),
				we = S(5664),
				_e = S(3191),
				De = S(7579),
				ae = S(8675),
				Q = S(6360);
			let ye = (() => {
					class Me {}
					return (
						(Me.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)'),
						(Me.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)'),
						(Me.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)'),
						(Me.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)'),
						Me
					);
				})(),
				Ne = (() => {
					class Me {}
					return (Me.COMPLEX = '375ms'), (Me.ENTERING = '225ms'), (Me.EXITING = '195ms'), Me;
				})();
			const Ge = new m.OlP('mat-sanity-checks', {
				providedIn: 'root',
				factory: function at() {
					return !0;
				},
			});
			let ge = (() => {
				class Me {
					constructor(ue, oe, he) {
						(this._sanityChecks = oe),
							(this._document = he),
							(this._hasDoneGlobalChecks = !1),
							ue._applyBodyHighContrastModeCssClasses(),
							this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
					}
					_checkIsEnabled(ue) {
						return (
							!(0, be.Oy)() &&
							('boolean' == typeof this._sanityChecks ? this._sanityChecks : !!this._sanityChecks[ue])
						);
					}
				}
				return (
					(Me.ɵfac = function (ue) {
						return new (ue || Me)(m.LFG(we.qm), m.LFG(Ge, 8), m.LFG(G.K0));
					}),
					(Me.ɵmod = m.oAB({ type: Me })),
					(Me.ɵinj = m.cJS({ imports: [[P.vT], P.vT] })),
					Me
				);
			})();
			function We(Me) {
				return class extends Me {
					constructor(...He) {
						super(...He), (this._disabled = !1);
					}
					get disabled() {
						return this._disabled;
					}
					set disabled(He) {
						this._disabled = (0, _e.Ig)(He);
					}
				};
			}
			function ce(Me, He) {
				return class extends Me {
					constructor(...ue) {
						super(...ue), (this.defaultColor = He), (this.color = He);
					}
					get color() {
						return this._color;
					}
					set color(ue) {
						const oe = ue || this.defaultColor;
						oe !== this._color &&
							(this._color && this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),
							oe && this._elementRef.nativeElement.classList.add(`mat-${oe}`),
							(this._color = oe));
					}
				};
			}
			function Pe(Me) {
				return class extends Me {
					constructor(...He) {
						super(...He), (this._disableRipple = !1);
					}
					get disableRipple() {
						return this._disableRipple;
					}
					set disableRipple(He) {
						this._disableRipple = (0, _e.Ig)(He);
					}
				};
			}
			function Ie(Me, He = 0) {
				return class extends Me {
					constructor(...ue) {
						super(...ue), (this._tabIndex = He), (this.defaultTabIndex = He);
					}
					get tabIndex() {
						return this.disabled ? -1 : this._tabIndex;
					}
					set tabIndex(ue) {
						this._tabIndex = null != ue ? (0, _e.su)(ue) : this.defaultTabIndex;
					}
				};
			}
			function Ue(Me) {
				return class extends Me {
					constructor(...He) {
						super(...He), (this.stateChanges = new De.x()), (this.errorState = !1);
					}
					updateErrorState() {
						const He = this.errorState,
							ee = (this.errorStateMatcher || this._defaultErrorStateMatcher).isErrorState(
								this.ngControl ? this.ngControl.control : null,
								this._parentFormGroup || this._parentForm
							);
						ee !== He && ((this.errorState = ee), this.stateChanges.next());
					}
				};
			}
			const Xe = new m.OlP('MAT_DATE_LOCALE', {
				providedIn: 'root',
				factory: function Rt() {
					return (0, m.f3M)(m.soG);
				},
			});
			class Ht {
				constructor() {
					(this._localeChanges = new De.x()), (this.localeChanges = this._localeChanges);
				}
				getValidDateOrNull(He) {
					return this.isDateInstance(He) && this.isValid(He) ? He : null;
				}
				deserialize(He) {
					return null == He || (this.isDateInstance(He) && this.isValid(He)) ? He : this.invalid();
				}
				setLocale(He) {
					(this.locale = He), this._localeChanges.next();
				}
				compareDate(He, ue) {
					return (
						this.getYear(He) - this.getYear(ue) ||
						this.getMonth(He) - this.getMonth(ue) ||
						this.getDate(He) - this.getDate(ue)
					);
				}
				sameDate(He, ue) {
					if (He && ue) {
						let oe = this.isValid(He),
							he = this.isValid(ue);
						return oe && he ? !this.compareDate(He, ue) : oe == he;
					}
					return He == ue;
				}
				clampDate(He, ue, oe) {
					return ue && this.compareDate(He, ue) < 0 ? ue : oe && this.compareDate(He, oe) > 0 ? oe : He;
				}
			}
			const nt = new m.OlP('mat-date-formats'),
				gt = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
			function ke(Me, He) {
				const ue = Array(Me);
				for (let oe = 0; oe < Me; oe++) ue[oe] = He(oe);
				return ue;
			}
			let yt = (() => {
				class Me extends Ht {
					constructor(ue, oe) {
						super(), (this.useUtcForDisplay = !1), super.setLocale(ue);
					}
					getYear(ue) {
						return ue.getFullYear();
					}
					getMonth(ue) {
						return ue.getMonth();
					}
					getDate(ue) {
						return ue.getDate();
					}
					getDayOfWeek(ue) {
						return ue.getDay();
					}
					getMonthNames(ue) {
						const oe = new Intl.DateTimeFormat(this.locale, {
							month: ue,
							timeZone: 'utc',
						});
						return ke(12, (he) => this._format(oe, new Date(2017, he, 1)));
					}
					getDateNames() {
						const ue = new Intl.DateTimeFormat(this.locale, {
							day: 'numeric',
							timeZone: 'utc',
						});
						return ke(31, (oe) => this._format(ue, new Date(2017, 0, oe + 1)));
					}
					getDayOfWeekNames(ue) {
						const oe = new Intl.DateTimeFormat(this.locale, {
							weekday: ue,
							timeZone: 'utc',
						});
						return ke(7, (he) => this._format(oe, new Date(2017, 0, he + 1)));
					}
					getYearName(ue) {
						const oe = new Intl.DateTimeFormat(this.locale, {
							year: 'numeric',
							timeZone: 'utc',
						});
						return this._format(oe, ue);
					}
					getFirstDayOfWeek() {
						return 0;
					}
					getNumDaysInMonth(ue) {
						return this.getDate(this._createDateWithOverflow(this.getYear(ue), this.getMonth(ue) + 1, 0));
					}
					clone(ue) {
						return new Date(ue.getTime());
					}
					createDate(ue, oe, he) {
						let ee = this._createDateWithOverflow(ue, oe, he);
						return ee.getMonth(), ee;
					}
					today() {
						return new Date();
					}
					parse(ue) {
						return 'number' == typeof ue ? new Date(ue) : ue ? new Date(Date.parse(ue)) : null;
					}
					format(ue, oe) {
						if (!this.isValid(ue)) throw Error('NativeDateAdapter: Cannot format invalid date.');
						const he = new Intl.DateTimeFormat(
							this.locale,
							Object.assign(Object.assign({}, oe), {
								timeZone: 'utc',
							})
						);
						return this._format(he, ue);
					}
					addCalendarYears(ue, oe) {
						return this.addCalendarMonths(ue, 12 * oe);
					}
					addCalendarMonths(ue, oe) {
						let he = this._createDateWithOverflow(
							this.getYear(ue),
							this.getMonth(ue) + oe,
							this.getDate(ue)
						);
						return (
							this.getMonth(he) != (((this.getMonth(ue) + oe) % 12) + 12) % 12 &&
								(he = this._createDateWithOverflow(this.getYear(he), this.getMonth(he), 0)),
							he
						);
					}
					addCalendarDays(ue, oe) {
						return this._createDateWithOverflow(this.getYear(ue), this.getMonth(ue), this.getDate(ue) + oe);
					}
					toIso8601(ue) {
						return [
							ue.getUTCFullYear(),
							this._2digit(ue.getUTCMonth() + 1),
							this._2digit(ue.getUTCDate()),
						].join('-');
					}
					deserialize(ue) {
						if ('string' == typeof ue) {
							if (!ue) return null;
							if (gt.test(ue)) {
								let oe = new Date(ue);
								if (this.isValid(oe)) return oe;
							}
						}
						return super.deserialize(ue);
					}
					isDateInstance(ue) {
						return ue instanceof Date;
					}
					isValid(ue) {
						return !isNaN(ue.getTime());
					}
					invalid() {
						return new Date(NaN);
					}
					_createDateWithOverflow(ue, oe, he) {
						const ee = new Date();
						return ee.setFullYear(ue, oe, he), ee.setHours(0, 0, 0, 0), ee;
					}
					_2digit(ue) {
						return ('00' + ue).slice(-2);
					}
					_format(ue, oe) {
						const he = new Date();
						return (
							he.setUTCFullYear(oe.getFullYear(), oe.getMonth(), oe.getDate()),
							he.setUTCHours(oe.getHours(), oe.getMinutes(), oe.getSeconds(), oe.getMilliseconds()),
							ue.format(he)
						);
					}
				}
				return (
					(Me.ɵfac = function (ue) {
						return new (ue || Me)(m.LFG(Xe, 8), m.LFG(be.t4));
					}),
					(Me.ɵprov = m.Yz7({ token: Me, factory: Me.ɵfac })),
					Me
				);
			})();
			const xt = {
				parse: { dateInput: null },
				display: {
					dateInput: {
						year: 'numeric',
						month: 'numeric',
						day: 'numeric',
					},
					monthYearLabel: { year: 'numeric', month: 'short' },
					dateA11yLabel: {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					},
					monthYearA11yLabel: { year: 'numeric', month: 'long' },
				},
			};
			let sn = (() => {
					class Me {}
					return (
						(Me.ɵfac = function (ue) {
							return new (ue || Me)();
						}),
						(Me.ɵmod = m.oAB({ type: Me })),
						(Me.ɵinj = m.cJS({
							providers: [{ provide: Ht, useClass: yt }],
							imports: [[be.ud]],
						})),
						Me
					);
				})(),
				Wt = (() => {
					class Me {}
					return (
						(Me.ɵfac = function (ue) {
							return new (ue || Me)();
						}),
						(Me.ɵmod = m.oAB({ type: Me })),
						(Me.ɵinj = m.cJS({
							providers: [{ provide: nt, useValue: xt }],
							imports: [[sn]],
						})),
						Me
					);
				})(),
				ft = (() => {
					class Me {
						isErrorState(ue, oe) {
							return !!(ue && ue.invalid && (ue.touched || (oe && oe.submitted)));
						}
					}
					return (
						(Me.ɵfac = function (ue) {
							return new (ue || Me)();
						}),
						(Me.ɵprov = m.Yz7({
							token: Me,
							factory: Me.ɵfac,
							providedIn: 'root',
						})),
						Me
					);
				})(),
				Je = (() => {
					class Me {}
					return (
						(Me.ɵfac = function (ue) {
							return new (ue || Me)();
						}),
						(Me.ɵdir = m.lG2({
							type: Me,
							selectors: [
								['', 'mat-line', ''],
								['', 'matLine', ''],
							],
							hostAttrs: [1, 'mat-line'],
						})),
						Me
					);
				})();
			function Fe(Me, He, ue = 'mat') {
				Me.changes.pipe((0, ae.O)(Me)).subscribe(({ length: oe }) => {
					Ct(He, `${ue}-2-line`, !1),
						Ct(He, `${ue}-3-line`, !1),
						Ct(He, `${ue}-multi-line`, !1),
						2 === oe || 3 === oe
							? Ct(He, `${ue}-${oe}-line`, !0)
							: oe > 3 && Ct(He, `${ue}-multi-line`, !0);
				});
			}
			function Ct(Me, He, ue) {
				Me.nativeElement.classList.toggle(He, ue);
			}
			let It = (() => {
				class Me {}
				return (
					(Me.ɵfac = function (ue) {
						return new (ue || Me)();
					}),
					(Me.ɵmod = m.oAB({ type: Me })),
					(Me.ɵinj = m.cJS({ imports: [[ge], ge] })),
					Me
				);
			})();
			class Bt {
				constructor(He, ue, oe) {
					(this._renderer = He), (this.element = ue), (this.config = oe), (this.state = 3);
				}
				fadeOut() {
					this._renderer.fadeOutRipple(this);
				}
			}
			const Vt = { enterDuration: 225, exitDuration: 150 },
				bn = (0, be.i$)({ passive: !0 }),
				Oe = ['mousedown', 'touchstart'],
				F = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
			class U {
				constructor(He, ue, oe, he) {
					(this._target = He),
						(this._ngZone = ue),
						(this._isPointerDown = !1),
						(this._activeRipples = new Set()),
						(this._pointerUpEventsRegistered = !1),
						he.isBrowser && (this._containerElement = (0, _e.fI)(oe));
				}
				fadeInRipple(He, ue, oe = {}) {
					const he = (this._containerRect =
							this._containerRect || this._containerElement.getBoundingClientRect()),
						ee = Object.assign(Object.assign({}, Vt), oe.animation);
					oe.centered && ((He = he.left + he.width / 2), (ue = he.top + he.height / 2));
					const je =
							oe.radius ||
							(function fe(Me, He, ue) {
								const oe = Math.max(Math.abs(Me - ue.left), Math.abs(Me - ue.right)),
									he = Math.max(Math.abs(He - ue.top), Math.abs(He - ue.bottom));
								return Math.sqrt(oe * oe + he * he);
							})(He, ue, he),
						Ke = He - he.left,
						Ft = ue - he.top,
						wn = ee.enterDuration,
						_n = document.createElement('div');
					_n.classList.add('mat-ripple-element'),
						(_n.style.left = Ke - je + 'px'),
						(_n.style.top = Ft - je + 'px'),
						(_n.style.height = 2 * je + 'px'),
						(_n.style.width = 2 * je + 'px'),
						null != oe.color && (_n.style.backgroundColor = oe.color),
						(_n.style.transitionDuration = `${wn}ms`),
						this._containerElement.appendChild(_n),
						(function te(Me) {
							window.getComputedStyle(Me).getPropertyValue('opacity');
						})(_n),
						(_n.style.transform = 'scale(1)');
					const Un = new Bt(this, _n, oe);
					return (
						(Un.state = 0),
						this._activeRipples.add(Un),
						oe.persistent || (this._mostRecentTransientRipple = Un),
						this._runTimeoutOutsideZone(() => {
							const qe = Un === this._mostRecentTransientRipple;
							(Un.state = 1), !oe.persistent && (!qe || !this._isPointerDown) && Un.fadeOut();
						}, wn),
						Un
					);
				}
				fadeOutRipple(He) {
					const ue = this._activeRipples.delete(He);
					if (
						(He === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null),
						this._activeRipples.size || (this._containerRect = null),
						!ue)
					)
						return;
					const oe = He.element,
						he = Object.assign(Object.assign({}, Vt), He.config.animation);
					(oe.style.transitionDuration = `${he.exitDuration}ms`),
						(oe.style.opacity = '0'),
						(He.state = 2),
						this._runTimeoutOutsideZone(() => {
							(He.state = 3), oe.remove();
						}, he.exitDuration);
				}
				fadeOutAll() {
					this._activeRipples.forEach((He) => He.fadeOut());
				}
				fadeOutAllNonPersistent() {
					this._activeRipples.forEach((He) => {
						He.config.persistent || He.fadeOut();
					});
				}
				setupTriggerEvents(He) {
					const ue = (0, _e.fI)(He);
					!ue ||
						ue === this._triggerElement ||
						(this._removeTriggerEvents(), (this._triggerElement = ue), this._registerEvents(Oe));
				}
				handleEvent(He) {
					'mousedown' === He.type
						? this._onMousedown(He)
						: 'touchstart' === He.type
						? this._onTouchStart(He)
						: this._onPointerUp(),
						this._pointerUpEventsRegistered ||
							(this._registerEvents(F), (this._pointerUpEventsRegistered = !0));
				}
				_onMousedown(He) {
					const ue = (0, we.X6)(He),
						oe = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + 800;
					!this._target.rippleDisabled &&
						!ue &&
						!oe &&
						((this._isPointerDown = !0),
						this.fadeInRipple(He.clientX, He.clientY, this._target.rippleConfig));
				}
				_onTouchStart(He) {
					if (!this._target.rippleDisabled && !(0, we.yG)(He)) {
						(this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
						const ue = He.changedTouches;
						for (let oe = 0; oe < ue.length; oe++)
							this.fadeInRipple(ue[oe].clientX, ue[oe].clientY, this._target.rippleConfig);
					}
				}
				_onPointerUp() {
					!this._isPointerDown ||
						((this._isPointerDown = !1),
						this._activeRipples.forEach((He) => {
							!He.config.persistent &&
								(1 === He.state || (He.config.terminateOnPointerUp && 0 === He.state)) &&
								He.fadeOut();
						}));
				}
				_runTimeoutOutsideZone(He, ue = 0) {
					this._ngZone.runOutsideAngular(() => setTimeout(He, ue));
				}
				_registerEvents(He) {
					this._ngZone.runOutsideAngular(() => {
						He.forEach((ue) => {
							this._triggerElement.addEventListener(ue, this, bn);
						});
					});
				}
				_removeTriggerEvents() {
					this._triggerElement &&
						(Oe.forEach((He) => {
							this._triggerElement.removeEventListener(He, this, bn);
						}),
						this._pointerUpEventsRegistered &&
							F.forEach((He) => {
								this._triggerElement.removeEventListener(He, this, bn);
							}));
				}
			}
			const Ye = new m.OlP('mat-ripple-global-options');
			let xe = (() => {
					class Me {
						constructor(ue, oe, he, ee, je) {
							(this._elementRef = ue),
								(this._animationMode = je),
								(this.radius = 0),
								(this._disabled = !1),
								(this._isInitialized = !1),
								(this._globalOptions = ee || {}),
								(this._rippleRenderer = new U(this, oe, ue, he));
						}
						get disabled() {
							return this._disabled;
						}
						set disabled(ue) {
							ue && this.fadeOutAllNonPersistent(),
								(this._disabled = ue),
								this._setupTriggerEventsIfEnabled();
						}
						get trigger() {
							return this._trigger || this._elementRef.nativeElement;
						}
						set trigger(ue) {
							(this._trigger = ue), this._setupTriggerEventsIfEnabled();
						}
						ngOnInit() {
							(this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
						}
						ngOnDestroy() {
							this._rippleRenderer._removeTriggerEvents();
						}
						fadeOutAll() {
							this._rippleRenderer.fadeOutAll();
						}
						fadeOutAllNonPersistent() {
							this._rippleRenderer.fadeOutAllNonPersistent();
						}
						get rippleConfig() {
							return {
								centered: this.centered,
								radius: this.radius,
								color: this.color,
								animation: Object.assign(
									Object.assign(
										Object.assign({}, this._globalOptions.animation),
										'NoopAnimations' === this._animationMode
											? {
													enterDuration: 0,
													exitDuration: 0,
											  }
											: {}
									),
									this.animation
								),
								terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
							};
						}
						get rippleDisabled() {
							return this.disabled || !!this._globalOptions.disabled;
						}
						_setupTriggerEventsIfEnabled() {
							!this.disabled &&
								this._isInitialized &&
								this._rippleRenderer.setupTriggerEvents(this.trigger);
						}
						launch(ue, oe = 0, he) {
							return 'number' == typeof ue
								? this._rippleRenderer.fadeInRipple(
										ue,
										oe,
										Object.assign(Object.assign({}, this.rippleConfig), he)
								  )
								: this._rippleRenderer.fadeInRipple(
										0,
										0,
										Object.assign(Object.assign({}, this.rippleConfig), ue)
								  );
						}
					}
					return (
						(Me.ɵfac = function (ue) {
							return new (ue || Me)(
								m.Y36(m.SBq),
								m.Y36(m.R0b),
								m.Y36(be.t4),
								m.Y36(Ye, 8),
								m.Y36(Q.Qb, 8)
							);
						}),
						(Me.ɵdir = m.lG2({
							type: Me,
							selectors: [
								['', 'mat-ripple', ''],
								['', 'matRipple', ''],
							],
							hostAttrs: [1, 'mat-ripple'],
							hostVars: 2,
							hostBindings: function (ue, oe) {
								2 & ue && m.ekj('mat-ripple-unbounded', oe.unbounded);
							},
							inputs: {
								color: ['matRippleColor', 'color'],
								unbounded: ['matRippleUnbounded', 'unbounded'],
								centered: ['matRippleCentered', 'centered'],
								radius: ['matRippleRadius', 'radius'],
								animation: ['matRippleAnimation', 'animation'],
								disabled: ['matRippleDisabled', 'disabled'],
								trigger: ['matRippleTrigger', 'trigger'],
							},
							exportAs: ['matRipple'],
						})),
						Me
					);
				})(),
				X = (() => {
					class Me {}
					return (
						(Me.ɵfac = function (ue) {
							return new (ue || Me)();
						}),
						(Me.ɵmod = m.oAB({ type: Me })),
						(Me.ɵinj = m.cJS({ imports: [[ge, be.ud], ge] })),
						Me
					);
				})(),
				re = (() => {
					class Me {
						constructor(ue) {
							(this._animationMode = ue), (this.state = 'unchecked'), (this.disabled = !1);
						}
					}
					return (
						(Me.ɵfac = function (ue) {
							return new (ue || Me)(m.Y36(Q.Qb, 8));
						}),
						(Me.ɵcmp = m.Xpm({
							type: Me,
							selectors: [['mat-pseudo-checkbox']],
							hostAttrs: [1, 'mat-pseudo-checkbox'],
							hostVars: 8,
							hostBindings: function (ue, oe) {
								2 & ue &&
									m.ekj('mat-pseudo-checkbox-indeterminate', 'indeterminate' === oe.state)(
										'mat-pseudo-checkbox-checked',
										'checked' === oe.state
									)('mat-pseudo-checkbox-disabled', oe.disabled)(
										'_mat-animation-noopable',
										'NoopAnimations' === oe._animationMode
									);
							},
							inputs: { state: 'state', disabled: 'disabled' },
							decls: 0,
							vars: 0,
							template: function (ue, oe) {},
							styles: [
								'.mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n',
							],
							encapsulation: 2,
							changeDetection: 0,
						})),
						Me
					);
				})(),
				et = (() => {
					class Me {}
					return (
						(Me.ɵfac = function (ue) {
							return new (ue || Me)();
						}),
						(Me.ɵmod = m.oAB({ type: Me })),
						(Me.ɵinj = m.cJS({ imports: [[ge]] })),
						Me
					);
				})();
			class On {
				constructor(He, ue = !1) {
					(this.source = He), (this.isUserInput = ue);
				}
			}
			function Pt(Me, He, ue) {
				if (ue.length) {
					let oe = He.toArray(),
						he = ue.toArray(),
						ee = 0;
					for (let je = 0; je < Me + 1; je++) oe[je].group && oe[je].group === he[ee] && ee++;
					return ee;
				}
				return 0;
			}
			function Yn(Me, He, ue, oe) {
				return Me < ue ? Me : Me + He > ue + oe ? Math.max(0, Me - oe + He) : ue;
			}
			let gn = (() => {
				class Me {}
				return (
					(Me.ɵfac = function (ue) {
						return new (ue || Me)();
					}),
					(Me.ɵmod = m.oAB({ type: Me })),
					(Me.ɵinj = m.cJS({ imports: [[X, G.ez, ge, et]] })),
					Me
				);
			})();
		},
		288: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, {
				pp: () => sn,
				To: () => Wt,
				ib: () => Rt,
				u4: () => yt,
				yz: () => ke,
				yK: () => xt,
			});
			var m = S(3262),
				P = S(7429),
				o = S(9808),
				G = S(5e3),
				be = S(508),
				we = S(3191),
				_e = S(5664),
				De = S(1884),
				ae = S(8675),
				Q = S(9300),
				K = S(5698),
				q = S(1159),
				Re = S(6360),
				de = S(7579),
				Be = S(727),
				$e = S(515),
				ye = S(6451),
				Ne = S(1777),
				rt = S(449);
			const at = ['body'];
			function Ge(Ot, ft) {}
			const ge = [[['mat-expansion-panel-header']], '*', [['mat-action-row']]],
				tt = ['mat-expansion-panel-header', '*', 'mat-action-row'];
			function ot(Ot, ft) {
				if ((1 & Ot && G._UZ(0, 'span', 2), 2 & Ot)) {
					const Je = G.oxw();
					G.Q6J('@indicatorRotate', Je._getExpandedState());
				}
			}
			const J = [[['mat-panel-title']], [['mat-panel-description']], '*'],
				We = ['mat-panel-title', 'mat-panel-description', '*'],
				ce = new G.OlP('MAT_ACCORDION'),
				Pe = '225ms cubic-bezier(0.4,0.0,0.2,1)',
				Ie = {
					indicatorRotate: (0, Ne.X$)('indicatorRotate', [
						(0, Ne.SB)('collapsed, void', (0, Ne.oB)({ transform: 'rotate(0deg)' })),
						(0, Ne.SB)('expanded', (0, Ne.oB)({ transform: 'rotate(180deg)' })),
						(0, Ne.eR)('expanded <=> collapsed, void => collapsed', (0, Ne.jt)(Pe)),
					]),
					bodyExpansion: (0, Ne.X$)('bodyExpansion', [
						(0, Ne.SB)('collapsed, void', (0, Ne.oB)({ height: '0px', visibility: 'hidden' })),
						(0, Ne.SB)('expanded', (0, Ne.oB)({ height: '*', visibility: 'visible' })),
						(0, Ne.eR)('expanded <=> collapsed, void => collapsed', (0, Ne.jt)(Pe)),
					]),
				};
			let Ue = (() => {
					class Ot {
						constructor(Je) {
							this._template = Je;
						}
					}
					return (
						(Ot.ɵfac = function (Je) {
							return new (Je || Ot)(G.Y36(G.Rgc));
						}),
						(Ot.ɵdir = G.lG2({
							type: Ot,
							selectors: [['ng-template', 'matExpansionPanelContent', '']],
						})),
						Ot
					);
				})(),
				ut = 0;
			const Xe = new G.OlP('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
			let Rt = (() => {
				class Ot extends m.dD {
					constructor(Je, Fe, Ct, It, Bt, Vt, en) {
						super(Je, Fe, Ct),
							(this._viewContainerRef = It),
							(this._animationMode = Vt),
							(this._hideToggle = !1),
							(this.afterExpand = new G.vpe()),
							(this.afterCollapse = new G.vpe()),
							(this._inputChanges = new de.x()),
							(this._headerId = 'mat-expansion-panel-header-' + ut++),
							(this._bodyAnimationDone = new de.x()),
							(this.accordion = Je),
							(this._document = Bt),
							this._bodyAnimationDone
								.pipe((0, De.x)((bn, Oe) => bn.fromState === Oe.fromState && bn.toState === Oe.toState))
								.subscribe((bn) => {
									'void' !== bn.fromState &&
										('expanded' === bn.toState
											? this.afterExpand.emit()
											: 'collapsed' === bn.toState && this.afterCollapse.emit());
								}),
							en && (this.hideToggle = en.hideToggle);
					}
					get hideToggle() {
						return this._hideToggle || (this.accordion && this.accordion.hideToggle);
					}
					set hideToggle(Je) {
						this._hideToggle = (0, we.Ig)(Je);
					}
					get togglePosition() {
						return this._togglePosition || (this.accordion && this.accordion.togglePosition);
					}
					set togglePosition(Je) {
						this._togglePosition = Je;
					}
					_hasSpacing() {
						return !!this.accordion && this.expanded && 'default' === this.accordion.displayMode;
					}
					_getExpandedState() {
						return this.expanded ? 'expanded' : 'collapsed';
					}
					toggle() {
						this.expanded = !this.expanded;
					}
					close() {
						this.expanded = !1;
					}
					open() {
						this.expanded = !0;
					}
					ngAfterContentInit() {
						this._lazyContent &&
							this.opened
								.pipe(
									(0, ae.O)(null),
									(0, Q.h)(() => this.expanded && !this._portal),
									(0, K.q)(1)
								)
								.subscribe(() => {
									this._portal = new P.UE(this._lazyContent._template, this._viewContainerRef);
								});
					}
					ngOnChanges(Je) {
						this._inputChanges.next(Je);
					}
					ngOnDestroy() {
						super.ngOnDestroy(), this._bodyAnimationDone.complete(), this._inputChanges.complete();
					}
					_containsFocus() {
						if (this._body) {
							const Je = this._document.activeElement,
								Fe = this._body.nativeElement;
							return Je === Fe || Fe.contains(Je);
						}
						return !1;
					}
				}
				return (
					(Ot.ɵfac = function (Je) {
						return new (Je || Ot)(
							G.Y36(ce, 12),
							G.Y36(G.sBO),
							G.Y36(rt.A8),
							G.Y36(G.s_b),
							G.Y36(o.K0),
							G.Y36(Re.Qb, 8),
							G.Y36(Xe, 8)
						);
					}),
					(Ot.ɵcmp = G.Xpm({
						type: Ot,
						selectors: [['mat-expansion-panel']],
						contentQueries: function (Je, Fe, Ct) {
							if ((1 & Je && G.Suo(Ct, Ue, 5), 2 & Je)) {
								let It;
								G.iGM((It = G.CRH())) && (Fe._lazyContent = It.first);
							}
						},
						viewQuery: function (Je, Fe) {
							if ((1 & Je && G.Gf(at, 5), 2 & Je)) {
								let Ct;
								G.iGM((Ct = G.CRH())) && (Fe._body = Ct.first);
							}
						},
						hostAttrs: [1, 'mat-expansion-panel'],
						hostVars: 6,
						hostBindings: function (Je, Fe) {
							2 & Je &&
								G.ekj('mat-expanded', Fe.expanded)(
									'_mat-animation-noopable',
									'NoopAnimations' === Fe._animationMode
								)('mat-expansion-panel-spacing', Fe._hasSpacing());
						},
						inputs: {
							disabled: 'disabled',
							expanded: 'expanded',
							hideToggle: 'hideToggle',
							togglePosition: 'togglePosition',
						},
						outputs: {
							opened: 'opened',
							closed: 'closed',
							expandedChange: 'expandedChange',
							afterExpand: 'afterExpand',
							afterCollapse: 'afterCollapse',
						},
						exportAs: ['matExpansionPanel'],
						features: [G._Bn([{ provide: ce, useValue: void 0 }]), G.qOj, G.TTD],
						ngContentSelectors: tt,
						decls: 7,
						vars: 4,
						consts: [
							['role', 'region', 1, 'mat-expansion-panel-content', 3, 'id'],
							['body', ''],
							[1, 'mat-expansion-panel-body'],
							[3, 'cdkPortalOutlet'],
						],
						template: function (Je, Fe) {
							1 & Je &&
								(G.F$t(ge),
								G.Hsn(0),
								G.TgZ(1, 'div', 0, 1),
								G.NdJ('@bodyExpansion.done', function (It) {
									return Fe._bodyAnimationDone.next(It);
								}),
								G.TgZ(3, 'div', 2),
								G.Hsn(4, 1),
								G.YNc(5, Ge, 0, 0, 'ng-template', 3),
								G.qZA(),
								G.Hsn(6, 2),
								G.qZA()),
								2 & Je &&
									(G.xp6(1),
									G.Q6J('@bodyExpansion', Fe._getExpandedState())('id', Fe.id),
									G.uIk('aria-labelledby', Fe._headerId),
									G.xp6(4),
									G.Q6J('cdkPortalOutlet', Fe._portal));
						},
						directives: [P.Pl],
						styles: [
							'.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n',
						],
						encapsulation: 2,
						data: { animation: [Ie.bodyExpansion] },
						changeDetection: 0,
					})),
					Ot
				);
			})();
			class nt {}
			const gt = (0, be.sb)(nt);
			let ke = (() => {
					class Ot extends gt {
						constructor(Je, Fe, Ct, It, Bt, Vt, en) {
							super(),
								(this.panel = Je),
								(this._element = Fe),
								(this._focusMonitor = Ct),
								(this._changeDetectorRef = It),
								(this._animationMode = Vt),
								(this._parentChangeSubscription = Be.w0.EMPTY);
							const bn = Je.accordion
								? Je.accordion._stateChanges.pipe(
										(0, Q.h)((Oe) => !(!Oe.hideToggle && !Oe.togglePosition))
								  )
								: $e.E;
							(this.tabIndex = parseInt(en || '') || 0),
								(this._parentChangeSubscription = (0, ye.T)(
									Je.opened,
									Je.closed,
									bn,
									Je._inputChanges.pipe(
										(0, Q.h)((Oe) => !!(Oe.hideToggle || Oe.disabled || Oe.togglePosition))
									)
								).subscribe(() => this._changeDetectorRef.markForCheck())),
								Je.closed
									.pipe((0, Q.h)(() => Je._containsFocus()))
									.subscribe(() => Ct.focusVia(Fe, 'program')),
								Bt &&
									((this.expandedHeight = Bt.expandedHeight),
									(this.collapsedHeight = Bt.collapsedHeight));
						}
						get disabled() {
							return this.panel.disabled;
						}
						_toggle() {
							this.disabled || this.panel.toggle();
						}
						_isExpanded() {
							return this.panel.expanded;
						}
						_getExpandedState() {
							return this.panel._getExpandedState();
						}
						_getPanelId() {
							return this.panel.id;
						}
						_getTogglePosition() {
							return this.panel.togglePosition;
						}
						_showToggle() {
							return !this.panel.hideToggle && !this.panel.disabled;
						}
						_getHeaderHeight() {
							const Je = this._isExpanded();
							return Je && this.expandedHeight
								? this.expandedHeight
								: !Je && this.collapsedHeight
								? this.collapsedHeight
								: null;
						}
						_keydown(Je) {
							switch (Je.keyCode) {
								case q.L_:
								case q.K5:
									(0, q.Vb)(Je) || (Je.preventDefault(), this._toggle());
									break;
								default:
									return void (this.panel.accordion && this.panel.accordion._handleHeaderKeydown(Je));
							}
						}
						focus(Je, Fe) {
							Je
								? this._focusMonitor.focusVia(this._element, Je, Fe)
								: this._element.nativeElement.focus(Fe);
						}
						ngAfterViewInit() {
							this._focusMonitor.monitor(this._element).subscribe((Je) => {
								Je && this.panel.accordion && this.panel.accordion._handleHeaderFocus(this);
							});
						}
						ngOnDestroy() {
							this._parentChangeSubscription.unsubscribe(),
								this._focusMonitor.stopMonitoring(this._element);
						}
					}
					return (
						(Ot.ɵfac = function (Je) {
							return new (Je || Ot)(
								G.Y36(Rt, 1),
								G.Y36(G.SBq),
								G.Y36(_e.tE),
								G.Y36(G.sBO),
								G.Y36(Xe, 8),
								G.Y36(Re.Qb, 8),
								G.$8M('tabindex')
							);
						}),
						(Ot.ɵcmp = G.Xpm({
							type: Ot,
							selectors: [['mat-expansion-panel-header']],
							hostAttrs: ['role', 'button', 1, 'mat-expansion-panel-header', 'mat-focus-indicator'],
							hostVars: 15,
							hostBindings: function (Je, Fe) {
								1 & Je &&
									G.NdJ('click', function () {
										return Fe._toggle();
									})('keydown', function (It) {
										return Fe._keydown(It);
									}),
									2 & Je &&
										(G.uIk('id', Fe.panel._headerId)('tabindex', Fe.tabIndex)(
											'aria-controls',
											Fe._getPanelId()
										)('aria-expanded', Fe._isExpanded())('aria-disabled', Fe.panel.disabled),
										G.Udp('height', Fe._getHeaderHeight()),
										G.ekj('mat-expanded', Fe._isExpanded())(
											'mat-expansion-toggle-indicator-after',
											'after' === Fe._getTogglePosition()
										)(
											'mat-expansion-toggle-indicator-before',
											'before' === Fe._getTogglePosition()
										)('_mat-animation-noopable', 'NoopAnimations' === Fe._animationMode));
							},
							inputs: {
								tabIndex: 'tabIndex',
								expandedHeight: 'expandedHeight',
								collapsedHeight: 'collapsedHeight',
							},
							features: [G.qOj],
							ngContentSelectors: We,
							decls: 5,
							vars: 1,
							consts: [
								[1, 'mat-content'],
								['class', 'mat-expansion-indicator', 4, 'ngIf'],
								[1, 'mat-expansion-indicator'],
							],
							template: function (Je, Fe) {
								1 & Je &&
									(G.F$t(J),
									G.TgZ(0, 'span', 0),
									G.Hsn(1),
									G.Hsn(2, 1),
									G.Hsn(3, 2),
									G.qZA(),
									G.YNc(4, ot, 1, 1, 'span', 1)),
									2 & Je && (G.xp6(4), G.Q6J('ngIf', Fe._showToggle()));
							},
							directives: [o.O5],
							styles: [
								'.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}\n',
							],
							encapsulation: 2,
							data: { animation: [Ie.indicatorRotate] },
							changeDetection: 0,
						})),
						Ot
					);
				})(),
				yt = (() => {
					class Ot {}
					return (
						(Ot.ɵfac = function (Je) {
							return new (Je || Ot)();
						}),
						(Ot.ɵdir = G.lG2({
							type: Ot,
							selectors: [['mat-panel-description']],
							hostAttrs: [1, 'mat-expansion-panel-header-description'],
						})),
						Ot
					);
				})(),
				xt = (() => {
					class Ot {}
					return (
						(Ot.ɵfac = function (Je) {
							return new (Je || Ot)();
						}),
						(Ot.ɵdir = G.lG2({
							type: Ot,
							selectors: [['mat-panel-title']],
							hostAttrs: [1, 'mat-expansion-panel-header-title'],
						})),
						Ot
					);
				})(),
				sn = (() => {
					class Ot extends m.xI {
						constructor() {
							super(...arguments),
								(this._ownHeaders = new G.n_E()),
								(this._hideToggle = !1),
								(this.displayMode = 'default'),
								(this.togglePosition = 'after');
						}
						get hideToggle() {
							return this._hideToggle;
						}
						set hideToggle(Je) {
							this._hideToggle = (0, we.Ig)(Je);
						}
						ngAfterContentInit() {
							this._headers.changes.pipe((0, ae.O)(this._headers)).subscribe((Je) => {
								this._ownHeaders.reset(Je.filter((Fe) => Fe.panel.accordion === this)),
									this._ownHeaders.notifyOnChanges();
							}),
								(this._keyManager = new _e.Em(this._ownHeaders).withWrap().withHomeAndEnd());
						}
						_handleHeaderKeydown(Je) {
							this._keyManager.onKeydown(Je);
						}
						_handleHeaderFocus(Je) {
							this._keyManager.updateActiveItem(Je);
						}
						ngOnDestroy() {
							super.ngOnDestroy(), this._ownHeaders.destroy();
						}
					}
					return (
						(Ot.ɵfac = (function () {
							let ft;
							return function (Fe) {
								return (ft || (ft = G.n5z(Ot)))(Fe || Ot);
							};
						})()),
						(Ot.ɵdir = G.lG2({
							type: Ot,
							selectors: [['mat-accordion']],
							contentQueries: function (Je, Fe, Ct) {
								if ((1 & Je && G.Suo(Ct, ke, 5), 2 & Je)) {
									let It;
									G.iGM((It = G.CRH())) && (Fe._headers = It);
								}
							},
							hostAttrs: [1, 'mat-accordion'],
							hostVars: 2,
							hostBindings: function (Je, Fe) {
								2 & Je && G.ekj('mat-accordion-multi', Fe.multi);
							},
							inputs: {
								multi: 'multi',
								hideToggle: 'hideToggle',
								displayMode: 'displayMode',
								togglePosition: 'togglePosition',
							},
							exportAs: ['matAccordion'],
							features: [G._Bn([{ provide: ce, useExisting: Ot }]), G.qOj],
						})),
						Ot
					);
				})(),
				Wt = (() => {
					class Ot {}
					return (
						(Ot.ɵfac = function (Je) {
							return new (Je || Ot)();
						}),
						(Ot.ɵmod = G.oAB({ type: Ot })),
						(Ot.ɵinj = G.cJS({
							imports: [[o.ez, be.BQ, m.XD, P.eL]],
						})),
						Ot
					);
				})();
		},
		1271: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { ux: () => Ot, u_: () => Rt, ZX: () => xt });
			var m = S(1314),
				P = S(7429),
				o = S(9808),
				G = S(5e3),
				be = S(508),
				we = S(7423),
				_e = S(7579),
				De = S(5698),
				ae = S(2722),
				Q = S(1777),
				K = S(925),
				q = S(3191),
				Re = S(9841),
				de = S(7272),
				Be = S(8306),
				$e = S(5684),
				ye = S(8372),
				Ne = S(4004),
				rt = S(8675);
			const Ge = new Set();
			let ge,
				tt = (() => {
					class ft {
						constructor(Fe) {
							(this._platform = Fe),
								(this._matchMedia =
									this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : J);
						}
						matchMedia(Fe) {
							return (
								(this._platform.WEBKIT || this._platform.BLINK) &&
									(function ot(ft) {
										if (!Ge.has(ft))
											try {
												ge ||
													((ge = document.createElement('style')),
													ge.setAttribute('type', 'text/css'),
													document.head.appendChild(ge)),
													ge.sheet &&
														(ge.sheet.insertRule(`@media ${ft} {body{ }}`, 0), Ge.add(ft));
											} catch (Je) {
												console.error(Je);
											}
									})(Fe),
								this._matchMedia(Fe)
							);
						}
					}
					return (
						(ft.ɵfac = function (Fe) {
							return new (Fe || ft)(G.LFG(K.t4));
						}),
						(ft.ɵprov = G.Yz7({
							token: ft,
							factory: ft.ɵfac,
							providedIn: 'root',
						})),
						ft
					);
				})();
			function J(ft) {
				return {
					matches: 'all' === ft || '' === ft,
					media: ft,
					addListener: () => {},
					removeListener: () => {},
				};
			}
			let We = (() => {
				class ft {
					constructor(Fe, Ct) {
						(this._mediaMatcher = Fe),
							(this._zone = Ct),
							(this._queries = new Map()),
							(this._destroySubject = new _e.x());
					}
					ngOnDestroy() {
						this._destroySubject.next(), this._destroySubject.complete();
					}
					isMatched(Fe) {
						return ce((0, q.Eq)(Fe)).some((It) => this._registerQuery(It).mql.matches);
					}
					observe(Fe) {
						const It = ce((0, q.Eq)(Fe)).map((Vt) => this._registerQuery(Vt).observable);
						let Bt = (0, Re.a)(It);
						return (
							(Bt = (0, de.z)(Bt.pipe((0, De.q)(1)), Bt.pipe((0, $e.T)(1), (0, ye.b)(0)))),
							Bt.pipe(
								(0, Ne.U)((Vt) => {
									const en = { matches: !1, breakpoints: {} };
									return (
										Vt.forEach(({ matches: bn, query: Oe }) => {
											(en.matches = en.matches || bn), (en.breakpoints[Oe] = bn);
										}),
										en
									);
								})
							)
						);
					}
					_registerQuery(Fe) {
						if (this._queries.has(Fe)) return this._queries.get(Fe);
						const Ct = this._mediaMatcher.matchMedia(Fe),
							Bt = {
								observable: new Be.y((Vt) => {
									const en = (bn) => this._zone.run(() => Vt.next(bn));
									return (
										Ct.addListener(en),
										() => {
											Ct.removeListener(en);
										}
									);
								}).pipe(
									(0, rt.O)(Ct),
									(0, Ne.U)(({ matches: Vt }) => ({
										query: Fe,
										matches: Vt,
									})),
									(0, ae.R)(this._destroySubject)
								),
								mql: Ct,
							};
						return this._queries.set(Fe, Bt), Bt;
					}
				}
				return (
					(ft.ɵfac = function (Fe) {
						return new (Fe || ft)(G.LFG(tt), G.LFG(G.R0b));
					}),
					(ft.ɵprov = G.Yz7({
						token: ft,
						factory: ft.ɵfac,
						providedIn: 'root',
					})),
					ft
				);
			})();
			function ce(ft) {
				return ft
					.map((Je) => Je.split(','))
					.reduce((Je, Fe) => Je.concat(Fe))
					.map((Je) => Je.trim());
			}
			var Ie = S(5664);
			function Ue(ft, Je) {
				if (1 & ft) {
					const Fe = G.EpF();
					G.TgZ(0, 'div', 1),
						G.TgZ(1, 'button', 2),
						G.NdJ('click', function () {
							return G.CHM(Fe), G.oxw().action();
						}),
						G._uU(2),
						G.qZA(),
						G.qZA();
				}
				if (2 & ft) {
					const Fe = G.oxw();
					G.xp6(2), G.Oqu(Fe.data.action);
				}
			}
			function ut(ft, Je) {}
			const Xe = new G.OlP('MatSnackBarData');
			class Rt {
				constructor() {
					(this.politeness = 'assertive'),
						(this.announcementMessage = ''),
						(this.duration = 0),
						(this.data = null),
						(this.horizontalPosition = 'center'),
						(this.verticalPosition = 'bottom');
				}
			}
			const Ht = Math.pow(2, 31) - 1;
			class nt {
				constructor(Je, Fe) {
					(this._overlayRef = Fe),
						(this._afterDismissed = new _e.x()),
						(this._afterOpened = new _e.x()),
						(this._onAction = new _e.x()),
						(this._dismissedByAction = !1),
						(this.containerInstance = Je),
						this.onAction().subscribe(() => this.dismiss()),
						Je._onExit.subscribe(() => this._finishDismiss());
				}
				dismiss() {
					this._afterDismissed.closed || this.containerInstance.exit(), clearTimeout(this._durationTimeoutId);
				}
				dismissWithAction() {
					this._onAction.closed ||
						((this._dismissedByAction = !0), this._onAction.next(), this._onAction.complete()),
						clearTimeout(this._durationTimeoutId);
				}
				closeWithAction() {
					this.dismissWithAction();
				}
				_dismissAfter(Je) {
					this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(Je, Ht));
				}
				_open() {
					this._afterOpened.closed || (this._afterOpened.next(), this._afterOpened.complete());
				}
				_finishDismiss() {
					this._overlayRef.dispose(),
						this._onAction.closed || this._onAction.complete(),
						this._afterDismissed.next({
							dismissedByAction: this._dismissedByAction,
						}),
						this._afterDismissed.complete(),
						(this._dismissedByAction = !1);
				}
				afterDismissed() {
					return this._afterDismissed;
				}
				afterOpened() {
					return this.containerInstance._onEnter;
				}
				onAction() {
					return this._onAction;
				}
			}
			let gt = (() => {
				class ft {
					constructor(Fe, Ct) {
						(this.snackBarRef = Fe), (this.data = Ct);
					}
					action() {
						this.snackBarRef.dismissWithAction();
					}
					get hasAction() {
						return !!this.data.action;
					}
				}
				return (
					(ft.ɵfac = function (Fe) {
						return new (Fe || ft)(G.Y36(nt), G.Y36(Xe));
					}),
					(ft.ɵcmp = G.Xpm({
						type: ft,
						selectors: [['simple-snack-bar']],
						hostAttrs: [1, 'mat-simple-snackbar'],
						decls: 3,
						vars: 2,
						consts: [
							['class', 'mat-simple-snackbar-action', 4, 'ngIf'],
							[1, 'mat-simple-snackbar-action'],
							['mat-button', '', 3, 'click'],
						],
						template: function (Fe, Ct) {
							1 & Fe && (G.TgZ(0, 'span'), G._uU(1), G.qZA(), G.YNc(2, Ue, 3, 1, 'div', 0)),
								2 & Fe && (G.xp6(1), G.Oqu(Ct.data.message), G.xp6(1), G.Q6J('ngIf', Ct.hasAction));
						},
						directives: [o.O5, we.lW],
						styles: [
							'.mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n',
						],
						encapsulation: 2,
						changeDetection: 0,
					})),
					ft
				);
			})();
			const ke = {
				snackBarState: (0, Q.X$)('state', [
					(0, Q.SB)('void, hidden', (0, Q.oB)({ transform: 'scale(0.8)', opacity: 0 })),
					(0, Q.SB)('visible', (0, Q.oB)({ transform: 'scale(1)', opacity: 1 })),
					(0, Q.eR)('* => visible', (0, Q.jt)('150ms cubic-bezier(0, 0, 0.2, 1)')),
					(0, Q.eR)(
						'* => void, * => hidden',
						(0, Q.jt)('75ms cubic-bezier(0.4, 0.0, 1, 1)', (0, Q.oB)({ opacity: 0 }))
					),
				]),
			};
			let yt = (() => {
					class ft extends P.en {
						constructor(Fe, Ct, It, Bt, Vt) {
							super(),
								(this._ngZone = Fe),
								(this._elementRef = Ct),
								(this._changeDetectorRef = It),
								(this._platform = Bt),
								(this.snackBarConfig = Vt),
								(this._announceDelay = 150),
								(this._destroyed = !1),
								(this._onAnnounce = new _e.x()),
								(this._onExit = new _e.x()),
								(this._onEnter = new _e.x()),
								(this._animationState = 'void'),
								(this.attachDomPortal = (en) => (
									this._assertNotAttached(),
									this._applySnackBarClasses(),
									this._portalOutlet.attachDomPortal(en)
								)),
								(this._live =
									'assertive' !== Vt.politeness || Vt.announcementMessage
										? 'off' === Vt.politeness
											? 'off'
											: 'polite'
										: 'assertive'),
								this._platform.FIREFOX &&
									('polite' === this._live && (this._role = 'status'),
									'assertive' === this._live && (this._role = 'alert'));
						}
						attachComponentPortal(Fe) {
							return (
								this._assertNotAttached(),
								this._applySnackBarClasses(),
								this._portalOutlet.attachComponentPortal(Fe)
							);
						}
						attachTemplatePortal(Fe) {
							return (
								this._assertNotAttached(),
								this._applySnackBarClasses(),
								this._portalOutlet.attachTemplatePortal(Fe)
							);
						}
						onAnimationEnd(Fe) {
							const { fromState: Ct, toState: It } = Fe;
							if (
								((('void' === It && 'void' !== Ct) || 'hidden' === It) && this._completeExit(),
								'visible' === It)
							) {
								const Bt = this._onEnter;
								this._ngZone.run(() => {
									Bt.next(), Bt.complete();
								});
							}
						}
						enter() {
							this._destroyed ||
								((this._animationState = 'visible'),
								this._changeDetectorRef.detectChanges(),
								this._screenReaderAnnounce());
						}
						exit() {
							return (
								(this._animationState = 'hidden'),
								this._elementRef.nativeElement.setAttribute('mat-exit', ''),
								clearTimeout(this._announceTimeoutId),
								this._onExit
							);
						}
						ngOnDestroy() {
							(this._destroyed = !0), this._completeExit();
						}
						_completeExit() {
							this._ngZone.onMicrotaskEmpty.pipe((0, De.q)(1)).subscribe(() => {
								this._onExit.next(), this._onExit.complete();
							});
						}
						_applySnackBarClasses() {
							const Fe = this._elementRef.nativeElement,
								Ct = this.snackBarConfig.panelClass;
							Ct && (Array.isArray(Ct) ? Ct.forEach((It) => Fe.classList.add(It)) : Fe.classList.add(Ct)),
								'center' === this.snackBarConfig.horizontalPosition &&
									Fe.classList.add('mat-snack-bar-center'),
								'top' === this.snackBarConfig.verticalPosition && Fe.classList.add('mat-snack-bar-top');
						}
						_assertNotAttached() {
							this._portalOutlet.hasAttached();
						}
						_screenReaderAnnounce() {
							this._announceTimeoutId ||
								this._ngZone.runOutsideAngular(() => {
									this._announceTimeoutId = setTimeout(() => {
										const Fe = this._elementRef.nativeElement.querySelector('[aria-hidden]'),
											Ct = this._elementRef.nativeElement.querySelector('[aria-live]');
										if (Fe && Ct) {
											let It = null;
											this._platform.isBrowser &&
												document.activeElement instanceof HTMLElement &&
												Fe.contains(document.activeElement) &&
												(It = document.activeElement),
												Fe.removeAttribute('aria-hidden'),
												Ct.appendChild(Fe),
												null == It || It.focus(),
												this._onAnnounce.next(),
												this._onAnnounce.complete();
										}
									}, this._announceDelay);
								});
						}
					}
					return (
						(ft.ɵfac = function (Fe) {
							return new (Fe || ft)(G.Y36(G.R0b), G.Y36(G.SBq), G.Y36(G.sBO), G.Y36(K.t4), G.Y36(Rt));
						}),
						(ft.ɵcmp = G.Xpm({
							type: ft,
							selectors: [['snack-bar-container']],
							viewQuery: function (Fe, Ct) {
								if ((1 & Fe && G.Gf(P.Pl, 7), 2 & Fe)) {
									let It;
									G.iGM((It = G.CRH())) && (Ct._portalOutlet = It.first);
								}
							},
							hostAttrs: [1, 'mat-snack-bar-container'],
							hostVars: 1,
							hostBindings: function (Fe, Ct) {
								1 & Fe &&
									G.WFA('@state.done', function (Bt) {
										return Ct.onAnimationEnd(Bt);
									}),
									2 & Fe && G.d8E('@state', Ct._animationState);
							},
							features: [G.qOj],
							decls: 3,
							vars: 2,
							consts: [
								['aria-hidden', 'true'],
								['cdkPortalOutlet', ''],
							],
							template: function (Fe, Ct) {
								1 & Fe &&
									(G.TgZ(0, 'div', 0),
									G.YNc(1, ut, 0, 0, 'ng-template', 1),
									G.qZA(),
									G._UZ(2, 'div')),
									2 & Fe && (G.xp6(2), G.uIk('aria-live', Ct._live)('role', Ct._role));
							},
							directives: [P.Pl],
							styles: [
								'.mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n',
							],
							encapsulation: 2,
							data: { animation: [ke.snackBarState] },
						})),
						ft
					);
				})(),
				xt = (() => {
					class ft {}
					return (
						(ft.ɵfac = function (Fe) {
							return new (Fe || ft)();
						}),
						(ft.ɵmod = G.oAB({ type: ft })),
						(ft.ɵinj = G.cJS({
							imports: [[m.U8, P.eL, o.ez, we.ot, be.BQ], be.BQ],
						})),
						ft
					);
				})();
			const sn = new G.OlP('mat-snack-bar-default-options', {
				providedIn: 'root',
				factory: function Wt() {
					return new Rt();
				},
			});
			let Ot = (() => {
				class ft {
					constructor(Fe, Ct, It, Bt, Vt, en) {
						(this._overlay = Fe),
							(this._live = Ct),
							(this._injector = It),
							(this._breakpointObserver = Bt),
							(this._parentSnackBar = Vt),
							(this._defaultConfig = en),
							(this._snackBarRefAtThisLevel = null),
							(this.simpleSnackBarComponent = gt),
							(this.snackBarContainerComponent = yt),
							(this.handsetCssClass = 'mat-snack-bar-handset');
					}
					get _openedSnackBarRef() {
						const Fe = this._parentSnackBar;
						return Fe ? Fe._openedSnackBarRef : this._snackBarRefAtThisLevel;
					}
					set _openedSnackBarRef(Fe) {
						this._parentSnackBar
							? (this._parentSnackBar._openedSnackBarRef = Fe)
							: (this._snackBarRefAtThisLevel = Fe);
					}
					openFromComponent(Fe, Ct) {
						return this._attach(Fe, Ct);
					}
					openFromTemplate(Fe, Ct) {
						return this._attach(Fe, Ct);
					}
					open(Fe, Ct = '', It) {
						const Bt = Object.assign(Object.assign({}, this._defaultConfig), It);
						return (
							(Bt.data = { message: Fe, action: Ct }),
							Bt.announcementMessage === Fe && (Bt.announcementMessage = void 0),
							this.openFromComponent(this.simpleSnackBarComponent, Bt)
						);
					}
					dismiss() {
						this._openedSnackBarRef && this._openedSnackBarRef.dismiss();
					}
					ngOnDestroy() {
						this._snackBarRefAtThisLevel && this._snackBarRefAtThisLevel.dismiss();
					}
					_attachSnackBarContainer(Fe, Ct) {
						const Bt = G.zs3.create({
								parent: (Ct && Ct.viewContainerRef && Ct.viewContainerRef.injector) || this._injector,
								providers: [{ provide: Rt, useValue: Ct }],
							}),
							Vt = new P.C5(this.snackBarContainerComponent, Ct.viewContainerRef, Bt),
							en = Fe.attach(Vt);
						return (en.instance.snackBarConfig = Ct), en.instance;
					}
					_attach(Fe, Ct) {
						const It = Object.assign(Object.assign(Object.assign({}, new Rt()), this._defaultConfig), Ct),
							Bt = this._createOverlay(It),
							Vt = this._attachSnackBarContainer(Bt, It),
							en = new nt(Vt, Bt);
						if (Fe instanceof G.Rgc) {
							const bn = new P.UE(Fe, null, {
								$implicit: It.data,
								snackBarRef: en,
							});
							en.instance = Vt.attachTemplatePortal(bn);
						} else {
							const bn = this._createInjector(It, en),
								Oe = new P.C5(Fe, void 0, bn),
								F = Vt.attachComponentPortal(Oe);
							en.instance = F.instance;
						}
						return (
							this._breakpointObserver
								.observe('(max-width: 599.98px) and (orientation: portrait)')
								.pipe((0, ae.R)(Bt.detachments()))
								.subscribe((bn) => {
									Bt.overlayElement.classList.toggle(this.handsetCssClass, bn.matches);
								}),
							It.announcementMessage &&
								Vt._onAnnounce.subscribe(() => {
									this._live.announce(It.announcementMessage, It.politeness);
								}),
							this._animateSnackBar(en, It),
							(this._openedSnackBarRef = en),
							this._openedSnackBarRef
						);
					}
					_animateSnackBar(Fe, Ct) {
						Fe.afterDismissed().subscribe(() => {
							this._openedSnackBarRef == Fe && (this._openedSnackBarRef = null),
								Ct.announcementMessage && this._live.clear();
						}),
							this._openedSnackBarRef
								? (this._openedSnackBarRef.afterDismissed().subscribe(() => {
										Fe.containerInstance.enter();
								  }),
								  this._openedSnackBarRef.dismiss())
								: Fe.containerInstance.enter(),
							Ct.duration &&
								Ct.duration > 0 &&
								Fe.afterOpened().subscribe(() => Fe._dismissAfter(Ct.duration));
					}
					_createOverlay(Fe) {
						const Ct = new m.X_();
						Ct.direction = Fe.direction;
						let It = this._overlay.position().global();
						const Bt = 'rtl' === Fe.direction,
							Vt =
								'left' === Fe.horizontalPosition ||
								('start' === Fe.horizontalPosition && !Bt) ||
								('end' === Fe.horizontalPosition && Bt),
							en = !Vt && 'center' !== Fe.horizontalPosition;
						return (
							Vt ? It.left('0') : en ? It.right('0') : It.centerHorizontally(),
							'top' === Fe.verticalPosition ? It.top('0') : It.bottom('0'),
							(Ct.positionStrategy = It),
							this._overlay.create(Ct)
						);
					}
					_createInjector(Fe, Ct) {
						return G.zs3.create({
							parent: (Fe && Fe.viewContainerRef && Fe.viewContainerRef.injector) || this._injector,
							providers: [
								{ provide: nt, useValue: Ct },
								{ provide: Xe, useValue: Fe.data },
							],
						});
					}
				}
				return (
					(ft.ɵfac = function (Fe) {
						return new (Fe || ft)(
							G.LFG(m.aV),
							G.LFG(Ie.Kd),
							G.LFG(G.zs3),
							G.LFG(We),
							G.LFG(ft, 12),
							G.LFG(sn)
						);
					}),
					(ft.ɵprov = G.Yz7({
						token: ft,
						factory: ft.ɵfac,
						providedIn: xt,
					})),
					ft
				);
			})();
		},
		6360: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { Qb: () => Kt, PW: () => sr });
			var m = S(5e3),
				P = S(2313),
				o = S(1777);
			function G() {
				return 'undefined' != typeof window && void 0 !== window.document;
			}
			function be() {
				return 'undefined' != typeof process && '[object process]' === {}.toString.call(process);
			}
			function we(N) {
				switch (N.length) {
					case 0:
						return new o.ZN();
					case 1:
						return N[0];
					default:
						return new o.ZE(N);
				}
			}
			function _e(N, h, p, x, B = {}, Z = {}) {
				const me = [],
					Ce = [];
				let Qe = -1,
					dt = null;
				if (
					(x.forEach((St) => {
						const Ut = St.offset,
							nn = Ut == Qe,
							En = (nn && dt) || {};
						Object.keys(St).forEach((an) => {
							let fn = an,
								Sn = St[an];
							if ('offset' !== an)
								switch (((fn = h.normalizePropertyName(fn, me)), Sn)) {
									case o.k1:
										Sn = B[an];
										break;
									case o.l3:
										Sn = Z[an];
										break;
									default:
										Sn = h.normalizeStyleValue(an, fn, Sn, me);
								}
							En[fn] = Sn;
						}),
							nn || Ce.push(En),
							(dt = En),
							(Qe = Ut);
					}),
					me.length)
				) {
					const St = '\n - ';
					throw new Error(`Unable to animate due to the following errors:${St}${me.join(St)}`);
				}
				return Ce;
			}
			function De(N, h, p, x) {
				switch (h) {
					case 'start':
						N.onStart(() => x(p && ae(p, 'start', N)));
						break;
					case 'done':
						N.onDone(() => x(p && ae(p, 'done', N)));
						break;
					case 'destroy':
						N.onDestroy(() => x(p && ae(p, 'destroy', N)));
				}
			}
			function ae(N, h, p) {
				const x = p.totalTime,
					Z = Q(
						N.element,
						N.triggerName,
						N.fromState,
						N.toState,
						h || N.phaseName,
						null == x ? N.totalTime : x,
						!!p.disabled
					),
					me = N._data;
				return null != me && (Z._data = me), Z;
			}
			function Q(N, h, p, x, B = '', Z = 0, me) {
				return {
					element: N,
					triggerName: h,
					fromState: p,
					toState: x,
					phaseName: B,
					totalTime: Z,
					disabled: !!me,
				};
			}
			function K(N, h, p) {
				let x;
				return (
					N instanceof Map ? ((x = N.get(h)), x || N.set(h, (x = p))) : ((x = N[h]), x || (x = N[h] = p)), x
				);
			}
			function q(N) {
				const h = N.indexOf(':');
				return [N.substring(1, h), N.substr(h + 1)];
			}
			let Re = (N, h) => !1,
				de = (N, h, p) => [];
			(be() || 'undefined' != typeof Element) &&
				((Re = G()
					? (N, h) => {
							for (; h && h !== document.documentElement; ) {
								if (h === N) return !0;
								h = h.parentNode || h.host;
							}
							return !1;
					  }
					: (N, h) => N.contains(h)),
				(de = (N, h, p) => {
					let x = [];
					if (p) {
						const B = N.querySelectorAll(h);
						for (let Z = 0; Z < B.length; Z++) x.push(B[Z]);
					} else {
						const B = N.querySelector(h);
						B && x.push(B);
					}
					return x;
				}));
			let ye = null,
				Ne = !1;
			function rt(N) {
				ye ||
					((ye =
						(function at() {
							return 'undefined' != typeof document ? document.body : null;
						})() || {}),
					(Ne = !!ye.style && 'WebkitAppearance' in ye.style));
				let h = !0;
				return (
					ye.style &&
						!(function $e(N) {
							return 'ebkit' == N.substring(1, 6);
						})(N) &&
						((h = N in ye.style),
						!h && Ne && (h = 'Webkit' + N.charAt(0).toUpperCase() + N.substr(1) in ye.style)),
					h
				);
			}
			const Ge = Re,
				ge = de;
			function tt(N) {
				const h = {};
				return (
					Object.keys(N).forEach((p) => {
						const x = p.replace(/([a-z])([A-Z])/g, '$1-$2');
						h[x] = N[p];
					}),
					h
				);
			}
			let ot = (() => {
					class N {
						validateStyleProperty(p) {
							return rt(p);
						}
						matchesElement(p, x) {
							return !1;
						}
						containsElement(p, x) {
							return Ge(p, x);
						}
						query(p, x, B) {
							return ge(p, x, B);
						}
						computeStyle(p, x, B) {
							return B || '';
						}
						animate(p, x, B, Z, me, Ce = [], Qe) {
							return new o.ZN(B, Z);
						}
					}
					return (
						(N.ɵfac = function (p) {
							return new (p || N)();
						}),
						(N.ɵprov = m.Yz7({ token: N, factory: N.ɵfac })),
						N
					);
				})(),
				J = (() => {
					class N {}
					return (N.NOOP = new ot()), N;
				})();
			const Ie = 'ng-enter',
				Ue = 'ng-leave',
				ut = 'ng-trigger',
				Xe = '.ng-trigger',
				Rt = 'ng-animating',
				Ht = '.ng-animating';
			function nt(N) {
				if ('number' == typeof N) return N;
				const h = N.match(/^(-?[\.\d]+)(m?s)/);
				return !h || h.length < 2 ? 0 : gt(parseFloat(h[1]), h[2]);
			}
			function gt(N, h) {
				return 's' === h ? 1e3 * N : N;
			}
			function ke(N, h, p) {
				return N.hasOwnProperty('duration')
					? N
					: (function yt(N, h, p) {
							let B,
								Z = 0,
								me = '';
							if ('string' == typeof N) {
								const Ce = N.match(
									/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
								);
								if (null === Ce)
									return (
										h.push(`The provided timing value "${N}" is invalid.`),
										{ duration: 0, delay: 0, easing: '' }
									);
								B = gt(parseFloat(Ce[1]), Ce[2]);
								const Qe = Ce[3];
								null != Qe && (Z = gt(parseFloat(Qe), Ce[4]));
								const dt = Ce[5];
								dt && (me = dt);
							} else B = N;
							if (!p) {
								let Ce = !1,
									Qe = h.length;
								B < 0 &&
									(h.push('Duration values below 0 are not allowed for this animation step.'),
									(Ce = !0)),
									Z < 0 &&
										(h.push('Delay values below 0 are not allowed for this animation step.'),
										(Ce = !0)),
									Ce && h.splice(Qe, 0, `The provided timing value "${N}" is invalid.`);
							}
							return { duration: B, delay: Z, easing: me };
					  })(N, h, p);
			}
			function xt(N, h = {}) {
				return (
					Object.keys(N).forEach((p) => {
						h[p] = N[p];
					}),
					h
				);
			}
			function Wt(N, h, p = {}) {
				if (h) for (let x in N) p[x] = N[x];
				else xt(N, p);
				return p;
			}
			function Ot(N, h, p) {
				return p ? h + ':' + p + ';' : '';
			}
			function ft(N) {
				let h = '';
				for (let p = 0; p < N.style.length; p++) {
					const x = N.style.item(p);
					h += Ot(0, x, N.style.getPropertyValue(x));
				}
				for (const p in N.style)
					N.style.hasOwnProperty(p) && !p.startsWith('_') && (h += Ot(0, U(p), N.style[p]));
				N.setAttribute('style', h);
			}
			function Je(N, h, p) {
				N.style &&
					(Object.keys(h).forEach((x) => {
						const B = F(x);
						p && !p.hasOwnProperty(x) && (p[x] = N.style[B]), (N.style[B] = h[x]);
					}),
					be() && ft(N));
			}
			function Fe(N, h) {
				N.style &&
					(Object.keys(h).forEach((p) => {
						const x = F(p);
						N.style[x] = '';
					}),
					be() && ft(N));
			}
			function Ct(N) {
				return Array.isArray(N) ? (1 == N.length ? N[0] : (0, o.vP)(N)) : N;
			}
			const Bt = new RegExp('{{\\s*(.+?)\\s*}}', 'g');
			function Vt(N) {
				let h = [];
				if ('string' == typeof N) {
					let p;
					for (; (p = Bt.exec(N)); ) h.push(p[1]);
					Bt.lastIndex = 0;
				}
				return h;
			}
			function en(N, h, p) {
				const x = N.toString(),
					B = x.replace(Bt, (Z, me) => {
						let Ce = h[me];
						return (
							h.hasOwnProperty(me) ||
								(p.push(`Please provide a value for the animation param ${me}`), (Ce = '')),
							Ce.toString()
						);
					});
				return B == x ? N : B;
			}
			function bn(N) {
				const h = [];
				let p = N.next();
				for (; !p.done; ) h.push(p.value), (p = N.next());
				return h;
			}
			const Oe = /-+([a-z0-9])/g;
			function F(N) {
				return N.replace(Oe, (...h) => h[1].toUpperCase());
			}
			function U(N) {
				return N.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
			}
			function te(N, h) {
				return 0 === N || 0 === h;
			}
			function fe(N, h, p) {
				const x = Object.keys(p);
				if (x.length && h.length) {
					let Z = h[0],
						me = [];
					if (
						(x.forEach((Ce) => {
							Z.hasOwnProperty(Ce) || me.push(Ce), (Z[Ce] = p[Ce]);
						}),
						me.length)
					)
						for (var B = 1; B < h.length; B++) {
							let Ce = h[B];
							me.forEach(function (Qe) {
								Ce[Qe] = xe(N, Qe);
							});
						}
				}
				return h;
			}
			function Ye(N, h, p) {
				switch (h.type) {
					case 7:
						return N.visitTrigger(h, p);
					case 0:
						return N.visitState(h, p);
					case 1:
						return N.visitTransition(h, p);
					case 2:
						return N.visitSequence(h, p);
					case 3:
						return N.visitGroup(h, p);
					case 4:
						return N.visitAnimate(h, p);
					case 5:
						return N.visitKeyframes(h, p);
					case 6:
						return N.visitStyle(h, p);
					case 8:
						return N.visitReference(h, p);
					case 9:
						return N.visitAnimateChild(h, p);
					case 10:
						return N.visitAnimateRef(h, p);
					case 11:
						return N.visitQuery(h, p);
					case 12:
						return N.visitStagger(h, p);
					default:
						throw new Error(`Unable to resolve animation metadata node #${h.type}`);
				}
			}
			function xe(N, h) {
				return window.getComputedStyle(N)[h];
			}
			const X = '*';
			function re(N, h) {
				const p = [];
				return (
					'string' == typeof N
						? N.split(/\s*,\s*/).forEach((x) =>
								(function et(N, h, p) {
									if (':' == N[0]) {
										const Qe = (function it(N, h) {
											switch (N) {
												case ':enter':
													return 'void => *';
												case ':leave':
													return '* => void';
												case ':increment':
													return (p, x) => parseFloat(x) > parseFloat(p);
												case ':decrement':
													return (p, x) => parseFloat(x) < parseFloat(p);
												default:
													return (
														h.push(`The transition alias value "${N}" is not supported`),
														'* => *'
													);
											}
										})(N, p);
										if ('function' == typeof Qe) return void h.push(Qe);
										N = Qe;
									}
									const x = N.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
									if (null == x || x.length < 4)
										return p.push(`The provided transition expression "${N}" is not supported`), h;
									const B = x[1],
										Z = x[2],
										me = x[3];
									h.push(At(B, me));
									'<' == Z[0] && !(B == X && me == X) && h.push(At(me, B));
								})(x, p, h)
						  )
						: p.push(N),
					p
				);
			}
			const _t = new Set(['true', '1']),
				pt = new Set(['false', '0']);
			function At(N, h) {
				const p = _t.has(N) || pt.has(N),
					x = _t.has(h) || pt.has(h);
				return (B, Z) => {
					let me = N == X || N == B,
						Ce = h == X || h == Z;
					return (
						!me && p && 'boolean' == typeof B && (me = B ? _t.has(N) : pt.has(N)),
						!Ce && x && 'boolean' == typeof Z && (Ce = Z ? _t.has(h) : pt.has(h)),
						me && Ce
					);
				};
			}
			const xn = new RegExp('s*:selfs*,?', 'g');
			function mn(N, h, p) {
				return new An(N).build(h, p);
			}
			class An {
				constructor(h) {
					this._driver = h;
				}
				build(h, p) {
					const x = new Yn(p);
					return this._resetContextStyleTimingState(x), Ye(this, Ct(h), x);
				}
				_resetContextStyleTimingState(h) {
					(h.currentQuerySelector = ''),
						(h.collectedStyles = {}),
						(h.collectedStyles[''] = {}),
						(h.currentTime = 0);
				}
				visitTrigger(h, p) {
					let x = (p.queryCount = 0),
						B = (p.depCount = 0);
					const Z = [],
						me = [];
					return (
						'@' == h.name.charAt(0) &&
							p.errors.push(
								"animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
							),
						h.definitions.forEach((Ce) => {
							if ((this._resetContextStyleTimingState(p), 0 == Ce.type)) {
								const Qe = Ce,
									dt = Qe.name;
								dt
									.toString()
									.split(/\s*,\s*/)
									.forEach((St) => {
										(Qe.name = St), Z.push(this.visitState(Qe, p));
									}),
									(Qe.name = dt);
							} else if (1 == Ce.type) {
								const Qe = this.visitTransition(Ce, p);
								(x += Qe.queryCount), (B += Qe.depCount), me.push(Qe);
							} else
								p.errors.push(
									'only state() and transition() definitions can sit inside of a trigger()'
								);
						}),
						{
							type: 7,
							name: h.name,
							states: Z,
							transitions: me,
							queryCount: x,
							depCount: B,
							options: null,
						}
					);
				}
				visitState(h, p) {
					const x = this.visitStyle(h.styles, p),
						B = (h.options && h.options.params) || null;
					if (x.containsDynamicStyles) {
						const Z = new Set(),
							me = B || {};
						if (
							(x.styles.forEach((Ce) => {
								if (Me(Ce)) {
									const Qe = Ce;
									Object.keys(Qe).forEach((dt) => {
										Vt(Qe[dt]).forEach((St) => {
											me.hasOwnProperty(St) || Z.add(St);
										});
									});
								}
							}),
							Z.size)
						) {
							const Ce = bn(Z.values());
							p.errors.push(
								`state("${
									h.name
								}", ...) must define default values for all the following style substitutions: ${Ce.join(
									', '
								)}`
							);
						}
					}
					return {
						type: 0,
						name: h.name,
						style: x,
						options: B ? { params: B } : null,
					};
				}
				visitTransition(h, p) {
					(p.queryCount = 0), (p.depCount = 0);
					const x = Ye(this, Ct(h.animation), p);
					return {
						type: 1,
						matchers: re(h.expr, p.errors),
						animation: x,
						queryCount: p.queryCount,
						depCount: p.depCount,
						options: ue(h.options),
					};
				}
				visitSequence(h, p) {
					return {
						type: 2,
						steps: h.steps.map((x) => Ye(this, x, p)),
						options: ue(h.options),
					};
				}
				visitGroup(h, p) {
					const x = p.currentTime;
					let B = 0;
					const Z = h.steps.map((me) => {
						p.currentTime = x;
						const Ce = Ye(this, me, p);
						return (B = Math.max(B, p.currentTime)), Ce;
					});
					return (p.currentTime = B), { type: 3, steps: Z, options: ue(h.options) };
				}
				visitAnimate(h, p) {
					const x = (function He(N, h) {
						let p = null;
						if (N.hasOwnProperty('duration')) p = N;
						else if ('number' == typeof N) return oe(ke(N, h).duration, 0, '');
						const x = N;
						if (x.split(/\s+/).some((Z) => '{' == Z.charAt(0) && '{' == Z.charAt(1))) {
							const Z = oe(0, 0, '');
							return (Z.dynamic = !0), (Z.strValue = x), Z;
						}
						return (p = p || ke(x, h)), oe(p.duration, p.delay, p.easing);
					})(h.timings, p.errors);
					p.currentAnimateTimings = x;
					let B,
						Z = h.styles ? h.styles : (0, o.oB)({});
					if (5 == Z.type) B = this.visitKeyframes(Z, p);
					else {
						let me = h.styles,
							Ce = !1;
						if (!me) {
							Ce = !0;
							const dt = {};
							x.easing && (dt.easing = x.easing), (me = (0, o.oB)(dt));
						}
						p.currentTime += x.duration + x.delay;
						const Qe = this.visitStyle(me, p);
						(Qe.isEmptyStep = Ce), (B = Qe);
					}
					return (p.currentAnimateTimings = null), { type: 4, timings: x, style: B, options: null };
				}
				visitStyle(h, p) {
					const x = this._makeStyleAst(h, p);
					return this._validateStyleAst(x, p), x;
				}
				_makeStyleAst(h, p) {
					const x = [];
					Array.isArray(h.styles)
						? h.styles.forEach((me) => {
								'string' == typeof me
									? me == o.l3
										? x.push(me)
										: p.errors.push(`The provided style string value ${me} is not allowed.`)
									: x.push(me);
						  })
						: x.push(h.styles);
					let B = !1,
						Z = null;
					return (
						x.forEach((me) => {
							if (Me(me)) {
								const Ce = me,
									Qe = Ce.easing;
								if ((Qe && ((Z = Qe), delete Ce.easing), !B))
									for (let dt in Ce)
										if (Ce[dt].toString().indexOf('{{') >= 0) {
											B = !0;
											break;
										}
							}
						}),
						{
							type: 6,
							styles: x,
							easing: Z,
							offset: h.offset,
							containsDynamicStyles: B,
							options: null,
						}
					);
				}
				_validateStyleAst(h, p) {
					const x = p.currentAnimateTimings;
					let B = p.currentTime,
						Z = p.currentTime;
					x && Z > 0 && (Z -= x.duration + x.delay),
						h.styles.forEach((me) => {
							'string' != typeof me &&
								Object.keys(me).forEach((Ce) => {
									if (!this._driver.validateStyleProperty(Ce))
										return void p.errors.push(
											`The provided animation property "${Ce}" is not a supported CSS property for animations`
										);
									const Qe = p.collectedStyles[p.currentQuerySelector],
										dt = Qe[Ce];
									let St = !0;
									dt &&
										(Z != B &&
											Z >= dt.startTime &&
											B <= dt.endTime &&
											(p.errors.push(
												`The CSS property "${Ce}" that exists between the times of "${dt.startTime}ms" and "${dt.endTime}ms" is also being animated in a parallel animation between the times of "${Z}ms" and "${B}ms"`
											),
											(St = !1)),
										(Z = dt.startTime)),
										St &&
											(Qe[Ce] = {
												startTime: Z,
												endTime: B,
											}),
										p.options &&
											(function It(N, h, p) {
												const x = h.params || {},
													B = Vt(N);
												B.length &&
													B.forEach((Z) => {
														x.hasOwnProperty(Z) ||
															p.push(
																`Unable to resolve the local animation param ${Z} in the given list of values`
															);
													});
											})(me[Ce], p.options, p.errors);
								});
						});
				}
				visitKeyframes(h, p) {
					const x = { type: 5, styles: [], options: null };
					if (!p.currentAnimateTimings)
						return p.errors.push('keyframes() must be placed inside of a call to animate()'), x;
					let Z = 0;
					const me = [];
					let Ce = !1,
						Qe = !1,
						dt = 0;
					const St = h.steps.map((ii) => {
						const ri = this._makeStyleAst(ii, p);
						let Ai =
								null != ri.offset
									? ri.offset
									: (function gn(N) {
											if ('string' == typeof N) return null;
											let h = null;
											if (Array.isArray(N))
												N.forEach((p) => {
													if (Me(p) && p.hasOwnProperty('offset')) {
														const x = p;
														(h = parseFloat(x.offset)), delete x.offset;
													}
												});
											else if (Me(N) && N.hasOwnProperty('offset')) {
												const p = N;
												(h = parseFloat(p.offset)), delete p.offset;
											}
											return h;
									  })(ri.styles),
							Ri = 0;
						return (
							null != Ai && (Z++, (Ri = ri.offset = Ai)),
							(Qe = Qe || Ri < 0 || Ri > 1),
							(Ce = Ce || Ri < dt),
							(dt = Ri),
							me.push(Ri),
							ri
						);
					});
					Qe && p.errors.push('Please ensure that all keyframe offsets are between 0 and 1'),
						Ce && p.errors.push('Please ensure that all keyframe offsets are in order');
					const Ut = h.steps.length;
					let nn = 0;
					Z > 0 && Z < Ut
						? p.errors.push('Not all style() steps within the declared keyframes() contain offsets')
						: 0 == Z && (nn = 1 / (Ut - 1));
					const En = Ut - 1,
						an = p.currentTime,
						fn = p.currentAnimateTimings,
						Sn = fn.duration;
					return (
						St.forEach((ii, ri) => {
							const Ai = nn > 0 ? (ri == En ? 1 : nn * ri) : me[ri],
								Ri = Ai * Sn;
							(p.currentTime = an + fn.delay + Ri),
								(fn.duration = Ri),
								this._validateStyleAst(ii, p),
								(ii.offset = Ai),
								x.styles.push(ii);
						}),
						x
					);
				}
				visitReference(h, p) {
					return {
						type: 8,
						animation: Ye(this, Ct(h.animation), p),
						options: ue(h.options),
					};
				}
				visitAnimateChild(h, p) {
					return p.depCount++, { type: 9, options: ue(h.options) };
				}
				visitAnimateRef(h, p) {
					return {
						type: 10,
						animation: this.visitReference(h.animation, p),
						options: ue(h.options),
					};
				}
				visitQuery(h, p) {
					const x = p.currentQuerySelector,
						B = h.options || {};
					p.queryCount++, (p.currentQuery = h);
					const [Z, me] = (function cn(N) {
						const h = !!N.split(/\s*,\s*/).find((p) => ':self' == p);
						return (
							h && (N = N.replace(xn, '')),
							(N = N.replace(/@\*/g, Xe)
								.replace(/@\w+/g, (p) => Xe + '-' + p.substr(1))
								.replace(/:animating/g, Ht)),
							[N, h]
						);
					})(h.selector);
					(p.currentQuerySelector = x.length ? x + ' ' + Z : Z),
						K(p.collectedStyles, p.currentQuerySelector, {});
					const Ce = Ye(this, Ct(h.animation), p);
					return (
						(p.currentQuery = null),
						(p.currentQuerySelector = x),
						{
							type: 11,
							selector: Z,
							limit: B.limit || 0,
							optional: !!B.optional,
							includeSelf: me,
							animation: Ce,
							originalSelector: h.selector,
							options: ue(h.options),
						}
					);
				}
				visitStagger(h, p) {
					p.currentQuery || p.errors.push('stagger() can only be used inside of query()');
					const x =
						'full' === h.timings ? { duration: 0, delay: 0, easing: 'full' } : ke(h.timings, p.errors, !0);
					return {
						type: 12,
						animation: Ye(this, Ct(h.animation), p),
						timings: x,
						options: null,
					};
				}
			}
			class Yn {
				constructor(h) {
					(this.errors = h),
						(this.queryCount = 0),
						(this.depCount = 0),
						(this.currentTransition = null),
						(this.currentQuery = null),
						(this.currentQuerySelector = null),
						(this.currentAnimateTimings = null),
						(this.currentTime = 0),
						(this.collectedStyles = {}),
						(this.options = null);
				}
			}
			function Me(N) {
				return !Array.isArray(N) && 'object' == typeof N;
			}
			function ue(N) {
				return (
					N
						? (N = xt(N)).params &&
						  (N.params = (function Pt(N) {
								return N ? xt(N) : null;
						  })(N.params))
						: (N = {}),
					N
				);
			}
			function oe(N, h, p) {
				return { duration: N, delay: h, easing: p };
			}
			function he(N, h, p, x, B, Z, me = null, Ce = !1) {
				return {
					type: 1,
					element: N,
					keyframes: h,
					preStyleProps: p,
					postStyleProps: x,
					duration: B,
					delay: Z,
					totalTime: B + Z,
					easing: me,
					subTimeline: Ce,
				};
			}
			class ee {
				constructor() {
					this._map = new Map();
				}
				get(h) {
					return this._map.get(h) || [];
				}
				append(h, p) {
					let x = this._map.get(h);
					x || this._map.set(h, (x = [])), x.push(...p);
				}
				has(h) {
					return this._map.has(h);
				}
				clear() {
					this._map.clear();
				}
			}
			const Ft = new RegExp(':enter', 'g'),
				_n = new RegExp(':leave', 'g');
			function Un(N, h, p, x, B, Z = {}, me = {}, Ce, Qe, dt = []) {
				return new qe().buildKeyframes(N, h, p, x, B, Z, me, Ce, Qe, dt);
			}
			class qe {
				buildKeyframes(h, p, x, B, Z, me, Ce, Qe, dt, St = []) {
					dt = dt || new ee();
					const Ut = new se(h, p, dt, B, Z, St, []);
					(Ut.options = Qe), Ut.currentTimeline.setStyles([me], null, Ut.errors, Qe), Ye(this, x, Ut);
					const nn = Ut.timelines.filter((En) => En.containsAnimation());
					if (nn.length && Object.keys(Ce).length) {
						const En = nn[nn.length - 1];
						En.allowOnlyTimelineStyles() || En.setStyles([Ce], null, Ut.errors, Qe);
					}
					return nn.length ? nn.map((En) => En.buildKeyframes()) : [he(p, [], [], [], 0, 0, '', !1)];
				}
				visitTrigger(h, p) {}
				visitState(h, p) {}
				visitTransition(h, p) {}
				visitAnimateChild(h, p) {
					const x = p.subInstructions.get(p.element);
					if (x) {
						const B = p.createSubContext(h.options),
							Z = p.currentTimeline.currentTime,
							me = this._visitSubInstructions(x, B, B.options);
						Z != me && p.transformIntoNewTimeline(me);
					}
					p.previousNode = h;
				}
				visitAnimateRef(h, p) {
					const x = p.createSubContext(h.options);
					x.transformIntoNewTimeline(),
						this.visitReference(h.animation, x),
						p.transformIntoNewTimeline(x.currentTimeline.currentTime),
						(p.previousNode = h);
				}
				_visitSubInstructions(h, p, x) {
					let Z = p.currentTimeline.currentTime;
					const me = null != x.duration ? nt(x.duration) : null,
						Ce = null != x.delay ? nt(x.delay) : null;
					return (
						0 !== me &&
							h.forEach((Qe) => {
								const dt = p.appendInstructionToTimeline(Qe, me, Ce);
								Z = Math.max(Z, dt.duration + dt.delay);
							}),
						Z
					);
				}
				visitReference(h, p) {
					p.updateOptions(h.options, !0), Ye(this, h.animation, p), (p.previousNode = h);
				}
				visitSequence(h, p) {
					const x = p.subContextCount;
					let B = p;
					const Z = h.options;
					if (
						Z &&
						(Z.params || Z.delay) &&
						((B = p.createSubContext(Z)), B.transformIntoNewTimeline(), null != Z.delay)
					) {
						6 == B.previousNode.type && (B.currentTimeline.snapshotCurrentStyles(), (B.previousNode = Te));
						const me = nt(Z.delay);
						B.delayNextStep(me);
					}
					h.steps.length &&
						(h.steps.forEach((me) => Ye(this, me, B)),
						B.currentTimeline.applyStylesToKeyframe(),
						B.subContextCount > x && B.transformIntoNewTimeline()),
						(p.previousNode = h);
				}
				visitGroup(h, p) {
					const x = [];
					let B = p.currentTimeline.currentTime;
					const Z = h.options && h.options.delay ? nt(h.options.delay) : 0;
					h.steps.forEach((me) => {
						const Ce = p.createSubContext(h.options);
						Z && Ce.delayNextStep(Z),
							Ye(this, me, Ce),
							(B = Math.max(B, Ce.currentTimeline.currentTime)),
							x.push(Ce.currentTimeline);
					}),
						x.forEach((me) => p.currentTimeline.mergeTimelineCollectedStyles(me)),
						p.transformIntoNewTimeline(B),
						(p.previousNode = h);
				}
				_visitTiming(h, p) {
					if (h.dynamic) {
						const x = h.strValue;
						return ke(p.params ? en(x, p.params, p.errors) : x, p.errors);
					}
					return {
						duration: h.duration,
						delay: h.delay,
						easing: h.easing,
					};
				}
				visitAnimate(h, p) {
					const x = (p.currentAnimateTimings = this._visitTiming(h.timings, p)),
						B = p.currentTimeline;
					x.delay && (p.incrementTime(x.delay), B.snapshotCurrentStyles());
					const Z = h.style;
					5 == Z.type
						? this.visitKeyframes(Z, p)
						: (p.incrementTime(x.duration), this.visitStyle(Z, p), B.applyStylesToKeyframe()),
						(p.currentAnimateTimings = null),
						(p.previousNode = h);
				}
				visitStyle(h, p) {
					const x = p.currentTimeline,
						B = p.currentAnimateTimings;
					!B && x.getCurrentStyleProperties().length && x.forwardFrame();
					const Z = (B && B.easing) || h.easing;
					h.isEmptyStep ? x.applyEmptyStep(Z) : x.setStyles(h.styles, Z, p.errors, p.options),
						(p.previousNode = h);
				}
				visitKeyframes(h, p) {
					const x = p.currentAnimateTimings,
						B = p.currentTimeline.duration,
						Z = x.duration,
						Ce = p.createSubContext().currentTimeline;
					(Ce.easing = x.easing),
						h.styles.forEach((Qe) => {
							Ce.forwardTime((Qe.offset || 0) * Z),
								Ce.setStyles(Qe.styles, Qe.easing, p.errors, p.options),
								Ce.applyStylesToKeyframe();
						}),
						p.currentTimeline.mergeTimelineCollectedStyles(Ce),
						p.transformIntoNewTimeline(B + Z),
						(p.previousNode = h);
				}
				visitQuery(h, p) {
					const x = p.currentTimeline.currentTime,
						B = h.options || {},
						Z = B.delay ? nt(B.delay) : 0;
					Z &&
						(6 === p.previousNode.type ||
							(0 == x && p.currentTimeline.getCurrentStyleProperties().length)) &&
						(p.currentTimeline.snapshotCurrentStyles(), (p.previousNode = Te));
					let me = x;
					const Ce = p.invokeQuery(
						h.selector,
						h.originalSelector,
						h.limit,
						h.includeSelf,
						!!B.optional,
						p.errors
					);
					p.currentQueryTotal = Ce.length;
					let Qe = null;
					Ce.forEach((dt, St) => {
						p.currentQueryIndex = St;
						const Ut = p.createSubContext(h.options, dt);
						Z && Ut.delayNextStep(Z),
							dt === p.element && (Qe = Ut.currentTimeline),
							Ye(this, h.animation, Ut),
							Ut.currentTimeline.applyStylesToKeyframe(),
							(me = Math.max(me, Ut.currentTimeline.currentTime));
					}),
						(p.currentQueryIndex = 0),
						(p.currentQueryTotal = 0),
						p.transformIntoNewTimeline(me),
						Qe &&
							(p.currentTimeline.mergeTimelineCollectedStyles(Qe),
							p.currentTimeline.snapshotCurrentStyles()),
						(p.previousNode = h);
				}
				visitStagger(h, p) {
					const x = p.parentContext,
						B = p.currentTimeline,
						Z = h.timings,
						me = Math.abs(Z.duration),
						Ce = me * (p.currentQueryTotal - 1);
					let Qe = me * p.currentQueryIndex;
					switch (Z.duration < 0 ? 'reverse' : Z.easing) {
						case 'reverse':
							Qe = Ce - Qe;
							break;
						case 'full':
							Qe = x.currentStaggerTime;
					}
					const St = p.currentTimeline;
					Qe && St.delayNextStep(Qe);
					const Ut = St.currentTime;
					Ye(this, h.animation, p),
						(p.previousNode = h),
						(x.currentStaggerTime = B.currentTime - Ut + (B.startTime - x.currentTimeline.startTime));
				}
			}
			const Te = {};
			class se {
				constructor(h, p, x, B, Z, me, Ce, Qe) {
					(this._driver = h),
						(this.element = p),
						(this.subInstructions = x),
						(this._enterClassName = B),
						(this._leaveClassName = Z),
						(this.errors = me),
						(this.timelines = Ce),
						(this.parentContext = null),
						(this.currentAnimateTimings = null),
						(this.previousNode = Te),
						(this.subContextCount = 0),
						(this.options = {}),
						(this.currentQueryIndex = 0),
						(this.currentQueryTotal = 0),
						(this.currentStaggerTime = 0),
						(this.currentTimeline = Qe || new Le(this._driver, p, 0)),
						Ce.push(this.currentTimeline);
				}
				get params() {
					return this.options.params;
				}
				updateOptions(h, p) {
					if (!h) return;
					const x = h;
					let B = this.options;
					null != x.duration && (B.duration = nt(x.duration)), null != x.delay && (B.delay = nt(x.delay));
					const Z = x.params;
					if (Z) {
						let me = B.params;
						me || (me = this.options.params = {}),
							Object.keys(Z).forEach((Ce) => {
								(!p || !me.hasOwnProperty(Ce)) && (me[Ce] = en(Z[Ce], me, this.errors));
							});
					}
				}
				_copyOptions() {
					const h = {};
					if (this.options) {
						const p = this.options.params;
						if (p) {
							const x = (h.params = {});
							Object.keys(p).forEach((B) => {
								x[B] = p[B];
							});
						}
					}
					return h;
				}
				createSubContext(h = null, p, x) {
					const B = p || this.element,
						Z = new se(
							this._driver,
							B,
							this.subInstructions,
							this._enterClassName,
							this._leaveClassName,
							this.errors,
							this.timelines,
							this.currentTimeline.fork(B, x || 0)
						);
					return (
						(Z.previousNode = this.previousNode),
						(Z.currentAnimateTimings = this.currentAnimateTimings),
						(Z.options = this._copyOptions()),
						Z.updateOptions(h),
						(Z.currentQueryIndex = this.currentQueryIndex),
						(Z.currentQueryTotal = this.currentQueryTotal),
						(Z.parentContext = this),
						this.subContextCount++,
						Z
					);
				}
				transformIntoNewTimeline(h) {
					return (
						(this.previousNode = Te),
						(this.currentTimeline = this.currentTimeline.fork(this.element, h)),
						this.timelines.push(this.currentTimeline),
						this.currentTimeline
					);
				}
				appendInstructionToTimeline(h, p, x) {
					const B = {
							duration: null != p ? p : h.duration,
							delay: this.currentTimeline.currentTime + (null != x ? x : 0) + h.delay,
							easing: '',
						},
						Z = new mt(
							this._driver,
							h.element,
							h.keyframes,
							h.preStyleProps,
							h.postStyleProps,
							B,
							h.stretchStartingKeyframe
						);
					return this.timelines.push(Z), B;
				}
				incrementTime(h) {
					this.currentTimeline.forwardTime(this.currentTimeline.duration + h);
				}
				delayNextStep(h) {
					h > 0 && this.currentTimeline.delayNextStep(h);
				}
				invokeQuery(h, p, x, B, Z, me) {
					let Ce = [];
					if ((B && Ce.push(this.element), h.length > 0)) {
						h = (h = h.replace(Ft, '.' + this._enterClassName)).replace(_n, '.' + this._leaveClassName);
						let dt = this._driver.query(this.element, h, 1 != x);
						0 !== x && (dt = x < 0 ? dt.slice(dt.length + x, dt.length) : dt.slice(0, x)), Ce.push(...dt);
					}
					return (
						!Z &&
							0 == Ce.length &&
							me.push(
								`\`query("${p}")\` returned zero elements. (Use \`query("${p}", { optional: true })\` if you wish to allow this.)`
							),
						Ce
					);
				}
			}
			class Le {
				constructor(h, p, x, B) {
					(this._driver = h),
						(this.element = p),
						(this.startTime = x),
						(this._elementTimelineStylesLookup = B),
						(this.duration = 0),
						(this._previousKeyframe = {}),
						(this._currentKeyframe = {}),
						(this._keyframes = new Map()),
						(this._styleSummary = {}),
						(this._pendingStyles = {}),
						(this._backFill = {}),
						(this._currentEmptyStepKeyframe = null),
						this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map()),
						(this._localTimelineStyles = Object.create(this._backFill, {})),
						(this._globalTimelineStyles = this._elementTimelineStylesLookup.get(p)),
						this._globalTimelineStyles ||
							((this._globalTimelineStyles = this._localTimelineStyles),
							this._elementTimelineStylesLookup.set(p, this._localTimelineStyles)),
						this._loadKeyframe();
				}
				containsAnimation() {
					switch (this._keyframes.size) {
						case 0:
							return !1;
						case 1:
							return this.getCurrentStyleProperties().length > 0;
						default:
							return !0;
					}
				}
				getCurrentStyleProperties() {
					return Object.keys(this._currentKeyframe);
				}
				get currentTime() {
					return this.startTime + this.duration;
				}
				delayNextStep(h) {
					const p = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
					this.duration || p
						? (this.forwardTime(this.currentTime + h), p && this.snapshotCurrentStyles())
						: (this.startTime += h);
				}
				fork(h, p) {
					return (
						this.applyStylesToKeyframe(),
						new Le(this._driver, h, p || this.currentTime, this._elementTimelineStylesLookup)
					);
				}
				_loadKeyframe() {
					this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
						(this._currentKeyframe = this._keyframes.get(this.duration)),
						this._currentKeyframe ||
							((this._currentKeyframe = Object.create(this._backFill, {})),
							this._keyframes.set(this.duration, this._currentKeyframe));
				}
				forwardFrame() {
					(this.duration += 1), this._loadKeyframe();
				}
				forwardTime(h) {
					this.applyStylesToKeyframe(), (this.duration = h), this._loadKeyframe();
				}
				_updateStyle(h, p) {
					(this._localTimelineStyles[h] = p),
						(this._globalTimelineStyles[h] = p),
						(this._styleSummary[h] = {
							time: this.currentTime,
							value: p,
						});
				}
				allowOnlyTimelineStyles() {
					return this._currentEmptyStepKeyframe !== this._currentKeyframe;
				}
				applyEmptyStep(h) {
					h && (this._previousKeyframe.easing = h),
						Object.keys(this._globalTimelineStyles).forEach((p) => {
							(this._backFill[p] = this._globalTimelineStyles[p] || o.l3),
								(this._currentKeyframe[p] = o.l3);
						}),
						(this._currentEmptyStepKeyframe = this._currentKeyframe);
				}
				setStyles(h, p, x, B) {
					p && (this._previousKeyframe.easing = p);
					const Z = (B && B.params) || {},
						me = (function tn(N, h) {
							const p = {};
							let x;
							return (
								N.forEach((B) => {
									'*' === B
										? ((x = x || Object.keys(h)),
										  x.forEach((Z) => {
												p[Z] = o.l3;
										  }))
										: Wt(B, !1, p);
								}),
								p
							);
						})(h, this._globalTimelineStyles);
					Object.keys(me).forEach((Ce) => {
						const Qe = en(me[Ce], Z, x);
						(this._pendingStyles[Ce] = Qe),
							this._localTimelineStyles.hasOwnProperty(Ce) ||
								(this._backFill[Ce] = this._globalTimelineStyles.hasOwnProperty(Ce)
									? this._globalTimelineStyles[Ce]
									: o.l3),
							this._updateStyle(Ce, Qe);
					});
				}
				applyStylesToKeyframe() {
					const h = this._pendingStyles,
						p = Object.keys(h);
					0 != p.length &&
						((this._pendingStyles = {}),
						p.forEach((x) => {
							this._currentKeyframe[x] = h[x];
						}),
						Object.keys(this._localTimelineStyles).forEach((x) => {
							this._currentKeyframe.hasOwnProperty(x) ||
								(this._currentKeyframe[x] = this._localTimelineStyles[x]);
						}));
				}
				snapshotCurrentStyles() {
					Object.keys(this._localTimelineStyles).forEach((h) => {
						const p = this._localTimelineStyles[h];
						(this._pendingStyles[h] = p), this._updateStyle(h, p);
					});
				}
				getFinalKeyframe() {
					return this._keyframes.get(this.duration);
				}
				get properties() {
					const h = [];
					for (let p in this._currentKeyframe) h.push(p);
					return h;
				}
				mergeTimelineCollectedStyles(h) {
					Object.keys(h._styleSummary).forEach((p) => {
						const x = this._styleSummary[p],
							B = h._styleSummary[p];
						(!x || B.time > x.time) && this._updateStyle(p, B.value);
					});
				}
				buildKeyframes() {
					this.applyStylesToKeyframe();
					const h = new Set(),
						p = new Set(),
						x = 1 === this._keyframes.size && 0 === this.duration;
					let B = [];
					this._keyframes.forEach((Ce, Qe) => {
						const dt = Wt(Ce, !0);
						Object.keys(dt).forEach((St) => {
							const Ut = dt[St];
							Ut == o.k1 ? h.add(St) : Ut == o.l3 && p.add(St);
						}),
							x || (dt.offset = Qe / this.duration),
							B.push(dt);
					});
					const Z = h.size ? bn(h.values()) : [],
						me = p.size ? bn(p.values()) : [];
					if (x) {
						const Ce = B[0],
							Qe = xt(Ce);
						(Ce.offset = 0), (Qe.offset = 1), (B = [Ce, Qe]);
					}
					return he(this.element, B, Z, me, this.duration, this.startTime, this.easing, !1);
				}
			}
			class mt extends Le {
				constructor(h, p, x, B, Z, me, Ce = !1) {
					super(h, p, me.delay),
						(this.keyframes = x),
						(this.preStyleProps = B),
						(this.postStyleProps = Z),
						(this._stretchStartingKeyframe = Ce),
						(this.timings = {
							duration: me.duration,
							delay: me.delay,
							easing: me.easing,
						});
				}
				containsAnimation() {
					return this.keyframes.length > 1;
				}
				buildKeyframes() {
					let h = this.keyframes,
						{ delay: p, duration: x, easing: B } = this.timings;
					if (this._stretchStartingKeyframe && p) {
						const Z = [],
							me = x + p,
							Ce = p / me,
							Qe = Wt(h[0], !1);
						(Qe.offset = 0), Z.push(Qe);
						const dt = Wt(h[0], !1);
						(dt.offset = $t(Ce)), Z.push(dt);
						const St = h.length - 1;
						for (let Ut = 1; Ut <= St; Ut++) {
							let nn = Wt(h[Ut], !1);
							(nn.offset = $t((p + nn.offset * x) / me)), Z.push(nn);
						}
						(x = me), (p = 0), (B = ''), (h = Z);
					}
					return he(this.element, h, this.preStyleProps, this.postStyleProps, x, p, B, !0);
				}
			}
			function $t(N, h = 3) {
				const p = Math.pow(10, h - 1);
				return Math.round(N * p) / p;
			}
			class Cn {}
			class ji extends Cn {
				normalizePropertyName(h, p) {
					return F(h);
				}
				normalizeStyleValue(h, p, x, B) {
					let Z = '';
					const me = x.toString().trim();
					if (bi[p] && 0 !== x && '0' !== x)
						if ('number' == typeof x) Z = 'px';
						else {
							const Ce = x.match(/^[+-]?[\d\.]+([a-z]*)$/);
							Ce && 0 == Ce[1].length && B.push(`Please provide a CSS unit value for ${h}:${x}`);
						}
					return me + Z;
				}
			}
			const bi = (() =>
				(function Yt(N) {
					const h = {};
					return N.forEach((p) => (h[p] = !0)), h;
				})(
					'width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'.split(
						','
					)
				))();
			function si(N, h, p, x, B, Z, me, Ce, Qe, dt, St, Ut, nn) {
				return {
					type: 0,
					element: N,
					triggerName: h,
					isRemovalTransition: B,
					fromState: p,
					fromStyles: Z,
					toState: x,
					toStyles: me,
					timelines: Ce,
					queriedElements: Qe,
					preStyleProps: dt,
					postStyleProps: St,
					totalTime: Ut,
					errors: nn,
				};
			}
			const zn = {};
			class Tt {
				constructor(h, p, x) {
					(this._triggerName = h), (this.ast = p), (this._stateStyles = x);
				}
				match(h, p, x, B) {
					return (function Dn(N, h, p, x, B) {
						return N.some((Z) => Z(h, p, x, B));
					})(this.ast.matchers, h, p, x, B);
				}
				buildStyles(h, p, x) {
					const B = this._stateStyles['*'],
						Z = this._stateStyles[h],
						me = B ? B.buildStyles(p, x) : {};
					return Z ? Z.buildStyles(p, x) : me;
				}
				build(h, p, x, B, Z, me, Ce, Qe, dt, St) {
					const Ut = [],
						nn = (this.ast.options && this.ast.options.params) || zn,
						an = this.buildStyles(x, (Ce && Ce.params) || zn, Ut),
						fn = (Qe && Qe.params) || zn,
						Sn = this.buildStyles(B, fn, Ut),
						ii = new Set(),
						ri = new Map(),
						Ai = new Map(),
						Ri = 'void' === B,
						Rr = {
							params: Object.assign(Object.assign({}, nn), fn),
						},
						ki = St ? [] : Un(h, p, this.ast.animation, Z, me, an, Sn, Rr, dt, Ut);
					let Mi = 0;
					if (
						(ki.forEach((ar) => {
							Mi = Math.max(ar.duration + ar.delay, Mi);
						}),
						Ut.length)
					)
						return si(p, this._triggerName, x, B, Ri, an, Sn, [], [], ri, Ai, Mi, Ut);
					ki.forEach((ar) => {
						const Er = ar.element,
							ps = K(ri, Er, {});
						ar.preStyleProps.forEach((_r) => (ps[_r] = !0));
						const rs = K(Ai, Er, {});
						ar.postStyleProps.forEach((_r) => (rs[_r] = !0)), Er !== p && ii.add(Er);
					});
					const or = bn(ii.values());
					return si(p, this._triggerName, x, B, Ri, an, Sn, ki, or, ri, Ai, Mi);
				}
			}
			class Fn {
				constructor(h, p, x) {
					(this.styles = h), (this.defaultParams = p), (this.normalizer = x);
				}
				buildStyles(h, p) {
					const x = {},
						B = xt(this.defaultParams);
					return (
						Object.keys(h).forEach((Z) => {
							const me = h[Z];
							null != me && (B[Z] = me);
						}),
						this.styles.styles.forEach((Z) => {
							if ('string' != typeof Z) {
								const me = Z;
								Object.keys(me).forEach((Ce) => {
									let Qe = me[Ce];
									Qe.length > 1 && (Qe = en(Qe, B, p));
									const dt = this.normalizer.normalizePropertyName(Ce, p);
									(Qe = this.normalizer.normalizeStyleValue(Ce, dt, Qe, p)), (x[dt] = Qe);
								});
							}
						}),
						x
					);
				}
			}
			class Ci {
				constructor(h, p, x) {
					(this.name = h),
						(this.ast = p),
						(this._normalizer = x),
						(this.transitionFactories = []),
						(this.states = {}),
						p.states.forEach((B) => {
							this.states[B.name] = new Fn(B.style, (B.options && B.options.params) || {}, x);
						}),
						fi(this.states, 'true', '1'),
						fi(this.states, 'false', '0'),
						p.transitions.forEach((B) => {
							this.transitionFactories.push(new Tt(h, B, this.states));
						}),
						(this.fallbackTransition = (function Ln(N, h, p) {
							return new Tt(
								N,
								{
									type: 1,
									animation: {
										type: 2,
										steps: [],
										options: null,
									},
									matchers: [(me, Ce) => !0],
									options: null,
									queryCount: 0,
									depCount: 0,
								},
								h
							);
						})(h, this.states));
				}
				get containsQueries() {
					return this.ast.queryCount > 0;
				}
				matchTransition(h, p, x, B) {
					return this.transitionFactories.find((me) => me.match(h, p, x, B)) || null;
				}
				matchStyles(h, p, x) {
					return this.fallbackTransition.buildStyles(h, p, x);
				}
			}
			function fi(N, h, p) {
				N.hasOwnProperty(h) ? N.hasOwnProperty(p) || (N[p] = N[h]) : N.hasOwnProperty(p) && (N[h] = N[p]);
			}
			const dn = new ee();
			class di {
				constructor(h, p, x) {
					(this.bodyNode = h),
						(this._driver = p),
						(this._normalizer = x),
						(this._animations = {}),
						(this._playersById = {}),
						(this.players = []);
				}
				register(h, p) {
					const x = [],
						B = mn(this._driver, p, x);
					if (x.length)
						throw new Error(`Unable to build the animation due to the following errors: ${x.join('\n')}`);
					this._animations[h] = B;
				}
				_buildPlayer(h, p, x) {
					const B = h.element,
						Z = _e(0, this._normalizer, 0, h.keyframes, p, x);
					return this._driver.animate(B, Z, h.duration, h.delay, h.easing, [], !0);
				}
				create(h, p, x = {}) {
					const B = [],
						Z = this._animations[h];
					let me;
					const Ce = new Map();
					if (
						(Z
							? ((me = Un(this._driver, p, Z, Ie, Ue, {}, {}, x, dn, B)),
							  me.forEach((St) => {
									const Ut = K(Ce, St.element, {});
									St.postStyleProps.forEach((nn) => (Ut[nn] = null));
							  }))
							: (B.push("The requested animation doesn't exist or has already been destroyed"),
							  (me = [])),
						B.length)
					)
						throw new Error(`Unable to create the animation due to the following errors: ${B.join('\n')}`);
					Ce.forEach((St, Ut) => {
						Object.keys(St).forEach((nn) => {
							St[nn] = this._driver.computeStyle(Ut, nn, o.l3);
						});
					});
					const dt = we(
						me.map((St) => {
							const Ut = Ce.get(St.element);
							return this._buildPlayer(St, {}, Ut);
						})
					);
					return (this._playersById[h] = dt), dt.onDestroy(() => this.destroy(h)), this.players.push(dt), dt;
				}
				destroy(h) {
					const p = this._getPlayer(h);
					p.destroy(), delete this._playersById[h];
					const x = this.players.indexOf(p);
					x >= 0 && this.players.splice(x, 1);
				}
				_getPlayer(h) {
					const p = this._playersById[h];
					if (!p) throw new Error(`Unable to find the timeline player referenced by ${h}`);
					return p;
				}
				listen(h, p, x, B) {
					const Z = Q(p, '', '', '');
					return De(this._getPlayer(h), x, Z, B), () => {};
				}
				command(h, p, x, B) {
					if ('register' == x) return void this.register(h, B[0]);
					if ('create' == x) return void this.create(h, p, B[0] || {});
					const Z = this._getPlayer(h);
					switch (x) {
						case 'play':
							Z.play();
							break;
						case 'pause':
							Z.pause();
							break;
						case 'reset':
							Z.reset();
							break;
						case 'restart':
							Z.restart();
							break;
						case 'finish':
							Z.finish();
							break;
						case 'init':
							Z.init();
							break;
						case 'setPosition':
							Z.setPosition(parseFloat(B[0]));
							break;
						case 'destroy':
							this.destroy(h);
					}
				}
			}
			const Wn = 'ng-animate-queued',
				Ki = 'ng-animate-disabled',
				ni = [],
				Fi = {
					namespaceId: '',
					setForRemoval: !1,
					setForMove: !1,
					hasAnimation: !1,
					removedBeforeQueried: !1,
				},
				Li = {
					namespaceId: '',
					setForMove: !1,
					setForRemoval: !1,
					hasAnimation: !1,
					removedBeforeQueried: !0,
				},
				Bn = '__ng_removed';
			class Tn {
				constructor(h, p = '') {
					this.namespaceId = p;
					const x = h && h.hasOwnProperty('value');
					if (
						((this.value = (function ur(N) {
							return null != N ? N : null;
						})(x ? h.value : h)),
						x)
					) {
						const Z = xt(h);
						delete Z.value, (this.options = Z);
					} else this.options = {};
					this.options.params || (this.options.params = {});
				}
				get params() {
					return this.options.params;
				}
				absorbOptions(h) {
					const p = h.params;
					if (p) {
						const x = this.options.params;
						Object.keys(p).forEach((B) => {
							null == x[B] && (x[B] = p[B]);
						});
					}
				}
			}
			const Ni = 'void',
				Ii = new Tn(Ni);
			class ai {
				constructor(h, p, x) {
					(this.id = h),
						(this.hostElement = p),
						(this._engine = x),
						(this.players = []),
						(this._triggers = {}),
						(this._queue = []),
						(this._elementListeners = new Map()),
						(this._hostClassName = 'ng-tns-' + h),
						_i(p, this._hostClassName);
				}
				listen(h, p, x, B) {
					if (!this._triggers.hasOwnProperty(p))
						throw new Error(
							`Unable to listen on the animation trigger event "${x}" because the animation trigger "${p}" doesn't exist!`
						);
					if (null == x || 0 == x.length)
						throw new Error(
							`Unable to listen on the animation trigger "${p}" because the provided event is undefined!`
						);
					if (
						!(function qi(N) {
							return 'start' == N || 'done' == N;
						})(x)
					)
						throw new Error(
							`The provided animation trigger event "${x}" for the animation trigger "${p}" is not supported!`
						);
					const Z = K(this._elementListeners, h, []),
						me = { name: p, phase: x, callback: B };
					Z.push(me);
					const Ce = K(this._engine.statesByElement, h, {});
					return (
						Ce.hasOwnProperty(p) || (_i(h, ut), _i(h, ut + '-' + p), (Ce[p] = Ii)),
						() => {
							this._engine.afterFlush(() => {
								const Qe = Z.indexOf(me);
								Qe >= 0 && Z.splice(Qe, 1), this._triggers[p] || delete Ce[p];
							});
						}
					);
				}
				register(h, p) {
					return !this._triggers[h] && ((this._triggers[h] = p), !0);
				}
				_getTrigger(h) {
					const p = this._triggers[h];
					if (!p) throw new Error(`The provided animation trigger "${h}" has not been registered!`);
					return p;
				}
				trigger(h, p, x, B = !0) {
					const Z = this._getTrigger(p),
						me = new mi(this.id, p, h);
					let Ce = this._engine.statesByElement.get(h);
					Ce || (_i(h, ut), _i(h, ut + '-' + p), this._engine.statesByElement.set(h, (Ce = {})));
					let Qe = Ce[p];
					const dt = new Tn(x, this.id);
					if (
						(!(x && x.hasOwnProperty('value')) && Qe && dt.absorbOptions(Qe.options),
						(Ce[p] = dt),
						Qe || (Qe = Ii),
						dt.value !== Ni && Qe.value === dt.value)
					) {
						if (
							!(function Cr(N, h) {
								const p = Object.keys(N),
									x = Object.keys(h);
								if (p.length != x.length) return !1;
								for (let B = 0; B < p.length; B++) {
									const Z = p[B];
									if (!h.hasOwnProperty(Z) || N[Z] !== h[Z]) return !1;
								}
								return !0;
							})(Qe.params, dt.params)
						) {
							const fn = [],
								Sn = Z.matchStyles(Qe.value, Qe.params, fn),
								ii = Z.matchStyles(dt.value, dt.params, fn);
							fn.length
								? this._engine.reportError(fn)
								: this._engine.afterFlush(() => {
										Fe(h, Sn), Je(h, ii);
								  });
						}
						return;
					}
					const nn = K(this._engine.playersByElement, h, []);
					nn.forEach((fn) => {
						fn.namespaceId == this.id && fn.triggerName == p && fn.queued && fn.destroy();
					});
					let En = Z.matchTransition(Qe.value, dt.value, h, dt.params),
						an = !1;
					if (!En) {
						if (!B) return;
						(En = Z.fallbackTransition), (an = !0);
					}
					return (
						this._engine.totalQueuedPlayers++,
						this._queue.push({
							element: h,
							triggerName: p,
							transition: En,
							fromState: Qe,
							toState: dt,
							player: me,
							isFallbackTransition: an,
						}),
						an ||
							(_i(h, Wn),
							me.onStart(() => {
								zi(h, Wn);
							})),
						me.onDone(() => {
							let fn = this.players.indexOf(me);
							fn >= 0 && this.players.splice(fn, 1);
							const Sn = this._engine.playersByElement.get(h);
							if (Sn) {
								let ii = Sn.indexOf(me);
								ii >= 0 && Sn.splice(ii, 1);
							}
						}),
						this.players.push(me),
						nn.push(me),
						me
					);
				}
				deregister(h) {
					delete this._triggers[h],
						this._engine.statesByElement.forEach((p, x) => {
							delete p[h];
						}),
						this._elementListeners.forEach((p, x) => {
							this._elementListeners.set(
								x,
								p.filter((B) => B.name != h)
							);
						});
				}
				clearElementCache(h) {
					this._engine.statesByElement.delete(h), this._elementListeners.delete(h);
					const p = this._engine.playersByElement.get(h);
					p && (p.forEach((x) => x.destroy()), this._engine.playersByElement.delete(h));
				}
				_signalRemovalForInnerTriggers(h, p) {
					const x = this._engine.driver.query(h, Xe, !0);
					x.forEach((B) => {
						if (B[Bn]) return;
						const Z = this._engine.fetchNamespacesByElement(B);
						Z.size ? Z.forEach((me) => me.triggerLeaveAnimation(B, p, !1, !0)) : this.clearElementCache(B);
					}),
						this._engine.afterFlushAnimationsDone(() => x.forEach((B) => this.clearElementCache(B)));
				}
				triggerLeaveAnimation(h, p, x, B) {
					const Z = this._engine.statesByElement.get(h),
						me = new Map();
					if (Z) {
						const Ce = [];
						if (
							(Object.keys(Z).forEach((Qe) => {
								if ((me.set(Qe, Z[Qe].value), this._triggers[Qe])) {
									const dt = this.trigger(h, Qe, Ni, B);
									dt && Ce.push(dt);
								}
							}),
							Ce.length)
						)
							return (
								this._engine.markElementAsRemoved(this.id, h, !0, p, me),
								x && we(Ce).onDone(() => this._engine.processLeaveNode(h)),
								!0
							);
					}
					return !1;
				}
				prepareLeaveAnimationListeners(h) {
					const p = this._elementListeners.get(h),
						x = this._engine.statesByElement.get(h);
					if (p && x) {
						const B = new Set();
						p.forEach((Z) => {
							const me = Z.name;
							if (B.has(me)) return;
							B.add(me);
							const Qe = this._triggers[me].fallbackTransition,
								dt = x[me] || Ii,
								St = new Tn(Ni),
								Ut = new mi(this.id, me, h);
							this._engine.totalQueuedPlayers++,
								this._queue.push({
									element: h,
									triggerName: me,
									transition: Qe,
									fromState: dt,
									toState: St,
									player: Ut,
									isFallbackTransition: !0,
								});
						});
					}
				}
				removeNode(h, p) {
					const x = this._engine;
					if (
						(h.childElementCount && this._signalRemovalForInnerTriggers(h, p),
						this.triggerLeaveAnimation(h, p, !0))
					)
						return;
					let B = !1;
					if (x.totalAnimations) {
						const Z = x.players.length ? x.playersByQueriedElement.get(h) : [];
						if (Z && Z.length) B = !0;
						else {
							let me = h;
							for (; (me = me.parentNode); )
								if (x.statesByElement.get(me)) {
									B = !0;
									break;
								}
						}
					}
					if ((this.prepareLeaveAnimationListeners(h), B)) x.markElementAsRemoved(this.id, h, !1, p);
					else {
						const Z = h[Bn];
						(!Z || Z === Fi) &&
							(x.afterFlush(() => this.clearElementCache(h)),
							x.destroyInnerAnimations(h),
							x._onRemovalComplete(h, p));
					}
				}
				insertNode(h, p) {
					_i(h, this._hostClassName);
				}
				drainQueuedTransitions(h) {
					const p = [];
					return (
						this._queue.forEach((x) => {
							const B = x.player;
							if (B.destroyed) return;
							const Z = x.element,
								me = this._elementListeners.get(Z);
							me &&
								me.forEach((Ce) => {
									if (Ce.name == x.triggerName) {
										const Qe = Q(Z, x.triggerName, x.fromState.value, x.toState.value);
										(Qe._data = h), De(x.player, Ce.phase, Qe, Ce.callback);
									}
								}),
								B.markedForDestroy
									? this._engine.afterFlush(() => {
											B.destroy();
									  })
									: p.push(x);
						}),
						(this._queue = []),
						p.sort((x, B) => {
							const Z = x.transition.ast.depCount,
								me = B.transition.ast.depCount;
							return 0 == Z || 0 == me
								? Z - me
								: this._engine.driver.containsElement(x.element, B.element)
								? 1
								: -1;
						})
					);
				}
				destroy(h) {
					this.players.forEach((p) => p.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, h);
				}
				elementContainsData(h) {
					let p = !1;
					return (
						this._elementListeners.has(h) && (p = !0),
						(p = !!this._queue.find((x) => x.element === h) || p),
						p
					);
				}
			}
			class wi {
				constructor(h, p, x) {
					(this.bodyNode = h),
						(this.driver = p),
						(this._normalizer = x),
						(this.players = []),
						(this.newHostElements = new Map()),
						(this.playersByElement = new Map()),
						(this.playersByQueriedElement = new Map()),
						(this.statesByElement = new Map()),
						(this.disabledNodes = new Set()),
						(this.totalAnimations = 0),
						(this.totalQueuedPlayers = 0),
						(this._namespaceLookup = {}),
						(this._namespaceList = []),
						(this._flushFns = []),
						(this._whenQuietFns = []),
						(this.namespacesByHostElement = new Map()),
						(this.collectedEnterElements = []),
						(this.collectedLeaveElements = []),
						(this.onRemovalComplete = (B, Z) => {});
				}
				_onRemovalComplete(h, p) {
					this.onRemovalComplete(h, p);
				}
				get queuedPlayers() {
					const h = [];
					return (
						this._namespaceList.forEach((p) => {
							p.players.forEach((x) => {
								x.queued && h.push(x);
							});
						}),
						h
					);
				}
				createNamespace(h, p) {
					const x = new ai(h, p, this);
					return (
						this.bodyNode && this.driver.containsElement(this.bodyNode, p)
							? this._balanceNamespaceList(x, p)
							: (this.newHostElements.set(p, x), this.collectEnterElement(p)),
						(this._namespaceLookup[h] = x)
					);
				}
				_balanceNamespaceList(h, p) {
					const x = this._namespaceList.length - 1;
					if (x >= 0) {
						let B = !1;
						for (let Z = x; Z >= 0; Z--)
							if (this.driver.containsElement(this._namespaceList[Z].hostElement, p)) {
								this._namespaceList.splice(Z + 1, 0, h), (B = !0);
								break;
							}
						B || this._namespaceList.splice(0, 0, h);
					} else this._namespaceList.push(h);
					return this.namespacesByHostElement.set(p, h), h;
				}
				register(h, p) {
					let x = this._namespaceLookup[h];
					return x || (x = this.createNamespace(h, p)), x;
				}
				registerTrigger(h, p, x) {
					let B = this._namespaceLookup[h];
					B && B.register(p, x) && this.totalAnimations++;
				}
				destroy(h, p) {
					if (!h) return;
					const x = this._fetchNamespace(h);
					this.afterFlush(() => {
						this.namespacesByHostElement.delete(x.hostElement), delete this._namespaceLookup[h];
						const B = this._namespaceList.indexOf(x);
						B >= 0 && this._namespaceList.splice(B, 1);
					}),
						this.afterFlushAnimationsDone(() => x.destroy(p));
				}
				_fetchNamespace(h) {
					return this._namespaceLookup[h];
				}
				fetchNamespacesByElement(h) {
					const p = new Set(),
						x = this.statesByElement.get(h);
					if (x) {
						const B = Object.keys(x);
						for (let Z = 0; Z < B.length; Z++) {
							const me = x[B[Z]].namespaceId;
							if (me) {
								const Ce = this._fetchNamespace(me);
								Ce && p.add(Ce);
							}
						}
					}
					return p;
				}
				trigger(h, p, x, B) {
					if (Jn(p)) {
						const Z = this._fetchNamespace(h);
						if (Z) return Z.trigger(p, x, B), !0;
					}
					return !1;
				}
				insertNode(h, p, x, B) {
					if (!Jn(p)) return;
					const Z = p[Bn];
					if (Z && Z.setForRemoval) {
						(Z.setForRemoval = !1), (Z.setForMove = !0);
						const me = this.collectedLeaveElements.indexOf(p);
						me >= 0 && this.collectedLeaveElements.splice(me, 1);
					}
					if (h) {
						const me = this._fetchNamespace(h);
						me && me.insertNode(p, x);
					}
					B && this.collectEnterElement(p);
				}
				collectEnterElement(h) {
					this.collectedEnterElements.push(h);
				}
				markElementAsDisabled(h, p) {
					p
						? this.disabledNodes.has(h) || (this.disabledNodes.add(h), _i(h, Ki))
						: this.disabledNodes.has(h) && (this.disabledNodes.delete(h), zi(h, Ki));
				}
				removeNode(h, p, x, B) {
					if (Jn(p)) {
						const Z = h ? this._fetchNamespace(h) : null;
						if ((Z ? Z.removeNode(p, B) : this.markElementAsRemoved(h, p, !1, B), x)) {
							const me = this.namespacesByHostElement.get(p);
							me && me.id !== h && me.removeNode(p, B);
						}
					} else this._onRemovalComplete(p, B);
				}
				markElementAsRemoved(h, p, x, B, Z) {
					this.collectedLeaveElements.push(p),
						(p[Bn] = {
							namespaceId: h,
							setForRemoval: B,
							hasAnimation: x,
							removedBeforeQueried: !1,
							previousTriggersValues: Z,
						});
				}
				listen(h, p, x, B, Z) {
					return Jn(p) ? this._fetchNamespace(h).listen(p, x, B, Z) : () => {};
				}
				_buildInstruction(h, p, x, B, Z) {
					return h.transition.build(
						this.driver,
						h.element,
						h.fromState.value,
						h.toState.value,
						x,
						B,
						h.fromState.options,
						h.toState.options,
						p,
						Z
					);
				}
				destroyInnerAnimations(h) {
					let p = this.driver.query(h, Xe, !0);
					p.forEach((x) => this.destroyActiveAnimationsForElement(x)),
						0 != this.playersByQueriedElement.size &&
							((p = this.driver.query(h, Ht, !0)),
							p.forEach((x) => this.finishActiveQueriedAnimationOnElement(x)));
				}
				destroyActiveAnimationsForElement(h) {
					const p = this.playersByElement.get(h);
					p &&
						p.forEach((x) => {
							x.queued ? (x.markedForDestroy = !0) : x.destroy();
						});
				}
				finishActiveQueriedAnimationOnElement(h) {
					const p = this.playersByQueriedElement.get(h);
					p && p.forEach((x) => x.finish());
				}
				whenRenderingDone() {
					return new Promise((h) => {
						if (this.players.length) return we(this.players).onDone(() => h());
						h();
					});
				}
				processLeaveNode(h) {
					var p;
					const x = h[Bn];
					if (x && x.setForRemoval) {
						if (((h[Bn] = Fi), x.namespaceId)) {
							this.destroyInnerAnimations(h);
							const B = this._fetchNamespace(x.namespaceId);
							B && B.clearElementCache(h);
						}
						this._onRemovalComplete(h, x.setForRemoval);
					}
					(null === (p = h.classList) || void 0 === p ? void 0 : p.contains(Ki)) &&
						this.markElementAsDisabled(h, !1),
						this.driver.query(h, '.ng-animate-disabled', !0).forEach((B) => {
							this.markElementAsDisabled(B, !1);
						});
				}
				flush(h = -1) {
					let p = [];
					if (
						(this.newHostElements.size &&
							(this.newHostElements.forEach((x, B) => this._balanceNamespaceList(x, B)),
							this.newHostElements.clear()),
						this.totalAnimations && this.collectedEnterElements.length)
					)
						for (let x = 0; x < this.collectedEnterElements.length; x++)
							_i(this.collectedEnterElements[x], 'ng-star-inserted');
					if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
						const x = [];
						try {
							p = this._flushAnimations(x, h);
						} finally {
							for (let B = 0; B < x.length; B++) x[B]();
						}
					} else
						for (let x = 0; x < this.collectedLeaveElements.length; x++)
							this.processLeaveNode(this.collectedLeaveElements[x]);
					if (
						((this.totalQueuedPlayers = 0),
						(this.collectedEnterElements.length = 0),
						(this.collectedLeaveElements.length = 0),
						this._flushFns.forEach((x) => x()),
						(this._flushFns = []),
						this._whenQuietFns.length)
					) {
						const x = this._whenQuietFns;
						(this._whenQuietFns = []),
							p.length
								? we(p).onDone(() => {
										x.forEach((B) => B());
								  })
								: x.forEach((B) => B());
					}
				}
				reportError(h) {
					throw new Error(
						`Unable to process animations due to the following failed trigger transitions\n ${h.join('\n')}`
					);
				}
				_flushAnimations(h, p) {
					const x = new ee(),
						B = [],
						Z = new Map(),
						me = [],
						Ce = new Map(),
						Qe = new Map(),
						dt = new Map(),
						St = new Set();
					this.disabledNodes.forEach((jt) => {
						St.add(jt);
						const Zt = this.driver.query(jt, '.ng-animate-queued', !0);
						for (let Xt = 0; Xt < Zt.length; Xt++) St.add(Zt[Xt]);
					});
					const Ut = this.bodyNode,
						nn = Array.from(this.statesByElement.keys()),
						En = li(nn, this.collectedEnterElements),
						an = new Map();
					let fn = 0;
					En.forEach((jt, Zt) => {
						const Xt = Ie + fn++;
						an.set(Zt, Xt), jt.forEach((ln) => _i(ln, Xt));
					});
					const Sn = [],
						ii = new Set(),
						ri = new Set();
					for (let jt = 0; jt < this.collectedLeaveElements.length; jt++) {
						const Zt = this.collectedLeaveElements[jt],
							Xt = Zt[Bn];
						Xt &&
							Xt.setForRemoval &&
							(Sn.push(Zt),
							ii.add(Zt),
							Xt.hasAnimation
								? this.driver.query(Zt, '.ng-star-inserted', !0).forEach((ln) => ii.add(ln))
								: ri.add(Zt));
					}
					const Ai = new Map(),
						Ri = li(nn, Array.from(ii));
					Ri.forEach((jt, Zt) => {
						const Xt = Ue + fn++;
						Ai.set(Zt, Xt), jt.forEach((ln) => _i(ln, Xt));
					}),
						h.push(() => {
							En.forEach((jt, Zt) => {
								const Xt = an.get(Zt);
								jt.forEach((ln) => zi(ln, Xt));
							}),
								Ri.forEach((jt, Zt) => {
									const Xt = Ai.get(Zt);
									jt.forEach((ln) => zi(ln, Xt));
								}),
								Sn.forEach((jt) => {
									this.processLeaveNode(jt);
								});
						});
					const Rr = [],
						ki = [];
					for (let jt = this._namespaceList.length - 1; jt >= 0; jt--)
						this._namespaceList[jt].drainQueuedTransitions(p).forEach((Xt) => {
							const ln = Xt.player,
								Zn = Xt.element;
							if ((Rr.push(ln), this.collectedEnterElements.length)) {
								const Gn = Zn[Bn];
								if (Gn && Gn.setForMove) {
									if (Gn.previousTriggersValues && Gn.previousTriggersValues.has(Xt.triggerName)) {
										const vr = Gn.previousTriggersValues.get(Xt.triggerName),
											Yi = this.statesByElement.get(Xt.element);
										Yi && Yi[Xt.triggerName] && (Yi[Xt.triggerName].value = vr);
									}
									return void ln.destroy();
								}
							}
							const Vn = !Ut || !this.driver.containsElement(Ut, Zn),
								$i = Ai.get(Zn),
								Br = an.get(Zn),
								Xn = this._buildInstruction(Xt, x, Br, $i, Vn);
							if (Xn.errors && Xn.errors.length) return void ki.push(Xn);
							if (Vn)
								return (
									ln.onStart(() => Fe(Zn, Xn.fromStyles)),
									ln.onDestroy(() => Je(Zn, Xn.toStyles)),
									void B.push(ln)
								);
							if (Xt.isFallbackTransition)
								return (
									ln.onStart(() => Fe(Zn, Xn.fromStyles)),
									ln.onDestroy(() => Je(Zn, Xn.toStyles)),
									void B.push(ln)
								);
							const Ws = [];
							Xn.timelines.forEach((Gn) => {
								(Gn.stretchStartingKeyframe = !0), this.disabledNodes.has(Gn.element) || Ws.push(Gn);
							}),
								(Xn.timelines = Ws),
								x.append(Zn, Xn.timelines),
								me.push({
									instruction: Xn,
									player: ln,
									element: Zn,
								}),
								Xn.queriedElements.forEach((Gn) => K(Ce, Gn, []).push(ln)),
								Xn.preStyleProps.forEach((Gn, vr) => {
									const Yi = Object.keys(Gn);
									if (Yi.length) {
										let Ji = Qe.get(vr);
										Ji || Qe.set(vr, (Ji = new Set())), Yi.forEach((lr) => Ji.add(lr));
									}
								}),
								Xn.postStyleProps.forEach((Gn, vr) => {
									const Yi = Object.keys(Gn);
									let Ji = dt.get(vr);
									Ji || dt.set(vr, (Ji = new Set())), Yi.forEach((lr) => Ji.add(lr));
								});
						});
					if (ki.length) {
						const jt = [];
						ki.forEach((Zt) => {
							jt.push(`@${Zt.triggerName} has failed due to:\n`),
								Zt.errors.forEach((Xt) => jt.push(`- ${Xt}\n`));
						}),
							Rr.forEach((Zt) => Zt.destroy()),
							this.reportError(jt);
					}
					const Mi = new Map(),
						or = new Map();
					me.forEach((jt) => {
						const Zt = jt.element;
						x.has(Zt) &&
							(or.set(Zt, Zt), this._beforeAnimationBuild(jt.player.namespaceId, jt.instruction, Mi));
					}),
						B.forEach((jt) => {
							const Zt = jt.element;
							this._getPreviousPlayers(Zt, !1, jt.namespaceId, jt.triggerName, null).forEach((ln) => {
								K(Mi, Zt, []).push(ln), ln.destroy();
							});
						});
					const ar = Sn.filter((jt) => wr(jt, Qe, dt)),
						Er = new Map();
					br(Er, this.driver, ri, dt, o.l3).forEach((jt) => {
						wr(jt, Qe, dt) && ar.push(jt);
					});
					const rs = new Map();
					En.forEach((jt, Zt) => {
						br(rs, this.driver, new Set(jt), Qe, o.k1);
					}),
						ar.forEach((jt) => {
							const Zt = Er.get(jt),
								Xt = rs.get(jt);
							Er.set(jt, Object.assign(Object.assign({}, Zt), Xt));
						});
					const _r = [],
						fs = [],
						ss = {};
					me.forEach((jt) => {
						const { element: Zt, player: Xt, instruction: ln } = jt;
						if (x.has(Zt)) {
							if (St.has(Zt))
								return (
									Xt.onDestroy(() => Je(Zt, ln.toStyles)),
									(Xt.disabled = !0),
									Xt.overrideTotalTime(ln.totalTime),
									void B.push(Xt)
								);
							let Zn = ss;
							if (or.size > 1) {
								let $i = Zt;
								const Br = [];
								for (; ($i = $i.parentNode); ) {
									const Xn = or.get($i);
									if (Xn) {
										Zn = Xn;
										break;
									}
									Br.push($i);
								}
								Br.forEach((Xn) => or.set(Xn, Zn));
							}
							const Vn = this._buildAnimation(Xt.namespaceId, ln, Mi, Z, rs, Er);
							if ((Xt.setRealPlayer(Vn), Zn === ss)) _r.push(Xt);
							else {
								const $i = this.playersByElement.get(Zn);
								$i && $i.length && (Xt.parentPlayer = we($i)), B.push(Xt);
							}
						} else
							Fe(Zt, ln.fromStyles),
								Xt.onDestroy(() => Je(Zt, ln.toStyles)),
								fs.push(Xt),
								St.has(Zt) && B.push(Xt);
					}),
						fs.forEach((jt) => {
							const Zt = Z.get(jt.element);
							if (Zt && Zt.length) {
								const Xt = we(Zt);
								jt.setRealPlayer(Xt);
							}
						}),
						B.forEach((jt) => {
							jt.parentPlayer ? jt.syncPlayerEvents(jt.parentPlayer) : jt.destroy();
						});
					for (let jt = 0; jt < Sn.length; jt++) {
						const Zt = Sn[jt],
							Xt = Zt[Bn];
						if ((zi(Zt, Ue), Xt && Xt.hasAnimation)) continue;
						let ln = [];
						if (Ce.size) {
							let Vn = Ce.get(Zt);
							Vn && Vn.length && ln.push(...Vn);
							let $i = this.driver.query(Zt, Ht, !0);
							for (let Br = 0; Br < $i.length; Br++) {
								let Xn = Ce.get($i[Br]);
								Xn && Xn.length && ln.push(...Xn);
							}
						}
						const Zn = ln.filter((Vn) => !Vn.destroyed);
						Zn.length ? Ar(this, Zt, Zn) : this.processLeaveNode(Zt);
					}
					return (
						(Sn.length = 0),
						_r.forEach((jt) => {
							this.players.push(jt),
								jt.onDone(() => {
									jt.destroy();
									const Zt = this.players.indexOf(jt);
									this.players.splice(Zt, 1);
								}),
								jt.play();
						}),
						_r
					);
				}
				elementContainsData(h, p) {
					let x = !1;
					const B = p[Bn];
					return (
						B && B.setForRemoval && (x = !0),
						this.playersByElement.has(p) && (x = !0),
						this.playersByQueriedElement.has(p) && (x = !0),
						this.statesByElement.has(p) && (x = !0),
						this._fetchNamespace(h).elementContainsData(p) || x
					);
				}
				afterFlush(h) {
					this._flushFns.push(h);
				}
				afterFlushAnimationsDone(h) {
					this._whenQuietFns.push(h);
				}
				_getPreviousPlayers(h, p, x, B, Z) {
					let me = [];
					if (p) {
						const Ce = this.playersByQueriedElement.get(h);
						Ce && (me = Ce);
					} else {
						const Ce = this.playersByElement.get(h);
						if (Ce) {
							const Qe = !Z || Z == Ni;
							Ce.forEach((dt) => {
								dt.queued || (!Qe && dt.triggerName != B) || me.push(dt);
							});
						}
					}
					return (
						(x || B) &&
							(me = me.filter((Ce) => !((x && x != Ce.namespaceId) || (B && B != Ce.triggerName)))),
						me
					);
				}
				_beforeAnimationBuild(h, p, x) {
					const Z = p.element,
						me = p.isRemovalTransition ? void 0 : h,
						Ce = p.isRemovalTransition ? void 0 : p.triggerName;
					for (const Qe of p.timelines) {
						const dt = Qe.element,
							St = dt !== Z,
							Ut = K(x, dt, []);
						this._getPreviousPlayers(dt, St, me, Ce, p.toState).forEach((En) => {
							const an = En.getRealPlayer();
							an.beforeDestroy && an.beforeDestroy(), En.destroy(), Ut.push(En);
						});
					}
					Fe(Z, p.fromStyles);
				}
				_buildAnimation(h, p, x, B, Z, me) {
					const Ce = p.triggerName,
						Qe = p.element,
						dt = [],
						St = new Set(),
						Ut = new Set(),
						nn = p.timelines.map((an) => {
							const fn = an.element;
							St.add(fn);
							const Sn = fn[Bn];
							if (Sn && Sn.removedBeforeQueried) return new o.ZN(an.duration, an.delay);
							const ii = fn !== Qe,
								ri = (function hs(N) {
									const h = [];
									return Jr(N, h), h;
								})((x.get(fn) || ni).map((Mi) => Mi.getRealPlayer())).filter(
									(Mi) => !!Mi.element && Mi.element === fn
								),
								Ai = Z.get(fn),
								Ri = me.get(fn),
								Rr = _e(0, this._normalizer, 0, an.keyframes, Ai, Ri),
								ki = this._buildPlayer(an, Rr, ri);
							if ((an.subTimeline && B && Ut.add(fn), ii)) {
								const Mi = new mi(h, Ce, fn);
								Mi.setRealPlayer(ki), dt.push(Mi);
							}
							return ki;
						});
					dt.forEach((an) => {
						K(this.playersByQueriedElement, an.element, []).push(an),
							an.onDone(() =>
								(function Zi(N, h, p) {
									let x;
									if (N instanceof Map) {
										if (((x = N.get(h)), x)) {
											if (x.length) {
												const B = x.indexOf(p);
												x.splice(B, 1);
											}
											0 == x.length && N.delete(h);
										}
									} else if (((x = N[h]), x)) {
										if (x.length) {
											const B = x.indexOf(p);
											x.splice(B, 1);
										}
										0 == x.length && delete N[h];
									}
									return x;
								})(this.playersByQueriedElement, an.element, an)
							);
					}),
						St.forEach((an) => _i(an, Rt));
					const En = we(nn);
					return (
						En.onDestroy(() => {
							St.forEach((an) => zi(an, Rt)), Je(Qe, p.toStyles);
						}),
						Ut.forEach((an) => {
							K(B, an, []).push(En);
						}),
						En
					);
				}
				_buildPlayer(h, p, x) {
					return p.length > 0
						? this.driver.animate(h.element, p, h.duration, h.delay, h.easing, x)
						: new o.ZN(h.duration, h.delay);
				}
			}
			class mi {
				constructor(h, p, x) {
					(this.namespaceId = h),
						(this.triggerName = p),
						(this.element = x),
						(this._player = new o.ZN()),
						(this._containsRealPlayer = !1),
						(this._queuedCallbacks = {}),
						(this.destroyed = !1),
						(this.markedForDestroy = !1),
						(this.disabled = !1),
						(this.queued = !0),
						(this.totalTime = 0);
				}
				setRealPlayer(h) {
					this._containsRealPlayer ||
						((this._player = h),
						Object.keys(this._queuedCallbacks).forEach((p) => {
							this._queuedCallbacks[p].forEach((x) => De(h, p, void 0, x));
						}),
						(this._queuedCallbacks = {}),
						(this._containsRealPlayer = !0),
						this.overrideTotalTime(h.totalTime),
						(this.queued = !1));
				}
				getRealPlayer() {
					return this._player;
				}
				overrideTotalTime(h) {
					this.totalTime = h;
				}
				syncPlayerEvents(h) {
					const p = this._player;
					p.triggerCallback && h.onStart(() => p.triggerCallback('start')),
						h.onDone(() => this.finish()),
						h.onDestroy(() => this.destroy());
				}
				_queueEvent(h, p) {
					K(this._queuedCallbacks, h, []).push(p);
				}
				onDone(h) {
					this.queued && this._queueEvent('done', h), this._player.onDone(h);
				}
				onStart(h) {
					this.queued && this._queueEvent('start', h), this._player.onStart(h);
				}
				onDestroy(h) {
					this.queued && this._queueEvent('destroy', h), this._player.onDestroy(h);
				}
				init() {
					this._player.init();
				}
				hasStarted() {
					return !this.queued && this._player.hasStarted();
				}
				play() {
					!this.queued && this._player.play();
				}
				pause() {
					!this.queued && this._player.pause();
				}
				restart() {
					!this.queued && this._player.restart();
				}
				finish() {
					this._player.finish();
				}
				destroy() {
					(this.destroyed = !0), this._player.destroy();
				}
				reset() {
					!this.queued && this._player.reset();
				}
				setPosition(h) {
					this.queued || this._player.setPosition(h);
				}
				getPosition() {
					return this.queued ? 0 : this._player.getPosition();
				}
				triggerCallback(h) {
					const p = this._player;
					p.triggerCallback && p.triggerCallback(h);
				}
			}
			function Jn(N) {
				return N && 1 === N.nodeType;
			}
			function gi(N, h) {
				const p = N.style.display;
				return (N.style.display = null != h ? h : 'none'), p;
			}
			function br(N, h, p, x, B) {
				const Z = [];
				p.forEach((Qe) => Z.push(gi(Qe)));
				const me = [];
				x.forEach((Qe, dt) => {
					const St = {};
					Qe.forEach((Ut) => {
						const nn = (St[Ut] = h.computeStyle(dt, Ut, B));
						(!nn || 0 == nn.length) && ((dt[Bn] = Li), me.push(dt));
					}),
						N.set(dt, St);
				});
				let Ce = 0;
				return p.forEach((Qe) => gi(Qe, Z[Ce++])), me;
			}
			function li(N, h) {
				const p = new Map();
				if ((N.forEach((Ce) => p.set(Ce, [])), 0 == h.length)) return p;
				const B = new Set(h),
					Z = new Map();
				function me(Ce) {
					if (!Ce) return 1;
					let Qe = Z.get(Ce);
					if (Qe) return Qe;
					const dt = Ce.parentNode;
					return (Qe = p.has(dt) ? dt : B.has(dt) ? 1 : me(dt)), Z.set(Ce, Qe), Qe;
				}
				return (
					h.forEach((Ce) => {
						const Qe = me(Ce);
						1 !== Qe && p.get(Qe).push(Ce);
					}),
					p
				);
			}
			function _i(N, h) {
				var p;
				null === (p = N.classList) || void 0 === p || p.add(h);
			}
			function zi(N, h) {
				var p;
				null === (p = N.classList) || void 0 === p || p.remove(h);
			}
			function Ar(N, h, p) {
				we(p).onDone(() => N.processLeaveNode(h));
			}
			function Jr(N, h) {
				for (let p = 0; p < N.length; p++) {
					const x = N[p];
					x instanceof o.ZE ? Jr(x.players, h) : h.push(x);
				}
			}
			function wr(N, h, p) {
				const x = p.get(N);
				if (!x) return !1;
				let B = h.get(N);
				return B ? x.forEach((Z) => B.add(Z)) : h.set(N, x), p.delete(N), !0;
			}
			class Dr {
				constructor(h, p, x) {
					(this.bodyNode = h),
						(this._driver = p),
						(this._normalizer = x),
						(this._triggerCache = {}),
						(this.onRemovalComplete = (B, Z) => {}),
						(this._transitionEngine = new wi(h, p, x)),
						(this._timelineEngine = new di(h, p, x)),
						(this._transitionEngine.onRemovalComplete = (B, Z) => this.onRemovalComplete(B, Z));
				}
				registerTrigger(h, p, x, B, Z) {
					const me = h + '-' + B;
					let Ce = this._triggerCache[me];
					if (!Ce) {
						const Qe = [],
							dt = mn(this._driver, Z, Qe);
						if (Qe.length)
							throw new Error(
								`The animation trigger "${B}" has failed to build due to the following errors:\n - ${Qe.join(
									'\n - '
								)}`
							);
						(Ce = (function pi(N, h, p) {
							return new Ci(N, h, p);
						})(B, dt, this._normalizer)),
							(this._triggerCache[me] = Ce);
					}
					this._transitionEngine.registerTrigger(p, B, Ce);
				}
				register(h, p) {
					this._transitionEngine.register(h, p);
				}
				destroy(h, p) {
					this._transitionEngine.destroy(h, p);
				}
				onInsert(h, p, x, B) {
					this._transitionEngine.insertNode(h, p, x, B);
				}
				onRemove(h, p, x, B) {
					this._transitionEngine.removeNode(h, p, B || !1, x);
				}
				disableAnimations(h, p) {
					this._transitionEngine.markElementAsDisabled(h, p);
				}
				process(h, p, x, B) {
					if ('@' == x.charAt(0)) {
						const [Z, me] = q(x);
						this._timelineEngine.command(Z, p, me, B);
					} else this._transitionEngine.trigger(h, p, x, B);
				}
				listen(h, p, x, B, Z) {
					if ('@' == x.charAt(0)) {
						const [me, Ce] = q(x);
						return this._timelineEngine.listen(me, p, Ce, Z);
					}
					return this._transitionEngine.listen(h, p, x, B, Z);
				}
				flush(h = -1) {
					this._transitionEngine.flush(h);
				}
				get players() {
					return this._transitionEngine.players.concat(this._timelineEngine.players);
				}
				whenRenderingDone() {
					return this._transitionEngine.whenRenderingDone();
				}
			}
			function zr(N, h) {
				let p = null,
					x = null;
				return (
					Array.isArray(h) && h.length
						? ((p = kr(h[0])), h.length > 1 && (x = kr(h[h.length - 1])))
						: h && (p = kr(h)),
					p || x ? new es(N, p, x) : null
				);
			}
			let es = (() => {
				class N {
					constructor(p, x, B) {
						(this._element = p), (this._startStyles = x), (this._endStyles = B), (this._state = 0);
						let Z = N.initialStylesByElement.get(p);
						Z || N.initialStylesByElement.set(p, (Z = {})), (this._initialStyles = Z);
					}
					start() {
						this._state < 1 &&
							(this._startStyles && Je(this._element, this._startStyles, this._initialStyles),
							(this._state = 1));
					}
					finish() {
						this.start(),
							this._state < 2 &&
								(Je(this._element, this._initialStyles),
								this._endStyles && (Je(this._element, this._endStyles), (this._endStyles = null)),
								(this._state = 1));
					}
					destroy() {
						this.finish(),
							this._state < 3 &&
								(N.initialStylesByElement.delete(this._element),
								this._startStyles && (Fe(this._element, this._startStyles), (this._endStyles = null)),
								this._endStyles && (Fe(this._element, this._endStyles), (this._endStyles = null)),
								Je(this._element, this._initialStyles),
								(this._state = 3));
					}
				}
				return (N.initialStylesByElement = new WeakMap()), N;
			})();
			function kr(N) {
				let h = null;
				const p = Object.keys(N);
				for (let x = 0; x < p.length; x++) {
					const B = p[x];
					ts(B) && ((h = h || {}), (h[B] = N[B]));
				}
				return h;
			}
			function ts(N) {
				return 'display' === N || 'position' === N;
			}
			const Gr = 'animation',
				hr = 'animationend';
			class Mr {
				constructor(h, p, x, B, Z, me, Ce) {
					(this._element = h),
						(this._name = p),
						(this._duration = x),
						(this._delay = B),
						(this._easing = Z),
						(this._fillMode = me),
						(this._onDoneFn = Ce),
						(this._finished = !1),
						(this._destroyed = !1),
						(this._startTime = 0),
						(this._position = 0),
						(this._eventFn = (Qe) => this._handleCallback(Qe));
				}
				apply() {
					(function Ms(N, h) {
						const p = Qi(N, '').trim();
						let x = 0;
						p.length &&
							((x =
								(function fr(N, h) {
									let p = 0;
									for (let x = 0; x < N.length; x++) N.charAt(x) === h && p++;
									return p;
								})(p, ',') + 1),
							(h = `${p}, ${h}`)),
							xr(N, '', h);
					})(
						this._element,
						`${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
					),
						pr(this._element, this._eventFn, !1),
						(this._startTime = Date.now());
				}
				pause() {
					vi(this._element, this._name, 'paused');
				}
				resume() {
					vi(this._element, this._name, 'running');
				}
				setPosition(h) {
					const p = nr(this._element, this._name);
					(this._position = h * this._duration), xr(this._element, 'Delay', `-${this._position}ms`, p);
				}
				getPosition() {
					return this._position;
				}
				_handleCallback(h) {
					const p = h._ngTestManualTimestamp || Date.now(),
						x = 1e3 * parseFloat(h.elapsedTime.toFixed(3));
					h.animationName == this._name &&
						Math.max(p - this._startTime, 0) >= this._delay &&
						x >= this._duration &&
						this.finish();
				}
				finish() {
					this._finished || ((this._finished = !0), this._onDoneFn(), pr(this._element, this._eventFn, !0));
				}
				destroy() {
					this._destroyed ||
						((this._destroyed = !0),
						this.finish(),
						(function Si(N, h) {
							const x = Qi(N, '').split(','),
								B = Bi(x, h);
							B >= 0 && (x.splice(B, 1), xr(N, '', x.join(',')));
						})(this._element, this._name));
				}
			}
			function vi(N, h, p) {
				xr(N, 'PlayState', p, nr(N, h));
			}
			function nr(N, h) {
				const p = Qi(N, '');
				return p.indexOf(',') > 0 ? Bi(p.split(','), h) : Bi([p], h);
			}
			function Bi(N, h) {
				for (let p = 0; p < N.length; p++) if (N[p].indexOf(h) >= 0) return p;
				return -1;
			}
			function pr(N, h, p) {
				p ? N.removeEventListener(hr, h) : N.addEventListener(hr, h);
			}
			function xr(N, h, p, x) {
				const B = Gr + h;
				if (null != x) {
					const Z = N.style[B];
					if (Z.length) {
						const me = Z.split(',');
						(me[x] = p), (p = me.join(','));
					}
				}
				N.style[B] = p;
			}
			function Qi(N, h) {
				return N.style[Gr + h] || '';
			}
			class Gi {
				constructor(h, p, x, B, Z, me, Ce, Qe) {
					(this.element = h),
						(this.keyframes = p),
						(this.animationName = x),
						(this._duration = B),
						(this._delay = Z),
						(this._finalStyles = Ce),
						(this._specialStyles = Qe),
						(this._onDoneFns = []),
						(this._onStartFns = []),
						(this._onDestroyFns = []),
						(this.currentSnapshot = {}),
						(this._state = 0),
						(this.easing = me || 'linear'),
						(this.totalTime = B + Z),
						this._buildStyler();
				}
				onStart(h) {
					this._onStartFns.push(h);
				}
				onDone(h) {
					this._onDoneFns.push(h);
				}
				onDestroy(h) {
					this._onDestroyFns.push(h);
				}
				destroy() {
					this.init(),
						!(this._state >= 4) &&
							((this._state = 4),
							this._styler.destroy(),
							this._flushStartFns(),
							this._flushDoneFns(),
							this._specialStyles && this._specialStyles.destroy(),
							this._onDestroyFns.forEach((h) => h()),
							(this._onDestroyFns = []));
				}
				_flushDoneFns() {
					this._onDoneFns.forEach((h) => h()), (this._onDoneFns = []);
				}
				_flushStartFns() {
					this._onStartFns.forEach((h) => h()), (this._onStartFns = []);
				}
				finish() {
					this.init(),
						!(this._state >= 3) &&
							((this._state = 3),
							this._styler.finish(),
							this._flushStartFns(),
							this._specialStyles && this._specialStyles.finish(),
							this._flushDoneFns());
				}
				setPosition(h) {
					this._styler.setPosition(h);
				}
				getPosition() {
					return this._styler.getPosition();
				}
				hasStarted() {
					return this._state >= 2;
				}
				init() {
					this._state >= 1 || ((this._state = 1), this._styler.apply(), this._delay && this._styler.pause());
				}
				play() {
					this.init(),
						this.hasStarted() ||
							(this._flushStartFns(),
							(this._state = 2),
							this._specialStyles && this._specialStyles.start()),
						this._styler.resume();
				}
				pause() {
					this.init(), this._styler.pause();
				}
				restart() {
					this.reset(), this.play();
				}
				reset() {
					(this._state = 0), this._styler.destroy(), this._buildStyler(), this._styler.apply();
				}
				_buildStyler() {
					this._styler = new Mr(
						this.element,
						this.animationName,
						this._duration,
						this._delay,
						this.easing,
						'forwards',
						() => this.finish()
					);
				}
				triggerCallback(h) {
					const p = 'start' == h ? this._onStartFns : this._onDoneFns;
					p.forEach((x) => x()), (p.length = 0);
				}
				beforeDestroy() {
					this.init();
					const h = {};
					if (this.hasStarted()) {
						const p = this._state >= 3;
						Object.keys(this._finalStyles).forEach((x) => {
							'offset' != x && (h[x] = p ? this._finalStyles[x] : xe(this.element, x));
						});
					}
					this.currentSnapshot = h;
				}
			}
			class mr extends o.ZN {
				constructor(h, p) {
					super(),
						(this.element = h),
						(this._startingStyles = {}),
						(this.__initialized = !1),
						(this._styles = tt(p));
				}
				init() {
					this.__initialized ||
						!this._startingStyles ||
						((this.__initialized = !0),
						Object.keys(this._styles).forEach((h) => {
							this._startingStyles[h] = this.element.style[h];
						}),
						super.init());
				}
				play() {
					!this._startingStyles ||
						(this.init(),
						Object.keys(this._styles).forEach((h) => this.element.style.setProperty(h, this._styles[h])),
						super.play());
				}
				destroy() {
					!this._startingStyles ||
						(Object.keys(this._startingStyles).forEach((h) => {
							const p = this._startingStyles[h];
							p ? this.element.style.setProperty(h, p) : this.element.style.removeProperty(h);
						}),
						(this._startingStyles = null),
						super.destroy());
				}
			}
			class ns {
				constructor() {
					this._count = 0;
				}
				validateStyleProperty(h) {
					return rt(h);
				}
				matchesElement(h, p) {
					return !1;
				}
				containsElement(h, p) {
					return Ge(h, p);
				}
				query(h, p, x) {
					return ge(h, p, x);
				}
				computeStyle(h, p, x) {
					return window.getComputedStyle(h)[p];
				}
				buildKeyframeElement(h, p, x) {
					x = x.map((Ce) => tt(Ce));
					let B = `@keyframes ${p} {\n`,
						Z = '';
					x.forEach((Ce) => {
						Z = ' ';
						const Qe = parseFloat(Ce.offset);
						(B += `${Z}${100 * Qe}% {\n`),
							(Z += ' '),
							Object.keys(Ce).forEach((dt) => {
								const St = Ce[dt];
								switch (dt) {
									case 'offset':
										return;
									case 'easing':
										return void (St && (B += `${Z}animation-timing-function: ${St};\n`));
									default:
										return void (B += `${Z}${dt}: ${St};\n`);
								}
							}),
							(B += `${Z}}\n`);
					}),
						(B += '}\n');
					const me = document.createElement('style');
					return (me.textContent = B), me;
				}
				animate(h, p, x, B, Z, me = [], Ce) {
					const Qe = me.filter((Sn) => Sn instanceof Gi),
						dt = {};
					te(x, B) &&
						Qe.forEach((Sn) => {
							let ii = Sn.currentSnapshot;
							Object.keys(ii).forEach((ri) => (dt[ri] = ii[ri]));
						});
					const St = (function Lr(N) {
						let h = {};
						return (
							N &&
								(Array.isArray(N) ? N : [N]).forEach((x) => {
									Object.keys(x).forEach((B) => {
										'offset' == B || 'easing' == B || (h[B] = x[B]);
									});
								}),
							h
						);
					})((p = fe(h, p, dt)));
					if (0 == x) return new mr(h, St);
					const Ut = 'gen_css_kf_' + this._count++,
						nn = this.buildKeyframeElement(h, Ut, p);
					(function is(N) {
						var h;
						const p = null === (h = N.getRootNode) || void 0 === h ? void 0 : h.call(N);
						return 'undefined' != typeof ShadowRoot && p instanceof ShadowRoot ? p : document.head;
					})(h).appendChild(nn);
					const an = zr(h, p),
						fn = new Gi(h, p, Ut, x, B, Z, St, an);
					return (
						fn.onDestroy(() =>
							(function ui(N) {
								N.parentNode.removeChild(N);
							})(nn)
						),
						fn
					);
				}
			}
			class hi {
				constructor(h, p, x, B) {
					(this.element = h),
						(this.keyframes = p),
						(this.options = x),
						(this._specialStyles = B),
						(this._onDoneFns = []),
						(this._onStartFns = []),
						(this._onDestroyFns = []),
						(this._initialized = !1),
						(this._finished = !1),
						(this._started = !1),
						(this._destroyed = !1),
						(this.time = 0),
						(this.parentPlayer = null),
						(this.currentSnapshot = {}),
						(this._duration = x.duration),
						(this._delay = x.delay || 0),
						(this.time = this._duration + this._delay);
				}
				_onFinish() {
					this._finished ||
						((this._finished = !0), this._onDoneFns.forEach((h) => h()), (this._onDoneFns = []));
				}
				init() {
					this._buildPlayer(), this._preparePlayerBeforeStart();
				}
				_buildPlayer() {
					if (this._initialized) return;
					this._initialized = !0;
					const h = this.keyframes;
					(this.domPlayer = this._triggerWebAnimation(this.element, h, this.options)),
						(this._finalKeyframe = h.length ? h[h.length - 1] : {}),
						this.domPlayer.addEventListener('finish', () => this._onFinish());
				}
				_preparePlayerBeforeStart() {
					this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
				}
				_triggerWebAnimation(h, p, x) {
					return h.animate(p, x);
				}
				onStart(h) {
					this._onStartFns.push(h);
				}
				onDone(h) {
					this._onDoneFns.push(h);
				}
				onDestroy(h) {
					this._onDestroyFns.push(h);
				}
				play() {
					this._buildPlayer(),
						this.hasStarted() ||
							(this._onStartFns.forEach((h) => h()),
							(this._onStartFns = []),
							(this._started = !0),
							this._specialStyles && this._specialStyles.start()),
						this.domPlayer.play();
				}
				pause() {
					this.init(), this.domPlayer.pause();
				}
				finish() {
					this.init(),
						this._specialStyles && this._specialStyles.finish(),
						this._onFinish(),
						this.domPlayer.finish();
				}
				reset() {
					this._resetDomPlayerState(), (this._destroyed = !1), (this._finished = !1), (this._started = !1);
				}
				_resetDomPlayerState() {
					this.domPlayer && this.domPlayer.cancel();
				}
				restart() {
					this.reset(), this.play();
				}
				hasStarted() {
					return this._started;
				}
				destroy() {
					this._destroyed ||
						((this._destroyed = !0),
						this._resetDomPlayerState(),
						this._onFinish(),
						this._specialStyles && this._specialStyles.destroy(),
						this._onDestroyFns.forEach((h) => h()),
						(this._onDestroyFns = []));
				}
				setPosition(h) {
					void 0 === this.domPlayer && this.init(), (this.domPlayer.currentTime = h * this.time);
				}
				getPosition() {
					return this.domPlayer.currentTime / this.time;
				}
				get totalTime() {
					return this._delay + this._duration;
				}
				beforeDestroy() {
					const h = {};
					if (this.hasStarted()) {
						const p = this._finalKeyframe;
						Object.keys(p).forEach((x) => {
							'offset' != x && (h[x] = this._finished ? p[x] : xe(this.element, x));
						});
					}
					this.currentSnapshot = h;
				}
				triggerCallback(h) {
					const p = 'start' == h ? this._onStartFns : this._onDoneFns;
					p.forEach((x) => x()), (p.length = 0);
				}
			}
			class Ir {
				constructor() {
					(this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(k().toString())),
						(this._cssKeyframesDriver = new ns());
				}
				validateStyleProperty(h) {
					return rt(h);
				}
				matchesElement(h, p) {
					return !1;
				}
				containsElement(h, p) {
					return Ge(h, p);
				}
				query(h, p, x) {
					return ge(h, p, x);
				}
				computeStyle(h, p, x) {
					return window.getComputedStyle(h)[p];
				}
				overrideWebAnimationsSupport(h) {
					this._isNativeImpl = h;
				}
				animate(h, p, x, B, Z, me = [], Ce) {
					if (!Ce && !this._isNativeImpl) return this._cssKeyframesDriver.animate(h, p, x, B, Z, me);
					const St = {
						duration: x,
						delay: B,
						fill: 0 == B ? 'both' : 'forwards',
					};
					Z && (St.easing = Z);
					const Ut = {},
						nn = me.filter((an) => an instanceof hi);
					te(x, B) &&
						nn.forEach((an) => {
							let fn = an.currentSnapshot;
							Object.keys(fn).forEach((Sn) => (Ut[Sn] = fn[Sn]));
						});
					const En = zr(h, (p = fe(h, (p = p.map((an) => Wt(an, !1))), Ut)));
					return new hi(h, p, St, En);
				}
			}
			function k() {
				return (G() && Element.prototype.animate) || {};
			}
			var z = S(9808);
			let I = (() => {
				class N extends o._j {
					constructor(p, x) {
						super(),
							(this._nextAnimationId = 0),
							(this._renderer = p.createRenderer(x.body, {
								id: '0',
								encapsulation: m.ifc.None,
								styles: [],
								data: { animation: [] },
							}));
					}
					build(p) {
						const x = this._nextAnimationId.toString();
						this._nextAnimationId++;
						const B = Array.isArray(p) ? (0, o.vP)(p) : p;
						return st(this._renderer, null, x, 'register', [B]), new Y(x, this._renderer);
					}
				}
				return (
					(N.ɵfac = function (p) {
						return new (p || N)(m.LFG(m.FYo), m.LFG(z.K0));
					}),
					(N.ɵprov = m.Yz7({ token: N, factory: N.ɵfac })),
					N
				);
			})();
			class Y extends o.LC {
				constructor(h, p) {
					super(), (this._id = h), (this._renderer = p);
				}
				create(h, p) {
					return new Ee(this._id, h, p || {}, this._renderer);
				}
			}
			class Ee {
				constructor(h, p, x, B) {
					(this.id = h),
						(this.element = p),
						(this._renderer = B),
						(this.parentPlayer = null),
						(this._started = !1),
						(this.totalTime = 0),
						this._command('create', x);
				}
				_listen(h, p) {
					return this._renderer.listen(this.element, `@@${this.id}:${h}`, p);
				}
				_command(h, ...p) {
					return st(this._renderer, this.element, this.id, h, p);
				}
				onDone(h) {
					this._listen('done', h);
				}
				onStart(h) {
					this._listen('start', h);
				}
				onDestroy(h) {
					this._listen('destroy', h);
				}
				init() {
					this._command('init');
				}
				hasStarted() {
					return this._started;
				}
				play() {
					this._command('play'), (this._started = !0);
				}
				pause() {
					this._command('pause');
				}
				restart() {
					this._command('restart');
				}
				finish() {
					this._command('finish');
				}
				destroy() {
					this._command('destroy');
				}
				reset() {
					this._command('reset'), (this._started = !1);
				}
				setPosition(h) {
					this._command('setPosition', h);
				}
				getPosition() {
					var h, p;
					return null !==
						(p =
							null === (h = this._renderer.engine.players[+this.id]) || void 0 === h
								? void 0
								: h.getPosition()) && void 0 !== p
						? p
						: 0;
				}
			}
			function st(N, h, p, x, B) {
				return N.setProperty(h, `@@${p}:${x}`, B);
			}
			const Lt = '@.disabled';
			let Nn = (() => {
				class N {
					constructor(p, x, B) {
						(this.delegate = p),
							(this.engine = x),
							(this._zone = B),
							(this._currentId = 0),
							(this._microtaskId = 1),
							(this._animationCallbacksBuffer = []),
							(this._rendererCache = new Map()),
							(this._cdRecurDepth = 0),
							(this.promise = Promise.resolve(0)),
							(x.onRemovalComplete = (Z, me) => {
								const Ce = null == me ? void 0 : me.parentNode(Z);
								Ce && me.removeChild(Ce, Z);
							});
					}
					createRenderer(p, x) {
						const Z = this.delegate.createRenderer(p, x);
						if (!(p && x && x.data && x.data.animation)) {
							let St = this._rendererCache.get(Z);
							return St || ((St = new on('', Z, this.engine)), this._rendererCache.set(Z, St)), St;
						}
						const me = x.id,
							Ce = x.id + '-' + this._currentId;
						this._currentId++, this.engine.register(Ce, p);
						const Qe = (St) => {
							Array.isArray(St) ? St.forEach(Qe) : this.engine.registerTrigger(me, Ce, p, St.name, St);
						};
						return x.data.animation.forEach(Qe), new Gt(this, Ce, Z, this.engine);
					}
					begin() {
						this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
					}
					_scheduleCountTask() {
						this.promise.then(() => {
							this._microtaskId++;
						});
					}
					scheduleListenerCallback(p, x, B) {
						p >= 0 && p < this._microtaskId
							? this._zone.run(() => x(B))
							: (0 == this._animationCallbacksBuffer.length &&
									Promise.resolve(null).then(() => {
										this._zone.run(() => {
											this._animationCallbacksBuffer.forEach((Z) => {
												const [me, Ce] = Z;
												me(Ce);
											}),
												(this._animationCallbacksBuffer = []);
										});
									}),
							  this._animationCallbacksBuffer.push([x, B]));
					}
					end() {
						this._cdRecurDepth--,
							0 == this._cdRecurDepth &&
								this._zone.runOutsideAngular(() => {
									this._scheduleCountTask(), this.engine.flush(this._microtaskId);
								}),
							this.delegate.end && this.delegate.end();
					}
					whenRenderingDone() {
						return this.engine.whenRenderingDone();
					}
				}
				return (
					(N.ɵfac = function (p) {
						return new (p || N)(m.LFG(m.FYo), m.LFG(Dr), m.LFG(m.R0b));
					}),
					(N.ɵprov = m.Yz7({ token: N, factory: N.ɵfac })),
					N
				);
			})();
			class on {
				constructor(h, p, x) {
					(this.namespaceId = h),
						(this.delegate = p),
						(this.engine = x),
						(this.destroyNode = this.delegate.destroyNode ? (B) => p.destroyNode(B) : null);
				}
				get data() {
					return this.delegate.data;
				}
				destroy() {
					this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy();
				}
				createElement(h, p) {
					return this.delegate.createElement(h, p);
				}
				createComment(h) {
					return this.delegate.createComment(h);
				}
				createText(h) {
					return this.delegate.createText(h);
				}
				appendChild(h, p) {
					this.delegate.appendChild(h, p), this.engine.onInsert(this.namespaceId, p, h, !1);
				}
				insertBefore(h, p, x, B = !0) {
					this.delegate.insertBefore(h, p, x), this.engine.onInsert(this.namespaceId, p, h, B);
				}
				removeChild(h, p, x) {
					this.engine.onRemove(this.namespaceId, p, this.delegate, x);
				}
				selectRootElement(h, p) {
					return this.delegate.selectRootElement(h, p);
				}
				parentNode(h) {
					return this.delegate.parentNode(h);
				}
				nextSibling(h) {
					return this.delegate.nextSibling(h);
				}
				setAttribute(h, p, x, B) {
					this.delegate.setAttribute(h, p, x, B);
				}
				removeAttribute(h, p, x) {
					this.delegate.removeAttribute(h, p, x);
				}
				addClass(h, p) {
					this.delegate.addClass(h, p);
				}
				removeClass(h, p) {
					this.delegate.removeClass(h, p);
				}
				setStyle(h, p, x, B) {
					this.delegate.setStyle(h, p, x, B);
				}
				removeStyle(h, p, x) {
					this.delegate.removeStyle(h, p, x);
				}
				setProperty(h, p, x) {
					'@' == p.charAt(0) && p == Lt ? this.disableAnimations(h, !!x) : this.delegate.setProperty(h, p, x);
				}
				setValue(h, p) {
					this.delegate.setValue(h, p);
				}
				listen(h, p, x) {
					return this.delegate.listen(h, p, x);
				}
				disableAnimations(h, p) {
					this.engine.disableAnimations(h, p);
				}
			}
			class Gt extends on {
				constructor(h, p, x, B) {
					super(p, x, B), (this.factory = h), (this.namespaceId = p);
				}
				setProperty(h, p, x) {
					'@' == p.charAt(0)
						? '.' == p.charAt(1) && p == Lt
							? this.disableAnimations(h, (x = void 0 === x || !!x))
							: this.engine.process(this.namespaceId, h, p.substr(1), x)
						: this.delegate.setProperty(h, p, x);
				}
				listen(h, p, x) {
					if ('@' == p.charAt(0)) {
						const B = (function qt(N) {
							switch (N) {
								case 'body':
									return document.body;
								case 'document':
									return document;
								case 'window':
									return window;
								default:
									return N;
							}
						})(h);
						let Z = p.substr(1),
							me = '';
						return (
							'@' != Z.charAt(0) &&
								([Z, me] = (function R(N) {
									const h = N.indexOf('.');
									return [N.substring(0, h), N.substr(h + 1)];
								})(Z)),
							this.engine.listen(this.namespaceId, B, Z, me, (Ce) => {
								this.factory.scheduleListenerCallback(Ce._data || -1, x, Ce);
							})
						);
					}
					return this.delegate.listen(h, p, x);
				}
			}
			let v = (() => {
				class N extends Dr {
					constructor(p, x, B) {
						super(p.body, x, B);
					}
					ngOnDestroy() {
						this.flush();
					}
				}
				return (
					(N.ɵfac = function (p) {
						return new (p || N)(m.LFG(z.K0), m.LFG(J), m.LFG(Cn));
					}),
					(N.ɵprov = m.Yz7({ token: N, factory: N.ɵfac })),
					N
				);
			})();
			const Kt = new m.OlP('AnimationModuleType'),
				Hn = [
					{ provide: o._j, useClass: I },
					{
						provide: Cn,
						useFactory: function W() {
							return new ji();
						},
					},
					{ provide: Dr, useClass: v },
					{
						provide: m.FYo,
						useFactory: function lt(N, h, p) {
							return new Nn(N, h, p);
						},
						deps: [P.se, Dr, m.R0b],
					},
				],
				Ti = [
					{
						provide: J,
						useFactory: function D() {
							return (function Qn() {
								return 'function' == typeof k();
							})()
								? new Ir()
								: new ns();
						},
					},
					{ provide: Kt, useValue: 'BrowserAnimations' },
					...Hn,
				],
				gr = [{ provide: J, useClass: ot }, { provide: Kt, useValue: 'NoopAnimations' }, ...Hn];
			let sr = (() => {
				class N {
					static withConfig(p) {
						return {
							ngModule: N,
							providers: p.disableAnimations ? gr : Ti,
						};
					}
				}
				return (
					(N.ɵfac = function (p) {
						return new (p || N)();
					}),
					(N.ɵmod = m.oAB({ type: N })),
					(N.ɵinj = m.cJS({ providers: Ti, imports: [P.b2] })),
					N
				);
			})();
		},
		2313: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { b2: () => bn, H7: () => Ft, q6: () => Vt, se: () => ut });
			var m = S(9808),
				P = S(5e3);
			class o extends m.w_ {
				constructor() {
					super(...arguments), (this.supportsDOMEvents = !0);
				}
			}
			class G extends o {
				static makeCurrent() {
					(0, m.HT)(new G());
				}
				onAndCancel(Te, se, Le) {
					return (
						Te.addEventListener(se, Le, !1),
						() => {
							Te.removeEventListener(se, Le, !1);
						}
					);
				}
				dispatchEvent(Te, se) {
					Te.dispatchEvent(se);
				}
				remove(Te) {
					Te.parentNode && Te.parentNode.removeChild(Te);
				}
				createElement(Te, se) {
					return (se = se || this.getDefaultDocument()).createElement(Te);
				}
				createHtmlDocument() {
					return document.implementation.createHTMLDocument('fakeTitle');
				}
				getDefaultDocument() {
					return document;
				}
				isElementNode(Te) {
					return Te.nodeType === Node.ELEMENT_NODE;
				}
				isShadowRoot(Te) {
					return Te instanceof DocumentFragment;
				}
				getGlobalEventTarget(Te, se) {
					return 'window' === se ? window : 'document' === se ? Te : 'body' === se ? Te.body : null;
				}
				getBaseHref(Te) {
					const se = (function we() {
						return (be = be || document.querySelector('base')), be ? be.getAttribute('href') : null;
					})();
					return null == se
						? null
						: (function De(qe) {
								(_e = _e || document.createElement('a')), _e.setAttribute('href', qe);
								const Te = _e.pathname;
								return '/' === Te.charAt(0) ? Te : `/${Te}`;
						  })(se);
				}
				resetBaseElement() {
					be = null;
				}
				getUserAgent() {
					return window.navigator.userAgent;
				}
				getCookie(Te) {
					return (0, m.Mx)(document.cookie, Te);
				}
			}
			let _e,
				be = null;
			const ae = new P.OlP('TRANSITION_ID'),
				K = [
					{
						provide: P.ip1,
						useFactory: function Q(qe, Te, se) {
							return () => {
								se.get(P.CZH).donePromise.then(() => {
									const Le = (0, m.q)(),
										mt = Te.querySelectorAll(`style[ng-transition="${qe}"]`);
									for (let $t = 0; $t < mt.length; $t++) Le.remove(mt[$t]);
								});
							};
						},
						deps: [ae, m.K0, P.zs3],
						multi: !0,
					},
				];
			class q {
				static init() {
					(0, P.VLi)(new q());
				}
				addToWindow(Te) {
					(P.dqk.getAngularTestability = (Le, mt = !0) => {
						const $t = Te.findTestabilityInTree(Le, mt);
						if (null == $t) throw new Error('Could not find testability for element.');
						return $t;
					}),
						(P.dqk.getAllAngularTestabilities = () => Te.getAllTestabilities()),
						(P.dqk.getAllAngularRootElements = () => Te.getAllRootElements()),
						P.dqk.frameworkStabilizers || (P.dqk.frameworkStabilizers = []),
						P.dqk.frameworkStabilizers.push((Le) => {
							const mt = P.dqk.getAllAngularTestabilities();
							let $t = mt.length,
								tn = !1;
							const Pn = function (Cn) {
								(tn = tn || Cn), $t--, 0 == $t && Le(tn);
							};
							mt.forEach(function (Cn) {
								Cn.whenStable(Pn);
							});
						});
				}
				findTestabilityInTree(Te, se, Le) {
					if (null == se) return null;
					const mt = Te.getTestability(se);
					return null != mt
						? mt
						: Le
						? (0, m.q)().isShadowRoot(se)
							? this.findTestabilityInTree(Te, se.host, !0)
							: this.findTestabilityInTree(Te, se.parentElement, !0)
						: null;
				}
			}
			let Re = (() => {
				class qe {
					build() {
						return new XMLHttpRequest();
					}
				}
				return (
					(qe.ɵfac = function (se) {
						return new (se || qe)();
					}),
					(qe.ɵprov = P.Yz7({ token: qe, factory: qe.ɵfac })),
					qe
				);
			})();
			const de = new P.OlP('EventManagerPlugins');
			let Be = (() => {
				class qe {
					constructor(se, Le) {
						(this._zone = Le),
							(this._eventNameToPlugin = new Map()),
							se.forEach((mt) => (mt.manager = this)),
							(this._plugins = se.slice().reverse());
					}
					addEventListener(se, Le, mt) {
						return this._findPluginFor(Le).addEventListener(se, Le, mt);
					}
					addGlobalEventListener(se, Le, mt) {
						return this._findPluginFor(Le).addGlobalEventListener(se, Le, mt);
					}
					getZone() {
						return this._zone;
					}
					_findPluginFor(se) {
						const Le = this._eventNameToPlugin.get(se);
						if (Le) return Le;
						const mt = this._plugins;
						for (let $t = 0; $t < mt.length; $t++) {
							const tn = mt[$t];
							if (tn.supports(se)) return this._eventNameToPlugin.set(se, tn), tn;
						}
						throw new Error(`No event manager plugin found for event ${se}`);
					}
				}
				return (
					(qe.ɵfac = function (se) {
						return new (se || qe)(P.LFG(de), P.LFG(P.R0b));
					}),
					(qe.ɵprov = P.Yz7({ token: qe, factory: qe.ɵfac })),
					qe
				);
			})();
			class $e {
				constructor(Te) {
					this._doc = Te;
				}
				addGlobalEventListener(Te, se, Le) {
					const mt = (0, m.q)().getGlobalEventTarget(this._doc, Te);
					if (!mt) throw new Error(`Unsupported event target ${mt} for event ${se}`);
					return this.addEventListener(mt, se, Le);
				}
			}
			let ye = (() => {
					class qe {
						constructor() {
							this._stylesSet = new Set();
						}
						addStyles(se) {
							const Le = new Set();
							se.forEach((mt) => {
								this._stylesSet.has(mt) || (this._stylesSet.add(mt), Le.add(mt));
							}),
								this.onStylesAdded(Le);
						}
						onStylesAdded(se) {}
						getAllStyles() {
							return Array.from(this._stylesSet);
						}
					}
					return (
						(qe.ɵfac = function (se) {
							return new (se || qe)();
						}),
						(qe.ɵprov = P.Yz7({ token: qe, factory: qe.ɵfac })),
						qe
					);
				})(),
				Ne = (() => {
					class qe extends ye {
						constructor(se) {
							super(), (this._doc = se), (this._hostNodes = new Map()), this._hostNodes.set(se.head, []);
						}
						_addStylesToHost(se, Le, mt) {
							se.forEach(($t) => {
								const tn = this._doc.createElement('style');
								(tn.textContent = $t), mt.push(Le.appendChild(tn));
							});
						}
						addHost(se) {
							const Le = [];
							this._addStylesToHost(this._stylesSet, se, Le), this._hostNodes.set(se, Le);
						}
						removeHost(se) {
							const Le = this._hostNodes.get(se);
							Le && Le.forEach(rt), this._hostNodes.delete(se);
						}
						onStylesAdded(se) {
							this._hostNodes.forEach((Le, mt) => {
								this._addStylesToHost(se, mt, Le);
							});
						}
						ngOnDestroy() {
							this._hostNodes.forEach((se) => se.forEach(rt));
						}
					}
					return (
						(qe.ɵfac = function (se) {
							return new (se || qe)(P.LFG(m.K0));
						}),
						(qe.ɵprov = P.Yz7({ token: qe, factory: qe.ɵfac })),
						qe
					);
				})();
			function rt(qe) {
				(0, m.q)().remove(qe);
			}
			const at = {
					svg: 'http://www.w3.org/2000/svg',
					xhtml: 'http://www.w3.org/1999/xhtml',
					xlink: 'http://www.w3.org/1999/xlink',
					xml: 'http://www.w3.org/XML/1998/namespace',
					xmlns: 'http://www.w3.org/2000/xmlns/',
				},
				Ge = /%COMP%/g;
			function Pe(qe, Te, se) {
				for (let Le = 0; Le < Te.length; Le++) {
					let mt = Te[Le];
					Array.isArray(mt) ? Pe(qe, mt, se) : ((mt = mt.replace(Ge, qe)), se.push(mt));
				}
				return se;
			}
			function Ie(qe) {
				return (Te) => {
					if ('__ngUnwrap__' === Te) return qe;
					!1 === qe(Te) && (Te.preventDefault(), (Te.returnValue = !1));
				};
			}
			let ut = (() => {
				class qe {
					constructor(se, Le, mt) {
						(this.eventManager = se),
							(this.sharedStylesHost = Le),
							(this.appId = mt),
							(this.rendererByCompId = new Map()),
							(this.defaultRenderer = new Xe(se));
					}
					createRenderer(se, Le) {
						if (!se || !Le) return this.defaultRenderer;
						switch (Le.encapsulation) {
							case P.ifc.Emulated: {
								let mt = this.rendererByCompId.get(Le.id);
								return (
									mt ||
										((mt = new nt(this.eventManager, this.sharedStylesHost, Le, this.appId)),
										this.rendererByCompId.set(Le.id, mt)),
									mt.applyToHost(se),
									mt
								);
							}
							case 1:
							case P.ifc.ShadowDom:
								return new gt(this.eventManager, this.sharedStylesHost, se, Le);
							default:
								if (!this.rendererByCompId.has(Le.id)) {
									const mt = Pe(Le.id, Le.styles, []);
									this.sharedStylesHost.addStyles(mt),
										this.rendererByCompId.set(Le.id, this.defaultRenderer);
								}
								return this.defaultRenderer;
						}
					}
					begin() {}
					end() {}
				}
				return (
					(qe.ɵfac = function (se) {
						return new (se || qe)(P.LFG(Be), P.LFG(Ne), P.LFG(P.AFp));
					}),
					(qe.ɵprov = P.Yz7({ token: qe, factory: qe.ɵfac })),
					qe
				);
			})();
			class Xe {
				constructor(Te) {
					(this.eventManager = Te), (this.data = Object.create(null)), (this.destroyNode = null);
				}
				destroy() {}
				createElement(Te, se) {
					return se ? document.createElementNS(at[se] || se, Te) : document.createElement(Te);
				}
				createComment(Te) {
					return document.createComment(Te);
				}
				createText(Te) {
					return document.createTextNode(Te);
				}
				appendChild(Te, se) {
					Te.appendChild(se);
				}
				insertBefore(Te, se, Le) {
					Te && Te.insertBefore(se, Le);
				}
				removeChild(Te, se) {
					Te && Te.removeChild(se);
				}
				selectRootElement(Te, se) {
					let Le = 'string' == typeof Te ? document.querySelector(Te) : Te;
					if (!Le) throw new Error(`The selector "${Te}" did not match any elements`);
					return se || (Le.textContent = ''), Le;
				}
				parentNode(Te) {
					return Te.parentNode;
				}
				nextSibling(Te) {
					return Te.nextSibling;
				}
				setAttribute(Te, se, Le, mt) {
					if (mt) {
						se = mt + ':' + se;
						const $t = at[mt];
						$t ? Te.setAttributeNS($t, se, Le) : Te.setAttribute(se, Le);
					} else Te.setAttribute(se, Le);
				}
				removeAttribute(Te, se, Le) {
					if (Le) {
						const mt = at[Le];
						mt ? Te.removeAttributeNS(mt, se) : Te.removeAttribute(`${Le}:${se}`);
					} else Te.removeAttribute(se);
				}
				addClass(Te, se) {
					Te.classList.add(se);
				}
				removeClass(Te, se) {
					Te.classList.remove(se);
				}
				setStyle(Te, se, Le, mt) {
					mt & (P.JOm.DashCase | P.JOm.Important)
						? Te.style.setProperty(se, Le, mt & P.JOm.Important ? 'important' : '')
						: (Te.style[se] = Le);
				}
				removeStyle(Te, se, Le) {
					Le & P.JOm.DashCase ? Te.style.removeProperty(se) : (Te.style[se] = '');
				}
				setProperty(Te, se, Le) {
					Te[se] = Le;
				}
				setValue(Te, se) {
					Te.nodeValue = se;
				}
				listen(Te, se, Le) {
					return 'string' == typeof Te
						? this.eventManager.addGlobalEventListener(Te, se, Ie(Le))
						: this.eventManager.addEventListener(Te, se, Ie(Le));
				}
			}
			class nt extends Xe {
				constructor(Te, se, Le, mt) {
					super(Te), (this.component = Le);
					const $t = Pe(mt + '-' + Le.id, Le.styles, []);
					se.addStyles($t),
						(this.contentAttr = (function We(qe) {
							return '_ngcontent-%COMP%'.replace(Ge, qe);
						})(mt + '-' + Le.id)),
						(this.hostAttr = (function ce(qe) {
							return '_nghost-%COMP%'.replace(Ge, qe);
						})(mt + '-' + Le.id));
				}
				applyToHost(Te) {
					super.setAttribute(Te, this.hostAttr, '');
				}
				createElement(Te, se) {
					const Le = super.createElement(Te, se);
					return super.setAttribute(Le, this.contentAttr, ''), Le;
				}
			}
			class gt extends Xe {
				constructor(Te, se, Le, mt) {
					super(Te),
						(this.sharedStylesHost = se),
						(this.hostEl = Le),
						(this.shadowRoot = Le.attachShadow({ mode: 'open' })),
						this.sharedStylesHost.addHost(this.shadowRoot);
					const $t = Pe(mt.id, mt.styles, []);
					for (let tn = 0; tn < $t.length; tn++) {
						const Pn = document.createElement('style');
						(Pn.textContent = $t[tn]), this.shadowRoot.appendChild(Pn);
					}
				}
				nodeOrShadowRoot(Te) {
					return Te === this.hostEl ? this.shadowRoot : Te;
				}
				destroy() {
					this.sharedStylesHost.removeHost(this.shadowRoot);
				}
				appendChild(Te, se) {
					return super.appendChild(this.nodeOrShadowRoot(Te), se);
				}
				insertBefore(Te, se, Le) {
					return super.insertBefore(this.nodeOrShadowRoot(Te), se, Le);
				}
				removeChild(Te, se) {
					return super.removeChild(this.nodeOrShadowRoot(Te), se);
				}
				parentNode(Te) {
					return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(Te)));
				}
			}
			let ke = (() => {
				class qe extends $e {
					constructor(se) {
						super(se);
					}
					supports(se) {
						return !0;
					}
					addEventListener(se, Le, mt) {
						return se.addEventListener(Le, mt, !1), () => this.removeEventListener(se, Le, mt);
					}
					removeEventListener(se, Le, mt) {
						return se.removeEventListener(Le, mt);
					}
				}
				return (
					(qe.ɵfac = function (se) {
						return new (se || qe)(P.LFG(m.K0));
					}),
					(qe.ɵprov = P.Yz7({ token: qe, factory: qe.ɵfac })),
					qe
				);
			})();
			const yt = ['alt', 'control', 'meta', 'shift'],
				sn = {
					'\b': 'Backspace',
					'\t': 'Tab',
					'\x7f': 'Delete',
					'\x1b': 'Escape',
					Del: 'Delete',
					Esc: 'Escape',
					Left: 'ArrowLeft',
					Right: 'ArrowRight',
					Up: 'ArrowUp',
					Down: 'ArrowDown',
					Menu: 'ContextMenu',
					Scroll: 'ScrollLock',
					Win: 'OS',
				},
				Wt = {
					A: '1',
					B: '2',
					C: '3',
					D: '4',
					E: '5',
					F: '6',
					G: '7',
					H: '8',
					I: '9',
					J: '*',
					K: '+',
					M: '-',
					N: '.',
					O: '/',
					'`': '0',
					'\x90': 'NumLock',
				},
				Ot = {
					alt: (qe) => qe.altKey,
					control: (qe) => qe.ctrlKey,
					meta: (qe) => qe.metaKey,
					shift: (qe) => qe.shiftKey,
				};
			let ft = (() => {
				class qe extends $e {
					constructor(se) {
						super(se);
					}
					supports(se) {
						return null != qe.parseEventName(se);
					}
					addEventListener(se, Le, mt) {
						const $t = qe.parseEventName(Le),
							tn = qe.eventCallback($t.fullKey, mt, this.manager.getZone());
						return this.manager
							.getZone()
							.runOutsideAngular(() => (0, m.q)().onAndCancel(se, $t.domEventName, tn));
					}
					static parseEventName(se) {
						const Le = se.toLowerCase().split('.'),
							mt = Le.shift();
						if (0 === Le.length || ('keydown' !== mt && 'keyup' !== mt)) return null;
						const $t = qe._normalizeKey(Le.pop());
						let tn = '';
						if (
							(yt.forEach((Cn) => {
								const ci = Le.indexOf(Cn);
								ci > -1 && (Le.splice(ci, 1), (tn += Cn + '.'));
							}),
							(tn += $t),
							0 != Le.length || 0 === $t.length)
						)
							return null;
						const Pn = {};
						return (Pn.domEventName = mt), (Pn.fullKey = tn), Pn;
					}
					static getEventFullKey(se) {
						let Le = '',
							mt = (function Je(qe) {
								let Te = qe.key;
								if (null == Te) {
									if (((Te = qe.keyIdentifier), null == Te)) return 'Unidentified';
									Te.startsWith('U+') &&
										((Te = String.fromCharCode(parseInt(Te.substring(2), 16))),
										3 === qe.location && Wt.hasOwnProperty(Te) && (Te = Wt[Te]));
								}
								return sn[Te] || Te;
							})(se);
						return (
							(mt = mt.toLowerCase()),
							' ' === mt ? (mt = 'space') : '.' === mt && (mt = 'dot'),
							yt.forEach(($t) => {
								$t != mt && Ot[$t](se) && (Le += $t + '.');
							}),
							(Le += mt),
							Le
						);
					}
					static eventCallback(se, Le, mt) {
						return ($t) => {
							qe.getEventFullKey($t) === se && mt.runGuarded(() => Le($t));
						};
					}
					static _normalizeKey(se) {
						return 'esc' === se ? 'escape' : se;
					}
				}
				return (
					(qe.ɵfac = function (se) {
						return new (se || qe)(P.LFG(m.K0));
					}),
					(qe.ɵprov = P.Yz7({ token: qe, factory: qe.ɵfac })),
					qe
				);
			})();
			const Vt = (0, P.eFA)(P._c5, 'browser', [
					{ provide: P.Lbi, useValue: m.bD },
					{
						provide: P.g9A,
						useValue: function Fe() {
							G.makeCurrent(), q.init();
						},
						multi: !0,
					},
					{
						provide: m.K0,
						useFactory: function It() {
							return (0, P.RDi)(document), document;
						},
						deps: [],
					},
				]),
				en = [
					{ provide: P.zSh, useValue: 'root' },
					{
						provide: P.qLn,
						useFactory: function Ct() {
							return new P.qLn();
						},
						deps: [],
					},
					{
						provide: de,
						useClass: ke,
						multi: !0,
						deps: [m.K0, P.R0b, P.Lbi],
					},
					{ provide: de, useClass: ft, multi: !0, deps: [m.K0] },
					{ provide: ut, useClass: ut, deps: [Be, Ne, P.AFp] },
					{ provide: P.FYo, useExisting: ut },
					{ provide: ye, useExisting: Ne },
					{ provide: Ne, useClass: Ne, deps: [m.K0] },
					{ provide: P.dDg, useClass: P.dDg, deps: [P.R0b] },
					{ provide: Be, useClass: Be, deps: [de, P.R0b] },
					{ provide: m.JF, useClass: Re, deps: [] },
				];
			let bn = (() => {
				class qe {
					constructor(se) {
						if (se)
							throw new Error(
								'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
							);
					}
					static withServerTransition(se) {
						return {
							ngModule: qe,
							providers: [{ provide: P.AFp, useValue: se.appId }, { provide: ae, useExisting: P.AFp }, K],
						};
					}
				}
				return (
					(qe.ɵfac = function (se) {
						return new (se || qe)(P.LFG(qe, 12));
					}),
					(qe.ɵmod = P.oAB({ type: qe })),
					(qe.ɵinj = P.cJS({
						providers: en,
						imports: [m.ez, P.hGG],
					})),
					qe
				);
			})();
			'undefined' != typeof window && window;
			let Ft = (() => {
					class qe {}
					return (
						(qe.ɵfac = function (se) {
							return new (se || qe)();
						}),
						(qe.ɵprov = P.Yz7({
							token: qe,
							factory: function (se) {
								let Le = null;
								return (Le = se ? new (se || qe)() : P.LFG(_n)), Le;
							},
							providedIn: 'root',
						})),
						qe
					);
				})(),
				_n = (() => {
					class qe extends Ft {
						constructor(se) {
							super(), (this._doc = se);
						}
						sanitize(se, Le) {
							if (null == Le) return null;
							switch (se) {
								case P.q3G.NONE:
									return Le;
								case P.q3G.HTML:
									return (0, P.qzn)(Le, 'HTML')
										? (0, P.z3N)(Le)
										: (0, P.EiD)(this._doc, String(Le)).toString();
								case P.q3G.STYLE:
									return (0, P.qzn)(Le, 'Style') ? (0, P.z3N)(Le) : Le;
								case P.q3G.SCRIPT:
									if ((0, P.qzn)(Le, 'Script')) return (0, P.z3N)(Le);
									throw new Error('unsafe value used in a script context');
								case P.q3G.URL:
									return (
										(0, P.yhl)(Le), (0, P.qzn)(Le, 'URL') ? (0, P.z3N)(Le) : (0, P.mCW)(String(Le))
									);
								case P.q3G.RESOURCE_URL:
									if ((0, P.qzn)(Le, 'ResourceURL')) return (0, P.z3N)(Le);
									throw new Error(
										'unsafe value used in a resource URL context (see https://g.co/ng/security#xss)'
									);
								default:
									throw new Error(
										`Unexpected SecurityContext ${se} (see https://g.co/ng/security#xss)`
									);
							}
						}
						bypassSecurityTrustHtml(se) {
							return (0, P.JVY)(se);
						}
						bypassSecurityTrustStyle(se) {
							return (0, P.L6k)(se);
						}
						bypassSecurityTrustScript(se) {
							return (0, P.eBb)(se);
						}
						bypassSecurityTrustUrl(se) {
							return (0, P.LAX)(se);
						}
						bypassSecurityTrustResourceUrl(se) {
							return (0, P.pB0)(se);
						}
					}
					return (
						(qe.ɵfac = function (se) {
							return new (se || qe)(P.LFG(m.K0));
						}),
						(qe.ɵprov = P.Yz7({
							token: qe,
							factory: function (se) {
								let Le = null;
								return (
									(Le = se
										? new se()
										: (function wn(qe) {
												return new _n(qe.get(m.K0));
										  })(P.LFG(P.zs3))),
									Le
								);
							},
							providedIn: 'root',
						})),
						qe
					);
				})();
		},
		1083: (Et, Ve, S) => {
			'use strict';
			S.d(Ve, { F0: () => Gn, yS: () => lr, Bz: () => V, lC: () => Gi });
			var m = S(5e3);
			const o = (0, S(3888).d)(
				(w) =>
					function () {
						w(this), (this.name = 'EmptyError'), (this.message = 'no elements in sequence');
					}
			);
			var G = S(8306),
				be = S(727),
				we = S(4482),
				_e = S(5403);
			function De() {
				return (0, we.e)((w, y) => {
					let _ = null;
					w._refCount++;
					const T = new _e.Q(y, void 0, void 0, void 0, () => {
						if (!w || w._refCount <= 0 || 0 < --w._refCount) return void (_ = null);
						const O = w._connection,
							$ = _;
						(_ = null), O && (!$ || O === $) && O.unsubscribe(), y.unsubscribe();
					});
					w.subscribe(T), T.closed || (_ = w.connect());
				});
			}
			class ae extends G.y {
				constructor(y, _) {
					super(),
						(this.source = y),
						(this.subjectFactory = _),
						(this._subject = null),
						(this._refCount = 0),
						(this._connection = null),
						(0, we.A)(y) && (this.lift = y.lift);
				}
				_subscribe(y) {
					return this.getSubject().subscribe(y);
				}
				getSubject() {
					const y = this._subject;
					return (!y || y.isStopped) && (this._subject = this.subjectFactory()), this._subject;
				}
				_teardown() {
					this._refCount = 0;
					const { _connection: y } = this;
					(this._subject = this._connection = null), null == y || y.unsubscribe();
				}
				connect() {
					let y = this._connection;
					if (!y) {
						y = this._connection = new be.w0();
						const _ = this.getSubject();
						y.add(
							this.source.subscribe(
								new _e.Q(
									_,
									void 0,
									() => {
										this._teardown(), _.complete();
									},
									(T) => {
										this._teardown(), _.error(T);
									},
									() => this._teardown()
								)
							)
						),
							y.closed && ((this._connection = null), (y = be.w0.EMPTY));
					}
					return y;
				}
				refCount() {
					return De()(this);
				}
			}
			var Q = S(2076),
				K = S(9646),
				q = S(1135),
				Re = S(9841),
				de = S(7272),
				Be = S(9770),
				$e = S(515),
				ye = S(7579);
			function Ne(w, y, _, T, O) {
				return ($, le) => {
					let Se = _,
						ct = y,
						zt = 0;
					$.subscribe(
						new _e.Q(
							le,
							(kn) => {
								const un = zt++;
								(ct = Se ? w(ct, kn, un) : ((Se = !0), kn)), T && le.next(ct);
							},
							O &&
								(() => {
									Se && le.next(ct), le.complete();
								})
						)
					);
				};
			}
			function rt(w, y) {
				return (0, we.e)(Ne(w, y, arguments.length >= 2, !0));
			}
			var at = S(9300);
			function Ge(w) {
				return w <= 0
					? () => $e.E
					: (0, we.e)((y, _) => {
							let T = [];
							y.subscribe(
								new _e.Q(
									_,
									(O) => {
										T.push(O), w < T.length && T.shift();
									},
									() => {
										for (const O of T) _.next(O);
										_.complete();
									},
									void 0,
									() => {
										T = null;
									}
								)
							);
					  });
			}
			function ge(w = tt) {
				return (0, we.e)((y, _) => {
					let T = !1;
					y.subscribe(
						new _e.Q(
							_,
							(O) => {
								(T = !0), _.next(O);
							},
							() => (T ? _.complete() : _.error(w()))
						)
					);
				});
			}
			function tt() {
				return new o();
			}
			function ot(w) {
				return (0, we.e)((y, _) => {
					let T = !1;
					y.subscribe(
						new _e.Q(
							_,
							(O) => {
								(T = !0), _.next(O);
							},
							() => {
								T || _.next(w), _.complete();
							}
						)
					);
				});
			}
			var J = S(4671),
				ce = S(5698);
			function Pe(w, y) {
				const _ = arguments.length >= 2;
				return (T) =>
					T.pipe(w ? (0, at.h)((O, $) => w(O, $, T)) : J.y, (0, ce.q)(1), _ ? ot(y) : ge(() => new o()));
			}
			var Ie = S(4004),
				Ue = S(3900),
				ut = S(8675),
				Xe = S(262),
				Rt = S(4351),
				Ht = S(5577),
				nt = S(8505),
				gt = S(8746),
				ke = S(8189),
				yt = S(9808);
			class xt {
				constructor(y, _) {
					(this.id = y), (this.url = _);
				}
			}
			class sn extends xt {
				constructor(y, _, T = 'imperative', O = null) {
					super(y, _), (this.navigationTrigger = T), (this.restoredState = O);
				}
				toString() {
					return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
				}
			}
			class Wt extends xt {
				constructor(y, _, T) {
					super(y, _), (this.urlAfterRedirects = T);
				}
				toString() {
					return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
				}
			}
			class Ot extends xt {
				constructor(y, _, T) {
					super(y, _), (this.reason = T);
				}
				toString() {
					return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
				}
			}
			class ft extends xt {
				constructor(y, _, T) {
					super(y, _), (this.error = T);
				}
				toString() {
					return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
				}
			}
			class Je extends xt {
				constructor(y, _, T, O) {
					super(y, _), (this.urlAfterRedirects = T), (this.state = O);
				}
				toString() {
					return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Fe extends xt {
				constructor(y, _, T, O) {
					super(y, _), (this.urlAfterRedirects = T), (this.state = O);
				}
				toString() {
					return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Ct extends xt {
				constructor(y, _, T, O, $) {
					super(y, _), (this.urlAfterRedirects = T), (this.state = O), (this.shouldActivate = $);
				}
				toString() {
					return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
				}
			}
			class It extends xt {
				constructor(y, _, T, O) {
					super(y, _), (this.urlAfterRedirects = T), (this.state = O);
				}
				toString() {
					return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Bt extends xt {
				constructor(y, _, T, O) {
					super(y, _), (this.urlAfterRedirects = T), (this.state = O);
				}
				toString() {
					return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Vt {
				constructor(y) {
					this.route = y;
				}
				toString() {
					return `RouteConfigLoadStart(path: ${this.route.path})`;
				}
			}
			class en {
				constructor(y) {
					this.route = y;
				}
				toString() {
					return `RouteConfigLoadEnd(path: ${this.route.path})`;
				}
			}
			class bn {
				constructor(y) {
					this.snapshot = y;
				}
				toString() {
					return `ChildActivationStart(path: '${
						(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
					}')`;
				}
			}
			class Oe {
				constructor(y) {
					this.snapshot = y;
				}
				toString() {
					return `ChildActivationEnd(path: '${
						(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
					}')`;
				}
			}
			class F {
				constructor(y) {
					this.snapshot = y;
				}
				toString() {
					return `ActivationStart(path: '${
						(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
					}')`;
				}
			}
			class U {
				constructor(y) {
					this.snapshot = y;
				}
				toString() {
					return `ActivationEnd(path: '${
						(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
					}')`;
				}
			}
			class te {
				constructor(y, _, T) {
					(this.routerEvent = y), (this.position = _), (this.anchor = T);
				}
				toString() {
					return `Scroll(anchor: '${this.anchor}', position: '${
						this.position ? `${this.position[0]}, ${this.position[1]}` : null
					}')`;
				}
			}
			const fe = 'primary';
			class Ye {
				constructor(y) {
					this.params = y || {};
				}
				has(y) {
					return Object.prototype.hasOwnProperty.call(this.params, y);
				}
				get(y) {
					if (this.has(y)) {
						const _ = this.params[y];
						return Array.isArray(_) ? _[0] : _;
					}
					return null;
				}
				getAll(y) {
					if (this.has(y)) {
						const _ = this.params[y];
						return Array.isArray(_) ? _ : [_];
					}
					return [];
				}
				get keys() {
					return Object.keys(this.params);
				}
			}
			function xe(w) {
				return new Ye(w);
			}
			const X = 'ngNavigationCancelingError';
			function re(w) {
				const y = Error('NavigationCancelingError: ' + w);
				return (y[X] = !0), y;
			}
			function it(w, y, _) {
				const T = _.path.split('/');
				if (T.length > w.length || ('full' === _.pathMatch && (y.hasChildren() || T.length < w.length)))
					return null;
				const O = {};
				for (let $ = 0; $ < T.length; $++) {
					const le = T[$],
						Se = w[$];
					if (le.startsWith(':')) O[le.substring(1)] = Se;
					else if (le !== Se.path) return null;
				}
				return { consumed: w.slice(0, T.length), posParams: O };
			}
			function pt(w, y) {
				const _ = w ? Object.keys(w) : void 0,
					T = y ? Object.keys(y) : void 0;
				if (!_ || !T || _.length != T.length) return !1;
				let O;
				for (let $ = 0; $ < _.length; $++) if (((O = _[$]), !At(w[O], y[O]))) return !1;
				return !0;
			}
			function At(w, y) {
				if (Array.isArray(w) && Array.isArray(y)) {
					if (w.length !== y.length) return !1;
					const _ = [...w].sort(),
						T = [...y].sort();
					return _.every((O, $) => T[$] === O);
				}
				return w === y;
			}
			function Qt(w) {
				return Array.prototype.concat.apply([], w);
			}
			function xn(w) {
				return w.length > 0 ? w[w.length - 1] : null;
			}
			function On(w, y) {
				for (const _ in w) w.hasOwnProperty(_) && y(w[_], _);
			}
			function An(w) {
				return (0, m.CqO)(w) ? w : (0, m.QGY)(w) ? (0, Q.D)(Promise.resolve(w)) : (0, K.of)(w);
			}
			const Pt = {
					exact: function He(w, y, _) {
						if (
							!_n(w.segments, y.segments) ||
							!ee(w.segments, y.segments, _) ||
							w.numberOfChildren !== y.numberOfChildren
						)
							return !1;
						for (const T in y.children)
							if (!w.children[T] || !He(w.children[T], y.children[T], _)) return !1;
						return !0;
					},
					subset: oe,
				},
				Yn = {
					exact: function Me(w, y) {
						return pt(w, y);
					},
					subset: function ue(w, y) {
						return (
							Object.keys(y).length <= Object.keys(w).length &&
							Object.keys(y).every((_) => At(w[_], y[_]))
						);
					},
					ignored: () => !0,
				};
			function gn(w, y, _) {
				return (
					Pt[_.paths](w.root, y.root, _.matrixParams) &&
					Yn[_.queryParams](w.queryParams, y.queryParams) &&
					!('exact' === _.fragment && w.fragment !== y.fragment)
				);
			}
			function oe(w, y, _) {
				return he(w, y, y.segments, _);
			}
			function he(w, y, _, T) {
				if (w.segments.length > _.length) {
					const O = w.segments.slice(0, _.length);
					return !(!_n(O, _) || y.hasChildren() || !ee(O, _, T));
				}
				if (w.segments.length === _.length) {
					if (!_n(w.segments, _) || !ee(w.segments, _, T)) return !1;
					for (const O in y.children) if (!w.children[O] || !oe(w.children[O], y.children[O], T)) return !1;
					return !0;
				}
				{
					const O = _.slice(0, w.segments.length),
						$ = _.slice(w.segments.length);
					return (
						!!(_n(w.segments, O) && ee(w.segments, O, T) && w.children[fe]) && he(w.children[fe], y, $, T)
					);
				}
			}
			function ee(w, y, _) {
				return y.every((T, O) => Yn[_](w[O].parameters, T.parameters));
			}
			class je {
				constructor(y, _, T) {
					(this.root = y), (this.queryParams = _), (this.fragment = T);
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = xe(this.queryParams)), this._queryParamMap;
				}
				toString() {
					return se.serialize(this);
				}
			}
			class Ke {
				constructor(y, _) {
					(this.segments = y), (this.children = _), (this.parent = null), On(_, (T, O) => (T.parent = this));
				}
				hasChildren() {
					return this.numberOfChildren > 0;
				}
				get numberOfChildren() {
					return Object.keys(this.children).length;
				}
				toString() {
					return Le(this);
				}
			}
			class Ft {
				constructor(y, _) {
					(this.path = y), (this.parameters = _);
				}
				get parameterMap() {
					return this._parameterMap || (this._parameterMap = xe(this.parameters)), this._parameterMap;
				}
				toString() {
					return bi(this);
				}
			}
			function _n(w, y) {
				return w.length === y.length && w.every((_, T) => _.path === y[T].path);
			}
			class qe {}
			class Te {
				parse(y) {
					const _ = new Ln(y);
					return new je(_.parseRootSegment(), _.parseQueryParams(), _.parseFragment());
				}
				serialize(y) {
					const _ = `/${mt(y.root, !0)}`,
						T = (function si(w) {
							const y = Object.keys(w)
								.map((_) => {
									const T = w[_];
									return Array.isArray(T)
										? T.map((O) => `${tn(_)}=${tn(O)}`).join('&')
										: `${tn(_)}=${tn(T)}`;
								})
								.filter((_) => !!_);
							return y.length ? `?${y.join('&')}` : '';
						})(y.queryParams);
					return `${_}${T}${
						'string' == typeof y.fragment
							? `#${(function Pn(w) {
									return encodeURI(w);
							  })(y.fragment)}`
							: ''
					}`;
				}
			}
			const se = new Te();
			function Le(w) {
				return w.segments.map((y) => bi(y)).join('/');
			}
			function mt(w, y) {
				if (!w.hasChildren()) return Le(w);
				if (y) {
					const _ = w.children[fe] ? mt(w.children[fe], !1) : '',
						T = [];
					return (
						On(w.children, (O, $) => {
							$ !== fe && T.push(`${$}:${mt(O, !1)}`);
						}),
						T.length > 0 ? `${_}(${T.join('//')})` : _
					);
				}
				{
					const _ = (function Un(w, y) {
						let _ = [];
						return (
							On(w.children, (T, O) => {
								O === fe && (_ = _.concat(y(T, O)));
							}),
							On(w.children, (T, O) => {
								O !== fe && (_ = _.concat(y(T, O)));
							}),
							_
						);
					})(w, (T, O) => (O === fe ? [mt(w.children[fe], !1)] : [`${O}:${mt(T, !1)}`]));
					return 1 === Object.keys(w.children).length && null != w.children[fe]
						? `${Le(w)}/${_[0]}`
						: `${Le(w)}/(${_.join('//')})`;
				}
			}
			function $t(w) {
				return encodeURIComponent(w)
					.replace(/%40/g, '@')
					.replace(/%3A/gi, ':')
					.replace(/%24/g, '$')
					.replace(/%2C/gi, ',');
			}
			function tn(w) {
				return $t(w).replace(/%3B/gi, ';');
			}
			function Cn(w) {
				return $t(w).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
			}
			function ci(w) {
				return decodeURIComponent(w);
			}
			function ji(w) {
				return ci(w.replace(/\+/g, '%20'));
			}
			function bi(w) {
				return `${Cn(w.path)}${(function Yt(w) {
					return Object.keys(w)
						.map((y) => `;${Cn(y)}=${Cn(w[y])}`)
						.join('');
				})(w.parameters)}`;
			}
			const zn = /^[^\/()?;=#]+/;
			function Tt(w) {
				const y = w.match(zn);
				return y ? y[0] : '';
			}
			const Dn = /^[^=?&#]+/,
				pi = /^[^&#]+/;
			class Ln {
				constructor(y) {
					(this.url = y), (this.remaining = y);
				}
				parseRootSegment() {
					return (
						this.consumeOptional('/'),
						'' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
							? new Ke([], {})
							: new Ke([], this.parseChildren())
					);
				}
				parseQueryParams() {
					const y = {};
					if (this.consumeOptional('?'))
						do {
							this.parseQueryParam(y);
						} while (this.consumeOptional('&'));
					return y;
				}
				parseFragment() {
					return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
				}
				parseChildren() {
					if ('' === this.remaining) return {};
					this.consumeOptional('/');
					const y = [];
					for (
						this.peekStartsWith('(') || y.push(this.parseSegment());
						this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

					)
						this.capture('/'), y.push(this.parseSegment());
					let _ = {};
					this.peekStartsWith('/(') && (this.capture('/'), (_ = this.parseParens(!0)));
					let T = {};
					return (
						this.peekStartsWith('(') && (T = this.parseParens(!1)),
						(y.length > 0 || Object.keys(_).length > 0) && (T[fe] = new Ke(y, _)),
						T
					);
				}
				parseSegment() {
					const y = Tt(this.remaining);
					if ('' === y && this.peekStartsWith(';'))
						throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
					return this.capture(y), new Ft(ci(y), this.parseMatrixParams());
				}
				parseMatrixParams() {
					const y = {};
					for (; this.consumeOptional(';'); ) this.parseParam(y);
					return y;
				}
				parseParam(y) {
					const _ = Tt(this.remaining);
					if (!_) return;
					this.capture(_);
					let T = '';
					if (this.consumeOptional('=')) {
						const O = Tt(this.remaining);
						O && ((T = O), this.capture(T));
					}
					y[ci(_)] = ci(T);
				}
				parseQueryParam(y) {
					const _ = (function Fn(w) {
						const y = w.match(Dn);
						return y ? y[0] : '';
					})(this.remaining);
					if (!_) return;
					this.capture(_);
					let T = '';
					if (this.consumeOptional('=')) {
						const le = (function Ci(w) {
							const y = w.match(pi);
							return y ? y[0] : '';
						})(this.remaining);
						le && ((T = le), this.capture(T));
					}
					const O = ji(_),
						$ = ji(T);
					if (y.hasOwnProperty(O)) {
						let le = y[O];
						Array.isArray(le) || ((le = [le]), (y[O] = le)), le.push($);
					} else y[O] = $;
				}
				parseParens(y) {
					const _ = {};
					for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
						const T = Tt(this.remaining),
							O = this.remaining[T.length];
						if ('/' !== O && ')' !== O && ';' !== O) throw new Error(`Cannot parse url '${this.url}'`);
						let $;
						T.indexOf(':') > -1
							? (($ = T.substr(0, T.indexOf(':'))), this.capture($), this.capture(':'))
							: y && ($ = fe);
						const le = this.parseChildren();
						(_[$] = 1 === Object.keys(le).length ? le[fe] : new Ke([], le)), this.consumeOptional('//');
					}
					return _;
				}
				peekStartsWith(y) {
					return this.remaining.startsWith(y);
				}
				consumeOptional(y) {
					return !!this.peekStartsWith(y) && ((this.remaining = this.remaining.substring(y.length)), !0);
				}
				capture(y) {
					if (!this.consumeOptional(y)) throw new Error(`Expected "${y}".`);
				}
			}
			class fi {
				constructor(y) {
					this._root = y;
				}
				get root() {
					return this._root.value;
				}
				parent(y) {
					const _ = this.pathFromRoot(y);
					return _.length > 1 ? _[_.length - 2] : null;
				}
				children(y) {
					const _ = dn(y, this._root);
					return _ ? _.children.map((T) => T.value) : [];
				}
				firstChild(y) {
					const _ = dn(y, this._root);
					return _ && _.children.length > 0 ? _.children[0].value : null;
				}
				siblings(y) {
					const _ = di(y, this._root);
					return _.length < 2 ? [] : _[_.length - 2].children.map((O) => O.value).filter((O) => O !== y);
				}
				pathFromRoot(y) {
					return di(y, this._root).map((_) => _.value);
				}
			}
			function dn(w, y) {
				if (w === y.value) return y;
				for (const _ of y.children) {
					const T = dn(w, _);
					if (T) return T;
				}
				return null;
			}
			function di(w, y) {
				if (w === y.value) return [y];
				for (const _ of y.children) {
					const T = di(w, _);
					if (T.length) return T.unshift(y), T;
				}
				return [];
			}
			class Wn {
				constructor(y, _) {
					(this.value = y), (this.children = _);
				}
				toString() {
					return `TreeNode(${this.value})`;
				}
			}
			function pn(w) {
				const y = {};
				return w && w.children.forEach((_) => (y[_.value.outlet] = _)), y;
			}
			class Ki extends fi {
				constructor(y, _) {
					super(y), (this.snapshot = _), Tn(this, y);
				}
				toString() {
					return this.snapshot.toString();
				}
			}
			function Kn(w, y) {
				const _ = (function Ui(w, y) {
						const le = new Li([], {}, {}, '', {}, fe, y, null, w.root, -1, {});
						return new Bn('', new Wn(le, []));
					})(w, y),
					T = new q.X([new Ft('', {})]),
					O = new q.X({}),
					$ = new q.X({}),
					le = new q.X({}),
					Se = new q.X(''),
					ct = new oi(T, O, le, Se, $, fe, y, _.root);
				return (ct.snapshot = _.root), new Ki(new Wn(ct, []), _);
			}
			class oi {
				constructor(y, _, T, O, $, le, Se, ct) {
					(this.url = y),
						(this.params = _),
						(this.queryParams = T),
						(this.fragment = O),
						(this.data = $),
						(this.outlet = le),
						(this.component = Se),
						(this._futureSnapshot = ct);
				}
				get routeConfig() {
					return this._futureSnapshot.routeConfig;
				}
				get root() {
					return this._routerState.root;
				}
				get parent() {
					return this._routerState.parent(this);
				}
				get firstChild() {
					return this._routerState.firstChild(this);
				}
				get children() {
					return this._routerState.children(this);
				}
				get pathFromRoot() {
					return this._routerState.pathFromRoot(this);
				}
				get paramMap() {
					return (
						this._paramMap || (this._paramMap = this.params.pipe((0, Ie.U)((y) => xe(y)))), this._paramMap
					);
				}
				get queryParamMap() {
					return (
						this._queryParamMap || (this._queryParamMap = this.queryParams.pipe((0, Ie.U)((y) => xe(y)))),
						this._queryParamMap
					);
				}
				toString() {
					return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
				}
			}
			function ni(w, y = 'emptyOnly') {
				const _ = w.pathFromRoot;
				let T = 0;
				if ('always' !== y)
					for (T = _.length - 1; T >= 1; ) {
						const O = _[T],
							$ = _[T - 1];
						if (O.routeConfig && '' === O.routeConfig.path) T--;
						else {
							if ($.component) break;
							T--;
						}
					}
				return (function Fi(w) {
					return w.reduce(
						(y, _) => ({
							params: Object.assign(Object.assign({}, y.params), _.params),
							data: Object.assign(Object.assign({}, y.data), _.data),
							resolve: Object.assign(Object.assign({}, y.resolve), _._resolvedData),
						}),
						{ params: {}, data: {}, resolve: {} }
					);
				})(_.slice(T));
			}
			class Li {
				constructor(y, _, T, O, $, le, Se, ct, zt, kn, un) {
					(this.url = y),
						(this.params = _),
						(this.queryParams = T),
						(this.fragment = O),
						(this.data = $),
						(this.outlet = le),
						(this.component = Se),
						(this.routeConfig = ct),
						(this._urlSegment = zt),
						(this._lastPathIndex = kn),
						(this._resolve = un);
				}
				get root() {
					return this._routerState.root;
				}
				get parent() {
					return this._routerState.parent(this);
				}
				get firstChild() {
					return this._routerState.firstChild(this);
				}
				get children() {
					return this._routerState.children(this);
				}
				get pathFromRoot() {
					return this._routerState.pathFromRoot(this);
				}
				get paramMap() {
					return this._paramMap || (this._paramMap = xe(this.params)), this._paramMap;
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = xe(this.queryParams)), this._queryParamMap;
				}
				toString() {
					return `Route(url:'${this.url.map((T) => T.toString()).join('/')}', path:'${
						this.routeConfig ? this.routeConfig.path : ''
					}')`;
				}
			}
			class Bn extends fi {
				constructor(y, _) {
					super(_), (this.url = y), Tn(this, _);
				}
				toString() {
					return Ni(this._root);
				}
			}
			function Tn(w, y) {
				(y.value._routerState = w), y.children.forEach((_) => Tn(w, _));
			}
			function Ni(w) {
				const y = w.children.length > 0 ? ` { ${w.children.map(Ni).join(', ')} } ` : '';
				return `${w.value}${y}`;
			}
			function Ii(w) {
				if (w.snapshot) {
					const y = w.snapshot,
						_ = w._futureSnapshot;
					(w.snapshot = _),
						pt(y.queryParams, _.queryParams) || w.queryParams.next(_.queryParams),
						y.fragment !== _.fragment && w.fragment.next(_.fragment),
						pt(y.params, _.params) || w.params.next(_.params),
						(function _t(w, y) {
							if (w.length !== y.length) return !1;
							for (let _ = 0; _ < w.length; ++_) if (!pt(w[_], y[_])) return !1;
							return !0;
						})(y.url, _.url) || w.url.next(_.url),
						pt(y.data, _.data) || w.data.next(_.data);
				} else (w.snapshot = w._futureSnapshot), w.data.next(w._futureSnapshot.data);
			}
			function ai(w, y) {
				const _ =
					pt(w.params, y.params) &&
					(function wn(w, y) {
						return _n(w, y) && w.every((_, T) => pt(_.parameters, y[T].parameters));
					})(w.url, y.url);
				return _ && !(!w.parent != !y.parent) && (!w.parent || ai(w.parent, y.parent));
			}
			function mi(w, y, _) {
				if (_ && w.shouldReuseRoute(y.value, _.value.snapshot)) {
					const T = _.value;
					T._futureSnapshot = y.value;
					const O = (function Zi(w, y, _) {
						return y.children.map((T) => {
							for (const O of _.children)
								if (w.shouldReuseRoute(T.value, O.value.snapshot)) return mi(w, T, O);
							return mi(w, T);
						});
					})(w, y, _);
					return new Wn(T, O);
				}
				{
					if (w.shouldAttach(y.value)) {
						const $ = w.retrieve(y.value);
						if (null !== $) {
							const le = $.route;
							return (
								(le.value._futureSnapshot = y.value),
								(le.children = y.children.map((Se) => mi(w, Se))),
								le
							);
						}
					}
					const T = (function ur(w) {
							return new oi(
								new q.X(w.url),
								new q.X(w.params),
								new q.X(w.queryParams),
								new q.X(w.fragment),
								new q.X(w.data),
								w.outlet,
								w.component,
								w
							);
						})(y.value),
						O = y.children.map(($) => mi(w, $));
					return new Wn(T, O);
				}
			}
			function qi(w) {
				return 'object' == typeof w && null != w && !w.outlets && !w.segmentPath;
			}
			function gi(w) {
				return 'object' == typeof w && null != w && w.outlets;
			}
			function br(w, y, _, T, O) {
				let $ = {};
				return (
					T &&
						On(T, (le, Se) => {
							$[Se] = Array.isArray(le) ? le.map((ct) => `${ct}`) : `${le}`;
						}),
					new je(_.root === w ? y : li(_.root, w, y), $, O)
				);
			}
			function li(w, y, _) {
				const T = {};
				return (
					On(w.children, (O, $) => {
						T[$] = O === y ? _ : li(O, y, _);
					}),
					new Ke(w.segments, T)
				);
			}
			class _i {
				constructor(y, _, T) {
					if (
						((this.isAbsolute = y),
						(this.numberOfDoubleDots = _),
						(this.commands = T),
						y && T.length > 0 && qi(T[0]))
					)
						throw new Error('Root segment cannot have matrix parameters');
					const O = T.find(gi);
					if (O && O !== xn(T)) throw new Error('{outlets:{}} has to be the last command');
				}
				toRoot() {
					return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
				}
			}
			class Ar {
				constructor(y, _, T) {
					(this.segmentGroup = y), (this.processChildren = _), (this.index = T);
				}
			}
			function wr(w, y, _) {
				if ((w || (w = new Ke([], {})), 0 === w.segments.length && w.hasChildren())) return Dr(w, y, _);
				const T = (function zr(w, y, _) {
						let T = 0,
							O = y;
						const $ = { match: !1, pathIndex: 0, commandIndex: 0 };
						for (; O < w.segments.length; ) {
							if (T >= _.length) return $;
							const le = w.segments[O],
								Se = _[T];
							if (gi(Se)) break;
							const ct = `${Se}`,
								zt = T < _.length - 1 ? _[T + 1] : null;
							if (O > 0 && void 0 === ct) break;
							if (ct && zt && 'object' == typeof zt && void 0 === zt.outlets) {
								if (!Fr(ct, zt, le)) return $;
								T += 2;
							} else {
								if (!Fr(ct, {}, le)) return $;
								T++;
							}
							O++;
						}
						return { match: !0, pathIndex: O, commandIndex: T };
					})(w, y, _),
					O = _.slice(T.commandIndex);
				if (T.match && T.pathIndex < w.segments.length) {
					const $ = new Ke(w.segments.slice(0, T.pathIndex), {});
					return ($.children[fe] = new Ke(w.segments.slice(T.pathIndex), w.children)), Dr($, 0, O);
				}
				return T.match && 0 === O.length
					? new Ke(w.segments, {})
					: T.match && !w.hasChildren()
					? es(w, y, _)
					: T.match
					? Dr(w, 0, O)
					: es(w, y, _);
			}
			function Dr(w, y, _) {
				if (0 === _.length) return new Ke(w.segments, {});
				{
					const T = (function Cr(w) {
							return gi(w[0]) ? w[0].outlets : { [fe]: w };
						})(_),
						O = {};
					return (
						On(T, ($, le) => {
							'string' == typeof $ && ($ = [$]), null !== $ && (O[le] = wr(w.children[le], y, $));
						}),
						On(w.children, ($, le) => {
							void 0 === T[le] && (O[le] = $);
						}),
						new Ke(w.segments, O)
					);
				}
			}
			function es(w, y, _) {
				const T = w.segments.slice(0, y);
				let O = 0;
				for (; O < _.length; ) {
					const $ = _[O];
					if (gi($)) {
						const ct = kr($.outlets);
						return new Ke(T, ct);
					}
					if (0 === O && qi(_[0])) {
						T.push(new Ft(w.segments[y].path, ts(_[0]))), O++;
						continue;
					}
					const le = gi($) ? $.outlets[fe] : `${$}`,
						Se = O < _.length - 1 ? _[O + 1] : null;
					le && Se && qi(Se) ? (T.push(new Ft(le, ts(Se))), (O += 2)) : (T.push(new Ft(le, {})), O++);
				}
				return new Ke(T, {});
			}
			function kr(w) {
				const y = {};
				return (
					On(w, (_, T) => {
						'string' == typeof _ && (_ = [_]), null !== _ && (y[T] = es(new Ke([], {}), 0, _));
					}),
					y
				);
			}
			function ts(w) {
				const y = {};
				return On(w, (_, T) => (y[T] = `${_}`)), y;
			}
			function Fr(w, y, _) {
				return w == _.path && pt(y, _.parameters);
			}
			class hr {
				constructor(y, _, T, O) {
					(this.routeReuseStrategy = y),
						(this.futureState = _),
						(this.currState = T),
						(this.forwardEvent = O);
				}
				activate(y) {
					const _ = this.futureState._root,
						T = this.currState ? this.currState._root : null;
					this.deactivateChildRoutes(_, T, y), Ii(this.futureState.root), this.activateChildRoutes(_, T, y);
				}
				deactivateChildRoutes(y, _, T) {
					const O = pn(_);
					y.children.forEach(($) => {
						const le = $.value.outlet;
						this.deactivateRoutes($, O[le], T), delete O[le];
					}),
						On(O, ($, le) => {
							this.deactivateRouteAndItsChildren($, T);
						});
				}
				deactivateRoutes(y, _, T) {
					const O = y.value,
						$ = _ ? _.value : null;
					if (O === $)
						if (O.component) {
							const le = T.getContext(O.outlet);
							le && this.deactivateChildRoutes(y, _, le.children);
						} else this.deactivateChildRoutes(y, _, T);
					else $ && this.deactivateRouteAndItsChildren(_, T);
				}
				deactivateRouteAndItsChildren(y, _) {
					y.value.component && this.routeReuseStrategy.shouldDetach(y.value.snapshot)
						? this.detachAndStoreRouteSubtree(y, _)
						: this.deactivateRouteAndOutlet(y, _);
				}
				detachAndStoreRouteSubtree(y, _) {
					const T = _.getContext(y.value.outlet),
						O = T && y.value.component ? T.children : _,
						$ = pn(y);
					for (const le of Object.keys($)) this.deactivateRouteAndItsChildren($[le], O);
					if (T && T.outlet) {
						const le = T.outlet.detach(),
							Se = T.children.onOutletDeactivated();
						this.routeReuseStrategy.store(y.value.snapshot, {
							componentRef: le,
							route: y,
							contexts: Se,
						});
					}
				}
				deactivateRouteAndOutlet(y, _) {
					const T = _.getContext(y.value.outlet),
						O = T && y.value.component ? T.children : _,
						$ = pn(y);
					for (const le of Object.keys($)) this.deactivateRouteAndItsChildren($[le], O);
					T &&
						T.outlet &&
						(T.outlet.deactivate(),
						T.children.onOutletDeactivated(),
						(T.attachRef = null),
						(T.resolver = null),
						(T.route = null));
				}
				activateChildRoutes(y, _, T) {
					const O = pn(_);
					y.children.forEach(($) => {
						this.activateRoutes($, O[$.value.outlet], T), this.forwardEvent(new U($.value.snapshot));
					}),
						y.children.length && this.forwardEvent(new Oe(y.value.snapshot));
				}
				activateRoutes(y, _, T) {
					const O = y.value,
						$ = _ ? _.value : null;
					if ((Ii(O), O === $))
						if (O.component) {
							const le = T.getOrCreateContext(O.outlet);
							this.activateChildRoutes(y, _, le.children);
						} else this.activateChildRoutes(y, _, T);
					else if (O.component) {
						const le = T.getOrCreateContext(O.outlet);
						if (this.routeReuseStrategy.shouldAttach(O.snapshot)) {
							const Se = this.routeReuseStrategy.retrieve(O.snapshot);
							this.routeReuseStrategy.store(O.snapshot, null),
								le.children.onOutletReAttached(Se.contexts),
								(le.attachRef = Se.componentRef),
								(le.route = Se.route.value),
								le.outlet && le.outlet.attach(Se.componentRef, Se.route.value),
								Ii(Se.route.value),
								this.activateChildRoutes(y, null, le.children);
						} else {
							const Se = (function tr(w) {
									for (let y = w.parent; y; y = y.parent) {
										const _ = y.routeConfig;
										if (_ && _._loadedConfig) return _._loadedConfig;
										if (_ && _.component) return null;
									}
									return null;
								})(O.snapshot),
								ct = Se ? Se.module.componentFactoryResolver : null;
							(le.attachRef = null),
								(le.route = O),
								(le.resolver = ct),
								le.outlet && le.outlet.activateWith(O, ct),
								this.activateChildRoutes(y, null, le.children);
						}
					} else this.activateChildRoutes(y, null, T);
				}
			}
			class Mr {
				constructor(y, _) {
					(this.routes = y), (this.module = _);
				}
			}
			function vi(w) {
				return 'function' == typeof w;
			}
			function Si(w) {
				return w instanceof je;
			}
			const Qi = Symbol('INITIAL_VALUE');
			function fr() {
				return (0, Ue.w)((w) =>
					(0, Re.a)(w.map((y) => y.pipe((0, ce.q)(1), (0, ut.O)(Qi)))).pipe(
						rt((y, _) => {
							let T = !1;
							return _.reduce(
								(O, $, le) =>
									O !== Qi
										? O
										: ($ === Qi && (T = !0),
										  T || (!1 !== $ && le !== _.length - 1 && !Si($)) ? O : $),
								y
							);
						}, Qi),
						(0, at.h)((y) => y !== Qi),
						(0, Ie.U)((y) => (Si(y) ? y : !0 === y)),
						(0, ce.q)(1)
					)
				);
			}
			class Xi {
				constructor() {
					(this.outlet = null),
						(this.route = null),
						(this.resolver = null),
						(this.children = new ir()),
						(this.attachRef = null);
				}
			}
			class ir {
				constructor() {
					this.contexts = new Map();
				}
				onChildOutletCreated(y, _) {
					const T = this.getOrCreateContext(y);
					(T.outlet = _), this.contexts.set(y, T);
				}
				onChildOutletDestroyed(y) {
					const _ = this.getContext(y);
					_ && ((_.outlet = null), (_.attachRef = null));
				}
				onOutletDeactivated() {
					const y = this.contexts;
					return (this.contexts = new Map()), y;
				}
				onOutletReAttached(y) {
					this.contexts = y;
				}
				getOrCreateContext(y) {
					let _ = this.getContext(y);
					return _ || ((_ = new Xi()), this.contexts.set(y, _)), _;
				}
				getContext(y) {
					return this.contexts.get(y) || null;
				}
			}
			let Gi = (() => {
				class w {
					constructor(_, T, O, $, le) {
						(this.parentContexts = _),
							(this.location = T),
							(this.resolver = O),
							(this.changeDetector = le),
							(this.activated = null),
							(this._activatedRoute = null),
							(this.activateEvents = new m.vpe()),
							(this.deactivateEvents = new m.vpe()),
							(this.attachEvents = new m.vpe()),
							(this.detachEvents = new m.vpe()),
							(this.name = $ || fe),
							_.onChildOutletCreated(this.name, this);
					}
					ngOnDestroy() {
						this.parentContexts.onChildOutletDestroyed(this.name);
					}
					ngOnInit() {
						if (!this.activated) {
							const _ = this.parentContexts.getContext(this.name);
							_ &&
								_.route &&
								(_.attachRef
									? this.attach(_.attachRef, _.route)
									: this.activateWith(_.route, _.resolver || null));
						}
					}
					get isActivated() {
						return !!this.activated;
					}
					get component() {
						if (!this.activated) throw new Error('Outlet is not activated');
						return this.activated.instance;
					}
					get activatedRoute() {
						if (!this.activated) throw new Error('Outlet is not activated');
						return this._activatedRoute;
					}
					get activatedRouteData() {
						return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
					}
					detach() {
						if (!this.activated) throw new Error('Outlet is not activated');
						this.location.detach();
						const _ = this.activated;
						return (
							(this.activated = null),
							(this._activatedRoute = null),
							this.detachEvents.emit(_.instance),
							_
						);
					}
					attach(_, T) {
						(this.activated = _),
							(this._activatedRoute = T),
							this.location.insert(_.hostView),
							this.attachEvents.emit(_.instance);
					}
					deactivate() {
						if (this.activated) {
							const _ = this.component;
							this.activated.destroy(),
								(this.activated = null),
								(this._activatedRoute = null),
								this.deactivateEvents.emit(_);
						}
					}
					activateWith(_, T) {
						if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
						this._activatedRoute = _;
						const le = (T = T || this.resolver).resolveComponentFactory(
								_._futureSnapshot.routeConfig.component
							),
							Se = this.parentContexts.getOrCreateContext(this.name).children,
							ct = new mr(_, Se, this.location.injector);
						(this.activated = this.location.createComponent(le, this.location.length, ct)),
							this.changeDetector.markForCheck(),
							this.activateEvents.emit(this.activated.instance);
					}
				}
				return (
					(w.ɵfac = function (_) {
						return new (_ || w)(m.Y36(ir), m.Y36(m.s_b), m.Y36(m._Vd), m.$8M('name'), m.Y36(m.sBO));
					}),
					(w.ɵdir = m.lG2({
						type: w,
						selectors: [['router-outlet']],
						outputs: {
							activateEvents: 'activate',
							deactivateEvents: 'deactivate',
							attachEvents: 'attach',
							detachEvents: 'detach',
						},
						exportAs: ['outlet'],
					})),
					w
				);
			})();
			class mr {
				constructor(y, _, T) {
					(this.route = y), (this.childContexts = _), (this.parent = T);
				}
				get(y, _) {
					return y === oi ? this.route : y === ir ? this.childContexts : this.parent.get(y, _);
				}
			}
			let Di = (() => {
				class w {}
				return (
					(w.ɵfac = function (_) {
						return new (_ || w)();
					}),
					(w.ɵcmp = m.Xpm({
						type: w,
						selectors: [['ng-component']],
						decls: 1,
						vars: 0,
						template: function (_, T) {
							1 & _ && m._UZ(0, 'router-outlet');
						},
						directives: [Gi],
						encapsulation: 2,
					})),
					w
				);
			})();
			function rr(w, y = '') {
				for (let _ = 0; _ < w.length; _++) {
					const T = w[_];
					ns(T, is(y, T));
				}
			}
			function ns(w, y) {
				w.children && rr(w.children, y);
			}
			function is(w, y) {
				return y ? (w || y.path ? (w && !y.path ? `${w}/` : !w && y.path ? y.path : `${w}/${y.path}`) : '') : w;
			}
			function Lr(w) {
				const y = w.children && w.children.map(Lr),
					_ = y ? Object.assign(Object.assign({}, w), { children: y }) : Object.assign({}, w);
				return !_.component && (y || _.loadChildren) && _.outlet && _.outlet !== fe && (_.component = Di), _;
			}
			function ui(w) {
				return w.outlet || fe;
			}
			function Nr(w, y) {
				const _ = w.filter((T) => ui(T) === y);
				return _.push(...w.filter((T) => ui(T) !== y)), _;
			}
			const In = {
				matched: !1,
				consumedSegments: [],
				lastChild: 0,
				parameters: {},
				positionalParamSegments: {},
			};
			function hi(w, y, _) {
				var T;
				if ('' === y.path)
					return 'full' === y.pathMatch && (w.hasChildren() || _.length > 0)
						? Object.assign({}, In)
						: {
								matched: !0,
								consumedSegments: [],
								lastChild: 0,
								parameters: {},
								positionalParamSegments: {},
						  };
				const $ = (y.matcher || it)(_, w, y);
				if (!$) return Object.assign({}, In);
				const le = {};
				On($.posParams, (ct, zt) => {
					le[zt] = ct.path;
				});
				const Se =
					$.consumed.length > 0
						? Object.assign(Object.assign({}, le), $.consumed[$.consumed.length - 1].parameters)
						: le;
				return {
					matched: !0,
					consumedSegments: $.consumed,
					lastChild: $.consumed.length,
					parameters: Se,
					positionalParamSegments: null !== (T = $.posParams) && void 0 !== T ? T : {},
				};
			}
			function Ir(w, y, _, T, O = 'corrected') {
				if (
					_.length > 0 &&
					(function z(w, y, _) {
						return _.some((T) => Y(w, y, T) && ui(T) !== fe);
					})(w, _, T)
				) {
					const le = new Ke(
						y,
						(function k(w, y, _, T) {
							const O = {};
							(O[fe] = T), (T._sourceSegment = w), (T._segmentIndexShift = y.length);
							for (const $ of _)
								if ('' === $.path && ui($) !== fe) {
									const le = new Ke([], {});
									(le._sourceSegment = w), (le._segmentIndexShift = y.length), (O[ui($)] = le);
								}
							return O;
						})(w, y, T, new Ke(_, w.children))
					);
					return (
						(le._sourceSegment = w),
						(le._segmentIndexShift = y.length),
						{ segmentGroup: le, slicedSegments: [] }
					);
				}
				if (
					0 === _.length &&
					(function I(w, y, _) {
						return _.some((T) => Y(w, y, T));
					})(w, _, T)
				) {
					const le = new Ke(
						w.segments,
						(function Qn(w, y, _, T, O, $) {
							const le = {};
							for (const Se of T)
								if (Y(w, _, Se) && !O[ui(Se)]) {
									const ct = new Ke([], {});
									(ct._sourceSegment = w),
										(ct._segmentIndexShift = 'legacy' === $ ? w.segments.length : y.length),
										(le[ui(Se)] = ct);
								}
							return Object.assign(Object.assign({}, O), le);
						})(w, y, _, T, w.children, O)
					);
					return (
						(le._sourceSegment = w),
						(le._segmentIndexShift = y.length),
						{ segmentGroup: le, slicedSegments: _ }
					);
				}
				const $ = new Ke(w.segments, w.children);
				return (
					($._sourceSegment = w), ($._segmentIndexShift = y.length), { segmentGroup: $, slicedSegments: _ }
				);
			}
			function Y(w, y, _) {
				return (!(w.hasChildren() || y.length > 0) || 'full' !== _.pathMatch) && '' === _.path;
			}
			function Ee(w, y, _, T) {
				return !!(ui(w) === T || (T !== fe && Y(y, _, w))) && ('**' === w.path || hi(y, w, _).matched);
			}
			function st(w, y, _) {
				return 0 === y.length && !w.children[_];
			}
			class pe {
				constructor(y) {
					this.segmentGroup = y || null;
				}
			}
			class Lt {
				constructor(y) {
					this.urlTree = y;
				}
			}
			function Nn(w) {
				return new G.y((y) => y.error(new pe(w)));
			}
			function on(w) {
				return new G.y((y) => y.error(new Lt(w)));
			}
			function Gt(w) {
				return new G.y((y) =>
					y.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${w}'`))
				);
			}
			class v {
				constructor(y, _, T, O, $) {
					(this.configLoader = _),
						(this.urlSerializer = T),
						(this.urlTree = O),
						(this.config = $),
						(this.allowRedirects = !0),
						(this.ngModule = y.get(m.h0i));
				}
				apply() {
					const y = Ir(this.urlTree.root, [], [], this.config).segmentGroup,
						_ = new Ke(y.segments, y.children);
					return this.expandSegmentGroup(this.ngModule, this.config, _, fe)
						.pipe(
							(0, Ie.U)(($) => this.createUrlTree(W($), this.urlTree.queryParams, this.urlTree.fragment))
						)
						.pipe(
							(0, Xe.K)(($) => {
								if ($ instanceof Lt) return (this.allowRedirects = !1), this.match($.urlTree);
								throw $ instanceof pe ? this.noMatchError($) : $;
							})
						);
				}
				match(y) {
					return this.expandSegmentGroup(this.ngModule, this.config, y.root, fe)
						.pipe((0, Ie.U)((O) => this.createUrlTree(W(O), y.queryParams, y.fragment)))
						.pipe(
							(0, Xe.K)((O) => {
								throw O instanceof pe ? this.noMatchError(O) : O;
							})
						);
				}
				noMatchError(y) {
					return new Error(`Cannot match any routes. URL Segment: '${y.segmentGroup}'`);
				}
				createUrlTree(y, _, T) {
					const O = y.segments.length > 0 ? new Ke([], { [fe]: y }) : y;
					return new je(O, _, T);
				}
				expandSegmentGroup(y, _, T, O) {
					return 0 === T.segments.length && T.hasChildren()
						? this.expandChildren(y, _, T).pipe((0, Ie.U)(($) => new Ke([], $)))
						: this.expandSegment(y, T, _, T.segments, O, !0);
				}
				expandChildren(y, _, T) {
					const O = [];
					for (const $ of Object.keys(T.children)) 'primary' === $ ? O.unshift($) : O.push($);
					return (0, Q.D)(O).pipe(
						(0, Rt.b)(($) => {
							const le = T.children[$],
								Se = Nr(_, $);
							return this.expandSegmentGroup(y, Se, le, $).pipe(
								(0, Ie.U)((ct) => ({ segment: ct, outlet: $ }))
							);
						}),
						rt(($, le) => (($[le.outlet] = le.segment), $), {}),
						(function We(w, y) {
							const _ = arguments.length >= 2;
							return (T) =>
								T.pipe(w ? (0, at.h)((O, $) => w(O, $, T)) : J.y, Ge(1), _ ? ot(y) : ge(() => new o()));
						})()
					);
				}
				expandSegment(y, _, T, O, $, le) {
					return (0, Q.D)(T).pipe(
						(0, Rt.b)((Se) =>
							this.expandSegmentAgainstRoute(y, _, T, Se, O, $, le).pipe(
								(0, Xe.K)((zt) => {
									if (zt instanceof pe) return (0, K.of)(null);
									throw zt;
								})
							)
						),
						Pe((Se) => !!Se),
						(0, Xe.K)((Se, ct) => {
							if (Se instanceof o || 'EmptyError' === Se.name) {
								if (st(_, O, $)) return (0, K.of)(new Ke([], {}));
								throw new pe(_);
							}
							throw Se;
						})
					);
				}
				expandSegmentAgainstRoute(y, _, T, O, $, le, Se) {
					return Ee(O, _, $, le)
						? void 0 === O.redirectTo
							? this.matchSegmentAgainstRoute(y, _, O, $, le)
							: Se && this.allowRedirects
							? this.expandSegmentAgainstRouteUsingRedirect(y, _, T, O, $, le)
							: Nn(_)
						: Nn(_);
				}
				expandSegmentAgainstRouteUsingRedirect(y, _, T, O, $, le) {
					return '**' === O.path
						? this.expandWildCardWithParamsAgainstRouteUsingRedirect(y, T, O, le)
						: this.expandRegularSegmentAgainstRouteUsingRedirect(y, _, T, O, $, le);
				}
				expandWildCardWithParamsAgainstRouteUsingRedirect(y, _, T, O) {
					const $ = this.applyRedirectCommands([], T.redirectTo, {});
					return T.redirectTo.startsWith('/')
						? on($)
						: this.lineralizeSegments(T, $).pipe(
								(0, Ht.z)((le) => {
									const Se = new Ke(le, {});
									return this.expandSegment(y, Se, _, le, O, !1);
								})
						  );
				}
				expandRegularSegmentAgainstRouteUsingRedirect(y, _, T, O, $, le) {
					const {
						matched: Se,
						consumedSegments: ct,
						lastChild: zt,
						positionalParamSegments: kn,
					} = hi(_, O, $);
					if (!Se) return Nn(_);
					const un = this.applyRedirectCommands(ct, O.redirectTo, kn);
					return O.redirectTo.startsWith('/')
						? on(un)
						: this.lineralizeSegments(O, un).pipe(
								(0, Ht.z)((qn) => this.expandSegment(y, _, T, qn.concat($.slice(zt)), le, !1))
						  );
				}
				matchSegmentAgainstRoute(y, _, T, O, $) {
					if ('**' === T.path)
						return T.loadChildren
							? (T._loadedConfig
									? (0, K.of)(T._loadedConfig)
									: this.configLoader.load(y.injector, T)
							  ).pipe((0, Ie.U)((qn) => ((T._loadedConfig = qn), new Ke(O, {}))))
							: (0, K.of)(new Ke(O, {}));
					const { matched: le, consumedSegments: Se, lastChild: ct } = hi(_, T, O);
					if (!le) return Nn(_);
					const zt = O.slice(ct);
					return this.getChildConfig(y, T, O).pipe(
						(0, Ht.z)((un) => {
							const qn = un.module,
								$n = un.routes,
								{ segmentGroup: os, slicedSegments: Yr } = Ir(_, Se, zt, $n),
								Wr = new Ke(os.segments, os.children);
							if (0 === Yr.length && Wr.hasChildren())
								return this.expandChildren(qn, $n, Wr).pipe((0, Ie.U)((_s) => new Ke(Se, _s)));
							if (0 === $n.length && 0 === Yr.length) return (0, K.of)(new Ke(Se, {}));
							const Kr = ui(T) === $;
							return this.expandSegment(qn, Wr, $n, Yr, Kr ? fe : $, !0).pipe(
								(0, Ie.U)((Zr) => new Ke(Se.concat(Zr.segments), Zr.children))
							);
						})
					);
				}
				getChildConfig(y, _, T) {
					return _.children
						? (0, K.of)(new Mr(_.children, y))
						: _.loadChildren
						? void 0 !== _._loadedConfig
							? (0, K.of)(_._loadedConfig)
							: this.runCanLoadGuards(y.injector, _, T).pipe(
									(0, Ht.z)((O) =>
										O
											? this.configLoader
													.load(y.injector, _)
													.pipe((0, Ie.U)(($) => ((_._loadedConfig = $), $)))
											: (function qt(w) {
													return new G.y((y) =>
														y.error(
															re(
																`Cannot load children because the guard of the route "path: '${w.path}'" returned false`
															)
														)
													);
											  })(_)
									)
							  )
						: (0, K.of)(new Mr([], y));
				}
				runCanLoadGuards(y, _, T) {
					const O = _.canLoad;
					if (!O || 0 === O.length) return (0, K.of)(!0);
					const $ = O.map((le) => {
						const Se = y.get(le);
						let ct;
						if (
							(function nr(w) {
								return w && vi(w.canLoad);
							})(Se)
						)
							ct = Se.canLoad(_, T);
						else {
							if (!vi(Se)) throw new Error('Invalid CanLoad guard');
							ct = Se(_, T);
						}
						return An(ct);
					});
					return (0, K.of)($).pipe(
						fr(),
						(0, nt.b)((le) => {
							if (!Si(le)) return;
							const Se = re(`Redirecting to "${this.urlSerializer.serialize(le)}"`);
							throw ((Se.url = le), Se);
						}),
						(0, Ie.U)((le) => !0 === le)
					);
				}
				lineralizeSegments(y, _) {
					let T = [],
						O = _.root;
					for (;;) {
						if (((T = T.concat(O.segments)), 0 === O.numberOfChildren)) return (0, K.of)(T);
						if (O.numberOfChildren > 1 || !O.children[fe]) return Gt(y.redirectTo);
						O = O.children[fe];
					}
				}
				applyRedirectCommands(y, _, T) {
					return this.applyRedirectCreatreUrlTree(_, this.urlSerializer.parse(_), y, T);
				}
				applyRedirectCreatreUrlTree(y, _, T, O) {
					const $ = this.createSegmentGroup(y, _.root, T, O);
					return new je($, this.createQueryParams(_.queryParams, this.urlTree.queryParams), _.fragment);
				}
				createQueryParams(y, _) {
					const T = {};
					return (
						On(y, (O, $) => {
							if ('string' == typeof O && O.startsWith(':')) {
								const Se = O.substring(1);
								T[$] = _[Se];
							} else T[$] = O;
						}),
						T
					);
				}
				createSegmentGroup(y, _, T, O) {
					const $ = this.createSegments(y, _.segments, T, O);
					let le = {};
					return (
						On(_.children, (Se, ct) => {
							le[ct] = this.createSegmentGroup(y, Se, T, O);
						}),
						new Ke($, le)
					);
				}
				createSegments(y, _, T, O) {
					return _.map(($) =>
						$.path.startsWith(':') ? this.findPosParam(y, $, O) : this.findOrReturn($, T)
					);
				}
				findPosParam(y, _, T) {
					const O = T[_.path.substring(1)];
					if (!O) throw new Error(`Cannot redirect to '${y}'. Cannot find '${_.path}'.`);
					return O;
				}
				findOrReturn(y, _) {
					let T = 0;
					for (const O of _) {
						if (O.path === y.path) return _.splice(T), O;
						T++;
					}
					return y;
				}
			}
			function W(w) {
				const y = {};
				for (const T of Object.keys(w.children)) {
					const $ = W(w.children[T]);
					($.segments.length > 0 || $.hasChildren()) && (y[T] = $);
				}
				return (function D(w) {
					if (1 === w.numberOfChildren && w.children[fe]) {
						const y = w.children[fe];
						return new Ke(w.segments.concat(y.segments), y.children);
					}
					return w;
				})(new Ke(w.segments, y));
			}
			class Kt {
				constructor(y) {
					(this.path = y), (this.route = this.path[this.path.length - 1]);
				}
			}
			class Hn {
				constructor(y, _) {
					(this.component = y), (this.route = _);
				}
			}
			function Ti(w, y, _) {
				const T = w._root;
				return N(T, y ? y._root : null, _, [T.value]);
			}
			function sr(w, y, _) {
				const T = (function Dt(w) {
					if (!w) return null;
					for (let y = w.parent; y; y = y.parent) {
						const _ = y.routeConfig;
						if (_ && _._loadedConfig) return _._loadedConfig;
					}
					return null;
				})(y);
				return (T ? T.module.injector : _).get(w);
			}
			function N(w, y, _, T, O = { canDeactivateChecks: [], canActivateChecks: [] }) {
				const $ = pn(y);
				return (
					w.children.forEach((le) => {
						(function h(
							w,
							y,
							_,
							T,
							O = {
								canDeactivateChecks: [],
								canActivateChecks: [],
							}
						) {
							const $ = w.value,
								le = y ? y.value : null,
								Se = _ ? _.getContext(w.value.outlet) : null;
							if (le && $.routeConfig === le.routeConfig) {
								const ct = (function p(w, y, _) {
									if ('function' == typeof _) return _(w, y);
									switch (_) {
										case 'pathParamsChange':
											return !_n(w.url, y.url);
										case 'pathParamsOrQueryParamsChange':
											return !_n(w.url, y.url) || !pt(w.queryParams, y.queryParams);
										case 'always':
											return !0;
										case 'paramsOrQueryParamsChange':
											return !ai(w, y) || !pt(w.queryParams, y.queryParams);
										default:
											return !ai(w, y);
									}
								})(le, $, $.routeConfig.runGuardsAndResolvers);
								ct
									? O.canActivateChecks.push(new Kt(T))
									: (($.data = le.data), ($._resolvedData = le._resolvedData)),
									N(w, y, $.component ? (Se ? Se.children : null) : _, T, O),
									ct &&
										Se &&
										Se.outlet &&
										Se.outlet.isActivated &&
										O.canDeactivateChecks.push(new Hn(Se.outlet.component, le));
							} else
								le && x(y, Se, O),
									O.canActivateChecks.push(new Kt(T)),
									N(w, null, $.component ? (Se ? Se.children : null) : _, T, O);
						})(le, $[le.value.outlet], _, T.concat([le.value]), O),
							delete $[le.value.outlet];
					}),
					On($, (le, Se) => x(le, _.getContext(Se), O)),
					O
				);
			}
			function x(w, y, _) {
				const T = pn(w),
					O = w.value;
				On(T, ($, le) => {
					x($, O.component ? (y ? y.children.getContext(le) : null) : y, _);
				}),
					_.canDeactivateChecks.push(
						new Hn(O.component && y && y.outlet && y.outlet.isActivated ? y.outlet.component : null, O)
					);
			}
			class nn {}
			function En(w) {
				return new G.y((y) => y.error(w));
			}
			class fn {
				constructor(y, _, T, O, $, le) {
					(this.rootComponentType = y),
						(this.config = _),
						(this.urlTree = T),
						(this.url = O),
						(this.paramsInheritanceStrategy = $),
						(this.relativeLinkResolution = le);
				}
				recognize() {
					const y = Ir(
							this.urlTree.root,
							[],
							[],
							this.config.filter((le) => void 0 === le.redirectTo),
							this.relativeLinkResolution
						).segmentGroup,
						_ = this.processSegmentGroup(this.config, y, fe);
					if (null === _) return null;
					const T = new Li(
							[],
							Object.freeze({}),
							Object.freeze(Object.assign({}, this.urlTree.queryParams)),
							this.urlTree.fragment,
							{},
							fe,
							this.rootComponentType,
							null,
							this.urlTree.root,
							-1,
							{}
						),
						O = new Wn(T, _),
						$ = new Bn(this.url, O);
					return this.inheritParamsAndData($._root), $;
				}
				inheritParamsAndData(y) {
					const _ = y.value,
						T = ni(_, this.paramsInheritanceStrategy);
					(_.params = Object.freeze(T.params)),
						(_.data = Object.freeze(T.data)),
						y.children.forEach((O) => this.inheritParamsAndData(O));
				}
				processSegmentGroup(y, _, T) {
					return 0 === _.segments.length && _.hasChildren()
						? this.processChildren(y, _)
						: this.processSegment(y, _, _.segments, T);
				}
				processChildren(y, _) {
					const T = [];
					for (const $ of Object.keys(_.children)) {
						const le = _.children[$],
							Se = Nr(y, $),
							ct = this.processSegmentGroup(Se, le, $);
						if (null === ct) return null;
						T.push(...ct);
					}
					const O = Ai(T);
					return (
						(function Sn(w) {
							w.sort((y, _) =>
								y.value.outlet === fe
									? -1
									: _.value.outlet === fe
									? 1
									: y.value.outlet.localeCompare(_.value.outlet)
							);
						})(O),
						O
					);
				}
				processSegment(y, _, T, O) {
					for (const $ of y) {
						const le = this.processSegmentAgainstRoute($, _, T, O);
						if (null !== le) return le;
					}
					return st(_, T, O) ? [] : null;
				}
				processSegmentAgainstRoute(y, _, T, O) {
					if (y.redirectTo || !Ee(y, _, T, O)) return null;
					let $,
						le = [],
						Se = [];
					if ('**' === y.path) {
						const $n = T.length > 0 ? xn(T).parameters : {};
						$ = new Li(
							T,
							$n,
							Object.freeze(Object.assign({}, this.urlTree.queryParams)),
							this.urlTree.fragment,
							Mi(y),
							ui(y),
							y.component,
							y,
							Rr(_),
							ki(_) + T.length,
							or(y)
						);
					} else {
						const $n = hi(_, y, T);
						if (!$n.matched) return null;
						(le = $n.consumedSegments),
							(Se = T.slice($n.lastChild)),
							($ = new Li(
								le,
								$n.parameters,
								Object.freeze(Object.assign({}, this.urlTree.queryParams)),
								this.urlTree.fragment,
								Mi(y),
								ui(y),
								y.component,
								y,
								Rr(_),
								ki(_) + le.length,
								or(y)
							));
					}
					const ct = (function ii(w) {
							return w.children ? w.children : w.loadChildren ? w._loadedConfig.routes : [];
						})(y),
						{ segmentGroup: zt, slicedSegments: kn } = Ir(
							_,
							le,
							Se,
							ct.filter(($n) => void 0 === $n.redirectTo),
							this.relativeLinkResolution
						);
					if (0 === kn.length && zt.hasChildren()) {
						const $n = this.processChildren(ct, zt);
						return null === $n ? null : [new Wn($, $n)];
					}
					if (0 === ct.length && 0 === kn.length) return [new Wn($, [])];
					const un = ui(y) === O,
						qn = this.processSegment(ct, zt, kn, un ? fe : O);
					return null === qn ? null : [new Wn($, qn)];
				}
			}
			function ri(w) {
				const y = w.value.routeConfig;
				return y && '' === y.path && void 0 === y.redirectTo;
			}
			function Ai(w) {
				const y = [],
					_ = new Set();
				for (const T of w) {
					if (!ri(T)) {
						y.push(T);
						continue;
					}
					const O = y.find(($) => T.value.routeConfig === $.value.routeConfig);
					void 0 !== O ? (O.children.push(...T.children), _.add(O)) : y.push(T);
				}
				for (const T of _) {
					const O = Ai(T.children);
					y.push(new Wn(T.value, O));
				}
				return y.filter((T) => !_.has(T));
			}
			function Rr(w) {
				let y = w;
				for (; y._sourceSegment; ) y = y._sourceSegment;
				return y;
			}
			function ki(w) {
				let y = w,
					_ = y._segmentIndexShift ? y._segmentIndexShift : 0;
				for (; y._sourceSegment; )
					(y = y._sourceSegment), (_ += y._segmentIndexShift ? y._segmentIndexShift : 0);
				return _ - 1;
			}
			function Mi(w) {
				return w.data || {};
			}
			function or(w) {
				return w.resolve || {};
			}
			function fs(w) {
				return (0, Ue.w)((y) => {
					const _ = w(y);
					return _ ? (0, Q.D)(_).pipe((0, Ie.U)(() => y)) : (0, K.of)(y);
				});
			}
			class Zt extends class jt {
				shouldDetach(y) {
					return !1;
				}
				store(y, _) {}
				shouldAttach(y) {
					return !1;
				}
				retrieve(y) {
					return null;
				}
				shouldReuseRoute(y, _) {
					return y.routeConfig === _.routeConfig;
				}
			} {}
			const Xt = new m.OlP('ROUTES');
			class ln {
				constructor(y, _, T, O) {
					(this.injector = y),
						(this.compiler = _),
						(this.onLoadStartListener = T),
						(this.onLoadEndListener = O);
				}
				load(y, _) {
					if (_._loader$) return _._loader$;
					this.onLoadStartListener && this.onLoadStartListener(_);
					const O = this.loadModuleFactory(_.loadChildren).pipe(
						(0, Ie.U)(($) => {
							this.onLoadEndListener && this.onLoadEndListener(_);
							const le = $.create(y);
							return new Mr(Qt(le.injector.get(Xt, void 0, m.XFs.Self | m.XFs.Optional)).map(Lr), le);
						}),
						(0, Xe.K)(($) => {
							throw ((_._loader$ = void 0), $);
						})
					);
					return (_._loader$ = new ae(O, () => new ye.x()).pipe(De())), _._loader$;
				}
				loadModuleFactory(y) {
					return An(y()).pipe(
						(0, Ht.z)((_) =>
							_ instanceof m.YKP ? (0, K.of)(_) : (0, Q.D)(this.compiler.compileModuleAsync(_))
						)
					);
				}
			}
			class Vn {
				shouldProcessUrl(y) {
					return !0;
				}
				extract(y) {
					return y;
				}
				merge(y, _) {
					return y;
				}
			}
			function $i(w) {
				throw w;
			}
			function Br(w, y, _) {
				return y.parse('/');
			}
			function Xn(w, y) {
				return (0, K.of)(null);
			}
			const Ws = {
					paths: 'exact',
					fragment: 'ignored',
					matrixParams: 'ignored',
					queryParams: 'exact',
				},
				co = {
					paths: 'subset',
					fragment: 'ignored',
					matrixParams: 'ignored',
					queryParams: 'subset',
				};
			let Gn = (() => {
				class w {
					constructor(_, T, O, $, le, Se, ct) {
						(this.rootComponentType = _),
							(this.urlSerializer = T),
							(this.rootContexts = O),
							(this.location = $),
							(this.config = ct),
							(this.lastSuccessfulNavigation = null),
							(this.currentNavigation = null),
							(this.disposed = !1),
							(this.navigationId = 0),
							(this.currentPageId = 0),
							(this.isNgZoneEnabled = !1),
							(this.events = new ye.x()),
							(this.errorHandler = $i),
							(this.malformedUriErrorHandler = Br),
							(this.navigated = !1),
							(this.lastSuccessfulId = -1),
							(this.hooks = {
								beforePreactivation: Xn,
								afterPreactivation: Xn,
							}),
							(this.urlHandlingStrategy = new Vn()),
							(this.routeReuseStrategy = new Zt()),
							(this.onSameUrlNavigation = 'ignore'),
							(this.paramsInheritanceStrategy = 'emptyOnly'),
							(this.urlUpdateStrategy = 'deferred'),
							(this.relativeLinkResolution = 'corrected'),
							(this.canceledNavigationResolution = 'replace'),
							(this.ngModule = le.get(m.h0i)),
							(this.console = le.get(m.c2e));
						const un = le.get(m.R0b);
						(this.isNgZoneEnabled = un instanceof m.R0b && m.R0b.isInAngularZone()),
							this.resetConfig(ct),
							(this.currentUrlTree = (function cn() {
								return new je(new Ke([], {}), {}, null);
							})()),
							(this.rawUrlTree = this.currentUrlTree),
							(this.browserUrlTree = this.currentUrlTree),
							(this.configLoader = new ln(
								le,
								Se,
								(qn) => this.triggerEvent(new Vt(qn)),
								(qn) => this.triggerEvent(new en(qn))
							)),
							(this.routerState = Kn(this.currentUrlTree, this.rootComponentType)),
							(this.transitions = new q.X({
								id: 0,
								targetPageId: 0,
								currentUrlTree: this.currentUrlTree,
								currentRawUrl: this.currentUrlTree,
								extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
								urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
								rawUrl: this.currentUrlTree,
								extras: {},
								resolve: null,
								reject: null,
								promise: Promise.resolve(!0),
								source: 'imperative',
								restoredState: null,
								currentSnapshot: this.routerState.snapshot,
								targetSnapshot: null,
								currentRouterState: this.routerState,
								targetRouterState: null,
								guards: {
									canActivateChecks: [],
									canDeactivateChecks: [],
								},
								guardsResult: null,
							})),
							(this.navigations = this.setupNavigations(this.transitions)),
							this.processNavigations();
					}
					get browserPageId() {
						var _;
						return null === (_ = this.location.getState()) || void 0 === _ ? void 0 : _.ɵrouterPageId;
					}
					setupNavigations(_) {
						const T = this.events;
						return _.pipe(
							(0, at.h)((O) => 0 !== O.id),
							(0, Ie.U)((O) =>
								Object.assign(Object.assign({}, O), {
									extractedUrl: this.urlHandlingStrategy.extract(O.rawUrl),
								})
							),
							(0, Ue.w)((O) => {
								let $ = !1,
									le = !1;
								return (0, K.of)(O).pipe(
									(0, nt.b)((Se) => {
										this.currentNavigation = {
											id: Se.id,
											initialUrl: Se.currentRawUrl,
											extractedUrl: Se.extractedUrl,
											trigger: Se.source,
											extras: Se.extras,
											previousNavigation: this.lastSuccessfulNavigation
												? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {
														previousNavigation: null,
												  })
												: null,
										};
									}),
									(0, Ue.w)((Se) => {
										const ct = this.browserUrlTree.toString(),
											zt =
												!this.navigated ||
												Se.extractedUrl.toString() !== ct ||
												ct !== this.currentUrlTree.toString();
										if (
											('reload' === this.onSameUrlNavigation || zt) &&
											this.urlHandlingStrategy.shouldProcessUrl(Se.rawUrl)
										)
											return (
												Yi(Se.source) && (this.browserUrlTree = Se.extractedUrl),
												(0, K.of)(Se).pipe(
													(0, Ue.w)((un) => {
														const qn = this.transitions.getValue();
														return (
															T.next(
																new sn(
																	un.id,
																	this.serializeUrl(un.extractedUrl),
																	un.source,
																	un.restoredState
																)
															),
															qn !== this.transitions.getValue()
																? $e.E
																: Promise.resolve(un)
														);
													}),
													(function lt(w, y, _, T) {
														return (0, Ue.w)((O) =>
															(function R(w, y, _, T, O) {
																return new v(w, y, _, T, O).apply();
															})(w, y, _, O.extractedUrl, T).pipe(
																(0, Ie.U)(($) =>
																	Object.assign(Object.assign({}, O), {
																		urlAfterRedirects: $,
																	})
																)
															)
														);
													})(
														this.ngModule.injector,
														this.configLoader,
														this.urlSerializer,
														this.config
													),
													(0, nt.b)((un) => {
														this.currentNavigation = Object.assign(
															Object.assign({}, this.currentNavigation),
															{
																finalUrl: un.urlAfterRedirects,
															}
														);
													}),
													(function ar(w, y, _, T, O) {
														return (0, Ht.z)(($) =>
															(function an(w, y, _, T, O = 'emptyOnly', $ = 'legacy') {
																try {
																	const le = new fn(w, y, _, T, O, $).recognize();
																	return null === le ? En(new nn()) : (0, K.of)(le);
																} catch (le) {
																	return En(le);
																}
															})(
																w,
																y,
																$.urlAfterRedirects,
																_($.urlAfterRedirects),
																T,
																O
															).pipe(
																(0, Ie.U)((le) =>
																	Object.assign(Object.assign({}, $), {
																		targetSnapshot: le,
																	})
																)
															)
														);
													})(
														this.rootComponentType,
														this.config,
														(un) => this.serializeUrl(un),
														this.paramsInheritanceStrategy,
														this.relativeLinkResolution
													),
													(0, nt.b)((un) => {
														if ('eager' === this.urlUpdateStrategy) {
															if (!un.extras.skipLocationChange) {
																const $n = this.urlHandlingStrategy.merge(
																	un.urlAfterRedirects,
																	un.rawUrl
																);
																this.setBrowserUrl($n, un);
															}
															this.browserUrlTree = un.urlAfterRedirects;
														}
														const qn = new Je(
															un.id,
															this.serializeUrl(un.extractedUrl),
															this.serializeUrl(un.urlAfterRedirects),
															un.targetSnapshot
														);
														T.next(qn);
													})
												)
											);
										if (
											zt &&
											this.rawUrlTree &&
											this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
										) {
											const {
													id: qn,
													extractedUrl: $n,
													source: os,
													restoredState: Yr,
													extras: Wr,
												} = Se,
												Kr = new sn(qn, this.serializeUrl($n), os, Yr);
											T.next(Kr);
											const as = Kn($n, this.rootComponentType).snapshot;
											return (0, K.of)(
												Object.assign(Object.assign({}, Se), {
													targetSnapshot: as,
													urlAfterRedirects: $n,
													extras: Object.assign(Object.assign({}, Wr), {
														skipLocationChange: !1,
														replaceUrl: !1,
													}),
												})
											);
										}
										return (this.rawUrlTree = Se.rawUrl), Se.resolve(null), $e.E;
									}),
									fs((Se) => {
										const {
											targetSnapshot: ct,
											id: zt,
											extractedUrl: kn,
											rawUrl: un,
											extras: { skipLocationChange: qn, replaceUrl: $n },
										} = Se;
										return this.hooks.beforePreactivation(ct, {
											navigationId: zt,
											appliedUrlTree: kn,
											rawUrlTree: un,
											skipLocationChange: !!qn,
											replaceUrl: !!$n,
										});
									}),
									(0, nt.b)((Se) => {
										const ct = new Fe(
											Se.id,
											this.serializeUrl(Se.extractedUrl),
											this.serializeUrl(Se.urlAfterRedirects),
											Se.targetSnapshot
										);
										this.triggerEvent(ct);
									}),
									(0, Ie.U)((Se) =>
										Object.assign(Object.assign({}, Se), {
											guards: Ti(Se.targetSnapshot, Se.currentSnapshot, this.rootContexts),
										})
									),
									(function B(w, y) {
										return (0, Ht.z)((_) => {
											const {
												targetSnapshot: T,
												currentSnapshot: O,
												guards: { canActivateChecks: $, canDeactivateChecks: le },
											} = _;
											return 0 === le.length && 0 === $.length
												? (0, K.of)(Object.assign(Object.assign({}, _), { guardsResult: !0 }))
												: (function Z(w, y, _, T) {
														return (0, Q.D)(w).pipe(
															(0, Ht.z)((O) =>
																(function Ut(w, y, _, T, O) {
																	const $ =
																		y && y.routeConfig
																			? y.routeConfig.canDeactivate
																			: null;
																	if (!$ || 0 === $.length) return (0, K.of)(!0);
																	const le = $.map((Se) => {
																		const ct = sr(Se, y, O);
																		let zt;
																		if (
																			(function xr(w) {
																				return w && vi(w.canDeactivate);
																			})(ct)
																		)
																			zt = An(ct.canDeactivate(w, y, _, T));
																		else {
																			if (!vi(ct))
																				throw new Error(
																					'Invalid CanDeactivate guard'
																				);
																			zt = An(ct(w, y, _, T));
																		}
																		return zt.pipe(Pe());
																	});
																	return (0, K.of)(le).pipe(fr());
																})(O.component, O.route, _, y, T)
															),
															Pe((O) => !0 !== O, !0)
														);
												  })(le, T, O, w).pipe(
														(0, Ht.z)((Se) =>
															Se &&
															(function Ms(w) {
																return 'boolean' == typeof w;
															})(Se)
																? (function me(w, y, _, T) {
																		return (0, Q.D)(y).pipe(
																			(0, Rt.b)((O) =>
																				(0, de.z)(
																					(function Qe(w, y) {
																						return (
																							null !== w &&
																								y &&
																								y(new bn(w)),
																							(0, K.of)(!0)
																						);
																					})(O.route.parent, T),
																					(function Ce(w, y) {
																						return (
																							null !== w &&
																								y &&
																								y(new F(w)),
																							(0, K.of)(!0)
																						);
																					})(O.route, T),
																					(function St(w, y, _) {
																						const T = y[y.length - 1],
																							$ = y
																								.slice(0, y.length - 1)
																								.reverse()
																								.map((le) =>
																									(function gr(w) {
																										const y =
																											w.routeConfig
																												? w
																														.routeConfig
																														.canActivateChild
																												: null;
																										return y &&
																											0 !==
																												y.length
																											? {
																													node: w,
																													guards: y,
																											  }
																											: null;
																									})(le)
																								)
																								.filter(
																									(le) => null !== le
																								)
																								.map((le) =>
																									(0, Be.P)(() => {
																										const Se =
																											le.guards.map(
																												(
																													ct
																												) => {
																													const zt =
																														sr(
																															ct,
																															le.node,
																															_
																														);
																													let kn;
																													if (
																														(function pr(
																															w
																														) {
																															return (
																																w &&
																																vi(
																																	w.canActivateChild
																																)
																															);
																														})(
																															zt
																														)
																													)
																														kn =
																															An(
																																zt.canActivateChild(
																																	T,
																																	w
																																)
																															);
																													else {
																														if (
																															!vi(
																																zt
																															)
																														)
																															throw new Error(
																																'Invalid CanActivateChild guard'
																															);
																														kn =
																															An(
																																zt(
																																	T,
																																	w
																																)
																															);
																													}
																													return kn.pipe(
																														Pe()
																													);
																												}
																											);
																										return (0,
																										K.of)(Se).pipe(
																											fr()
																										);
																									})
																								);
																						return (0, K.of)($).pipe(fr());
																					})(w, O.path, _),
																					(function dt(w, y, _) {
																						const T = y.routeConfig
																							? y.routeConfig.canActivate
																							: null;
																						if (!T || 0 === T.length)
																							return (0, K.of)(!0);
																						const O = T.map(($) =>
																							(0, Be.P)(() => {
																								const le = sr($, y, _);
																								let Se;
																								if (
																									(function Bi(w) {
																										return (
																											w &&
																											vi(
																												w.canActivate
																											)
																										);
																									})(le)
																								)
																									Se = An(
																										le.canActivate(
																											y,
																											w
																										)
																									);
																								else {
																									if (!vi(le))
																										throw new Error(
																											'Invalid CanActivate guard'
																										);
																									Se = An(le(y, w));
																								}
																								return Se.pipe(Pe());
																							})
																						);
																						return (0, K.of)(O).pipe(fr());
																					})(w, O.route, _)
																				)
																			),
																			Pe((O) => !0 !== O, !0)
																		);
																  })(T, $, w, y)
																: (0, K.of)(Se)
														),
														(0, Ie.U)((Se) =>
															Object.assign(Object.assign({}, _), {
																guardsResult: Se,
															})
														)
												  );
										});
									})(this.ngModule.injector, (Se) => this.triggerEvent(Se)),
									(0, nt.b)((Se) => {
										if (Si(Se.guardsResult)) {
											const zt = re(`Redirecting to "${this.serializeUrl(Se.guardsResult)}"`);
											throw ((zt.url = Se.guardsResult), zt);
										}
										const ct = new Ct(
											Se.id,
											this.serializeUrl(Se.extractedUrl),
											this.serializeUrl(Se.urlAfterRedirects),
											Se.targetSnapshot,
											!!Se.guardsResult
										);
										this.triggerEvent(ct);
									}),
									(0, at.h)(
										(Se) =>
											!!Se.guardsResult ||
											(this.restoreHistory(Se), this.cancelNavigationTransition(Se, ''), !1)
									),
									fs((Se) => {
										if (Se.guards.canActivateChecks.length)
											return (0, K.of)(Se).pipe(
												(0, nt.b)((ct) => {
													const zt = new It(
														ct.id,
														this.serializeUrl(ct.extractedUrl),
														this.serializeUrl(ct.urlAfterRedirects),
														ct.targetSnapshot
													);
													this.triggerEvent(zt);
												}),
												(0, Ue.w)((ct) => {
													let zt = !1;
													return (0, K.of)(ct).pipe(
														(function Er(w, y) {
															return (0, Ht.z)((_) => {
																const {
																	targetSnapshot: T,
																	guards: { canActivateChecks: O },
																} = _;
																if (!O.length) return (0, K.of)(_);
																let $ = 0;
																return (0, Q.D)(O).pipe(
																	(0, Rt.b)((le) =>
																		(function ps(w, y, _, T) {
																			return (function rs(w, y, _, T) {
																				const O = Object.keys(w);
																				if (0 === O.length)
																					return (0, K.of)({});
																				const $ = {};
																				return (0, Q.D)(O).pipe(
																					(0, Ht.z)((le) =>
																						(function _r(w, y, _, T) {
																							const O = sr(w, y, T);
																							return An(
																								O.resolve
																									? O.resolve(y, _)
																									: O(y, _)
																							);
																						})(w[le], y, _, T).pipe(
																							(0, nt.b)((Se) => {
																								$[le] = Se;
																							})
																						)
																					),
																					Ge(1),
																					(0, Ht.z)(() =>
																						Object.keys($).length ===
																						O.length
																							? (0, K.of)($)
																							: $e.E
																					)
																				);
																			})(w._resolve, w, y, T).pipe(
																				(0, Ie.U)(
																					($) => (
																						(w._resolvedData = $),
																						(w.data = Object.assign(
																							Object.assign({}, w.data),
																							ni(w, _).resolve
																						)),
																						null
																					)
																				)
																			);
																		})(le.route, T, w, y)
																	),
																	(0, nt.b)(() => $++),
																	Ge(1),
																	(0, Ht.z)((le) =>
																		$ === O.length ? (0, K.of)(_) : $e.E
																	)
																);
															});
														})(this.paramsInheritanceStrategy, this.ngModule.injector),
														(0, nt.b)({
															next: () => (zt = !0),
															complete: () => {
																zt ||
																	(this.restoreHistory(ct),
																	this.cancelNavigationTransition(
																		ct,
																		"At least one route resolver didn't emit any value."
																	));
															},
														})
													);
												}),
												(0, nt.b)((ct) => {
													const zt = new Bt(
														ct.id,
														this.serializeUrl(ct.extractedUrl),
														this.serializeUrl(ct.urlAfterRedirects),
														ct.targetSnapshot
													);
													this.triggerEvent(zt);
												})
											);
									}),
									fs((Se) => {
										const {
											targetSnapshot: ct,
											id: zt,
											extractedUrl: kn,
											rawUrl: un,
											extras: { skipLocationChange: qn, replaceUrl: $n },
										} = Se;
										return this.hooks.afterPreactivation(ct, {
											navigationId: zt,
											appliedUrlTree: kn,
											rawUrlTree: un,
											skipLocationChange: !!qn,
											replaceUrl: !!$n,
										});
									}),
									(0, Ie.U)((Se) => {
										const ct = (function wi(w, y, _) {
											const T = mi(w, y._root, _ ? _._root : void 0);
											return new Ki(T, y);
										})(this.routeReuseStrategy, Se.targetSnapshot, Se.currentRouterState);
										return Object.assign(Object.assign({}, Se), { targetRouterState: ct });
									}),
									(0, nt.b)((Se) => {
										(this.currentUrlTree = Se.urlAfterRedirects),
											(this.rawUrlTree = this.urlHandlingStrategy.merge(
												Se.urlAfterRedirects,
												Se.rawUrl
											)),
											(this.routerState = Se.targetRouterState),
											'deferred' === this.urlUpdateStrategy &&
												(Se.extras.skipLocationChange ||
													this.setBrowserUrl(this.rawUrlTree, Se),
												(this.browserUrlTree = Se.urlAfterRedirects));
									}),
									((w, y, _) =>
										(0, Ie.U)(
											(T) => (
												new hr(y, T.targetRouterState, T.currentRouterState, _).activate(w), T
											)
										))(this.rootContexts, this.routeReuseStrategy, (Se) => this.triggerEvent(Se)),
									(0, nt.b)({
										next() {
											$ = !0;
										},
										complete() {
											$ = !0;
										},
									}),
									(0, gt.x)(() => {
										var Se;
										$ ||
											le ||
											this.cancelNavigationTransition(
												O,
												`Navigation ID ${O.id} is not equal to the current navigation id ${this.navigationId}`
											),
											(null === (Se = this.currentNavigation) || void 0 === Se
												? void 0
												: Se.id) === O.id && (this.currentNavigation = null);
									}),
									(0, Xe.K)((Se) => {
										if (
											((le = !0),
											(function et(w) {
												return w && w[X];
											})(Se))
										) {
											const ct = Si(Se.url);
											ct || ((this.navigated = !0), this.restoreHistory(O, !0));
											const zt = new Ot(O.id, this.serializeUrl(O.extractedUrl), Se.message);
											T.next(zt),
												ct
													? setTimeout(() => {
															const kn = this.urlHandlingStrategy.merge(
																	Se.url,
																	this.rawUrlTree
																),
																un = {
																	skipLocationChange: O.extras.skipLocationChange,
																	replaceUrl:
																		'eager' === this.urlUpdateStrategy ||
																		Yi(O.source),
																};
															this.scheduleNavigation(kn, 'imperative', null, un, {
																resolve: O.resolve,
																reject: O.reject,
																promise: O.promise,
															});
													  }, 0)
													: O.resolve(!1);
										} else {
											this.restoreHistory(O, !0);
											const ct = new ft(O.id, this.serializeUrl(O.extractedUrl), Se);
											T.next(ct);
											try {
												O.resolve(this.errorHandler(Se));
											} catch (zt) {
												O.reject(zt);
											}
										}
										return $e.E;
									})
								);
							})
						);
					}
					resetRootComponentType(_) {
						(this.rootComponentType = _), (this.routerState.root.component = this.rootComponentType);
					}
					setTransition(_) {
						this.transitions.next(Object.assign(Object.assign({}, this.transitions.value), _));
					}
					initialNavigation() {
						this.setUpLocationChangeListener(),
							0 === this.navigationId &&
								this.navigateByUrl(this.location.path(!0), {
									replaceUrl: !0,
								});
					}
					setUpLocationChangeListener() {
						this.locationSubscription ||
							(this.locationSubscription = this.location.subscribe((_) => {
								const T = 'popstate' === _.type ? 'popstate' : 'hashchange';
								'popstate' === T &&
									setTimeout(() => {
										var O;
										const $ = { replaceUrl: !0 },
											le = (null === (O = _.state) || void 0 === O ? void 0 : O.navigationId)
												? _.state
												: null;
										if (le) {
											const ct = Object.assign({}, le);
											delete ct.navigationId,
												delete ct.ɵrouterPageId,
												0 !== Object.keys(ct).length && ($.state = ct);
										}
										const Se = this.parseUrl(_.url);
										this.scheduleNavigation(Se, T, le, $);
									}, 0);
							}));
					}
					get url() {
						return this.serializeUrl(this.currentUrlTree);
					}
					getCurrentNavigation() {
						return this.currentNavigation;
					}
					triggerEvent(_) {
						this.events.next(_);
					}
					resetConfig(_) {
						rr(_), (this.config = _.map(Lr)), (this.navigated = !1), (this.lastSuccessfulId = -1);
					}
					ngOnDestroy() {
						this.dispose();
					}
					dispose() {
						this.transitions.complete(),
							this.locationSubscription &&
								(this.locationSubscription.unsubscribe(), (this.locationSubscription = void 0)),
							(this.disposed = !0);
					}
					createUrlTree(_, T = {}) {
						const {
								relativeTo: O,
								queryParams: $,
								fragment: le,
								queryParamsHandling: Se,
								preserveFragment: ct,
							} = T,
							zt = O || this.routerState.root,
							kn = ct ? this.currentUrlTree.fragment : le;
						let un = null;
						switch (Se) {
							case 'merge':
								un = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), $);
								break;
							case 'preserve':
								un = this.currentUrlTree.queryParams;
								break;
							default:
								un = $ || null;
						}
						return (
							null !== un && (un = this.removeEmptyProps(un)),
							(function Jn(w, y, _, T, O) {
								if (0 === _.length) return br(y.root, y.root, y, T, O);
								const $ = (function zi(w) {
									if ('string' == typeof w[0] && 1 === w.length && '/' === w[0])
										return new _i(!0, 0, w);
									let y = 0,
										_ = !1;
									const T = w.reduce((O, $, le) => {
										if ('object' == typeof $ && null != $) {
											if ($.outlets) {
												const Se = {};
												return (
													On($.outlets, (ct, zt) => {
														Se[zt] = 'string' == typeof ct ? ct.split('/') : ct;
													}),
													[...O, { outlets: Se }]
												);
											}
											if ($.segmentPath) return [...O, $.segmentPath];
										}
										return 'string' != typeof $
											? [...O, $]
											: 0 === le
											? ($.split('/').forEach((Se, ct) => {
													(0 == ct && '.' === Se) ||
														(0 == ct && '' === Se
															? (_ = !0)
															: '..' === Se
															? y++
															: '' != Se && O.push(Se));
											  }),
											  O)
											: [...O, $];
									}, []);
									return new _i(_, y, T);
								})(_);
								if ($.toRoot()) return br(y.root, new Ke([], {}), y, T, O);
								const le = (function hs(w, y, _) {
										if (w.isAbsolute) return new Ar(y.root, !0, 0);
										if (-1 === _.snapshot._lastPathIndex) {
											const $ = _.snapshot._urlSegment;
											return new Ar($, $ === y.root, 0);
										}
										const T = qi(w.commands[0]) ? 0 : 1;
										return (function Jr(w, y, _) {
											let T = w,
												O = y,
												$ = _;
											for (; $ > O; ) {
												if ((($ -= O), (T = T.parent), !T))
													throw new Error("Invalid number of '../'");
												O = T.segments.length;
											}
											return new Ar(T, !1, O - $);
										})(_.snapshot._urlSegment, _.snapshot._lastPathIndex + T, w.numberOfDoubleDots);
									})($, y, w),
									Se = le.processChildren
										? Dr(le.segmentGroup, le.index, $.commands)
										: wr(le.segmentGroup, le.index, $.commands);
								return br(le.segmentGroup, Se, y, T, O);
							})(zt, this.currentUrlTree, _, un, null != kn ? kn : null)
						);
					}
					navigateByUrl(_, T = { skipLocationChange: !1 }) {
						const O = Si(_) ? _ : this.parseUrl(_),
							$ = this.urlHandlingStrategy.merge(O, this.rawUrlTree);
						return this.scheduleNavigation($, 'imperative', null, T);
					}
					navigate(_, T = { skipLocationChange: !1 }) {
						return (
							(function vr(w) {
								for (let y = 0; y < w.length; y++) {
									const _ = w[y];
									if (null == _)
										throw new Error(`The requested path contains ${_} segment at index ${y}`);
								}
							})(_),
							this.navigateByUrl(this.createUrlTree(_, T), T)
						);
					}
					serializeUrl(_) {
						return this.urlSerializer.serialize(_);
					}
					parseUrl(_) {
						let T;
						try {
							T = this.urlSerializer.parse(_);
						} catch (O) {
							T = this.malformedUriErrorHandler(O, this.urlSerializer, _);
						}
						return T;
					}
					isActive(_, T) {
						let O;
						if (((O = !0 === T ? Object.assign({}, Ws) : !1 === T ? Object.assign({}, co) : T), Si(_)))
							return gn(this.currentUrlTree, _, O);
						const $ = this.parseUrl(_);
						return gn(this.currentUrlTree, $, O);
					}
					removeEmptyProps(_) {
						return Object.keys(_).reduce((T, O) => {
							const $ = _[O];
							return null != $ && (T[O] = $), T;
						}, {});
					}
					processNavigations() {
						this.navigations.subscribe(
							(_) => {
								(this.navigated = !0),
									(this.lastSuccessfulId = _.id),
									(this.currentPageId = _.targetPageId),
									this.events.next(
										new Wt(
											_.id,
											this.serializeUrl(_.extractedUrl),
											this.serializeUrl(this.currentUrlTree)
										)
									),
									(this.lastSuccessfulNavigation = this.currentNavigation),
									_.resolve(!0);
							},
							(_) => {
								this.console.warn(`Unhandled Navigation Error: ${_}`);
							}
						);
					}
					scheduleNavigation(_, T, O, $, le) {
						var Se, ct, zt;
						if (this.disposed) return Promise.resolve(!1);
						const kn = this.transitions.value,
							un = Yi(T) && kn && !Yi(kn.source),
							qn = kn.rawUrl.toString() === _.toString(),
							$n = kn.id === (null === (Se = this.currentNavigation) || void 0 === Se ? void 0 : Se.id);
						if (un && qn && $n) return Promise.resolve(!0);
						let Yr, Wr, Kr;
						le
							? ((Yr = le.resolve), (Wr = le.reject), (Kr = le.promise))
							: (Kr = new Promise((_s, Ao) => {
									(Yr = _s), (Wr = Ao);
							  }));
						const as = ++this.navigationId;
						let Zr;
						return (
							'computed' === this.canceledNavigationResolution
								? (0 === this.currentPageId && (O = this.location.getState()),
								  (Zr =
										O && O.ɵrouterPageId
											? O.ɵrouterPageId
											: $.replaceUrl || $.skipLocationChange
											? null !== (ct = this.browserPageId) && void 0 !== ct
												? ct
												: 0
											: (null !== (zt = this.browserPageId) && void 0 !== zt ? zt : 0) + 1))
								: (Zr = 0),
							this.setTransition({
								id: as,
								targetPageId: Zr,
								source: T,
								restoredState: O,
								currentUrlTree: this.currentUrlTree,
								currentRawUrl: this.rawUrlTree,
								rawUrl: _,
								extras: $,
								resolve: Yr,
								reject: Wr,
								promise: Kr,
								currentSnapshot: this.routerState.snapshot,
								currentRouterState: this.routerState,
							}),
							Kr.catch((_s) => Promise.reject(_s))
						);
					}
					setBrowserUrl(_, T) {
						const O = this.urlSerializer.serialize(_),
							$ = Object.assign(
								Object.assign({}, T.extras.state),
								this.generateNgRouterState(T.id, T.targetPageId)
							);
						this.location.isCurrentPathEqualTo(O) || T.extras.replaceUrl
							? this.location.replaceState(O, '', $)
							: this.location.go(O, '', $);
					}
					restoreHistory(_, T = !1) {
						var O, $;
						if ('computed' === this.canceledNavigationResolution) {
							const le = this.currentPageId - _.targetPageId;
							('popstate' !== _.source &&
								'eager' !== this.urlUpdateStrategy &&
								this.currentUrlTree !==
									(null === (O = this.currentNavigation) || void 0 === O ? void 0 : O.finalUrl)) ||
							0 === le
								? this.currentUrlTree ===
										(null === ($ = this.currentNavigation) || void 0 === $ ? void 0 : $.finalUrl) &&
								  0 === le &&
								  (this.resetState(_),
								  (this.browserUrlTree = _.currentUrlTree),
								  this.resetUrlToCurrentUrlTree())
								: this.location.historyGo(le);
						} else
							'replace' === this.canceledNavigationResolution &&
								(T && this.resetState(_), this.resetUrlToCurrentUrlTree());
					}
					resetState(_) {
						(this.routerState = _.currentRouterState),
							(this.currentUrlTree = _.currentUrlTree),
							(this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, _.rawUrl));
					}
					resetUrlToCurrentUrlTree() {
						this.location.replaceState(
							this.urlSerializer.serialize(this.rawUrlTree),
							'',
							this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
						);
					}
					cancelNavigationTransition(_, T) {
						const O = new Ot(_.id, this.serializeUrl(_.extractedUrl), T);
						this.triggerEvent(O), _.resolve(!1);
					}
					generateNgRouterState(_, T) {
						return 'computed' === this.canceledNavigationResolution
							? { navigationId: _, ɵrouterPageId: T }
							: { navigationId: _ };
					}
				}
				return (
					(w.ɵfac = function (_) {
						m.$Z();
					}),
					(w.ɵprov = m.Yz7({ token: w, factory: w.ɵfac })),
					w
				);
			})();
			function Yi(w) {
				return 'imperative' !== w;
			}
			let lr = (() => {
				class w {
					constructor(_, T, O) {
						(this.router = _),
							(this.route = T),
							(this.locationStrategy = O),
							(this.commands = null),
							(this.href = null),
							(this.onChanges = new ye.x()),
							(this.subscription = _.events.subscribe(($) => {
								$ instanceof Wt && this.updateTargetUrlAndHref();
							}));
					}
					set routerLink(_) {
						this.commands = null != _ ? (Array.isArray(_) ? _ : [_]) : null;
					}
					ngOnChanges(_) {
						this.updateTargetUrlAndHref(), this.onChanges.next(this);
					}
					ngOnDestroy() {
						this.subscription.unsubscribe();
					}
					onClick(_, T, O, $, le) {
						if (
							0 !== _ ||
							T ||
							O ||
							$ ||
							le ||
							('string' == typeof this.target && '_self' != this.target) ||
							null === this.urlTree
						)
							return !0;
						const Se = {
							skipLocationChange: $r(this.skipLocationChange),
							replaceUrl: $r(this.replaceUrl),
							state: this.state,
						};
						return this.router.navigateByUrl(this.urlTree, Se), !1;
					}
					updateTargetUrlAndHref() {
						this.href =
							null !== this.urlTree
								? this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
								: null;
					}
					get urlTree() {
						return null === this.commands
							? null
							: this.router.createUrlTree(this.commands, {
									relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
									queryParams: this.queryParams,
									fragment: this.fragment,
									queryParamsHandling: this.queryParamsHandling,
									preserveFragment: $r(this.preserveFragment),
							  });
					}
				}
				return (
					(w.ɵfac = function (_) {
						return new (_ || w)(m.Y36(Gn), m.Y36(oi), m.Y36(yt.S$));
					}),
					(w.ɵdir = m.lG2({
						type: w,
						selectors: [
							['a', 'routerLink', ''],
							['area', 'routerLink', ''],
						],
						hostVars: 2,
						hostBindings: function (_, T) {
							1 & _ &&
								m.NdJ('click', function ($) {
									return T.onClick($.button, $.ctrlKey, $.shiftKey, $.altKey, $.metaKey);
								}),
								2 & _ && m.uIk('target', T.target)('href', T.href, m.LSH);
						},
						inputs: {
							target: 'target',
							queryParams: 'queryParams',
							fragment: 'fragment',
							queryParamsHandling: 'queryParamsHandling',
							preserveFragment: 'preserveFragment',
							skipLocationChange: 'skipLocationChange',
							replaceUrl: 'replaceUrl',
							state: 'state',
							relativeTo: 'relativeTo',
							routerLink: 'routerLink',
						},
						features: [m.TTD],
					})),
					w
				);
			})();
			function $r(w) {
				return '' === w || !!w;
			}
			class xs {}
			class uo {
				preload(y, _) {
					return (0, K.of)(null);
				}
			}
			let Es = (() => {
					class w {
						constructor(_, T, O, $) {
							(this.router = _),
								(this.injector = O),
								(this.preloadingStrategy = $),
								(this.loader = new ln(
									O,
									T,
									(ct) => _.triggerEvent(new Vt(ct)),
									(ct) => _.triggerEvent(new en(ct))
								));
						}
						setUpPreloading() {
							this.subscription = this.router.events
								.pipe(
									(0, at.h)((_) => _ instanceof Wt),
									(0, Rt.b)(() => this.preload())
								)
								.subscribe(() => {});
						}
						preload() {
							const _ = this.injector.get(m.h0i);
							return this.processRoutes(_, this.router.config);
						}
						ngOnDestroy() {
							this.subscription && this.subscription.unsubscribe();
						}
						processRoutes(_, T) {
							const O = [];
							for (const $ of T)
								if ($.loadChildren && !$.canLoad && $._loadedConfig) {
									const le = $._loadedConfig;
									O.push(this.processRoutes(le.module, le.routes));
								} else
									$.loadChildren && !$.canLoad
										? O.push(this.preloadConfig(_, $))
										: $.children && O.push(this.processRoutes(_, $.children));
							return (0, Q.D)(O).pipe(
								(0, ke.J)(),
								(0, Ie.U)(($) => {})
							);
						}
						preloadConfig(_, T) {
							return this.preloadingStrategy.preload(T, () =>
								(T._loadedConfig ? (0, K.of)(T._loadedConfig) : this.loader.load(_.injector, T)).pipe(
									(0, Ht.z)(($) => ((T._loadedConfig = $), this.processRoutes($.module, $.routes)))
								)
							);
						}
					}
					return (
						(w.ɵfac = function (_) {
							return new (_ || w)(m.LFG(Gn), m.LFG(m.Sil), m.LFG(m.zs3), m.LFG(xs));
						}),
						(w.ɵprov = m.Yz7({ token: w, factory: w.ɵfac })),
						w
					);
				})(),
				Os = (() => {
					class w {
						constructor(_, T, O = {}) {
							(this.router = _),
								(this.viewportScroller = T),
								(this.options = O),
								(this.lastId = 0),
								(this.lastSource = 'imperative'),
								(this.restoredId = 0),
								(this.store = {}),
								(O.scrollPositionRestoration = O.scrollPositionRestoration || 'disabled'),
								(O.anchorScrolling = O.anchorScrolling || 'disabled');
						}
						init() {
							'disabled' !== this.options.scrollPositionRestoration &&
								this.viewportScroller.setHistoryScrollRestoration('manual'),
								(this.routerEventsSubscription = this.createScrollEvents()),
								(this.scrollEventsSubscription = this.consumeScrollEvents());
						}
						createScrollEvents() {
							return this.router.events.subscribe((_) => {
								_ instanceof sn
									? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
									  (this.lastSource = _.navigationTrigger),
									  (this.restoredId = _.restoredState ? _.restoredState.navigationId : 0))
									: _ instanceof Wt &&
									  ((this.lastId = _.id),
									  this.scheduleScrollEvent(_, this.router.parseUrl(_.urlAfterRedirects).fragment));
							});
						}
						consumeScrollEvents() {
							return this.router.events.subscribe((_) => {
								_ instanceof te &&
									(_.position
										? 'top' === this.options.scrollPositionRestoration
											? this.viewportScroller.scrollToPosition([0, 0])
											: 'enabled' === this.options.scrollPositionRestoration &&
											  this.viewportScroller.scrollToPosition(_.position)
										: _.anchor && 'enabled' === this.options.anchorScrolling
										? this.viewportScroller.scrollToAnchor(_.anchor)
										: 'disabled' !== this.options.scrollPositionRestoration &&
										  this.viewportScroller.scrollToPosition([0, 0]));
							});
						}
						scheduleScrollEvent(_, T) {
							this.router.triggerEvent(
								new te(_, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, T)
							);
						}
						ngOnDestroy() {
							this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
								this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
						}
					}
					return (
						(w.ɵfac = function (_) {
							m.$Z();
						}),
						(w.ɵprov = m.Yz7({ token: w, factory: w.ɵfac })),
						w
					);
				})();
			const ms = new m.OlP('ROUTER_CONFIGURATION'),
				Zs = new m.OlP('ROUTER_FORROOT_GUARD'),
				C = [
					yt.Ye,
					{ provide: qe, useClass: Te },
					{
						provide: Gn,
						useFactory: function Oi(w, y, _, T, O, $, le = {}, Se, ct) {
							const zt = new Gn(null, w, y, _, T, O, Qt($));
							return (
								Se && (zt.urlHandlingStrategy = Se),
								ct && (zt.routeReuseStrategy = ct),
								(function Vi(w, y) {
									w.errorHandler && (y.errorHandler = w.errorHandler),
										w.malformedUriErrorHandler &&
											(y.malformedUriErrorHandler = w.malformedUriErrorHandler),
										w.onSameUrlNavigation && (y.onSameUrlNavigation = w.onSameUrlNavigation),
										w.paramsInheritanceStrategy &&
											(y.paramsInheritanceStrategy = w.paramsInheritanceStrategy),
										w.relativeLinkResolution &&
											(y.relativeLinkResolution = w.relativeLinkResolution),
										w.urlUpdateStrategy && (y.urlUpdateStrategy = w.urlUpdateStrategy),
										w.canceledNavigationResolution &&
											(y.canceledNavigationResolution = w.canceledNavigationResolution);
								})(le, zt),
								le.enableTracing &&
									zt.events.subscribe((kn) => {
										var un, qn;
										null === (un = console.group) ||
											void 0 === un ||
											un.call(console, `Router Event: ${kn.constructor.name}`),
											console.log(kn.toString()),
											console.log(kn),
											null === (qn = console.groupEnd) || void 0 === qn || qn.call(console);
									}),
								zt
							);
						},
						deps: [
							qe,
							ir,
							yt.Ye,
							m.zs3,
							m.Sil,
							Xt,
							ms,
							[class Zn {}, new m.FiY()],
							[class ss {}, new m.FiY()],
						],
					},
					ir,
					{
						provide: oi,
						useFactory: function Or(w) {
							return w.routerState.root;
						},
						deps: [Gn],
					},
					Es,
					uo,
					class Eo {
						preload(y, _) {
							return _().pipe((0, Xe.K)(() => (0, K.of)(null)));
						}
					},
					{ provide: ms, useValue: { enableTracing: !1 } },
				];
			function M() {
				return new m.PXZ('Router', Gn);
			}
			let V = (() => {
				class w {
					constructor(_, T) {}
					static forRoot(_, T) {
						return {
							ngModule: w,
							providers: [
								C,
								xi(_),
								{
									provide: Zs,
									useFactory: rn,
									deps: [[Gn, new m.FiY(), new m.tp0()]],
								},
								{ provide: ms, useValue: T || {} },
								{
									provide: yt.S$,
									useFactory: vt,
									deps: [yt.lw, [new m.tBr(yt.mr), new m.FiY()], ms],
								},
								{
									provide: Os,
									useFactory: ve,
									deps: [Gn, yt.EM, ms],
								},
								{
									provide: xs,
									useExisting: T && T.preloadingStrategy ? T.preloadingStrategy : uo,
								},
								{ provide: m.PXZ, multi: !0, useFactory: M },
								[
									gs,
									{
										provide: m.ip1,
										multi: !0,
										useFactory: To,
										deps: [gs],
									},
									{ provide: Ss, useFactory: uu, deps: [gs] },
									{
										provide: m.tb,
										multi: !0,
										useExisting: Ss,
									},
								],
							],
						};
					}
					static forChild(_) {
						return { ngModule: w, providers: [xi(_)] };
					}
				}
				return (
					(w.ɵfac = function (_) {
						return new (_ || w)(m.LFG(Zs, 8), m.LFG(Gn, 8));
					}),
					(w.ɵmod = m.oAB({ type: w })),
					(w.ɵinj = m.cJS({})),
					w
				);
			})();
			function ve(w, y, _) {
				return _.scrollOffset && y.setOffset(_.scrollOffset), new Os(w, y, _);
			}
			function vt(w, y, _ = {}) {
				return _.useHash ? new yt.Do(w, y) : new yt.b0(w, y);
			}
			function rn(w) {
				return 'guarded';
			}
			function xi(w) {
				return [
					{ provide: m.deG, multi: !0, useValue: w },
					{ provide: Xt, multi: !0, useValue: w },
				];
			}
			let gs = (() => {
				class w {
					constructor(_) {
						(this.injector = _),
							(this.initNavigation = !1),
							(this.destroyed = !1),
							(this.resultOfPreactivationDone = new ye.x());
					}
					appInitializer() {
						return this.injector.get(yt.V_, Promise.resolve(null)).then(() => {
							if (this.destroyed) return Promise.resolve(!0);
							let T = null;
							const O = new Promise((Se) => (T = Se)),
								$ = this.injector.get(Gn),
								le = this.injector.get(ms);
							return (
								'disabled' === le.initialNavigation
									? ($.setUpLocationChangeListener(), T(!0))
									: 'enabled' === le.initialNavigation || 'enabledBlocking' === le.initialNavigation
									? (($.hooks.afterPreactivation = () =>
											this.initNavigation
												? (0, K.of)(null)
												: ((this.initNavigation = !0), T(!0), this.resultOfPreactivationDone)),
									  $.initialNavigation())
									: T(!0),
								O
							);
						});
					}
					bootstrapListener(_) {
						const T = this.injector.get(ms),
							O = this.injector.get(Es),
							$ = this.injector.get(Os),
							le = this.injector.get(Gn),
							Se = this.injector.get(m.z2F);
						_ === Se.components[0] &&
							(('enabledNonBlocking' === T.initialNavigation || void 0 === T.initialNavigation) &&
								le.initialNavigation(),
							O.setUpPreloading(),
							$.init(),
							le.resetRootComponentType(Se.componentTypes[0]),
							this.resultOfPreactivationDone.next(null),
							this.resultOfPreactivationDone.complete());
					}
					ngOnDestroy() {
						this.destroyed = !0;
					}
				}
				return (
					(w.ɵfac = function (_) {
						return new (_ || w)(m.LFG(m.zs3));
					}),
					(w.ɵprov = m.Yz7({ token: w, factory: w.ɵfac })),
					w
				);
			})();
			function To(w) {
				return w.appInitializer.bind(w);
			}
			function uu(w) {
				return w.bootstrapListener.bind(w);
			}
			const Ss = new m.OlP('Router Initializer');
		},
	},
	(Et) => {
		Et((Et.s = 1703));
	},
]);
