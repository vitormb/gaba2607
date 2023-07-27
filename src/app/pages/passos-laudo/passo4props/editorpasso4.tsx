import * as React from 'react'
import {useState, useEffect, useContext} from 'react'
import {
  Node,
  Editor,
  EditorKit,
  Plugin,
  BoldPlugin,
  ItalicPlugin,
  BoldButton,
  ItalicButton,
  StrikethroughButton,
  UnderlinePlugin,
  StrikethroughPlugin,
  LinkButton,
  InlineCodeButton,
  SuperscriptButton,
  OrderedListButton,
  UnorderedListButton,
  HeadingToggleButton,
  BlockquoteButton,
  TableButton,
  VideoButton,
  LinkPlugin,
  InlineCodePlugin,
  OrderedListPlugin,
  UnorderedListPlugin,
  BlockquotePlugin,
  H1Plugin,
  H2Plugin,
  H3Plugin,
  H4Plugin,
  H5Plugin,
  H6Plugin,
  SuperscriptPlugin,
  VideoPlugin,
  TablePlugin,
  CodePlugin,
  HeadingSelect,
  FontSizeSelect,
  FontSelect,
  ColorPlugin,
  FontsPlugin,
  Divider,
  TextAlignLeftButton,
  TextAlignRightButton,
  TextAlignCenterButton,
  TextAlignJustifiedButton,
  ColorPickerButton,
  HistoryPlugin,
  ClearFormattingButton,
  DividerPlugin,
  createBreakoutPlugin,
  ConstraintsPlugin,
  SelectionToolbarPlugin,
  EditorToolbar,
  EditorToolbarPlugin,
  TextAlignPlugin,
  SpellCheckButton,
  ReadOnlyButton,
  ImagePlugin,
  InfoAlertPlugin,
  ErrorAlertPlugin,
  WarningAlertPlugin,
  createInitialLetterPlugin,
  createClearFormattingPlugin,
  IconButton,
  HeadingTogglePlugin,
} from '@mpkelly/react-editor-kit'
import {DarkThemePlugin} from '../../SlateJS/DarkThemePlugin'
import {getPasso4EditorContent, EditorValueContext} from './checkboxes'

const plugins: Plugin[] = [
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin,
  BlockquotePlugin,
  H1Plugin,
  H2Plugin,
  H3Plugin,
  H4Plugin,
  H5Plugin,
  H6Plugin,
  SuperscriptPlugin,
  OrderedListPlugin,
  UnorderedListPlugin,
  VideoPlugin,
  TablePlugin,
  CodePlugin,
  ColorPlugin,
  FontsPlugin,
  createBreakoutPlugin(),
  DividerPlugin,
  HistoryPlugin,
  ConstraintsPlugin,
  EditorToolbarPlugin,
  TextAlignPlugin,
  ImagePlugin,
  InfoAlertPlugin,
  WarningAlertPlugin,
  InlineCodePlugin,
  LinkPlugin,
  SelectionToolbarPlugin,
  ErrorAlertPlugin,
  DarkThemePlugin,
  createClearFormattingPlugin(),
  createInitialLetterPlugin(),
  HeadingTogglePlugin,
]
const editorStyle = {width: '100%', height: '100%', padding: 16, overflow: 'auto'}
const wrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
}
const editorWrapperStyle = {
  width: '100%',
  height: '100%',
  borderTop: '1px solid rgba(0,0,0,.1)',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  padding: 8,
}
const CustomColors = [
  ['#F78DA7', '#CF2E2E', '#FC6901', '#FCB901', '#7BDCB5', '#28D084'],
  ['#8ED1FC', '#0993E3', '#9B51E0', '#FFFFFF', '#ABB8C3', '#2B2B3E'],
]

export const Editorpasso4 = () => {
  const valueFromContext = useContext(EditorValueContext);    
  
  console.log('Value from context:', valueFromContext);
  const [value, setValue] = useState(valueFromContext);
  
  useEffect(() => {
    console.log('Value from context changed:', valueFromContext);
    setValue(valueFromContext);
}, [valueFromContext]);

  return (
    <EditorKit plugins={plugins}>
      <>
        <EditorToolbar>
          <HeadingSelect />
          <Divider />
          <FontSelect />
          <Divider />
          <FontSizeSelect />
          <Divider />
          <BoldButton
            className='material-icons-round'
            ligature='format_bold'
            tooltipText={'⌘+B'}
            tooltipOffsets={{v: 8}}
          />
          <ItalicButton
            className='material-icons-round'
            ligature='format_italic'
            tooltipText={'⌘+I'}
            tooltipOffsets={{v: 8}}
          />
          <StrikethroughButton className='material-icons-round' ligature='format_strikethrough' />
          <SuperscriptButton className='material-icons-round' ligature='height' />
          <Divider />
          <ColorPickerButton
            className='material-icons-round'
            ligature='palette'
            colors={CustomColors}
          />
          <Divider />
          <TextAlignLeftButton className='material-icons-round' ligature='format_align_left' />
          <TextAlignCenterButton className='material-icons-round' ligature='format_align_center' />
          <TextAlignRightButton className='material-icons-round' ligature='format_align_right' />
          <TextAlignJustifiedButton
            className='material-icons-round'
            ligature='format_align_justify'
          />
          <Divider />
          <OrderedListButton className='material-icons-round' ligature='format_list_numbered' />
          <UnorderedListButton className='material-icons-round' ligature='format_list_bulleted' />
          <Divider />
          <HeadingToggleButton className='material-icons-round' ligature='format_size' />
          <BlockquoteButton className='material-icons-round' ligature='format_quote' />
          <TableButton className='material-icons-round' ligature='border_all' />
          <Divider />
          <ClearFormattingButton className='material-icons-round' ligature='format_clear' />
          <IconButton
            className=' material-icons-round'
            ligature={'print'}
            tooltipText={'Not working yet :-('}
            tooltipOffsets={{v: 8}}
          />
          <ReadOnlyButton
            className='material-icons-round'
            ligature='lock_open'
            readOnlyClassName='material-icons-round'
            readOnlyLigature='lock'
          />
        </EditorToolbar>
        <div style={editorWrapperStyle} id='editor'>
        <Editor
            key={JSON.stringify(value)}
            value={value}
            onChange={value => {
                console.log('New editor value:', value);
                setValue(value as { type: string; children: { text: string; }[]; }[]);
            }}
            style={editorStyle}
            placeholder={"Try some markdown shortcuts or @mention someone"}
            />
        </div>
      </>
    </EditorKit>
  )
}

const initialValue = getPasso4EditorContent
