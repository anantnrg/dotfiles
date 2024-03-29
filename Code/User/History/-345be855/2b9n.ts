import { MetaFile } from '@motion-canvas/core/src/meta';
import { Plugin } from '@motion-canvas/core/src/plugin';
import { Logger } from '@motion-canvas/core/src/app/Logger';
import { Project, ProjectSettings, Versions } from '@motion-canvas/core/src/app/Project';
/**
 * Bootstrap a project.
 *
 * @param name - The name of the project.
 * @param versions - Package versions.
 * @param plugins - Loaded plugins.
 * @param config - Project settings.
 * @param metaFile - The project meta file.
 * @param settingsFile - The settings meta file.
 * @param logger - An optional logger instance.
 *
 * @internal
 */
export declare function bootstrap(name: string, versions: Versions, plugins: Plugin[], config: ProjectSettings, metaFile: MetaFile<any>, settingsFile: MetaFile<any>, logger?: Logger): Project;
/**
 * Bootstrap a project together with all editor plugins.
 *
 * @param name - The name of the project.
 * @param versions - Package versions.
 * @param plugins - Loaded plugins.
 * @param config - Project settings.
 * @param metaFile - The project meta file.
 * @param settingsFile - The settings meta file.
 *
 * @internal
 */
export declare function editorBootstrap(name: string, versions: Versions, plugins: (Plugin | string)[], config: ProjectSettings, metaFile: MetaFile<any>, settingsFile: MetaFile<any>): Promise<Project>;
//# sourceMappingURL=bootstrap.d.ts.map