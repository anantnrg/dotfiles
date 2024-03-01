import { BoolMetaField, EnumMetaField, NumberMetaField, ObjectMetaField } from '@motion-canvas/core/src/meta';
import { CanvasOutputMimeType } from '@motion-canvas/core/src/types';
import type { Exporter } from '@motion-canvas/core/src/app/Exporter';
import type { Logger } from '@motion-canvas/core/src/app/Logger';
import type { Project } from '@motion-canvas/core/src/app/Project';
import type { RendererSettings } from '@motion-canvas/core/src/app/Renderer';
/**
 * Image sequence exporter.
 *
 * @internal
 */
export declare class ImageExporter implements Exporter {
    private readonly logger;
    private readonly settings;
    static readonly id = "@motion-canvas/core/image-sequence";
    static readonly displayName = "Image sequence";
    static meta(): ObjectMetaField<{
        fileType: EnumMetaField<CanvasOutputMimeType>;
        quality: NumberMetaField;
        groupByScene: BoolMetaField;
    }>;
    static create(project: Project, settings: RendererSettings): Promise<ImageExporter>;
    private static readonly response;
    private readonly frameLookup;
    private readonly projectName;
    private readonly quality;
    private readonly fileType;
    private readonly groupByScene;
    constructor(logger: Logger, settings: RendererSettings);
    start(): Promise<void>;
    handleFrame(canvas: HTMLCanvasElement, frame: number, sceneFrame: number, sceneName: string, signal: AbortSignal): Promise<void>;
    stop(): Promise<void>;
    private handleResponse;
}
//# sourceMappingURL=ImageExporter.d.ts.map