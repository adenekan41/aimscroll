/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import { useMemo } from 'react';

const useWillMount = (effect: any) => useMemo(effect, []);

export default useWillMount;
