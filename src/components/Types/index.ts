import { changeColor } from '#utils/changeColorTheme';

export type { AvatarProps } from '../Avatar/index';
export type { BadgeWordProps } from '../BadgeWords/index';
export type { BannerProps } from '../Banner/index';
export type { ButtonProps } from '../Button/index';
export type { ButtonRadiusIconProps } from '../ButtonRadiusIcon/index';
export type { ButtonRoundProps } from '../ButtonRound/index';
export type { CheckboxProps } from '../Checkbox/index';
export type { CNPJInputProps } from '../CNPJInput';
export type { CountryState, CountryStateSelectProps } from '../CountryStateSelector';
export type { CPFInputProps } from '../CPFInput';
export type { DatePickerProps } from '../DatePicker';
export type { DateRangePickerProps } from '../DateRangePicker';
export type { DivisorProps } from '../Divisor/index';
export type { DocumentNumberInputProps } from '../DocumentNumberInput';
export type { EmptyProps } from '../Empty/index';
export type { EmptyStateProps } from '../EmptyState/index';
export type { HeadingProps } from '../Heading/index';
export type { HighlightProps } from '../Highlight/index';
export type { IconWrapperProps } from '../IconWrapper/index';
export type { InputProps } from '../Input/index';
export type { InputTagProps } from '../InputTag/index';
export type { LoadingProps } from '../Loading/index';
export type { ModalDrawerProps } from '../ModalDrawer/index';
export type { ModalProps } from '../Modal/index';
export type { MultiSelectProps, MultiSelectRef } from '../MultiSelect';
export type { PaginateProps } from '../Paginate';
export type { ParagraphProps } from '../Paragraph/index';
export type { Portal, PortalSelectProps } from '../PortalSelect';
export type { PortalIconProps } from '../PortalIcon';
export type { SelectProps, SelectRef } from '../Select';
export type {
  SidebarGroupData,
  SidebarItemData,
  SidebarLayoutItemTypeGroup,
  SidebarLayoutItemTypeItem,
  SidebarLayoutItemTypeSpacer,
  SidebarProps
} from '../Sidebar';
export type { TableProps } from '../Table';
export type { TabsProps } from '../Tabs/index';
export type { TextAreaProps } from '../TextArea/index';
export type { TextLinkProps } from '../TextLink/index';
export type { TextProps } from '../Text/index';
export type { TitleProps } from '../Title/index';

export type Color = keyof typeof changeColor;
export type ColorsVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'gray' | 'warning' | 'yellow';
export type SizeBasic = 'large' | 'medium' | 'small';
export type SizeText = 'p0' | 'p1' | 'p2' | 'p3' | 'p4';
