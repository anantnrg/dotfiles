import { Icon, Rect, Txt } from "@motion-canvas/2d";
import { Reference } from "@motion-canvas/core";
import { CodeBlock } from '@motion-canvas/2d/lib/components/CodeBlock';
import { CodeStyle } from "./styles";

interface CustomCodeBlockProps {
    rectRef: Reference<Rect>;
    codeBlockRef: Reference<CodeBlock>;
    code: string;
    tabTitle: string;
    lang: string;
}

export const CustomCodeBlock = (props: CustomCodeBlockProps) => (
    <Rect
        layout
        direction={"column"}
        fill={"1e1e2e"}
        radius={10}
        lineWidth={3}
        stroke={"45475a"}
        minWidth={700}
        maxWidth={1400}
        minHeight={450}
        maxHeight={700}
        ref={props.rectRef}
        clip
    >
        <Rect
            layout
            alignContent={"center"}
            justifyContent={"start"}
            height={"100%"}
            width={"100%"}
            fill={"181825"}
            clip
        >
            <Rect
                layout
                direction={"row"}
                fill="#1e1e2e"
                width={200}
                paddingLeft={20}
                alignItems={"center"}
                justifyContent={"start"}
            >
                <Icon
                    icon={"devicon-plain:rust"}
                    color={"#cdd6f4"}
                    width={32}
                    height={32}
                    marginRight={15}
                />
                <Txt
                    text={props.tabTitle}
                    fontFamily={"JetBrains Mono"}
                    fontSize={24}
                    fontWeight={600}
                    fill={"#cdd6f4"}
                />
            </Rect>
            <Rect
                width={4}
                height={60}
                radius={5}
                fill={"cba6f7"}
            />
        </Rect>
        <CodeBlock
            {...CodeStyle}
            ref={props.codeBlockRef}
            margin={40}
            fontSize={48}
            language={props.lang}
            fontFamily={"JetBrains Mono"}
            code={props.code}
        />
    </Rect>
)