import { render, type RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

import GlobalProvider from '../GlobalProvider';

type CustomRenderOptions = Omit<RenderOptions, 'queries'>;

/**
 * Custom render function for testing components with context providers.
 * Wraps the UI element with GlobalProvider to provide necessary context.
 *
 * @param ui - The React element to render.
 * @param options - Optional render options.
 * @returns Render result.
 */
const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  return render(ui, { wrapper: GlobalProvider, ...options });
};

// Export everything from @testing-library/react for convenience
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export default customRender;
