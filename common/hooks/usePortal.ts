import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { HTMLProps } from "react";
import React from "react";

export interface PortalProps extends HTMLProps<HTMLDivElement> {}

interface UsePortal {
  Portal: React.FC<PortalProps>;
}

export const usePortal = (containerId: string): UsePortal => {
  const [portalWrapper, setPortalWrapper] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    setPortalWrapper(document.getElementById(containerId) as HTMLDivElement);
  }, [containerId]);

  const Portal: React.FC<PortalProps> = useCallback(
    (props) => {
      if (!portalWrapper) {
        return null;
      }

      const { children } = props;

      return createPortal(children, portalWrapper);
    },
    [portalWrapper]
  );

  return { Portal };
};
