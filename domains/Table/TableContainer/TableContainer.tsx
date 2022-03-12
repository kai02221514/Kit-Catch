import { useState } from 'react';
import { Header } from '../../../components/Header';
import { TableForm } from './TableForm';
import { TimeTable } from './TimeTable';

export function TableContainer() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [day, setDay] = useState<string>('');
  const [time, setTime] = useState<number>(-1);
  const [subject, setSubject] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [teacher, setTeacher] = useState<string>('');
  const [color, setColor] = useState('#dddd');
  const [tableValue, setTableValue] = useState<{
    monday: { subject: string; description: string; teacher: string; color: string }[];
    tuesday: { subject: string; description: string; teacher: string; color: string }[];
    wednesday: { subject: string; description: string; teacher: string; color: string }[];
    thursday: { subject: string; description: string; teacher: string; color: string }[];
    friday: { subject: string; description: string; teacher: string; color: string }[];
  }>({
    monday: [
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
    ],
    tuesday: [
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
    ],
    wednesday: [
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
    ],
    thursday: [
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
    ],
    friday: [
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
      { subject: '', description: '', teacher: '', color: '' },
    ],
  });

  return (
    <>
      <Header page={'時間割'} />
      <TimeTable
        color={color}
        tableValue={tableValue}
        setDay={setDay}
        setTime={setTime}
        setSubject={setSubject}
        setDescription={setDescription}
        setTeacher={setTeacher}
        setOpen={setOpen}
        setColor={setColor}
      />
      <TableForm
        day={day}
        time={time}
        subject={subject}
        setSubject={setSubject}
        description={description}
        setDescription={setDescription}
        teacher={teacher}
        setTeacher={setTeacher}
        isOpen={isOpen}
        setOpen={setOpen}
        tableValue={tableValue}
        setTableValue={setTableValue}
        color={color}
        setColor={setColor}
      />
    </>
  );
}
