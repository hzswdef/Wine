import "@components/atoms/Animations/AnimationContentBlur/AnimationContentBlur.scss";

import { clsx } from "clsx";
import { PropsWithChildren, useMemo, useRef } from "react";
import { CSSTransition } from "react-transition-group";

interface AnimationContentBlurProps extends PropsWithChildren {
	stateIn: boolean;
	wrapperClassName?: string;
	innerClassName?: string;
}

// Should be used as a wrapper for content that needs to be animated with a blur effect.
// Animation styles are defined in "AnimationContentBlur.scss" file.
const cssTransitionClassName = "animated--content-blur";

/**
 * Example:
 *
 * ```tsx
 * 			<AnimationContentBlur stateIn={loading}>
 * 				<>
 * 					{loading && (<>Loading</>)}
 *
 * 					{!loading && (<>Ready</>)}
 * 				</>
 * 			</AnimationContentBlur>
 * ```
 *
 * @param children
 * 	Children prop.
 * @param stateIn
 * 	CSSTransition "in" prop. If true, the content will be blurred.
 * @param wrapperClassName
 * 	Additional class name for the wrapper div.
 * @param innerClassName
 * 	Additional class name for the inner div.
 */
const AnimationContentBlur = ({
	children,
	stateIn,
	wrapperClassName,
	innerClassName
}: AnimationContentBlurProps) => {
	const nodeRef = useRef<HTMLDivElement>(null);

	const _wrapperClassName = useMemo(
		() => clsx(wrapperClassName && wrapperClassName, cssTransitionClassName),
		[wrapperClassName]
	);

	return (
		<div className={_wrapperClassName}>
			<CSSTransition
				in={stateIn}
				classNames={cssTransitionClassName}
				timeout={{
					appear: 32000,
					enter: 32000,
					exit: 250
				}}
				nodeRef={nodeRef}
				appear
			>
				<div ref={nodeRef} className={innerClassName}>
					{children}
				</div>
			</CSSTransition>
		</div>
	);
};

export default AnimationContentBlur;
