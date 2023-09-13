import TableBoard from 'components/common/board/TableBoard';
import { styled } from 'styled-components';

interface ListProps {
  matchingId: number;
  adopterNickname: string;
  submitDate: string;
  nameAndBreed: string;
  isProcessed: boolean;
}

const TableWrapper = styled.div`
  min-height: 500px;
  table {
    .matching-id {
      width: 95px;
    }
    .adopter-nickname,
    .submit-date,
    .is-processed {
      width: 175px;
    }
    .name-and-breed {
      width: 205px;
    }
    .application-detail {
      width: 109px;
    }
    tbody tr {
      height: 136px;
    }
  }
`;

const UserBoard = () => {
  const listCategory = [
    { uid: 'matching-id', name: 'No' },
    { uid: 'breeder-nickname', name: '브리더' },
    { uid: 'submit-date', name: '제출 날짜' },
    { uid: 'name-and-breed', name: '강아지 이름 (견종명)' },
    { uid: 'application-detail', name: '신청내역' },
    { uid: 'is-processed', name: '분양상태' },
  ];

  const list: ListProps[] = [
    {
      matchingId: 1,
      adopterNickname: '수현',
      submitDate: 'YYYY-MM-DD',
      nameAndBreed: '초코(말티즈)',
      isProcessed: true,
    },
    {
      matchingId: 2,
      adopterNickname: '수현',
      submitDate: 'YYYY-MM-DD',
      nameAndBreed: '초코(말티즈)',
      isProcessed: true,
    },
    {
      matchingId: 3,
      adopterNickname: '수현',
      submitDate: 'YYYY-MM-DD',
      nameAndBreed: '초코(말티즈)',
      isProcessed: false,
    },
  ];
  return (
    <TableWrapper className="table-wrapper">
      <TableBoard category={listCategory}>
        {list?.map(({ matchingId, adopterNickname, submitDate, nameAndBreed, isProcessed }) => {
          return (
            <TableBoard.TbodyItems key={matchingId} isDisabled={!isProcessed}>
              <td className="uid matching-id">{matchingId}</td>
              <td className="adopter-nickname,">{adopterNickname}</td>
              <td className="submit-date">{submitDate}</td>
              <td className="name-and-breed">{nameAndBreed}</td>
              <td className="application-detail">
                <button>상세보기</button>
              </td>
              <td className="is-processed">
                {isProcessed ? (
                  <>
                    <span>분양 승인</span>
                    <button>후기 작성</button>
                  </>
                ) : (
                  '분양거절'
                )}
              </td>
            </TableBoard.TbodyItems>
          );
        })}
      </TableBoard>
    </TableWrapper>
  );
};

export default UserBoard;
