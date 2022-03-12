import styled from 'styled-components';

const BlackBack = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
  z-index: 2;
`;

const FormContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 25%;
  bottom: ${({ isOpen }) => (isOpen ? '20vh' : '-100vh')};
  width: 50vw;
  height: 70vh;
  border-radius: 16px;
  background-color: white;
  text-align: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.4);
  flex-wrap: wrap;
  transition: all 0.3s;
  z-index: 3;
`;

const HeaderTitle = styled.p`
  font-size: 100%;
  text-align: center;
  letter-spacing: 1px;
`;

const SaveButton = styled.p`
  position: absolute;
  top: 1.5%;
  right: 20px;
  margin-top: 0.7%;
  font-size: 100%;
  color: #1da1f2;
  line-height: 30px;
  text-shadow: 0 0 3px rgba(29, 161, 242, 0.4);
`;

const HeadBar = styled.div`
  position: relative;
  left: 50%;
  width: 100%;
  height: 0.5px;
  background-color: rgba(0, 0, 0, 0.2);
  transform: translateX(-50%);
`;
const ColorsContainer = styled.div`
  display: table;
  table-layout: fixed;
  width: 96%;
  height: 7%;
  margin: 2%;
  border-radius: 16px;
`;

const ColorItem = styled.div<{ selected: boolean }>`
  display: table-cell;
  border-right: none;
  background-color: ${({ selected }) => (selected ? 'gray' : '#dddddd')};
  color: ${({ color }) => color};
  font-size: 1.5vw;
  vertical-align: middle;
  line-height: 22px;
  letter-spacing: 1px;
  transition: all 0.7s;
  &:first-of-type {
    border-radius: 8px 0 0 8px;
    background-color: ${({ selected }) => (selected ? 'gray' : '#dddddd')};
  }
  &:last-of-type {
    border-radius: 0 8px 8px 0;
    border-right: solid white 0.5px;
  }
`;

const InputContainer = styled.label`
  display: flex;
  width: 50%;
  height: 5%;
  margin: 2%;
  padding: 1%;
  border-radius: 8px;
  background: #ddd;
  input {
    width: 100%;
    font-size: 100%;
    line-height: 24px;
    border: none;
    outline: none;
    background: none;
    color: #666;
    letter-spacing: 1px;
    &::placeholder {
      color: #a0a0a0;
    }
  }
`;

const DescriptionTextArea = styled.textarea`
  border-radius: 8px;
  width: 90%;
  height: 50%;
  padding: 2%;
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

interface Props {
  day: string;
  time: number;
  teacher: string;
  setTeacher: React.Dispatch<React.SetStateAction<string>>;
  subject: string;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  tableValue: {
    [key: string]: { subject: string; description: string; teacher: string; color: string }[];
    monday: { subject: string; description: string; teacher: string; color: string }[];
    tuesday: { subject: string; description: string; teacher: string; color: string }[];
    wednesday: { subject: string; description: string; teacher: string; color: string }[];
    thursday: { subject: string; description: string; teacher: string; color: string }[];
    friday: { subject: string; description: string; teacher: string; color: string }[];
  } | null;
  setTableValue: React.Dispatch<
    React.SetStateAction<{
      monday: { subject: string; description: string; teacher: string; color: string }[];
      tuesday: { subject: string; description: string; teacher: string; color: string }[];
      wednesday: { subject: string; description: string; teacher: string; color: string }[];
      thursday: { subject: string; description: string; teacher: string; color: string }[];
      friday: { subject: string; description: string; teacher: string; color: string }[];
    } | null>
  >;
}

export function TableForm({
  day,
  time,
  teacher,
  color,
  setColor,
  setTeacher,
  subject,
  setSubject,
  description,
  setDescription,
  isOpen,
  setOpen,
  tableValue,
  setTableValue,
}: Props) {
  const colors: string[] = [
    '#eb7b7b',
    '#e9a4c9',
    '#f39ff3',
    '#c3a2ef',
    '#a09ff4',
    '#abcbf3',
    '#b0eeef',
    '#ace9c7',
    '#b1f0a7',
    '#cdefa5',
    '#ebeba3',
    '#ffbd79',
  ];

  return (
    <>
      <BlackBack isOpen={isOpen}></BlackBack>
      <FormContainer isOpen={isOpen}>
        <HeaderTitle>
          {day === 'monday'
            ? '月'
            : day === 'tuesday'
            ? '火'
            : day === 'wednesday'
            ? '水'
            : day === 'thursday'
            ? '木'
            : day === 'friday'
            ? '金'
            : ''}
          曜{time + 1}限
        </HeaderTitle>
        <SaveButton
          onClick={() => {
            console.log(day, time, subject, description, teacher, color);
            setTableValue(() => {
              if (!tableValue) return tableValue;
              tableValue[day][time] = {
                subject: subject,
                description: description,
                teacher: teacher,
                color: color,
              };
              return tableValue;
            });
            setOpen(false);
          }}
        >
          保存
        </SaveButton>
        <HeadBar />

        <InputContainer htmlFor={'subject-input'}>
          <i />
          <input
            id={'subject-input'}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder={'科目'}
          />
        </InputContainer>

        <InputContainer htmlFor={'teacher-input'}>
          <i />
          <input
            id={'teacher-input'}
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            placeholder={'教員名'}
          />
        </InputContainer>

        <ColorsContainer>
          <ColorItem color={'black'} selected={color === '#dddd'} onClick={() => setColor('#dddd')}>
            D
          </ColorItem>
          {colors.map((key) => (
            // eslint-disable-next-line react/jsx-key
            <ColorItem color={key} selected={color === key} onClick={() => setColor(key)}>
              ●
            </ColorItem>
          ))}
        </ColorsContainer>

        <DescriptionTextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={
            'この科目の教室の場所・担当教員のメアド・評価基準などをメモするためのスペースです！'
          }
        />
      </FormContainer>
    </>
  );
}
