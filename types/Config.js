/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type Path = string;
export type Glob = string;

export type HasteConfig = {|
  computeSha1?: boolean,
  defaultPlatform?: ?string,
  hasteImplModulePath?: string,
  platforms?: Array<string>,
  providesModuleNodeModules: Array<string>,
|};

export type ReporterConfig = [string, Object];

export type ConfigGlobals = Object;

export type DefaultOptions = {|
  automock: boolean,
  bail: number,
  browser: boolean,
  cache: boolean,
  cacheDirectory: Path,
  changedFilesWithAncestor: boolean,
  clearMocks: boolean,
  collectCoverage: boolean,
  collectCoverageFrom: ?Array<string>,
  coverageDirectory: ?string,
  coveragePathIgnorePatterns: Array<string>,
  coverageReporters: Array<string>,
  coverageThreshold: ?{global: {[key: string]: number}},
  cwd: Path,
  dependencyExtractor: ?string,
  errorOnDeprecated: boolean,
  expand: boolean,
  filter: ?Path,
  forceCoverageMatch: Array<Glob>,
  globals: ConfigGlobals,
  globalSetup: ?string,
  globalTeardown: ?string,
  haste: HasteConfig,
  maxConcurrency: number,
  moduleDirectories: Array<string>,
  moduleFileExtensions: Array<string>,
  moduleNameMapper: {[key: string]: string},
  modulePathIgnorePatterns: Array<string>,
  noStackTrace: boolean,
  notify: boolean,
  notifyMode: string,
  preset: ?string,
  prettierPath: ?string,
  projects: ?Array<string | ProjectConfig>,
  resetMocks: boolean,
  resetModules: boolean,
  resolver: ?Path,
  restoreMocks: boolean,
  restoreSpies: boolean,
  rootDir: ?Path,
  roots: ?Array<Path>,
  runner: string,
  runTestsByPath: boolean,
  setupFiles: Array<Path>,
  setupFilesAfterEnv: Array<Path>,
  skipFilter: boolean,
  snapshotSerializers: Array<Path>,
  testEnvironment: string,
  testEnvironmentOptions: Object,
  testFailureExitCode: string | number,
  testLocationInResults: boolean,
  testMatch: Array<Glob>,
  testPathIgnorePatterns: Array<string>,
  testRegex: Array<string>,
  testResultsProcessor: ?string,
  testRunner: ?string,
  testURL: string,
  timers: 'real' | 'fake',
  transform: ?{[key: string]: string},
  transformIgnorePatterns: Array<Glob>,
  watchPathIgnorePatterns: Array<string>,
  useStderr: boolean,
  verbose: ?boolean,
  watch: boolean,
  watchman: boolean,
|};

export type InitialOptions = {
  automock?: boolean,
  bail?: boolean | number,
  browser?: boolean,
  cache?: boolean,
  cacheDirectory?: Path,
  clearMocks?: boolean,
  changedFilesWithAncestor?: boolean,
  changedSince?: string,
  collectCoverage?: boolean,
  collectCoverageFrom?: Array<Glob>,
  collectCoverageOnlyFrom?: {[key: string]: boolean},
  coverageDirectory?: string,
  coveragePathIgnorePatterns?: Array<string>,
  coverageReporters?: Array<string>,
  coverageThreshold?: {global: {[key: string]: number}},
  dependencyExtractor?: string,
  detectLeaks?: boolean,
  detectOpenHandles?: boolean,
  displayName?: string,
  expand?: boolean,
  extraGlobals?: Array<string>,
  filter?: Path,
  findRelatedTests?: boolean,
  forceCoverageMatch?: Array<Glob>,
  forceExit?: boolean,
  json?: boolean,
  globals?: ConfigGlobals,
  globalSetup?: ?string,
  globalTeardown?: ?string,
  haste?: HasteConfig,
  reporters?: Array<string | ReporterConfig>,
  logHeapUsage?: boolean,
  lastCommit?: boolean,
  listTests?: boolean,
  mapCoverage?: boolean,
  maxConcurrency?: number,
  moduleDirectories?: Array<string>,
  moduleFileExtensions?: Array<string>,
  moduleLoader?: Path,
  moduleNameMapper?: {[key: string]: string},
  modulePathIgnorePatterns?: Array<string>,
  modulePaths?: Array<string>,
  name?: string,
  noStackTrace?: boolean,
  notify?: boolean,
  notifyMode?: string,
  onlyChanged?: boolean,
  outputFile?: Path,
  passWithNoTests?: boolean,
  preprocessorIgnorePatterns?: Array<Glob>,
  preset?: ?string,
  prettierPath?: ?string,
  projects?: Array<Glob>,
  replname?: ?string,
  resetMocks?: boolean,
  resetModules?: boolean,
  resolver?: ?Path,
  restoreMocks?: boolean,
  restoreSpies?: boolean,
  rootDir: Path,
  roots?: Array<Path>,
  runner?: string,
  runTestsByPath?: boolean,
  scriptPreprocessor?: string,
  setupFiles?: Array<Path>,
  setupTestFrameworkScriptFile?: Path,
  setupFilesAfterEnv?: Array<Path>,
  silent?: boolean,
  skipFilter?: boolean,
  skipNodeResolution?: boolean,
  snapshotResolver?: Path,
  snapshotSerializers?: Array<Path>,
  errorOnDeprecated?: boolean,
  testEnvironment?: string,
  testEnvironmentOptions?: Object,
  testFailureExitCode?: string | number,
  testLocationInResults?: boolean,
  testMatch?: Array<Glob>,
  testNamePattern?: string,
  testPathDirs?: Array<Path>,
  testPathIgnorePatterns?: Array<string>,
  testRegex?: string | Array<string>,
  testResultsProcessor?: ?string,
  testRunner?: string,
  testURL?: string,
  timers?: 'real' | 'fake',
  transform?: {[key: string]: string},
  transformIgnorePatterns?: Array<Glob>,
  watchPathIgnorePatterns?: Array<string>,
  unmockedModulePathPatterns?: Array<string>,
  updateSnapshot?: boolean,
  useStderr?: boolean,
  verbose?: ?boolean,
  watch?: boolean,
  watchAll?: boolean,
  watchman?: boolean,
  watchPlugins?: Array<string | [string, Object]>,
};

export type SnapshotUpdateState = 'all' | 'new' | 'none';

export type GlobalConfig = {|
  bail: number,
  changedSince: string,
  changedFilesWithAncestor: boolean,
  collectCoverage: boolean,
  collectCoverageFrom: Array<Glob>,
  collectCoverageOnlyFrom: ?{[key: string]: boolean},
  coverageDirectory: string,
  coveragePathIgnorePatterns?: Array<string>,
  coverageReporters: Array<string>,
  coverageThreshold: {global: {[key: string]: number}},
  detectLeaks: boolean,
  detectOpenHandles: boolean,
  enabledTestsMap: ?{[key: string]: {[key: string]: boolean}},
  expand: boolean,
  extraGlobals: Array<string>,
  filter: ?Path,
  findRelatedTests: boolean,
  forceExit: boolean,
  json: boolean,
  globalSetup: ?string,
  globalTeardown: ?string,
  lastCommit: boolean,
  logHeapUsage: boolean,
  listTests: boolean,
  maxConcurrency: number,
  maxWorkers: number,
  noStackTrace: boolean,
  nonFlagArgs: Array<string>,
  noSCM: ?boolean,
  notify: boolean,
  notifyMode: string,
  outputFile: ?Path,
  onlyChanged: boolean,
  onlyFailures: boolean,
  passWithNoTests: boolean,
  projects: Array<Glob>,
  replname: ?string,
  reporters: Array<string | ReporterConfig>,
  runTestsByPath: boolean,
  rootDir: Path,
  silent: boolean,
  skipFilter: boolean,
  errorOnDeprecated: boolean,
  testFailureExitCode: number,
  testNamePattern: string,
  testPathPattern: string,
  testResultsProcessor: ?string,
  updateSnapshot: SnapshotUpdateState,
  useStderr: boolean,
  verbose: ?boolean,
  watch: boolean,
  watchAll: boolean,
  watchman: boolean,
  watchPlugins: ?Array<{path: string, config: Object}>,
|};

export type ProjectConfig = {|
  automock: boolean,
  browser: boolean,
  cache: boolean,
  cacheDirectory: Path,
  clearMocks: boolean,
  coveragePathIgnorePatterns: Array<string>,
  cwd: Path,
  dependencyExtractor?: string,
  detectLeaks: boolean,
  detectOpenHandles: boolean,
  displayName: ?string,
  errorOnDeprecated: boolean,
  extraGlobals: Array<string>,
  filter: ?Path,
  forceCoverageMatch: Array<Glob>,
  globalSetup: ?string,
  globalTeardown: ?string,
  globals: ConfigGlobals,
  haste: HasteConfig,
  moduleDirectories: Array<string>,
  moduleFileExtensions: Array<string>,
  moduleLoader: Path,
  moduleNameMapper: Array<[string, string]>,
  modulePathIgnorePatterns: Array<string>,
  modulePaths: Array<string>,
  name: string,
  prettierPath: string,
  resetMocks: boolean,
  resetModules: boolean,
  resolver: ?Path,
  restoreMocks: boolean,
  restoreSpies: boolean,
  rootDir: Path,
  roots: Array<Path>,
  runner: string,
  setupFiles: Array<Path>,
  setupFilesAfterEnv: Array<Path>,
  skipFilter: boolean,
  skipNodeResolution: boolean,
  snapshotResolver: ?Path,
  snapshotSerializers: Array<Path>,
  testEnvironment: string,
  testEnvironmentOptions: Object,
  testMatch: Array<Glob>,
  testLocationInResults: boolean,
  testPathIgnorePatterns: Array<string>,
  testRegex: Array<string>,
  testRunner: string,
  testURL: string,
  timers: 'real' | 'fake',
  transform: Array<[string, Path]>,
  transformIgnorePatterns: Array<Glob>,
  watchPathIgnorePatterns: Array<string>,
  unmockedModulePathPatterns: ?Array<string>,
|};
