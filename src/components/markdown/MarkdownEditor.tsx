"use client";

import {
  MDXEditor,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CodeToggle,
  CreateLink,
  InsertTable,
  ListsToggle,
  Separator,
  UndoRedo,
  toolbarPlugin,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  linkPlugin,
  tablePlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  markdownShortcutPlugin,
} from "@mdxeditor/editor";

interface Props {
  markdown: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export default function MarkdownEditor({
  markdown,
  onChange,
  className,
  placeholder,
}: Props) {
  return (
    <MDXEditor
      className={className}
      markdown={markdown}
      onChange={onChange}
      placeholder={placeholder}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        linkPlugin(),
        tablePlugin(),
        codeBlockPlugin(),
        codeMirrorPlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <Separator />
              <BoldItalicUnderlineToggles />
              <Separator />
              <BlockTypeSelect />
              <Separator />
              <ListsToggle />
              <CodeToggle />
              <CreateLink />
              <InsertTable />
            </>
          ),
        }),
      ]}
    />
  );
}