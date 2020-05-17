import { Emitter } from '@theia/core/lib/common/event';
import { Preference } from './preference-types';
export declare class PreferencesEventService {
    onTabScopeSelected: Emitter<Preference.SelectedScopeDetails>;
    onSearch: Emitter<Preference.SearchQuery>;
    onEditorScroll: Emitter<Preference.MouseScrollDetails>;
    onNavTreeSelection: Emitter<Preference.SelectedTreeNode>;
    onDisplayChanged: Emitter<void>;
}
//# sourceMappingURL=preference-event-service.d.ts.map