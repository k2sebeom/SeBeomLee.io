import { useAnimation, type AnimationControls, type Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface OnAppearAnimationHookResponse {
  ref: (node?: Element | null | undefined) => void;
  variants: Variants;
  controls: AnimationControls;
}

const useAnimateOnAppear = (variants: Variants): OnAppearAnimationHookResponse => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls
        .start('visible')
        .then(() => {})
        .catch((err) => {
          console.error(err);
        });
    }
  }, [controls, inView]);

  return {
    ref,
    controls,
    variants,
  };
};

export default useAnimateOnAppear;
