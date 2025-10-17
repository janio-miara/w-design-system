import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { SmallPaginate, SmallPaginateProps } from '.';

const meta: Meta<SmallPaginateProps> = {
  title: 'Components/Paginate',
  component: SmallPaginate,
  tags: ['autodocs'],
  args: {
    currentPage: 1,
    itemCount: 100,
    itemsPerPage: 10,
    onChangePage: page => {
      console.log(`Page changed to: ${page}`);
    }
  }
} satisfies Meta<SmallPaginateProps>;

export default meta;

const NewPaginate = (args: SmallPaginateProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div style={{ height: '500px', width: '100%' }}></div>
      <SmallPaginate
        {...args}
        currentPage={currentPage}
        itemCount={args.itemCount}
        itemsPerPage={20}
        onChangePage={handleChangePage}
      />
    </>
  );
};

export const Default: StoryObj<SmallPaginateProps> = {
  render: args => {
    return <NewPaginate {...args} />;
  }
};

export const Bottom: StoryObj<SmallPaginateProps> = {
  render: args => {
    return <NewPaginate {...args} />;
  }
};
