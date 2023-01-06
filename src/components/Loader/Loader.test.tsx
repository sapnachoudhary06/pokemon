import { act } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { createRoot } from 'react-dom/client';

import { Loader } from './Loader';

let container: HTMLDivElement | null = null;

describe('loader', () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    const elem = document.getElementById('div');
    if (container && elem) {
      unmountComponentAtNode(elem);
      container.remove();
    }

    container = null;
  });

  it('renders loader', () => {
    act(() => {
      createRoot(container as HTMLDivElement)
        .render(<Loader />);
    });
    expect(container?.getElementsByClassName('Loader').length)
      .toBe(1);
  });
});
