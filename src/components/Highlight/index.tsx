import { useCallback, useMemo } from 'react';
import * as Style from './styles';
import { Color, SizeText } from '../Types';

export interface HighlightSearchWordsOptions {
  partialMatch?: boolean;
  words: string[];
  color?: Color;
}

export interface HighlightProps {
  text: string;
  searchWords: (string | HighlightSearchWordsOptions)[];
  color?: Color;
  size?: SizeText;
  fontWeight?: 'bold' | 'lighter' | 'normal';
  partialMatch?: boolean;
}
const escapeRegExp = (str: string) => {
  // @ts-expect-error not standard in JavaScript
  if (typeof RegExp.escape !== 'undefined') {
    // @ts-expect-error not standard in JavaScript
    return RegExp.escape(str); // Use the built-in escape method if available
  }
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters for regex
};

export function Highlight({ partialMatch, text, searchWords, color, size, fontWeight }: HighlightProps) {
  
  /**
   * Prepara as opções de palavras de busca, garantindo que cada palavra ou conjunto de palavras
   * tenha suas próprias configurações de correspondência parcial e cor.
   * Se uma palavra for fornecida como string, ela é convertida em um objeto com as opções padrão.
   * 
   * OBS: Eu crio um objeto SearchWordsOptions para cada string, porque
   * a ordenação é importante para definir as cores corretamente.
   * Se eu simplesmente juntasse todas as strings em um único objeto,
   * todas as palavras teriam a mesma propriedade de cor, o que não é o desejado.
   */
  const searchWordsOptions = useMemo(() => {
    const options: HighlightSearchWordsOptions[] = [];
    searchWords.forEach(word => {
      if (typeof word === 'string') {
        options.push({ words: [word], partialMatch: partialMatch || false, color });
      } else {
        options.push(word);
      }
    });
    return options;
  }, [searchWords, partialMatch, color]);

  const normalizeWord = useCallback((word: string | null | undefined) => word ?
    word.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') : '', []);


  const textNormalized = useMemo(() => normalizeWord(text), [text, normalizeWord]);
  const textComposition = useMemo(() => text ? text.normalize('NFC') : '', [text]);

  const lightedToColor = useMemo(() => {
    const map: { [key: number]: Color } = {};
    searchWordsOptions.forEach((option, index) => {
      map[index + 1] = option.color || 'primary';
    });
    return map;
  }, [searchWordsOptions]);

  const slices: { start: number; text: string; lighted: number }[] = useMemo(() => {

    if (!textComposition) {
      return [{ start: 0, text: textComposition, lighted: 0 }];
    }

    const lighted: number[] = Array(textComposition.length).fill(0);

    for (let i = 0; i < searchWordsOptions.length; i += 1) {
      const option = searchWordsOptions[i];
      for (const word of option.words) {
        if (!word) {
          continue;
        }
        const wordNormalized = normalizeWord(word).trim();
        let regex;
        if (option.partialMatch) {
          regex = new RegExp(`${escapeRegExp(wordNormalized)}`, 'gi');
        } else {
          regex = new RegExp(`\\b${escapeRegExp(wordNormalized)}\\b`, 'gi');
        }
        let match;

        while ((match = regex.exec(textNormalized)) !== null) {
          for (let j = match.index; j < match.index + match[0].length; j += 1) {
            lighted[j] = i + 1;
          }
        }
      }
    }
    const slices: { start: number; text: string; lighted: number }[] = [];
    let currentSlice = { start: 0, text: '', lighted: 0 };

    for (let i = 0; i < textComposition.length; i += 1) {
      if (lighted[i] !== currentSlice.lighted) {
        if (currentSlice.text) {
          slices.push(currentSlice);
        }
        currentSlice = { start: i, text: '', lighted: lighted[i] };
      }
      currentSlice.text += textComposition[i];
    }
    if (currentSlice.text) {
      slices.push(currentSlice);
    }

    return slices;
  }, [textComposition, textNormalized, searchWordsOptions, normalizeWord]);

  return (
    <Style.Container $size={size} $fontWeight={fontWeight}>
      {slices.map(slice => {
        if (slice.lighted === 0) {
          return <span key={slice.start}>{slice.text}</span>;
        }
        return <Style.HighlightStyled key={slice.start} $color={lightedToColor[slice.lighted]}>
          {slice.text}
        </Style.HighlightStyled>
      })}
    </Style.Container>
  );
}
