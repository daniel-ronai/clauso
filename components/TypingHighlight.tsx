"use client";

import { useEffect, useState } from "react";

interface TypingHighlightProps {
    words: string[];
    className?: string;
    typingSpeed?: number;     // ms per character
    deletingSpeed?: number;   // ms per character
    pauseDelay?: number;      // pause after full word
}

export default function TypingHighlight({
                                            words,
                                            className,
                                            typingSpeed = 200,
                                            deletingSpeed = 100,
                                            pauseDelay = 1200,
                                        }: TypingHighlightProps) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        if (!words || words.length === 0) return;

        const currentWord = words[wordIndex];

        let timeout: NodeJS.Timeout;

        if (typing) {
            if (charIndex < currentWord.length) {
                timeout = setTimeout(() => {
                    setText(currentWord.slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                }, typingSpeed);
            } else {
                // Pause at full word before deleting
                timeout = setTimeout(() => setTyping(false), pauseDelay);
            }
        } else {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setText(currentWord.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                }, deletingSpeed);
            } else {
                // Pause a bit before typing the next word
                timeout = setTimeout(() => {
                    setTyping(true);
                    setWordIndex((wordIndex + 1) % words.length);
                }, pauseDelay / 2);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, typing, wordIndex, words, typingSpeed, deletingSpeed, pauseDelay]);

    return (
        <span className={`highlight-animated ${className || ""}`}>
      {text}
    </span>
    );
}
