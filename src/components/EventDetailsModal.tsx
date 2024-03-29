import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { CalendarIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { ChangeEvent } from "react";

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #edf2f7;
  border-radius: 10px;
`;

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEvent: {
    start: string;
    title: string;
  } | null;
  handleDeleteEvent: () => void;
  isEditModalOpen: boolean;
  setEditedContent: React.Dispatch<React.SetStateAction<string>>;
  editedContent: string;
  handleEditEvent: () => void;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventDetailsModal = ({
  isOpen,
  onClose,
  selectedEvent,
  handleDeleteEvent,
  isEditModalOpen,
  setEditedContent,
  editedContent,
  handleEditEvent,
  setIsEditModalOpen,
}: EventDetailsModalProps) => {
  const handleModify = () => {
    setEditedContent(selectedEvent?.title || "");
    setIsEditModalOpen(true);
  };

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setEditedContent(e.target.value);

  return (
    <Modal isOpen={isOpen && selectedEvent !== null} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>일정 내용</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" gap={3}>
          <ContentContainer>
            <CalendarIcon />
            <p>{selectedEvent?.start}</p>
          </ContentContainer>
          <ContentContainer>
            <EditIcon />
            {isEditModalOpen ? (
              <Textarea
                value={editedContent}
                onChange={handleChangeContent}
                placeholder="수정할 내용을 입력하세요."
                size="sm"
              />
            ) : (
              <p>{selectedEvent?.title}</p>
            )}
          </ContentContainer>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="red"
            mr={3}
            size="md"
            onClick={handleDeleteEvent}
          >
            <DeleteIcon />
          </Button>
          {isEditModalOpen ? (
            <Button colorScheme="teal" size="md" onClick={handleEditEvent}>
              저장
            </Button>
          ) : (
            <Button colorScheme="teal" size="md" onClick={handleModify}>
              수정
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EventDetailsModal;
