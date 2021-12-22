import React, { useEffect, useState } from 'react';
import { TableStyled } from './TableStyled';
import { ButtonStyled, InputStyled } from '../styled';
import ConfirmationModal from '../ConfirmationModal';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import { ActionButtonStyled } from './ActionButtonStyled';
import { TableHeaderStyled } from './TableHeaderStyled';
import { ViewStyled } from './ViewStyled';
import { LogoStyled } from './LogoStyled';

const initialData = [
  {
    id: 1,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 2,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 3,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 4,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 5,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 6,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 7,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 8,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 9,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 10,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 11,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 12,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 13,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 14,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 15,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 16,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 17,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 18,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 19,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
  {
    id: 20,
    avatar: 'a',
    firstName: 'Matias',
    lastName: 'Romera',
    email: 'romera@gmail.com',
    accepted: 'yes',
    hometown: 'Mendoza',
    roleId: 2,
    status: 'ok',
    languageId: 1,
  },
];

const headers = {
  Id: 'id',
  Avatar: 'avatar',
  'First Name': 'firstName',
  'Last Name': 'lastName',
  Email: 'email',
  Acepted: 'accepted',
  Hometown: 'hometown',
  Role: 'role',
  Status: 'status',
  Language: 'language',
};

const userObj = {
  id: '',
  avatar: 'aa',
  firstName: '',
  lastName: '',
  email: '',
  accepted: '',
  hometown: '',
  roleId: 2,
  status: '',
  languageId: 1,
};

export const Table = () => {
  const [data, setData] = useState(initialData);
  const [insertModal, setInsertModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [selectedData, setSelectedData] = useState(userObj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(selectedData);
  };

  const requestGet = async () => {};

  const requestPost = async () => {};

  const requestPut = async () => {};

  const requestDelete = async () => {};

  const openInsertModal = () => {
    setInsertModal(true);
  };
  const closeInsertModal = () => {
    setInsertModal(false);
  };

  const openEditModal = () => {
    setEditModal(true);
  };
  const closeEditModal = () => {
    setEditModal(false);
  };

  const openDeleteModal = () => {
    setDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const selectData = (data, subject) => {
    setSelectedData(data);
    subject === 'Edit' ? openEditModal() : openDeleteModal();
  };

  useEffect(() => {
    requestGet();
  }, []);

  const insertBody = (
    <div>
      {Object.keys(headers).map((key) => (
        <div className="field">
          <label>{key}</label>
          <InputStyled
            name={headers[key]}
            label={headers[key]}
            onChange={handleChange}
          />
        </div>
      ))}

      <br />
      <div align="right">
        <ButtonStyled onClick={() => requestPost()}>Add</ButtonStyled>
        <ButtonStyled onClick={() => closeInsertModal()}>Cancel</ButtonStyled>
      </div>
    </div>
  );

  const editBody = (
    <div>
      {Object.keys(headers).map((key) => (
        <div className="field">
          <label>{key}</label>
          <InputStyled
            name={headers[key]}
            label={headers[key]}
            onChange={handleChange}
            value={selectedData && selectedData[headers[key]]}
          />
        </div>
      ))}
      <br />
      <div align="right">
        <ButtonStyled color="primary" onClick={() => requestPut()}>
          Edit
        </ButtonStyled>
        <ButtonStyled onClick={() => closeEditModal()}>Cancel</ButtonStyled>
      </div>
    </div>
  );

  const deleteBody = (
    <div>
      <p>
        Are you sure you want to delete ID:{' '}
        <b>{selectedData && selectedData.id}</b>?{' '}
      </p>
      <div align="right">
        <ButtonStyled color="secondary" onClick={() => requestDelete()}>
          Yes
        </ButtonStyled>
        <ButtonStyled onClick={() => closeDeleteModal()}>No</ButtonStyled>
      </div>
    </div>
  );

  return (
    <>
      <TableHeaderStyled>
        <ViewStyled>Users</ViewStyled>
        <LogoStyled></LogoStyled>
        <ButtonStyled onClick={() => openInsertModal()}>
          <MdAddCircle />
        </ButtonStyled>
      </TableHeaderStyled>
      <TableStyled>
        <thead>
          <tr>
            {Object.keys(headers).map((key) => (
              <th>{key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              {Object.values(el).map((item) => (
                <td>{item}</td>
              ))}

              <td style={{ display: 'flex', justifyContent: 'center' }}>
                <ActionButtonStyled>
                  <FaEdit onClick={() => selectData(el, 'Edit')} />
                </ActionButtonStyled>
                &nbsp;&nbsp;&nbsp;
                <ActionButtonStyled>
                  <RiDeleteBin7Fill onClick={() => selectData(el, 'Delete')} />
                </ActionButtonStyled>
              </td>
            </tr>
          ))}
        </tbody>
      </TableStyled>

      <ConfirmationModal headerText="Add User" show={insertModal}>
        {insertBody}
      </ConfirmationModal>

      <ConfirmationModal headerText="Edit User" show={editModal}>
        {editBody}
      </ConfirmationModal>

      <ConfirmationModal headerText="Delete User" show={deleteModal}>
        {deleteBody}
      </ConfirmationModal>
    </>
  );
};
