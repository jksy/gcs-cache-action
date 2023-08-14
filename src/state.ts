import * as core from '@actions/core';

export type CacheHitKindState = 'exact' | 'partial' | 'none';

export interface State {
  path: string;
  bucket: string;
  cacheHitKind: CacheHitKindState;
  forceUpload: string;
  targetFileName: string;
  rootDir: string;
}

export function saveState(state: State): void {
  core.debug(`Saving state: ${JSON.stringify(state)}.`);

  core.saveState('bucket', state.bucket);
  core.saveState('path', state.path);
  core.saveState('cache-hit-kind', state.cacheHitKind);
  core.saveState('force-upload', state.forceUpload);
  core.saveState('target-file-name', state.targetFileName);
  core.saveState('root-dir', state.rootDir);
}

export function getState(): State {
  const state = {
    path: core.getState('path'),
    bucket: core.getState('bucket'),
    cacheHitKind: core.getState('cache-hit-kind') as CacheHitKindState,
    forceUpload: core.getState('force-upload'),
    targetFileName: core.getState('target-file-name'),
    rootDir: core.getState('root-dir'),
  };

  core.debug(`Loaded state: ${JSON.stringify(state)}.`);

  return state;
}
