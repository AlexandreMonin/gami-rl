'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {Paragraph} from "@tiptap/extension-paragraph";

const TextEditor = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: '<h1>Hello World! 🌎️</h1>',
    });

    return (
        <EditorContent editor={editor} />
    )
}

export default TextEditor