import { SelectableItem } from '../value-objects';
import { Application } from '../entities';

export class ApplicationListItem extends SelectableItem {
    constructor(private model: Application) {
        super();
    }
}