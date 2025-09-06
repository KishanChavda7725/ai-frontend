import { Component, ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { hasError: boolean; message?: string };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(err: unknown) {
    return { hasError: true, message: err instanceof Error ? err.message : 'Unknown error' };
  }
  componentDidCatch(error: unknown) {
    console.error('[ErrorBoundary]', error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto p-6">
          <div className="card">
            <h1 className="text-xl font-semibold mb-2">Something went wrong</h1>
            <p className="opacity-80">{this.state.message}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
