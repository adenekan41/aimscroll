/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import { useMemo } from 'react';

const useWillMount = effect => useMemo(effect, []);

export default useWillMount;
