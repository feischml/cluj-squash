

@Injectable()
export class HeroEffects {
    constructor (
        private update$: StateUpdates<AppState>,
        private heroActions: HeroActions,
        private svc: HeroService
    ) {}
    ...
}

