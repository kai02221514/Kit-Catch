import { useState } from 'react';
import styled from 'styled-components';

const PlusButton = styled.div`
  position: fixed;
  right: 3%;
  bottom: 4%;
  z-index: 2;
  width: 50px;
  height: 50px;
  padding: 1%;
  background-color: #fc9e15;
  border-radius: 50%;
  object-fit: cover;
  content: url('https://svgsilh.com/svg/1727487.svg');
`;

const BlackBack = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
  z-index: 3;
`;

const FormContainer = styled.div<{ isOpen: boolean }>`
  border-radius: 16px;
  width: 50%;
  height: 60%;
  min-width: 650px;
  min-height: 400px;
  position: fixed;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  margin: auto;
  top: ${({ isOpen }) => (isOpen ? '40vh' : '-100vh')};
  background-color: white;
  transition: all 0.5s;
  z-index: 3;
  overflow: scroll;
`;

const HeadBar = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  font-size: 100%;
  font-weight: bold;
  border-bottom: gray solid 0.3px;
`;

const HeaderTitle = styled.div`
  letter-spacing: 1px;
  margin: auto;
`;

const SaveButton = styled.div`
  position: absolute;
  top: 3%;
  right: 2%;
  color: #1da1f2;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: 2%;
`;

const TaskName = styled.input`
  margin-bottom: 2%;
  border-radius: 8px;
  padding: 1%;
  width: 30%;
  color: #666;
  font-size: 1rem;
  background: #ddd;
  resize: none;
  border: none;
  outline: none;
  &::placeholder {
    color: #a0a0a0;
  }
`;

const TagContainer = styled.div`
  float: left;
`;

const TagName = styled.input`
  margin-right: 1%;
  margin-bottom: 2%;
  border-radius: 8px;
  padding: 1%;
  width: 30%;
  color: #666;
  font-size: 1rem;
  background: #ddd;
  resize: none;
  border: none;
  outline: none;
  &::placeholder {
    color: #a0a0a0;
  }
`;

const TagPlus = styled.button`
  background-color: #0395fa;
  color: white;
  font-size: 0.8rem;
  width: 12%;
  border: none;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 2%;
  padding: 0.7%;
  :active {
    background-color: #0400fa;
  }
`;

const Tag = styled.div`
  display: table;
  div {
    background-color: #0395fa;
    border-radius: 15px 0 0 15px;
    float: left;
    border-right: white solid 0.3px;
    :before {
      content: '×';
    }
  }
  p {
    margin-top: 0.05%;
    border: gray solid 0.3px;
    border-radius: 15px;
    float: left;
    margin-right: 2%;
  }
`;

const Remarks = styled.textarea`
  border-radius: 8px;
  width: 90%;
  height: 50%;
  padding-bottom: 35%;
  color: #666;
  font-size: 1rem;
  background: #ddd;
  resize: none;
  border: none;
  outline: none;
  &::placeholder {
    color: #a0a0a0;
  }
`;

export function TaskForm() {
  const [open, setOpen] = useState<boolean>(false);
  const [tag, setTag] = useState<string>('');
  const Tags: string[] = [
    'mine',
    'notdddddd',
    'mine',
    'notdddddd',
    'mine',
    'notdddddd',
    'mine',
    'notdddddd',
  ];
  return (
    <>
      <BlackBack isOpen={open} />
      <PlusButton onClick={() => setOpen(true)} />
      <FormContainer isOpen={open}>
        <HeadBar>
          <HeaderTitle>課題作成</HeaderTitle>
          <SaveButton onClick={() => setOpen(false)}>作成</SaveButton>
        </HeadBar>
        <ItemContainer>
          <TaskName placeholder='課題名' />
          <TagContainer>
            <TagName placeholder='タグ名' id='Tag' onChange={(e) => setTag(e.target.value)} />
            <TagPlus onClick={() => Tags.push(tag)}>タグを追加</TagPlus>
          </TagContainer>
          <Tag>
            {Tags.map((tag) => (
              <p key={tag}>
                <div />
                {tag}
              </p>
            ))}
          </Tag>
          <Remarks placeholder='自由メモ' />
        </ItemContainer>
      </FormContainer>
    </>
  );
}
