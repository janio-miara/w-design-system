import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Paginate, PaginateProps } from '.';

const meta: Meta<PaginateProps> = {
  title: 'Components/Paginate',
  component: Paginate,
  tags: ['autodocs'],
  args: {
    currentPage: 1,
    itemCount: 100,
    itemsPerPage: 10,
    onChangePage: page => {
      console.log(`Page changed to: ${page}`);
    }
  }
} satisfies Meta<PaginateProps>;

export default meta;

const NewPaginate = (args: PaginateProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div style={{ height: '500px', width: '100%' }}></div>
      <Paginate
        {...args}
        currentPage={currentPage}
        itemCount={args.itemCount}
        itemsPerPage={20}
        onChangePage={handleChangePage}
      />
    </>
  );
};

export const Default: StoryObj<PaginateProps> = {
  render: args => {
    return <NewPaginate {...args} />;
  }
};

export const Bottom: StoryObj<PaginateProps> = {
  render: args => {
    return <NewPaginate {...args} />;
  }
};
