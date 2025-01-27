import { render, type RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

import AppWrapper from '../AppWrapper';

type CustomRenderOptions = Omit<RenderOptions, 'queries'>;

const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  return render(ui, { wrapper: AppWrapper, ...options });
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export default customRender;
