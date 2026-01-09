"use client";

import { useState, useCallback } from "react";

interface UseModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

/**
 * Hook for managing modal state
 * @param initialState - Initial open state of the modal
 * @returns Modal state and control functions
 *
 * @example
 * const { isOpen, open, close, toggle } = useModal();
 *
 * return (
 *   <>
 *     <Button onClick={open}>Open Modal</Button>
 *     <Modal isOpen={isOpen} onClose={close}>
 *       <p>Modal content</p>
 *     </Modal>
 *   </>
 * );
 */
export function useModal(initialState = false): UseModalReturn {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle };
}
