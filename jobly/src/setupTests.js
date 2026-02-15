// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { ReadableStream } from 'node:stream/web';
import fetchMock from '@fetch-mock/jest';

global.ReadableStream = ReadableStream;
// Setup fetch mock globally
fetchMock.mockGlobal();
