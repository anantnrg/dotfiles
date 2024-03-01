import { Rect, Txt } from "@motion-canvas/2d";
import { Reference } from "@motion-canvas/core";
import { CodeBlock } from '@motion-canvas/2d/lib/components/CodeBlock';

interface CustomCodeBlockProps {
    rectRef: Reference<Rect>;
    codeBlockRef: Reference<CodeBlock>;
    code: string;
    tabTitle: string;
}

export const CustomCodeBlock = (props: CustomCodeBlockProps) => (
    <Rect
        layout
        direction={"column"}
        fill={"1e1e2e"}
        radius={20}
        clip
    >
        <Rect
            layout
            alignContent={"center"}
            justifyContent={"start"}
            padding={20}
            height={60}
            width={700}
            fill={"181825"}
            clip
        >
            <Rect
                layout
                alignContent={"center"}
                justifyContent={"start"}
                paddingLeft={30}
                height={60}
                width={150}
            >
                <Txt
                    text={props.tabTitle}
                    fontFamily={"JetBrains Mono"}
                    fill={"#cdd6f4"}
                />
            </Rect>
        </Rect>
    </Rect>
)