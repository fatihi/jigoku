import BaseCardSelector from './BaseCardSelector';

class UnlimitedCardSelector extends BaseCardSelector {
    hasReachedLimit(): boolean {
        return false;
    }
}

export default UnlimitedCardSelector;
