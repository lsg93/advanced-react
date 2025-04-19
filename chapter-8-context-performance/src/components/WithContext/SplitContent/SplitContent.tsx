import ContentBlock, { OptionalContentBlock } from "./ContentBlock";

function SplitContent() {
	return (
		<section className="content-block split">
			<ContentBlock>Block 2 - Section 1</ContentBlock>
			<OptionalContentBlock>
				Block 2 Block 3 - Only visible when nav is expanded
			</OptionalContentBlock>
			<ContentBlock>Block 2 - Section 2</ContentBlock>
		</section>
	);
}

export default SplitContent;
